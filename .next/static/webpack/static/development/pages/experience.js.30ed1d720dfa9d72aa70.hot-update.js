webpackHotUpdate("static/development/pages/experience.js",{

/***/ "./components/cards/skill-card.tsx":
/*!*****************************************!*\
  !*** ./components/cards/skill-card.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "./node_modules/@material-ui/core/esm/CardHeader/index.js");
/* harmony import */ var _logos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../logos */ "./components/logos.tsx");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/home/miguel/PROJECTS/cv-react/components/cards/skill-card.tsx";







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createStyles"])({
  root: {
    flexGrow: 1,
    width: '100%'
  }
}));
const backendSkills = [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_logos__WEBPACK_IMPORTED_MODULE_4__["ClojureLogo"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_logos__WEBPACK_IMPORTED_MODULE_4__["JavaLogo"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_logos__WEBPACK_IMPORTED_MODULE_4__["NodeLogo"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_logos__WEBPACK_IMPORTED_MODULE_4__["KubernetesLogo"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_logos__WEBPACK_IMPORTED_MODULE_4__["KubernetesLogo"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
})];
const frontendSkills = [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_logos__WEBPACK_IMPORTED_MODULE_4__["ReactLogo"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_logos__WEBPACK_IMPORTED_MODULE_4__["AngularLogo"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_logos__WEBPACK_IMPORTED_MODULE_4__["TypescriptLogo"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_logos__WEBPACK_IMPORTED_MODULE_4__["JavascriptLogo"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_logos__WEBPACK_IMPORTED_MODULE_4__["KubernetesLogo"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
})];
const databaseSkills = [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_logos__WEBPACK_IMPORTED_MODULE_4__["PostgresLogo"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_logos__WEBPACK_IMPORTED_MODULE_4__["ElasticLogo"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_logos__WEBPACK_IMPORTED_MODULE_4__["MongoLogo"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
})];
const devopsSkills = [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_logos__WEBPACK_IMPORTED_MODULE_4__["KubernetesLogo"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_logos__WEBPACK_IMPORTED_MODULE_4__["DockerLogo"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_logos__WEBPACK_IMPORTED_MODULE_4__["JenkinsLogo"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_logos__WEBPACK_IMPORTED_MODULE_4__["LinuxLogo"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_logos__WEBPACK_IMPORTED_MODULE_4__["ApacheLogo"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
})];

function populateSkillCard(skills) {
  return skills.map((skill, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    key: index,
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, skill));
}

function SkillCard(props) {
  const {
    title
  } = props;
  const classes = useStyles();
  const skills = populateSkillCard(databaseSkills);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    titleTypographyProps: {
      variant: 'h5'
    },
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["CardContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    spacing: Number(6),
    direction: "row",
    justify: "space-evenly",
    alignItems: "stretch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, skills)));
}

/* harmony default export */ __webpack_exports__["default"] = (SkillCard);

/***/ })

})
//# sourceMappingURL=experience.js.30ed1d720dfa9d72aa70.hot-update.js.map