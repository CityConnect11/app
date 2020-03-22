exports.ids = [8];
exports.modules = {

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "2v/k":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("VbXa"));

var _leaflet = __webpack_require__("hgx0");

var _context = __webpack_require__("FANO");

var _Path2 = _interopRequireDefault(__webpack_require__("ItY8"));

var GeoJSON = /*#__PURE__*/function (_Path) {
  (0, _inheritsLoose2.default)(GeoJSON, _Path);

  function GeoJSON() {
    return _Path.apply(this, arguments) || this;
  }

  var _proto = GeoJSON.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new _leaflet.GeoJSON(props.data, this.getOptions(props));
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (typeof toProps.style === 'function') {
      this.leafletElement.setStyle(toProps.style);
    } else {
      this.setStyleIfChanged(fromProps, toProps);
    }
  };

  return GeoJSON;
}(_Path2.default);

var _default = (0, _context.withLeaflet)(GeoJSON);

exports.default = _default;

/***/ }),

/***/ "2vg/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("8OQS"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("VbXa"));

var _leaflet = __webpack_require__("hgx0");

var _fastDeepEqual = _interopRequireDefault(__webpack_require__("YwNs"));

var _context = __webpack_require__("FANO");

var _GridLayer2 = _interopRequireDefault(__webpack_require__("9eaS"));

var _MapEvented = __webpack_require__("vyCg");

var WMSTileLayer = /*#__PURE__*/function (_GridLayer) {
  (0, _inheritsLoose2.default)(WMSTileLayer, _GridLayer);

  function WMSTileLayer() {
    return _GridLayer.apply(this, arguments) || this;
  }

  var _proto = WMSTileLayer.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    var url = props.url,
        params = (0, _objectWithoutPropertiesLoose2.default)(props, ["url"]);

    var _this$getOptions = this.getOptions(params),
        _l = _this$getOptions.leaflet,
        options = (0, _objectWithoutPropertiesLoose2.default)(_this$getOptions, ["leaflet"]);

    return new _leaflet.TileLayer.WMS(url, options);
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    _GridLayer.prototype.updateLeafletElement.call(this, fromProps, toProps);

    var prevUrl = fromProps.url,
        _po = fromProps.opacity,
        _pz = fromProps.zIndex,
        prevProps = (0, _objectWithoutPropertiesLoose2.default)(fromProps, ["url", "opacity", "zIndex"]);

    var _this$getOptions2 = this.getOptions(prevProps),
        _pl = _this$getOptions2.leaflet,
        prevParams = (0, _objectWithoutPropertiesLoose2.default)(_this$getOptions2, ["leaflet"]);

    var url = toProps.url,
        _o = toProps.opacity,
        _z = toProps.zIndex,
        props = (0, _objectWithoutPropertiesLoose2.default)(toProps, ["url", "opacity", "zIndex"]);

    var _this$getOptions3 = this.getOptions(props),
        _l = _this$getOptions3.leaflet,
        params = (0, _objectWithoutPropertiesLoose2.default)(_this$getOptions3, ["leaflet"]);

    if (url !== prevUrl) {
      this.leafletElement.setUrl(url);
    }

    if (!(0, _fastDeepEqual.default)(params, prevParams)) {
      this.leafletElement.setParams(params);
    }
  };

  _proto.getOptions = function getOptions(params) {
    var superOptions = _GridLayer.prototype.getOptions.call(this, params);

    return Object.keys(superOptions).reduce(function (options, key) {
      if (!_MapEvented.EVENTS_RE.test(key)) {
        options[key] = superOptions[key];
      }

      return options;
    }, {});
  };

  return WMSTileLayer;
}(_GridLayer2.default);

var _default = (0, _context.withLeaflet)(WMSTileLayer);

exports.default = _default;

/***/ }),

/***/ "5V5n":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = pick;

function pick(object, keys) {
  return keys.reduce(function (obj, key) {
    if (typeof object[key] !== 'undefined') {
      obj[key] = object[key];
    }

    return obj;
  }, {});
}

/***/ }),

/***/ "8OQS":
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "9eaS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("VbXa"));

var _leaflet = __webpack_require__("hgx0");

var _MapLayer2 = _interopRequireDefault(__webpack_require__("gU4H"));

var GridLayer = /*#__PURE__*/function (_MapLayer) {
  (0, _inheritsLoose2.default)(GridLayer, _MapLayer);

  function GridLayer() {
    return _MapLayer.apply(this, arguments) || this;
  }

  var _proto = GridLayer.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new _leaflet.GridLayer(this.getOptions(props));
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    var opacity = toProps.opacity,
        zIndex = toProps.zIndex;

    if (opacity !== fromProps.opacity) {
      this.leafletElement.setOpacity(opacity);
    }

    if (zIndex !== fromProps.zIndex) {
      this.leafletElement.setZIndex(zIndex);
    }
  };

  _proto.getOptions = function getOptions(props) {
    var options = (0, _extends2.default)({}, _MapLayer.prototype.getOptions.call(this, props));
    var map = props.leaflet.map;

    if (map != null) {
      // $FlowFixMe: Object spread
      if (options.maxZoom == null && map.options.maxZoom != null) {
        // $FlowFixMe: Object spread
        options.maxZoom = map.options.maxZoom;
      } // $FlowFixMe: Object spread


      if (options.minZoom == null && map.options.minZoom != null) {
        // $FlowFixMe: Object spread
        options.minZoom = map.options.minZoom;
      }
    }

    return options;
  };

  _proto.render = function render() {
    return null;
  };

  return GridLayer;
}(_MapLayer2.default);

exports.default = GridLayer;

/***/ }),

/***/ "A7Ty":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("VbXa"));

var _leaflet = __webpack_require__("hgx0");

var _context = __webpack_require__("FANO");

var _MapControl2 = _interopRequireDefault(__webpack_require__("Nqfl"));

var AttributionControl = /*#__PURE__*/function (_MapControl) {
  (0, _inheritsLoose2.default)(AttributionControl, _MapControl);

  function AttributionControl() {
    return _MapControl.apply(this, arguments) || this;
  }

  var _proto = AttributionControl.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new _leaflet.Control.Attribution(props);
  };

  return AttributionControl;
}(_MapControl2.default);

var _default = (0, _context.withLeaflet)(AttributionControl);

exports.default = _default;

/***/ }),

/***/ "Bsaj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = void 0;

var _createClass2 = _interopRequireDefault(__webpack_require__("W8MJ"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("PJYZ"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("VbXa"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("lSNA"));

var _leaflet = __webpack_require__("hgx0");

var _reactDom = __webpack_require__("faye");

var _context = __webpack_require__("FANO");

var _MapComponent2 = _interopRequireDefault(__webpack_require__("R3g/"));

var SVGOverlay = /*#__PURE__*/function (_MapComponent) {
  (0, _inheritsLoose2.default)(SVGOverlay, _MapComponent);

  function SVGOverlay(props) {
    var _this;

    _this = _MapComponent.call(this, props) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "leafletElement", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "container", void 0);
    _this.leafletElement = _this.createLeafletElement(props);
    return _this;
  }

  var _proto = SVGOverlay.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    this.container = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    return new _leaflet.SVGOverlay(this.container, props.bounds, this.getOptions(props));
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.bounds !== fromProps.bounds) {
      this.leafletElement.setBounds(toProps.bounds);
    }

    if (toProps.opacity !== fromProps.opacity) {
      this.leafletElement.setOpacity(toProps.opacity);
    }

    if (toProps.zIndex !== fromProps.zIndex) {
      this.leafletElement.setZIndex(toProps.zIndex);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    _MapComponent.prototype.componentDidMount.call(this);

    this.layerContainer.addLayer(this.leafletElement);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    _MapComponent.prototype.componentDidUpdate.call(this, prevProps);

    if (this.props.attribution !== prevProps.attribution) {
      var map = this.props.leaflet.map;

      if (map != null && map.attributionControl != null) {
        map.attributionControl.removeAttribution(prevProps.attribution);
        map.attributionControl.addAttribution(this.props.attribution);
      }
    }

    this.updateLeafletElement(prevProps, this.props);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    _MapComponent.prototype.componentWillUnmount.call(this);

    this.layerContainer.removeLayer(this.leafletElement);
    this.container = null;
  };

  _proto.render = function render() {
    var children = this.props.children;

    if (children == null || this.container == null) {
      return null;
    }

    return (0, _reactDom.createPortal)(children, this.container);
  };

  (0, _createClass2.default)(SVGOverlay, [{
    key: "layerContainer",
    get: function get() {
      return this.props.leaflet.layerContainer || this.props.leaflet.map;
    }
  }]);
  return SVGOverlay;
}(_MapComponent2.default);

var _default = (0, _context.withLeaflet)(SVGOverlay);

exports.default = _default;

/***/ }),

