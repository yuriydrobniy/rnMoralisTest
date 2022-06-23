import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#343434',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangle: {
    position: 'absolute',
    backgroundColor: '#525252',
    width: '85%',
    height: '80%',
  },
  rectangle1: {
    position: 'absolute',
    backgroundColor: '#5b5b5b',
    width: '75%',
    height: '70%',
  },
  rectangle2: {
    position: 'absolute',
    backgroundColor: '#7e7e7e',
    width: '65%',
    height: '60%',
  },
  rectangle3: {
    position: 'absolute',
    backgroundColor: '#919191',
    width: '55%',
    height: '50%',
  },
  wrapper: {flex: 1, paddingHorizontal: 20},
  logoWrapper: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  buttonWrapper: {paddingBottom: 60},
});

export default styles;
