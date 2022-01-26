import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
// import {useWalletConnect} from '@walletconnect/react-native-dapp';
import {useWalletConnect} from '../../libs/WalletConnect';
import {useMoralis} from 'react-moralis';

import styles from './styles';

const LoginScreen = () => {
  const connector = useWalletConnect();
  console.log('connector --> ', connector)

  const {authenticate, authError, isAuthenticated} = useMoralis();

  const [visible, setVisible] = React.useState(false);

    // const connectWallet = React.useCallback(() => {
    //     return connector.connect();
    // }, [connector]);

  const handleCryptoLogin = () => {
      console.log('handleCryptoLogin <--', connector.bridge)
      // connector._qrcodeModal.open();
    authenticate({connector})
      .then(() => {
          console.log('then 1 <--')
        if (authError) {
          console.log('Error');
          setVisible(true);
        } else {
          if (isAuthenticated) {
            console.log('Authenticated');
          }
        }
      })
      .catch(() => {});
  };

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={handleCryptoLogin}
        style={styles.buttonStyle}>
        <Text style={styles.highlight}>App.tsx</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
