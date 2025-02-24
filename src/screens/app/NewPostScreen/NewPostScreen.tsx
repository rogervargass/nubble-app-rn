import React, {useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ListRenderItemInfo,
  Pressable,
} from 'react-native';

import {useCameraRoll, usePermission} from '@services';

import {Screen} from '@components';
import {AppTabScreenProps} from '@routes';

import {Header} from './components/Header';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const NUM_COLUMNS = 4;
const ITEM_SIZE = SCREEN_WIDTH / NUM_COLUMNS;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function NewPostScreen(props: AppTabScreenProps<'NewPostScreen'>) {
  const [selectedImage, setSelectedImage] = useState<string>();
  const permission = usePermission('photoLibrary');
  const havePermission = permission.status === 'granted';
  const {photoList, fetchNextPage} = useCameraRoll(
    havePermission,
    setSelectedImage,
  );

  const flatListRef = useRef<FlatList>(null);

  function onSelectImage(imageUri: string) {
    setSelectedImage(imageUri);
    flatListRef.current?.scrollToOffset({offset: 0, animated: true});
  }

  function renderItem({item}: ListRenderItemInfo<string>) {
    return (
      <Pressable onPress={() => onSelectImage(item)}>
        <Image
          key={item}
          source={{uri: item}}
          style={{width: ITEM_SIZE, height: ITEM_SIZE}}
        />
      </Pressable>
    );
  }

  return (
    <Screen canGoBack title="Novo post" noPaddingHorizontal>
      <FlatList
        ref={flatListRef}
        numColumns={NUM_COLUMNS}
        data={photoList}
        renderItem={renderItem}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
        ListHeaderComponent={
          <Header imageWidth={SCREEN_WIDTH} imageUri={selectedImage} />
        }
      />
    </Screen>
  );
}
