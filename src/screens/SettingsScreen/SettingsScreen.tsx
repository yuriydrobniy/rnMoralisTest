import React from 'react';
import {View} from 'react-native';

// components
import SignOut from '../../components/SignOut/SignOut';

// styles
import styles from './styles';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rectangle} />
      <View style={styles.rectangle1} />
      <View style={styles.rectangle2} />
      <View style={styles.rectangle3} />
      <SignOut likeArt={true} />
    </View>
  );
};

export default SettingsScreen;
