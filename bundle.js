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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: sans-serif;\n}\n\n#container {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 1fr 10fr 1fr;\n  grid-template-columns: 300px 100fr;\n}\n\n/* ////////////////////////////////////////Header  */\n.header-container {\n  /* border: 2px solid salmon; */\n  grid-column: 1 / 2;\n  background: rgb(40, 40, 40);\n  font-size: 2rem;\n  color: whitesmoke;\n  display: grid;\n}\n\n.header-title {\n  place-self: center;\n}\n\n/* ////////////////////////////////////////Side  */\n.side-container {\n  /* border: 2px solid greenyellow; */\n  grid-row: 2 / 3;\n  grid-column: 1 / 2;\n  background: rgb(40, 40, 40);\n  display: grid;\n}\n\n.side-menu {\n  display: grid;\n  grid-template-rows: 1fr 1fr 0.5fr 0.1fr 10fr;\n  grid-template-columns: repeat(11, 1fr);\n  justify-content: center;\n}\n\n.side-button {\n  color: whitesmoke;\n  font-size: 1.5rem;\n  grid-column: 2 / 3;\n}\n\n.side-button:nth-child(1) {\n  grid-row: 2 / 3;\n  grid-column: 3 / 10;\n\n}\n\n.side-button:nth-child(2) {\n  grid-row: 3 / 4;\n  grid-column: 3 / 10;\n  display: grid;\n  /* border-bottom: 3px solid whitesmoke; */\n}\n\n.side-button:nth-child(3) {\n  grid-row: 4 / 5;\n}\n\n.side-project-container {\n  grid-row: 5 / 6;\n  grid-column: 4 / 10;\n  color: whitesmoke;\n}\n\n.side-project-title {\n  font-size: 1.2rem;\n  /* text-align: center; */\n}\n/* ////////////////////////////////////////Inbox  */\n\n.content {\n  grid-row: 1 / 4;\n  grid-column: 2 / 3;\n  background: rgb(55, 55, 55);\n  display: grid;\n}\n\n.inbox-content,\n.project-content {\n  color: whitesmoke;\n  display: grid;\n  grid-template-rows: 0.1fr 1fr 10fr;\n  grid-template-columns: 1fr 5fr 1fr;\n}\n\n/* .storage-content {\n  color: whitesmoke;\n  display: grid;\n  grid-template-rows: 0.1fr 1fr 10fr;\n  grid-template-columns: 1fr 5fr 1fr;\n} */\n\n/* ////////////////////////////////////////Inbox Header  */\n.inbox-header-container,\n.project-header-container {\n  grid-row: 2 / 3;\n  grid-column: 2 / 3;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  border-bottom: 5px solid whitesmoke;\n  align-items: end;\n}\n\n.inbox-title,\n.project-title {\n  font-size: 2rem;\n  grid-column: 1 / 2;\n}\n\n.new-todo-div,\n.new-project-div {\n  grid-column: 3 / 4;\n  display: grid;\n  grid-template-columns: 1fr 1.5fr 109px;\n  justify-self: end;\n  align-items: center;\n}\n\n.inbox-add,\n.project-add {\n  font-size: 3rem;\n  grid-column: 2 / 3;\n  position: relative;\n  top: 0.28rem;\n  display: flex;\n  justify-content: flex-end;\n  padding-right: 0.5rem;\n}\n\n.new-todo {\n  font-size: 1.5rem;\n  position: relative;\n  top: 0.5rem;\n  width: fit-content;\n}\n\n.new-project-div select {\n  background: rgba(40, 40, 40, 0);\n  font-size: 1.5rem;\n  color: whitesmoke;\n  position: relative;\n  top: 0.5rem;\n}\n/* ////////////////////////////////////////Inbox Card  */\n.card-container {\n  grid-row: 3 / 4;\n  grid-column: 2 / 3;\n  display: flex;\n  flex-direction: column;\n}\n\n.card-item,\n.card-item-shrink {\n  background: rgba(40, 40, 40);\n  border-radius: 20px;\n  padding: 1rem;\n  margin-top: 1rem;\n  font-size: 1.5rem;\n  line-height: 30px;\n  display: grid;\n  grid-template-columns: minmax(200px, 1fr) minmax(140px, max-content);\n}\n\n.todo-form {\n  display: flex;\n  flex-direction: column;\n}\n\ninput,\n.card-item select {\n  background: rgba(40, 40, 40, 0);\n  color: whitesmoke;\n  font-size: 1.5rem;\n  border: 1px solid transparent;\n\n}\n\n.card-container input:nth-child(1) {\n  grid-row: 1 / 2;\n}\n\n.card-container input:nth-child(2) {\n  grid-row: 2 / 3;\n}\n\n.card-container input:nth-child(3) {\n  grid-row: 3 / 4;\n}\n\n.card-item select {\ngrid-row: 4 / 5;\n}\n\n.card-title {\n  grid-row: 1 / 2;\n}\n\n.card-descript {\n  grid-row: 2 / 3;\n}\n\n.card-date {\n  grid-row: 3 / 4;\n}\n\n.card-priority {\n  grid-row: 4 / 5;\n}\n\n.add-button,\n.edit-button,\n.del-button,\n.expand-button {\n  width: 4rem;\n  height: 1.8rem;\n  justify-self: end;\n  align-self: end;\n  background: rgb(100, 100, 100);\n  color: whitesmoke;\n  border-radius: 20rem;\n  border: 1px solid transparent;\n}\n.expand-button {\n  justify-self: start;\n  grid-row: 1 / 2;\n  grid-column: 2 / 3;\n}\n\n.add-button {\n  grid-column: 2 / 3;\n}\n.shrink-button,\n.edit-button {\n  grid-row: 4 / 5;\n  grid-column: 2 / 3;\n\n}\n\n.del-button {\n  grid-row: 1 / 2;\n  grid-column: 2 / 3;\n  width: 2rem;\n  justify-self: end;\n}\n\n.shrink-button {\n  width: 4rem;\n  height: 1.8rem;\n  justify-self: start;\n  align-self: end;\n  background: rgb(100, 100, 100);\n  color: whitesmoke;\n  border-radius: 20rem;\n  border: 1px solid transparent;\n}\n/* ////////////////////////////////////////Footer  */\n.footer-container {\n  /* border: 2px solid lightcoral; */\n  grid-column: 1 / 2;\n  background: rgb(40, 40, 40);\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  color: beige;\n  place-items: center;\n}\n\n.footer-add {\n  grid-column: 3 / 4;\n  font-size: 3rem;\n  padding-bottom: 0.5rem;\n}\n\n.footer-container > input {\n  grid-column: 5 / 6;\n  font-size: 1.5rem;\n  width: 14rem;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: sans-serif;\n}\n\n#container {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 1fr 10fr 1fr;\n  grid-template-columns: 300px 100fr;\n}\n\n/* ////////////////////////////////////////Header  */\n.header-container {\n  /* border: 2px solid salmon; */\n  grid-column: 1 / 2;\n  background: rgb(40, 40, 40);\n  font-size: 2rem;\n  color: whitesmoke;\n  display: grid;\n}\n\n.header-title {\n  place-self: center;\n}\n\n/* ////////////////////////////////////////Side  */\n.side-container {\n  /* border: 2px solid greenyellow; */\n  grid-row: 2 / 3;\n  grid-column: 1 / 2;\n  background: rgb(40, 40, 40);\n  display: grid;\n}\n\n.side-menu {\n  display: grid;\n  grid-template-rows: 1fr 1fr 0.5fr 0.1fr 10fr;\n  grid-template-columns: repeat(11, 1fr);\n  justify-content: center;\n}\n\n.side-button {\n  color: whitesmoke;\n  font-size: 1.5rem;\n  grid-column: 2 / 3;\n}\n\n.side-button:nth-child(1) {\n  grid-row: 2 / 3;\n  grid-column: 3 / 10;\n\n}\n\n.side-button:nth-child(2) {\n  grid-row: 3 / 4;\n  grid-column: 3 / 10;\n  display: grid;\n  /* border-bottom: 3px solid whitesmoke; */\n}\n\n.side-button:nth-child(3) {\n  grid-row: 4 / 5;\n}\n\n.side-project-container {\n  grid-row: 5 / 6;\n  grid-column: 4 / 10;\n  color: whitesmoke;\n}\n\n.side-project-title {\n  font-size: 1.2rem;\n  /* text-align: center; */\n}\n/* ////////////////////////////////////////Inbox  */\n\n.content {\n  grid-row: 1 / 4;\n  grid-column: 2 / 3;\n  background: rgb(55, 55, 55);\n  display: grid;\n}\n\n.inbox-content,\n.project-content {\n  color: whitesmoke;\n  display: grid;\n  grid-template-rows: 0.1fr 1fr 10fr;\n  grid-template-columns: 1fr 5fr 1fr;\n}\n\n/* .storage-content {\n  color: whitesmoke;\n  display: grid;\n  grid-template-rows: 0.1fr 1fr 10fr;\n  grid-template-columns: 1fr 5fr 1fr;\n} */\n\n/* ////////////////////////////////////////Inbox Header  */\n.inbox-header-container,\n.project-header-container {\n  grid-row: 2 / 3;\n  grid-column: 2 / 3;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  border-bottom: 5px solid whitesmoke;\n  align-items: end;\n}\n\n.inbox-title,\n.project-title {\n  font-size: 2rem;\n  grid-column: 1 / 2;\n}\n\n.new-todo-div,\n.new-project-div {\n  grid-column: 3 / 4;\n  display: grid;\n  grid-template-columns: 1fr 1.5fr 109px;\n  justify-self: end;\n  align-items: center;\n}\n\n.inbox-add,\n.project-add {\n  font-size: 3rem;\n  grid-column: 2 / 3;\n  position: relative;\n  top: 0.28rem;\n  display: flex;\n  justify-content: flex-end;\n  padding-right: 0.5rem;\n}\n\n.new-todo {\n  font-size: 1.5rem;\n  position: relative;\n  top: 0.5rem;\n  width: fit-content;\n}\n\n.new-project-div select {\n  background: rgba(40, 40, 40, 0);\n  font-size: 1.5rem;\n  color: whitesmoke;\n  position: relative;\n  top: 0.5rem;\n}\n/* ////////////////////////////////////////Inbox Card  */\n.card-container {\n  grid-row: 3 / 4;\n  grid-column: 2 / 3;\n  display: flex;\n  flex-direction: column;\n}\n\n.card-item,\n.card-item-shrink {\n  background: rgba(40, 40, 40);\n  border-radius: 20px;\n  padding: 1rem;\n  margin-top: 1rem;\n  font-size: 1.5rem;\n  line-height: 30px;\n  display: grid;\n  grid-template-columns: minmax(200px, 1fr) minmax(140px, max-content);\n}\n\n.todo-form {\n  display: flex;\n  flex-direction: column;\n}\n\ninput,\n.card-item select {\n  background: rgba(40, 40, 40, 0);\n  color: whitesmoke;\n  font-size: 1.5rem;\n  border: 1px solid transparent;\n\n}\n\n.card-container input:nth-child(1) {\n  grid-row: 1 / 2;\n}\n\n.card-container input:nth-child(2) {\n  grid-row: 2 / 3;\n}\n\n.card-container input:nth-child(3) {\n  grid-row: 3 / 4;\n}\n\n.card-item select {\ngrid-row: 4 / 5;\n}\n\n.card-title {\n  grid-row: 1 / 2;\n}\n\n.card-descript {\n  grid-row: 2 / 3;\n}\n\n.card-date {\n  grid-row: 3 / 4;\n}\n\n.card-priority {\n  grid-row: 4 / 5;\n}\n\n.add-button,\n.edit-button,\n.del-button,\n.expand-button {\n  width: 4rem;\n  height: 1.8rem;\n  justify-self: end;\n  align-self: end;\n  background: rgb(100, 100, 100);\n  color: whitesmoke;\n  border-radius: 20rem;\n  border: 1px solid transparent;\n}\n.expand-button {\n  justify-self: start;\n  grid-row: 1 / 2;\n  grid-column: 2 / 3;\n}\n\n.add-button {\n  grid-column: 2 / 3;\n}\n.shrink-button,\n.edit-button {\n  grid-row: 4 / 5;\n  grid-column: 2 / 3;\n\n}\n\n.del-button {\n  grid-row: 1 / 2;\n  grid-column: 2 / 3;\n  width: 2rem;\n  justify-self: end;\n}\n\n.shrink-button {\n  width: 4rem;\n  height: 1.8rem;\n  justify-self: start;\n  align-self: end;\n  background: rgb(100, 100, 100);\n  color: whitesmoke;\n  border-radius: 20rem;\n  border: 1px solid transparent;\n}\n/* ////////////////////////////////////////Footer  */\n.footer-container {\n  /* border: 2px solid lightcoral; */\n  grid-column: 1 / 2;\n  background: rgb(40, 40, 40);\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  color: beige;\n  place-items: center;\n}\n\n.footer-add {\n  grid-column: 3 / 4;\n  font-size: 3rem;\n  padding-bottom: 0.5rem;\n}\n\n.footer-container > input {\n  grid-column: 5 / 6;\n  font-size: 1.5rem;\n  width: 14rem;\n}"],"sourceRoot":""}]);
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


