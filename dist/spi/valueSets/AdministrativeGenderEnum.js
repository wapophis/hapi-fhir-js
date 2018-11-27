"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AdministrativeGenderEnum = void 0;
var AdministrativeGenderEnum = Object.freeze({
  "MALE": {
    value: 'male',
    display: "Masculino"
  },
  "FEMALE": {
    value: 'female',
    display: "Femenino"
  },
  "OTHER": {
    value: 'other',
    display: "Otro"
  },
  "UNKNOWN": {
    value: 'unknown',
    display: "Desconocido"
  },
  getByValue: function getByValue(code) {
    for (var propName in this) {
      if (typeof this[propName] != "undefined" && this[propName].value === code) {
        return this[propName];
      }
    }
  }
});
exports.AdministrativeGenderEnum = AdministrativeGenderEnum;
var _default = AdministrativeGenderEnum;
exports.default = _default;
//# sourceMappingURL=AdministrativeGenderEnum.js.map