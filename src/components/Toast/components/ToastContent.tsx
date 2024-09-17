import React from 'react';
import {Dimensions} from 'react-native';

import {Toast, ToastPosition, ToastType} from '@services';

import {$shadowProps} from '@theme';

import {Box, BoxProps} from '../../Box/Box';
import {Icon, IconProps} from '../../Icon/Icon';
import {Text} from '../../Text/Text';

const MAX_WIDTH = Dimensions.get('screen').width * 0.95;

interface Props {
  toast: Toast;
}

export function ToastContent({toast}: Props) {
  const position: ToastPosition = toast?.position || 'top';
  const type: ToastType = toast.type || 'success';

  return (
    <Box {...$boxStyle} style={[{[position]: 100}, $shadowProps]}>
      <Icon {...mapTypeToIcon[type]} />
      <Text style={{flexShrink: 1}} preset="paragraphMedium" bold>
        {toast.message}
      </Text>
    </Box>
  );
}

const mapTypeToIcon: Record<ToastType, IconProps> = {
  success: {color: 'success', name: 'checkRound'},
  error: {color: 'error', name: 'errorRound'},
};

const $boxStyle: BoxProps = {
  position: 'absolute',
  padding: 's16',
  alignSelf: 'center',
  flexDirection: 'row',
  gap: 's16',
  alignItems: 'center',
  borderRadius: 's16',
  backgroundColor: 'background',
  opacity: 0.95,
  maxWidth: MAX_WIDTH,
};
