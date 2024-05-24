import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import ExampleBottomSheet from '../bottomsheet.js';

const Wrapper = () => {
  return (
    <GestureHandlerRootView>
      <ExampleBottomSheet />
    </GestureHandlerRootView>
  );
};

export default Wrapper;
