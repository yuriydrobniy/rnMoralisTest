import React, {
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {ethers} from 'ethers';
import {WalletConnectContext} from '@walletconnect/react-native-dapp';
import WalletConnectProvider from '../../libs/web3-provider';
import {useDispatch, useSelector} from 'react-redux';

// components
import NameDescriptionForm from './NameDescriptionForm';
import MainButton from '../MainButton/MainButton';

// utils
import {getKeyByValue, setIdName} from '../../utils';
import {mintContent, storeContent} from './utils';

// hooks
// import useNFTList from '../../hooks/useNFTList';

// constants
import {CHAIN_ID, RPC} from '../../constants/global';

// actions
import {
  ContentState,
  deleteContent,
  setMetadataPath,
  setMintStatus,
} from '../../store/slice/contentSlice';

// types
import {ChainId, WalletAddress} from '../../interfaces/global';
import {RootState} from '../../store';

// styles
import styles from './styles';

const PictureProcessing = ({
  address,
  chainId,
  data,
}: {
  address: WalletAddress;
  chainId: ChainId;
  data: string;
}): JSX.Element => {
  const dispatch = useDispatch();
  const {metadataPath, mintStatus}: ContentState = useSelector(
    (state: RootState) => state.content,
  );
  const {connector} = useContext(WalletConnectContext);
  // const {nftList} = useNFTList({address, chainId});
  const [provider, setProvider] = useState<undefined | any>(undefined);
  // const [metadataPath, setMetadataPath] = useState<undefined | any>(undefined);

  const [nameDescription, setNameDescription] = useState<undefined | any>(
    undefined,
  );

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

  useEffect(() => {
    if (nameDescription?.name) {
      uploadFolder();
    }
  }, [nameDescription]);

  useEffect(() => {
    mintNFT();
  }, [metadataPath]);

  const mintNFT = useCallback(async () => {
    try {
      await mintContent({
        signer: provider.getSigner(),
        metadataPath,
        quantity: 1,
      });
      dispatch(setMintStatus({mintStatus: true}));
    } catch (e) {
      console.log(e);
      return;
    }
  }, [provider, metadataPath]);

  const uploadFolder = async () => {
    // todo - need to clarify filename (ERC-1155 metadata vs IPFS CID)
    // let previousId = '0';
    // if (nftList.length) {
    //   previousId = nftList?.[0].token_id;
    // }
    // console.log('previousId', previousId);
    // const currentId = setIdName(previousId);

    // 'picture' - simplified filename
    const currentId = 'picture';
    const result = await storeContent(data, currentId, nameDescription);
    if (result?.length) {
      // const path = res[0].path.split("ipfs/");
      // setMetadataPath(`ipfs://${path[1]}`);
      // setMetadataPath(`https://ipfs.io/ipfs/QmcVZY43ViGQj2KfrKDWFh8HcPqJi2wTUGbjEScTn5hpo3`);
      dispatch(setMetadataPath({metadataPath: result[0].path}));
    }
  };

  const onClear = () => dispatch(deleteContent());

  // console.log('!provider!', provider || 'nope');
  // console.log('-> !nftList!', nftList || 'nope');
  console.log('-> !metadataPath!', metadataPath || 'nope');
  console.log('-> nameDescription', nameDescription || 'nope');
  console.log('-> data', data || 'nope');

  const onSetNameDescription = obj => {
    setNameDescription(obj);
  };

  const isUploadEnabled = useMemo(() => {
    return data && Object.keys(nameDescription || {}).length;
  }, [data, nameDescription]);

  console.log('-> isUploadEnabled', isUploadEnabled || 'nope');

  return (
    <ScrollView>
      <KeyboardAvoidingView>
        <NameDescriptionForm
          imageData={data}
          onSetNameDescription={onSetNameDescription}
        />
        <MainButton
          onPress={uploadFolder}
          text="Send to IPFS"
          disabled={!isUploadEnabled}
        />
        <MainButton onPress={mintNFT} text="Mint!" disabled={!metadataPath} />
        <MainButton
          onPress={onClear}
          text="Clear content data"
          disabled={!mintStatus}
        />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default PictureProcessing;
