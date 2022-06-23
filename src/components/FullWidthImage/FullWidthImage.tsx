import React, {memo, useState} from 'react';
import {
  Image,
  View,
  NativeSyntheticEvent,
  ImageLoadEventData,
  LayoutChangeEvent,
} from 'react-native';
import {FullWidthImageProps} from '../../interfaces/components';
import styles from './styles';

const FullWidthImage = ({url}: FullWidthImageProps): JSX.Element => {
  const [imageRealSize, setImageRealSize] = useState<
    {width: number; height: number} | undefined
  >(undefined);
  const [layoutWidth, setLayoutWidth] = useState<number | undefined>(undefined);

  const onLoad = ({
    nativeEvent: {
      source: {width, height},
    },
  }: NativeSyntheticEvent<ImageLoadEventData>) => {
    const aspectRatio = width / layoutWidth!;
    setImageRealSize({width, height: height / aspectRatio});
  };

  const onLayout = (event: LayoutChangeEvent) => {
    setLayoutWidth(event.nativeEvent.layout.width);
  };

  return (
    <View onLayout={onLayout}>
      {layoutWidth && (
        <Image
          onLoad={onLoad}
          style={{
            ...styles.imageContainer,
            ...(imageRealSize ? imageRealSize : {}),
          }}
          source={{uri: url}}
        />
      )}
    </View>
  );
};

export default memo(FullWidthImage);
