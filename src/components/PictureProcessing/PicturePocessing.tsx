import React, {useContext, useEffect, useState, useCallback} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ethers} from 'ethers';
import {WalletConnectContext} from '@walletconnect/react-native-dapp';
import WalletConnectProvider from '../../libs/web3-provider';
import {useDispatch, useSelector} from 'react-redux';

// utils
import MyNFT from '../../utils/MyNFT.json';
import {getKeyByValue} from '../../utils';
import {mintContent, storeContent} from './utils';

// constants
import {CHAIN_ID, RPC} from '../../constants/global';

// actions
import {setMetadataPath} from '../../store/slice/contentSlice';

// types
import {ChainId} from '../../interfaces/global';

// styles
import styles from './styles';
import {RootState} from '../../store';

const PictureProcessing = ({chainId, data}: {chainId: ChainId; data: string}): JSX.Element => {
  const dispatch = useDispatch();
  const {metadataPath} = useSelector((state: RootState) => state.content);
  const {connector} = useContext(WalletConnectContext);
  const [provider, setProvider] = useState<undefined | any>(undefined);
  // const [metadataPath, setMetadataPath] = useState<undefined | any>(undefined);

  useEffect(() => {
    const initProvider = async (): Promise<void> => {
      const id: number = +getKeyByValue(CHAIN_ID, chainId)!;
      const settings = {
        rpc: {[id]: RPC[chainId]},
        chainId: id,
        connector: connector,
        qrcode: false,
      };
      const customProvider = new WalletConnectProvider(settings);
      await customProvider.enable();
      const ethersProvider = new ethers.providers.Web3Provider(customProvider);
      if (ethersProvider) {
        setProvider(ethersProvider);
      }
    };

    if (WalletConnectProvider) {
      initProvider();
    }
  }, [connector, WalletConnectProvider]);

  const mintNFT = useCallback(async () => {
    const res = await mintContent({
      signer: provider.getSigner(),
      metadataPath,
      quantity: 1,
    });
  }, [provider, metadataPath]);

  const uploadFolder = async () => {
    const result = await storeContent(data);
    if (result?.length) {
      // const path = res[0].path.split("ipfs/");
      // setMetadataPath(`ipfs://${path[1]}`);
      // setMetadataPath(`https://ipfs.io/ipfs/QmcVZY43ViGQj2KfrKDWFh8HcPqJi2wTUGbjEScTn5hpo3`);
      dispatch(setMetadataPath({metadataPath: result[0].path}));
    }
  };

  // console.log('!provider!', provider || 'nope');
  console.log('!Contract_ABI!', MyNFT.abi || 'nope');
  console.log('-> !metadataPath!', metadataPath || 'nope');

  return (
    <>
      <TouchableOpacity style={[styles.buttonStyle, !data && {backgroundColor: 'grey'}]} onPress={uploadFolder}>
        <Text style={styles.buttonText}>Send to IPFS</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buttonStyle, !metadataPath && {backgroundColor: 'grey'}]}
        onPress={mintNFT}
        disabled={!metadataPath}>
        <Text style={styles.buttonText}>Mint!</Text>
      </TouchableOpacity>
    </>
  );
};

export default PictureProcessing;
