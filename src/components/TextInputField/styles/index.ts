import {StyleSheet} from 'react-native';
import Colors from '../../../theme/colors';
import Fonts from '../../../theme/fonts';

const styles = StyleSheet.create({
  fieldWrapper: {
    width: '100%',
    position: 'relative',
    // flexDirection: "row",
    // alignItems: "center",
    // textTransform: "lowercase",
  },

  textInput: {
    flex: 1,
    height: 45,
    borderColor: Colors.lilac,
    borderWidth: 1,
    color: Colors.black,
    fontSize: Fonts.size.font15,
    borderRadius: 4,
  },
  lockIcon: {
    position: 'absolute',
    right: 10,
    top: 12,
    padding: 2,
    paddingBottom: 0,
    zIndex: 1,
  },
  textAlignTop: {
    textAlignVertical: 'top',
  },
});

export default styles;