/***/ "CTfC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.removeClassName = exports.addClassName = void 0;

var _leaflet = __webpack_require__("hgx0");

var splitClassName = function splitClassName(className) {
  if (className === void 0) {
    className = '';
  }

  return className.split(' ').filter(Boolean);
};

var addClassName = function addClassName(container, className) {
  splitClassName(className).forEach(function (cls) {
    _leaflet.DomUtil.addClass(container, cls);
  });
};

exports.addClassName = addClassName;

var removeClassName = function removeClassName(container, className) {
  splitClassName(className).forEach(function (cls) {
    _leaflet.DomUtil.removeClass(container, cls);
  });
};

exports.removeClassName = removeClassName;

var _default = function _default(container, prevClassName, nextClassName) {
  if (container != null && nextClassName !== prevClassName) {
    if (prevClassName != null && prevClassName.length > 0) {
      removeClassName(container, prevClassName);
    }

    if (nextClassName != null && nextClassName.length > 0) {
      addClassName(container, nextClassName);
    }
  }
};

exports.default = _default;

/***/ }),

/***/ "CtCT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("VbXa"));

var _leaflet = __webpack_require__("hgx0");

var _context = __webpack_require__("FANO");

var _MapLayer2 = _interopRequireDefault(__webpack_require__("gU4H"));

var ImageOverlay = /*#__PURE__*/function (_MapLayer) {
  (0, _inheritsLoose2.default)(ImageOverlay, _MapLayer);

  function ImageOverlay() {
    return _MapLayer.apply(this, arguments) || this;
  }

  var _proto = ImageOverlay.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    var el = new _leaflet.ImageOverlay(props.url, props.bounds, this.getOptions(props));
    this.contextValue = (0, _extends2.default)({}, props.leaflet, {
      popupContainer: el
    });
    return el;
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.url !== fromProps.url) {
      this.leafletElement.setUrl(toProps.url);
    }

    if (toProps.bounds !== fromProps.bounds) {
      this.leafletElement.setBounds((0, _leaflet.latLngBounds)(toProps.bounds));
    }

    if (toProps.opacity !== fromProps.opacity) {
      this.leafletElement.setOpacity(toProps.opacity);
    }

    if (toProps.zIndex !== fromProps.zIndex) {
      this.leafletElement.setZIndex(toProps.zIndex);
    }
  };

  return ImageOverlay;
}(_MapLayer2.default);

var _default = (0, _context.withLeaflet)(ImageOverlay);

exports.default = _default;

/***/ }),

/***/ "Dqlt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("VbXa"));

var _leaflet = __webpack_require__("hgx0");

var _context = __webpack_require__("FANO");

var _Path2 = _interopRequireDefault(__webpack_require__("ItY8"));

var Rectangle = /*#__PURE__*/function (_Path) {
  (0, _inheritsLoose2.default)(Rectangle, _Path);

  function Rectangle() {
    return _Path.apply(this, arguments) || this;
  }

  var _proto = Rectangle.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new _leaflet.Rectangle(props.bounds, this.getOptions(props));
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.bounds !== fromProps.bounds) {
      this.leafletElement.setBounds(toProps.bounds);
    }

    this.setStyleIfChanged(fromProps, toProps);
  };

  return Rectangle;
}(_Path2.default);

var _default = (0, _context.withLeaflet)(Rectangle);

exports.default = _default;

/***/ }),

/***/ "FANO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.withLeaflet = exports.LeafletProvider = exports.LeafletConsumer = exports.useLeaflet = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__("0TPh"));

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var leafletContext = (0, _react.createContext)({});

var useLeaflet = function useLeaflet() {
  return (0, _react.useContext)(leafletContext);
};

exports.useLeaflet = useLeaflet;
var LeafletConsumer = leafletContext.Consumer;
exports.LeafletConsumer = LeafletConsumer;
var LeafletProvider = leafletContext.Provider;
exports.LeafletProvider = LeafletProvider;

var withLeaflet = function withLeaflet(WrappedComponent) {
  var WithLeafletComponent = function WithLeafletComponent(props, ref) {
    return _react.default.createElement(LeafletConsumer, null, function (leaflet) {
      return _react.default.createElement(WrappedComponent, (0, _extends2.default)({}, props, {
        leaflet: leaflet,
        ref: ref
      }));
    });
  };

  var name = // flowlint-next-line sketchy-null-string:off
  WrappedComponent.displayName || WrappedComponent.name || 'Component';
  WithLeafletComponent.displayName = "Leaflet(" + name + ")";
  var LeafletComponent = (0, _react.forwardRef)(WithLeafletComponent);
  (0, _hoistNonReactStatics.default)(LeafletComponent, WrappedComponent);
  return LeafletComponent;
};

exports.withLeaflet = withLeaflet;

/***/ }),

/***/ "HJXT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("PJYZ"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("VbXa"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("lSNA"));

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _warning = _interopRequireDefault(__webpack_require__("2jOz"));

var _context = __webpack_require__("FANO");

var _updateClassName = __webpack_require__("CTfC");

var _omit = _interopRequireDefault(__webpack_require__("gtNC")); // flowlint sketchy-null-string:off


var idCounter = 0;

var uniqueId = function uniqueId() {
  return ++idCounter;
};

var LEAFLET_PANES = ['tile', 'shadow', 'overlay', 'map', 'marker', 'tooltip', 'popup'];
var PANE_RE = /-*pane/gi;

var isLeafletPane = function isLeafletPane(name) {
  return LEAFLET_PANES.indexOf(name.replace(PANE_RE, '')) !== -1;
};

var paneStyles = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};

var Pane = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2.default)(Pane, _Component);

  function Pane() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      name: undefined,
      context: undefined
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setStyle", function (_temp) {
      var _ref = _temp === void 0 ? _this.props : _temp,
          style = _ref.style,
          className = _ref.className;

      var pane = _this.getPane(_this.state.name);

      if (pane) {
        if (className) {
          (0, _updateClassName.addClassName)(pane, className);
        }

        if (style) {
          // Without the cast, Flow throws this error:
          //   Cannot assign style[key] to pane.style[key] because string
          //   is incompatible with number.
          Object.keys(style).forEach(function (key) {
            pane.style[key] = style[key];
          });
        }
      }
    });
    return _this;
  }

  var _proto = Pane.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.createPane(this.props);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (!this.state.name) {
      // Do nothing if this.state.name is undefined due to errors or
      // an invalid props.name value
      return;
    } // If the 'name' prop has changed the current pane is unmounted and a new
    // pane is created.


    if (this.props.name !== prevProps.name) {
      this.removePane();
      this.createPane(this.props);
    } else {
      // Remove the previous css class name from the pane if it has changed.
      // setStyle() will take care of adding in the updated className
      if (prevProps.className && this.props.className !== prevProps.className) {
        var pane = this.getPane(this.state.name);

        if (pane != null && prevProps.className != null) {
          (0, _updateClassName.removeClassName)(pane, prevProps.className);
        }
      } // Update the pane's DOM node style and class


      this.setStyle(this.props);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.removePane();
  };

  _proto.createPane = function createPane(props) {
    var map = props.leaflet.map;
    var name = props.name || "pane-" + uniqueId();

    if (map != null && map.createPane != null) {
      var isDefault = isLeafletPane(name);
      var existing = isDefault || this.getPane(name);

      if (existing == null) {
        map.createPane(name, this.getParentPane());
      } else {
        var message = isDefault ? "You must use a unique name for a pane that is not a default leaflet pane (" + name + ")" : "A pane with this name already exists. (" + name + ")";
        false ? undefined : void 0;
      }

      this.setState({
        name: name,
        context: (0, _extends2.default)({}, props.leaflet, {
          pane: name
        })
      }, this.setStyle);
    }
  };

  _proto.removePane = function removePane() {
    // Remove the created pane
    var name = this.state.name;

    if (name != null) {
      var pane = this.getPane(name);
      if (pane != null && pane.remove) pane.remove();
      var map = this.props.leaflet.map;

      if (map != null && map._panes != null) {
        map._panes = (0, _omit.default)(map._panes, name);
        map._paneRenderers = (0, _omit.default)(map._paneRenderers, name);
      }
    }
  };

  _proto.getParentPane = function getParentPane() {
    return this.getPane(this.props.pane || this.props.leaflet.pane);
  };

  _proto.getPane = function getPane(name) {
    if (name != null && this.props.leaflet.map != null) {
      return this.props.leaflet.map.getPane(name);
    }
  };

  _proto.render = function render() {
    var context = this.state.context;
    return context ? _react.default.createElement(_context.LeafletProvider, {
      value: context
    }, _react.default.createElement("div", {
      style: paneStyles
    }, this.props.children)) : null;
  };

  return Pane;
}(_react.Component);

