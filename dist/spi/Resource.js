"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FHIResource = void 0;

var _ValidationRules = require("../utils/ValidationRules.js");

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

var FHIResource =
/*#__PURE__*/
function (_Object) {
  _inherits(FHIResource, _Object);

  function FHIResource(rootObject) {
    var _this;

    _classCallCheck(this, FHIResource);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FHIResource).call(this));
    _this.myId = new String();
    _this.myResourceName = new String();
    _this.myExtensions = new Array();
    _this.myContainedResources = new Array();
    _this.myLanguaje = new String();

    if ((0, _ValidationRules.isValid)(rootObject)) {
      _this.id = rootObject.id;
      _this.resourceName = rootObject.resourceType;
      _this.extensions = rootObject.extensions;
      _this.contained = rootObject.contained;
      _this.languaje = rootObject.languaje;
    }

    return _this;
  }

  _createClass(FHIResource, [{
    key: "isEmpty",
    value: function isEmpty() {
      return (0, _ValidationRules.isEmptyArray)(this.contained) && (0, _ValidationRules.isEmptyArray)(this.extensions) && (0, _ValidationRules.isEmpty)(this.id);
    }
  }, {
    key: "getNamedExtension",
    value: function getNamedExtension(extensionUri) {
      if ((0, _ValidationRules.isValid)(extensionUri) && (0, _ValidationRules.isValid)(this.myExtensions)) {
        return this._searchExtensionByName(extensionUri);
      }
    }
  }, {
    key: "_addContainedResource",
    value: function _addContainedResource(resourceReference) {
      if ((0, _ValidationRules.isValid)(resourceReference)) {
        this.contained.push(resourceReference);
      }

      return this;
    }
  }, {
    key: "_searchExtensionByName",
    value: function _searchExtensionByName(extensionUri) {
      for (var extension in this.myExtensions) {
        if ((0, _ValidationRules.isValid)(extension) && extension.url === extensionUri) {
          return extension;
        }
      }

      return new Object();
    }
  }, {
    key: "id",
    get: function get() {
      if (!(0, _ValidationRules.isValid)(this.myId)) {
        this.myId = new String();
      }

      return this.myId;
    },
    set: function set(newId) {
      if ((0, _ValidationRules.isValid)(this.myId) && (0, _ValidationRules.isValid)(newId)) {
        this.myId = newId;
      }

      return this;
    }
  }, {
    key: "resourceName",
    get: function get() {
      if (!(0, _ValidationRules.isValid)(this.myResourceName)) {
        this.myResourceName = new String();
      }

      return this.myResourceName;
    },
    set: function set(newResourceName) {
      if ((0, _ValidationRules.isValid)(this.myResourceName) && (0, _ValidationRules.isValid)(newResourceName)) {
        this.myResourceName = newResourceName;
      }

      return this;
    }
  }, {
    key: "extensions",
    get: function get() {
      if (!(0, _ValidationRules.isValid)(this.myExtensions)) {
        this.myExtensions = new Array();
      }

      return this.myExtensions;
    },
    set: function set(arrayExtension) {
      if (Array.isArray(arrayExtension) && (0, _ValidationRules.isValid)(arrayExtension)) {
        this.myExtensions = arrayExtension;
      }

      return this;
    }
  }, {
    key: "contained",
    get: function get() {
      if (!(0, _ValidationRules.isValid)(this.myContainedResources)) {
        this.myContainedResources = new Array();
      }

      return this.myContainedResources;
    },
    set: function set(arrayContained) {
      if (Array.isArray(arrayContained) && (0, _ValidationRules.isValid)(arrayContained)) {
        this.myContainedResources = arrayContained;
      }

      return this;
    }
  }, {
    key: "languaje",
    get: function get() {
      if (!(0, _ValidationRules.isValid)(this.myLanguaje)) {
        this.myLanguaje = new String();
      }

      return this.myLanguaje;
    },
    set: function set(newLanguaje) {
      if ((0, _ValidationRules.isValid)(this.myLanguaje) && (0, _ValidationRules.isValid)(newLanguaje)) {
        this.myLanguaje = newLanguaje;
      }

      return this;
    }
  }]);

  return FHIResource;
}(_wrapNativeSuper(Object));

exports.FHIResource = FHIResource;
//# sourceMappingURL=Resource.js.map