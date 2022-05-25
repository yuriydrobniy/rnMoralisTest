import React, {useEffect, useContext, useState} from 'react';
import {View} from 'react-native';
import {
  useWalletConnect,
  WalletConnectContext,
} from '@walletconnect/react-native-dapp';
import {useDispatch, useSelector} from 'react-redux';

// actions
import {loading, success} from '../../store/slice/accountSlice';

// components

// hooks
// import useERC20Transfers from '../../hooks/useERC20Transfers';

// utils
// import {getSignerThrowEthers} from '../../utils/getSignerThrowEthers';

// styles
// import styles from './styles';

// constants
import {CHAIN_ID} from '../../constants/global';

// types
import {RootState} from '../../store';
import MainButton from '../../components/MainButton/MainButton';
import WalletConnect from '@walletconnect/client';
// import SelectButton from '../../components/SelectButton/SelectButton';

const LoginScreen = () => {
  const account = useSelector((state: RootState) => state.account);
  console.log('account', account);
  const dispatch = useDispatch();

  /*
  const [currentProvider, setCurrentProvider] = useState(null);
  useEffect(() => {
    const {signer, provider} = getSignerThrowEthers();
    // JsonRpcProvider - a speedy node like goerli
    console.log('SIGNER/Provider from JsonRpcProvider:', {signer, provider});
    setCurrentProvider(provider);
  }, []);
  console.log('!!currentProvider', currentProvider);

   */

  const connectorWC: WalletConnect = useWalletConnect();
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

  /*
  const [rpcProvider, setRpcProvider] = useState(null);
  const onPressRpcProvider = React.useCallback(provider => {
    setRpcProvider(provider);
  }, []);

  const rpcList = React.useCallback(() => {
    return (
      <>
        {Object.keys(CHAIN_ID).map(key => {
          return (
            <SelectButton
              key={key}
              onPress={onPressRpcProvider}
              text={CHAIN_ID[key]}
              checked={CHAIN_ID[key] === rpcProvider}
            />
          );
        })}
      </>
    );
  }, [rpcProvider]);
   */

  const {connector} = useContext(WalletConnectContext);
  // console.log('-VALUE-', value.connector);

  useEffect(() => {
    if (connector) {
      const {accounts, chainId} = connector;
      dispatch(
        success({address: accounts[0], chainId: CHAIN_ID[`${chainId}`]}),
      );
    }
  }, [connector?.chainId]);

  console.log('isLoading', account.isLoading);

  return (
    <View style={{backgroundColor: '#343434', flex: 1}}>
      <MainButton
        onPress={connectWallet}
        text={'Sign In'}
        isLoading={account.isLoading}
      />
      {/*{rpcList()}*/}
    </View>
  );
};

export default LoginScreen;
