import client from './client';
import { TopHeadlinesResponse } from './news.types';

interface FetchParams {
  page: number;
  pageSize: number;
  q?: string;
  category?: string;
  country?: string;
}

export async function fetchTopHeadlines(params: FetchParams) {
  const { data } = await client.get<TopHeadlinesResponse>('/top-headlines', {
    params,
  });
  console.log('data', data);
  return data;
}
