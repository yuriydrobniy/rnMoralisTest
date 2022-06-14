import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  backButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    padding: 10,
    alignSelf: 'flex-start',
  },
  bottomButton: {
    position: 'absolute',
    bottom: 60,
    zIndex: 1,
    padding: 0,
    alignSelf: 'center',
  },
});

export default styles;