function addButtonListener(add, item, title, descript, date, priority) {
  add.addEventListener('click', function() {
    cardShrink(
      item,
      title.value,
      descript.value,
      date.value,
      priority,
    )
    item.remove();
  });
}

function expandButtonListener(expand, item, title, descript, date, priority) {
  expand.addEventListener('click', function() {
    cardOutput( 
      item,
      title,
      descript,
      date,
      priority,
    )
    item.remove();
  });
}

function editButtonListener(edit, item, title, descript, date, priority) {
  const target = findElement().cardContainer;
  const editCard = cardFactory('', '', '', 'Save', title, descript, date, priority).cardItem;

  edit.addEventListener('click', function() {
    target.insertBefore(editCard, item);
    item.remove();
  });
}

function delButtonListener(del, item) {
  del.addEventListener('click', function() {
    item.remove();
  });
}

function shrinkButtonListener(shrink, item, title, descript, date, priority) {
  shrink.addEventListener('click', function() {
    cardShrink(
      item,
      title,
      descript,
      date,
      priority,
    )
    item.remove();
});
}

const cardFactory = (title, descript, date, button, editTitle, editDes, editDate, editPri) => {
  const cardItem = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('card-item').element;
  const form = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.formFactory)('todo-form').element;
  const cardTitle = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.inputFactory)('text', title, editTitle).element;
  const cardDescript = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.inputFactory)('text', descript, editDes).element;
  const cardDate = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.inputFactory)('date', date, editDate).element;
  const cardPriority = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.selectFactory)('Priority', 'High', 'Normal', 'Low', editPri).element;
  const add = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.buttonFactory)('button', 'add-button', button).element;

  addButtonListener(add, cardItem, cardTitle, cardDescript, cardDate, cardPriority );
  
  if (editPri !== undefined) {
    let selected = editPri.selectedIndex;
    cardPriority.options[selected].setAttribute('selected', 'selected');
  }

  form.append(cardTitle, cardDescript, cardDate, cardPriority);
  cardItem.append(form, add);

  return { cardItem, cardTitle, cardDescript, cardDate, cardPriority };
}

function cardShrink(item, title, descript, date, priority) {
  const cardContainer = findElement().cardContainer;
  const cardItem = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('card-item-shrink').element;
  const cardTitle = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('card-title-shrink').element;
  const expand = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.buttonFactory)('button', 'expand-button', 'Expand').element;
  const del = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.buttonFactory)('button', 'del-button', 'X').element;

  cardTitle.textContent = title;

  cardItem.append(cardTitle, expand, del)
  cardContainer.insertBefore(cardItem, item)

  expandButtonListener(expand, cardItem, title, descript, date, priority);
  delButtonListener(del, cardItem);
}

function cardOutput (item, title, descript, date, priority) {
  const cardContainer = findElement().cardContainer;
  const cardItem = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('card-item').element;
  const cardTitle = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('card-title').element;
  const cardDescript = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('card-descript').element;
  const cardDate = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('card-date').element;
  const cardPriority = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('card-priority').element;
  const edit = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.buttonFactory)('button', 'edit-button','Edit').element;
  const del = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.buttonFactory)('button', 'del-button', 'X').element;
  const shrink = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.buttonFactory)('button', 'shrink-button', 'Shrink').element;

  cardTitle.textContent = title;
  cardDescript.textContent = descript;
  cardDate.textContent = date;
  cardPriority.textContent = 'Priority: ' + priority.value;

  cardItem.append(cardTitle, cardDescript, cardDate, cardPriority, shrink, edit, del);
  cardContainer.insertBefore(cardItem, item)

  editButtonListener(edit, cardItem, title, descript, date, priority);
  delButtonListener(del, cardItem);
  shrinkButtonListener(shrink, cardItem, title, descript, date, priority);
}

function findElement() {
  const newButton = document.querySelector('.new-todo-div');
  const cardContainer = document.querySelector('.card-container');

  return { newButton, cardContainer }

}

function createTodoClick() {
  const target = findElement().newButton;
  if (target !== null) {
    target.addEventListener('click', addCard);
  }
}

function addCard() {
  const target = findElement().cardContainer;
  const newCard = cardFactory('New Title', 'New Description', 'New Date', 'Add').cardItem;
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
/* harmony export */   "addPrjFactory": () => (/* binding */ addPrjFactory),
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

const formFactory = (cls) => {
  const element = document.createElement('form');
  element.classList.add(cls);
  // element.setAttribute('action', action);
  // element.setAttribute('method', method);
  return { element };
};

const inputFactory = (type, plcholder, value = '') => {
  const element = document.createElement('input');
  element.setAttribute('type', type);
  element.setAttribute('placeholder', plcholder);
  element.value = value;
  return { element };
}

const selectFactory = (label, op1, op2, op3) => {
  const element = document.createElement('select');
  const group = document.createElement('optgroup');
  const option1 = document.createElement('option');
  const option2 = document.createElement('option');
  const option3 = document.createElement('option');

  group.setAttribute('label', label);
  option1.textContent = op1;
  option2.textContent = op2;
  // option2.setAttribute('selected', 'selected');
  option3.textContent = op3;
  group.append(option1, option2, option3);
  element.append(group);

  return { element }
}

const buttonFactory = (type, cls, text) => {
  const element = document.createElement('button');
  element.setAttribute('type', type);
  element.textContent = text;
  element.classList.add(cls);
  return { element }
}

const addPrjFactory = (label, ...ops) => {
  const element = document.createElement('select');
  const group = document.createElement('optgroup');

  group.setAttribute('label', label);

  for (let i = 0; i < ops[0].length; i++) {
    let div = document.createElement('option');
    div.textContent = ops[0][i];
    group.append(div);
  }
  
  element.append(group);

  return { element };
}



/***/ }),

/***/ "./src/footer-listeners.js":
/*!*********************************!*\
  !*** ./src/footer-listeners.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFooterClick": () => (/* binding */ createFooterClick)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./src/factory.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/storage.js");




function findElement() {
  const footerAdd = document.querySelector('.footer-add');
  const projectName = document.querySelector('.footer-container > input');
  const projectDiv = document.querySelector('.side-project-container');
  const mainContent = document.querySelector('.content');
  const projectContent = document.querySelector('.project-content');
  const wipeContent = document.querySelector('.content > *');
  const wipeSelect = document.querySelector('.new-project-div select');
  const inboxContent = document.querySelector('.inbox-content');
  return { footerAdd, projectName, projectDiv, mainContent, 
    projectContent, wipeContent, wipeSelect, inboxContent }
}

function createFooterClick() {
  const add = findElement().footerAdd;

  add.addEventListener('click', function() {
    let projectName = findElement().projectName;
    createSideProject(projectName.value);
    projectName.value = '';
  });
}

function createSideProject(project) {
  const projectItem = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('side-project-title').element;
  const projectDiv = findElement().projectDiv;

  projectItem.textContent = project;

  projectItem.addEventListener('click', function() {
    loadProject(project, projectItem);
    (0,_projects__WEBPACK_IMPORTED_MODULE_1__.addProjectCard)()
  }, { once: true });
  
  projectDiv.appendChild(projectItem);

  (0,_storage__WEBPACK_IMPORTED_MODULE_2__.findKeys)();
}

