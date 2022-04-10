import {ethers} from 'ethers';

export const getSignerThrowEthers = () => {
  const NODE_URL =
    'https://speedy-nodes-nyc.moralis.io/eaeba3168d05f9ebe601a0dc/eth/goerli';
  const provider = new ethers.providers.JsonRpcProvider(NODE_URL);

  const signer = provider.getSigner();
  return {signer, provider};
};
