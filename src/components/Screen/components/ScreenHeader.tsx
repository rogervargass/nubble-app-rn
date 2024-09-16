import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Box, Icon, Text, TouchableOpacityBox} from '@components';

import {ScreenProps} from '../Screen';

const ICON_SIZE = 20;
type Props = Pick<ScreenProps, 'title' | 'canGoBack'>;
export function ScreenHeader({canGoBack, title, ...boxProps}: Props) {
  const navigation = useNavigation();

  return (
    <Box
      flexDirection="row"
      mb={canGoBack ? 's24' : undefined}
      alignItems="center"
      {...boxProps}>
      {canGoBack && (
        <TouchableOpacityBox
          flexDirection="row"
          alignItems="center"
          onPress={navigation.goBack}>
          <Icon size={ICON_SIZE} name="arrowLeft" color="primary" />
          {!title && (
            <Text preset="paragraphMedium" semiBold ml="s8">
              Voltar
            </Text>
          )}
        </TouchableOpacityBox>
      )}
      {title && (
        <Text
          preset="headingSmall"
          textAlign="center"
          style={{flex: 1, marginRight: ICON_SIZE}}>
          {title}
        </Text>
      )}
    </Box>
  );
}