function loadProject(project, sideDiv) {
  const load = findElement().mainContent;

  findElement().wipeContent.remove();
  const projectContent = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.createProjectContent)(project)
  ;(0,_storage__WEBPACK_IMPORTED_MODULE_2__.putStorage)(project, projectContent);
  load.appendChild(projectContent);
  
  (0,_projects__WEBPACK_IMPORTED_MODULE_1__.addToProject)();

  sideDiv.addEventListener('click', function() {
    (0,_storage__WEBPACK_IMPORTED_MODULE_2__.findKeys)();
    reloadProject(project)
  });
}

function reloadProject(project) {
  const load = findElement().mainContent;
  findElement().wipeContent.remove();
  load.appendChild((0,_storage__WEBPACK_IMPORTED_MODULE_2__.showStorage)().storage[project]);
  findElement().wipeSelect.remove();

  (0,_projects__WEBPACK_IMPORTED_MODULE_1__.addToProject)();
}



/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFooter": () => (/* binding */ createFooter),
/* harmony export */   "createFooterContent": () => (/* binding */ createFooterContent)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./src/factory.js");


function createFooter() {
  const footerDiv = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('footer-container').element;
  const content = createFooterContent();

  footerDiv.append(content.footerAdd, content.footerNewPrj);

  return footerDiv;
}

function createFooterContent() {
  const footerAdd = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('footer-add').element;
  const footerNewPrj = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.inputFactory)('text', 'New Project').element;

  footerAdd.textContent = '+';

  return { footerAdd, footerNewPrj };
}



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

  inboxContent.append(headerContent, cardContainer);

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
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _side__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./side */ "./src/side.js");
/* harmony import */ var _inbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inbox */ "./src/inbox.js");






function createDiv() {
  const contentDiv = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('content').element;

  return contentDiv;
}

function placeToContainer() {
  const contentDiv = placeToParent().contentDiv;
  container.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_1__.createHeader)());
  container.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_2__.createFooter)());
  container.appendChild((0,_side__WEBPACK_IMPORTED_MODULE_3__.createSide)());
  container.appendChild(contentDiv);
}

function placeToParent() {
  const contentDiv = createDiv();
  
  contentDiv.appendChild((0,_inbox__WEBPACK_IMPORTED_MODULE_4__.createInboxContent)());

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
/* harmony export */   "addProjectCard": () => (/* binding */ addProjectCard),
/* harmony export */   "addToProject": () => (/* binding */ addToProject),
/* harmony export */   "createProjectContent": () => (/* binding */ createProjectContent)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./src/factory.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/storage.js");



function createProjectContent(project) {
  const projectContent = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('project-content').element;
  const headerContent = createProjectHeader(project);
  const cardContainer = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('card-container').element;

  projectContent.append(headerContent, cardContainer);

  return projectContent;
}

function createProjectHeader(project) {
  const projectHeaderDiv = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('project-header-container').element;
  const projectTitle = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('project-title').element;
  const newProjectDiv = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('new-project-div').element;
  const projectAdd = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('project-add').element;

  projectTitle.textContent = project;
  projectAdd.textContent = '+';

  newProjectDiv.append(projectAdd);

  projectHeaderDiv.append(projectTitle, newProjectDiv);

  return projectHeaderDiv;
}

function addToProject() {
  const addList = (0,_storage__WEBPACK_IMPORTED_MODULE_1__.showKeys)();
  const list = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.addPrjFactory)('Add to project', addList).element;
  const div = document.querySelector('.new-project-div');
  div.append(list);
}

function addProjectCard() {
  const add = document.querySelector('.project-add');
  const content = document.querySelector('.card-container');
  const storage = (0,_storage__WEBPACK_IMPORTED_MODULE_1__.showStorage)().storage;
  const children = storage['inbox'].children[1].children
  
  add.addEventListener('click', function() {
    const selected = document.querySelector('.new-project-div select').selectedIndex;
    if (children.length != 0) {
      content.append(children[selected]);
    } else { return };
    document.querySelector('.new-project-div select').remove();
    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.findKeys)();
    addToProject()
  });
}



/***/ }),

/***/ "./src/side-listeners.js":
/*!*******************************!*\
  !*** ./src/side-listeners.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSideClick": () => (/* binding */ createSideClick)
/* harmony export */ });
/* harmony import */ var _add_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-card */ "./src/add-card.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/storage.js");



function findElement() {
  const menuInbox = document.querySelector('.side-button:nth-child(1)');
  const mainContent = document.querySelector('.content');
  const inboxContent = document.querySelector('.inbox-content');
  const wipeContent = document.querySelector('.content > *');

  return { menuInbox, mainContent, inboxContent, wipeContent };
}

function createSideClick() {
  const inbox = findElement().menuInbox;
  (0,_storage__WEBPACK_IMPORTED_MODULE_1__.putStorage)('inbox', findElement().inboxContent);
  inbox.addEventListener('click', loadInbox);
}

function loadInbox() {
  const load = findElement().mainContent;
  findElement().wipeContent.remove();
  load.appendChild((0,_storage__WEBPACK_IMPORTED_MODULE_1__.showStorage)().storage['inbox']);
  (0,_add_card__WEBPACK_IMPORTED_MODULE_0__.createTodoClick)();
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
  const sideInbox = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('side-button').element;
  const sideProject = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('side-button').element;
  const projectDiv = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('side-project-container').element;
  sideInbox.textContent = 'Inbox';

  sideProject.textContent = 'Projects';

  sideMenu.append(sideInbox, sideProject, projectDiv);
  
  return { sideMenu, sideInbox, sideProject };
}





/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findKeys": () => (/* binding */ findKeys),
/* harmony export */   "putStorage": () => (/* binding */ putStorage),
/* harmony export */   "showKeys": () => (/* binding */ showKeys),
/* harmony export */   "showStorage": () => (/* binding */ showStorage)
/* harmony export */ });
let storage = {};

let projectList = {};

let projectKeys = [];

function putStorage(fileName, divName) {
  storage[fileName] = divName;
}

const showStorage = () => {
  console.log(storage);
  console.log(projectKeys);
  console.log(projectList);
  console.log(storage['inbox'].children[1].children);
  return { storage };
};

function findKeys() {
  projectList = {};
  const itemList = storage['inbox'].children[1].children;
  for (let i = 0; i < itemList.length; i++) {
    let project = itemList[i].children[0].textContent;
    projectList[project] = itemList[i];
  }
  projectKeys = [];
  const keys = Object.keys(projectList);
  for (let item of keys) {
    projectKeys.push(item);
  }
}

function showKeys() {
  return projectKeys;
}



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
/* harmony import */ var _footer_listeners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer-listeners */ "./src/footer-listeners.js");






(function() {
  (0,_layout__WEBPACK_IMPORTED_MODULE_1__.placeToContainer)();
})();

(function() {
  (0,_side_listeners__WEBPACK_IMPORTED_MODULE_2__.createSideClick)();
})();

(function() {
  (0,_add_card__WEBPACK_IMPORTED_MODULE_3__.createTodoClick)();
})();

