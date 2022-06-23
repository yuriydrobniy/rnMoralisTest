import React, {useEffect, useContext} from 'react';
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
import styles from './styles';

// constants
import {CHAIN_ID} from '../../constants/global';

// types
import {RootState} from '../../store';
import MainButton from '../../components/MainButton/MainButton';
import WalletConnect from '@walletconnect/client';
import StereoImageText from '../../components/StereoImageIcon/StereoImageText';
// import SelectButton from '../../components/SelectButton/SelectButton';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const account = useSelector((state: RootState) => state.account);
  const connectorWC: WalletConnect = useWalletConnect();
  const {connector} = useContext(WalletConnectContext);

  const connectWallet = React.useCallback(() => {
    dispatch(loading());
    return connectorWC.connect();
  }, [connectorWC]);

  useEffect(() => {
    if (connector?.connected) {
      const {accounts, chainId} = connector;
      dispatch(
        success({address: accounts[0], chainId: CHAIN_ID[`${chainId}`]}),
      );
    }
  }, [connector]);

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

  return (
    <View style={styles.container}>
      <View style={styles.rectangle} />
      <View style={styles.rectangle1} />
      <View style={styles.rectangle2} />
      <View style={styles.rectangle3} />
      <View style={styles.wrapper}>
        <View style={styles.logoWrapper}>
          <StereoImageText text={'NFTILLA'} size={80} />
        </View>
        <View style={styles.buttonWrapper}>
          <MainButton
            onPress={connectWallet}
            text={'Sign In'}
            isLoading={account.isLoading}
          />
        </View>
        {/*{rpcList()}*/}
      </View>
    </View>
  );
};

export default LoginScreen;