var _default = (0, _context.withLeaflet)(Pane);

exports.default = _default;

/***/ }),

/***/ "IMXe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("VbXa"));

var _leaflet = __webpack_require__("hgx0");

var _context = __webpack_require__("FANO");

var _MapLayer2 = _interopRequireDefault(__webpack_require__("gU4H"));

var LayerGroup = /*#__PURE__*/function (_MapLayer) {
  (0, _inheritsLoose2.default)(LayerGroup, _MapLayer);

  function LayerGroup() {
    return _MapLayer.apply(this, arguments) || this;
  }

  var _proto = LayerGroup.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    var el = new _leaflet.LayerGroup([], this.getOptions(props));
    this.contextValue = (0, _extends2.default)({}, props.leaflet, {
      layerContainer: el
    });
    return el;
  };

  return LayerGroup;
}(_MapLayer2.default);

var _default = (0, _context.withLeaflet)(LayerGroup);

exports.default = _default;

/***/ }),

/***/ "ItY8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("VbXa"));

var _fastDeepEqual = _interopRequireDefault(__webpack_require__("YwNs"));

var _MapLayer2 = _interopRequireDefault(__webpack_require__("gU4H"));

var _pick = _interopRequireDefault(__webpack_require__("5V5n"));

var OPTIONS = ['stroke', 'color', 'weight', 'opacity', 'lineCap', 'lineJoin', 'dashArray', 'dashOffset', 'fill', 'fillColor', 'fillOpacity', 'fillRule', 'bubblingMouseEvents', 'renderer', 'className', // Interactive Layer
'interactive', // Layer
'pane', 'attribution'];

var Path = /*#__PURE__*/function (_MapLayer) {
  (0, _inheritsLoose2.default)(Path, _MapLayer);

  function Path(props) {
    var _this;

    _this = _MapLayer.call(this, props) || this;

    if (_this.contextValue == null) {
      _this.contextValue = (0, _extends2.default)({}, props.leaflet, {
        popupContainer: _this.leafletElement
      });
    }

    return _this;
  }

  var _proto = Path.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    _MapLayer.prototype.componentDidUpdate.call(this, prevProps);

    this.setStyleIfChanged(prevProps, this.props);
  };

  _proto.getPathOptions = function getPathOptions(props) {
    return (0, _pick.default)(props, OPTIONS);
  };

  _proto.setStyle = function setStyle(options) {
    if (options === void 0) {
      options = {};
    }

    this.leafletElement.setStyle(options);
  };

  _proto.setStyleIfChanged = function setStyleIfChanged(fromProps, toProps) {
    var nextStyle = this.getPathOptions(toProps);

    if (!(0, _fastDeepEqual.default)(nextStyle, this.getPathOptions(fromProps))) {
      this.setStyle(nextStyle);
    }
  };

  return Path;
}(_MapLayer2.default);

exports.default = Path;

/***/ }),

/***/ "LvlL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("VbXa"));

var _leaflet = __webpack_require__("hgx0");

var _context = __webpack_require__("FANO");

var _Path2 = _interopRequireDefault(__webpack_require__("ItY8"));

var Polygon = /*#__PURE__*/function (_Path) {
  (0, _inheritsLoose2.default)(Polygon, _Path);

  function Polygon() {
    return _Path.apply(this, arguments) || this;
  }

  var _proto = Polygon.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new _leaflet.Polygon(props.positions, this.getOptions(props));
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.positions !== fromProps.positions) {
      this.leafletElement.setLatLngs(toProps.positions);
    }

    this.setStyleIfChanged(fromProps, toProps);
  };

  return Polygon;
}(_Path2.default);

var _default = (0, _context.withLeaflet)(Polygon);

exports.default = _default;

/***/ }),

/***/ "Nqfl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = void 0;

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("PJYZ"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("VbXa"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("lSNA"));

var _leaflet = __webpack_require__("hgx0");

var _react = __webpack_require__("cDcd");

var MapControl = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2.default)(MapControl, _Component);

  function MapControl(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "leafletElement", void 0);
    _this.leafletElement = _this.createLeafletElement(_this.props);
    return _this;
  }

  var _proto = MapControl.prototype;

  _proto.createLeafletElement = function createLeafletElement(_props) {
    throw new Error('createLeafletElement() must be implemented');
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.position !== fromProps.position) {
      this.leafletElement.setPosition(toProps.position);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    this.leafletElement.addTo(this.props.leaflet.map);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    this.updateLeafletElement(prevProps, this.props);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.leafletElement.remove();
  };

  _proto.render = function render() {
    return null;
  };

  return MapControl;
}(_react.Component);

exports.default = MapControl;

/***/ }),

/***/ "O8Fm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("8OQS"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("VbXa"));

var _leaflet = __webpack_require__("hgx0");

var _context = __webpack_require__("FANO");

var _Path2 = _interopRequireDefault(__webpack_require__("ItY8"));

var Circle = /*#__PURE__*/function (_Path) {
  (0, _inheritsLoose2.default)(Circle, _Path);

  function Circle() {
    return _Path.apply(this, arguments) || this;
  }

  var _proto = Circle.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    var center = props.center,
        radius = props.radius,
        options = (0, _objectWithoutPropertiesLoose2.default)(props, ["center", "radius"]);
    return new _leaflet.Circle(center, radius, this.getOptions(options));
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.center !== fromProps.center) {
      this.leafletElement.setLatLng(toProps.center);
    }

    if (toProps.radius !== fromProps.radius) {
      this.leafletElement.setRadius(toProps.radius);
    }
  };

  return Circle;
}(_Path2.default);

var _default = (0, _context.withLeaflet)(Circle);

exports.default = _default;

/***/ }),

/***/ "PJYZ":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "R3g/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("VbXa"));

var _MapEvented2 = _interopRequireDefault(__webpack_require__("vyCg"));

var MapComponent = /*#__PURE__*/function (_MapEvented) {
  (0, _inheritsLoose2.default)(MapComponent, _MapEvented);

  function MapComponent() {
    return _MapEvented.apply(this, arguments) || this;
  }

  var _proto = MapComponent.prototype;

  _proto.getOptions = function getOptions(props) {
    if (props.pane != null) {
      return props;
    }

    if (props.leaflet != null && props.leaflet.pane != null) {
      return (0, _extends2.default)({}, props, {
        pane: props.leaflet.pane
      });
    }

    return props;
  };

  return MapComponent;
}(_MapEvented2.default);

exports.default = MapComponent;

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UiYp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("VbXa"));

var _leaflet = __webpack_require__("hgx0");

var _context = __webpack_require__("FANO");

var _Path2 = _interopRequireDefault(__webpack_require__("ItY8"));

var Polyline = /*#__PURE__*/function (_Path) {
  (0, _inheritsLoose2.default)(Polyline, _Path);

  function Polyline() {
    return _Path.apply(this, arguments) || this;
  }

  var _proto = Polyline.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new _leaflet.Polyline(props.positions, this.getOptions(props));
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.positions !== fromProps.positions) {
      this.leafletElement.setLatLngs(toProps.positions);
    }

    this.setStyleIfChanged(fromProps, toProps);
  };

  return Polyline;
}(_Path2.default);

