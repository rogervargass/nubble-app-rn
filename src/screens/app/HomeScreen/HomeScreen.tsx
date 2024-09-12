import React from 'react';

import {Button, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function HomeScreen({navigation}: AppScreenProps<'HomeScreen'>) {
  return (
    <Screen>
      <Text preset="headingLarge">Home</Text>
      <Button
        onPress={() => navigation.navigate('SettingScreen')}
        title="settings"
      />
    </Screen>
  );
}
