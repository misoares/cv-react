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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_cards_experience_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/cards/experience-card */ "./components/cards/experience-card.tsx");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/styles/makeStyles */ "./node_modules/@material-ui/styles/esm/makeStyles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_cards_skill_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/cards/skill-card */ "./components/cards/skill-card.tsx");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout */ "./components/layout.tsx");
/* harmony import */ var _components_title_banner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/title-banner */ "./components/title-banner.tsx");
/* harmony import */ var _data_experience__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/experience */ "./data/experience.tsx");
var _jsxFileName = "/home/miguel/PROJECTS/cv-react/pages/experience.tsx";









const useStyles = Object(_material_ui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3__["default"])(theme => Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["createStyles"])({
  root: {
    flexGrow: 1
  },
  demo: {
    height: 40
  }
}));

function getExperience(experiences) {
  return experiences.map((experience, index) => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_cards_experience_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }));
  });
}

function getSkills(skills) {
  return skills.map((skill, index) => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_cards_skill_card__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }));
  });
}

function Experience() {
  const classes = useStyles();
  const experiences = getExperience(_data_experience__WEBPACK_IMPORTED_MODULE_8__["experienceData"]);
  const skills = getSkills(_data_experience__WEBPACK_IMPORTED_MODULE_8__["skillData"]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_title_banner__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "EXPERIENCE",
    quote: "\"Most of the biggest problems in software are problems of misconception.\"",
    quotePerson: "- Rich Hickey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    spacing: Number(6),
    className: classes.demo,
    direction: "column",
    justify: "space-evenly",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, experiences))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_title_banner__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Skills",
    quote: "\"The most complicated skill is to be simple.\"",
    quotePerson: "- Dejan Stojanovic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    spacing: Number(6),
    className: classes.demo,
    direction: "column",
    justify: "space-evenly",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, skills))));
}

/***/ })

})
//# sourceMappingURL=experience.js.8fbe19284c9767af415d.hot-update.js.map