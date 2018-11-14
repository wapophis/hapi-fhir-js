"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HumanNameDt = void 0;

var _ValidationRules = require("../utils/ValidationRules.js");

var _PeriodDt = _interopRequireDefault(require("./PeriodDt.js"));

var _NameUseEnum = _interopRequireDefault(require("../valueSets/NameUseEnum.js"));

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

var HumanNameDt =
/*#__PURE__*/
function (_Object) {
  _inherits(HumanNameDt, _Object);

  function HumanNameDt(root) {
    var _this;

    _classCallCheck(this, HumanNameDt);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HumanNameDt).call(this));

    if ((0, _ValidationRules.isValid)(root)) {
      _this.use = root.use;
      _this.text = root.text;
      _this.family = root.family;
      _this.given = root.given;
      _this.prefix = root.prefix;
      _this.suffix = root.suffix;
      _this.period = root.period;
    }

    return _this;
  }

  _createClass(HumanNameDt, [{
    key: "isEmpty",
    value: function isEmpty() {
      return (0, _ValidationRules.isEmptyArray)(this.given) && (0, _ValidationRules.isEmptyArray)(this.prefix) && (0, _ValidationRules.isEmptyArray)(this.suffix) && (0, _ValidationRules.isEmpty)(this.family) && (0, _ValidationRules.isEmpty)(this.text) && this.period.isEmpty();
    }
    /**
     * Adds an returns a new value for family if newVal undefined,
     * Adds an returns this if newValue is defined
     */

  }, {
    key: "addFamily",
    value: function addFamily(newVal) {
      if ((0, _ValidationRules.isValid)(newVal)) {
        this.family.push(newVal);
        return this;
      } else {
        var oVal = new String();
        this.family.push(oVal);
        return oVal;
      }
    }
    /**
     * Adds a given new value for family.
     * @param {*} newVal 
     */

  }, {
    key: "addGiven",
    value: function addGiven(newVal) {
      if ((0, _ValidationRules.isValid)(newVal)) {
        this.given.push(newVal);
        return this;
      } else {
        var oVal = new String();
        this.given.push(oVal);
        return oVal;
      }
    }
    /**
     * 
     * @param {*} newVal 
     */

  }, {
    key: "addPrefix",
    value: function addPrefix(newVal) {
      if ((0, _ValidationRules.isValid)(newVal)) {
        this.prefix.push(newVal);
        return this;
      } else {
        var oVal = new String();
        this.prefix.push(oVal);
        return oVal;
      }
    }
    /**
     * 
     * @param {*} newVal 
     */

  }, {
    key: "addSuffix",
    value: function addSuffix(newVal) {
      if ((0, _ValidationRules.isValid)(newVal)) {
        this.suffix.push(newVal);
        return this;
      } else {
        var oVal = new String();
        this.suffix.push(oVal);
        return oVal;
      }
    }
    /**
     * Return first element for family array;
     */

  }, {
    key: "getFamilyFirstRep",
    value: function getFamilyFirstRep() {
      return this.family[0];
    }
    /**
     * Return first element for given array.
     */

  }, {
    key: "getGivenFirstRep",
    value: function getGivenFirstRep() {
      return this.given[0];
    }
    /**
     * Return first element for suffix array.
     */

  }, {
    key: "getSuffixFirstRep",
    value: function getSuffixFirstRep() {
      return this.suffix[0];
    }
    /**
     * Return first element for prefix array.
     */

  }, {
    key: "getPreffixFirstRep",
    value: function getPreffixFirstRep() {
      return this.prefix[0];
    }
  }, {
    key: "use",
    get: function get() {
      if (!(0, _ValidationRules.isValid)(this.myUse)) {
        this.myUse = new String();
      }

      return _NameUseEnum.default.getByValue(this.myUse);
    },
    set: function set(newValue) {
      this.myUse = newValue;
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
    key: "family",
    get: function get() {
      if (!(0, _ValidationRules.isValid)(this.myFamily)) {
        this.myFamily = new String();
      }

      return this.myFamily;
    },
    set: function set(newValue) {
      this.myFamily = newValue;
      return this;
    }
  }, {
    key: "given",
    get: function get() {
      if (!(0, _ValidationRules.isValid)(this.myGiven) && Array.isArray(this.myGiven)) {
        this.myGiven = new Array();
      }

      return this.myGiven;
    },
    set: function set(newValue) {
      this.myGiven = newValue;
      return this;
    }
  }, {
    key: "prefix",
    get: function get() {
      if (!(0, _ValidationRules.isValid)(this.myPrefix)) {
        this.myPrefix = new Array();
      }

      return this.myPrefix;
    },
    set: function set(newValue) {
      this.myPrefix = newValue;
      return this;
    }
  }, {
    key: "suffix",
    get: function get() {
      if (!(0, _ValidationRules.isValid)(this.mySuffix)) {
        this.mySuffix = new Array();
      }

      return this.mySuffix;
    },
    set: function set(newValue) {
      this.mySuffix = newValue;
      return this;
    }
  }, {
    key: "period",
    get: function get() {
      if (!(0, _ValidationRules.isValid)(this.myPeriod)) {
        this.myPeriod = new _PeriodDt.default();
      }

      return this.myPeriod;
    },
    set: function set(newValue) {
      this.myPeriod = newValue;
      return this;
    }
  }]);

  return HumanNameDt;
}(_wrapNativeSuper(Object));

exports.HumanNameDt = HumanNameDt;
//# sourceMappingURL=HumanDt.js.map