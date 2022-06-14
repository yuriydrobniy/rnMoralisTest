import React, {useEffect, useMemo, useState} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import RNFS from 'react-native-fs';

// store
import {RootState} from '../../store';

// components
import PictureProcessing from '../../components/PictureProcessing/PicturePocessing';
import MainButton from '../../components/MainButton/MainButton';

// styles
import styles from './styles';

// types
import {FormsNavigationProps} from '../../navigation';

const FormsScreen = ({navigation, route}: FormsNavigationProps) => {
  const {contentUri} = route.params;
  const {address, chainId} = useSelector((state: RootState) => state.account);

  const [base64Data, setBase64Data] = useState<undefined | any>(undefined);

  useEffect(() => {
    const getBlob = async () => {
      const res = await RNFS.readFile(contentUri, 'base64');
      setBase64Data(`data:image/png;base64,${res}`);
    };

    if (contentUri) {
      getBlob();
    }
  }, [contentUri]);

  return (
    <View>
      <PictureProcessing
        address={address}
        chainId={chainId}
        data={base64Data}
      />
      <MainButton
        onPress={() => navigation.navigate('Home')}
        isLoading={false}
        text={'Cancel'}
      />
    </View>
  );
};

export default FormsScreen;
