import React, {useEffect, useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useWalletConnect, WalletConnectContext} from '@walletconnect/react-native-dapp';
// import {useWalletConnect} from '../../libs/WalletConnect';
import {useMoralis} from 'react-moralis';
// import Moralis from 'moralis';

import styles from './styles';
// import useERC20Transfers from '../../hooks/useERC20Transfers';
import TransfersList from '../../components/TransfersList/TransfersList';

const LoginScreen = () => {

  // useEffect(() => {
  //   console.log('HERE');
  //   async function go() {
  //     const user = await Moralis.authenticate({ provider: "walletconnect" })
  //     console.log('-= |USER| =-', user)
  //   }
  //
  //   go()
  // }, [])

  // useEffect(() => {
  //   console.log('HERE');
  //   async function go() {
  //     const user = await Moralis.authenticate({ provider: "walletconnect" })
  //     console.log('-= |USER| =-', user)
  //   }
  //
  //   go()
  // }, [])

  const connectorWC = useWalletConnect();
  const connector = {
    activate: () => connectorWC.connect(),
  }
  console.log('connector --> ', connector)

  const {authenticate, authError, isAuthenticated} = useMoralis();

  // const [visible, setVisible] = React.useState(false);

    const connectWallet = React.useCallback(() => {
        return connectorWC.connect();
    }, [connectorWC]);

  const value = useContext(WalletConnectContext);
  console.log('-VALUE-', value.connector);

  useEffect(() => {
    if (value?.connector) {
      const {accounts, chainId} = value.connector
      console.log({accounts, chainId})
      // const { ERC20Transfers } = useERC20Transfers({walletAddress: accounts[1], chainId});
      // useEffect(() => {}, [ERC20Transfers]);
      // console.log("RES", ERC20Transfers)
    }
  }, [value.connector])

  const handleCryptoLogin = () => {
      // console.log('handleCryptoLogin <--', connector.bridge)
      // connector._qrcodeModal.open();
    authenticate({connector, provider: 'walletConnect'})
      .then(() => {
          console.log('then 1 <--')
        if (authError) {
          console.log('Error');
          // setVisible(true);
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
        onPress={connectWallet}
        style={styles.buttonStyle}>
        <Text style={styles.highlight}>App.tsx</Text>
      </TouchableOpacity>
      {value?.connector && <TransfersList chainId={value.connector.chainId} account={value.connector.accounts[1]} />}
    </View>
  );
};

export default LoginScreen;
