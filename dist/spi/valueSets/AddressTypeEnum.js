"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AddressTypeEnum = void 0;
var AddressTypeEnum = Object.freeze({
  "POSTAL": {
    value: 'postal',
    display: "Postal"
  },
  "PHYSICAL": {
    value: 'physical',
    display: "Física"
  },
  "BOTH": {
    value: 'both',
    display: "Postal y física"
  },
  getByValue: function getByValue(code) {
    for (var propName in this) {
      if (typeof this[propName] != "undefined" && this[propName].value === code) {
        return this[propName];
      }
    }
  }
});
exports.AddressTypeEnum = AddressTypeEnum;
var _default = AddressTypeEnum;
exports.default = _default;
//# sourceMappingURL=AddressTypeEnum.js.map