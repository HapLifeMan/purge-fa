(function () {
'use strict';

var _WINDOW = {};
try {
  if (typeof window !== 'undefined') _WINDOW = window;
  
} catch (e) {}

var _ref = _WINDOW.navigator || {};
var _ref$userAgent = _ref.userAgent;
var userAgent = _ref$userAgent === undefined ? '' : _ref$userAgent;

var WINDOW = _WINDOW;




var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';









var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);



var RESERVED_CLASSES = ['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter'].concat(oneToTen.map(function (n) {
  return n + 'x';
})).concat(oneToTwenty.map(function (n) {
  return 'w-' + n;
}));

function bunker(fn) {
  try {
    fn();
  } catch (e) {
    if (undefined !== 'production') {
      throw e;
    }
  }
}

var icons$1 = {
  "user-circle": [512, 512, [], "f2bd", "M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 32c118.663 0 216 96.055 216 216 0 45.887-14.373 88.578-38.928 123.692-11.413-36.912-44.537-64.38-84.385-67.413C371.483 288.374 384 257.149 384 224c0-70.741-57.249-128-128-128-70.74 0-128 57.249-128 128 0 33.149 12.517 64.374 35.313 88.279-39.861 3.033-72.994 30.519-84.396 67.45C54.424 344.761 40 302.154 40 256c0-118.663 96.055-216 216-216zm-96 184c0-53.019 42.981-96 96-96s96 42.981 96 96-42.981 96-96 96-96-42.981-96-96zm-53.333 188.058c0-43.808 31.782-68.058 64-68.058h40.622c28.662 10.663 60.712 10.68 89.422 0h40.622c32.717 0 64 24.665 64 68.073-83.416 79.913-215.066 79.926-298.666-.015z"],
};

var w = WINDOW || {};

if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].packs) w[NAMESPACE_IDENTIFIER].packs = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];

var namespace = w[NAMESPACE_IDENTIFIER];

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

function define(prefix) {
  if (typeof namespace.hooks.addPack === 'function') {
    namespace.hooks.addPack(prefix, icons$1);
  } else {
    namespace.packs[prefix] = _extends({}, namespace.packs[prefix] || {}, icons$1);
  }
}

bunker(function () {
  define('fal');
});

}());
