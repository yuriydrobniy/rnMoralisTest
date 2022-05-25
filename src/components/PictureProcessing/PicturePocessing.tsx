import React, {useContext, useEffect, useState, useCallback} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ethers} from 'ethers';
import {WalletConnectContext} from '@walletconnect/react-native-dapp';
import WalletConnectProvider from '../../libs/web3-provider';

// utils
import MyNFT from '../../utils/MyNFT.json';
import {getKeyByValue} from '../../utils';
import {mintContent, storeContent} from './utils';

// constants
import {CHAIN_ID, RPC} from '../../constants/global';
import {galaxy} from "../../constants/images";

// types
import {ChainId} from '../../interfaces/global';

// styles
import styles from './styles';

const PictureProcessing = ({chainId}: ChainId): JSX.Element => {
  const {connector} = useContext(WalletConnectContext);
  const [provider, setProvider] = useState<undefined | any>(undefined);
  const [metadataPath, setMetadataPath] = useState<undefined | any>(undefined);

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
    await mintContent({
      signer: provider.getSigner(),
      metadataPath,
      quantity: 1,
    });
  }, [provider, metadataPath]);

  const uploadFolder = async () => {
    const result = await storeContent(galaxy);
    if (result?.length) {
      // const path = res[0].path.split("ipfs/");
      // setMetadataPath(`ipfs://${path[1]}`);
      // setMetadataPath(`https://ipfs.io/ipfs/QmcVZY43ViGQj2KfrKDWFh8HcPqJi2wTUGbjEScTn5hpo3`);
      setMetadataPath(result[0].path);
    }
  };

  console.log('!provider!', provider || 'nope');
  console.log('!Contract_ABI!', MyNFT.abi || 'nope');

  return (
    <>
      <TouchableOpacity style={styles.buttonStyle} onPress={uploadFolder}>
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
