'use strict';

if (window) {
  if (window.sortObjectList) {
    throw new Error('`window.sortObjectList` could not assigned.');
    return;
  }
  window.sortObjectList = sortObjectList;
} else {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports['default'] = sortObjectList;
}

/**
 * To sort an array of object by certain property.
 * @param  {Array<Object>}    objectList
 * @param  {String|Function}  options.sortBy
 * @param  {Boolean}          options.isDecreasing
 * @return {Array<Object>}
 */
function sortObjectList(objectList) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      sortBy = _ref.sortBy,
      _ref$isDecreasing = _ref.isDecreasing,
      isDecreasing = _ref$isDecreasing === undefined ? false : _ref$isDecreasing;

  if (!isArray(objectList) || !sortBy || Array.prototype.some.call(objectList, function (object) {
    return !isPlainObject(object);
  })) return objectList;

  var fetchProp = function fetchProp(object) {
    return typeof sortBy === 'function' ? sortBy(object) : object[sortBy];
  };

  return objectList.slice().sort(function (a, b) {
    var _ref2 = [fetchProp(a), fetchProp(b)],
        x = _ref2[0],
        y = _ref2[1];

    var factor = x < y ? -1 : x > y ? 1 : 0;
    return isDecreasing ? factor * -1 : factor;
  });
}

function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}

function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
