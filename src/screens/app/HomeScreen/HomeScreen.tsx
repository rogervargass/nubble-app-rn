import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {Post, usePostList} from '@domain';
import {useScrollToTop} from '@react-navigation/native';

import {PostItem, Screen} from '@components';
import {AppTabScreenProps} from '@routes';

import {HomeEmpty} from './components/HomeEmpty';
import {HomeHeader} from './components/HomeHeader';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  const {
    list: postList,
    isLoading,
    isError,
    refresh,
    fetchNextPage,
  } = usePostList();
  const flatListRef = React.useRef<FlatList<Post>>(null);
  useScrollToTop(flatListRef);

  function renderPost({item}: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  return (
    <Screen style={$screen}>
      <FlatList
        ref={flatListRef}
        showsVerticalScrollIndicator={false}
        data={postList}
        keyExtractor={post => post.id.toString()}
        renderItem={renderPost}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refresh} />
        }
        refreshing={isLoading}
        contentContainerStyle={{flex: postList.length === 0 ? 1 : undefined}}
        ListHeaderComponent={HomeHeader}
        ListEmptyComponent={
          <HomeEmpty refetch={refresh} error={isError} loading={isLoading} />
        }
      />
    </Screen>
  );
}

const $screen: StyleProp<ViewStyle> = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
  flex: 1,
};
