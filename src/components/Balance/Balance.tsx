import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import useERC20Balance from '../../hooks/useERC20Balance';
import {WalletSimpleCredential} from '../../interfaces/global';

const Balance = ({account = "0x4b0e8C57001b420F5Bbc00422eF8271f958d1B57", chainId}: WalletSimpleCredential): JSX.Element => {
  const {assets} = useERC20Balance({walletAddress: account, chainId: "goerli"});
  useEffect(() => {console.log('ERC20Balance', assets)}, [assets]);

  return (
    <View
      style={{backgroundColor: "pink"}}
    >
      <Text style={{color: "black"}}>
        `Balance: {assets}`
      </Text>
    </View>
  );
};

export default Balance;
