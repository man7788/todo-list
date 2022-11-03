/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: sans-serif;\n}\n\n#container {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 1fr 10fr 1fr;\n  grid-template-columns: 300px 100fr;\n}\n\n /* ////////////////////////////////////////Header  */\n.header-container {\n  /* border: 2px solid salmon; */\n  grid-column: 1 / 2;\n  background: rgb(40, 40, 40);\n  font-size: 2rem;\n  color: whitesmoke;\n  display: grid;\n}\n\n.header-title {\n  place-self: center;\n}\n\n /* ////////////////////////////////////////Side  */\n.side-container {\n  /* border: 2px solid greenyellow; */\n  grid-row: 2 / 4;\n  grid-column: 1 / 2;\n  background: rgb(40, 40, 40);\n  display: grid;\n}\n\n.side-menu {\n  display: grid;\n  grid-template-rows: 1fr 1fr 1fr 1fr 10fr;\n  grid-template-columns: 1fr 2fr 2fr 1fr;\n  justify-content: center;\n}\n\n.side-button {\n  color: whitesmoke;\n  font-size: 1.5rem;\n  grid-column: 2 / 3;\n}\n\n.side-button:nth-child(1) {\n  grid-row: 2 / 3;\n}\n\n.side-button:nth-child(2) {\n  grid-row: 3 / 4;\n}\n\n.side-button:nth-child(3) {\n  grid-row: 4 / 5;\n}\n\n/* .project-container {\n  grid-row: 5 / 6;\n  grid-column: 2 / 4;\n  color: whitesmoke;\n}\n\n.project-title {\n  font-size: 1.1rem;\n  text-align: center;\n} */\n /* ////////////////////////////////////////Inbox  */\n\n .content {\n  grid-row: 1 / 4;\n  grid-column: 2 / 3;\n  background: rgb(70, 70, 70);\n  display: grid;\n }\n\n.inbox-content,\n.project-content {\n  color: whitesmoke;\n  display: grid;\n  grid-template-rows: 0.1fr 1fr 10fr;\n  grid-template-columns: 1fr 5fr 1fr;\n}\n\n /* ////////////////////////////////////////Inbox Header  */\n.inbox-header-container,\n.project-header-container {\n  grid-row: 2 / 3;\n  grid-column: 2 / 3;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  border-bottom: 5px solid whitesmoke;\n  align-items: end;\n}\n\n.inbox-title,\n.project-title {\n  font-size: 2rem;\n  grid-column: 1 / 2;\n}\n\n.new-todo-div,\n.new-project-div {\n  grid-column: 3 / 4;\n  display: grid;\n  grid-template-columns: 1fr 1.5fr 109px;\n  justify-self: end;\n  align-items: center;\n}\n\n.new-project-div {\n  grid-template-columns: 1fr 1.5fr 130px;\n}\n\n.inbox-add,\n.project-add {\n  font-size: 3rem;\n  grid-column: 2 / 3;\n  position: relative;\n  top: 0.28rem;\n  display: flex;\n  justify-content: flex-end;\n  padding-right: 0.5rem;\n}\n\n.new-todo,\n.new-project {\n  font-size: 1.5rem;\n  position: relative;\n  top: 0.5rem;\n  width: fit-content;\n}\n\n /* ////////////////////////////////////////Inbox Card  */\n .card-container {\n  grid-row: 3 / 4;\n  grid-column: 2 / 3;\n  display: flex;\n  flex-direction: column;\n }\n\n .card-item {\n  background: rgba(40, 40, 40, 0.6);\n  border-radius: 20px;\n  padding: 1rem;\n  margin-top: 1rem;\n  font-size: 1.5rem;\n  \n }\n\n /* .card-title {\n  font-size: 1.2rem;\n } */\n\nform {\n  display: flex;\n  flex-direction: column;\n  display: grid;\n  grid-template-columns: 7fr 1fr;\n }\n\ninput,\nselect {\n  background: rgba(40, 40, 40, 0.6);\n  color: whitesmoke;\n  font-size: 1.5rem;\n  border: 1px solid transparent;\n\n }\n\ninput:nth-child(1) {\n  grid-row: 1 / 2;\n}\n\ninput:nth-child(2) {\n  grid-row: 2 / 3;\n}\n\ninput:nth-child(3) {\n  grid-row: 3 / 4;\n}\n\n button {\n  grid-column: 2 / 3;\n  grid-row: 4 / 5;\n  width: 4rem;\n  justify-self: center;\n  background: rgb(100, 100, 100);\n  color: whitesmoke;\n  border-radius: 20rem;\n  border: 1px solid transparent;\n }\n\n select {\n  grid-row: 4 / 5;\n }\n /* ////////////////////////////////////////Footer  */\n.footer-container {\n  /* border: 2px solid lightcoral; */\n  grid-column: 1 / 2;\n  background: rgb(40, 40, 40);\n  display: grid;\n  grid-template-columns: 1fr 1fr 6fr 1fr;\n  color: beige;\n  place-items: center;\n}\n\n.footer-add {\n  font-size: 3rem;\n  grid-column: 2 / 3;\n  padding-bottom: 0.5rem;\n}\n\n.footer-new-prj {\n  font-size: 1.5rem;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,gCAAgC;EAChC,kCAAkC;AACpC;;CAEC,oDAAoD;AACrD;EACE,8BAA8B;EAC9B,kBAAkB;EAClB,2BAA2B;EAC3B,eAAe;EACf,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;;CAEC,kDAAkD;AACnD;EACE,mCAAmC;EACnC,eAAe;EACf,kBAAkB;EAClB,2BAA2B;EAC3B,aAAa;AACf;;AAEA;EACE,aAAa;EACb,wCAAwC;EACxC,sCAAsC;EACtC,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;;;;;;;;;GASG;CACF,mDAAmD;;CAEnD;EACC,eAAe;EACf,kBAAkB;EAClB,2BAA2B;EAC3B,aAAa;CACd;;AAED;;EAEE,iBAAiB;EACjB,aAAa;EACb,kCAAkC;EAClC,kCAAkC;AACpC;;CAEC,0DAA0D;AAC3D;;EAEE,eAAe;EACf,kBAAkB;EAClB,aAAa;EACb,kCAAkC;EAClC,mCAAmC;EACnC,gBAAgB;AAClB;;AAEA;;EAEE,eAAe;EACf,kBAAkB;AACpB;;AAEA;;EAEE,kBAAkB;EAClB,aAAa;EACb,sCAAsC;EACtC,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,sCAAsC;AACxC;;AAEA;;EAEE,eAAe;EACf,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;;EAEE,iBAAiB;EACjB,kBAAkB;EAClB,WAAW;EACX,kBAAkB;AACpB;;CAEC,wDAAwD;CACxD;EACC,eAAe;EACf,kBAAkB;EAClB,aAAa;EACb,sBAAsB;CACvB;;CAEA;EACC,iCAAiC;EACjC,mBAAmB;EACnB,aAAa;EACb,gBAAgB;EAChB,iBAAiB;;CAElB;;CAEA;;IAEG;;AAEJ;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,8BAA8B;CAC/B;;AAED;;EAEE,iCAAiC;EACjC,iBAAiB;EACjB,iBAAiB;EACjB,6BAA6B;;CAE9B;;AAED;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;CAEC;EACC,kBAAkB;EAClB,eAAe;EACf,WAAW;EACX,oBAAoB;EACpB,8BAA8B;EAC9B,iBAAiB;EACjB,oBAAoB;EACpB,6BAA6B;CAC9B;;CAEA;EACC,eAAe;CAChB;CACA,oDAAoD;AACrD;EACE,kCAAkC;EAClC,kBAAkB;EAClB,2BAA2B;EAC3B,aAAa;EACb,sCAAsC;EACtC,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;AACnB","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: sans-serif;\n}\n\n#container {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 1fr 10fr 1fr;\n  grid-template-columns: 300px 100fr;\n}\n\n /* ////////////////////////////////////////Header  */\n.header-container {\n  /* border: 2px solid salmon; */\n  grid-column: 1 / 2;\n  background: rgb(40, 40, 40);\n  font-size: 2rem;\n  color: whitesmoke;\n  display: grid;\n}\n\n.header-title {\n  place-self: center;\n}\n\n /* ////////////////////////////////////////Side  */\n.side-container {\n  /* border: 2px solid greenyellow; */\n  grid-row: 2 / 4;\n  grid-column: 1 / 2;\n  background: rgb(40, 40, 40);\n  display: grid;\n}\n\n.side-menu {\n  display: grid;\n  grid-template-rows: 1fr 1fr 1fr 1fr 10fr;\n  grid-template-columns: 1fr 2fr 2fr 1fr;\n  justify-content: center;\n}\n\n.side-button {\n  color: whitesmoke;\n  font-size: 1.5rem;\n  grid-column: 2 / 3;\n}\n\n.side-button:nth-child(1) {\n  grid-row: 2 / 3;\n}\n\n.side-button:nth-child(2) {\n  grid-row: 3 / 4;\n}\n\n.side-button:nth-child(3) {\n  grid-row: 4 / 5;\n}\n\n/* .project-container {\n  grid-row: 5 / 6;\n  grid-column: 2 / 4;\n  color: whitesmoke;\n}\n\n.project-title {\n  font-size: 1.1rem;\n  text-align: center;\n} */\n /* ////////////////////////////////////////Inbox  */\n\n .content {\n  grid-row: 1 / 4;\n  grid-column: 2 / 3;\n  background: rgb(70, 70, 70);\n  display: grid;\n }\n\n.inbox-content,\n.project-content {\n  color: whitesmoke;\n  display: grid;\n  grid-template-rows: 0.1fr 1fr 10fr;\n  grid-template-columns: 1fr 5fr 1fr;\n}\n\n /* ////////////////////////////////////////Inbox Header  */\n.inbox-header-container,\n.project-header-container {\n  grid-row: 2 / 3;\n  grid-column: 2 / 3;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  border-bottom: 5px solid whitesmoke;\n  align-items: end;\n}\n\n.inbox-title,\n.project-title {\n  font-size: 2rem;\n  grid-column: 1 / 2;\n}\n\n.new-todo-div,\n.new-project-div {\n  grid-column: 3 / 4;\n  display: grid;\n  grid-template-columns: 1fr 1.5fr 109px;\n  justify-self: end;\n  align-items: center;\n}\n\n.new-project-div {\n  grid-template-columns: 1fr 1.5fr 130px;\n}\n\n.inbox-add,\n.project-add {\n  font-size: 3rem;\n  grid-column: 2 / 3;\n  position: relative;\n  top: 0.28rem;\n  display: flex;\n  justify-content: flex-end;\n  padding-right: 0.5rem;\n}\n\n.new-todo,\n.new-project {\n  font-size: 1.5rem;\n  position: relative;\n  top: 0.5rem;\n  width: fit-content;\n}\n\n /* ////////////////////////////////////////Inbox Card  */\n .card-container {\n  grid-row: 3 / 4;\n  grid-column: 2 / 3;\n  display: flex;\n  flex-direction: column;\n }\n\n .card-item {\n  background: rgba(40, 40, 40, 0.6);\n  border-radius: 20px;\n  padding: 1rem;\n  margin-top: 1rem;\n  font-size: 1.5rem;\n  \n }\n\n /* .card-title {\n  font-size: 1.2rem;\n } */\n\nform {\n  display: flex;\n  flex-direction: column;\n  display: grid;\n  grid-template-columns: 7fr 1fr;\n }\n\ninput,\nselect {\n  background: rgba(40, 40, 40, 0.6);\n  color: whitesmoke;\n  font-size: 1.5rem;\n  border: 1px solid transparent;\n\n }\n\ninput:nth-child(1) {\n  grid-row: 1 / 2;\n}\n\ninput:nth-child(2) {\n  grid-row: 2 / 3;\n}\n\ninput:nth-child(3) {\n  grid-row: 3 / 4;\n}\n\n button {\n  grid-column: 2 / 3;\n  grid-row: 4 / 5;\n  width: 4rem;\n  justify-self: center;\n  background: rgb(100, 100, 100);\n  color: whitesmoke;\n  border-radius: 20rem;\n  border: 1px solid transparent;\n }\n\n select {\n  grid-row: 4 / 5;\n }\n /* ////////////////////////////////////////Footer  */\n.footer-container {\n  /* border: 2px solid lightcoral; */\n  grid-column: 1 / 2;\n  background: rgb(40, 40, 40);\n  display: grid;\n  grid-template-columns: 1fr 1fr 6fr 1fr;\n  color: beige;\n  place-items: center;\n}\n\n.footer-add {\n  font-size: 3rem;\n  grid-column: 2 / 3;\n  padding-bottom: 0.5rem;\n}\n\n.footer-new-prj {\n  font-size: 1.5rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/add-card.js":
/*!*************************!*\
  !*** ./src/add-card.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTodoClick": () => (/* binding */ createTodoClick)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./src/factory.js");


