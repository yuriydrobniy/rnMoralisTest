import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import {MoralisProvider} from 'react-moralis';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Moralis from 'moralis/react-native';
import WalletConnectProvider, {
  WalletConnectProviderProps,
} from '@walletconnect/react-native-dapp';

// container
import MainContainer from './container/MainContainer';

// store
import {store, persistor} from './store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

// @ts-ignore
import {SERVER_URL, APP_ID} from 'react-native-dotenv';

const environment = 'native';

// Initialize Moralis with AsyncStorage to support react-native storage
Moralis.setAsyncStorage(AsyncStorage);
Moralis.start({serverUrl: SERVER_URL, appId: APP_ID});
// Replace the enable function to use the react-native WalletConnect
// Moralis.enable = enableViaWalletConnect;

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    position: 'relative',
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const walletConnectOptions: WalletConnectProviderProps = {
    redirectUrl: 'yourappscheme://',
    storageOptions: {
      // @ts-ignore
      asyncStorage: AsyncStorage,
    },
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <WalletConnectProvider {...walletConnectOptions}>
          <SafeAreaView style={backgroundStyle}>
            <MoralisProvider
              appId={APP_ID}
              serverUrl={SERVER_URL}
              environment={environment}>
              <MainContainer />
            </MoralisProvider>
          </SafeAreaView>
        </WalletConnectProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
