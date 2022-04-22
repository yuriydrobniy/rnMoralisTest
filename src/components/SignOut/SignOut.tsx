import React, {useContext, useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {WalletConnectContext} from '@walletconnect/react-native-dapp';
import {persistor} from '../../store';
import styles from './styles';

const SignOut = (): JSX.Element => {
  const {connector} = useContext(WalletConnectContext);

  const onPress = async () => {
    try {
      await connector?.killSession();
    } catch (e) {
      console.log('Error from killSession()', e);
    }
  };

  useEffect(() => {
    const asyncPurge = async (): Promise<void> => {
      await persistor.purge();
    };
    if (!connector?.accounts.length) {
      asyncPurge();
    }
  }, [connector]);

  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.buttonText}>Sign Out</Text>
    </TouchableOpacity>
  );
};

export default SignOut;
