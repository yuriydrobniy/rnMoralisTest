import React, {useContext, useEffect, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {WalletConnectContext} from '@walletconnect/react-native-dapp';
import {persistor} from '../../store';
import styles from './styles';
import StereoImageText from '../StereoImageIcon/StereoImageText';

const SignOut = ({likeArt}: {likeArt?: boolean}): JSX.Element => {
  const {connector} = useContext(WalletConnectContext);
  const [isTheEnd, setTheEnd] = useState(false);

  const onPress = async () => {
    try {
      await connector?.killSession();
      setTheEnd(true);
    } catch (e) {
      console.log('Error from killSession()', e);
    }
  };

  useEffect(() => {
    const asyncPurge = async (): Promise<void> => {
      await persistor.purge();
    };
    if (!connector?.accounts.length && isTheEnd) {
      asyncPurge();
    }
  }, [connector, isTheEnd]);

  if (likeArt) {
    return (
      <TouchableOpacity onPress={onPress}>
        <StereoImageText text={'Sign Out'} size={48} />
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.buttonText}>Sign Out</Text>
    </TouchableOpacity>
  );
};

export default SignOut;
