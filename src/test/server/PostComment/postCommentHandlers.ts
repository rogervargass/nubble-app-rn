import { BASE_URL, PageAPI } from '@api';
import { POST_COMMENT_PATH, PostCommentAPI } from '@domain';
import { http, HttpResponse } from 'msw';

import { mockedData } from './mocks';

export const postCommentHandlers = [
  http.get(`${BASE_URL}${POST_COMMENT_PATH}`, async () => {
    const response: PageAPI<PostCommentAPI> = mockedData.mockedPostCommentResponse;

    return HttpResponse.json(response, {status: 200});
  }),
];
