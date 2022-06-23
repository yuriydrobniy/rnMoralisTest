import {StyleSheet} from 'react-native';
import Colors from '../../theme/colors';

const styles = StyleSheet.create({
  bottomBar: {
    height: 60,
    backgroundColor: Colors.neonDarkGreyT,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    paddingHorizontal: 10,
    alignSelf: 'center',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    position: 'absolute',
    bottom: 0,
  },
  middleIcon: {
    bottom: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.neonBlue,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.6,
    elevation: 8,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    alignItems: 'center',
    width: 60,
  },
  middleIconWrapper: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 10,
  },
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {color: Colors.white},
  textActive: {color: Colors.neonBlue},
  cameraText: {fontSize: 12, color: 'white'},
  cameraIconWrapper: {alignItems: 'center'},
});

export default styles;
