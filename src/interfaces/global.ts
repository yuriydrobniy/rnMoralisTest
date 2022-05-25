export interface WalletAddress {
  address: string;
}

export interface ChainId {
  chainId: string;
}

export interface WalletSimpleCredential extends WalletAddress, ChainId {}

export interface NativeBalance {
  balance: string | any;
}

export interface GetNativeBalance {
  fetchERC20Balance: () => Promise<string | void>;
}

export interface HookNativeBalance extends GetNativeBalance, NativeBalance {}

export interface Error {
  error: any | undefined;
}

export interface ChainIdMap {
  [id: string]: string;
}

export interface RpcProviderMap {
  [providerName: string]: string;
}
