import React from 'react';

import {Post} from '@domain';

import {Box, Text} from '@components';

type PostBottomProps = Pick<Post, 'author' | 'text' | 'commentCount'>;

export function PostBottom({author, text, commentCount}: PostBottomProps) {
  const commentText = getCommentText(commentCount);

  return (
    <Box mt="s16">
      <Text preset="paragraphMedium" bold>
        {author.userName}
      </Text>
      <Text preset="paragraphMedium" color="gray1">
        {text}
      </Text>
      {commentText && (
        <Text preset="paragraphSmall" mt="s8" bold color="primary">
          {commentText}
        </Text>
      )}
    </Box>
  );
}

function getCommentText(commentCount: number): string | null {
  if (commentCount === 0) {
    return null;
  }

  if (commentCount === 1) {
    return 'ver comentário';
  }

  return `ver ${commentCount} comentários`;
}
