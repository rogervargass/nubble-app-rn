import React from 'react';
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps as RNActivityIndicatorProps,
} from 'react-native';

import {useTheme} from '@shopify/restyle';

import {Theme, ThemeColors} from '@theme';

interface ActivityIndicatorProps
  extends Omit<RNActivityIndicatorProps, 'color'> {
  color?: ThemeColors;
}

export function ActivityIndicator({
  color = 'primary',
  ...rest
}: ActivityIndicatorProps) {
  const {colors} = useTheme<Theme>();

  return (
    <RNActivityIndicator
      testID="activity-indicator"
      color={colors[color]}
      {...rest}
    />
  );
}
