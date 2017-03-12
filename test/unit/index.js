import Vue from 'vue';

Vue.config.productionTip = false;

// Polyfill fn.bind() for PhantomJS
/* eslint-disable no-extend-native */
Function.prototype.bind = require('function-bind');

// Babel Polyfill for PhantomJS
require('babel-polyfill');

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./specs', true, /\.spec$/);
testsContext.keys().forEach(testsContext);
const inCodeTestsContext = require.context('../../src', true, /\.spec$/);
inCodeTestsContext.keys().forEach(inCodeTestsContext);

// require all src files except main.js and .spec files for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
const srcContext = require.context('../../src', true, /^\.\/(?!((main(\.js)?)|([^.]*\.spec(\.js)?))$)/);
srcContext.keys().forEach(srcContext);
