import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';

// store
import {RootState} from '../../store';

// components
// import PictureProcessing from '../../components/PictureProcessing/PicturePocessing';
import Balance from '../../components/Balance/Balance';
// import Counter from '../../components/Counter/Counter';
import SignOut from '../../components/SignOut/SignOut';
import MainButton from '../../components/MainButton/MainButton';

// styles
import styles from './styles';

// types
import {HomeNavigationProps} from '../../navigation';
import NFTList from '../../components/NFTList/NFTList';
import {AccountState} from '../../store/slice/accountSlice';
import PictureProcessing from '../../components/PictureProcessing/PicturePocessing';

const HomeScreen = ({navigation}: HomeNavigationProps) => {
  const account: AccountState = useSelector(
    (state: RootState) => state.account,
  );
  console.log('account', account);
  console.log('navigation', navigation);

  return (
    <View>
      <Balance chainId={account.chainId} address={account.address} />
      <Text>Your NFT</Text>
      <NFTList chainId={account.chainId} address={account.address} />
    </View>
  );
};

export default HomeScreen;
