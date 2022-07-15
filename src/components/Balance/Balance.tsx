import React, {memo, useEffect} from 'react';
import {Text, View} from 'react-native';
import useERC20Balance from '../../hooks/useERC20Balance';
import {WalletSimpleCredential} from '../../interfaces/global';
import styles from './styles';

const Balance = ({address, chainId}: WalletSimpleCredential): JSX.Element => {
  const {balance} = useERC20Balance({address, chainId});
  useEffect(() => {
    console.log('ERC20Balance', balance);
  }, [balance]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Balance: </Text>
      <Text style={styles.textAmount}>{balance?.slice(0, 8) || '0'} ETH</Text>
    </View>
  );
};

export default memo(Balance);
