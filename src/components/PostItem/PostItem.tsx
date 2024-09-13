import React from 'react';

import {Post} from '@domain';

import {Box} from '@components';

import {PostActions} from './components/PostActions';
import {PostHeader} from './components/PostHeader';
import PostImage from './components/PostImage';

interface PostItemProps {
  post: Post;
}

export function PostItem({post}: PostItemProps) {
  return (
    <Box paddingHorizontal="s24" marginBottom="s24">
      <PostHeader author={post.author} />
      <PostImage imageURL={post.imageURL} />
      <PostActions
        commentCount={post.commentCount}
        reactionCount={post.reactionCount}
        favoriteCount={post.favoriteCount}
      />
    </Box>
  );
}
