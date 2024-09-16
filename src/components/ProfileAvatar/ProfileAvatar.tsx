import React from 'react';
import {Image} from 'react-native';

interface ProfileAvatarProps {
  imagemURL: string;
  size?: number;
  borderRadius?: number;
}

export function ProfileAvatar({
  imagemURL,
  size = 32,
  borderRadius = 14,
}: ProfileAvatarProps) {
  return (
    <Image
      source={{uri: imagemURL}}
      style={{width: size, height: size, borderRadius: borderRadius}}
    />
  );
}
