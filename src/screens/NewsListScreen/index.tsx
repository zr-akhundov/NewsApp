import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useNewsFeed } from '../../hooks/useNewsFeed';
import NewsCard from '../../components/NewsCard';
import Loader from '../../components/Loader';
import ErrorView from '../../components/ErrorView';
import SearchBar from '../../components/SearchBar';
import CategoryFilter from '../../components/CategoryFilter';
import EmptyState from '../../components/EmptyState';
import { Container, ListFooter } from './styles';

export default function NewsListScreen() {
  const { articles, loadNextPage, isLoading, error, refresh, hasMore } =
    useNewsFeed();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [category, setCategory] = useState<string>('');

  useEffect(() => {
    if (!isLoading) {
      refresh(searchQuery, category);
    }
  }, [searchQuery, category]);

  if (isLoading && articles.length === 0) return <Loader />;
  if (error) {
    return (
      <ErrorView
        message={error}
        onRetry={() => refresh(searchQuery, category)}
      />
    );
  }
  return (
    <Container>
      <SearchBar onSearch={q => setSearchQuery(q)} />
      <CategoryFilter selected={category} onSelect={setCategory} />
      {articles.length === 0 ? (
        <EmptyState message="Нет новостей" />
      ) : (
        <FlatList
          data={articles}
          keyExtractor={(item, index) => item.url + index}
          renderItem={({ item }) => <NewsCard article={item} />}
          onEndReached={() => {
            if (!isLoading && hasMore) {
              loadNextPage(searchQuery, category);
            }
          }}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            isLoading ? (
              <ListFooter>
                <Loader />
              </ListFooter>
            ) : !hasMore ? (
              <ListFooter>
                <EmptyState message="Больше новостей нет" />
              </ListFooter>
            ) : (
              <></>
            )
          }
        />
      )}
    </Container>
  );
}
