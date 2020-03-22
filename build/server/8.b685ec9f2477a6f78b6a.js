exports.ids = [8];
exports.modules = {

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
} = __webpack_require__("AuoD");

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

/***/ })

};;