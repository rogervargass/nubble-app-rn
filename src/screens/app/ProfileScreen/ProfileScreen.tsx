import React from 'react';

import {useUserGetById} from '@domain';

import {ActivityIndicator, Box, ProfileAvatar, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function ProfileScreen({route}: AppScreenProps<'ProfileScreen'>) {
  const userId = route.params.userId;
  // const {user, isLoading, isError, refetch} = useUserGetById(userId)
  const {user, loading, error} = useUserGetById(userId);

  return (
    <Screen canGoBack>
      {loading && <ActivityIndicator />}
      {error && <Text>erro ao carregar perfil do usuário</Text>}
      {user && (
        <Box alignItems="center">
          <ProfileAvatar
            imagemURL={user.profileUrl}
            size={64}
            borderRadius={24}
          />
          <Text preset="headingMedium">{user.fullName}</Text>
          <Text>@{user.username}</Text>
        </Box>
      )}
    </Screen>
  );
}
