import React, {memo, useEffect, useState} from 'react';
import {Image, View, LayoutChangeEvent} from 'react-native';
import {FullWidthImageProps} from '../../interfaces/components';
import styles from './styles';

const FullWidthImage = ({url}: FullWidthImageProps): JSX.Element => {
  const [imageRealSize, setImageRealSize] = useState<
    {width: number; height: number} | undefined
  >(undefined);
  const [layoutWidth, setLayoutWidth] = useState<number | undefined>(undefined);

  const onLayout = (event: LayoutChangeEvent) => {
    setLayoutWidth(event.nativeEvent.layout.width);
  };

  useEffect(() => {
    if (layoutWidth) {
      Image.getSize(url, (width, height) => {
        const aspectRatio = width / layoutWidth!;
        setImageRealSize({width: layoutWidth, height: height / aspectRatio});
      });
    }
  }, [layoutWidth, url]);

  return (
    <View onLayout={onLayout}>
      {layoutWidth && (
        <Image
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
