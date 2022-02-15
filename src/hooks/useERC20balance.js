import {useEffect, useState} from 'react';
import {useMoralis, useMoralisWeb3Api} from 'react-moralis';

const useERC20Balance = ({walletAddress, chainId}) => {
  const {account} = useMoralisWeb3Api();
  const {isInitialized} = useMoralis();

  const [assets, setAssets] = useState();

  useEffect(() => {
    if (isInitialized) {
      fetchERC20Balance()
        .then(balance => setAssets(balance))
        .catch(e => alert(e.message));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInitialized, chainId, walletAddress]);

  const fetchERC20Balance = async () => {
    return await account
      .getTokenBalances({
        address: walletAddress,
        chain: chainId,
      })
      .then(result => result)
      .catch(e => alert(e.message));
  };

  return {fetchERC20Balance, assets};
};

export default useERC20Balance;
