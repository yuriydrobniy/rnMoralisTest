import {StyleSheet} from 'react-native';
import Colors from '../../../theme/colors';
import Fonts from '../../../theme/fonts';

const styles = StyleSheet.create({
  fieldWrapper: {
    width: '100%',
    position: 'relative',
  },

  textInput: {
    flex: 1,
    height: 45,
    borderColor: Colors.lilac,
    borderWidth: 1,
    color: Colors.black,
    fontSize: Fonts.size.font15,
    borderRadius: 4,
    paddingLeft: 4,
  },
  lockIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
    padding: 2,
    paddingBottom: 0,
    zIndex: 1,
  },
  textAlignTop: {
    textAlignVertical: 'top',
    paddingTop: 10,
  },
});

export default styles;
