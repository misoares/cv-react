webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/my-map.tsx":
/*!*******************************!*\
  !*** ./components/my-map.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyMap; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_leaflet_universal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-leaflet-universal */ "./node_modules/react-leaflet-universal/dist/index.js");
/* harmony import */ var react_leaflet_universal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_leaflet_universal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/map */ "./data/map.tsx");

var _jsxFileName = "/home/miguel/PROJECTS/cv-react/components/my-map.tsx";




function MyMarker(props) {
  const {
    position,
    event,
    year
  } = props;
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_leaflet_universal__WEBPACK_IMPORTED_MODULE_2__["Marker"], {
    position: position,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_leaflet_universal__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    permanent: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, event, " ", react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), " ", year));
}

function getMarkers(markers) {
  return markers.map((marker, index) => react__WEBPACK_IMPORTED_MODULE_1__["createElement"](MyMarker, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    key: index
  }, marker, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })));
}

function MyMap(props) {
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]({
    lat: 38.75,
    lng: -9.29,
    zoom: 4
  });
  const position = [state.lat, state.lng];
  const markers = getMarkers(_data_map__WEBPACK_IMPORTED_MODULE_3__["markerData"]);
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    id: "container",
    className: "leaftlet-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("link", {
    rel: "stylesheet",
    href: "https://unpkg.com/leaflet@1.4.0/dist/leaflet.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_leaflet_universal__WEBPACK_IMPORTED_MODULE_2__["Map"], {
    style: {
      height: "600px"
    },
    center: position,
    zoom: state.zoom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_leaflet_universal__WEBPACK_IMPORTED_MODULE_2__["TileLayer"], {
    attribution: "&copy <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors",
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), markers));
}

/***/ })

})
//# sourceMappingURL=about.js.626cfa50d92c7e48bb41.hot-update.js.map