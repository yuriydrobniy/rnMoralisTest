import React, {memo} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {ChainId} from '../../interfaces/global';

const InfoHat = ({chainId}: ChainId): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{chainId}</Text>
    </View>
  );
};

export default memo(InfoHat);
