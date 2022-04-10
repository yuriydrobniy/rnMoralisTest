import {useEffect, useState} from 'react';
import {useMoralis} from 'react-moralis';
import Moralis from 'moralis/react-native';

// types
import {HookNativeBalance, NativeBalance, WalletSimpleCredential} from '../interfaces/global';

const useERC20Balance = ({walletAddress, chainId}: WalletSimpleCredential): HookNativeBalance => {
  const {isInitialized} = useMoralis();

  const [balance, setBalance] = useState<string | null>(null);

  useEffect(() => {
    if (isInitialized) {
      fetchERC20Balance()
        .then(res => setBalance(res))
        .catch(e => console.log(e.message));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInitialized, chainId, walletAddress]);

  const fetchERC20Balance = async (): Promise<string | void> => {
    return await Moralis.Web3API.account
      .getNativeBalance({address: walletAddress, chain: chainId})
      .then(result => {
        console.log("RESULT", result);
        return result.balance;
      })
      .catch(e => console.log(e.message));
  };

  return {fetchERC20Balance, balance};
};

export default useERC20Balance;
