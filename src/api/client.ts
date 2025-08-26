import axios from 'axios';
import Config from 'react-native-config';

const client = axios.create({
  baseURL: Config.NEWSAPI_BASE_URL,
  timeout: 10000,
  params: {
    apiKey: Config.NEWSAPI_KEY,
  },
});

export default client;
