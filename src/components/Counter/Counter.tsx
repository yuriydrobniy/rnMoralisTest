import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {RootState} from '../../store';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from '../../store/slice/counterSlice';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View>
      <TouchableOpacity onPress={() => dispatch(increment())}>
        <Text>Increment</Text>
      </TouchableOpacity>
      <Text>{count}</Text>
      <TouchableOpacity onPress={() => dispatch(decrement())}>
        <Text>Decrement</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
