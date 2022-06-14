import {StyleSheet} from 'react-native';
import Color from '../../../theme/colors';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    paddingHorizontal: 8,
    backgroundColor: Color.red,
    borderBottomLeftRadius: 10,
    zIndex: 1,
    textAlign: 'center',
  },
  text: {
    color: Color.white,
    textAlign: 'center',
  },
});

export default styles;
