import { useState, useRef } from 'react';
import { Article } from '../api/news.types';
import { fetchTopHeadlines } from '../api/news.service';
import Config from 'react-native-config';

export function useNewsFeed() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [hasMore, setHasMore] = useState(true);

  const fetchingRef = useRef(false);

  async function refresh(q?: string, category?: string) {
    try {
      setLoading(true);
      setError('');
      setHasMore(true);

      const res = await fetchTopHeadlines({
        page: 1,
        pageSize: Number(Config.NEWSAPI_PAGE_SIZE),
        q,
        category,
        country: Config.NEWSAPI_COUNTRY,
      });

      setArticles(res.articles);
      setPage(2);

      if (res.articles.length === 0 || res.articles.length >= res.totalResults) {
        setHasMore(false);
      }
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  async function loadNextPage(q?: string, category?: string) {
    if (isLoading || !hasMore || fetchingRef.current) return;
    fetchingRef.current = true;

    try {
      setLoading(true);
      const res = await fetchTopHeadlines({
        page,
        pageSize: Number(Config.NEWSAPI_PAGE_SIZE),
        q,
        category,
        country: Config.NEWSAPI_COUNTRY,
      });

      if (res.articles.length === 0) {
        setHasMore(false);
      } else {
        setArticles(prev => [...prev, ...res.articles]);
        setPage(prev => prev + 1);

        const loadedCount = (page - 1) * Number(Config.NEWSAPI_PAGE_SIZE) + res.articles.length;
        if (loadedCount >= res.totalResults) {
          setHasMore(false);
        }
      }
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
      fetchingRef.current = false;
    }
  }

  return { articles, refresh, loadNextPage, isLoading, error, hasMore };
}
