import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

// components



// types
import {RootState} from '../../store';

// styles
import styles from './styles';
import Color from '../../theme/colors';

// actions
import {setContent} from '../../store/slice/contentSlice';

const PreviewScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {content} = useSelector((state: RootState) => state.content);

  const {path, type} = route.params;
  const source = useMemo(() => ({uri: `file://${path}`}), [path]);

  console.log('?content', content)

  const [hasMediaLoaded, setHasMediaLoaded] = useState(false);
  const onMediaLoadEnd = useCallback(() => {
    console.log('media has loaded.');
    setHasMediaLoaded(true);
  }, []);

  const onMediaLoad = useCallback((event: OnLoadData | NativeSyntheticEvent<ImageLoadEventData>) => {
    console.log(`Image loaded. Size: ${event.nativeEvent.source.width}x${event.nativeEvent.source.height}`);
  }, []);

  const onSetContent = useCallback(() => {
    dispatch(setContent({content: source.uri}));
  }, [source]);

  useEffect(() => {
    if (content) {
      navigation.navigate('Forms');
    }
  }, [content]);

  const screenStyle = useMemo(() => ({ opacity: hasMediaLoaded ? 1 : 0 }), [hasMediaLoaded]);

  return (
    <View style={[styles.container, screenStyle]}>
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
          backgroundColor: 'pink',
          padding: 10,
          alignSelf: 'flex-start',
        }}
        onPress={() => navigation.goBack()}>
        <Icon name="clear" size={40} />
      </TouchableOpacity>
      {/*<Icon name="photo-camera" size={24} />*/}
      <Image source={source} style={StyleSheet.absoluteFill} resizeMode="cover" onLoadEnd={onMediaLoadEnd} onLoad={onMediaLoad} />
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 60,
          // left: '-50%',
          zIndex: 1,
          // backgroundColor: 'pink',
          padding: 0,
          alignSelf: 'center',
        }}
        onPress={onSetContent}>
        <Icon name="thumb-up-alt" size={64} color={Color.white} />
      </TouchableOpacity>
    </View>
  );
};

export default PreviewScreen;
