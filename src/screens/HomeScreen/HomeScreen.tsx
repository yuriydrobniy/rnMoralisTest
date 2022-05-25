import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';

// components
import PictureProcessing from '../../components/PictureProcessing/PicturePocessing';
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
        <Balance chainId={account.chainId} address={account.address} />
      </View>
      <Counter />
      <SignOut />
      <PictureProcessing chainId={account.chainId} />
    </View>
  );
};

export default HomeScreen;
