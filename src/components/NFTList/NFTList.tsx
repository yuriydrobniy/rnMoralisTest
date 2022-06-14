import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import useNFTList from '../../hooks/useNFTList';
import {WalletSimpleCredential} from '../../interfaces/global';

const NFTList = ({address, chainId}: WalletSimpleCredential): JSX.Element => {
  const {nftList} = useNFTList({address, chainId});
  useEffect(() => {console.log('nftList', nftList)}, [nftList]);

  return (
    <View
      style={{backgroundColor: "pink"}}
    >
      <Text style={{color: "black"}}>
        Balance:
      </Text>
    </View>
  );
};

export default NFTList;
