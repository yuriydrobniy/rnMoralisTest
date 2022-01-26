import * as React from 'react';

import { WalletConnectProvider } from '../providers';
import { WalletConnectProviderProps } from '../types';

const withWalletConnectThunk = (
  Component: React.ElementType,
  options: Partial<WalletConnectProviderProps>
): React.ElementType => function WithWalletConnect(props): JSX.Element {
    console.log('WithWalletConnect <-=')
    console.log('OPTIONS', options)
    console.log('PROPS', props)
  return (
    <WalletConnectProvider {...(options || {})}>
      <Component {...props} />
    </WalletConnectProvider>
  );
};

export default withWalletConnectThunk;
