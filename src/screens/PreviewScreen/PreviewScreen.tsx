import React, {useCallback, useMemo, useState} from 'react';
import {
  Image,
  ImageLoadEventData,
  NativeSyntheticEvent,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// styles
import styles from './styles';
import Color from '../../theme/colors';

// types
import {PreviewNavigationProps} from '../../navigation';
import StereoImageIcon from '../../components/StereoImageIcon/StereoImageIcon';

const PreviewScreen = ({navigation, route}: PreviewNavigationProps) => {
  const {path} = route.params;
  const source = useMemo(() => ({uri: `file://${path}`}), [path]);

  const [hasMediaLoaded, setHasMediaLoaded] = useState(false);
  const onMediaLoadEnd = useCallback(() => {
    console.log('media has loaded.');
    setHasMediaLoaded(true);
  }, []);

  // event: OnLoadData | NativeSyntheticEvent<ImageLoadEventData>
  // OnLoadData - in case of video
  const onMediaLoad = useCallback(
    (event: NativeSyntheticEvent<ImageLoadEventData>) => {
      console.log(
        `Image loaded. Size: ${event.nativeEvent.source.width}x${event.nativeEvent.source.height}`,
      );
    },
    [],
  );

  const onSetContent = useCallback(() => {
    navigation.navigate('Forms', {
      contentUri: source.uri,
    });
  }, [navigation, source]);

  const screenStyle = useMemo(
    () => ({opacity: hasMediaLoaded ? 1 : 0}),
    [hasMediaLoaded],
  );

  return (
    <View style={[styles.container, screenStyle]}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <StereoImageIcon name="chevron-left" size={40} />
      </TouchableOpacity>
      <Image
        source={source}
        style={StyleSheet.absoluteFill}
        resizeMode="cover"
        onLoadEnd={onMediaLoadEnd}
        onLoad={onMediaLoad}
      />
      <TouchableOpacity style={styles.bottomButton} onPress={onSetContent}>
        <StereoImageIcon name="thumb-up-alt" size={64} />
      </TouchableOpacity>
    </View>
  );
};

export default PreviewScreen;
