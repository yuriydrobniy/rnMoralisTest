import {StyleSheet} from 'react-native';
import Colors from '../../../theme/colors';

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#7DE24E',
    borderRadius: 30,
    borderWidth: 0,
    height: 40,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'black',
  },
  iconWrapper: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.neonDarkGrey,
  },
  iconText: {
    color: Colors.white,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    backgroundColor: 'pink',
  },
  flex: {
    flex: 1,
  },
  container: {flex: 1, flexDirection: 'row', alignItems: 'flex-start'},
  errorText: {
    paddingLeft: 4,
    color: Colors.neonRed,
  },
});

export default styles;
