import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';
// import {MoralisProvider} from 'react-moralis';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import Moralis from 'moralis';
import WalletConnectProvider, {
  withWalletConnect,
} from '@walletconnect/react-native-dapp';

// screens
import LoginScreen from './screens/LoginScreen/LoginScreen';

// @ts-ignore
import {SERVER_URL, APP_ID} from 'react-native-dotenv';

const environment = 'native';

// Initialize Moralis with AsyncStorage to support react-native storage
// Moralis.setAsyncStorage(AsyncStorage);

// console.log('MORALIS', Moralis);
console.log('WALLETCONNECT', withWalletConnect);

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    position: 'relative',
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const walletConnectOptions = {
    bridge: "https://bridge.walletconnect.org",
    clientMeta: {
      description: 'Connect with WalletConnect',
        url: 'https://walletconnect.org',
        icons: ['https://walletconnect.org/walletconnect-logo.png'],
        name: 'WalletConnect',
    },
    redirectUrl: 'yourappscheme://',
    storageOptions: {
      // @ts-ignore
      asyncStorage: AsyncStorage,
    },
    // qrcodeModalOptions: {
    //   mobileLinks: [
    //     'rainbow',
    //     'metamask',
    //     'argent',
    //     'trust',
    //     'imtoken',
    //     'pillar',
    //   ],
    // },
    // Uncomment to show a QR-code to connect a wallet
    // renderQrcodeModal: renderQrcodeModal,
  };

  // return (
  //   <MoralisProvider
  //     appId={APP_ID}
  //     serverUrl={SERVER_URL}
  //     environment={environment}>
  //     <WalletConnectProvider {...walletConnectOptions}>
  //       <SafeAreaView style={backgroundStyle}>
  //         <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
  //         <ScrollView
  //           contentInsetAdjustmentBehavior="automatic"
  //           style={backgroundStyle}>
  //           <Header />
  //           <LoginScreen />
  //           {/*<View style={{position: 'absolute', top: 0, width: 300, height: 300, backgroundColor: "green"}} />*/}
  //         </ScrollView>
  //       </SafeAreaView>
  //     </WalletConnectProvider>
  //   </MoralisProvider>
  // );
  return (
    <WalletConnectProvider {...walletConnectOptions}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <Header />
          <LoginScreen />
          {/*<View style={{position: 'absolute', top: 0, width: 300, height: 300, backgroundColor: "green"}} />*/}
        </ScrollView>
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
// });
