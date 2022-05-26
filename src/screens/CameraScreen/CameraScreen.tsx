import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

// components

// styles
import styles from './styles';

// types
import {RootState} from '../../store';

const CameraScreen = ({navigation}) => {
  const account = useSelector((state: RootState) => state.account);
  console.log('account', account);

  return (
    <View>
      <TouchableOpacity
        style={{backgroundColor: 'pink', padding: 10, alignSelf: 'flex-start'}}
        onPress={() => navigation.goBack()}>
        <Icon name="chevron-left" size={40} />
      </TouchableOpacity>
      <Icon name="photo-camera" size={24} />
    </View>
  );
};

export default CameraScreen;
