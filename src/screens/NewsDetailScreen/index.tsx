import React from 'react';
import { Button, Linking, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import { Container, Title, ArticleImage, Content } from './styles';
import { getImageOrPlaceholder } from '../../utils/image';
import { Text } from 'react-native-gesture-handler';
import { formatDate } from '../../utils/date';

type Props = RouteProp<RootStackParamList, 'NewsDetail'>;

export default function NewsDetailScreen() {
  const route = useRoute<Props>();
  const { article } = route.params;

  return (
    <Container>
      <Title>{article.title}</Title>
      <ArticleImage source={getImageOrPlaceholder(article.urlToImage)} />

      <Content>{article.content}</Content>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 20,
        }}
      >
        <Text style={{ fontSize: 12, color: 'gray' }}>{article.author}</Text>
        <Text style={{ fontSize: 12, color: 'gray' }}>
          {formatDate(article.publishedAt)}
        </Text>
      </View>
      {article.url ? (
        <Button
          title="Открыть в браузере"
          onPress={() => Linking.openURL(article.url)}
        />
      ) : (
        <></>
      )}
    </Container>
  );
}