const cardFactory = () => {
  const cardItem = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('card-item').element;
  const form = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.formFactory)().element;
  const title = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.inputFactory)('text', 'New Title').element;
  const descript = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.inputFactory)('text', 'New Description').element;
  const date = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.inputFactory)('text', 'New Date').element;
  const priority = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.selectFactory)('High', 'Normal', 'Low').element;
  const add = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.buttonFactory)('submit').element;

  add.addEventListener('click', function(e) {
    e.preventDefault();
    form.parentNode.remove();
    cardOutput(title.value,
      descript.value,
      date.value,
      priority.value)
  });

  form.append(title, descript, date, priority, add);
  cardItem.append(form);

  return { cardItem };
}

function cardOutput (title, descript, date, priority) {
  const cardContainer = findElement().cardContainer;
  const cardItem = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('card-item').element;
  const cardTitle = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('card-title').element;
  const cardDescript = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('card-descript').element;
  const cardDate = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('card-date').element;
  const cardPriority = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('card-priority').element;
  
  cardItem.textContent = title;
  cardDescript.textContent = descript;
  cardDate.textContent = date;
  cardPriority.textContent = 'Priority: ' + priority;

  cardItem.append(cardTitle, cardDescript, cardDate, cardPriority);
  cardContainer.append(cardItem)
}

function findElement() {
  const newButton = document.querySelector('.new-todo-div');
  const cardContainer = document.querySelector('.card-container');
  return { newButton, cardContainer }
}

function createTodoClick() {
  const target = findElement().newButton;
  target.addEventListener('click', addCard);
}

function addCard() {
  const target = findElement().cardContainer;
  const newCard = cardFactory('New Title', 'New Description', 'New Date', '').cardItem;
  target.appendChild(newCard);
}


/***/ }),

/***/ "./src/factory.js":
/*!************************!*\
  !*** ./src/factory.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttonFactory": () => (/* binding */ buttonFactory),
/* harmony export */   "elementFactory": () => (/* binding */ elementFactory),
/* harmony export */   "formFactory": () => (/* binding */ formFactory),
/* harmony export */   "inputFactory": () => (/* binding */ inputFactory),
/* harmony export */   "selectFactory": () => (/* binding */ selectFactory)
/* harmony export */ });
const elementFactory = (name) => {
  const element = document.createElement('div');
  element.classList.add(name);
  return { element };
};

const formFactory = () => {
  const element = document.createElement('form');
  // element.setAttribute('action', action);
  // element.setAttribute('method', method);
  return { element };
};

const inputFactory = (type, plcholder) => {
  const br = document.createElement('br');
  const element = document.createElement('input');
  element.setAttribute('type', type);
  element.setAttribute('placeholder', plcholder);
  br.appendChild(element);
  return { element };
}

const selectFactory = (op1, op2, op3) => {
  const element = document.createElement('select');
  const option1 = document.createElement('option');
  const option2 = document.createElement('option');
  const option3 = document.createElement('option');

  option1.textContent = op1;
  option2.textContent = op2;
  option2.setAttribute('selected', 'selected');
  option3.textContent = op3;
  element.append(option1, option2, option3);

  return { element }
}

const buttonFactory = (type) => {
  const element = document.createElement('button');
  element.setAttribute('type', type);
  element.textContent = 'Add';
  return { element }
}



 // cardTitle.setAttribute('contenteditable', 'true');
  // cardDescript.setAttribute('contenteditable', 'true');
  // cardDate.setAttribute('contenteditable', 'true');
  // cardPriority.setAttribute('contenteditable', 'true');
  

  // cardTitle.textContent = title;
  // cardDescript.textContent = descript;
  // cardPriority.textContent = 'Priority: ' + priority;
  // cardDate.textContent = date;

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHeader": () => (/* binding */ createHeader)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./src/factory.js");


