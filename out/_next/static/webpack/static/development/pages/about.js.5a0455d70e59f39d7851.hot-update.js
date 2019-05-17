webpackHotUpdate("static/development/pages/about.js",{

/***/ "./data/map.tsx":
/*!**********************!*\
  !*** ./data/map.tsx ***!
  \**********************/
/*! exports provided: markerData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markerData", function() { return markerData; });
const markerData = [{
  position: [38.75, -9.29],
  event: "Born and raised",
  year: "1990"
}];

/***/ }),

/***/ "./pages/about.tsx":
/*!*************************!*\
  !*** ./pages/about.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_leaflet_universal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-leaflet-universal */ "./node_modules/react-leaflet-universal/dist/index.js");
/* harmony import */ var react_leaflet_universal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_leaflet_universal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ "./components/layout.tsx");
/* harmony import */ var _components_title_banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/title-banner */ "./components/title-banner.tsx");
/* harmony import */ var _data_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/map */ "./data/map.tsx");

var _jsxFileName = "/home/miguel/PROJECTS/cv-react/pages/about.tsx";







function AboutText() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_title_banner__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "ABOUT ME",
    quote: "\"Life isnt about finding yourself. Life is about creating yourself.\"",
    quotePerson: "- George Bernard Shaw",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "body1",
    paragraph: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "I\u2019ve always sought out opportunities and challenges that are meaningful to me. Although my professional path has taken many twists and turns \u2014 from touring and recording artist, to employee of the year at a non-profit, to dean's scholar at UPenn, to small business owner and entrepreneur \u2014 I've never stopped engaging my passion to help others and solve problems.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), "As a web developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to literally change the world. That's why I\u2019m excited to make a big impact at a high growth company."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "overline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Current focus: Clojure // React"));
}

function MyMarker(props) {
  const {
    position,
    event,
    year
  } = props;
  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_leaflet_universal__WEBPACK_IMPORTED_MODULE_2__["Marker"], {
    position: position,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_leaflet_universal__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    permanent: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, event, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), " ", year));
}

function getMarkers(markers) {
  return markers.map(marker => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MyMarker, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, marker, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })));
}

function About() {
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({
    lat: 38.75,
    lng: -9.29,
    zoom: 5
  });
  const position = [state.lat, state.lng];
  const markers = getMarkers(_data_map__WEBPACK_IMPORTED_MODULE_6__["markerData"]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AboutText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_title_banner__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "MY JOURNEY",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "container",
    className: "leaftlet-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://unpkg.com/leaflet@1.4.0/dist/leaflet.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_leaflet_universal__WEBPACK_IMPORTED_MODULE_2__["Map"], {
    style: {
      height: "600px"
    },
    center: position,
    zoom: state.zoom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_leaflet_universal__WEBPACK_IMPORTED_MODULE_2__["TileLayer"], {
    attribution: "&copy <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors",
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), markers)));
}

/***/ })

})
//# sourceMappingURL=about.js.5a0455d70e59f39d7851.hot-update.js.map