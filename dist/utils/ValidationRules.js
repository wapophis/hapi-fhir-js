"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUndefined = isUndefined;
exports.isNull = isNull;
exports.isEmpty = isEmpty;
exports.isValid = isValid;
exports.isEmptyArray = isEmptyArray;

function isUndefined(object) {
  return typeof object === 'undefined';
}

function isNull(object) {
  return object === null;
}

function isEmpty(object) {
  return object.length <= 0;
}

function isValid(object) {
  return !isUndefined(object) && !isNull(object);
}

function isEmptyArray(object) {
  if (Array.isArray(object) && object.length > 0) {
    return false;
  }

  return true;
}
//# sourceMappingURL=ValidationRules.js.map