import React, {useEffect} from 'react';
import {Dimensions} from 'react-native';

import {useToast} from '@services';

import {$shadowProps} from '@theme';

import {Box, BoxProps} from '../Box/Box';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';

const MAX_WIDTH = Dimensions.get('screen').width * 0.95;

export function Toast() {
  const {toast, hiddenToast} = useToast();

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        hiddenToast();
      }, 2000);
    }
  }, [toast, hiddenToast]);

  if (!toast) {
    return null;
  }

  return (
    <Box bottom={50} {...$boxStyle}>
      <Icon color="success" name="checkRound" />
      <Text style={{flexShrink: 1}} preset="paragraphMedium" bold>
        {toast.message}
      </Text>
    </Box>
  );
}

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
  style: {...$shadowProps},
};
