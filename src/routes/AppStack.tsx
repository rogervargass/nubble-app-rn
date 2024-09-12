import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SettingsScreen} from '@screens';

import {AppTabNavigator} from './AppTabNavigator';

export type AppStackParamList = {
  AppTabNavigator: undefined;
  SettingScreen: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, fullScreenGestureEnabled: true}}
      initialRouteName="AppTabNavigator">
      <Stack.Screen name="AppTabNavigator" component={AppTabNavigator} />
      <Stack.Screen name="SettingScreen" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
