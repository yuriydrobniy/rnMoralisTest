import React, {memo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {SelectButtonType} from '../../interfaces/components';

const SelectButton = (props: SelectButtonType): JSX.Element => {
  return (
    <TouchableOpacity
      key={props.key}
      style={styles.buttonStyle}
      onPress={() => props.onPress(props.text)}>
      <View style={styles.block}>
        <Text style={styles.buttonText}>{props.text}</Text>
      </View>
      <View style={styles.block}>
        {props.checked && <Text style={styles.buttonText}>&#10004;</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default memo(SelectButton);
