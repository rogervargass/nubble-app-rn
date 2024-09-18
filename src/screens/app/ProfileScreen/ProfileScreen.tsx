import React from 'react';
import {RefreshControl, ScrollView} from 'react-native';

import {useUserGetById} from '@domain';

import {ActivityIndicator, Box, ProfileAvatar, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function ProfileScreen({route}: AppScreenProps<'ProfileScreen'>) {
  const userId = route.params.userId;
  const {user, isLoading, isError, isFetching, refetch} =
    useUserGetById(userId);

  return (
    <Screen canGoBack flex={1}>
      {isLoading && <ActivityIndicator />}
      {isError && <Text>erro ao carregar perfil do usuário</Text>}
      {user && (
        <ScrollView
          style={{flex: 1}}
          refreshControl={
            <RefreshControl refreshing={isFetching} onRefresh={refetch} />
          }>
          <Box alignItems="center" flex={1}>
            <ProfileAvatar
              imagemURL={user.profileUrl}
              size={64}
              borderRadius={24}
            />
            <Text preset="headingMedium">{user.fullName}</Text>
            <Text>@{user.username}</Text>
          </Box>
        </ScrollView>
      )}
    </Screen>
  );
}
