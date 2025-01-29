import { PageAPI } from '@api';
import { PostCommentAPI } from '@domain';

const POST_ID = 1;

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
    profile_url: 'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/6-marcelo.png',
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
  data: [postCommentAPI],
};

export const mockedData = {
  POST_ID,
  mockedPostCommentResponse,
};
