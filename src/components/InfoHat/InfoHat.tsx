import React, {memo} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {ChainIdType} from '../../interfaces/global';

const InfoHat = ({chainId}: {chainId: ChainIdType}): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{chainId}</Text>
    </View>
  );
};

export default memo(InfoHat);
