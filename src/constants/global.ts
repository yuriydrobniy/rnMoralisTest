import {ChainIdMap, RpcProviderMap} from '../interfaces/global';

// according to node_modules/moralis/types/generated/web3Api.d.ts
export const CHAIN_ID: ChainIdMap = {
  '1': '0x1', // 'mainnet'
  '3': 'ropsten',
  '4': 'rinkeby',
  '5': 'goerli',
  '42': 'kovan',
};

export const RPC: RpcProviderMap = {
  ropsten:
    'https://speedy-nodes-nyc.moralis.io/eaeba3168d05f9ebe601a0dc/eth/ropsten',
  rinkeby:
    'https://speedy-nodes-nyc.moralis.io/eaeba3168d05f9ebe601a0dc/eth/rinkeby',
  goerli:
    'https://speedy-nodes-nyc.moralis.io/eaeba3168d05f9ebe601a0dc/eth/goerli',
  kovan:
    'https://speedy-nodes-nyc.moralis.io/eaeba3168d05f9ebe601a0dc/eth/kovan',
};
