import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import useERC20Balance from '../../hooks/useERC20Balance';
import {WalletSimpleCredential} from '../../interfaces/global';

const Balance = ({address, chainId}: WalletSimpleCredential): JSX.Element => {
  const {balance} = useERC20Balance({address, chainId});
  useEffect(() => {console.log('ERC20Balance', balance)}, [balance]);

  return (
    <View
      style={{backgroundColor: "pink"}}
    >
      <Text style={{color: "black"}}>
        Balance: {balance}
      </Text>
    </View>
  );
};

export default Balance;