(function() {
  (0,_footer_listeners__WEBPACK_IMPORTED_MODULE_4__.createFooterClick)();
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLFNBQVMsTUFBTSxZQUFZLE9BQU8sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxRQUFRLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLFVBQVUsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sWUFB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QUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFCQUFxQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztVQ2xDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUN1QjtBQUNPO0FBQ047QUFDVTs7QUFFdkQ7QUFDQSxFQUFFLHlEQUFnQjtBQUNsQixDQUFDOztBQUVEO0FBQ0EsRUFBRSxnRUFBZTtBQUNqQixDQUFDOztBQUVEO0FBQ0EsRUFBRSwwREFBZTtBQUNqQixDQUFDOztBQUVEO0FBQ0EsRUFBRSxvRUFBaUI7QUFDbkIsQ0FBQyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hZGQtY2FyZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZm9vdGVyLWxpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luYm94LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zaWRlLWxpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2lkZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMGZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMTAwZnI7XFxufVxcblxcbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9IZWFkZXIgICovXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgLyogYm9yZGVyOiAycHggc29saWQgc2FsbW9uOyAqL1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgYmFja2dyb3VuZDogcmdiKDQwLCA0MCwgNDApO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uaGVhZGVyLXRpdGxlIHtcXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1NpZGUgICovXFxuLnNpZGUtY29udGFpbmVyIHtcXG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVueWVsbG93OyAqL1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgYmFja2dyb3VuZDogcmdiKDQwLCA0MCwgNDApO1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLnNpZGUtbWVudSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDAuNWZyIDAuMWZyIDEwZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMWZyKTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc2lkZS1idXR0b24ge1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG59XFxuXFxuLnNpZGUtYnV0dG9uOm50aC1jaGlsZCgxKSB7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBncmlkLWNvbHVtbjogMyAvIDEwO1xcblxcbn1cXG5cXG4uc2lkZS1idXR0b246bnRoLWNoaWxkKDIpIHtcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG4gIGdyaWQtY29sdW1uOiAzIC8gMTA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgLyogYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHdoaXRlc21va2U7ICovXFxufVxcblxcbi5zaWRlLWJ1dHRvbjpudGgtY2hpbGQoMykge1xcbiAgZ3JpZC1yb3c6IDQgLyA1O1xcbn1cXG5cXG4uc2lkZS1wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBncmlkLXJvdzogNSAvIDY7XFxuICBncmlkLWNvbHVtbjogNCAvIDEwO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbi5zaWRlLXByb2plY3QtdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXFxufVxcbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9JbmJveCAgKi9cXG5cXG4uY29udGVudCB7XFxuICBncmlkLXJvdzogMSAvIDQ7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBiYWNrZ3JvdW5kOiByZ2IoNTUsIDU1LCA1NSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uaW5ib3gtY29udGVudCxcXG4ucHJvamVjdC1jb250ZW50IHtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC4xZnIgMWZyIDEwZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnIgMWZyO1xcbn1cXG5cXG4vKiAuc3RvcmFnZS1jb250ZW50IHtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC4xZnIgMWZyIDEwZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnIgMWZyO1xcbn0gKi9cXG5cXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vSW5ib3ggSGVhZGVyICAqL1xcbi5pbmJveC1oZWFkZXItY29udGFpbmVyLFxcbi5wcm9qZWN0LWhlYWRlci1jb250YWluZXIge1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgd2hpdGVzbW9rZTtcXG4gIGFsaWduLWl0ZW1zOiBlbmQ7XFxufVxcblxcbi5pbmJveC10aXRsZSxcXG4ucHJvamVjdC10aXRsZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxufVxcblxcbi5uZXctdG9kby1kaXYsXFxuLm5ldy1wcm9qZWN0LWRpdiB7XFxuICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS41ZnIgMTA5cHg7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbmJveC1hZGQsXFxuLnByb2plY3QtYWRkIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMC4yOHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbn1cXG5cXG4ubmV3LXRvZG8ge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDAuNXJlbTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWRpdiBzZWxlY3Qge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MCwgNDAsIDQwLCAwKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDAuNXJlbTtcXG59XFxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0luYm94IENhcmQgICovXFxuLmNhcmQtY29udGFpbmVyIHtcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY2FyZC1pdGVtLFxcbi5jYXJkLWl0ZW0tc2hyaW5rIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDAsIDQwLCA0MCk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDIwMHB4LCAxZnIpIG1pbm1heCgxNDBweCwgbWF4LWNvbnRlbnQpO1xcbn1cXG5cXG4udG9kby1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5pbnB1dCxcXG4uY2FyZC1pdGVtIHNlbGVjdCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQwLCA0MCwgNDAsIDApO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcblxcbn1cXG5cXG4uY2FyZC1jb250YWluZXIgaW5wdXQ6bnRoLWNoaWxkKDEpIHtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLmNhcmQtY29udGFpbmVyIGlucHV0Om50aC1jaGlsZCgyKSB7XFxuICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbi5jYXJkLWNvbnRhaW5lciBpbnB1dDpudGgtY2hpbGQoMykge1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cXG4uY2FyZC1pdGVtIHNlbGVjdCB7XFxuZ3JpZC1yb3c6IDQgLyA1O1xcbn1cXG5cXG4uY2FyZC10aXRsZSB7XFxuICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi5jYXJkLWRlc2NyaXB0IHtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuLmNhcmQtZGF0ZSB7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxufVxcblxcbi5jYXJkLXByaW9yaXR5IHtcXG4gIGdyaWQtcm93OiA0IC8gNTtcXG59XFxuXFxuLmFkZC1idXR0b24sXFxuLmVkaXQtYnV0dG9uLFxcbi5kZWwtYnV0dG9uLFxcbi5leHBhbmQtYnV0dG9uIHtcXG4gIHdpZHRoOiA0cmVtO1xcbiAgaGVpZ2h0OiAxLjhyZW07XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGJhY2tncm91bmQ6IHJnYigxMDAsIDEwMCwgMTAwKTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyLXJhZGl1czogMjByZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuLmV4cGFuZC1idXR0b24ge1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG59XFxuXFxuLmFkZC1idXR0b24ge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbn1cXG4uc2hyaW5rLWJ1dHRvbixcXG4uZWRpdC1idXR0b24ge1xcbiAgZ3JpZC1yb3c6IDQgLyA1O1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcblxcbn1cXG5cXG4uZGVsLWJ1dHRvbiB7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICB3aWR0aDogMnJlbTtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4uc2hyaW5rLWJ1dHRvbiB7XFxuICB3aWR0aDogNHJlbTtcXG4gIGhlaWdodDogMS44cmVtO1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGJhY2tncm91bmQ6IHJnYigxMDAsIDEwMCwgMTAwKTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyLXJhZGl1czogMjByZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0Zvb3RlciAgKi9cXG4uZm9vdGVyLWNvbnRhaW5lciB7XFxuICAvKiBib3JkZXI6IDJweCBzb2xpZCBsaWdodGNvcmFsOyAqL1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgYmFja2dyb3VuZDogcmdiKDQwLCA0MCwgNDApO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XFxuICBjb2xvcjogYmVpZ2U7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyLWFkZCB7XFxuICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4uZm9vdGVyLWNvbnRhaW5lciA+IGlucHV0IHtcXG4gIGdyaWQtY29sdW1uOiA1IC8gNjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgd2lkdGg6IDE0cmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFB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QUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7O0VBRUUsZUFBZTtFQUNmLGtCQUFrQjs7QUFFcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsNkJBQTZCO0FBQy9CO0FBQ0Esb0RBQW9EO0FBQ3BEO0VBQ0Usa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMGZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMTAwZnI7XFxufVxcblxcbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9IZWFkZXIgICovXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgLyogYm9yZGVyOiAycHggc29saWQgc2FsbW9uOyAqL1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgYmFja2dyb3VuZDogcmdiKDQwLCA0MCwgNDApO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uaGVhZGVyLXRpdGxlIHtcXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1NpZGUgICovXFxuLnNpZGUtY29udGFpbmVyIHtcXG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVueWVsbG93OyAqL1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgYmFja2dyb3VuZDogcmdiKDQwLCA0MCwgNDApO1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLnNpZGUtbWVudSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDAuNWZyIDAuMWZyIDEwZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMWZyKTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc2lkZS1idXR0b24ge1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG59XFxuXFxuLnNpZGUtYnV0dG9uOm50aC1jaGlsZCgxKSB7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBncmlkLWNvbHVtbjogMyAvIDEwO1xcblxcbn1cXG5cXG4uc2lkZS1idXR0b246bnRoLWNoaWxkKDIpIHtcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG4gIGdyaWQtY29sdW1uOiAzIC8gMTA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgLyogYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHdoaXRlc21va2U7ICovXFxufVxcblxcbi5zaWRlLWJ1dHRvbjpudGgtY2hpbGQoMykge1xcbiAgZ3JpZC1yb3c6IDQgLyA1O1xcbn1cXG5cXG4uc2lkZS1wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBncmlkLXJvdzogNSAvIDY7XFxuICBncmlkLWNvbHVtbjogNCAvIDEwO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbi5zaWRlLXByb2plY3QtdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXFxufVxcbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9JbmJveCAgKi9cXG5cXG4uY29udGVudCB7XFxuICBncmlkLXJvdzogMSAvIDQ7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBiYWNrZ3JvdW5kOiByZ2IoNTUsIDU1LCA1NSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uaW5ib3gtY29udGVudCxcXG4ucHJvamVjdC1jb250ZW50IHtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC4xZnIgMWZyIDEwZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnIgMWZyO1xcbn1cXG5cXG4vKiAuc3RvcmFnZS1jb250ZW50IHtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC4xZnIgMWZyIDEwZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnIgMWZyO1xcbn0gKi9cXG5cXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vSW5ib3ggSGVhZGVyICAqL1xcbi5pbmJveC1oZWFkZXItY29udGFpbmVyLFxcbi5wcm9qZWN0LWhlYWRlci1jb250YWluZXIge1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgd2hpdGVzbW9rZTtcXG4gIGFsaWduLWl0ZW1zOiBlbmQ7XFxufVxcblxcbi5pbmJveC10aXRsZSxcXG4ucHJvamVjdC10aXRsZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxufVxcblxcbi5uZXctdG9kby1kaXYsXFxuLm5ldy1wcm9qZWN0LWRpdiB7XFxuICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS41ZnIgMTA5cHg7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbmJveC1hZGQsXFxuLnByb2plY3QtYWRkIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMC4yOHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbn1cXG5cXG4ubmV3LXRvZG8ge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDAuNXJlbTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWRpdiBzZWxlY3Qge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MCwgNDAsIDQwLCAwKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDAuNXJlbTtcXG59XFxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0luYm94IENhcmQgICovXFxuLmNhcmQtY29udGFpbmVyIHtcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY2FyZC1pdGVtLFxcbi5jYXJkLWl0ZW0tc2hyaW5rIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDAsIDQwLCA0MCk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDIwMHB4LCAxZnIpIG1pbm1heCgxNDBweCwgbWF4LWNvbnRlbnQpO1xcbn1cXG5cXG4udG9kby1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5pbnB1dCxcXG4uY2FyZC1pdGVtIHNlbGVjdCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQwLCA0MCwgNDAsIDApO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcblxcbn1cXG5cXG4uY2FyZC1jb250YWluZXIgaW5wdXQ6bnRoLWNoaWxkKDEpIHtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLmNhcmQtY29udGFpbmVyIGlucHV0Om50aC1jaGlsZCgyKSB7XFxuICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbi5jYXJkLWNvbnRhaW5lciBpbnB1dDpudGgtY2hpbGQoMykge1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cXG4uY2FyZC1pdGVtIHNlbGVjdCB7XFxuZ3JpZC1yb3c6IDQgLyA1O1xcbn1cXG5cXG4uY2FyZC10aXRsZSB7XFxuICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi5jYXJkLWRlc2NyaXB0IHtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuLmNhcmQtZGF0ZSB7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxufVxcblxcbi5jYXJkLXByaW9yaXR5IHtcXG4gIGdyaWQtcm93OiA0IC8gNTtcXG59XFxuXFxuLmFkZC1idXR0b24sXFxuLmVkaXQtYnV0dG9uLFxcbi5kZWwtYnV0dG9uLFxcbi5leHBhbmQtYnV0dG9uIHtcXG4gIHdpZHRoOiA0cmVtO1xcbiAgaGVpZ2h0OiAxLjhyZW07XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGJhY2tncm91bmQ6IHJnYigxMDAsIDEwMCwgMTAwKTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyLXJhZGl1czogMjByZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuLmV4cGFuZC1idXR0b24ge1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG59XFxuXFxuLmFkZC1idXR0b24ge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbn1cXG4uc2hyaW5rLWJ1dHRvbixcXG4uZWRpdC1idXR0b24ge1xcbiAgZ3JpZC1yb3c6IDQgLyA1O1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcblxcbn1cXG5cXG4uZGVsLWJ1dHRvbiB7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICB3aWR0aDogMnJlbTtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4uc2hyaW5rLWJ1dHRvbiB7XFxuICB3aWR0aDogNHJlbTtcXG4gIGhlaWdodDogMS44cmVtO1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGJhY2tncm91bmQ6IHJnYigxMDAsIDEwMCwgMTAwKTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyLXJhZGl1czogMjByZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0Zvb3RlciAgKi9cXG4uZm9vdGVyLWNvbnRhaW5lciB7XFxuICAvKiBib3JkZXI6IDJweCBzb2xpZCBsaWdodGNvcmFsOyAqL1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgYmFja2dyb3VuZDogcmdiKDQwLCA0MCwgNDApO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XFxuICBjb2xvcjogYmVpZ2U7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyLWFkZCB7XFxuICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4uZm9vdGVyLWNvbnRhaW5lciA+IGlucHV0IHtcXG4gIGdyaWQtY29sdW1uOiA1IC8gNjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgd2lkdGg6IDE0cmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IFxuICBlbGVtZW50RmFjdG9yeSwgXG4gIGZvcm1GYWN0b3J5LCBcbiAgaW5wdXRGYWN0b3J5LCBcbiAgc2VsZWN0RmFjdG9yeSwgXG4gIGJ1dHRvbkZhY3Rvcnlcbn0gZnJvbSAnLi9mYWN0b3J5JztcblxuZnVuY3Rpb24gYWRkQnV0dG9uTGlzdGVuZXIoYWRkLCBpdGVtLCB0aXRsZSwgZGVzY3JpcHQsIGRhdGUsIHByaW9yaXR5KSB7XG4gIGFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGNhcmRTaHJpbmsoXG4gICAgICBpdGVtLFxuICAgICAgdGl0bGUudmFsdWUsXG4gICAgICBkZXNjcmlwdC52YWx1ZSxcbiAgICAgIGRhdGUudmFsdWUsXG4gICAgICBwcmlvcml0eSxcbiAgICApXG4gICAgaXRlbS5yZW1vdmUoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGV4cGFuZEJ1dHRvbkxpc3RlbmVyKGV4cGFuZCwgaXRlbSwgdGl0bGUsIGRlc2NyaXB0LCBkYXRlLCBwcmlvcml0eSkge1xuICBleHBhbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBjYXJkT3V0cHV0KCBcbiAgICAgIGl0ZW0sXG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0LFxuICAgICAgZGF0ZSxcbiAgICAgIHByaW9yaXR5LFxuICAgIClcbiAgICBpdGVtLnJlbW92ZSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZWRpdEJ1dHRvbkxpc3RlbmVyKGVkaXQsIGl0ZW0sIHRpdGxlLCBkZXNjcmlwdCwgZGF0ZSwgcHJpb3JpdHkpIHtcbiAgY29uc3QgdGFyZ2V0ID0gZmluZEVsZW1lbnQoKS5jYXJkQ29udGFpbmVyO1xuICBjb25zdCBlZGl0Q2FyZCA9IGNhcmRGYWN0b3J5KCcnLCAnJywgJycsICdTYXZlJywgdGl0bGUsIGRlc2NyaXB0LCBkYXRlLCBwcmlvcml0eSkuY2FyZEl0ZW07XG5cbiAgZWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIHRhcmdldC5pbnNlcnRCZWZvcmUoZWRpdENhcmQsIGl0ZW0pO1xuICAgIGl0ZW0ucmVtb3ZlKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWxCdXR0b25MaXN0ZW5lcihkZWwsIGl0ZW0pIHtcbiAgZGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgaXRlbS5yZW1vdmUoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNocmlua0J1dHRvbkxpc3RlbmVyKHNocmluaywgaXRlbSwgdGl0bGUsIGRlc2NyaXB0LCBkYXRlLCBwcmlvcml0eSkge1xuICBzaHJpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBjYXJkU2hyaW5rKFxuICAgICAgaXRlbSxcbiAgICAgIHRpdGxlLFxuICAgICAgZGVzY3JpcHQsXG4gICAgICBkYXRlLFxuICAgICAgcHJpb3JpdHksXG4gICAgKVxuICAgIGl0ZW0ucmVtb3ZlKCk7XG59KTtcbn1cblxuY29uc3QgY2FyZEZhY3RvcnkgPSAodGl0bGUsIGRlc2NyaXB0LCBkYXRlLCBidXR0b24sIGVkaXRUaXRsZSwgZWRpdERlcywgZWRpdERhdGUsIGVkaXRQcmkpID0+IHtcbiAgY29uc3QgY2FyZEl0ZW0gPSBlbGVtZW50RmFjdG9yeSgnY2FyZC1pdGVtJykuZWxlbWVudDtcbiAgY29uc3QgZm9ybSA9IGZvcm1GYWN0b3J5KCd0b2RvLWZvcm0nKS5lbGVtZW50O1xuICBjb25zdCBjYXJkVGl0bGUgPSBpbnB1dEZhY3RvcnkoJ3RleHQnLCB0aXRsZSwgZWRpdFRpdGxlKS5lbGVtZW50O1xuICBjb25zdCBjYXJkRGVzY3JpcHQgPSBpbnB1dEZhY3RvcnkoJ3RleHQnLCBkZXNjcmlwdCwgZWRpdERlcykuZWxlbWVudDtcbiAgY29uc3QgY2FyZERhdGUgPSBpbnB1dEZhY3RvcnkoJ2RhdGUnLCBkYXRlLCBlZGl0RGF0ZSkuZWxlbWVudDtcbiAgY29uc3QgY2FyZFByaW9yaXR5ID0gc2VsZWN0RmFjdG9yeSgnUHJpb3JpdHknLCAnSGlnaCcsICdOb3JtYWwnLCAnTG93JywgZWRpdFByaSkuZWxlbWVudDtcbiAgY29uc3QgYWRkID0gYnV0dG9uRmFjdG9yeSgnYnV0dG9uJywgJ2FkZC1idXR0b24nLCBidXR0b24pLmVsZW1lbnQ7XG5cbiAgYWRkQnV0dG9uTGlzdGVuZXIoYWRkLCBjYXJkSXRlbSwgY2FyZFRpdGxlLCBjYXJkRGVzY3JpcHQsIGNhcmREYXRlLCBjYXJkUHJpb3JpdHkgKTtcbiAgXG4gIGlmIChlZGl0UHJpICE9PSB1bmRlZmluZWQpIHtcbiAgICBsZXQgc2VsZWN0ZWQgPSBlZGl0UHJpLnNlbGVjdGVkSW5kZXg7XG4gICAgY2FyZFByaW9yaXR5Lm9wdGlvbnNbc2VsZWN0ZWRdLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKTtcbiAgfVxuXG4gIGZvcm0uYXBwZW5kKGNhcmRUaXRsZSwgY2FyZERlc2NyaXB0LCBjYXJkRGF0ZSwgY2FyZFByaW9yaXR5KTtcbiAgY2FyZEl0ZW0uYXBwZW5kKGZvcm0sIGFkZCk7XG5cbiAgcmV0dXJuIHsgY2FyZEl0ZW0sIGNhcmRUaXRsZSwgY2FyZERlc2NyaXB0LCBjYXJkRGF0ZSwgY2FyZFByaW9yaXR5IH07XG59XG5cbmZ1bmN0aW9uIGNhcmRTaHJpbmsoaXRlbSwgdGl0bGUsIGRlc2NyaXB0LCBkYXRlLCBwcmlvcml0eSkge1xuICBjb25zdCBjYXJkQ29udGFpbmVyID0gZmluZEVsZW1lbnQoKS5jYXJkQ29udGFpbmVyO1xuICBjb25zdCBjYXJkSXRlbSA9IGVsZW1lbnRGYWN0b3J5KCdjYXJkLWl0ZW0tc2hyaW5rJykuZWxlbWVudDtcbiAgY29uc3QgY2FyZFRpdGxlID0gZWxlbWVudEZhY3RvcnkoJ2NhcmQtdGl0bGUtc2hyaW5rJykuZWxlbWVudDtcbiAgY29uc3QgZXhwYW5kID0gYnV0dG9uRmFjdG9yeSgnYnV0dG9uJywgJ2V4cGFuZC1idXR0b24nLCAnRXhwYW5kJykuZWxlbWVudDtcbiAgY29uc3QgZGVsID0gYnV0dG9uRmFjdG9yeSgnYnV0dG9uJywgJ2RlbC1idXR0b24nLCAnWCcpLmVsZW1lbnQ7XG5cbiAgY2FyZFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG5cbiAgY2FyZEl0ZW0uYXBwZW5kKGNhcmRUaXRsZSwgZXhwYW5kLCBkZWwpXG4gIGNhcmRDb250YWluZXIuaW5zZXJ0QmVmb3JlKGNhcmRJdGVtLCBpdGVtKVxuXG4gIGV4cGFuZEJ1dHRvbkxpc3RlbmVyKGV4cGFuZCwgY2FyZEl0ZW0sIHRpdGxlLCBkZXNjcmlwdCwgZGF0ZSwgcHJpb3JpdHkpO1xuICBkZWxCdXR0b25MaXN0ZW5lcihkZWwsIGNhcmRJdGVtKTtcbn1cblxuZnVuY3Rpb24gY2FyZE91dHB1dCAoaXRlbSwgdGl0bGUsIGRlc2NyaXB0LCBkYXRlLCBwcmlvcml0eSkge1xuICBjb25zdCBjYXJkQ29udGFpbmVyID0gZmluZEVsZW1lbnQoKS5jYXJkQ29udGFpbmVyO1xuICBjb25zdCBjYXJkSXRlbSA9IGVsZW1lbnRGYWN0b3J5KCdjYXJkLWl0ZW0nKS5lbGVtZW50O1xuICBjb25zdCBjYXJkVGl0bGUgPSBlbGVtZW50RmFjdG9yeSgnY2FyZC10aXRsZScpLmVsZW1lbnQ7XG4gIGNvbnN0IGNhcmREZXNjcmlwdCA9IGVsZW1lbnRGYWN0b3J5KCdjYXJkLWRlc2NyaXB0JykuZWxlbWVudDtcbiAgY29uc3QgY2FyZERhdGUgPSBlbGVtZW50RmFjdG9yeSgnY2FyZC1kYXRlJykuZWxlbWVudDtcbiAgY29uc3QgY2FyZFByaW9yaXR5ID0gZWxlbWVudEZhY3RvcnkoJ2NhcmQtcHJpb3JpdHknKS5lbGVtZW50O1xuICBjb25zdCBlZGl0ID0gYnV0dG9uRmFjdG9yeSgnYnV0dG9uJywgJ2VkaXQtYnV0dG9uJywnRWRpdCcpLmVsZW1lbnQ7XG4gIGNvbnN0IGRlbCA9IGJ1dHRvbkZhY3RvcnkoJ2J1dHRvbicsICdkZWwtYnV0dG9uJywgJ1gnKS5lbGVtZW50O1xuICBjb25zdCBzaHJpbmsgPSBidXR0b25GYWN0b3J5KCdidXR0b24nLCAnc2hyaW5rLWJ1dHRvbicsICdTaHJpbmsnKS5lbGVtZW50O1xuXG4gIGNhcmRUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICBjYXJkRGVzY3JpcHQudGV4dENvbnRlbnQgPSBkZXNjcmlwdDtcbiAgY2FyZERhdGUudGV4dENvbnRlbnQgPSBkYXRlO1xuICBjYXJkUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6ICcgKyBwcmlvcml0eS52YWx1ZTtcblxuICBjYXJkSXRlbS5hcHBlbmQoY2FyZFRpdGxlLCBjYXJkRGVzY3JpcHQsIGNhcmREYXRlLCBjYXJkUHJpb3JpdHksIHNocmluaywgZWRpdCwgZGVsKTtcbiAgY2FyZENvbnRhaW5lci5pbnNlcnRCZWZvcmUoY2FyZEl0ZW0sIGl0ZW0pXG5cbiAgZWRpdEJ1dHRvbkxpc3RlbmVyKGVkaXQsIGNhcmRJdGVtLCB0aXRsZSwgZGVzY3JpcHQsIGRhdGUsIHByaW9yaXR5KTtcbiAgZGVsQnV0dG9uTGlzdGVuZXIoZGVsLCBjYXJkSXRlbSk7XG4gIHNocmlua0J1dHRvbkxpc3RlbmVyKHNocmluaywgY2FyZEl0ZW0sIHRpdGxlLCBkZXNjcmlwdCwgZGF0ZSwgcHJpb3JpdHkpO1xufVxuXG5mdW5jdGlvbiBmaW5kRWxlbWVudCgpIHtcbiAgY29uc3QgbmV3QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10b2RvLWRpdicpO1xuICBjb25zdCBjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtY29udGFpbmVyJyk7XG5cbiAgcmV0dXJuIHsgbmV3QnV0dG9uLCBjYXJkQ29udGFpbmVyIH1cblxufVxuXG5mdW5jdGlvbiBjcmVhdGVUb2RvQ2xpY2soKSB7XG4gIGNvbnN0IHRhcmdldCA9IGZpbmRFbGVtZW50KCkubmV3QnV0dG9uO1xuICBpZiAodGFyZ2V0ICE9PSBudWxsKSB7XG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkQ2FyZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkQ2FyZCgpIHtcbiAgY29uc3QgdGFyZ2V0ID0gZmluZEVsZW1lbnQoKS5jYXJkQ29udGFpbmVyO1xuICBjb25zdCBuZXdDYXJkID0gY2FyZEZhY3RvcnkoJ05ldyBUaXRsZScsICdOZXcgRGVzY3JpcHRpb24nLCAnTmV3IERhdGUnLCAnQWRkJykuY2FyZEl0ZW07XG4gIHRhcmdldC5hcHBlbmRDaGlsZChuZXdDYXJkKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlVG9kb0NsaWNrIH07IiwiY29uc3QgZWxlbWVudEZhY3RvcnkgPSAobmFtZSkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChuYW1lKTtcbiAgcmV0dXJuIHsgZWxlbWVudCB9O1xufTtcblxuY29uc3QgZm9ybUZhY3RvcnkgPSAoY2xzKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbHMpO1xuICAvLyBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgYWN0aW9uKTtcbiAgLy8gZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsIG1ldGhvZCk7XG4gIHJldHVybiB7IGVsZW1lbnQgfTtcbn07XG5cbmNvbnN0IGlucHV0RmFjdG9yeSA9ICh0eXBlLCBwbGNob2xkZXIsIHZhbHVlID0gJycpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0eXBlJywgdHlwZSk7XG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIHBsY2hvbGRlcik7XG4gIGVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbiAgcmV0dXJuIHsgZWxlbWVudCB9O1xufVxuXG5jb25zdCBzZWxlY3RGYWN0b3J5ID0gKGxhYmVsLCBvcDEsIG9wMiwgb3AzKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgY29uc3QgZ3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRncm91cCcpO1xuICBjb25zdCBvcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGNvbnN0IG9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgY29uc3Qgb3B0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXG4gIGdyb3VwLnNldEF0dHJpYnV0ZSgnbGFiZWwnLCBsYWJlbCk7XG4gIG9wdGlvbjEudGV4dENvbnRlbnQgPSBvcDE7XG4gIG9wdGlvbjIudGV4dENvbnRlbnQgPSBvcDI7XG4gIC8vIG9wdGlvbjIuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xuICBvcHRpb24zLnRleHRDb250ZW50ID0gb3AzO1xuICBncm91cC5hcHBlbmQob3B0aW9uMSwgb3B0aW9uMiwgb3B0aW9uMyk7XG4gIGVsZW1lbnQuYXBwZW5kKGdyb3VwKTtcblxuICByZXR1cm4geyBlbGVtZW50IH1cbn1cblxuY29uc3QgYnV0dG9uRmFjdG9yeSA9ICh0eXBlLCBjbHMsIHRleHQpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndHlwZScsIHR5cGUpO1xuICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNscyk7XG4gIHJldHVybiB7IGVsZW1lbnQgfVxufVxuXG5jb25zdCBhZGRQcmpGYWN0b3J5ID0gKGxhYmVsLCAuLi5vcHMpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBjb25zdCBncm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGdyb3VwJyk7XG5cbiAgZ3JvdXAuc2V0QXR0cmlidXRlKCdsYWJlbCcsIGxhYmVsKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9wc1swXS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBkaXYudGV4dENvbnRlbnQgPSBvcHNbMF1baV07XG4gICAgZ3JvdXAuYXBwZW5kKGRpdik7XG4gIH1cbiAgXG4gIGVsZW1lbnQuYXBwZW5kKGdyb3VwKTtcblxuICByZXR1cm4geyBlbGVtZW50IH07XG59XG5cbmV4cG9ydCB7IGVsZW1lbnRGYWN0b3J5LCBpbnB1dEZhY3RvcnksIGZvcm1GYWN0b3J5LCBzZWxlY3RGYWN0b3J5LCBidXR0b25GYWN0b3J5LCBhZGRQcmpGYWN0b3J5IH0iLCJpbXBvcnQgeyBlbGVtZW50RmFjdG9yeSB9IGZyb20gXCIuL2ZhY3RvcnlcIjtcbmltcG9ydCB7IGNyZWF0ZVByb2plY3RDb250ZW50LCBhZGRUb1Byb2plY3QsIGFkZFByb2plY3RDYXJkIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCB7IHB1dFN0b3JhZ2UsIHNob3dTdG9yYWdlLCBmaW5kS2V5cyB9IGZyb20gJy4vc3RvcmFnZSc7XG5cbmZ1bmN0aW9uIGZpbmRFbGVtZW50KCkge1xuICBjb25zdCBmb290ZXJBZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyLWFkZCcpO1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXItY29udGFpbmVyID4gaW5wdXQnKTtcbiAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlLXByb2plY3QtY29udGFpbmVyJyk7XG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgY29uc3QgcHJvamVjdENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250ZW50Jyk7XG4gIGNvbnN0IHdpcGVDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQgPiAqJyk7XG4gIGNvbnN0IHdpcGVTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtZGl2IHNlbGVjdCcpO1xuICBjb25zdCBpbmJveENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gtY29udGVudCcpO1xuICByZXR1cm4geyBmb290ZXJBZGQsIHByb2plY3ROYW1lLCBwcm9qZWN0RGl2LCBtYWluQ29udGVudCwgXG4gICAgcHJvamVjdENvbnRlbnQsIHdpcGVDb250ZW50LCB3aXBlU2VsZWN0LCBpbmJveENvbnRlbnQgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXJDbGljaygpIHtcbiAgY29uc3QgYWRkID0gZmluZEVsZW1lbnQoKS5mb290ZXJBZGQ7XG5cbiAgYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgbGV0IHByb2plY3ROYW1lID0gZmluZEVsZW1lbnQoKS5wcm9qZWN0TmFtZTtcbiAgICBjcmVhdGVTaWRlUHJvamVjdChwcm9qZWN0TmFtZS52YWx1ZSk7XG4gICAgcHJvamVjdE5hbWUudmFsdWUgPSAnJztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGVQcm9qZWN0KHByb2plY3QpIHtcbiAgY29uc3QgcHJvamVjdEl0ZW0gPSBlbGVtZW50RmFjdG9yeSgnc2lkZS1wcm9qZWN0LXRpdGxlJykuZWxlbWVudDtcbiAgY29uc3QgcHJvamVjdERpdiA9IGZpbmRFbGVtZW50KCkucHJvamVjdERpdjtcblxuICBwcm9qZWN0SXRlbS50ZXh0Q29udGVudCA9IHByb2plY3Q7XG5cbiAgcHJvamVjdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBsb2FkUHJvamVjdChwcm9qZWN0LCBwcm9qZWN0SXRlbSk7XG4gICAgYWRkUHJvamVjdENhcmQoKVxuICB9LCB7IG9uY2U6IHRydWUgfSk7XG4gIFxuICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RJdGVtKTtcblxuICBmaW5kS2V5cygpO1xufVxuXG5mdW5jdGlvbiBsb2FkUHJvamVjdChwcm9qZWN0LCBzaWRlRGl2KSB7XG4gIGNvbnN0IGxvYWQgPSBmaW5kRWxlbWVudCgpLm1haW5Db250ZW50O1xuXG4gIGZpbmRFbGVtZW50KCkud2lwZUNvbnRlbnQucmVtb3ZlKCk7XG4gIGNvbnN0IHByb2plY3RDb250ZW50ID0gY3JlYXRlUHJvamVjdENvbnRlbnQocHJvamVjdClcbiAgcHV0U3RvcmFnZShwcm9qZWN0LCBwcm9qZWN0Q29udGVudCk7XG4gIGxvYWQuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRlbnQpO1xuICBcbiAgYWRkVG9Qcm9qZWN0KCk7XG5cbiAgc2lkZURpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGZpbmRLZXlzKCk7XG4gICAgcmVsb2FkUHJvamVjdChwcm9qZWN0KVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVsb2FkUHJvamVjdChwcm9qZWN0KSB7XG4gIGNvbnN0IGxvYWQgPSBmaW5kRWxlbWVudCgpLm1haW5Db250ZW50O1xuICBmaW5kRWxlbWVudCgpLndpcGVDb250ZW50LnJlbW92ZSgpO1xuICBsb2FkLmFwcGVuZENoaWxkKHNob3dTdG9yYWdlKCkuc3RvcmFnZVtwcm9qZWN0XSk7XG4gIGZpbmRFbGVtZW50KCkud2lwZVNlbGVjdC5yZW1vdmUoKTtcblxuICBhZGRUb1Byb2plY3QoKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlRm9vdGVyQ2xpY2sgfTsiLCJpbXBvcnQgeyBlbGVtZW50RmFjdG9yeSwgaW5wdXRGYWN0b3J5LCBidXR0b25GYWN0b3J5IH0gZnJvbSAnLi9mYWN0b3J5JztcblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICBjb25zdCBmb290ZXJEaXYgPSBlbGVtZW50RmFjdG9yeSgnZm9vdGVyLWNvbnRhaW5lcicpLmVsZW1lbnQ7XG4gIGNvbnN0IGNvbnRlbnQgPSBjcmVhdGVGb290ZXJDb250ZW50KCk7XG5cbiAgZm9vdGVyRGl2LmFwcGVuZChjb250ZW50LmZvb3RlckFkZCwgY29udGVudC5mb290ZXJOZXdQcmopO1xuXG4gIHJldHVybiBmb290ZXJEaXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlckNvbnRlbnQoKSB7XG4gIGNvbnN0IGZvb3RlckFkZCA9IGVsZW1lbnRGYWN0b3J5KCdmb290ZXItYWRkJykuZWxlbWVudDtcbiAgY29uc3QgZm9vdGVyTmV3UHJqID0gaW5wdXRGYWN0b3J5KCd0ZXh0JywgJ05ldyBQcm9qZWN0JykuZWxlbWVudDtcblxuICBmb290ZXJBZGQudGV4dENvbnRlbnQgPSAnKyc7XG5cbiAgcmV0dXJuIHsgZm9vdGVyQWRkLCBmb290ZXJOZXdQcmogfTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlRm9vdGVyLCBjcmVhdGVGb290ZXJDb250ZW50IH07IiwiaW1wb3J0IHsgZWxlbWVudEZhY3RvcnkgfSBmcm9tIFwiLi9mYWN0b3J5XCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyRGl2ID0gZWxlbWVudEZhY3RvcnkoJ2hlYWRlci1jb250YWluZXInKS5lbGVtZW50O1xuICBjb25zdCBjb250ZW50ID0gY3JlYXRlSGVhZGVyQ29udGVudCgpO1xuXG4gIGhlYWRlckRpdi5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICByZXR1cm4gaGVhZGVyRGl2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXJDb250ZW50KCkge1xuICBjb25zdCBoZWFkZXJUaXRsZSA9IGVsZW1lbnRGYWN0b3J5KCdoZWFkZXItdGl0bGUnKS5lbGVtZW50O1xuXG4gIGhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gJ1RvZG8gTGlzdCc7XG5cbiAgcmV0dXJuIGhlYWRlclRpdGxlO1xuXG59XG5cbmV4cG9ydCB7IGNyZWF0ZUhlYWRlciB9OyIsImltcG9ydCB7IGVsZW1lbnRGYWN0b3J5IH0gZnJvbSAnLi9mYWN0b3J5JztcblxuZnVuY3Rpb24gY3JlYXRlSW5ib3hDb250ZW50KCkge1xuICBjb25zdCBpbmJveENvbnRlbnQgPSBlbGVtZW50RmFjdG9yeSgnaW5ib3gtY29udGVudCcpLmVsZW1lbnQ7XG4gIGNvbnN0IGhlYWRlckNvbnRlbnQgPSBjcmVhdGVJbmJveEhlYWRlcigpO1xuICBjb25zdCBjYXJkQ29udGFpbmVyID0gZWxlbWVudEZhY3RvcnkoJ2NhcmQtY29udGFpbmVyJykuZWxlbWVudDtcblxuICBpbmJveENvbnRlbnQuYXBwZW5kKGhlYWRlckNvbnRlbnQsIGNhcmRDb250YWluZXIpO1xuXG4gIHJldHVybiBpbmJveENvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUluYm94SGVhZGVyKCkge1xuICBjb25zdCBpbmJveEhlYWRlckRpdiA9IGVsZW1lbnRGYWN0b3J5KCdpbmJveC1oZWFkZXItY29udGFpbmVyJykuZWxlbWVudDtcbiAgY29uc3QgaW5ib3hUaXRsZSA9IGVsZW1lbnRGYWN0b3J5KCdpbmJveC10aXRsZScpLmVsZW1lbnQ7XG4gIGNvbnN0IG5ld1RvZG9EaXYgPSBlbGVtZW50RmFjdG9yeSgnbmV3LXRvZG8tZGl2JykuZWxlbWVudDtcbiAgY29uc3QgaW5ib3hBZGQgPSBlbGVtZW50RmFjdG9yeSgnaW5ib3gtYWRkJykuZWxlbWVudDtcbiAgY29uc3QgbmV3VG9kbyA9IGVsZW1lbnRGYWN0b3J5KCduZXctdG9kbycpLmVsZW1lbnQ7XG5cbiAgaW5ib3hUaXRsZS50ZXh0Q29udGVudCA9ICdJbmJveCc7XG4gIGluYm94QWRkLnRleHRDb250ZW50ID0gJysnO1xuICBuZXdUb2RvLnRleHRDb250ZW50ID0gJ05ldyBUb2RvJztcblxuICBuZXdUb2RvRGl2LmFwcGVuZChpbmJveEFkZCwgbmV3VG9kbyk7XG4gIGluYm94SGVhZGVyRGl2LmFwcGVuZChpbmJveFRpdGxlLCBuZXdUb2RvRGl2KTtcblxuICByZXR1cm4gaW5ib3hIZWFkZXJEaXY7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUluYm94Q29udGVudCB9OyIsImltcG9ydCB7IGVsZW1lbnRGYWN0b3J5IH0gZnJvbSAnLi9mYWN0b3J5JztcbmltcG9ydCB7IGNyZWF0ZUhlYWRlciB9IGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCB7IGNyZWF0ZUZvb3RlciB9IGZyb20gJy4vZm9vdGVyJztcbmltcG9ydCB7IGNyZWF0ZVNpZGUgfSBmcm9tICcuL3NpZGUnO1xuaW1wb3J0IHsgY3JlYXRlSW5ib3hDb250ZW50IH0gZnJvbSAnLi9pbmJveCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZURpdigpIHtcbiAgY29uc3QgY29udGVudERpdiA9IGVsZW1lbnRGYWN0b3J5KCdjb250ZW50JykuZWxlbWVudDtcblxuICByZXR1cm4gY29udGVudERpdjtcbn1cblxuZnVuY3Rpb24gcGxhY2VUb0NvbnRhaW5lcigpIHtcbiAgY29uc3QgY29udGVudERpdiA9IHBsYWNlVG9QYXJlbnQoKS5jb250ZW50RGl2O1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlU2lkZSgpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnREaXYpO1xufVxuXG5mdW5jdGlvbiBwbGFjZVRvUGFyZW50KCkge1xuICBjb25zdCBjb250ZW50RGl2ID0gY3JlYXRlRGl2KCk7XG4gIFxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUluYm94Q29udGVudCgpKTtcblxuICByZXR1cm4geyBjb250ZW50RGl2IH07XG59XG5cbmV4cG9ydCB7IHBsYWNlVG9Db250YWluZXIgfTsiLCJpbXBvcnQgeyBlbGVtZW50RmFjdG9yeSwgYWRkUHJqRmFjdG9yeSB9IGZyb20gXCIuL2ZhY3RvcnlcIjtcbmltcG9ydCB7IHNob3dLZXlzLCBzaG93U3RvcmFnZSwgZmluZEtleXMgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RDb250ZW50KHByb2plY3QpIHtcbiAgY29uc3QgcHJvamVjdENvbnRlbnQgPSBlbGVtZW50RmFjdG9yeSgncHJvamVjdC1jb250ZW50JykuZWxlbWVudDtcbiAgY29uc3QgaGVhZGVyQ29udGVudCA9IGNyZWF0ZVByb2plY3RIZWFkZXIocHJvamVjdCk7XG4gIGNvbnN0IGNhcmRDb250YWluZXIgPSBlbGVtZW50RmFjdG9yeSgnY2FyZC1jb250YWluZXInKS5lbGVtZW50O1xuXG4gIHByb2plY3RDb250ZW50LmFwcGVuZChoZWFkZXJDb250ZW50LCBjYXJkQ29udGFpbmVyKTtcblxuICByZXR1cm4gcHJvamVjdENvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RIZWFkZXIocHJvamVjdCkge1xuICBjb25zdCBwcm9qZWN0SGVhZGVyRGl2ID0gZWxlbWVudEZhY3RvcnkoJ3Byb2plY3QtaGVhZGVyLWNvbnRhaW5lcicpLmVsZW1lbnQ7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGVsZW1lbnRGYWN0b3J5KCdwcm9qZWN0LXRpdGxlJykuZWxlbWVudDtcbiAgY29uc3QgbmV3UHJvamVjdERpdiA9IGVsZW1lbnRGYWN0b3J5KCduZXctcHJvamVjdC1kaXYnKS5lbGVtZW50O1xuICBjb25zdCBwcm9qZWN0QWRkID0gZWxlbWVudEZhY3RvcnkoJ3Byb2plY3QtYWRkJykuZWxlbWVudDtcblxuICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0O1xuICBwcm9qZWN0QWRkLnRleHRDb250ZW50ID0gJysnO1xuXG4gIG5ld1Byb2plY3REaXYuYXBwZW5kKHByb2plY3RBZGQpO1xuXG4gIHByb2plY3RIZWFkZXJEaXYuYXBwZW5kKHByb2plY3RUaXRsZSwgbmV3UHJvamVjdERpdik7XG5cbiAgcmV0dXJuIHByb2plY3RIZWFkZXJEaXY7XG59XG5cbmZ1bmN0aW9uIGFkZFRvUHJvamVjdCgpIHtcbiAgY29uc3QgYWRkTGlzdCA9IHNob3dLZXlzKCk7XG4gIGNvbnN0IGxpc3QgPSBhZGRQcmpGYWN0b3J5KCdBZGQgdG8gcHJvamVjdCcsIGFkZExpc3QpLmVsZW1lbnQ7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdC1kaXYnKTtcbiAgZGl2LmFwcGVuZChsaXN0KTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdENhcmQoKSB7XG4gIGNvbnN0IGFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWFkZCcpO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtY29udGFpbmVyJyk7XG4gIGNvbnN0IHN0b3JhZ2UgPSBzaG93U3RvcmFnZSgpLnN0b3JhZ2U7XG4gIGNvbnN0IGNoaWxkcmVuID0gc3RvcmFnZVsnaW5ib3gnXS5jaGlsZHJlblsxXS5jaGlsZHJlblxuICBcbiAgYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtZGl2IHNlbGVjdCcpLnNlbGVjdGVkSW5kZXg7XG4gICAgaWYgKGNoaWxkcmVuLmxlbmd0aCAhPSAwKSB7XG4gICAgICBjb250ZW50LmFwcGVuZChjaGlsZHJlbltzZWxlY3RlZF0pO1xuICAgIH0gZWxzZSB7IHJldHVybiB9O1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdC1kaXYgc2VsZWN0JykucmVtb3ZlKCk7XG4gICAgZmluZEtleXMoKTtcbiAgICBhZGRUb1Byb2plY3QoKVxuICB9KTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdENvbnRlbnQsIGFkZFRvUHJvamVjdCwgYWRkUHJvamVjdENhcmQgfTsiLCJpbXBvcnQgeyBjcmVhdGVUb2RvQ2xpY2sgfSBmcm9tICcuL2FkZC1jYXJkJztcbmltcG9ydCB7IHB1dFN0b3JhZ2UsIHNob3dTdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlJztcblxuZnVuY3Rpb24gZmluZEVsZW1lbnQoKSB7XG4gIGNvbnN0IG1lbnVJbmJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlLWJ1dHRvbjpudGgtY2hpbGQoMSknKTtcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICBjb25zdCBpbmJveENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gtY29udGVudCcpO1xuICBjb25zdCB3aXBlQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50ID4gKicpO1xuXG4gIHJldHVybiB7IG1lbnVJbmJveCwgbWFpbkNvbnRlbnQsIGluYm94Q29udGVudCwgd2lwZUNvbnRlbnQgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2lkZUNsaWNrKCkge1xuICBjb25zdCBpbmJveCA9IGZpbmRFbGVtZW50KCkubWVudUluYm94O1xuICBwdXRTdG9yYWdlKCdpbmJveCcsIGZpbmRFbGVtZW50KCkuaW5ib3hDb250ZW50KTtcbiAgaW5ib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkSW5ib3gpO1xufVxuXG5mdW5jdGlvbiBsb2FkSW5ib3goKSB7XG4gIGNvbnN0IGxvYWQgPSBmaW5kRWxlbWVudCgpLm1haW5Db250ZW50O1xuICBmaW5kRWxlbWVudCgpLndpcGVDb250ZW50LnJlbW92ZSgpO1xuICBsb2FkLmFwcGVuZENoaWxkKHNob3dTdG9yYWdlKCkuc3RvcmFnZVsnaW5ib3gnXSk7XG4gIGNyZWF0ZVRvZG9DbGljaygpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVTaWRlQ2xpY2sgfSIsImltcG9ydCB7IGVsZW1lbnRGYWN0b3J5IH0gZnJvbSAnLi9mYWN0b3J5JztcblxuZnVuY3Rpb24gY3JlYXRlU2lkZSgpIHtcbiAgY29uc3Qgc2lkZURpdiA9IGVsZW1lbnRGYWN0b3J5KCdzaWRlLWNvbnRhaW5lcicpLmVsZW1lbnQ7XG4gIGNvbnN0IGNvbnRlbnQgPSBjcmVhdGVTaWRlQ29udGVudCgpLnNpZGVNZW51O1xuICBcbiAgc2lkZURpdi5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgXG4gIHJldHVybiBzaWRlRGl2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTaWRlQ29udGVudCgpIHtcbiAgY29uc3Qgc2lkZU1lbnUgPSBlbGVtZW50RmFjdG9yeSgnc2lkZS1tZW51JykuZWxlbWVudDtcbiAgY29uc3Qgc2lkZUluYm94ID0gZWxlbWVudEZhY3RvcnkoJ3NpZGUtYnV0dG9uJykuZWxlbWVudDtcbiAgY29uc3Qgc2lkZVByb2plY3QgPSBlbGVtZW50RmFjdG9yeSgnc2lkZS1idXR0b24nKS5lbGVtZW50O1xuICBjb25zdCBwcm9qZWN0RGl2ID0gZWxlbWVudEZhY3RvcnkoJ3NpZGUtcHJvamVjdC1jb250YWluZXInKS5lbGVtZW50O1xuICBzaWRlSW5ib3gudGV4dENvbnRlbnQgPSAnSW5ib3gnO1xuXG4gIHNpZGVQcm9qZWN0LnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcblxuICBzaWRlTWVudS5hcHBlbmQoc2lkZUluYm94LCBzaWRlUHJvamVjdCwgcHJvamVjdERpdik7XG4gIFxuICByZXR1cm4geyBzaWRlTWVudSwgc2lkZUluYm94LCBzaWRlUHJvamVjdCB9O1xufVxuXG5cbmV4cG9ydCB7IGNyZWF0ZVNpZGUsIGNyZWF0ZVNpZGVDb250ZW50IH07XG4iLCJsZXQgc3RvcmFnZSA9IHt9O1xuXG5sZXQgcHJvamVjdExpc3QgPSB7fTtcblxubGV0IHByb2plY3RLZXlzID0gW107XG5cbmZ1bmN0aW9uIHB1dFN0b3JhZ2UoZmlsZU5hbWUsIGRpdk5hbWUpIHtcbiAgc3RvcmFnZVtmaWxlTmFtZV0gPSBkaXZOYW1lO1xufVxuXG5jb25zdCBzaG93U3RvcmFnZSA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coc3RvcmFnZSk7XG4gIGNvbnNvbGUubG9nKHByb2plY3RLZXlzKTtcbiAgY29uc29sZS5sb2cocHJvamVjdExpc3QpO1xuICBjb25zb2xlLmxvZyhzdG9yYWdlWydpbmJveCddLmNoaWxkcmVuWzFdLmNoaWxkcmVuKTtcbiAgcmV0dXJuIHsgc3RvcmFnZSB9O1xufTtcblxuZnVuY3Rpb24gZmluZEtleXMoKSB7XG4gIHByb2plY3RMaXN0ID0ge307XG4gIGNvbnN0IGl0ZW1MaXN0ID0gc3RvcmFnZVsnaW5ib3gnXS5jaGlsZHJlblsxXS5jaGlsZHJlbjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtTGlzdC5sZW5ndGg7IGkrKykge1xuICAgIGxldCBwcm9qZWN0ID0gaXRlbUxpc3RbaV0uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQ7XG4gICAgcHJvamVjdExpc3RbcHJvamVjdF0gPSBpdGVtTGlzdFtpXTtcbiAgfVxuICBwcm9qZWN0S2V5cyA9IFtdO1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocHJvamVjdExpc3QpO1xuICBmb3IgKGxldCBpdGVtIG9mIGtleXMpIHtcbiAgICBwcm9qZWN0S2V5cy5wdXNoKGl0ZW0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dLZXlzKCkge1xuICByZXR1cm4gcHJvamVjdEtleXM7XG59XG5cbmV4cG9ydCB7IHB1dFN0b3JhZ2UsIHNob3dTdG9yYWdlLCBmaW5kS2V5cywgc2hvd0tleXMgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHBsYWNlVG9Db250YWluZXIgfSBmcm9tICcuL2xheW91dCc7XG5pbXBvcnQgeyBjcmVhdGVTaWRlQ2xpY2sgfSBmcm9tICcuL3NpZGUtbGlzdGVuZXJzJztcbmltcG9ydCB7IGNyZWF0ZVRvZG9DbGljayB9IGZyb20gJy4vYWRkLWNhcmQnO1xuaW1wb3J0IHsgY3JlYXRlRm9vdGVyQ2xpY2sgfSBmcm9tICcuL2Zvb3Rlci1saXN0ZW5lcnMnO1xuXG4oZnVuY3Rpb24oKSB7XG4gIHBsYWNlVG9Db250YWluZXIoKTtcbn0pKCk7XG5cbihmdW5jdGlvbigpIHtcbiAgY3JlYXRlU2lkZUNsaWNrKCk7XG59KSgpO1xuXG4oZnVuY3Rpb24oKSB7XG4gIGNyZWF0ZVRvZG9DbGljaygpO1xufSkoKTtcblxuKGZ1bmN0aW9uKCkge1xuICBjcmVhdGVGb290ZXJDbGljaygpO1xufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=