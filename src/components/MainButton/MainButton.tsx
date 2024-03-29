import React from 'react';
import {Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from './styles';
import {Button} from '../../interfaces/components';
import Color from '../../theme/colors';

const MainButton = ({disabled, ...props}: Button): JSX.Element => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.buttonStyle, disabled && styles.disabledBackground]}
      onPress={props.onPress}>
      {props.isLoading ? (
        <ActivityIndicator size="small" color={Color.white} />
      ) : (
        <Text style={styles.buttonText}>{props.text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default MainButton;
