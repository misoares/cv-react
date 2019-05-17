webpackHotUpdate("static/development/pages/about.js",{

/***/ "./pages/about.tsx":
/*!*************************!*\
  !*** ./pages/about.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_leaflet_universal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-leaflet-universal */ "./node_modules/react-leaflet-universal/dist/index.js");
/* harmony import */ var react_leaflet_universal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_leaflet_universal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ "./components/layout.tsx");
/* harmony import */ var _components_title_banner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/title-banner */ "./components/title-banner.tsx");

var _jsxFileName = "/home/miguel/PROJECTS/cv-react/pages/about.tsx";






class About extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      lat: 38.75,
      lng: -9.29,
      zoom: 5
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "position", [this.state.lat, this.state.lng]);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "options", {
      factor: 10
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "theme", Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["responsiveFontSizes"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["createMuiTheme"])(), this.options));
  }

  aboutText() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_title_banner__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "ABOUT ME",
      quote: "\"Life isnt about finding yourself. Life is about creating yourself.\"",
      quotePerson: "- George Bernard Shaw",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      variant: "body1",
      paragraph: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "I\u2019ve always sought out opportunities and challenges that are meaningful to me. Although my professional path has taken many twists and turns \u2014 from touring and recording artist, to employee of the year at a non-profit, to dean's scholar at UPenn, to small business owner and entrepreneur \u2014 I've never stopped engaging my passion to help others and solve problems.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), "As a web developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to literally change the world. That's why I\u2019m excited to make a big impact at a high growth company."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      variant: "overline",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "Current focus: Clojure // React"));
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, this.aboutText(), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "container",
      className: "leaftlet-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_title_banner__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "MY JOURNEY",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
      rel: "stylesheet",
      href: "https://unpkg.com/leaflet@1.4.0/dist/leaflet.css",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_leaflet_universal__WEBPACK_IMPORTED_MODULE_2__["Map"], {
      style: {
        height: "600px"
      },
      center: this.position,
      zoom: this.state.zoom,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_leaflet_universal__WEBPACK_IMPORTED_MODULE_2__["TileLayer"], {
      attribution: "&copy <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors",
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_leaflet_universal__WEBPACK_IMPORTED_MODULE_2__["Marker"], {
      position: this.position,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_leaflet_universal__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
      permanent: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, "Born and raised ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }), " 1990")))));
  }

}

/***/ })

})
//# sourceMappingURL=about.js.e511ba237549626eec04.hot-update.js.map