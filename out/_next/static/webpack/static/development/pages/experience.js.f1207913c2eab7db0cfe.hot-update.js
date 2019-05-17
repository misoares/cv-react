webpackHotUpdate("static/development/pages/experience.js",{

/***/ "./components/navbar.tsx":
/*!*******************************!*\
  !*** ./components/navbar.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "/home/miguel/PROJECTS/cv-react/components/navbar.tsx";









function TabContainer(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    component: "div",
    style: {
      padding: 8 * 3
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, props.children);
}

TabContainer.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
};
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  textColorSecondary: {
    color: 'white'
  }
}));

function LinkTab(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: props.href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })));
}

function Navbar() {
  const classes = useStyles();
  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0);
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createMuiTheme"])({
    palette: {
      secondary: {
        main: '#F2F2F2'
      }
    }
  });

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["MuiThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    position: "static",
    color: "secondary",
    style: {
      background: `url("../static/images/barBackground.png")`,

      /* Full height */

      /* Center and scale the image nicely */
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: value,
    onChange: handleChange,
    variant: "fullWidth",
    scrollButtons: "on",
    indicatorColor: "secondary",
    textColor: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinkTab, {
    label: "Welcome",
    className: classes.textColorSecondary,
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinkTab, {
    label: "Experience",
    className: classes.textColorSecondary,
    href: "/experience",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinkTab, {
    label: "Portfolio",
    className: classes.textColorSecondary,
    href: "/portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinkTab, {
    label: "About Me",
    className: classes.textColorSecondary,
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinkTab, {
    label: "Contacts",
    className: classes.textColorSecondary,
    href: "/contacts",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./node_modules/@material-ui/icons/Favorite.js":
false,

/***/ "./node_modules/@material-ui/icons/Help.js":
false,

/***/ "./node_modules/@material-ui/icons/PersonPin.js":
false,

/***/ "./node_modules/@material-ui/icons/Phone.js":
false,

/***/ "./node_modules/@material-ui/icons/utils/createSvgIcon.js":
false

})
//# sourceMappingURL=experience.js.f1207913c2eab7db0cfe.hot-update.js.map