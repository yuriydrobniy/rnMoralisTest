import React, {memo} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {StereoImageIconProps} from '../../interfaces/components';

const StereoImageText = ({text, size}: StereoImageIconProps): JSX.Element => {
  const fontSize = {fontSize: size};
  return (
    <View>
      <Text style={[styles.iconFace, fontSize]}>{text}</Text>
      <Text style={[styles.iconFace1, fontSize]}>{text}</Text>
      <Text style={[styles.iconFace2, fontSize]}>{text}</Text>
    </View>
  );
};

export default memo(StereoImageText);
