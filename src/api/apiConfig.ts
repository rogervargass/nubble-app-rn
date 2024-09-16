import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ.rOt_CYSp4ZTjXtz7PYwKfcImngQqH69bIT8GZ72YFfWY7nOt7E1cz_ADu8-r',
  },
});
