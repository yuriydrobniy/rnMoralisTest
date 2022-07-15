import {StyleSheet} from 'react-native';
import Colors from '../../theme/colors';

const borderColor = Colors.greySpace;

const styles = StyleSheet.create({
  bottomBar: {
    height: 60,
    backgroundColor: Colors.blackCoal,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    paddingHorizontal: 10,
    alignSelf: 'center',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    position: 'absolute',
    bottom: 0,
    borderLeftWidth: 1,
    borderLeftColor: borderColor,
    borderRightWidth: 1,
    borderRightColor: borderColor,
    borderTopWidth: 1,
    borderTopColor: borderColor,
    shadowColor: Colors.greySpace,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.6,
  },
  linearGradient: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  // linearGradientLeft: {right: "50%", left: 0},
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
