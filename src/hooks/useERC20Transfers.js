import {useEffect, useState} from 'react';
import {useMoralis, useMoralisWeb3Api} from 'react-moralis';
import Moralis from 'moralis/react-native';

const useERC20Transfers = ({walletAddress, chainId}) => {
  const {account} = useMoralisWeb3Api();
  // const {account: _account} = Web3Api;
  // const MAIN = Moralis();
  console.log('->0', {walletAddress, chainId})
  console.log('account  ->0', account)
  console.log('Web3Api  ->0', Moralis.Web3API.account)
  // const { walletAddress, chainId } = useMoralisDapp();
  const {isInitialized} = useMoralis();
  const [ERC20Transfers, setERC20Transfers] = useState();

  useEffect(() => {
    if (isInitialized) {
      fetchERC20Transfers()
        .then(balance => setERC20Transfers(balance))
        .catch(e => {console.log('error', e); alert(`${e.message} + 1`)});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInitialized, walletAddress]);

  // const fetchERC20Transfers = async () => {
  //   return await account
  //     .getTokenTransfers({address: walletAddress, chain: chainId})
  //     .then(result => result.result)
  //     .catch(e => {console.log('error', e); alert(`${e.message} + 2`)});
  // };
  const fetchERC20Transfers = async () => {
    return await Moralis.Web3API.account
        // .getTokenTransfers({address: walletAddress, chain: chainId})
        .getTokenTransfers({address: walletAddress, chain: chainId})
        .then(result => result.result)
        .catch(e => {console.log('error - getTokenTransfers', e); alert(`${e.message} + 2`)});
  };
  return {fetchERC20Transfers, ERC20Transfers};
};

export default useERC20Transfers;
