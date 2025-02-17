import {setupServer} from 'msw/node';

import {postCommentHandlers} from './PostComment/postCommentHandlers';
import {userHandlers} from './User/UserHandlers';

export const server = setupServer(...postCommentHandlers, ...userHandlers);

export {mockedData as mockedPostComment} from './PostComment/mocks';

export {userMocked} from './User/UserMocked';

export {resetInMemoryResponse} from './PostComment/postCommentHandlers';
