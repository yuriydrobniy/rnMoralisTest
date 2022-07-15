import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';

// store
import {RootState} from '../../store';

// components
import Balance from '../../components/Balance/Balance';

// styles
import styles from './styles';

// types
import NFTList from '../../components/NFTList/NFTList';
import {AccountState} from '../../store/slice/accountSlice';

const HomeScreen = () => {
  const account: AccountState = useSelector(
    (state: RootState) => state.account,
  );

  return (
    <View style={styles.container}>
      <Balance chainId={account.chainId} address={account.address} />
      <View style={styles.containerText}>
        <Text style={styles.text}>Your NFT</Text>
      </View>
      <NFTList chainId={account.chainId} address={account.address} />
    </View>
  );
};

export default HomeScreen;
