import React, {useEffect, useContext, useState} from 'react';
import {View} from 'react-native';
import {
  useWalletConnect,
  WalletConnectContext,
} from '@walletconnect/react-native-dapp';
import {useDispatch, useSelector} from 'react-redux';

// actions
import {loading, success, failed} from '../../store/slice/accountSlice';

// components

// hooks
// import useERC20Transfers from '../../hooks/useERC20Transfers';

// utils
import {getSignerThrowEthers} from '../../utils/getSignerThrowEthers';

// styles
import styles from './styles';

// constants
import {CHAIN_ID} from '../../constants/global';

// types
import {RootState} from '../../store';
import MainButton from '../../components/MainButton/MainButton';

const LoginScreen = () => {
  const account = useSelector((state: RootState) => state.account);
  console.log('account', account);
  const dispatch = useDispatch();
  const [currentProvider, setCurrentProvider] = useState(null);

  useEffect(() => {
    const {signer, provider} = getSignerThrowEthers();
    console.log('SIGNER/Provider', {signer, provider});
    setCurrentProvider(provider);
  }, []);

  console.log('!!currentProvider', currentProvider);

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
  // const connector = {
  //   activate: () => connectorWC.connect(),
  // };
  // console.log('connector --> ', connector);

  // const {authenticate, authError, isAuthenticated} = useMoralis();

  // console.log('?!isAuthenticated', isAuthenticated);

  // const [visible, setVisible] = React.useState(false);

  const connectWallet = React.useCallback(() => {
    dispatch(loading());
    return connectorWC.connect();
  }, [connectorWC]);

  const {connector} = useContext(WalletConnectContext);
  // console.log('-VALUE-', value.connector);

  useEffect(() => {
    if (connector) {
      // console.log('value.connector', connector);
      const {accounts, chainId} = connector;
      // console.log({accounts, chainId});
      dispatch(
        success({address: accounts[0], chainId: CHAIN_ID[`${chainId}`]}),
      );
    }
  }, [connector?.chainId]);

  // const handleCryptoLogin = () => {
  //   console.log('handleCryptoLogin <--', connector.bridge)
  //   connector._qrcodeModal.open();
  //   authenticate({connector, provider: 'walletConnect'})
  //     .then(() => {
  //       console.log('then 1 <--');
  //       if (authError) {
  //         console.log('Error');
  //         // setVisible(true);
  //       } else {
  //         if (isAuthenticated) {
  //           console.log('Authenticated');
  //         }
  //       }
  //     })
  //     .catch(() => {});
  // };

  console.log('isLoading', account.isLoading);

  return (
    <View style={{backgroundColor: '#343434', flex: 1}}>
      <MainButton
        onPress={connectWallet}
        text={'Sign In'}
        isLoading={account.isLoading}
      />
    </View>
  );
};

export default LoginScreen;
