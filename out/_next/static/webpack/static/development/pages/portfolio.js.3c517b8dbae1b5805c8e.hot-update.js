webpackHotUpdate("static/development/pages/portfolio.js",{

/***/ "./pages/portfolio.tsx":
/*!*****************************!*\
  !*** ./pages/portfolio.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Portfolio; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/styles/makeStyles */ "./node_modules/@material-ui/styles/esm/makeStyles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_cards_portfolio_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/cards/portfolio-card */ "./components/cards/portfolio-card.tsx");
/* harmony import */ var _components_title_banner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/title-banner */ "./components/title-banner.tsx");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout */ "./components/layout.tsx");
/* harmony import */ var _data_portfolio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/portfolio */ "./data/portfolio.tsx");

var _jsxFileName = "/home/miguel/PROJECTS/cv-react/pages/portfolio.tsx";








const useStyles = Object(_material_ui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3__["default"])(theme => Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["createStyles"])({
  root: {
    flexGrow: 1
  },
  demo: {
    height: 40
  }
}));

function getCards() {
  return _data_portfolio__WEBPACK_IMPORTED_MODULE_8__["cardData"].map((card, index) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    key: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_cards_portfolio_card__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    key: index
  }, card, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }))));
}

function Portfolio() {
  const classes = useStyles();
  const portfolioCards = getCards();
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_title_banner__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "PORTFOLIO",
    quote: "\"Failure is the opportunity to begin again more intelligently\"",
    quotePerson: "- Henry Ford",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    spacing: Number(6),
    direction: "row",
    justify: "space-evenly",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, portfolioCards))));
}

/***/ })

})
//# sourceMappingURL=portfolio.js.3c517b8dbae1b5805c8e.hot-update.js.map