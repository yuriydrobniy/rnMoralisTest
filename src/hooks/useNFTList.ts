import {useEffect, useState} from 'react';
import {useMoralis} from 'react-moralis';
import Moralis from 'moralis/react-native';

// types
import {HookNativeBalance, WalletSimpleCredential} from '../interfaces/global';

const useNFTList = ({
  address,
  chainId,
}: WalletSimpleCredential): HookNativeBalance => {
  const {isInitialized} = useMoralis();

  const [nftList, setNFTList] = useState<string | null>(null);

  useEffect(() => {
    if (isInitialized) {
      fetchNFTList()
        .then(res => setNFTList(res))
        .catch(e => console.log(e.message));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInitialized, chainId, address]);

  const fetchNFTList = async (): Promise<any> => {
    console.log('fetchNFTList Moralis -->', Moralis);
    return await Moralis.Web3API.account
      .getNFTs({address: address, chain: chainId})
      .then(result => {
        console.log('RESULT', result);
        console.log('RESULT - ID', result?.result[0].token_id);
        return result.result;
      })
      .catch(e => {
        console.log('fetchNFTList error', e);
        console.log(e.message);
      });
  };

  return {fetchNFTList, nftList};
};

export default useNFTList;
