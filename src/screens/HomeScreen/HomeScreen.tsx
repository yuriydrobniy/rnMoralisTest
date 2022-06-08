import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';

// store
import {RootState} from '../../store';

// components
import PictureProcessing from '../../components/PictureProcessing/PicturePocessing';
import Balance from '../../components/Balance/Balance';
import Counter from '../../components/Counter/Counter';
import SignOut from '../../components/SignOut/SignOut';
import MainButton from '../../components/MainButton/MainButton';

// styles
import styles from './styles';

// types
import {HomeNavigationProps} from '../../navigation';
import NFTList from '../../components/NFTList/NFTList';
import {AccountState} from '../../store/slice/accountSlice';

const HomeScreen = ({navigation}: HomeNavigationProps) => {
  const account: AccountState = useSelector((state: RootState) => state.account);
  console.log('account', account);
  console.log('navigation', navigation);

  return (
    <View>
      <View>
        <Balance chainId={account.chainId} address={account.address} />
        <NFTList chainId={account.chainId} address={account.address} />
      </View>
      {/*<Counter />*/}
      <SignOut />
      <PictureProcessing address={account.address} chainId={account.chainId} />
      <MainButton
        onPress={() => navigation.navigate('CameraStack')}
        isLoading={false}
        text={'Camera'}
      />
    </View>
  );
};

export default HomeScreen;
