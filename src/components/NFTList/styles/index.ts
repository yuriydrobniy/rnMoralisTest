import {StyleSheet} from 'react-native';
import Colors from '../../../theme/colors';

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 160,
    backgroundColor: Colors.blackMid,
  },
  itemContainer: {borderRadius: 8, overflow: 'hidden'},
  textContainer: {
    paddingVertical: 8,
    paddingHorizontal: 4,
    backgroundColor: Colors.white,
  },
  text: {
    color: Colors.black,
  },
  separator: {height: 16, width: '100%'},
});

export default styles;
