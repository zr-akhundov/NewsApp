import { Article } from "../api/news.types";

export type RootStackParamList = {
  NewsList: undefined;
  NewsDetail: { article: Article };
};
