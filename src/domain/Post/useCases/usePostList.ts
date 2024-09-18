import {QueryKeys, usePaginatedList} from '@infra';

import {postService} from '../postService';
import {Post} from '../postType';

export function usePostList() {
  return usePaginatedList<Post>([QueryKeys.PostList], postService.getList);
}
