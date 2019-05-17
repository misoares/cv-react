webpackHotUpdate("static/development/pages/experience.js",{

/***/ "./components/cards/experience-card.tsx":
/*!**********************************************!*\
  !*** ./components/cards/experience-card.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "./node_modules/@material-ui/core/esm/CardHeader/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/colors/red */ "./node_modules/@material-ui/core/colors/red.js");
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/home/miguel/PROJECTS/cv-react/components/cards/experience-card.tsx";
 //import { Card, CardColumns } from 'react-bootstrap'









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createStyles"])({
  card: {
    maxWidth: "100px"
  },
  avatar: {
    backgroundColor: _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_8___default.a[500]
  }
}));
const cardContent = ["Architecture and development of a smart ERP with IoT integration which\
    included NFC, RFID and tracking devices.In this project I have worked in\
    designing the architecture, backend development, deployment using Kubernetes\
    and optimization of the working environment using automation and CI with\
    Jenkins.This project also included an iOS and Android app which I supervised\
    but was not part of the development.", "The position of team leader of a team of 5 people (working remote), was shared between me and another engineer for the first year at the company, where we shared the role of Scrum master.", "Development and maintenance of a delay management system for public transportation for one of the biggest pharma companies in Switzerland."];

function populateCardContent(content) {
  return content.map((line, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    key: index,
    variant: "body1",
    color: "textPrimary",
    align: "justify",
    component: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, line));
}

function ExperienceCard() {
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      maxWidth: "800px"
    },
    className: classes.card,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    avatar: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6__["default"], {
      "aria-label": "Experience",
      src: "https://satcom-int.com/wp-content/uploads/2014/10/favicon.png",
      className: classes.avatar,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }),
    titleTypographyProps: {
      variant: 'h5'
    },
    title: "Satcom International AG",
    subheader: "Augoust 2017 - May 2019 | Zurich, CH",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, populateCardContent(cardContent)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__["default"], {
    disableSpacing: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "overline",
    component: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Tech Stack: Java 8, Vertx, Spring boot, Kubernetes, Docker")));
}

/* harmony default export */ __webpack_exports__["default"] = (ExperienceCard);

/***/ })

})
//# sourceMappingURL=experience.js.33ecbcda2815e9b8653d.hot-update.js.map