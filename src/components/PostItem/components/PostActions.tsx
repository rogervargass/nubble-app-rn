import React from 'react';

import {Post} from '@domain';

import {Box, Icon, IconProps, Text, TouchableOpacityBox} from '@components';

type PostActionsProps = Pick<
  Post,
  'reactionCount' | 'commentCount' | 'favoriteCount'
>;
export function PostActions({
  reactionCount,
  commentCount,
  favoriteCount,
}: PostActionsProps) {
  function likePost() {
    console.log('Like post');
  }

  function navigateToComments() {}

  function favoritePost() {}

  return (
    <Box flexDirection="row" mt="s16">
      <Item
        onPress={likePost}
        marked
        icon={{default: 'heart', marked: 'heartFill'}}
        text={reactionCount}
      />
      <Item
        onPress={navigateToComments}
        marked={false}
        icon={{default: 'comment', marked: 'comment'}}
        text={commentCount}
      />
      <Item
        onPress={favoritePost}
        marked={false}
        icon={{default: 'bookmark', marked: 'bookmarkFill'}}
        text={favoriteCount}
      />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  marked: boolean;
  text: number;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
}

function Item({onPress, icon, marked, text}: ItemProps) {
  return (
    <TouchableOpacityBox
      onPress={onPress}
      flexDirection="row"
      alignItems="center"
      mr="s24">
      <Icon
        color={marked ? 'market' : undefined}
        name={marked ? icon.marked : icon.default}
      />
      <Text preset="paragraphSmall" ml="s4" bold>
        {text > 0 ? text : ' '}
      </Text>
    </TouchableOpacityBox>
  );
}
