import {StyleSheet} from 'react-native';
import Colors from '../../../theme/colors';
import Fonts from '../../../theme/fonts';

const styles = StyleSheet.create({
  container: {},
  containerText: {
    padding: 8,
    width: '100%',
    backgroundColor: Colors.blackMid,
    borderBottomWidth: 1,
    borderBottomColor: Colors.greyCoal,
  },
  text: {
    fontFamily: Fonts.type.light,
    fontSize: Fonts.size.font14,
    color: Colors.white,
  },
});

export default styles;
