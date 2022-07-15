import {StyleSheet} from 'react-native';
import Colors from '../../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.blackMid,
  },
  rectangle: {
    position: 'absolute',
    backgroundColor: '#919191',

    width: '85%',
    height: '80%',
  },
  rectangle1: {
    position: 'absolute',
    backgroundColor: '#7e7e7e',
    width: '75%',
    height: '70%',
  },
  rectangle2: {
    position: 'absolute',
    backgroundColor: '#5b5b5b',
    width: '65%',
    height: '60%',
  },
  rectangle3: {
    position: 'absolute',
    backgroundColor: '#525252',
    width: '55%',
    height: '50%',
  },
});

export default styles;
