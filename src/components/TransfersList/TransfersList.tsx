import React, {useEffect} from 'react';
import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import useERC20Transfers from '../../hooks/useERC20Transfers';
import useERC20Balance from '../../hooks/useERC20balance';

const TransfersList = ({account, chainId}): JSX.Element => {
  const {ERC20Transfers} = useERC20Transfers({walletAddress: account, chainId: '0x1'});
  useEffect(() => {}, [ERC20Transfers]);
  console.log('ERC20Transfers', ERC20Transfers)

  const {assets} = useERC20Balance({walletAddress: account, chainId: '0x1'});
  console.log('assets', assets)
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
