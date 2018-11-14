"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _DomainResource2 = require("../DomainResource.js");

var _ValidationRules = require("../../utils/ValidationRules.js");

var _HumanDt = require("../dataTypes/HumanDt.js");

var _IdentifierDt = require("../dataTypes/IdentifierDt.js");

var _ContactPointDt = require("../dataTypes/ContactPointDt.js");

var _AddressDt = require("../dataTypes/AddressDt.js");

var _AdministrativeGenderEnum = require("../valueSets/AdministrativeGenderEnum.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Patient =
/*#__PURE__*/
function (_DomainResource) {
  _inherits(Patient, _DomainResource);

  function Patient(root) {
    var _this;

    _classCallCheck(this, Patient);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Patient).call(this, root));

    if ((0, _ValidationRules.isValid)(root)) {
      try {
        _this.identifier = root.identifier;
        _this.active = root.active;
        _this.name = root.name;
        _this.telecom = root.telecom;
        _this.gender = root.gender;
        _this.birthDate = root.birthDate;
        _this.deceased = root.deceased;
        _this.address = root.address;
        _this.maritalStatus = root.maritalStatus;
        _this.multipleBirth = root.multipleBirth;
        _this.photo = root.photo;
        _this.contact = root.contact;
        _this.animal = root.animal;
        _this.communication = root.communication;
        _this.generalPractitioner = root.generalPractitioner;
        _this.managingOrganization = root.managingOrganization;
        _this.link = root.link;
      } catch (error) {
        console.error(error);
      }
    }

    return _this;
  }

  _createClass(Patient, [{
    key: "addIdentifier",
    value: function addIdentifier(newValue) {
      if ((0, _ValidationRules.isUndefined)(newValue)) {
        var oVal = new _IdentifierDt.IdentifierDt();
        this.name.push(oVal);
        return oVal;
      }

      this.push(newValue);
      return this;
    }
  }, {
    key: "getIdentifierFirstRep",
    value: function getIdentifierFirstRep() {
      return this.identifier[0];
    }
  }, {
    key: "addName",
    value: function addName(newValue) {
      if ((0, _ValidationRules.isUndefined)(newValue)) {
        var oVal = new _HumanDt.HumanNameDt();
        this.name.push(oVal);
        return oVal;
      }

      this.name.push(newValue);
      return this;
    }
  }, {
    key: "getNameFirstRep",
    value: function getNameFirstRep() {
      return this.name[0];
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return _get(_getPrototypeOf(Patient.prototype), "isEmpty", this).call(this) && (0, _ValidationRules.isEmpty)(this.active) && (0, _ValidationRules.isEmptyArray)(this.address) && (0, _ValidationRules.isEmpty)(this.animal) && (0, _ValidationRules.isEmpty)(this.birthDate) && (0, _ValidationRules.isEmpty)(this.communication) && (0, _ValidationRules.isEmpty)(this.deceased) && (0, _ValidationRules.isEmpty)(this.gender) && (0, _ValidationRules.isEmpty)(this.generalPractitioner) && (0, _ValidationRules.isEmptyArray)(this.identifier) && (0, _ValidationRules.isEmpty)(this.link) && (0, _ValidationRules.isEmpty)(this.maritalStatus) && (0, _ValidationRules.isEmpty)(this.multipleBirth) && (0, _ValidationRules.isEmpty)(this.managingOrganization) && (0, _ValidationRules.isEmpty)(this.name) && (0, _ValidationRules.isEmpty)(this.photo) && (0, _ValidationRules.isEmptyArray)(this.telecom) && (0, _ValidationRules.isEmpty)(this.text);
    }
  }, {
    key: "identifier",
    get: function get() {
      if (!(0, _ValidationRules.isValid)(this.myIdentifer)) {
        this.myIdentifer = new Array();
      }

      var oVal = new Array();

      for (var i = 0; i < this.myIdentifer.length; i++) {
        if (this.myIdentifer[i] instanceof _IdentifierDt.IdentifierDt) {
          oVal.push(this.myIdentifer[i]);
        } else {
          oVal.push(new _IdentifierDt.IdentifierDt(this.myIdentifer[i]));
        }
      }

      return oVal;
    },
    set: function set(newValue) {
      this.myIdentifer = newValue;
      return this;
    }
  }, {
    key: "active",
    set: function set(newValue) {
      this.myActive = newValue;
      return this;
    },
    get: function get() {
      if (!(0, _ValidationRules.isValid)(this.myActive)) {
        this.myActive = new Boolean();
      }

      return this.myActive;
    }
  }, {
    key: "name",
    get: function get() {
      if (!Array.isArray(this.myName) || !(0, _ValidationRules.isValid)(this.myName)) {
        this.myName = new Array();
      }

      var oVal = new Array();

      for (var i = 0; i < this.myName.length; i++) {
        if (this.myName[i] instanceof _HumanDt.HumanNameDt) {
          oVal.push(this.myName[i]);
        } else {
          oVal.push(new _HumanDt.HumanNameDt(this.myName[i]));
        }
      }

      return oVal;
    },
    set: function set(newValue) {
      this.myName = newValue;
      return this;
    }
  }, {
    key: "telecom",
    set: function set(newValue) {
      this.myTelecom = newValue;
      return this;
    },
    get: function get() {
      if (!(0, _ValidationRules.isValid)(this.myTelecom)) {
        this.myTelecom = new Array();
      }

      var oVal = new Array();

      for (var i = 0; i < this.myTelecom.length; i++) {
        if (this.myTelecom[i] instanceof _ContactPointDt.ContactPointDt) {
          oVal.push(this.myTelecom[i]);
        } else {
          oVal.push(new _ContactPointDt.ContactPointDt(this.myTelecom[i]));
        }
      }

      return oVal;
    }
  }, {
    key: "gender",
    set: function set(newValue) {
      this.myGender = newValue;
      return this;
    },
    get: function get() {
      if (!(0, _ValidationRules.isValid)(this.myGender)) {
        this.myGender = new String();
      }

      return _AdministrativeGenderEnum.AdministrativeGenderEnum.getByValue(this.myGender);
    }
  }, {
    key: "birthDate",
    set: function set(newValue) {
      this.myBirthDate = newValue;
      return this;
    },
    get: function get() {
      if (!(0, _ValidationRules.isValid)(this.myBirthDate)) {
        this.myBirthDate = new Date(0, 0, 0);
      }

      return this.myBirthDate;
    }
  }, {
    key: "deceased",
    set: function set(newValue) {
      this.myDeceased = newValue;
      return this;
    },
    get: function get() {
      if (!(0, _ValidationRules.isValid)(this.myDeceased)) {
        this.myDeceased = new Object();
      }

      return this.myDeceased;
    }
  }, {
    key: "address",
    get: function get() {
      if (!(0, _ValidationRules.isValid)(this.myAddress)) {
        this.myAddress = new Array();
      }

      var oVal = new Array();

      for (var i = 0; i < this.myAddress.length; i++) {
        oVal.push(new _AddressDt.AddressDt(this.myAddress[i]));
      }

      return oVal;
    },
    set: function set(newValue) {
      this.myAddress = newValue;
      return this;
    }
  }, {
    key: "maritalStatus",
    set: function set(newValue) {
      this.myMaritalStatus = newValue;
      return this;
    },
    get: function get() {
      if (!(0, _ValidationRules.isValid)(this.myMaritalStatus)) {
        this.myMaritalStatus = new Object();
      }

      return this.myMaritalStatus;
    }
  }, {
    key: "multipleBirth",
    get: function get() {
      if (!(0, _ValidationRules.isValid)(this.myMultipleBirth)) {
        this.myMultipleBirth = new Object();
      }

      return this.myMultipleBirth;
    },
    set: function set(newValue) {
      this.myMultipleBirth = newValue;
      return this;
    }
  }, {
    key: "photo",
    set: function set(newValue) {
      this.myPhoto = newValue;
      return this;
    },
    get: function get() {
      if (!(0, _ValidationRules.isValid)(this.myPhoto)) {
        this.myPhoto = new String();
      }

      return this.myPhoto;
    }
  }, {
    key: "contact",
    set: function set(newValue) {
      this.myContact = newValue;
      return this;
    },
    get: function get() {
      if (!(0, _ValidationRules.isValid)(this.myContact)) {
        this.myContact = new Object();
      }

      return this.myContact;
    }
  }, {
    key: "animal",
    set: function set(newValue) {
      this.myAnimal = newValue;
      return this;
    },
    get: function get() {
      if (!(0, _ValidationRules.isValid)(this.myAnimal)) {
        this.myAnimal = new Object();
      }

      return this.myAnimal;
    }
  }, {
    key: "communication",
    set: function set(newValue) {
      this.myCommunication = newValue;
      return this;
    },
    get: function get() {
      if (!(0, _ValidationRules.isValid)(this.myCommunication)) {
        this.myCommunication = new Object();
      }

      return this.myCommunication;
    }
  }, {
    key: "generalPractitioner",
    get: function get() {
      if (!(0, _ValidationRules.isValid)(this.myGeneralPractitioner)) {
        this.myGeneralPractitioner = new String();
      }

      return this.myGeneralPractitioner;
    },
    set: function set(newValue) {
      this.myGeneralPractitioner = newValue;
      return this;
    }
  }, {
    key: "managingOrganization",
    set: function set(newValue) {
      this.myOrganization = newValue;
      return this;
    },
    get: function get() {
      if (!(0, _ValidationRules.isValid)(this.myOrganization)) {
        this.myOrganization = new String();
      }

      return this.myOrganization;
    }
  }, {
    key: "link",
    get: function get() {
      if (!(0, _ValidationRules.isValid)(this.myLink)) {
        this.myLink = new Object();
      }

      return this.myLink;
    },
    set: function set(newValue) {
      this.myLink = newValue;
      return this;
    }
  }]);

  return Patient;
}(_DomainResource2.DomainResource);

exports.default = Patient;
//# sourceMappingURL=Patient.js.map