import {ChainIdMap, RpcProviderMap} from '../interfaces/global';
// @ts-ignore
import {API_KEY_ALCHEMY} from 'react-native-dotenv';

// according to node_modules/moralis/types/generated/web3Api.d.ts
export const CHAIN_ID: ChainIdMap = {
  '1': '0x1', // 'mainnet'
  '3': 'ropsten',
  '4': 'rinkeby',
  '5': 'goerli',
  '42': 'kovan',
};

export const RPC_MORALIS: RpcProviderMap = {
  ropsten:
    'https://speedy-nodes-nyc.moralis.io/eaeba3168d05f9ebe601a0dc/eth/ropsten',
  rinkeby:
    // 'wss://speedy-nodes-nyc.moralis.io/eaeba3168d05f9ebe601a0dc/eth/rinkeby',
    'https://speedy-nodes-nyc.moralis.io/eaeba3168d05f9ebe601a0dc/eth/rinkeby',
  goerli:
    'https://speedy-nodes-nyc.moralis.io/eaeba3168d05f9ebe601a0dc/eth/goerli',
  kovan:
    'https://speedy-nodes-nyc.moralis.io/eaeba3168d05f9ebe601a0dc/eth/kovan',
};

export const RPC_ALCHEMY: RpcProviderMap = {
  rinkeby: `https://eth-rinkeby.alchemyapi.io/v2/${API_KEY_ALCHEMY}`,
  goerli: `https://eth-goerli.alchemyapi.io/v2/${API_KEY_ALCHEMY}`,
};
