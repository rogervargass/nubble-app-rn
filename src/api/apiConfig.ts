import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ.pqyrg5k9J9q88BOVJUdfhIgqxV72HtIp9VGTDVI8qAyf868kJm7aSA3wwIgE',
  },
});
