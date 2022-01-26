import React from 'react';
import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import {
  RenderQrcodeModalProps,
  WalletService,
} from '@walletconnect/react-native-dapp';

const WalletModal = ({
  walletServices,
  visible,
  connectToWalletService,
  uri,
}: RenderQrcodeModalProps): JSX.Element => {
  console.log('CustomBottomSheet -->', {
    walletServices,
    visible,
    connectToWalletService,
    uri,
  });
  const renderContent = React.useCallback(() => {
    return walletServices.map((walletService: WalletService, i: number) => (
      <TouchableOpacity
        key={`i${i}`}
        onPress={() => connectToWalletService(walletService, uri)}>
        <Image source={{uri: walletService.logo}} />
        <Text>{walletService.name}</Text>
      </TouchableOpacity>
    ));
  }, [walletServices, uri]);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      // style={{position: 'absolute', top: 0, width: 300, height: 300, backgroundColor: "green"}}
      // onRequestClose={() => {
      //   setModalVisible(!modalVisible);
      // }}
    >
      <View style={{width: 30, height: 30, backgroundColor: "red"}}>
        {renderContent}
      </View>
    </Modal>
  );
};

export default WalletModal;
