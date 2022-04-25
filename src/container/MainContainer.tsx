import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';

import {useSelector} from 'react-redux';
import {RootState} from '../store';
import RootNavigator from '../navigation';

const MainContainer = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const account = useSelector((state: RootState) => state.account);

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <RootNavigator auth={!!account?.address} />
    </>
  );
};

export default MainContainer;
