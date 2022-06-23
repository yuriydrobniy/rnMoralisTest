import React, {memo} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import Color from '../../theme/colors';
import StereoImageIcon from '../StereoImageIcon/StereoImageIcon';

interface TextInputFieldProps {
  onBlur: () => void;
  onChange: () => void;
  value: any;
  multiline?: boolean;
  deleteButton?: boolean;
  onClear: () => void;
  height?: number;
  placeholder: string;
}

const TextInputField = ({
  onBlur,
  onChange,
  value,
  multiline,
  deleteButton,
  onClear,
  height,
  placeholder,
}: TextInputFieldProps): JSX.Element => {
  return (
    <View style={styles.fieldWrapper}>
      <TextInput
        style={{
          ...styles.textInput,
          ...(height ? {height: height} : {}),
          ...(height ? styles.textAlignTop : {}),
        }}
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        multiline={multiline}
        placeholder={placeholder}
      />
      {deleteButton && (
        <TouchableOpacity style={styles.lockIcon} onPress={onClear}>
          <StereoImageIcon name="clear" size={24} />
          {/*<Icon name="clear" size={24} color={Color.grey} />*/}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default memo(TextInputField);
