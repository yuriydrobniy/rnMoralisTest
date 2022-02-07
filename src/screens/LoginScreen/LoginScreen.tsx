import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useWalletConnect} from '@walletconnect/react-native-dapp';
// import {useMoralis} from 'react-moralis';

import styles from './styles';

const LoginScreen = () => {
  const connector = useWalletConnect();
  console.log('connector --> ', connector)

  // const {authenticate, authError, isAuthenticated} = useMoralis();

  // const [visible, setVisible] = React.useState(false);

  const connectWallet = () => {
    return connector.connect();
  };

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={connectWallet}
        style={styles.buttonStyle}>
        <Text style={styles.highlight}>App.tsx</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
