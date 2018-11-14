"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AddressUseEnum = void 0;
var AddressUseEnum = Object.freeze({
  "HOME": {
    value: 'home',
    display: "Hogar"
  },
  "WORK": {
    value: 'work',
    display: "Trabajo"
  },
  "TEMP": {
    value: 'temp',
    display: "Temporal"
  },
  "OLD": {
    value: 'old',
    display: "Antiguo/Incorrecto"
  },
  getByValue: function getByValue(code) {
    for (var propName in this) {
      if (typeof this[propName] != "undefined" && this[propName].value === code) {
        return this[propName];
      }
    }
  }
});
exports.AddressUseEnum = AddressUseEnum;
var _default = AddressUseEnum;
exports.default = _default;
//# sourceMappingURL=AddressUseEnum.js.map