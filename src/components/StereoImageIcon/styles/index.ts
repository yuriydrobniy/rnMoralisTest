import {StyleSheet} from 'react-native';
import Colors from '../../../theme/colors';

const styles = StyleSheet.create({
  iconFace: {
    color: Colors.lilac,
    zIndex: 1,
  },
  iconFace1: {
    color: Colors.neonBlue,
    top: 1,
    left: 1,
    position: 'absolute',
  },
  iconFace2: {
    color: Colors.neonPink,
    top: -1,
    left: -1,
    position: 'absolute',
  },
});

export default styles;