var _default = (0, _context.withLeaflet)(Polyline);

exports.default = _default;

/***/ }),

/***/ "VbXa":
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "W8MJ":
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "ZM4J":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = void 0;

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("PJYZ"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("VbXa"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("lSNA"));

var _reactDom = __webpack_require__("faye");

var _MapComponent2 = _interopRequireDefault(__webpack_require__("R3g/"));

var _updateClassName = _interopRequireDefault(__webpack_require__("CTfC"));

var DivOverlay = /*#__PURE__*/function (_MapComponent) {
  (0, _inheritsLoose2.default)(DivOverlay, _MapComponent);

  function DivOverlay(props) {
    var _this;

    _this = _MapComponent.call(this, props) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onClose", function () {
      if (_this.props.onClose) {
        _this.props.onClose();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onOpen", function () {
      _this.forceUpdate(); // Re-render now that leafletElement is created


      if (_this.props.onOpen) {
        _this.props.onOpen();
      }
    });
    _this.leafletElement = _this.createLeafletElement(props);
    return _this;
  }

  var _proto = DivOverlay.prototype;

  _proto.createLeafletElement = function createLeafletElement(_props) {
    throw new Error('createLeafletElement() must be implemented');
  };

  _proto.updateLeafletElement = function updateLeafletElement(_prevProps, _props) {};

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    (0, _updateClassName.default)(this.leafletElement._container, prevProps.className, this.props.className);
    this.updateLeafletElement(prevProps, this.props);

    if (this.leafletElement.isOpen()) {
      this.leafletElement.update();
      this.onRender();
    }
  };

  _proto.onRender = function onRender() {};

  _proto.render = function render() {
    if (this.leafletElement._contentNode) {
      return (0, _reactDom.createPortal)(this.props.children, this.leafletElement._contentNode);
    }

    return null;
  };

  return DivOverlay;
}(_MapComponent2.default);

exports.default = DivOverlay;

/***/ }),

/***/ "aF8O":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = void 0;

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("PJYZ"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("VbXa"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("lSNA"));

var _leaflet = __webpack_require__("hgx0");

var _context = __webpack_require__("FANO");

var _DivOverlay2 = _interopRequireDefault(__webpack_require__("ZM4J"));

var Tooltip = /*#__PURE__*/function (_DivOverlay) {
  (0, _inheritsLoose2.default)(Tooltip, _DivOverlay);

  function Tooltip() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _DivOverlay.call.apply(_DivOverlay, [this].concat(args)) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onTooltipOpen", function (_ref) {
      var tooltip = _ref.tooltip;

      if (tooltip === _this.leafletElement) {
        _this.onOpen();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onTooltipClose", function (_ref2) {
      var tooltip = _ref2.tooltip;

      if (tooltip === _this.leafletElement) {
        _this.onClose();
      }
    });
    return _this;
  }

  var _proto = Tooltip.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new _leaflet.Tooltip(this.getOptions(props), props.leaflet.popupContainer);
  };

  _proto.componentDidMount = function componentDidMount() {
    var popupContainer = this.props.leaflet.popupContainer;
    if (popupContainer == null) return;
    popupContainer.on({
      tooltipopen: this.onTooltipOpen,
      tooltipclose: this.onTooltipClose
    });
    popupContainer.bindTooltip(this.leafletElement);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var popupContainer = this.props.leaflet.popupContainer;
    if (popupContainer == null) return;
    popupContainer.off({
      tooltipopen: this.onTooltipOpen,
      tooltipclose: this.onTooltipClose
    });

    if (popupContainer._map != null) {
      popupContainer.unbindTooltip(this.leafletElement);
    }
  };

  return Tooltip;
}(_DivOverlay2.default);

(0, _defineProperty2.default)(Tooltip, "defaultProps", {
  pane: 'tooltipPane'
});

var _default = (0, _context.withLeaflet)(Tooltip);

exports.default = _default;

/***/ }),

/***/ "b6he":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("VbXa"));

var _leaflet = __webpack_require__("hgx0");

var _context = __webpack_require__("FANO");

var _GridLayer2 = _interopRequireDefault(__webpack_require__("9eaS"));

var TileLayer = /*#__PURE__*/function (_GridLayer) {
  (0, _inheritsLoose2.default)(TileLayer, _GridLayer);

  function TileLayer() {
    return _GridLayer.apply(this, arguments) || this;
  }

  var _proto = TileLayer.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new _leaflet.TileLayer(props.url, this.getOptions(props));
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    _GridLayer.prototype.updateLeafletElement.call(this, fromProps, toProps);

    if (toProps.url !== fromProps.url) {
      this.leafletElement.setUrl(toProps.url);
    }
  };

  return TileLayer;
}(_GridLayer2.default);

var _default = (0, _context.withLeaflet)(TileLayer);

exports.default = _default;

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "dotL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("VbXa"));

var _leaflet = __webpack_require__("hgx0");

var _context = __webpack_require__("FANO");

var _MapControl2 = _interopRequireDefault(__webpack_require__("Nqfl"));

var ScaleControl = /*#__PURE__*/function (_MapControl) {
  (0, _inheritsLoose2.default)(ScaleControl, _MapControl);

  function ScaleControl() {
    return _MapControl.apply(this, arguments) || this;
  }

  var _proto = ScaleControl.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new _leaflet.Control.Scale(props);
  };

  return ScaleControl;
}(_MapControl2.default);

var _default = (0, _context.withLeaflet)(ScaleControl);

exports.default = _default;

/***/ }),

/***/ "eYxW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const {
  Map: LeafletMap,
  TileLayer,
  Marker,
  Popup
} = __webpack_require__("zGlu");

class ConsumerMap extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return __jsx(LeafletMap, {
      center: position,
      zoom: this.state.zoom
    }, __jsx(TileLayer, {
      attribution: "\xA9 <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors",
      url: "https://{s}.tile.osm.org/{z}/{x}/{y}.png"
    }), __jsx(Marker, {
      position: position
    }, __jsx(Popup, null, "A pretty CSS3 popup. ", __jsx("br", null), " Easily customizable.")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ConsumerMap);

/***/ }),

/***/ "g+gt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = exports.ControlledLayer = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("8OQS"));

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("PJYZ"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("VbXa"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("lSNA"));

var _leaflet = __webpack_require__("hgx0");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _context = __webpack_require__("FANO");

var _MapControl2 = _interopRequireDefault(__webpack_require__("Nqfl")); // Abtract class for layer container, extended by BaseLayer and Overlay


var ControlledLayer = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2.default)(ControlledLayer, _Component);

  function ControlledLayer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "contextValue", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "layer", void 0);
    return _this;
  }

  var _proto = ControlledLayer.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(_ref) {
    var checked = _ref.checked;

    if (this.props.leaflet.map == null) {
      return;
    } // Handle dynamically (un)checking the layer => adding/removing from the map


    if (this.props.checked === true && (checked == null || checked === false)) {
      this.props.leaflet.map.addLayer(this.layer);
    } else if (checked === true && (this.props.checked == null || this.props.checked === false)) {
      this.props.leaflet.map.removeLayer(this.layer);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.props.removeLayerControl(this.layer);
  };

  _proto.addLayer = function addLayer() {
    throw new Error('Must be implemented in extending class');
  };

  _proto.removeLayer = function removeLayer(layer) {
    this.props.removeLayer(layer);
  };

  _proto.render = function render() {
    var children = this.props.children;
    return children ? _react.default.createElement(_context.LeafletProvider, {
      value: this.contextValue
    }, children) : null;
  };

  return ControlledLayer;
}(_react.Component);

exports.ControlledLayer = ControlledLayer;

