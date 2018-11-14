"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContactPointUseEnum = void 0;
var ContactPointUseEnum = Object.freeze({
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
    display: "Antiguo"
  },
  "MOBILE": {
    value: 'mobile',
    display: "Móvil"
  },
  getByValue: function getByValue(code) {
    for (var propName in this) {
      if (typeof this[propName] != "undefined" && this[propName].value === code) {
        return this[propName];
      }
    }
  }
});
exports.ContactPointUseEnum = ContactPointUseEnum;
//# sourceMappingURL=ContactPointUseEnum.js.map