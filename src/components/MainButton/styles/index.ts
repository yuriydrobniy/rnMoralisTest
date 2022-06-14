import {StyleSheet} from 'react-native';
import Colors from '../../../theme/colors';

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: Colors.blackMid,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Colors.white,
    height: 40,
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.white,
  },
  disabledBackground: {
    backgroundColor: Colors.grey,
  },
});

export default styles;