var BaseLayer = /*#__PURE__*/function (_ControlledLayer) {
  (0, _inheritsLoose2.default)(BaseLayer, _ControlledLayer);

  function BaseLayer(props) {
    var _this2;

    _this2 = _ControlledLayer.call(this, props) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this2), "addLayer", function (layer) {
      _this2.layer = layer; // Keep layer reference to handle dynamic changes of props

      var _this2$props = _this2.props,
          addBaseLayer = _this2$props.addBaseLayer,
          checked = _this2$props.checked,
          name = _this2$props.name;
      addBaseLayer(layer, name, checked);
    });
    _this2.contextValue = (0, _extends2.default)({}, props.leaflet, {
      layerContainer: {
        addLayer: _this2.addLayer.bind((0, _assertThisInitialized2.default)(_this2)),
        removeLayer: _this2.removeLayer.bind((0, _assertThisInitialized2.default)(_this2))
      }
    });
    return _this2;
  }

  return BaseLayer;
}(ControlledLayer);

var Overlay = /*#__PURE__*/function (_ControlledLayer2) {
  (0, _inheritsLoose2.default)(Overlay, _ControlledLayer2);

  function Overlay(props) {
    var _this3;

    _this3 = _ControlledLayer2.call(this, props) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this3), "addLayer", function (layer) {
      _this3.layer = layer; // Keep layer reference to handle dynamic changes of props

      var _this3$props = _this3.props,
          addOverlay = _this3$props.addOverlay,
          checked = _this3$props.checked,
          name = _this3$props.name;
      addOverlay(layer, name, checked);
    });
    _this3.contextValue = (0, _extends2.default)({}, props.leaflet, {
      layerContainer: {
        addLayer: _this3.addLayer.bind((0, _assertThisInitialized2.default)(_this3)),
        removeLayer: _this3.removeLayer.bind((0, _assertThisInitialized2.default)(_this3))
      }
    });
    return _this3;
  }

  return Overlay;
}(ControlledLayer);

var LayersControl = /*#__PURE__*/function (_MapControl) {
  (0, _inheritsLoose2.default)(LayersControl, _MapControl);

  function LayersControl(props) {
    var _this4;

    _this4 = _MapControl.call(this, props) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this4), "controlProps", void 0);
    _this4.controlProps = {
      addBaseLayer: _this4.addBaseLayer.bind((0, _assertThisInitialized2.default)(_this4)),
      addOverlay: _this4.addOverlay.bind((0, _assertThisInitialized2.default)(_this4)),
      leaflet: props.leaflet,
      removeLayer: _this4.removeLayer.bind((0, _assertThisInitialized2.default)(_this4)),
      removeLayerControl: _this4.removeLayerControl.bind((0, _assertThisInitialized2.default)(_this4))
    };
    return _this4;
  }

  var _proto2 = LayersControl.prototype;

  _proto2.createLeafletElement = function createLeafletElement(props) {
    var _children = props.children,
        options = (0, _objectWithoutPropertiesLoose2.default)(props, ["children"]);
    return new _leaflet.Control.Layers(undefined, undefined, options);
  };

  _proto2.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    _MapControl.prototype.updateLeafletElement.call(this, fromProps, toProps);

    if (toProps.collapsed !== fromProps.collapsed) {
      if (toProps.collapsed === true) {
        this.leafletElement.collapse();
      } else {
        this.leafletElement.expand();
      }
    }
  };

  _proto2.componentWillUnmount = function componentWillUnmount() {
    var _this5 = this;

    setTimeout(function () {
      _MapControl.prototype.componentWillUnmount.call(_this5);
    }, 0);
  };

  _proto2.addBaseLayer = function addBaseLayer(layer, name, checked) {
    if (checked === void 0) {
      checked = false;
    }

    if (checked && this.props.leaflet.map != null) {
      this.props.leaflet.map.addLayer(layer);
    }

    this.leafletElement.addBaseLayer(layer, name);
  };

  _proto2.addOverlay = function addOverlay(layer, name, checked) {
    if (checked === void 0) {
      checked = false;
    }

    if (checked && this.props.leaflet.map != null) {
      this.props.leaflet.map.addLayer(layer);
    }

    this.leafletElement.addOverlay(layer, name);
  };

  _proto2.removeLayer = function removeLayer(layer) {
    if (this.props.leaflet.map != null) {
      this.props.leaflet.map.removeLayer(layer);
    }
  };

  _proto2.removeLayerControl = function removeLayerControl(layer) {
    this.leafletElement.removeLayer(layer);
  };

  _proto2.render = function render() {
    var _this6 = this;

    var children = _react.Children.map(this.props.children, function (child) {
      return child ? (0, _react.cloneElement)(child, _this6.controlProps) : null;
    });

    return _react.default.createElement(_react.Fragment, null, children);
  };

  return LayersControl;
}(_MapControl2.default);

var LayersControlExport = (0, _context.withLeaflet)(LayersControl);
LayersControlExport.BaseLayer = BaseLayer;
LayersControlExport.Overlay = Overlay;
var _default = LayersControlExport;
exports.default = _default;

/***/ }),

/***/ "gU4H":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = void 0;

var _createClass2 = _interopRequireDefault(__webpack_require__("W8MJ"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("PJYZ"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("VbXa"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("lSNA"));

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _context = __webpack_require__("FANO");

var _MapComponent2 = _interopRequireDefault(__webpack_require__("R3g/"));

var MapLayer = /*#__PURE__*/function (_MapComponent) {
  (0, _inheritsLoose2.default)(MapLayer, _MapComponent);

  function MapLayer(props) {
    var _this;

    _this = _MapComponent.call(this, props) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "contextValue", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "leafletElement", void 0);
    _this.leafletElement = _this.createLeafletElement(props);
    return _this;
  }

  var _proto = MapLayer.prototype;

  _proto.createLeafletElement = function createLeafletElement(_props) {
    throw new Error('createLeafletElement() must be implemented');
  };

  _proto.updateLeafletElement = function updateLeafletElement(_fromProps, _toProps) {};

  _proto.componentDidMount = function componentDidMount() {
    _MapComponent.prototype.componentDidMount.call(this);

    this.layerContainer.addLayer(this.leafletElement);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    _MapComponent.prototype.componentDidUpdate.call(this, prevProps);

    if (this.props.attribution !== prevProps.attribution) {
      var map = this.props.leaflet.map;

      if (map != null && map.attributionControl != null) {
        map.attributionControl.removeAttribution(prevProps.attribution);
        map.attributionControl.addAttribution(this.props.attribution);
      }
    }

    this.updateLeafletElement(prevProps, this.props);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    _MapComponent.prototype.componentWillUnmount.call(this);

    this.layerContainer.removeLayer(this.leafletElement);
  };

  _proto.render = function render() {
    var children = this.props.children;

    if (children == null) {
      return null;
    }

    return this.contextValue == null ? _react.default.createElement(_react.Fragment, null, children) : _react.default.createElement(_context.LeafletProvider, {
      value: this.contextValue
    }, children);
  };

  (0, _createClass2.default)(MapLayer, [{
    key: "layerContainer",
    get: function get() {
      return this.props.leaflet.layerContainer || this.props.leaflet.map;
    }
  }]);
  return MapLayer;
}(_MapComponent2.default);

exports.default = MapLayer;

/***/ }),

/***/ "gtNC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = omit;

function omit(obj) {
  for (var _len = arguments.length, keysToOmit = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keysToOmit[_key - 1] = arguments[_key];
  }

  return Object.keys(obj).reduce(function (acc, key) {
    if (keysToOmit.indexOf(key) === -1) {
      acc[key] = obj[key];
    }

    return acc;
  }, {});
}

/***/ }),

/***/ "iXj+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("VbXa"));

var _leaflet = __webpack_require__("hgx0");

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _context = __webpack_require__("FANO");

var _MapLayer2 = _interopRequireDefault(__webpack_require__("gU4H"));

var Marker = /*#__PURE__*/function (_MapLayer) {
  (0, _inheritsLoose2.default)(Marker, _MapLayer);

  function Marker() {
    return _MapLayer.apply(this, arguments) || this;
  }

  var _proto = Marker.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    var el = new _leaflet.Marker(props.position, this.getOptions(props));
    this.contextValue = (0, _extends2.default)({}, props.leaflet, {
      popupContainer: el
    });
    return el;
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.position !== fromProps.position) {
      this.leafletElement.setLatLng(toProps.position);
    }

    if (toProps.icon !== fromProps.icon) {
      this.leafletElement.setIcon(toProps.icon);
    }

    if (toProps.zIndexOffset !== fromProps.zIndexOffset) {
      this.leafletElement.setZIndexOffset(toProps.zIndexOffset);
    }

    if (toProps.opacity !== fromProps.opacity) {
      this.leafletElement.setOpacity(toProps.opacity);
    }

    if (toProps.draggable !== fromProps.draggable) {
      if (toProps.draggable === true) {
        this.leafletElement.dragging.enable();
      } else {
        this.leafletElement.dragging.disable();
      }
    }
  };

  _proto.render = function render() {
    var children = this.props.children;
    return children == null || this.contextValue == null ? null : _react.default.createElement(_context.LeafletProvider, {
      value: this.contextValue
    }, children);
  };

  return Marker;
}(_MapLayer2.default);

