import React, {memo} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {StereoImageIconType} from '../../interfaces/components';
import Icon from 'react-native-vector-icons/MaterialIcons';

const StereoImageIcon = ({name, size}: StereoImageIconType): JSX.Element => {
  return (
    <View>
      <Icon name={name} size={size} style={styles.iconFace} />
      <Icon name={name} size={size} style={styles.iconFace1} />
      <Icon name={name} size={size} style={styles.iconFace2} />
    </View>
  );
};

export default memo(StereoImageIcon);
