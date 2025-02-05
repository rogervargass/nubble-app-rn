import {PageAPI} from '@api';
import {AuthCredentials, PostCommentAPI, userAdapter, UserAPI} from '@domain';

const POST_ID = 1;

const mateusUserAPI: UserAPI = {
  id: 7,
  first_name: 'Mateus',
  last_name: 'de Souza',
  username: 'mateussouza',
  email: 'msouza@coffstack.com',
  profile_url:
    'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/8-mateus.png',
  is_online: false,
  full_name: 'Mateus de Souza',
};

const mateusAuthCredentials: AuthCredentials = {
  token: 'access-token',
  tokenExpiresAt: '2045-10-07T12:08:50.433+00:00',
  refreshToken: 'refresh-token',
  user: userAdapter.toUser(mateusUserAPI),
};

const mateusPostCommentAPI: PostCommentAPI = {
  id: 113,
  message: 'comentário do mateus',
  user_id: 7,
  post_id: POST_ID,
  created_at: '2023-09-18T18:29:52.000000Z',
  updated_at: '2023-09-21T18:29:52.000000Z',
  user: mateusUserAPI,
  meta: {},
};

const postCommentAPI: PostCommentAPI = {
  id: 97,
  message: 'meu comentário',
  user_id: 4,
  post_id: POST_ID,
  created_at: '2023-09-18T18:29:52.000000Z',
  updated_at: '2023-09-21T18:29:52.000000Z',
  user: {
    id: 4,
    first_name: 'Marcelo',
    last_name: 'Tavares',
    username: 'celotavares',
    email: 'celotavares@coffstack.com',
    profile_url:
      'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/6-marcelo.png',
    is_online: false,
    full_name: 'Marcelo Tavares',
  },

  meta: {},
};

export const mockedPostCommentResponse: PageAPI<PostCommentAPI> = {
  meta: {
    total: 1,
    per_page: 10,
    current_page: 1,
    last_page: 1,
    first_page: 1,
    first_page_url: '/?page=1',
    last_page_url: '/?page=1',
    next_page_url: null,
    previous_page_url: null,
  },
  data: [postCommentAPI, mateusPostCommentAPI],
};

export const mockedData = {
  POST_ID,
  mockedPostCommentResponse,
  postCommentAPI,
  mateusAuthCredentials,
  mateusPostCommentAPI,
};