var _default = (0, _context.withLeaflet)(Marker);

exports.default = _default;

/***/ }),

/***/ "lSNA":
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "nL7n":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("VbXa"));

var _leaflet = __webpack_require__("hgx0");

var _context = __webpack_require__("FANO");

var _Path2 = _interopRequireDefault(__webpack_require__("ItY8"));

var CircleMarker = /*#__PURE__*/function (_Path) {
  (0, _inheritsLoose2.default)(CircleMarker, _Path);

  function CircleMarker() {
    return _Path.apply(this, arguments) || this;
  }

  var _proto = CircleMarker.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    var el = new _leaflet.CircleMarker(props.center, this.getOptions(props));
    this.contextValue = (0, _extends2.default)({}, props.leaflet, {
      popupContainer: el
    });
    return el;
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.center !== fromProps.center) {
      this.leafletElement.setLatLng(toProps.center);
    }

    if (toProps.radius !== fromProps.radius) {
      this.leafletElement.setRadius(toProps.radius);
    }
  };

  return CircleMarker;
}(_Path2.default);

var _default = (0, _context.withLeaflet)(CircleMarker);

exports.default = _default;

/***/ }),

/***/ "p9AB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("VbXa"));

var _leaflet = __webpack_require__("hgx0");

var _context = __webpack_require__("FANO");

var _MapLayer2 = _interopRequireDefault(__webpack_require__("gU4H"));

var VideoOverlay = /*#__PURE__*/function (_MapLayer) {
  (0, _inheritsLoose2.default)(VideoOverlay, _MapLayer);

  function VideoOverlay() {
    return _MapLayer.apply(this, arguments) || this;
  }

  var _proto = VideoOverlay.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new _leaflet.VideoOverlay(props.url, props.bounds, this.getOptions(props));
  };

  _proto.componentDidMount = function componentDidMount() {
    _MapLayer.prototype.componentDidMount.call(this);

    if (this.props.play === true) {
      this.leafletElement.getElement().play();
    }
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.url !== fromProps.url) {
      this.leafletElement.setUrl(toProps.url);
    }

    if (toProps.bounds !== fromProps.bounds) {
      this.leafletElement.setBounds((0, _leaflet.latLngBounds)(toProps.bounds));
    }

    if (toProps.opacity !== fromProps.opacity) {
      this.leafletElement.setOpacity(toProps.opacity);
    }

    if (toProps.zIndex !== fromProps.zIndex) {
      this.leafletElement.setZIndex(toProps.zIndex);
    } // flowlint-next-line sketchy-null-bool:off


    if (toProps.play === true && !fromProps.play) {
      this.leafletElement.getElement().play(); // flowlint-next-line sketchy-null-bool:off
    } else if (!toProps.play && fromProps.play === true) {
      this.leafletElement.getElement().pause();
    }
  };

  return VideoOverlay;
}(_MapLayer2.default);

var _default = (0, _context.withLeaflet)(VideoOverlay);

exports.default = _default;

/***/ }),

/***/ "pVnL":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "t0j6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("PJYZ"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("VbXa"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("lSNA"));

var _leaflet = __webpack_require__("hgx0");

var _context = __webpack_require__("FANO");

var _DivOverlay2 = _interopRequireDefault(__webpack_require__("ZM4J"));

var Popup = /*#__PURE__*/function (_DivOverlay) {
  (0, _inheritsLoose2.default)(Popup, _DivOverlay);

  function Popup() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _DivOverlay.call.apply(_DivOverlay, [this].concat(args)) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onPopupOpen", function (_ref) {
      var popup = _ref.popup;

      if (popup === _this.leafletElement) {
        _this.onOpen();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onPopupClose", function (_ref2) {
      var popup = _ref2.popup;

      if (popup === _this.leafletElement) {
        _this.onClose();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onRender", function () {
      if (_this.props.autoPan !== false && _this.leafletElement.isOpen()) {
        if (_this.leafletElement._map && _this.leafletElement._map._panAnim) {
          _this.leafletElement._map._panAnim = undefined;
        }

        _this.leafletElement._adjustPan();
      }
    });
    return _this;
  }

  var _proto = Popup.prototype;

  _proto.getOptions = function getOptions(props) {
    return (0, _extends2.default)({}, _DivOverlay.prototype.getOptions.call(this, props), {
      autoPan: false
    });
  };

  _proto.createLeafletElement = function createLeafletElement(props) {
    var options = this.getOptions(props);
    options.autoPan = props.autoPan !== false;
    return new _leaflet.Popup(options, props.leaflet.popupContainer);
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.position !== fromProps.position) {
      this.leafletElement.setLatLng(toProps.position);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    var position = this.props.position;
    var _this$props$leaflet = this.props.leaflet,
        map = _this$props$leaflet.map,
        popupContainer = _this$props$leaflet.popupContainer;
    var el = this.leafletElement;

    if (map != null) {
      map.on({
        popupopen: this.onPopupOpen,
        popupclose: this.onPopupClose
      });
    }

    if (popupContainer) {
      // Attach to container component
      popupContainer.bindPopup(el);
    } else {
      // Attach to a Map
      if (position) {
        el.setLatLng(position);
      }

      el.openOn(map);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var map = this.props.leaflet.map;

    if (map != null) {
      map.off({
        popupopen: this.onPopupOpen,
        popupclose: this.onPopupClose
      });
      map.removeLayer(this.leafletElement);
    }

    _DivOverlay.prototype.componentWillUnmount.call(this);
  };

  return Popup;
}(_DivOverlay2.default);

(0, _defineProperty2.default)(Popup, "defaultProps", {
  pane: 'popupPane'
});

var _default = (0, _context.withLeaflet)(Popup);

exports.default = _default;

/***/ }),

/***/ "tJ1P":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("VbXa"));

var _leaflet = __webpack_require__("hgx0");

var _context = __webpack_require__("FANO");

var _Path2 = _interopRequireDefault(__webpack_require__("ItY8"));

var FeatureGroup = /*#__PURE__*/function (_Path) {
  (0, _inheritsLoose2.default)(FeatureGroup, _Path);

  function FeatureGroup() {
    return _Path.apply(this, arguments) || this;
  }

  var _proto = FeatureGroup.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    var el = new _leaflet.FeatureGroup(this.getOptions(props));
    this.contextValue = (0, _extends2.default)({}, props.leaflet, {
      layerContainer: el,
      popupContainer: el
    });
    return el;
  };

  _proto.componentDidMount = function componentDidMount() {
    _Path.prototype.componentDidMount.call(this);

    this.setStyle(this.props);
  };

  return FeatureGroup;
}(_Path2.default);

var _default = (0, _context.withLeaflet)(FeatureGroup);

exports.default = _default;

/***/ }),

