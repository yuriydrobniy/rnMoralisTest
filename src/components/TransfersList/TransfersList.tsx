import React, {useEffect} from 'react';
import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import useERC20Transfers from '../../hooks/useERC20Transfers';
import useERC20Balance from '../../hooks/useERC20Balance';

const TransfersList = ({account = "0x4b0e8C57001b420F5Bbc00422eF8271f958d1B57", chainId}): JSX.Element => {
  const {ERC20Transfers} = useERC20Transfers({walletAddress: account, chainId: "goerli"});
  useEffect(() => {console.log('ERC20Transfers', ERC20Transfers)}, [ERC20Transfers]);
  // console.log('ERC20Transfers', ERC20Transfers)

  // const {assets} = useERC20Balance({walletAddress: account, chainId: '0x1'});
  // console.log('assets', assets)
  // const renderContent = React.useCallback(() => {
  //   return walletServices.map((walletService: WalletService, i: number) => (
  //     <TouchableOpacity
  //       key={`i${i}`}
  //       onPress={() => connectToWalletService(walletService, uri)}>
  //       <Image source={{uri: walletService.logo}} />
  //       <Text>{walletService.name}</Text>
  //     </TouchableOpacity>
  //   ));
  // }, [walletServices, uri]);
  return (
    <View
      style={{width: 300, height: 300, backgroundColor: "green"}}
    >
      <Text style={{color: "red"}}>
        "TransfersList"
      </Text>
    </View>
  );
};

export default TransfersList;
