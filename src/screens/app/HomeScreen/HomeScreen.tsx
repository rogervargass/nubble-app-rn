import React from 'react';

import {Button, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
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