function createHeader() {
  const headerDiv = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('header-container').element;
  const content = createHeaderContent();

  headerDiv.appendChild(content);

  return headerDiv;
}

function createHeaderContent() {
  const headerTitle = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('header-title').element;

  headerTitle.textContent = 'Todo List';

  return headerTitle;

}



/***/ }),

/***/ "./src/inbox.js":
/*!**********************!*\
  !*** ./src/inbox.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createInboxContent": () => (/* binding */ createInboxContent)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./src/factory.js");


function createInboxContent() {
  const inboxContent = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('inbox-content').element;
  const headerContent = createInboxHeader();
  const cardContainer = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('card-container').element;

  inboxContent.append(headerContent);
  inboxContent.append(cardContainer);

  return inboxContent;
}

function createInboxHeader() {
  const inboxHeaderDiv = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('inbox-header-container').element;
  const inboxTitle = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('inbox-title').element;
  const newTodoDiv = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('new-todo-div').element;
  const inboxAdd = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('inbox-add').element;
  const newTodo = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('new-todo').element;

  inboxTitle.textContent = 'Inbox';
  inboxAdd.textContent = '+';
  newTodo.textContent = 'New Todo';

  newTodoDiv.append(inboxAdd, newTodo);
  inboxHeaderDiv.append(inboxTitle, newTodoDiv);

  return inboxHeaderDiv;
}



/***/ }),

/***/ "./src/layout.js":
/*!***********************!*\
  !*** ./src/layout.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "placeToContainer": () => (/* binding */ placeToContainer)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./src/factory.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _side__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./side */ "./src/side.js");
/* harmony import */ var _inbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inbox */ "./src/inbox.js");





function createDiv() {
  const contentDiv = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('content').element;
  return { contentDiv };
}

function placeToContainer() {
  const contentDiv= placeToParent().contentDiv;
  container.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_1__.createHeader)());
  container.appendChild((0,_side__WEBPACK_IMPORTED_MODULE_2__.createSide)());
  container.appendChild(contentDiv);
}

function placeToParent() {
const contentDiv = createDiv().contentDiv;

contentDiv.appendChild((0,_inbox__WEBPACK_IMPORTED_MODULE_3__.createInboxContent)());

return { contentDiv };
}



/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProjectContent": () => (/* binding */ createProjectContent)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./src/factory.js");


function createProjectContent() {
  const projectContent = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('project-content').element;
  const headerContent = createProjectHeader();

  projectContent.append(headerContent);

  return projectContent;
}

function createProjectHeader() {
  const projectHeaderDiv = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('project-header-container').element;
  const projectTitle = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('project-title').element;
  const newProjectDiv = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('new-project-div').element;
  const projectAdd = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('project-add').element;
  const newProject = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('new-project').element;

  projectTitle.textContent = 'Projects';
  projectAdd.textContent = '+';
  newProject.textContent = 'New Project';

  newProjectDiv.append(projectAdd, newProject);
  projectHeaderDiv.append(projectTitle, newProjectDiv);

  return projectHeaderDiv;
}



/***/ }),

/***/ "./src/side-listeners.js":
/*!*******************************!*\
  !*** ./src/side-listeners.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createClick": () => (/* binding */ createClick)
/* harmony export */ });
/* harmony import */ var _inbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inbox */ "./src/inbox.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");



function findElement() {
  const menuInbox = document.querySelector('.side-button:nth-child(1)');
  const menuProjects = document.querySelector('.side-button:nth-child(2)');
  const mainContent = document.querySelector('.content')
  const addButton = document.querySelector('.new-todo')
  return { menuInbox, menuProjects, mainContent, addButton };
}

function createClick() {
  const inbox = findElement().menuInbox;
  const project = findElement().menuProjects;
  inbox.addEventListener('click', loadInbox);
  project.addEventListener('click', loadProject);
}

function loadInbox() {
  const load = findElement().mainContent;
  document.querySelector('.content > *').remove();
  load.appendChild((0,_inbox__WEBPACK_IMPORTED_MODULE_0__.createInboxContent)());
}

function loadProject() {
  const load = findElement().mainContent;
  document.querySelector('.content > *').remove();
  load.appendChild((0,_projects__WEBPACK_IMPORTED_MODULE_1__.createProjectContent)());
}



/***/ }),

/***/ "./src/side.js":
/*!*********************!*\
  !*** ./src/side.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSide": () => (/* binding */ createSide),
/* harmony export */   "createSideContent": () => (/* binding */ createSideContent)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./src/factory.js");


function createSide() {
  const sideDiv = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('side-container').element;
  const content = createSideContent().sideMenu;
  
  sideDiv.appendChild(content);
  
  return sideDiv;
}

function createSideContent() {
  const sideMenu = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('side-menu').element;
  // const sideHome = elementFactory('side-button').element;
  const sideInbox = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('side-button').element;
  const sideProject = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('side-button').element;
  // const projectDiv = createSideProject();
  
  // sideHome.textContent = 'Home';
  sideInbox.textContent = 'Inbox';
  sideProject.textContent = 'Projects';

  sideMenu.append( sideInbox, sideProject );
  
  return { sideMenu, sideInbox, sideProject };
}

// function createSideProject() {
//   const projectDiv = elementFactory('project-container').element;
//   const projectItem = elementFactory('project-title').element;

//   projectItem.textContent = 'Project Name';

//   projectDiv.appendChild(projectItem);

//   return projectDiv;
// }




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout */ "./src/layout.js");
/* harmony import */ var _side_listeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./side-listeners */ "./src/side-listeners.js");
/* harmony import */ var _add_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-card */ "./src/add-card.js");





(function() {
  (0,_layout__WEBPACK_IMPORTED_MODULE_1__.placeToContainer)();
})();

(function() {
  (0,_side_listeners__WEBPACK_IMPORTED_MODULE_2__.createClick)();
})();

