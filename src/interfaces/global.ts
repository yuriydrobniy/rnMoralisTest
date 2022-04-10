export interface WalletAddress {
  walletAddress: string;
}

export interface ChainId {
  chainId: string | null;
}

export interface WalletSimpleCredential extends WalletAddress, ChainId {}

export interface NativeBalance {
  balance: string | any;
}

export interface GetNativeBalance {
  fetchERC20Balance: () => Promise<string | void>;
}

export interface HookNativeBalance extends GetNativeBalance, NativeBalance {}
