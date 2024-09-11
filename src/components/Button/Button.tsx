import React from 'react';

import {
  ActivityIndicator,
  Text,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
} from '@components';

import {ButtonPreset, buttonPresets} from './buttonPresets';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean;
}

export function Button({
  title,
  loading,
  preset = 'primary',
  disabled,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];

  return (
    <TouchableOpacityBox
      height={50}
      paddingHorizontal="s20"
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      disabled={disabled || loading}
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator color={buttonPreset.content} />
      ) : (
        <Text preset="paragraphMedium" bold color={buttonPreset.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
