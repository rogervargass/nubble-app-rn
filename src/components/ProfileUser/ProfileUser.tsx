import React from 'react';
import {GestureResponderEvent} from 'react-native';

import {User} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {
  Box,
  PressableBox,
  PressableBoxProps,
  ProfileAvatar,
  ProfileAvatarProps,
  Text,
} from '@components';

type Props = {
  user: Pick<User, 'username' | 'profileUrl' | 'id'>;
  avatarProps?: Omit<ProfileAvatarProps, 'imagemURL'>;
  RightComponent?: React.ReactElement;
} & PressableBoxProps;

export function ProfileUser({
  user,
  avatarProps,
  onPress,
  RightComponent,
  ...pressableBoxProps
}: Props) {
  const navigation = useNavigation();

  function handleOnPress(event: GestureResponderEvent) {
    if (onPress) {
      onPress(event);
    }
    navigation.navigate('ProfileScreen', {userId: user.id});
  }

  return (
    <PressableBox
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      mb="s16"
      onPress={handleOnPress}
      {...pressableBoxProps}>
      <Box flexDirection="row" alignItems="center">
        <ProfileAvatar {...avatarProps} imagemURL={user.profileUrl} />
        <Text ml="s12" preset="paragraphMedium" semiBold>
          {user.username}
        </Text>
      </Box>
      {RightComponent}
    </PressableBox>
  );
}
