"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DomainResource = void 0;

var _ValidationRules = require("../utils/ValidationRules.js");

var _Resource = require("./Resource.js");

var _NarrativeDt = require("./dataTypes/NarrativeDt.js");

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

var DomainResource =
/*#__PURE__*/
function (_FHIResource) {
  _inherits(DomainResource, _FHIResource);

  function DomainResource(rootObject) {
    var _this;

    _classCallCheck(this, DomainResource);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DomainResource).call(this, rootObject));
    _this.myText = new Narrative();

    if ((0, _ValidationRules.isValid)(rootObject)) {
      _this.text = rootObject.text;
    }

    return _this;
  }

  _createClass(DomainResource, [{
    key: "addContained",
    value: function addContained(resource) {
      return _get(_getPrototypeOf(DomainResource.prototype), "_addContainedResource", this).call(this, resource);
    }
  }, {
    key: "addExtension",
    value: function addExtension(extensionUri) {
      if ((0, _ValidationRules.isUndefined)(extensionUri)) {
        var myObjectExtension = new Object();
        this.myExtensions.push(myObjectExtension);
        return myObjectExtension;
      }

      if (!(0, _ValidationRules.isValid)(_get(_getPrototypeOf(DomainResource.prototype), "_searchExtensionByName", this).call(this, extensionUri))) {
        var _myObjectExtension = new Object();

        _myObjectExtension.url = extensionUri;
        this.myExtensions.push(_myObjectExtension);
      }

      return this;
    }
  }, {
    key: "getExtensionsByUrl",
    value: function getExtensionsByUrl(urlExtension) {
      var oVal = new Array();
      oVal.push(_get(_getPrototypeOf(DomainResource.prototype), "_searchExtensionByName", this).call(this, urlExtension));
      return oVal;
    }
  }, {
    key: "hasContained",
    value: function hasContained() {
      return (0, _ValidationRules.isValid)(this.myContainedResources) && this.myContainedResources.length > 0;
    }
  }, {
    key: "hasExtension",
    value: function hasExtension() {
      return (0, _ValidationRules.isValid)(this.myExtensions) && this.myContainedResources.length > 0;
      ;
    }
  }, {
    key: "hasText",
    value: function hasText() {
      return (0, _ValidationRules.isValid)(this.myText) && this.myText.length > 0;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.hasText() && _get(_getPrototypeOf(DomainResource.prototype), "isEmpty", this).call(this);
    }
  }, {
    key: "text",
    get: function get() {
      if (!(0, _ValidationRules.isValid)(this.myText)) {
        this.myText = new String();
      }

      return this.myText;
    },
    set: function set(newText) {
      if ((0, _ValidationRules.isValid)(this.myText) && (0, _ValidationRules.isValid)(newText)) {
        this.myText = new Narrative(newText);
      }

      return this;
    }
  }]);

  return DomainResource;
}(_Resource.FHIResource);

exports.DomainResource = DomainResource;
//# sourceMappingURL=DomainResource.js.map