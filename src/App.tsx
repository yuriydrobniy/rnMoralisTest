import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
  Linking,
} from 'react-native';
import {MoralisProvider} from 'react-moralis';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Moralis from 'moralis/react-native';
import WalletConnectProvider, {
  RenderQrcodeModalProps,
  withWalletConnect,
} from '@walletconnect/react-native-dapp';

// import
//   WalletConnectProvider,
// {WalletConnectProviderProps} from './libs/WalletConnect';

// screens
import LoginScreen from './screens/LoginScreen/LoginScreen';

// components
import WalletModal from './components/WalletModal/WalletModal';

// utils
import {enableViaWalletConnect} from './utils/walletConnectWeb3Helper';

// @ts-ignore
import {SERVER_URL, APP_ID} from 'react-native-dotenv';
// import {SERVER_URL, APP_ID} from '@env';

const environment = 'native';

// Initialize Moralis with AsyncStorage to support react-native storage
Moralis.setAsyncStorage(AsyncStorage);
Moralis.start({serverUrl: SERVER_URL, appId: APP_ID});
// Replace the enable function to use the react-native WalletConnect
// Moralis.enable = enableViaWalletConnect;

console.log("KEYS", AsyncStorage.getAllKeys());
console.log('MORALIS', Moralis);

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    position: 'relative',
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // const renderQrcodeModal = (props: RenderQrcodeModalProps): JSX.Element => (
  //   <WalletModal {...props} />
  // );

  const renderQrcodeModal = (props: WalletConnectProviderProps): JSX.Element => (
      <WalletModal {...props} />
  );

  const walletConnectOptions: WalletConnectProviderProps = {
    redirectUrl: 'yourappscheme://',
    storageOptions: {
      // @ts-ignore
      asyncStorage: AsyncStorage,
    },
    // qrcodeModalOptions: {
    //   mobileLinks: [
    //     "rainbow",
    //     "metamask",
    //     "argent",
    //     "trust",
    //     "imtoken",
    //     "pillar",
    //   ],
    // },
    // Uncomment to show a QR-code to connect a wallet
    // renderQrcodeModal: renderQrcodeModal,
  };

  // return (
  //   <SafeAreaView style={backgroundStyle}>
  //     <MoralisProvider
  //       appId={APP_ID}
  //       serverUrl={SERVER_URL}
  //       environment={environment}>
  //       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
  //       <ScrollView
  //         contentInsetAdjustmentBehavior="automatic"
  //         style={backgroundStyle}>
  //         <Header />
  //         <LoginScreen />
  //         {/*<View style={{position: 'absolute', top: 0, width: 300, height: 300, backgroundColor: "green"}} />*/}
  //       </ScrollView>
  //     </MoralisProvider>
  //   </SafeAreaView>
  // );

  return (
    <WalletConnectProvider {...walletConnectOptions}>
      <SafeAreaView style={backgroundStyle}>
        <MoralisProvider
          appId={APP_ID}
          serverUrl={SERVER_URL}
          environment={environment}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={backgroundStyle}>
            <Header />
            <LoginScreen />
            {/*<View style={{position: 'absolute', top: 0, width: 300, height: 300, backgroundColor: "green"}} />*/}
          </ScrollView>
        </MoralisProvider>
      </SafeAreaView>
    </WalletConnectProvider>
  );
};

export default App;

// export default withWalletConnect(App, {
//   redirectUrl: 'yourappscheme://',
//   storageOptions: {
//     asyncStorage: AsyncStorage,
//   },
//   renderQrcodeModal: (props: RenderQrcodeModalProps): JSX.Element => (
//     <WalletModal {...props} />
//   ),
// });
