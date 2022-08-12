import React, {useEffect, useState} from 'react';
import {Text, View, Platform} from 'react-native';
import {useSelector} from 'react-redux';
import DeviceInfo from 'react-native-device-info';

// store
import {RootState} from '../../store';

// components
import Balance from '../../components/Balance/Balance';

// styles
import styles from './styles';

// types
import NFTList from '../../components/NFTList/NFTList';
import {AccountState} from '../../store/slice/accountSlice';

const HomeScreen = () => {
  const account: AccountState = useSelector(
    (state: RootState) => state.account,
  );

  const [isSimulator, setIsSimulator] = useState<boolean>(false);
  useEffect(() => {
    const getDevice = async () => {
      const emulator = await DeviceInfo.isEmulator();
      const simulator = emulator && Platform.OS === 'ios';
      setIsSimulator(simulator);
    };

    getDevice();
  }, []);

  return (
    <View style={styles.container}>
      <Balance chainId={account.chainId} address={account.address} />
      <View style={styles.containerText}>
        <Text style={styles.text}>Your NFT</Text>
      </View>
      <NFTList
        chainId={account.chainId}
        address={account.address}
        simulator={isSimulator}
      />
    </View>
  );
};

export default HomeScreen;