(function() {
  (0,_add_card__WEBPACK_IMPORTED_MODULE_3__.createTodoClick)();
})();




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSw2Q0FBNkMsZUFBZSxjQUFjLDJCQUEyQiw0QkFBNEIsR0FBRyxnQkFBZ0Isa0JBQWtCLGtCQUFrQixxQ0FBcUMsdUNBQXVDLEdBQUcsK0VBQStFLGlDQUFpQyx5QkFBeUIsZ0NBQWdDLG9CQUFvQixzQkFBc0Isa0JBQWtCLEdBQUcsbUJBQW1CLHVCQUF1QixHQUFHLDJFQUEyRSxzQ0FBc0Msc0JBQXNCLHVCQUF1QixnQ0FBZ0Msa0JBQWtCLEdBQUcsZ0JBQWdCLGtCQUFrQiw2Q0FBNkMsMkNBQTJDLDRCQUE0QixHQUFHLGtCQUFrQixzQkFBc0Isc0JBQXNCLHVCQUF1QixHQUFHLCtCQUErQixvQkFBb0IsR0FBRywrQkFBK0Isb0JBQW9CLEdBQUcsK0JBQStCLG9CQUFvQixHQUFHLDJCQUEyQixvQkFBb0IsdUJBQXVCLHNCQUFzQixHQUFHLG9CQUFvQixzQkFBc0IsdUJBQXVCLElBQUksd0VBQXdFLG9CQUFvQix1QkFBdUIsZ0NBQWdDLGtCQUFrQixJQUFJLHVDQUF1QyxzQkFBc0Isa0JBQWtCLHVDQUF1Qyx1Q0FBdUMsR0FBRyx1SEFBdUgsb0JBQW9CLHVCQUF1QixrQkFBa0IsdUNBQXVDLHdDQUF3QyxxQkFBcUIsR0FBRyxtQ0FBbUMsb0JBQW9CLHVCQUF1QixHQUFHLHNDQUFzQyx1QkFBdUIsa0JBQWtCLDJDQUEyQyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLDJDQUEyQyxHQUFHLCtCQUErQixvQkFBb0IsdUJBQXVCLHVCQUF1QixpQkFBaUIsa0JBQWtCLDhCQUE4QiwwQkFBMEIsR0FBRyw4QkFBOEIsc0JBQXNCLHVCQUF1QixnQkFBZ0IsdUJBQXVCLEdBQUcsa0ZBQWtGLG9CQUFvQix1QkFBdUIsa0JBQWtCLDJCQUEyQixJQUFJLGlCQUFpQixzQ0FBc0Msd0JBQXdCLGtCQUFrQixxQkFBcUIsc0JBQXNCLFFBQVEscUJBQXFCLHNCQUFzQixLQUFLLFlBQVksa0JBQWtCLDJCQUEyQixrQkFBa0IsbUNBQW1DLElBQUksb0JBQW9CLHNDQUFzQyxzQkFBc0Isc0JBQXNCLGtDQUFrQyxNQUFNLHdCQUF3QixvQkFBb0IsR0FBRyx3QkFBd0Isb0JBQW9CLEdBQUcsd0JBQXdCLG9CQUFvQixHQUFHLGFBQWEsdUJBQXVCLG9CQUFvQixnQkFBZ0IseUJBQXlCLG1DQUFtQyxzQkFBc0IseUJBQXlCLGtDQUFrQyxJQUFJLGFBQWEsb0JBQW9CLElBQUksNkVBQTZFLHFDQUFxQyx5QkFBeUIsZ0NBQWdDLGtCQUFrQiwyQ0FBMkMsaUJBQWlCLHdCQUF3QixHQUFHLGlCQUFpQixvQkFBb0IsdUJBQXVCLDJCQUEyQixHQUFHLHFCQUFxQixzQkFBc0IsR0FBRyxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxhQUFhLEtBQUssYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxZQUFZLE9BQU8sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksY0FBYyxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSw2QkFBNkIsZUFBZSxjQUFjLDJCQUEyQiw0QkFBNEIsR0FBRyxnQkFBZ0Isa0JBQWtCLGtCQUFrQixxQ0FBcUMsdUNBQXVDLEdBQUcsK0VBQStFLGlDQUFpQyx5QkFBeUIsZ0NBQWdDLG9CQUFvQixzQkFBc0Isa0JBQWtCLEdBQUcsbUJBQW1CLHVCQUF1QixHQUFHLDJFQUEyRSxzQ0FBc0Msc0JBQXNCLHVCQUF1QixnQ0FBZ0Msa0JBQWtCLEdBQUcsZ0JBQWdCLGtCQUFrQiw2Q0FBNkMsMkNBQTJDLDRCQUE0QixHQUFHLGtCQUFrQixzQkFBc0Isc0JBQXNCLHVCQUF1QixHQUFHLCtCQUErQixvQkFBb0IsR0FBRywrQkFBK0Isb0JBQW9CLEdBQUcsK0JBQStCLG9CQUFvQixHQUFHLDJCQUEyQixvQkFBb0IsdUJBQXVCLHNCQUFzQixHQUFHLG9CQUFvQixzQkFBc0IsdUJBQXVCLElBQUksd0VBQXdFLG9CQUFvQix1QkFBdUIsZ0NBQWdDLGtCQUFrQixJQUFJLHVDQUF1QyxzQkFBc0Isa0JBQWtCLHVDQUF1Qyx1Q0FBdUMsR0FBRyx1SEFBdUgsb0JBQW9CLHVCQUF1QixrQkFBa0IsdUNBQXVDLHdDQUF3QyxxQkFBcUIsR0FBRyxtQ0FBbUMsb0JBQW9CLHVCQUF1QixHQUFHLHNDQUFzQyx1QkFBdUIsa0JBQWtCLDJDQUEyQyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLDJDQUEyQyxHQUFHLCtCQUErQixvQkFBb0IsdUJBQXVCLHVCQUF1QixpQkFBaUIsa0JBQWtCLDhCQUE4QiwwQkFBMEIsR0FBRyw4QkFBOEIsc0JBQXNCLHVCQUF1QixnQkFBZ0IsdUJBQXVCLEdBQUcsa0ZBQWtGLG9CQUFvQix1QkFBdUIsa0JBQWtCLDJCQUEyQixJQUFJLGlCQUFpQixzQ0FBc0Msd0JBQXdCLGtCQUFrQixxQkFBcUIsc0JBQXNCLFFBQVEscUJBQXFCLHNCQUFzQixLQUFLLFlBQVksa0JBQWtCLDJCQUEyQixrQkFBa0IsbUNBQW1DLElBQUksb0JBQW9CLHNDQUFzQyxzQkFBc0Isc0JBQXNCLGtDQUFrQyxNQUFNLHdCQUF3QixvQkFBb0IsR0FBRyx3QkFBd0Isb0JBQW9CLEdBQUcsd0JBQXdCLG9CQUFvQixHQUFHLGFBQWEsdUJBQXVCLG9CQUFvQixnQkFBZ0IseUJBQXlCLG1DQUFtQyxzQkFBc0IseUJBQXlCLGtDQUFrQyxJQUFJLGFBQWEsb0JBQW9CLElBQUksNkVBQTZFLHFDQUFxQyx5QkFBeUIsZ0NBQWdDLGtCQUFrQiwyQ0FBMkMsaUJBQWlCLHdCQUF3QixHQUFHLGlCQUFpQixvQkFBb0IsdUJBQXVCLDJCQUEyQixHQUFHLHFCQUFxQixzQkFBc0IsR0FBRyxtQkFBbUI7QUFDOWdUO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2ZvRzs7QUFFcEc7QUFDQSxtQkFBbUIsd0RBQWM7QUFDakMsZUFBZSxxREFBVztBQUMxQixnQkFBZ0Isc0RBQVk7QUFDNUIsbUJBQW1CLHNEQUFZO0FBQy9CLGVBQWUsc0RBQVk7QUFDM0IsbUJBQW1CLHVEQUFhO0FBQ2hDLGNBQWMsdURBQWE7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLHdEQUFjO0FBQ2pDLG9CQUFvQix3REFBYztBQUNsQyx1QkFBdUIsd0RBQWM7QUFDckMsbUJBQW1CLHdEQUFjO0FBQ2pDLHVCQUF1Qix3REFBYztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFEQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRWtGOztBQUVsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN2RDJDOztBQUUzQztBQUNBLG9CQUFvQix3REFBYztBQUNsQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLHdEQUFjOztBQUVwQzs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQjJDOztBQUUzQztBQUNBLHVCQUF1Qix3REFBYztBQUNyQztBQUNBLHdCQUF3Qix3REFBYzs7QUFFdEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLHdEQUFjO0FBQ3ZDLHFCQUFxQix3REFBYztBQUNuQyxxQkFBcUIsd0RBQWM7QUFDbkMsbUJBQW1CLHdEQUFjO0FBQ2pDLGtCQUFrQix3REFBYzs7QUFFaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QjJDO0FBQ0g7QUFDSjtBQUNTOztBQUU3QztBQUNBLHFCQUFxQix3REFBYztBQUNuQyxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixxREFBWTtBQUNwQyx3QkFBd0IsaURBQVU7QUFDbEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHVCQUF1QiwwREFBa0I7O0FBRXpDLFNBQVM7QUFDVDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QjJDOztBQUUzQztBQUNBLHlCQUF5Qix3REFBYztBQUN2Qzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLHdEQUFjO0FBQ3pDLHVCQUF1Qix3REFBYztBQUNyQyx3QkFBd0Isd0RBQWM7QUFDdEMscUJBQXFCLHdEQUFjO0FBQ25DLHFCQUFxQix3REFBYzs7QUFFbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUI2QztBQUNLOztBQUVsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMERBQWtCO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwrREFBb0I7QUFDdkM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCMkM7O0FBRTNDO0FBQ0Esa0JBQWtCLHdEQUFjO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQix3REFBYztBQUNqQztBQUNBLG9CQUFvQix3REFBYztBQUNsQyxzQkFBc0Isd0RBQWM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUV5Qzs7Ozs7OztVQ3RDekM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUN1QjtBQUNHO0FBQ0Y7O0FBRTdDO0FBQ0EsRUFBRSx5REFBZ0I7QUFDbEIsQ0FBQzs7QUFFRDtBQUNBLEVBQUUsNERBQVc7QUFDYixDQUFDOztBQUVEO0FBQ0EsRUFBRSwwREFBZTtBQUNqQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hZGQtY2FyZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmJveC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbGF5b3V0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2lkZS1saXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NpZGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTBmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDEwMGZyO1xcbn1cXG5cXG4gLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0hlYWRlciAgKi9cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuICAvKiBib3JkZXI6IDJweCBzb2xpZCBzYWxtb247ICovXFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBiYWNrZ3JvdW5kOiByZ2IoNDAsIDQwLCA0MCk7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5oZWFkZXItdGl0bGUge1xcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xcbn1cXG5cXG4gLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1NpZGUgICovXFxuLnNpZGUtY29udGFpbmVyIHtcXG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVueWVsbG93OyAqL1xcbiAgZ3JpZC1yb3c6IDIgLyA0O1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgYmFja2dyb3VuZDogcmdiKDQwLCA0MCwgNDApO1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLnNpZGUtbWVudSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnIgMTBmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAyZnIgMWZyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zaWRlLWJ1dHRvbiB7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbn1cXG5cXG4uc2lkZS1idXR0b246bnRoLWNoaWxkKDEpIHtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuLnNpZGUtYnV0dG9uOm50aC1jaGlsZCgyKSB7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxufVxcblxcbi5zaWRlLWJ1dHRvbjpudGgtY2hpbGQoMykge1xcbiAgZ3JpZC1yb3c6IDQgLyA1O1xcbn1cXG5cXG4vKiAucHJvamVjdC1jb250YWluZXIge1xcbiAgZ3JpZC1yb3c6IDUgLyA2O1xcbiAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn0gKi9cXG4gLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0luYm94ICAqL1xcblxcbiAuY29udGVudCB7XFxuICBncmlkLXJvdzogMSAvIDQ7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBiYWNrZ3JvdW5kOiByZ2IoNzAsIDcwLCA3MCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiB9XFxuXFxuLmluYm94LWNvbnRlbnQsXFxuLnByb2plY3QtY29udGVudCB7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuMWZyIDFmciAxMGZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyIDFmcjtcXG59XFxuXFxuIC8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9JbmJveCBIZWFkZXIgICovXFxuLmluYm94LWhlYWRlci1jb250YWluZXIsXFxuLnByb2plY3QtaGVhZGVyLWNvbnRhaW5lciB7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB3aGl0ZXNtb2tlO1xcbiAgYWxpZ24taXRlbXM6IGVuZDtcXG59XFxuXFxuLmluYm94LXRpdGxlLFxcbi5wcm9qZWN0LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG59XFxuXFxuLm5ldy10b2RvLWRpdixcXG4ubmV3LXByb2plY3QtZGl2IHtcXG4gIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxLjVmciAxMDlweDtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWRpdiB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxLjVmciAxMzBweDtcXG59XFxuXFxuLmluYm94LWFkZCxcXG4ucHJvamVjdC1hZGQge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAwLjI4cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbi5uZXctdG9kbyxcXG4ubmV3LXByb2plY3Qge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDAuNXJlbTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuIC8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9JbmJveCBDYXJkICAqL1xcbiAuY2FyZC1jb250YWluZXIge1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuIH1cXG5cXG4gLmNhcmQtaXRlbSB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQwLCA0MCwgNDAsIDAuNik7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIFxcbiB9XFxuXFxuIC8qIC5jYXJkLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiB9ICovXFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDdmciAxZnI7XFxuIH1cXG5cXG5pbnB1dCxcXG5zZWxlY3Qge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MCwgNDAsIDQwLCAwLjYpO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcblxcbiB9XFxuXFxuaW5wdXQ6bnRoLWNoaWxkKDEpIHtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuaW5wdXQ6bnRoLWNoaWxkKDIpIHtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuaW5wdXQ6bnRoLWNoaWxkKDMpIHtcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG59XFxuXFxuIGJ1dHRvbiB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogNCAvIDU7XFxuICB3aWR0aDogNHJlbTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogcmdiKDEwMCwgMTAwLCAxMDApO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBib3JkZXItcmFkaXVzOiAyMHJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiB9XFxuXFxuIHNlbGVjdCB7XFxuICBncmlkLXJvdzogNCAvIDU7XFxuIH1cXG4gLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0Zvb3RlciAgKi9cXG4uZm9vdGVyLWNvbnRhaW5lciB7XFxuICAvKiBib3JkZXI6IDJweCBzb2xpZCBsaWdodGNvcmFsOyAqL1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgYmFja2dyb3VuZDogcmdiKDQwLCA0MCwgNDApO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciA2ZnIgMWZyO1xcbiAgY29sb3I6IGJlaWdlO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvb3Rlci1hZGQge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLmZvb3Rlci1uZXctcHJqIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsa0NBQWtDO0FBQ3BDOztDQUVDLG9EQUFvRDtBQUNyRDtFQUNFLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztDQUVDLGtEQUFrRDtBQUNuRDtFQUNFLG1DQUFtQztFQUNuQyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isd0NBQXdDO0VBQ3hDLHNDQUFzQztFQUN0Qyx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTs7Ozs7Ozs7O0dBU0c7Q0FDRixtREFBbUQ7O0NBRW5EO0VBQ0MsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsYUFBYTtDQUNkOztBQUVEOztFQUVFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLGtDQUFrQztBQUNwQzs7Q0FFQywwREFBMEQ7QUFDM0Q7O0VBRUUsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLG1DQUFtQztFQUNuQyxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBOztFQUVFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0NBRUMsd0RBQXdEO0NBQ3hEO0VBQ0MsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0NBQ3ZCOztDQUVBO0VBQ0MsaUNBQWlDO0VBQ2pDLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjs7Q0FFbEI7O0NBRUE7O0lBRUc7O0FBRUo7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYiw4QkFBOEI7Q0FDL0I7O0FBRUQ7O0VBRUUsaUNBQWlDO0VBQ2pDLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsNkJBQTZCOztDQUU5Qjs7QUFFRDtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7Q0FFQztFQUNDLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVztFQUNYLG9CQUFvQjtFQUNwQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQiw2QkFBNkI7Q0FDOUI7O0NBRUE7RUFDQyxlQUFlO0NBQ2hCO0NBQ0Esb0RBQW9EO0FBQ3JEO0VBQ0Usa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTBmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDEwMGZyO1xcbn1cXG5cXG4gLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0hlYWRlciAgKi9cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuICAvKiBib3JkZXI6IDJweCBzb2xpZCBzYWxtb247ICovXFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBiYWNrZ3JvdW5kOiByZ2IoNDAsIDQwLCA0MCk7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5oZWFkZXItdGl0bGUge1xcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xcbn1cXG5cXG4gLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1NpZGUgICovXFxuLnNpZGUtY29udGFpbmVyIHtcXG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVueWVsbG93OyAqL1xcbiAgZ3JpZC1yb3c6IDIgLyA0O1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgYmFja2dyb3VuZDogcmdiKDQwLCA0MCwgNDApO1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLnNpZGUtbWVudSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnIgMTBmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAyZnIgMWZyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zaWRlLWJ1dHRvbiB7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbn1cXG5cXG4uc2lkZS1idXR0b246bnRoLWNoaWxkKDEpIHtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuLnNpZGUtYnV0dG9uOm50aC1jaGlsZCgyKSB7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxufVxcblxcbi5zaWRlLWJ1dHRvbjpudGgtY2hpbGQoMykge1xcbiAgZ3JpZC1yb3c6IDQgLyA1O1xcbn1cXG5cXG4vKiAucHJvamVjdC1jb250YWluZXIge1xcbiAgZ3JpZC1yb3c6IDUgLyA2O1xcbiAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn0gKi9cXG4gLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0luYm94ICAqL1xcblxcbiAuY29udGVudCB7XFxuICBncmlkLXJvdzogMSAvIDQ7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBiYWNrZ3JvdW5kOiByZ2IoNzAsIDcwLCA3MCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiB9XFxuXFxuLmluYm94LWNvbnRlbnQsXFxuLnByb2plY3QtY29udGVudCB7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuMWZyIDFmciAxMGZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyIDFmcjtcXG59XFxuXFxuIC8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9JbmJveCBIZWFkZXIgICovXFxuLmluYm94LWhlYWRlci1jb250YWluZXIsXFxuLnByb2plY3QtaGVhZGVyLWNvbnRhaW5lciB7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB3aGl0ZXNtb2tlO1xcbiAgYWxpZ24taXRlbXM6IGVuZDtcXG59XFxuXFxuLmluYm94LXRpdGxlLFxcbi5wcm9qZWN0LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG59XFxuXFxuLm5ldy10b2RvLWRpdixcXG4ubmV3LXByb2plY3QtZGl2IHtcXG4gIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxLjVmciAxMDlweDtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWRpdiB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxLjVmciAxMzBweDtcXG59XFxuXFxuLmluYm94LWFkZCxcXG4ucHJvamVjdC1hZGQge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAwLjI4cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbi5uZXctdG9kbyxcXG4ubmV3LXByb2plY3Qge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDAuNXJlbTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuIC8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9JbmJveCBDYXJkICAqL1xcbiAuY2FyZC1jb250YWluZXIge1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuIH1cXG5cXG4gLmNhcmQtaXRlbSB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQwLCA0MCwgNDAsIDAuNik7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIFxcbiB9XFxuXFxuIC8qIC5jYXJkLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiB9ICovXFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDdmciAxZnI7XFxuIH1cXG5cXG5pbnB1dCxcXG5zZWxlY3Qge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MCwgNDAsIDQwLCAwLjYpO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcblxcbiB9XFxuXFxuaW5wdXQ6bnRoLWNoaWxkKDEpIHtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuaW5wdXQ6bnRoLWNoaWxkKDIpIHtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuaW5wdXQ6bnRoLWNoaWxkKDMpIHtcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG59XFxuXFxuIGJ1dHRvbiB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogNCAvIDU7XFxuICB3aWR0aDogNHJlbTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogcmdiKDEwMCwgMTAwLCAxMDApO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBib3JkZXItcmFkaXVzOiAyMHJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiB9XFxuXFxuIHNlbGVjdCB7XFxuICBncmlkLXJvdzogNCAvIDU7XFxuIH1cXG4gLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0Zvb3RlciAgKi9cXG4uZm9vdGVyLWNvbnRhaW5lciB7XFxuICAvKiBib3JkZXI6IDJweCBzb2xpZCBsaWdodGNvcmFsOyAqL1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgYmFja2dyb3VuZDogcmdiKDQwLCA0MCwgNDApO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciA2ZnIgMWZyO1xcbiAgY29sb3I6IGJlaWdlO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvb3Rlci1hZGQge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLmZvb3Rlci1uZXctcHJqIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGVsZW1lbnRGYWN0b3J5LCBmb3JtRmFjdG9yeSwgaW5wdXRGYWN0b3J5LCBzZWxlY3RGYWN0b3J5LCBidXR0b25GYWN0b3J5IH0gZnJvbSBcIi4vZmFjdG9yeVwiO1xuXG5jb25zdCBjYXJkRmFjdG9yeSA9ICgpID0+IHtcbiAgY29uc3QgY2FyZEl0ZW0gPSBlbGVtZW50RmFjdG9yeSgnY2FyZC1pdGVtJykuZWxlbWVudDtcbiAgY29uc3QgZm9ybSA9IGZvcm1GYWN0b3J5KCkuZWxlbWVudDtcbiAgY29uc3QgdGl0bGUgPSBpbnB1dEZhY3RvcnkoJ3RleHQnLCAnTmV3IFRpdGxlJykuZWxlbWVudDtcbiAgY29uc3QgZGVzY3JpcHQgPSBpbnB1dEZhY3RvcnkoJ3RleHQnLCAnTmV3IERlc2NyaXB0aW9uJykuZWxlbWVudDtcbiAgY29uc3QgZGF0ZSA9IGlucHV0RmFjdG9yeSgndGV4dCcsICdOZXcgRGF0ZScpLmVsZW1lbnQ7XG4gIGNvbnN0IHByaW9yaXR5ID0gc2VsZWN0RmFjdG9yeSgnSGlnaCcsICdOb3JtYWwnLCAnTG93JykuZWxlbWVudDtcbiAgY29uc3QgYWRkID0gYnV0dG9uRmFjdG9yeSgnc3VibWl0JykuZWxlbWVudDtcblxuICBhZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGZvcm0ucGFyZW50Tm9kZS5yZW1vdmUoKTtcbiAgICBjYXJkT3V0cHV0KHRpdGxlLnZhbHVlLFxuICAgICAgZGVzY3JpcHQudmFsdWUsXG4gICAgICBkYXRlLnZhbHVlLFxuICAgICAgcHJpb3JpdHkudmFsdWUpXG4gIH0pO1xuXG4gIGZvcm0uYXBwZW5kKHRpdGxlLCBkZXNjcmlwdCwgZGF0ZSwgcHJpb3JpdHksIGFkZCk7XG4gIGNhcmRJdGVtLmFwcGVuZChmb3JtKTtcblxuICByZXR1cm4geyBjYXJkSXRlbSB9O1xufVxuXG5mdW5jdGlvbiBjYXJkT3V0cHV0ICh0aXRsZSwgZGVzY3JpcHQsIGRhdGUsIHByaW9yaXR5KSB7XG4gIGNvbnN0IGNhcmRDb250YWluZXIgPSBmaW5kRWxlbWVudCgpLmNhcmRDb250YWluZXI7XG4gIGNvbnN0IGNhcmRJdGVtID0gZWxlbWVudEZhY3RvcnkoJ2NhcmQtaXRlbScpLmVsZW1lbnQ7XG4gIGNvbnN0IGNhcmRUaXRsZSA9IGVsZW1lbnRGYWN0b3J5KCdjYXJkLXRpdGxlJykuZWxlbWVudDtcbiAgY29uc3QgY2FyZERlc2NyaXB0ID0gZWxlbWVudEZhY3RvcnkoJ2NhcmQtZGVzY3JpcHQnKS5lbGVtZW50O1xuICBjb25zdCBjYXJkRGF0ZSA9IGVsZW1lbnRGYWN0b3J5KCdjYXJkLWRhdGUnKS5lbGVtZW50O1xuICBjb25zdCBjYXJkUHJpb3JpdHkgPSBlbGVtZW50RmFjdG9yeSgnY2FyZC1wcmlvcml0eScpLmVsZW1lbnQ7XG4gIFxuICBjYXJkSXRlbS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICBjYXJkRGVzY3JpcHQudGV4dENvbnRlbnQgPSBkZXNjcmlwdDtcbiAgY2FyZERhdGUudGV4dENvbnRlbnQgPSBkYXRlO1xuICBjYXJkUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6ICcgKyBwcmlvcml0eTtcblxuICBjYXJkSXRlbS5hcHBlbmQoY2FyZFRpdGxlLCBjYXJkRGVzY3JpcHQsIGNhcmREYXRlLCBjYXJkUHJpb3JpdHkpO1xuICBjYXJkQ29udGFpbmVyLmFwcGVuZChjYXJkSXRlbSlcbn1cblxuZnVuY3Rpb24gZmluZEVsZW1lbnQoKSB7XG4gIGNvbnN0IG5ld0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdG9kby1kaXYnKTtcbiAgY29uc3QgY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWNvbnRhaW5lcicpO1xuICByZXR1cm4geyBuZXdCdXR0b24sIGNhcmRDb250YWluZXIgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUb2RvQ2xpY2soKSB7XG4gIGNvbnN0IHRhcmdldCA9IGZpbmRFbGVtZW50KCkubmV3QnV0dG9uO1xuICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRDYXJkKTtcbn1cblxuZnVuY3Rpb24gYWRkQ2FyZCgpIHtcbiAgY29uc3QgdGFyZ2V0ID0gZmluZEVsZW1lbnQoKS5jYXJkQ29udGFpbmVyO1xuICBjb25zdCBuZXdDYXJkID0gY2FyZEZhY3RvcnkoJ05ldyBUaXRsZScsICdOZXcgRGVzY3JpcHRpb24nLCAnTmV3IERhdGUnLCAnJykuY2FyZEl0ZW07XG4gIHRhcmdldC5hcHBlbmRDaGlsZChuZXdDYXJkKTtcbn1cbmV4cG9ydCB7IGNyZWF0ZVRvZG9DbGljayB9OyIsImNvbnN0IGVsZW1lbnRGYWN0b3J5ID0gKG5hbWUpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQobmFtZSk7XG4gIHJldHVybiB7IGVsZW1lbnQgfTtcbn07XG5cbmNvbnN0IGZvcm1GYWN0b3J5ID0gKCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAvLyBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgYWN0aW9uKTtcbiAgLy8gZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsIG1ldGhvZCk7XG4gIHJldHVybiB7IGVsZW1lbnQgfTtcbn07XG5cbmNvbnN0IGlucHV0RmFjdG9yeSA9ICh0eXBlLCBwbGNob2xkZXIpID0+IHtcbiAgY29uc3QgYnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCB0eXBlKTtcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgcGxjaG9sZGVyKTtcbiAgYnIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIHJldHVybiB7IGVsZW1lbnQgfTtcbn1cblxuY29uc3Qgc2VsZWN0RmFjdG9yeSA9IChvcDEsIG9wMiwgb3AzKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgY29uc3Qgb3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBjb25zdCBvcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGNvbnN0IG9wdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblxuICBvcHRpb24xLnRleHRDb250ZW50ID0gb3AxO1xuICBvcHRpb24yLnRleHRDb250ZW50ID0gb3AyO1xuICBvcHRpb24yLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKTtcbiAgb3B0aW9uMy50ZXh0Q29udGVudCA9IG9wMztcbiAgZWxlbWVudC5hcHBlbmQob3B0aW9uMSwgb3B0aW9uMiwgb3B0aW9uMyk7XG5cbiAgcmV0dXJuIHsgZWxlbWVudCB9XG59XG5cbmNvbnN0IGJ1dHRvbkZhY3RvcnkgPSAodHlwZSkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0eXBlJywgdHlwZSk7XG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSAnQWRkJztcbiAgcmV0dXJuIHsgZWxlbWVudCB9XG59XG5cbmV4cG9ydCB7IGVsZW1lbnRGYWN0b3J5LCBpbnB1dEZhY3RvcnksIGZvcm1GYWN0b3J5LCBzZWxlY3RGYWN0b3J5LCBidXR0b25GYWN0b3J5IH1cblxuIC8vIGNhcmRUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICd0cnVlJyk7XG4gIC8vIGNhcmREZXNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICd0cnVlJyk7XG4gIC8vIGNhcmREYXRlLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ3RydWUnKTtcbiAgLy8gY2FyZFByaW9yaXR5LnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ3RydWUnKTtcbiAgXG5cbiAgLy8gY2FyZFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG4gIC8vIGNhcmREZXNjcmlwdC50ZXh0Q29udGVudCA9IGRlc2NyaXB0O1xuICAvLyBjYXJkUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6ICcgKyBwcmlvcml0eTtcbiAgLy8gY2FyZERhdGUudGV4dENvbnRlbnQgPSBkYXRlOyIsImltcG9ydCB7IGVsZW1lbnRGYWN0b3J5IH0gZnJvbSBcIi4vZmFjdG9yeVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlckRpdiA9IGVsZW1lbnRGYWN0b3J5KCdoZWFkZXItY29udGFpbmVyJykuZWxlbWVudDtcbiAgY29uc3QgY29udGVudCA9IGNyZWF0ZUhlYWRlckNvbnRlbnQoKTtcblxuICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgcmV0dXJuIGhlYWRlckRpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyQ29udGVudCgpIHtcbiAgY29uc3QgaGVhZGVyVGl0bGUgPSBlbGVtZW50RmFjdG9yeSgnaGVhZGVyLXRpdGxlJykuZWxlbWVudDtcblxuICBoZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9ICdUb2RvIExpc3QnO1xuXG4gIHJldHVybiBoZWFkZXJUaXRsZTtcblxufVxuXG5leHBvcnQgeyBjcmVhdGVIZWFkZXIgfTsiLCJpbXBvcnQgeyBlbGVtZW50RmFjdG9yeSB9IGZyb20gJy4vZmFjdG9yeSc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUluYm94Q29udGVudCgpIHtcbiAgY29uc3QgaW5ib3hDb250ZW50ID0gZWxlbWVudEZhY3RvcnkoJ2luYm94LWNvbnRlbnQnKS5lbGVtZW50O1xuICBjb25zdCBoZWFkZXJDb250ZW50ID0gY3JlYXRlSW5ib3hIZWFkZXIoKTtcbiAgY29uc3QgY2FyZENvbnRhaW5lciA9IGVsZW1lbnRGYWN0b3J5KCdjYXJkLWNvbnRhaW5lcicpLmVsZW1lbnQ7XG5cbiAgaW5ib3hDb250ZW50LmFwcGVuZChoZWFkZXJDb250ZW50KTtcbiAgaW5ib3hDb250ZW50LmFwcGVuZChjYXJkQ29udGFpbmVyKTtcblxuICByZXR1cm4gaW5ib3hDb250ZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbmJveEhlYWRlcigpIHtcbiAgY29uc3QgaW5ib3hIZWFkZXJEaXYgPSBlbGVtZW50RmFjdG9yeSgnaW5ib3gtaGVhZGVyLWNvbnRhaW5lcicpLmVsZW1lbnQ7XG4gIGNvbnN0IGluYm94VGl0bGUgPSBlbGVtZW50RmFjdG9yeSgnaW5ib3gtdGl0bGUnKS5lbGVtZW50O1xuICBjb25zdCBuZXdUb2RvRGl2ID0gZWxlbWVudEZhY3RvcnkoJ25ldy10b2RvLWRpdicpLmVsZW1lbnQ7XG4gIGNvbnN0IGluYm94QWRkID0gZWxlbWVudEZhY3RvcnkoJ2luYm94LWFkZCcpLmVsZW1lbnQ7XG4gIGNvbnN0IG5ld1RvZG8gPSBlbGVtZW50RmFjdG9yeSgnbmV3LXRvZG8nKS5lbGVtZW50O1xuXG4gIGluYm94VGl0bGUudGV4dENvbnRlbnQgPSAnSW5ib3gnO1xuICBpbmJveEFkZC50ZXh0Q29udGVudCA9ICcrJztcbiAgbmV3VG9kby50ZXh0Q29udGVudCA9ICdOZXcgVG9kbyc7XG5cbiAgbmV3VG9kb0Rpdi5hcHBlbmQoaW5ib3hBZGQsIG5ld1RvZG8pO1xuICBpbmJveEhlYWRlckRpdi5hcHBlbmQoaW5ib3hUaXRsZSwgbmV3VG9kb0Rpdik7XG5cbiAgcmV0dXJuIGluYm94SGVhZGVyRGl2O1xufVxuXG5leHBvcnQgeyBjcmVhdGVJbmJveENvbnRlbnQgfTsiLCJpbXBvcnQgeyBlbGVtZW50RmFjdG9yeSB9IGZyb20gJy4vZmFjdG9yeSc7XG5pbXBvcnQgeyBjcmVhdGVIZWFkZXIgfSBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgeyBjcmVhdGVTaWRlIH0gZnJvbSAnLi9zaWRlJztcbmltcG9ydCB7IGNyZWF0ZUluYm94Q29udGVudCB9IGZyb20gJy4vaW5ib3gnO1xuXG5mdW5jdGlvbiBjcmVhdGVEaXYoKSB7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBlbGVtZW50RmFjdG9yeSgnY29udGVudCcpLmVsZW1lbnQ7XG4gIHJldHVybiB7IGNvbnRlbnREaXYgfTtcbn1cblxuZnVuY3Rpb24gcGxhY2VUb0NvbnRhaW5lcigpIHtcbiAgY29uc3QgY29udGVudERpdj0gcGxhY2VUb1BhcmVudCgpLmNvbnRlbnREaXY7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVTaWRlKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudERpdik7XG59XG5cbmZ1bmN0aW9uIHBsYWNlVG9QYXJlbnQoKSB7XG5jb25zdCBjb250ZW50RGl2ID0gY3JlYXRlRGl2KCkuY29udGVudERpdjtcblxuY29udGVudERpdi5hcHBlbmRDaGlsZChjcmVhdGVJbmJveENvbnRlbnQoKSk7XG5cbnJldHVybiB7IGNvbnRlbnREaXYgfTtcbn1cblxuZXhwb3J0IHsgcGxhY2VUb0NvbnRhaW5lciB9OyIsImltcG9ydCB7IGVsZW1lbnRGYWN0b3J5IH0gZnJvbSBcIi4vZmFjdG9yeVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0Q29udGVudCgpIHtcbiAgY29uc3QgcHJvamVjdENvbnRlbnQgPSBlbGVtZW50RmFjdG9yeSgncHJvamVjdC1jb250ZW50JykuZWxlbWVudDtcbiAgY29uc3QgaGVhZGVyQ29udGVudCA9IGNyZWF0ZVByb2plY3RIZWFkZXIoKTtcblxuICBwcm9qZWN0Q29udGVudC5hcHBlbmQoaGVhZGVyQ29udGVudCk7XG5cbiAgcmV0dXJuIHByb2plY3RDb250ZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0SGVhZGVyKCkge1xuICBjb25zdCBwcm9qZWN0SGVhZGVyRGl2ID0gZWxlbWVudEZhY3RvcnkoJ3Byb2plY3QtaGVhZGVyLWNvbnRhaW5lcicpLmVsZW1lbnQ7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGVsZW1lbnRGYWN0b3J5KCdwcm9qZWN0LXRpdGxlJykuZWxlbWVudDtcbiAgY29uc3QgbmV3UHJvamVjdERpdiA9IGVsZW1lbnRGYWN0b3J5KCduZXctcHJvamVjdC1kaXYnKS5lbGVtZW50O1xuICBjb25zdCBwcm9qZWN0QWRkID0gZWxlbWVudEZhY3RvcnkoJ3Byb2plY3QtYWRkJykuZWxlbWVudDtcbiAgY29uc3QgbmV3UHJvamVjdCA9IGVsZW1lbnRGYWN0b3J5KCduZXctcHJvamVjdCcpLmVsZW1lbnQ7XG5cbiAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcbiAgcHJvamVjdEFkZC50ZXh0Q29udGVudCA9ICcrJztcbiAgbmV3UHJvamVjdC50ZXh0Q29udGVudCA9ICdOZXcgUHJvamVjdCc7XG5cbiAgbmV3UHJvamVjdERpdi5hcHBlbmQocHJvamVjdEFkZCwgbmV3UHJvamVjdCk7XG4gIHByb2plY3RIZWFkZXJEaXYuYXBwZW5kKHByb2plY3RUaXRsZSwgbmV3UHJvamVjdERpdik7XG5cbiAgcmV0dXJuIHByb2plY3RIZWFkZXJEaXY7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVByb2plY3RDb250ZW50IH07IiwiaW1wb3J0IHsgY3JlYXRlSW5ib3hDb250ZW50IH0gZnJvbSAnLi9pbmJveCc7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0Q29udGVudCB9IGZyb20gJy4vcHJvamVjdHMnO1xuXG5mdW5jdGlvbiBmaW5kRWxlbWVudCgpIHtcbiAgY29uc3QgbWVudUluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGUtYnV0dG9uOm50aC1jaGlsZCgxKScpO1xuICBjb25zdCBtZW51UHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZS1idXR0b246bnRoLWNoaWxkKDIpJyk7XG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRvZG8nKVxuICByZXR1cm4geyBtZW51SW5ib3gsIG1lbnVQcm9qZWN0cywgbWFpbkNvbnRlbnQsIGFkZEJ1dHRvbiB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDbGljaygpIHtcbiAgY29uc3QgaW5ib3ggPSBmaW5kRWxlbWVudCgpLm1lbnVJbmJveDtcbiAgY29uc3QgcHJvamVjdCA9IGZpbmRFbGVtZW50KCkubWVudVByb2plY3RzO1xuICBpbmJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRJbmJveCk7XG4gIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkUHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRJbmJveCgpIHtcbiAgY29uc3QgbG9hZCA9IGZpbmRFbGVtZW50KCkubWFpbkNvbnRlbnQ7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50ID4gKicpLnJlbW92ZSgpO1xuICBsb2FkLmFwcGVuZENoaWxkKGNyZWF0ZUluYm94Q29udGVudCgpKTtcbn1cblxuZnVuY3Rpb24gbG9hZFByb2plY3QoKSB7XG4gIGNvbnN0IGxvYWQgPSBmaW5kRWxlbWVudCgpLm1haW5Db250ZW50O1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCA+IConKS5yZW1vdmUoKTtcbiAgbG9hZC5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0Q29udGVudCgpKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlQ2xpY2sgfSIsImltcG9ydCB7IGVsZW1lbnRGYWN0b3J5IH0gZnJvbSBcIi4vZmFjdG9yeVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVTaWRlKCkge1xuICBjb25zdCBzaWRlRGl2ID0gZWxlbWVudEZhY3RvcnkoJ3NpZGUtY29udGFpbmVyJykuZWxlbWVudDtcbiAgY29uc3QgY29udGVudCA9IGNyZWF0ZVNpZGVDb250ZW50KCkuc2lkZU1lbnU7XG4gIFxuICBzaWRlRGl2LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICBcbiAgcmV0dXJuIHNpZGVEaXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGVDb250ZW50KCkge1xuICBjb25zdCBzaWRlTWVudSA9IGVsZW1lbnRGYWN0b3J5KCdzaWRlLW1lbnUnKS5lbGVtZW50O1xuICAvLyBjb25zdCBzaWRlSG9tZSA9IGVsZW1lbnRGYWN0b3J5KCdzaWRlLWJ1dHRvbicpLmVsZW1lbnQ7XG4gIGNvbnN0IHNpZGVJbmJveCA9IGVsZW1lbnRGYWN0b3J5KCdzaWRlLWJ1dHRvbicpLmVsZW1lbnQ7XG4gIGNvbnN0IHNpZGVQcm9qZWN0ID0gZWxlbWVudEZhY3RvcnkoJ3NpZGUtYnV0dG9uJykuZWxlbWVudDtcbiAgLy8gY29uc3QgcHJvamVjdERpdiA9IGNyZWF0ZVNpZGVQcm9qZWN0KCk7XG4gIFxuICAvLyBzaWRlSG9tZS50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgc2lkZUluYm94LnRleHRDb250ZW50ID0gJ0luYm94JztcbiAgc2lkZVByb2plY3QudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xuXG4gIHNpZGVNZW51LmFwcGVuZCggc2lkZUluYm94LCBzaWRlUHJvamVjdCApO1xuICBcbiAgcmV0dXJuIHsgc2lkZU1lbnUsIHNpZGVJbmJveCwgc2lkZVByb2plY3QgfTtcbn1cblxuLy8gZnVuY3Rpb24gY3JlYXRlU2lkZVByb2plY3QoKSB7XG4vLyAgIGNvbnN0IHByb2plY3REaXYgPSBlbGVtZW50RmFjdG9yeSgncHJvamVjdC1jb250YWluZXInKS5lbGVtZW50O1xuLy8gICBjb25zdCBwcm9qZWN0SXRlbSA9IGVsZW1lbnRGYWN0b3J5KCdwcm9qZWN0LXRpdGxlJykuZWxlbWVudDtcblxuLy8gICBwcm9qZWN0SXRlbS50ZXh0Q29udGVudCA9ICdQcm9qZWN0IE5hbWUnO1xuXG4vLyAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW0pO1xuXG4vLyAgIHJldHVybiBwcm9qZWN0RGl2O1xuLy8gfVxuXG5leHBvcnQgeyBjcmVhdGVTaWRlLCBjcmVhdGVTaWRlQ29udGVudCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBwbGFjZVRvQ29udGFpbmVyIH0gZnJvbSAnLi9sYXlvdXQnO1xuaW1wb3J0IHsgY3JlYXRlQ2xpY2sgfSBmcm9tICcuL3NpZGUtbGlzdGVuZXJzJztcbmltcG9ydCB7IGNyZWF0ZVRvZG9DbGljayB9IGZyb20gJy4vYWRkLWNhcmQnO1xuXG4oZnVuY3Rpb24oKSB7XG4gIHBsYWNlVG9Db250YWluZXIoKTtcbn0pKCk7XG5cbihmdW5jdGlvbigpIHtcbiAgY3JlYXRlQ2xpY2soKTtcbn0pKCk7XG5cbihmdW5jdGlvbigpIHtcbiAgY3JlYXRlVG9kb0NsaWNrKCk7XG59KSgpO1xuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9