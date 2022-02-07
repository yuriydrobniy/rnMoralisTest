'use strict';

import {Buffer} from 'buffer';
const {NativeModules} = require('react-native');

const randomBytes = size => {
  if (NativeModules.RNGetRandomValues) {
    console.log('NativeModules.RNGetRandomValues --> §', {size, modules: NativeModules.RNGetRandomValues})
    const res = NativeModules.RNGetRandomValues.getRandomBase64(size);
    console.log('NativeModules.RNGetRandomValues -->', res)
    return Buffer(res);
  } else {
    throw new Error('Native module not found');
  }
};

exports.randomBytes =
  exports.rng =
  exports.pseudoRandomBytes =
  exports.prng =
    randomBytes;
