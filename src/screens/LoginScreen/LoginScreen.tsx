import React, {useEffect, useContext, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {
  useWalletConnect,
  WalletConnectContext,
} from '@walletconnect/react-native-dapp';
// import {useWalletConnect} from '../../libs/WalletConnect';
import {useMoralis} from 'react-moralis';
// import Moralis from 'moralis';

// components
import TransfersList from '../../components/TransfersList/TransfersList';
import Balance from '../../components/Balance/Balance';
import Counter from '../../components/Counter/Counter';

// hooks
// import useERC20Transfers from '../../hooks/useERC20Transfers';

// utils
import {getSignerThrowEthers} from '../../utils/getSignerThrowEthers';

// styles
import styles from './styles';

const LoginScreen = () => {

  const [currentProvider, setCurrentProvider] = useState(null);

  useEffect(() => {
    const {signer, provider} = getSignerThrowEthers();
    console.log("SIGNER", signer);
    console.log("Provider -> ", provider);
    setCurrentProvider(provider);
  }, []);

  useEffect(() => {
    async function getBalance() {
      try {
        const balance = await currentProvider.getBalance("0x4b0e8C57001b420F5Bbc00422eF8271f958d1B57");
        console.log('balance -->', balance);
      } catch (e) {
        console.error(e);
      }
    }

    if (currentProvider) {
      // getBalance();
    }
  }, [currentProvider]);

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
  };
  // console.log('connector --> ', connector);

  const {authenticate, authError, isAuthenticated} = useMoralis();

  // console.log('?!isAuthenticated', isAuthenticated);

  // const [visible, setVisible] = React.useState(false);

  const connectWallet = React.useCallback(() => {
    return connectorWC.connect();
  }, [connectorWC]);

  const value = useContext(WalletConnectContext);
  // console.log('-VALUE-', value.connector);

  useEffect(() => {
    if (value?.connector) {
      const {accounts, chainId} = value.connector;
      // console.log({accounts, chainId});
      // const { ERC20Transfers } = useERC20Transfers({walletAddress: accounts[1], chainId});
      // useEffect(() => {}, [ERC20Transfers]);
      // console.log("RES", ERC20Transfers)
    }
  }, [value.connector]);

  const handleCryptoLogin = () => {
    // console.log('handleCryptoLogin <--', connector.bridge)
    // connector._qrcodeModal.open();
    authenticate({connector, provider: 'walletConnect'})
      .then(() => {
        console.log('then 1 <--');
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
      {value?.connector && (
        <View>
          <TransfersList
            chainId={value.connector.chainId}
            account={value.connector.accounts[0]}
          />
          <Balance
            chainId={value.connector.chainId}
            account={value.connector.accounts[0]}
          />
        </View>
      )}
      <Counter />
    </View>
  );
};

export default LoginScreen;
