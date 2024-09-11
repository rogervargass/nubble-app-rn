import {useTheme} from '@shopify/restyle';
import {Theme, ThemeColors} from '@theme';
import React from 'react';
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps as RNActivityIndicatorProps,
} from 'react-native';

interface ActivityIndicatorProps
  extends Omit<RNActivityIndicatorProps, 'color'> {
  color: ThemeColors;
}

export function ActivityIndicator({color}: ActivityIndicatorProps) {
  const {colors} = useTheme<Theme>();

  return <RNActivityIndicator color={colors[color]} />;
}
