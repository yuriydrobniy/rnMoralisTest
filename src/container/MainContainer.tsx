import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';

import {useSelector} from 'react-redux';
import {RootState} from '../store';
import RootNavigator from '../navigation';
import InfoHat from '../components/InfoHat/InfoHat';

const MainContainer = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const account = useSelector((state: RootState) => state.account);

  console.log('MainContainer')

  return (
    <>
      {!!account?.chainId && <InfoHat chainId={account.chainId} />}
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <RootNavigator auth={!!account?.address} />
    </>
  );
};

export default MainContainer;
