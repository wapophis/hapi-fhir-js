"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddressDt = void 0;

var _ValidationRules = require("../utils/ValidationRules.js");

var _PeriodDt = _interopRequireDefault(require("./PeriodDt.js"));

var _AddressTypeEnum = _interopRequireDefault(require("../valueSets/AddressTypeEnum.js"));

var _AddressUseEnum = _interopRequireDefault(require("../valueSets/AddressUseEnum.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var AddressDt =
/*#__PURE__*/
function (_Object) {
  _inherits(AddressDt, _Object);

  function AddressDt(root) {
    var _this;

    _classCallCheck(this, AddressDt);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AddressDt).call(this));

    if ((0, _ValidationRules.isValid)(root)) {
      _this.use = root.use;
      _this.type = root.type;
      _this.text = root.text;
      _this.line = root.line;
      _this.city = root.city;
      _this.district = root.district;
      _this.state = root.state;
      _this.postalCode = root.postalCode;
      _this.country = root.country;
      _this.period = root.period;
    }

    return _this;
  }

  _createClass(AddressDt, [{
    key: "isEmpty",
    value: function isEmpty() {
      return (0, _ValidationRules.isEmpty)(this.city) && (0, _ValidationRules.isEmpty)(this.country) && (0, _ValidationRules.isEmpty)(this.district) && (0, _ValidationRules.isEmptyArray)(this.line) && (0, _ValidationRules.isEmpty)(this.use) && (0, _ValidationRules.isEmpty)(this.postalCode) && (0, _ValidationRules.isEmpty)(this.state) && (0, _ValidationRules.isEmpty)(this.text);
    }
  }, {
    key: "use",
    get: function get() {
      if (!(0, _ValidationRules.isValid)(this.myUse)) {
        this.myUse = new String();
      }

      return _AddressUseEnum.default.getByValue(this.myUse);
    },
    set: function set(newValue) {
      this.myUse = newValue;
      return this.myUse;
    }
  }, {
    key: "type",
    get: function get() {
      if (!(0, _ValidationRules.isValid)(this.myType)) {
        this.myType = new String();
      }

      return _AddressTypeEnum.default.getByValue(this.myType);
    },
    set: function set(newValue) {
      this.myType = newValue;
      return this;
    }
  }, {
    key: "text",
    get: function get() {
      if (!(0, _ValidationRules.isValid)(this.myText)) {
        this.myText = new String();
      }

      return this.myText;
    },
    set: function set(newValue) {
      this.myText = newValue;
      return this;
    }
  }, {
    key: "line",
    get: function get() {
      if (!(0, _ValidationRules.isValid)(this.myLine) || !Array.isArray(this.myLine)) {
        this.myLine = new Array();
      }

      return this.myLine;
    },
    set: function set(newValue) {
      this.myLine = newValue;
      return this;
    }
  }, {
    key: "city",
    get: function get() {
      if (!(0, _ValidationRules.isValid)(this.myCity)) {
        this.myCity = new String();
      }

      return this.myCity;
    },
    set: function set(newValue) {
      this.myCity = newValue;
      return this;
    }
  }, {
    key: "district",
    get: function get() {
      if (!(0, _ValidationRules.isValid)(this.myDistrict)) {
        this.myDistrict = new String();
      }

      return this.myDistrictmyUse;
    },
    set: function set(newValue) {
      this.myDistrict = newValue;
      return this;
    }
  }, {
    key: "state",
    get: function get() {
      if (!(0, _ValidationRules.isValid)(this.myState)) {
        this.myState = new String();
      }

      return this.myState;
    },
    set: function set(newValue) {
      this.myState = newValue;
      return this;
    }
  }, {
    key: "postalCode",
    get: function get() {
      if (!(0, _ValidationRules.isValid)(this.myPostalCode)) {
        this.myPostalCode = new String();
      }

      return this.myPostalCode;
    },
    set: function set(newValue) {
      this.myPostalCode = newValue;
      return this;
    }
  }, {
    key: "country",
    get: function get() {
      if (!(0, _ValidationRules.isValid)(this.myCountry)) {
        this.myCountry = new String();
      }

      return this.myCountry;
    },
    set: function set(newValue) {
      this.myCountry = newValue;
      return this;
    }
  }, {
    key: "period",
    get: function get() {
      if (!(0, _ValidationRules.isValid)(this.myPeriod)) {
        this.myPeriod = new _PeriodDt.default();
      }

      return new _PeriodDt.default(this.myPeriod);
    },
    set: function set(newValue) {
      this.myPeriod = newValue;
      return this;
    }
  }]);

  return AddressDt;
}(_wrapNativeSuper(Object));

exports.AddressDt = AddressDt;
//# sourceMappingURL=AddressDt.js.map