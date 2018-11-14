"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.NameUseEnum = void 0;
var NameUseEnum = Object.freeze({
  "USUAL": {
    value: 'usual',
    display: "Habitual"
  },
  "OFFICIAL": {
    value: 'official',
    display: "Oficial"
  },
  "TEMP": {
    value: 'temp',
    display: "Temporal"
  },
  "NICKNAME": {
    value: 'nickname',
    display: "Alias"
  },
  "ANONYMOUS": {
    value: 'anonymous',
    display: "Anónimo"
  },
  "OLD": {
    value: 'old',
    display: "Antiguo"
  },
  "MAIDEN": {
    value: 'maiden',
    display: "Nombre de casado/a"
  },
  getByValue: function getByValue(code) {
    for (var propName in this) {
      if (typeof this[propName] != "undefined" && this[propName].value === code) {
        return this[propName];
      }
    }
  }
});
exports.NameUseEnum = NameUseEnum;
var _default = NameUseEnum;
exports.default = _default;
//# sourceMappingURL=NameUseEnum.js.map