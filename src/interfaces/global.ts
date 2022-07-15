export type WalletAddressType = string;

export type ChainIdType =
  | '0x1'
  | 'ropsten'
  | 'rinkeby'
  | 'goerli'
  | 'kovan'
  | string;

export interface WalletSimpleCredential {
  chainId: ChainIdType;
  address: WalletAddressType;
}

export type NativeBalanceType = string | any;

export type GetNativeBalanceType = () => Promise<string | void>;

export interface HookNativeBalance {
  balance: NativeBalanceType;
  fetchERC20Balance: GetNativeBalanceType;
}

export interface Error {
  error: any | undefined;
}

export interface ChainIdMap {
  [id: string]: string;
}

export interface RpcProviderMap {
  [providerName: string]: string;
}

export type ContentPathType = string;

export type MetadataPathType = string;

export type MintStatusType = boolean;
