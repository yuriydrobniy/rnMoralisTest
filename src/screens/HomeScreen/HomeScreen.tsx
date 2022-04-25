import React, {useEffect, useContext, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useMoralis} from 'react-moralis';
import {useDispatch, useSelector} from 'react-redux';

// components
import TransfersList from '../../components/TransfersList/TransfersList';
import Balance from '../../components/Balance/Balance';
import Counter from '../../components/Counter/Counter';

// styles
import styles from './styles';

// types
import {RootState} from '../../store';
import SignOut from '../../components/SignOut/SignOut';

const HomeScreen = () => {
  const account = useSelector((state: RootState) => state.account);
  console.log('account', account);

  return (
    <View>
      <View>
        {/*<TransfersList chainId={account.chainId} account={account.address} />*/}
        <Balance chainId={account.chainId} address={account.address} />
      </View>
      <Counter />
      <SignOut />
    </View>
  );
};

export default HomeScreen;
