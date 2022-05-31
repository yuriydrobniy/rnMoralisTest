import React, {useEffect, useMemo, useState} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import RNFS from 'react-native-fs';

// store
import {RootState} from '../../store';

// components
import PictureProcessing from '../../components/PictureProcessing/PicturePocessing';
import Balance from '../../components/Balance/Balance';
import Counter from '../../components/Counter/Counter';
import SignOut from '../../components/SignOut/SignOut';
import MainButton from '../../components/MainButton/MainButton';

// styles
import styles from './styles';

// types
import {HomeNavigationProps} from '../../navigation';

const FormsScreen = ({navigation}: HomeNavigationProps) => {
  const {chainId} = useSelector((state: RootState) => state.account);
  const {content} = useSelector((state: RootState) => state.content);
  // console.log('account', account);
  // console.log('navigation', navigation);
  console.log('content', content)

  // const { path, type } = route.params;
  // const source = useMemo(() => ({ uri: `file://${path}` }), [path]);
  // console.log({path, source})

  const [base64Data, setBase64Data] = useState<undefined | any>(undefined);

  useEffect( () => {
    const getBlob = async () => {
      // const imageResponse = await fetch(source.uri);
      // console.log('imageResponse', imageResponse)
      // const blob = await imageResponse.blob();
      // console.log('BL_OB', blob)
      const res = await RNFS.readFile(content, 'base64');
      // console.log('BASE_64', res)
      setBase64Data(`data:image/png;base64,${res}`);
    };

    if (content) {
      getBlob();
    }
  }, [content])

  return (
    <View>
      <PictureProcessing chainId={chainId} data={base64Data} />
      <MainButton
        onPress={() => navigation.navigate('Home')}
        isLoading={false}
        text={'Cancel'}
      />
    </View>
  );
};

export default FormsScreen;
