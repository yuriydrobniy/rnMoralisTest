import {StyleSheet} from 'react-native';
import Color from '../../../theme/colors';

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: Color.blackMid,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Color.white,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {
    color: Color.white,
  },
  block: {
    paddingHorizontal: 16,
  },
});

export default styles;
