webpackHotUpdate("static/development/pages/experience.js",{

/***/ "./pages/experience.tsx":
/*!******************************!*\
  !*** ./pages/experience.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Experience; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_cards_experience_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/cards/experience-card */ "./components/cards/experience-card.tsx");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles/makeStyles */ "./node_modules/@material-ui/styles/esm/makeStyles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_cards_skill_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/cards/skill-card */ "./components/cards/skill-card.tsx");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout */ "./components/layout.tsx");
/* harmony import */ var _components_title_banner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/title-banner */ "./components/title-banner.tsx");
/* harmony import */ var _data_experience__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/experience */ "./data/experience.tsx");

var _jsxFileName = "/home/miguel/PROJECTS/cv-react/pages/experience.tsx";









const useStyles = Object(_material_ui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4__["default"])(theme => Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["createStyles"])({
  root: {
    flexGrow: 1
  }
}));

function getExperience(experiences) {
  return experiences.map((experience, index) => {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: index,
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_cards_experience_card__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: index
    }, experience, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    })));
  });
}

function getSkills(skills) {
  return skills.map((skill, index) => {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: index,
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_cards_skill_card__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: index
    }, skill, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    })));
  });
}

function Experience() {
  const classes = useStyles();
  const experiences = getExperience(_data_experience__WEBPACK_IMPORTED_MODULE_9__["experienceData"]);
  const skills = getSkills(_data_experience__WEBPACK_IMPORTED_MODULE_9__["skillData"]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_title_banner__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "EXPERIENCE",
    quote: "\"Most of the biggest problems in software are problems of misconception.\"",
    quotePerson: "- Rich Hickey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    container: true,
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    container: true,
    spacing: Number(6),
    direction: "column",
    justify: "space-evenly",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, experiences))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_title_banner__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "Skills",
    quote: "\"The most complicated skill is to be simple.\"",
    quotePerson: "- Dejan Stojanovic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    container: true,
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    container: true,
    spacing: Number(6),
    direction: "column",
    justify: "space-evenly",
    alignItems: "stretch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, skills))));
}

/***/ })

})
//# sourceMappingURL=experience.js.437e8f00c9abf8ba9a07.hot-update.js.map