/***/ "uK2v":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("8OQS"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("PJYZ"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("VbXa"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("lSNA"));

var _leaflet = __webpack_require__("hgx0");

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _context = __webpack_require__("FANO");

var _MapEvented2 = _interopRequireDefault(__webpack_require__("vyCg"));

var _updateClassName = _interopRequireDefault(__webpack_require__("CTfC"));

var _omit = _interopRequireDefault(__webpack_require__("gtNC"));

var OTHER_PROPS = ['children', 'className', 'id', 'style', 'useFlyTo', 'whenReady'];

var normalizeCenter = function normalizeCenter(pos) {
  return Array.isArray(pos) ? [pos[0], pos[1]] : [pos.lat, pos.lon ? pos.lon : pos.lng];
};

var Map = /*#__PURE__*/function (_MapEvented) {
  (0, _inheritsLoose2.default)(Map, _MapEvented);

  function Map(props) {
    var _this;

    _this = _MapEvented.call(this, props) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "className", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "contextValue", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "container", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "viewport", {
      center: undefined,
      zoom: undefined
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "_ready", false);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "_updating", false);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onViewportChange", function () {
      var center = _this.leafletElement.getCenter();

      _this.viewport = {
        center: center ? [center.lat, center.lng] : undefined,
        zoom: _this.leafletElement.getZoom()
      };

      if (_this.props.onViewportChange && !_this._updating) {
        _this.props.onViewportChange(_this.viewport);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onViewportChanged", function () {
      if (_this.props.onViewportChanged && !_this._updating) {
        _this.props.onViewportChanged(_this.viewport);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "bindContainer", function (container) {
      _this.container = container;
    });
    _this.className = props.className;
    return _this;
  }

  var _proto = Map.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    var viewport = props.viewport,
        options = (0, _objectWithoutPropertiesLoose2.default)(props, ["viewport"]);

    if (viewport) {
      if (viewport.center) {
        options.center = viewport.center;
      }

      if (typeof viewport.zoom === 'number') {
        options.zoom = viewport.zoom;
      }
    }

    return new _leaflet.Map(this.container, options);
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    this._updating = true;
    var bounds = toProps.bounds,
        boundsOptions = toProps.boundsOptions,
        boxZoom = toProps.boxZoom,
        center = toProps.center,
        className = toProps.className,
        doubleClickZoom = toProps.doubleClickZoom,
        dragging = toProps.dragging,
        keyboard = toProps.keyboard,
        maxBounds = toProps.maxBounds,
        scrollWheelZoom = toProps.scrollWheelZoom,
        tap = toProps.tap,
        touchZoom = toProps.touchZoom,
        useFlyTo = toProps.useFlyTo,
        viewport = toProps.viewport,
        zoom = toProps.zoom;
    (0, _updateClassName.default)(this.container, fromProps.className, className);

    if (viewport && viewport !== fromProps.viewport) {
      var c = viewport.center ? viewport.center : center;
      var z = viewport.zoom == null ? zoom : viewport.zoom;

      if (useFlyTo === true) {
        this.leafletElement.flyTo(c, z, this.getZoomPanOptions(toProps));
      } else {
        this.leafletElement.setView(c, z, this.getZoomPanOptions(toProps));
      }
    } else if (center && this.shouldUpdateCenter(center, fromProps.center)) {
      if (useFlyTo === true) {
        this.leafletElement.flyTo(center, zoom, this.getZoomPanOptions(toProps));
      } else {
        this.leafletElement.setView(center, zoom, this.getZoomPanOptions(toProps));
      }
    } else if (typeof zoom === 'number' && zoom !== fromProps.zoom) {
      if (fromProps.zoom == null) {
        this.leafletElement.setView(center, zoom, this.getZoomPanOptions(toProps));
      } else {
        this.leafletElement.setZoom(zoom, this.getZoomPanOptions(toProps));
      }
    }

    if (maxBounds && this.shouldUpdateBounds(maxBounds, fromProps.maxBounds)) {
      this.leafletElement.setMaxBounds(maxBounds);
    }

    if (bounds && (this.shouldUpdateBounds(bounds, fromProps.bounds) || boundsOptions !== fromProps.boundsOptions)) {
      if (useFlyTo === true) {
        this.leafletElement.flyToBounds(bounds, this.getFitBoundsOptions(toProps));
      } else {
        this.leafletElement.fitBounds(bounds, this.getFitBoundsOptions(toProps));
      }
    }

    if (boxZoom !== fromProps.boxZoom) {
      if (boxZoom === true) {
        this.leafletElement.boxZoom.enable();
      } else {
        this.leafletElement.boxZoom.disable();
      }
    }

    if (doubleClickZoom !== fromProps.doubleClickZoom) {
      if (doubleClickZoom === true || typeof doubleClickZoom === 'string') {
        this.leafletElement.options.doubleClickZoom = doubleClickZoom;
        this.leafletElement.doubleClickZoom.enable();
      } else {
        this.leafletElement.doubleClickZoom.disable();
      }
    }

    if (dragging !== fromProps.dragging) {
      if (dragging === true) {
        this.leafletElement.dragging.enable();
      } else {
        this.leafletElement.dragging.disable();
      }
    }

    if (keyboard !== fromProps.keyboard) {
      if (keyboard === true) {
        this.leafletElement.keyboard.enable();
      } else {
        this.leafletElement.keyboard.disable();
      }
    }

    if (scrollWheelZoom !== fromProps.scrollWheelZoom) {
      if (scrollWheelZoom === true || typeof scrollWheelZoom === 'string') {
        this.leafletElement.options.scrollWheelZoom = scrollWheelZoom;
        this.leafletElement.scrollWheelZoom.enable();
      } else {
        this.leafletElement.scrollWheelZoom.disable();
      }
    }

    if (tap !== fromProps.tap) {
      if (tap === true) {
        this.leafletElement.tap.enable();
      } else {
        this.leafletElement.tap.disable();
      }
    }

    if (touchZoom !== fromProps.touchZoom) {
      if (touchZoom === true || typeof touchZoom === 'string') {
        this.leafletElement.options.touchZoom = touchZoom;
        this.leafletElement.touchZoom.enable();
      } else {
        this.leafletElement.touchZoom.disable();
      }
    }

    this._updating = false;
  };

  _proto.getZoomPanOptions = function getZoomPanOptions(props) {
    var animate = props.animate,
        duration = props.duration,
        easeLinearity = props.easeLinearity,
        noMoveStart = props.noMoveStart;
    return {
      animate: animate,
      duration: duration,
      easeLinearity: easeLinearity,
      noMoveStart: noMoveStart
    };
  };

  _proto.getFitBoundsOptions = function getFitBoundsOptions(props) {
    var zoomPanOptions = this.getZoomPanOptions(props);
    return (0, _extends2.default)({}, zoomPanOptions, {}, props.boundsOptions);
  };

  _proto.componentDidMount = function componentDidMount() {
    var props = _omit.default.apply(void 0, [this.props].concat(OTHER_PROPS));

    this.leafletElement = this.createLeafletElement(props);
    this.leafletElement.on('move', this.onViewportChange);
    this.leafletElement.on('moveend', this.onViewportChanged);

    if (props.bounds != null) {
      this.leafletElement.fitBounds(props.bounds, this.getFitBoundsOptions(props));
    }

    this.contextValue = {
      layerContainer: this.leafletElement,
      map: this.leafletElement
    };

    _MapEvented.prototype.componentDidMount.call(this);

    this.forceUpdate(); // Re-render now that leafletElement is created
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this._ready === false) {
      this._ready = true;

      if (this.props.whenReady) {
        this.leafletElement.whenReady(this.props.whenReady);
      }
    }

    _MapEvented.prototype.componentDidUpdate.call(this, prevProps);

    this.updateLeafletElement(prevProps, this.props);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    _MapEvented.prototype.componentWillUnmount.call(this);

    this.leafletElement.off('move', this.onViewportChange);
    this.leafletElement.off('moveend', this.onViewportChanged); // The canvas renderer uses requestAnimationFrame, making a deferred call to a deleted object
    // When preferCanvas is set, use simpler teardown logic

    if (this.props.preferCanvas === true) {
      this.leafletElement._initEvents(true);

      this.leafletElement._stop();
    } else {
      this.leafletElement.remove();
    }
  };

  _proto.shouldUpdateCenter = function shouldUpdateCenter(next, prev) {
    if (!prev) return true;
    next = normalizeCenter(next);
    prev = normalizeCenter(prev);
    return next[0] !== prev[0] || next[1] !== prev[1];
  };

  _proto.shouldUpdateBounds = function shouldUpdateBounds(next, prev) {
    return prev ? !(0, _leaflet.latLngBounds)(next).equals((0, _leaflet.latLngBounds)(prev)) : true;
  };

  _proto.render = function render() {
    return _react.default.createElement("div", {
      className: this.className,
      id: this.props.id,
      ref: this.bindContainer,
      style: this.props.style
    }, this.contextValue ? _react.default.createElement(_context.LeafletProvider, {
      value: this.contextValue
    }, this.props.children) : null);
  };

  return Map;
}(_MapEvented2.default);

