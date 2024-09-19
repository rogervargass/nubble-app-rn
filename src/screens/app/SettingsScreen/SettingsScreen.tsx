import React from 'react';

import {useAuthSignOut} from '@domain';

import {Button, Screen} from '@components';
import {AppScreenProps} from '@routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SettingsScreen(props: AppScreenProps<'SettingScreen'>) {
  const {isLoading, signOut} = useAuthSignOut();
  return (
    <Screen canGoBack title="Configurações">
      <Button loading={isLoading} title="Sair da conta" onPress={signOut}>
        SettingScreen
      </Button>
    </Screen>
  );
}
