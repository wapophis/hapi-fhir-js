"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContactPointDt = void 0;

var _ValidationRules = require("../utils/ValidationRules.js");

var _ContactPointUseEnum = _interopRequireDefault(require("../valueSets/ContactPointUseEnum.js"));

var _PeriodDt = _interopRequireDefault(require("./PeriodDt.js"));

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

var ContactPointDt =
/*#__PURE__*/
function (_Object) {
  _inherits(ContactPointDt, _Object);

  function ContactPointDt(root) {
    var _this;

    _classCallCheck(this, ContactPointDt);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ContactPointDt).call(this));

    if ((0, _ValidationRules.isValid)(root)) {
      _this.system = root.system;
      _this.value = root.value;
      _this.use = root.use;
      _this.rank = root.rank;
      _this.period = root.period;
    }

    return _this;
  }

  _createClass(ContactPointDt, [{
    key: "system",
    get: function get() {
      if (!(0, _ValidationRules.isValid)(this.mySystem)) {
        this.mySystem = new String();
      }

      return this.mySystem;
    },
    set: function set(newValue) {
      this.mySystem = newValue;
      return this;
    }
  }, {
    key: "value",
    get: function get() {
      if (!(0, _ValidationRules.isValid)(this.myValue)) {
        this.myValue = new String();
      }

      return this.myValue;
    },
    set: function set(newValue) {
      this.myValue = newValue;
      return this;
    }
  }, {
    key: "use",
    get: function get() {
      if (!(0, _ValidationRules.isValid)(this.myUse)) {
        this.myUse = new String();
      }

      if (_typeof(this.myUse) === 'object') {
        return this.myUse;
      }

      if (typeof this.myUse === 'string') {
        return _ContactPointUseEnum.default.getByValue(this.myUse);
      } //return this.myUse;

    },
    set: function set(newValue) {
      this.myUse = newValue;
      return this;
    }
  }, {
    key: "rank",
    get: function get() {
      if (!(0, _ValidationRules.isValid)(this.myRank)) {
        this.myRank = new String();
      }

      return this.myRank;
    },
    set: function set(newValue) {
      this.myRank = newValue;
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

  return ContactPointDt;
}(_wrapNativeSuper(Object));

exports.ContactPointDt = ContactPointDt;
//# sourceMappingURL=ContactPointDt.js.map