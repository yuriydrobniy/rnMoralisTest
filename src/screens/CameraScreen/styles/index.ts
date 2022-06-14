import {StyleSheet} from 'react-native';
import Colors from '../../../theme/colors';

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.neonDarkGrey,
  },
  bottomButton: {
    position: 'absolute',
    bottom: 60,
    zIndex: 1,
    padding: 0,
    alignSelf: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    padding: 10,
    alignSelf: 'flex-start',
  },
});

export default styles;