exports.default = Map;

/***/ }),

/***/ "vyCg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = exports.EVENTS_RE = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("PJYZ"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("VbXa"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("lSNA"));

var _react = __webpack_require__("cDcd");

var EVENTS_RE = /^on(.+)$/i;
exports.EVENTS_RE = EVENTS_RE;

var MapEvented = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2.default)(MapEvented, _Component);

  function MapEvented(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "_leafletEvents", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "leafletElement", void 0);
    _this._leafletEvents = _this.extractLeafletEvents(props);
    return _this;
  }

  var _proto = MapEvented.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.bindLeafletEvents(this._leafletEvents);
  };

  _proto.componentDidUpdate = function componentDidUpdate(_prevProps) {
    this._leafletEvents = this.bindLeafletEvents(this.extractLeafletEvents(this.props), this._leafletEvents);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var _this2 = this;

    var el = this.leafletElement;
    if (!el) return;
    Object.keys(this._leafletEvents).forEach(function (ev) {
      el.off(ev, _this2._leafletEvents[ev]);
    });
  };

  _proto.extractLeafletEvents = function extractLeafletEvents(props) {
    return Object.keys(props).reduce(function (res, prop) {
      if (EVENTS_RE.test(prop)) {
        if (props[prop] != null) {
          var _key = prop.replace(EVENTS_RE, function (match, p) {
            return p.toLowerCase();
          });

          res[_key] = props[prop];
        }
      }

      return res;
    }, {});
  };

  _proto.bindLeafletEvents = function bindLeafletEvents(next, prev) {
    if (next === void 0) {
      next = {};
    }

    if (prev === void 0) {
      prev = {};
    }

    var el = this.leafletElement;
    if (el == null || el.on == null) return {};
    var diff = (0, _extends2.default)({}, prev);
    Object.keys(prev).forEach(function (ev) {
      if (next[ev] == null || prev[ev] !== next[ev]) {
        delete diff[ev];
        el.off(ev, prev[ev]);
      }
    });
    Object.keys(next).forEach(function (ev) {
      if (prev[ev] == null || next[ev] !== prev[ev]) {
        diff[ev] = next[ev];
        el.on(ev, next[ev]);
      }
    });
    return diff;
  };

  _proto.fireLeafletEvent = function fireLeafletEvent(type, data) {
    var el = this.leafletElement;
    if (el) el.fire(type, data);
  };

  return MapEvented;
}(_react.Component);

exports.default = MapEvented;

/***/ }),

/***/ "wl1t":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("VbXa"));

var _leaflet = __webpack_require__("hgx0");

var _context = __webpack_require__("FANO");

var _MapControl2 = _interopRequireDefault(__webpack_require__("Nqfl"));

var ZoomControl = /*#__PURE__*/function (_MapControl) {
  (0, _inheritsLoose2.default)(ZoomControl, _MapControl);

  function ZoomControl() {
    return _MapControl.apply(this, arguments) || this;
  }

  var _proto = ZoomControl.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new _leaflet.Control.Zoom(props);
  };

  return ZoomControl;
}(_MapControl2.default);

var _default = (0, _context.withLeaflet)(ZoomControl);

exports.default = _default;

/***/ }),

/***/ "zGlu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.ControlledLayer = exports.ZoomControl = exports.WMSTileLayer = exports.VideoOverlay = exports.Tooltip = exports.TileLayer = exports.SVGOverlay = exports.ScaleControl = exports.Rectangle = exports.Popup = exports.Polyline = exports.Polygon = exports.Path = exports.Pane = exports.Marker = exports.MapLayer = exports.MapEvented = exports.MapControl = exports.MapComponent = exports.Map = exports.LayersControl = exports.LayerGroup = exports.ImageOverlay = exports.GridLayer = exports.GeoJSON = exports.FeatureGroup = exports.DivOverlay = exports.CircleMarker = exports.Circle = exports.AttributionControl = exports.useLeaflet = exports.withLeaflet = exports.LeafletProvider = exports.LeafletConsumer = void 0;

var _context = __webpack_require__("FANO");

exports.LeafletConsumer = _context.LeafletConsumer;
exports.LeafletProvider = _context.LeafletProvider;
exports.withLeaflet = _context.withLeaflet;
exports.useLeaflet = _context.useLeaflet;

var _AttributionControl = _interopRequireDefault(__webpack_require__("A7Ty"));

exports.AttributionControl = _AttributionControl.default;

var _Circle = _interopRequireDefault(__webpack_require__("O8Fm"));

exports.Circle = _Circle.default;

var _CircleMarker = _interopRequireDefault(__webpack_require__("nL7n"));

exports.CircleMarker = _CircleMarker.default;

var _DivOverlay = _interopRequireDefault(__webpack_require__("ZM4J"));

exports.DivOverlay = _DivOverlay.default;

var _FeatureGroup = _interopRequireDefault(__webpack_require__("tJ1P"));

exports.FeatureGroup = _FeatureGroup.default;

var _GeoJSON = _interopRequireDefault(__webpack_require__("2v/k"));

exports.GeoJSON = _GeoJSON.default;

var _GridLayer = _interopRequireDefault(__webpack_require__("9eaS"));

exports.GridLayer = _GridLayer.default;

var _ImageOverlay = _interopRequireDefault(__webpack_require__("CtCT"));

exports.ImageOverlay = _ImageOverlay.default;

var _LayerGroup = _interopRequireDefault(__webpack_require__("IMXe"));

exports.LayerGroup = _LayerGroup.default;

var _LayersControl = _interopRequireWildcard(__webpack_require__("g+gt"));

exports.LayersControl = _LayersControl.default;
exports.ControlledLayer = _LayersControl.ControlledLayer;

var _Map = _interopRequireDefault(__webpack_require__("uK2v"));

exports.Map = _Map.default;

var _MapComponent = _interopRequireDefault(__webpack_require__("R3g/"));

exports.MapComponent = _MapComponent.default;

var _MapControl = _interopRequireDefault(__webpack_require__("Nqfl"));

exports.MapControl = _MapControl.default;

var _MapEvented = _interopRequireDefault(__webpack_require__("vyCg"));

exports.MapEvented = _MapEvented.default;

var _MapLayer = _interopRequireDefault(__webpack_require__("gU4H"));

exports.MapLayer = _MapLayer.default;

var _Marker = _interopRequireDefault(__webpack_require__("iXj+"));

exports.Marker = _Marker.default;

var _Pane = _interopRequireDefault(__webpack_require__("HJXT"));

exports.Pane = _Pane.default;

var _Path = _interopRequireDefault(__webpack_require__("ItY8"));

exports.Path = _Path.default;

var _Polygon = _interopRequireDefault(__webpack_require__("LvlL"));

exports.Polygon = _Polygon.default;

var _Polyline = _interopRequireDefault(__webpack_require__("UiYp"));

exports.Polyline = _Polyline.default;

var _Popup = _interopRequireDefault(__webpack_require__("t0j6"));

exports.Popup = _Popup.default;

var _Rectangle = _interopRequireDefault(__webpack_require__("Dqlt"));

exports.Rectangle = _Rectangle.default;

var _ScaleControl = _interopRequireDefault(__webpack_require__("dotL"));

exports.ScaleControl = _ScaleControl.default;

var _SVGOverlay = _interopRequireDefault(__webpack_require__("Bsaj"));

exports.SVGOverlay = _SVGOverlay.default;

var _TileLayer = _interopRequireDefault(__webpack_require__("b6he"));

exports.TileLayer = _TileLayer.default;

var _Tooltip = _interopRequireDefault(__webpack_require__("aF8O"));

exports.Tooltip = _Tooltip.default;

var _VideoOverlay = _interopRequireDefault(__webpack_require__("p9AB"));

exports.VideoOverlay = _VideoOverlay.default;

var _WMSTileLayer = _interopRequireDefault(__webpack_require__("2vg/"));

exports.WMSTileLayer = _WMSTileLayer.default;

var _ZoomControl = _interopRequireDefault(__webpack_require__("wl1t"));

exports.ZoomControl = _ZoomControl.default;

/***/ })

};;