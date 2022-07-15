import {StyleSheet} from 'react-native';
import Fonts from '../../../theme/fonts';
import Colors from '../../../theme/colors';

const styles = StyleSheet.create({
  container: {
    padding: 8,
    justifyContent: 'flex-start',
    width: '100%',
    backgroundColor: Colors.blackLight,
    flexDirection: 'row',
    alignItems: 'baseline',
    borderBottomWidth: 1,
    borderBottomColor: Colors.greyCoal,
  },
  text: {
    fontFamily: Fonts.type.light,
    fontSize: Fonts.size.font14,
    color: Colors.white,
  },
  textAmount: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.font16,
    color: Colors.white,
  },
});

export default styles;
