import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Article } from '../api/news.types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { getImageOrPlaceholder } from '../utils/image';
import { CardImage } from './styles';
import { formatDate } from '../utils/date';

type NavProp = NativeStackNavigationProp<RootStackParamList, 'NewsList'>;

export default function NewsCard({ article }: { article: Article }) {
  const navigation = useNavigation<NavProp>();

  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        padding: 12,
        borderBottomWidth: 1,
        borderColor: '#eee',
      }}
      onPress={() => navigation.navigate('NewsDetail', { article })}
    >
      <CardImage source={getImageOrPlaceholder(article.urlToImage)} />
      <View style={{ flex: 1 }}>
        <Text numberOfLines={2} style={{ fontWeight: 'bold' }}>
          {article.title}
        </Text>
        <Text style={{ fontSize: 12, color: 'gray', marginTop: 5 }}>
          {article.source.name}
        </Text>
        <Text style={{ fontSize: 12, color: 'gray', marginTop: 5 }}>
          {formatDate(article.publishedAt)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
