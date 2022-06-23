import {StyleSheet} from 'react-native';
import Colors from '../../../theme/colors';

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    paddingHorizontal: 12,
    // paddingVertical: 10,
    backgroundColor: 'yellow',
  },
  itemContainer: {},
  textContainer: {
    paddingVertical: 8,
    paddingHorizontal: 4,
    backgroundColor: Colors.white,
  },
  text: {
    color: Colors.black,
  },
});

export default styles;
