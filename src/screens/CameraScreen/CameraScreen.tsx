import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

// components

// styles
import styles from './styles';

// types
import {RootState} from '../../store';
import {
  Camera,
  PhotoFile,
  TakePhotoOptions,
  TakeSnapshotOptions,
  useCameraDevices,
  VideoFile,
} from 'react-native-vision-camera';
import Color from '../../theme/colors';
import {useIsForeground} from '../../hooks/useIsForeground';
import {useIsFocused} from '@react-navigation/native';

const CameraScreen = ({navigation}) => {
  const camera = useRef<Camera>(null);
  console.log(' --> camera <--', camera);

  // check if camera page is active
  const isFocussed = useIsFocused();
  const isForeground = useIsForeground();
  const isActive = isFocussed && isForeground;

  const [cameraPermission, setCameraPermission] = useState(false);
  const getPermissions = useCallback(async () => {
    const permissionStatus = await Camera.getCameraPermissionStatus();
    console.log('permissionStatus', permissionStatus);
    if (permissionStatus !== 'authorized') {
      console.log('here');
      await Camera.requestCameraPermission();
    } else {
      setCameraPermission(true);
    }
  }, []);

  useEffect(() => {
    getPermissions();
  }, []);

  const [isCameraInitialized, setIsCameraInitialized] = useState(false);
  const onInitialized = useCallback(() => {
    console.log('Camera initialized!');
    setIsCameraInitialized(true);
  }, []);

  const onMediaCaptured = useCallback(
    (media: PhotoFile | VideoFile, type: 'photo' | 'video') => {
      console.log(`Media captured! ${JSON.stringify(media)}`);
      navigation.navigate('Preview', {
        path: media.path,
        type: type,
      });
    },
    [navigation],
  );

  const takePhotoOptions = useMemo<TakePhotoOptions & TakeSnapshotOptions>(
    () => ({
      photoCodec: 'jpeg',
      qualityPrioritization: 'speed',
      flash: 'off',
      quality: 90,
      skipMetadata: true,
    }),
    [],
  );

  const takePhoto = useCallback(async () => {
    console.log('TAKE_PHOTO')
    try {
      if (camera.current == null) {
        throw new Error('Camera ref is null!');
      }

      console.log('Taking photo...');
      const photo = await camera.current.takePhoto(takePhotoOptions);
      onMediaCaptured(photo, 'photo');
    } catch (e) {
      console.error('Failed to take photo!', e);
    }
  }, [camera, onMediaCaptured, takePhotoOptions]);

  const devices = useCameraDevices();
  const device = devices.front;

  console.log({devices, device});

  return (
    <View style={{flex: 1, backgroundColor: 'yellow'}}>
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
        <Icon name="chevron-left" size={40} />
      </TouchableOpacity>
      {/*<Icon name="photo-camera" size={24} />*/}
      <>
        {!device ? (
          <ActivityIndicator size="large" color={Color.black} />
        ) : (
          <Camera
            ref={camera}
            style={{flex: 1}}
            device={device}
            isActive={isActive}
            photo={true}
            onInitialized={onInitialized}
          />
        )}
      </>
      {isCameraInitialized && (
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
          onPress={takePhoto}>
          <Icon name="sentiment-satisfied-alt" size={64} color={Color.white} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CameraScreen;
