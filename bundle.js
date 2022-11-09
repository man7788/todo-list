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

  console.log(priority.selectedIndex);
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
  
  console.log(ops);
  group.setAttribute('label', label);

  for (let i = 0; i <= ops.length; i++) {
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
/* harmony import */ var _add_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-card */ "./src/add-card.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/storage.js");





function findElement() {
  const footerAdd = document.querySelector('.footer-add');
  const projectName = document.querySelector('.footer-container > input');
  const projectDiv = document.querySelector('.side-project-container');
  const mainContent = document.querySelector('.content');
  const projectContent = document.querySelector('.project-content');
  const wipeContent = document.querySelector('.content > *');
  const wipeSelect = document.querySelector('.new-project-div select');
  return { footerAdd, projectName, projectDiv, mainContent, 
    projectContent, wipeContent, wipeSelect }
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
    }, { once: true });
  projectDiv.appendChild(projectItem);
  
  (0,_storage__WEBPACK_IMPORTED_MODULE_3__.putProject)();
  (0,_storage__WEBPACK_IMPORTED_MODULE_3__.findKeys)();
}

function loadProject(project, sideDiv) {
  const load = findElement().mainContent;

  findElement().wipeContent.remove();
  const projectContent = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.createProjectContent)(project)
  ;(0,_storage__WEBPACK_IMPORTED_MODULE_3__.putStorage)(project, projectContent);
  load.appendChild(projectContent);
  
  (0,_add_card__WEBPACK_IMPORTED_MODULE_2__.createTodoClick)(); 
  (0,_projects__WEBPACK_IMPORTED_MODULE_1__.addToProject)();

  sideDiv.addEventListener('click', () => {
    reloadProject(project)
  });
}

function reloadProject(project) {
  const load = findElement().mainContent;

  findElement().wipeContent.remove();
  load.appendChild((0,_storage__WEBPACK_IMPORTED_MODULE_3__.showStorage)().storage[project]);
  findElement().wipeSelect.remove();

  (0,_storage__WEBPACK_IMPORTED_MODULE_3__.putProject)();
  (0,_storage__WEBPACK_IMPORTED_MODULE_3__.findKeys)();
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
/* harmony export */   "putProject": () => (/* binding */ putProject),
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
  // console.log(projectList);

  console.log(projectKeys);
  return { storage };
};

function putProject() {
  projectList = {};
  const itemList = storage['inbox'].children[1].children;
  for (let i = 0; i < itemList.length; i++) {
    let project = itemList[i].children[0].textContent;
    projectList[project] = itemList[i];
  }
}

function findKeys() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLFNBQVMsTUFBTSxZQUFZLE9BQU8sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxRQUFRLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLFVBQVUsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sWUFB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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUNwQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDdUI7QUFDTztBQUNOO0FBQ1U7O0FBRXZEO0FBQ0EsRUFBRSx5REFBZ0I7QUFDbEIsQ0FBQzs7QUFFRDtBQUNBLEVBQUUsZ0VBQWU7QUFDakIsQ0FBQzs7QUFFRDtBQUNBLEVBQUUsMERBQWU7QUFDakIsQ0FBQzs7QUFFRDtBQUNBLEVBQUUsb0VBQWlCO0FBQ25CLENBQUMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYWRkLWNhcmQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Zvb3Rlci1saXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmJveC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbGF5b3V0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2lkZS1saXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NpZGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTBmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDEwMGZyO1xcbn1cXG5cXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vSGVhZGVyICAqL1xcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIHNhbG1vbjsgKi9cXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGJhY2tncm91bmQ6IHJnYig0MCwgNDAsIDQwKTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmhlYWRlci10aXRsZSB7XFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9TaWRlICAqL1xcbi5zaWRlLWNvbnRhaW5lciB7XFxuICAvKiBib3JkZXI6IDJweCBzb2xpZCBncmVlbnllbGxvdzsgKi9cXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGJhY2tncm91bmQ6IHJnYig0MCwgNDAsIDQwKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5zaWRlLW1lbnUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAwLjVmciAwLjFmciAxMGZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDFmcik7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNpZGUtYnV0dG9uIHtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxufVxcblxcbi5zaWRlLWJ1dHRvbjpudGgtY2hpbGQoMSkge1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgZ3JpZC1jb2x1bW46IDMgLyAxMDtcXG5cXG59XFxuXFxuLnNpZGUtYnV0dG9uOm50aC1jaGlsZCgyKSB7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxuICBncmlkLWNvbHVtbjogMyAvIDEwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIC8qIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB3aGl0ZXNtb2tlOyAqL1xcbn1cXG5cXG4uc2lkZS1idXR0b246bnRoLWNoaWxkKDMpIHtcXG4gIGdyaWQtcm93OiA0IC8gNTtcXG59XFxuXFxuLnNpZGUtcHJvamVjdC1jb250YWluZXIge1xcbiAgZ3JpZC1yb3c6IDUgLyA2O1xcbiAgZ3JpZC1jb2x1bW46IDQgLyAxMDtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG4uc2lkZS1wcm9qZWN0LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbn1cXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vSW5ib3ggICovXFxuXFxuLmNvbnRlbnQge1xcbiAgZ3JpZC1yb3c6IDEgLyA0O1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgYmFja2dyb3VuZDogcmdiKDU1LCA1NSwgNTUpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmluYm94LWNvbnRlbnQsXFxuLnByb2plY3QtY29udGVudCB7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuMWZyIDFmciAxMGZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyIDFmcjtcXG59XFxuXFxuLyogLnN0b3JhZ2UtY29udGVudCB7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuMWZyIDFmciAxMGZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyIDFmcjtcXG59ICovXFxuXFxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0luYm94IEhlYWRlciAgKi9cXG4uaW5ib3gtaGVhZGVyLWNvbnRhaW5lcixcXG4ucHJvamVjdC1oZWFkZXItY29udGFpbmVyIHtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHdoaXRlc21va2U7XFxuICBhbGlnbi1pdGVtczogZW5kO1xcbn1cXG5cXG4uaW5ib3gtdGl0bGUsXFxuLnByb2plY3QtdGl0bGUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbn1cXG5cXG4ubmV3LXRvZG8tZGl2LFxcbi5uZXctcHJvamVjdC1kaXYge1xcbiAgZ3JpZC1jb2x1bW46IDMgLyA0O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEuNWZyIDEwOXB4O1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaW5ib3gtYWRkLFxcbi5wcm9qZWN0LWFkZCB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDAuMjhyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG59XFxuXFxuLm5ldy10b2RvIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAwLjVyZW07XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5uZXctcHJvamVjdC1kaXYgc2VsZWN0IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDAsIDQwLCA0MCwgMCk7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAwLjVyZW07XFxufVxcbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9JbmJveCBDYXJkICAqL1xcbi5jYXJkLWNvbnRhaW5lciB7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNhcmQtaXRlbSxcXG4uY2FyZC1pdGVtLXNocmluayB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQwLCA0MCwgNDApO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyMDBweCwgMWZyKSBtaW5tYXgoMTQwcHgsIG1heC1jb250ZW50KTtcXG59XFxuXFxuLnRvZG8tZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaW5wdXQsXFxuLmNhcmQtaXRlbSBzZWxlY3Qge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MCwgNDAsIDQwLCAwKTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG5cXG59XFxuXFxuLmNhcmQtY29udGFpbmVyIGlucHV0Om50aC1jaGlsZCgxKSB7XFxuICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi5jYXJkLWNvbnRhaW5lciBpbnB1dDpudGgtY2hpbGQoMikge1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4uY2FyZC1jb250YWluZXIgaW5wdXQ6bnRoLWNoaWxkKDMpIHtcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG59XFxuXFxuLmNhcmQtaXRlbSBzZWxlY3Qge1xcbmdyaWQtcm93OiA0IC8gNTtcXG59XFxuXFxuLmNhcmQtdGl0bGUge1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4uY2FyZC1kZXNjcmlwdCB7XFxuICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbi5jYXJkLWRhdGUge1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cXG4uY2FyZC1wcmlvcml0eSB7XFxuICBncmlkLXJvdzogNCAvIDU7XFxufVxcblxcbi5hZGQtYnV0dG9uLFxcbi5lZGl0LWJ1dHRvbixcXG4uZGVsLWJ1dHRvbixcXG4uZXhwYW5kLWJ1dHRvbiB7XFxuICB3aWR0aDogNHJlbTtcXG4gIGhlaWdodDogMS44cmVtO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTAwLCAxMDAsIDEwMCk7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcbi5leHBhbmQtYnV0dG9uIHtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxufVxcblxcbi5hZGQtYnV0dG9uIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG59XFxuLnNocmluay1idXR0b24sXFxuLmVkaXQtYnV0dG9uIHtcXG4gIGdyaWQtcm93OiA0IC8gNTtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG5cXG59XFxuXFxuLmRlbC1idXR0b24ge1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgd2lkdGg6IDJyZW07XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLnNocmluay1idXR0b24ge1xcbiAgd2lkdGg6IDRyZW07XFxuICBoZWlnaHQ6IDEuOHJlbTtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTAwLCAxMDAsIDEwMCk7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9Gb290ZXIgICovXFxuLmZvb3Rlci1jb250YWluZXIge1xcbiAgLyogYm9yZGVyOiAycHggc29saWQgbGlnaHRjb3JhbDsgKi9cXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGJhY2tncm91bmQ6IHJnYig0MCwgNDAsIDQwKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xcbiAgY29sb3I6IGJlaWdlO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvb3Rlci1hZGQge1xcbiAgZ3JpZC1jb2x1bW46IDMgLyA0O1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLmZvb3Rlci1jb250YWluZXIgPiBpbnB1dCB7XFxuICBncmlkLWNvbHVtbjogNSAvIDY7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHdpZHRoOiAxNHJlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLGtDQUFrQztBQUNwQzs7QUFFQSxvREFBb0Q7QUFDcEQ7RUFDRSw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQSxrREFBa0Q7QUFDbEQ7RUFDRSxtQ0FBbUM7RUFDbkMsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDRDQUE0QztFQUM1QyxzQ0FBc0M7RUFDdEMsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1COztBQUVyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix3QkFBd0I7QUFDMUI7QUFDQSxtREFBbUQ7O0FBRW5EO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsYUFBYTtBQUNmOztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLGtDQUFrQztBQUNwQzs7QUFFQTs7Ozs7R0FLRzs7QUFFSCwwREFBMEQ7QUFDMUQ7O0VBRUUsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLG1DQUFtQztFQUNuQyxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFDQSx3REFBd0Q7QUFDeEQ7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsNEJBQTRCO0VBQzVCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG9FQUFvRTtBQUN0RTs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsK0JBQStCO0VBQy9CLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsNkJBQTZCOztBQUUvQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtBQUNBLGVBQWU7QUFDZjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7Ozs7RUFJRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBOztFQUVFLGVBQWU7RUFDZixrQkFBa0I7O0FBRXBCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLDZCQUE2QjtBQUMvQjtBQUNBLG9EQUFvRDtBQUNwRDtFQUNFLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTBmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDEwMGZyO1xcbn1cXG5cXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vSGVhZGVyICAqL1xcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIHNhbG1vbjsgKi9cXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGJhY2tncm91bmQ6IHJnYig0MCwgNDAsIDQwKTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmhlYWRlci10aXRsZSB7XFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9TaWRlICAqL1xcbi5zaWRlLWNvbnRhaW5lciB7XFxuICAvKiBib3JkZXI6IDJweCBzb2xpZCBncmVlbnllbGxvdzsgKi9cXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGJhY2tncm91bmQ6IHJnYig0MCwgNDAsIDQwKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5zaWRlLW1lbnUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAwLjVmciAwLjFmciAxMGZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDFmcik7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNpZGUtYnV0dG9uIHtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxufVxcblxcbi5zaWRlLWJ1dHRvbjpudGgtY2hpbGQoMSkge1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgZ3JpZC1jb2x1bW46IDMgLyAxMDtcXG5cXG59XFxuXFxuLnNpZGUtYnV0dG9uOm50aC1jaGlsZCgyKSB7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxuICBncmlkLWNvbHVtbjogMyAvIDEwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIC8qIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB3aGl0ZXNtb2tlOyAqL1xcbn1cXG5cXG4uc2lkZS1idXR0b246bnRoLWNoaWxkKDMpIHtcXG4gIGdyaWQtcm93OiA0IC8gNTtcXG59XFxuXFxuLnNpZGUtcHJvamVjdC1jb250YWluZXIge1xcbiAgZ3JpZC1yb3c6IDUgLyA2O1xcbiAgZ3JpZC1jb2x1bW46IDQgLyAxMDtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG4uc2lkZS1wcm9qZWN0LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbn1cXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vSW5ib3ggICovXFxuXFxuLmNvbnRlbnQge1xcbiAgZ3JpZC1yb3c6IDEgLyA0O1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgYmFja2dyb3VuZDogcmdiKDU1LCA1NSwgNTUpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmluYm94LWNvbnRlbnQsXFxuLnByb2plY3QtY29udGVudCB7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuMWZyIDFmciAxMGZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyIDFmcjtcXG59XFxuXFxuLyogLnN0b3JhZ2UtY29udGVudCB7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuMWZyIDFmciAxMGZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyIDFmcjtcXG59ICovXFxuXFxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0luYm94IEhlYWRlciAgKi9cXG4uaW5ib3gtaGVhZGVyLWNvbnRhaW5lcixcXG4ucHJvamVjdC1oZWFkZXItY29udGFpbmVyIHtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHdoaXRlc21va2U7XFxuICBhbGlnbi1pdGVtczogZW5kO1xcbn1cXG5cXG4uaW5ib3gtdGl0bGUsXFxuLnByb2plY3QtdGl0bGUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbn1cXG5cXG4ubmV3LXRvZG8tZGl2LFxcbi5uZXctcHJvamVjdC1kaXYge1xcbiAgZ3JpZC1jb2x1bW46IDMgLyA0O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEuNWZyIDEwOXB4O1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaW5ib3gtYWRkLFxcbi5wcm9qZWN0LWFkZCB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDAuMjhyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG59XFxuXFxuLm5ldy10b2RvIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAwLjVyZW07XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5uZXctcHJvamVjdC1kaXYgc2VsZWN0IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDAsIDQwLCA0MCwgMCk7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAwLjVyZW07XFxufVxcbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9JbmJveCBDYXJkICAqL1xcbi5jYXJkLWNvbnRhaW5lciB7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNhcmQtaXRlbSxcXG4uY2FyZC1pdGVtLXNocmluayB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQwLCA0MCwgNDApO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyMDBweCwgMWZyKSBtaW5tYXgoMTQwcHgsIG1heC1jb250ZW50KTtcXG59XFxuXFxuLnRvZG8tZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaW5wdXQsXFxuLmNhcmQtaXRlbSBzZWxlY3Qge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MCwgNDAsIDQwLCAwKTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG5cXG59XFxuXFxuLmNhcmQtY29udGFpbmVyIGlucHV0Om50aC1jaGlsZCgxKSB7XFxuICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi5jYXJkLWNvbnRhaW5lciBpbnB1dDpudGgtY2hpbGQoMikge1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4uY2FyZC1jb250YWluZXIgaW5wdXQ6bnRoLWNoaWxkKDMpIHtcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG59XFxuXFxuLmNhcmQtaXRlbSBzZWxlY3Qge1xcbmdyaWQtcm93OiA0IC8gNTtcXG59XFxuXFxuLmNhcmQtdGl0bGUge1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4uY2FyZC1kZXNjcmlwdCB7XFxuICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbi5jYXJkLWRhdGUge1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cXG4uY2FyZC1wcmlvcml0eSB7XFxuICBncmlkLXJvdzogNCAvIDU7XFxufVxcblxcbi5hZGQtYnV0dG9uLFxcbi5lZGl0LWJ1dHRvbixcXG4uZGVsLWJ1dHRvbixcXG4uZXhwYW5kLWJ1dHRvbiB7XFxuICB3aWR0aDogNHJlbTtcXG4gIGhlaWdodDogMS44cmVtO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTAwLCAxMDAsIDEwMCk7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcbi5leHBhbmQtYnV0dG9uIHtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxufVxcblxcbi5hZGQtYnV0dG9uIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG59XFxuLnNocmluay1idXR0b24sXFxuLmVkaXQtYnV0dG9uIHtcXG4gIGdyaWQtcm93OiA0IC8gNTtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG5cXG59XFxuXFxuLmRlbC1idXR0b24ge1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgd2lkdGg6IDJyZW07XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLnNocmluay1idXR0b24ge1xcbiAgd2lkdGg6IDRyZW07XFxuICBoZWlnaHQ6IDEuOHJlbTtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTAwLCAxMDAsIDEwMCk7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9Gb290ZXIgICovXFxuLmZvb3Rlci1jb250YWluZXIge1xcbiAgLyogYm9yZGVyOiAycHggc29saWQgbGlnaHRjb3JhbDsgKi9cXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGJhY2tncm91bmQ6IHJnYig0MCwgNDAsIDQwKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xcbiAgY29sb3I6IGJlaWdlO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvb3Rlci1hZGQge1xcbiAgZ3JpZC1jb2x1bW46IDMgLyA0O1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLmZvb3Rlci1jb250YWluZXIgPiBpbnB1dCB7XFxuICBncmlkLWNvbHVtbjogNSAvIDY7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHdpZHRoOiAxNHJlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBcbiAgZWxlbWVudEZhY3RvcnksIFxuICBmb3JtRmFjdG9yeSwgXG4gIGlucHV0RmFjdG9yeSwgXG4gIHNlbGVjdEZhY3RvcnksIFxuICBidXR0b25GYWN0b3J5XG59IGZyb20gJy4vZmFjdG9yeSc7XG5cbmZ1bmN0aW9uIGFkZEJ1dHRvbkxpc3RlbmVyKGFkZCwgaXRlbSwgdGl0bGUsIGRlc2NyaXB0LCBkYXRlLCBwcmlvcml0eSkge1xuICBhZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBjYXJkU2hyaW5rKFxuICAgICAgaXRlbSxcbiAgICAgIHRpdGxlLnZhbHVlLFxuICAgICAgZGVzY3JpcHQudmFsdWUsXG4gICAgICBkYXRlLnZhbHVlLFxuICAgICAgcHJpb3JpdHksXG4gICAgKVxuICAgIGl0ZW0ucmVtb3ZlKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBleHBhbmRCdXR0b25MaXN0ZW5lcihleHBhbmQsIGl0ZW0sIHRpdGxlLCBkZXNjcmlwdCwgZGF0ZSwgcHJpb3JpdHkpIHtcbiAgZXhwYW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY2FyZE91dHB1dCggXG4gICAgICBpdGVtLFxuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcmlwdCxcbiAgICAgIGRhdGUsXG4gICAgICBwcmlvcml0eSxcbiAgICApXG4gICAgaXRlbS5yZW1vdmUoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVkaXRCdXR0b25MaXN0ZW5lcihlZGl0LCBpdGVtLCB0aXRsZSwgZGVzY3JpcHQsIGRhdGUsIHByaW9yaXR5KSB7XG4gIGNvbnN0IHRhcmdldCA9IGZpbmRFbGVtZW50KCkuY2FyZENvbnRhaW5lcjtcbiAgY29uc3QgZWRpdENhcmQgPSBjYXJkRmFjdG9yeSgnJywgJycsICcnLCAnU2F2ZScsIHRpdGxlLCBkZXNjcmlwdCwgZGF0ZSwgcHJpb3JpdHkpLmNhcmRJdGVtO1xuXG4gIGNvbnNvbGUubG9nKHByaW9yaXR5LnNlbGVjdGVkSW5kZXgpO1xuICBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgdGFyZ2V0Lmluc2VydEJlZm9yZShlZGl0Q2FyZCwgaXRlbSk7XG4gICAgaXRlbS5yZW1vdmUoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlbEJ1dHRvbkxpc3RlbmVyKGRlbCwgaXRlbSkge1xuICBkZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBpdGVtLnJlbW92ZSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2hyaW5rQnV0dG9uTGlzdGVuZXIoc2hyaW5rLCBpdGVtLCB0aXRsZSwgZGVzY3JpcHQsIGRhdGUsIHByaW9yaXR5KSB7XG4gIHNocmluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGNhcmRTaHJpbmsoXG4gICAgICBpdGVtLFxuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcmlwdCxcbiAgICAgIGRhdGUsXG4gICAgICBwcmlvcml0eSxcbiAgICApXG4gICAgaXRlbS5yZW1vdmUoKTtcbn0pO1xufVxuXG5jb25zdCBjYXJkRmFjdG9yeSA9ICh0aXRsZSwgZGVzY3JpcHQsIGRhdGUsIGJ1dHRvbiwgZWRpdFRpdGxlLCBlZGl0RGVzLCBlZGl0RGF0ZSwgZWRpdFByaSkgPT4ge1xuICBjb25zdCBjYXJkSXRlbSA9IGVsZW1lbnRGYWN0b3J5KCdjYXJkLWl0ZW0nKS5lbGVtZW50O1xuICBjb25zdCBmb3JtID0gZm9ybUZhY3RvcnkoJ3RvZG8tZm9ybScpLmVsZW1lbnQ7XG4gIGNvbnN0IGNhcmRUaXRsZSA9IGlucHV0RmFjdG9yeSgndGV4dCcsIHRpdGxlLCBlZGl0VGl0bGUpLmVsZW1lbnQ7XG4gIGNvbnN0IGNhcmREZXNjcmlwdCA9IGlucHV0RmFjdG9yeSgndGV4dCcsIGRlc2NyaXB0LCBlZGl0RGVzKS5lbGVtZW50O1xuICBjb25zdCBjYXJkRGF0ZSA9IGlucHV0RmFjdG9yeSgnZGF0ZScsIGRhdGUsIGVkaXREYXRlKS5lbGVtZW50O1xuICBjb25zdCBjYXJkUHJpb3JpdHkgPSBzZWxlY3RGYWN0b3J5KCdQcmlvcml0eScsICdIaWdoJywgJ05vcm1hbCcsICdMb3cnLCBlZGl0UHJpKS5lbGVtZW50O1xuICBjb25zdCBhZGQgPSBidXR0b25GYWN0b3J5KCdidXR0b24nLCAnYWRkLWJ1dHRvbicsIGJ1dHRvbikuZWxlbWVudDtcblxuICBhZGRCdXR0b25MaXN0ZW5lcihhZGQsIGNhcmRJdGVtLCBjYXJkVGl0bGUsIGNhcmREZXNjcmlwdCwgY2FyZERhdGUsIGNhcmRQcmlvcml0eSApO1xuICBcbiAgaWYgKGVkaXRQcmkgIT09IHVuZGVmaW5lZCkge1xuICAgIGxldCBzZWxlY3RlZCA9IGVkaXRQcmkuc2VsZWN0ZWRJbmRleDtcbiAgICBjYXJkUHJpb3JpdHkub3B0aW9uc1tzZWxlY3RlZF0uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xuICB9XG5cbiAgZm9ybS5hcHBlbmQoY2FyZFRpdGxlLCBjYXJkRGVzY3JpcHQsIGNhcmREYXRlLCBjYXJkUHJpb3JpdHkpO1xuICBjYXJkSXRlbS5hcHBlbmQoZm9ybSwgYWRkKTtcblxuICByZXR1cm4geyBjYXJkSXRlbSwgY2FyZFRpdGxlLCBjYXJkRGVzY3JpcHQsIGNhcmREYXRlLCBjYXJkUHJpb3JpdHkgfTtcbn1cblxuZnVuY3Rpb24gY2FyZFNocmluayhpdGVtLCB0aXRsZSwgZGVzY3JpcHQsIGRhdGUsIHByaW9yaXR5KSB7XG4gIGNvbnN0IGNhcmRDb250YWluZXIgPSBmaW5kRWxlbWVudCgpLmNhcmRDb250YWluZXI7XG4gIGNvbnN0IGNhcmRJdGVtID0gZWxlbWVudEZhY3RvcnkoJ2NhcmQtaXRlbS1zaHJpbmsnKS5lbGVtZW50O1xuICBjb25zdCBjYXJkVGl0bGUgPSBlbGVtZW50RmFjdG9yeSgnY2FyZC10aXRsZS1zaHJpbmsnKS5lbGVtZW50O1xuICBjb25zdCBleHBhbmQgPSBidXR0b25GYWN0b3J5KCdidXR0b24nLCAnZXhwYW5kLWJ1dHRvbicsICdFeHBhbmQnKS5lbGVtZW50O1xuICBjb25zdCBkZWwgPSBidXR0b25GYWN0b3J5KCdidXR0b24nLCAnZGVsLWJ1dHRvbicsICdYJykuZWxlbWVudDtcblxuICBjYXJkVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICBjYXJkSXRlbS5hcHBlbmQoY2FyZFRpdGxlLCBleHBhbmQsIGRlbClcbiAgY2FyZENvbnRhaW5lci5pbnNlcnRCZWZvcmUoY2FyZEl0ZW0sIGl0ZW0pXG5cbiAgZXhwYW5kQnV0dG9uTGlzdGVuZXIoZXhwYW5kLCBjYXJkSXRlbSwgdGl0bGUsIGRlc2NyaXB0LCBkYXRlLCBwcmlvcml0eSk7XG4gIGRlbEJ1dHRvbkxpc3RlbmVyKGRlbCwgY2FyZEl0ZW0pO1xufVxuXG5mdW5jdGlvbiBjYXJkT3V0cHV0IChpdGVtLCB0aXRsZSwgZGVzY3JpcHQsIGRhdGUsIHByaW9yaXR5KSB7XG4gIGNvbnN0IGNhcmRDb250YWluZXIgPSBmaW5kRWxlbWVudCgpLmNhcmRDb250YWluZXI7XG4gIGNvbnN0IGNhcmRJdGVtID0gZWxlbWVudEZhY3RvcnkoJ2NhcmQtaXRlbScpLmVsZW1lbnQ7XG4gIGNvbnN0IGNhcmRUaXRsZSA9IGVsZW1lbnRGYWN0b3J5KCdjYXJkLXRpdGxlJykuZWxlbWVudDtcbiAgY29uc3QgY2FyZERlc2NyaXB0ID0gZWxlbWVudEZhY3RvcnkoJ2NhcmQtZGVzY3JpcHQnKS5lbGVtZW50O1xuICBjb25zdCBjYXJkRGF0ZSA9IGVsZW1lbnRGYWN0b3J5KCdjYXJkLWRhdGUnKS5lbGVtZW50O1xuICBjb25zdCBjYXJkUHJpb3JpdHkgPSBlbGVtZW50RmFjdG9yeSgnY2FyZC1wcmlvcml0eScpLmVsZW1lbnQ7XG4gIGNvbnN0IGVkaXQgPSBidXR0b25GYWN0b3J5KCdidXR0b24nLCAnZWRpdC1idXR0b24nLCdFZGl0JykuZWxlbWVudDtcbiAgY29uc3QgZGVsID0gYnV0dG9uRmFjdG9yeSgnYnV0dG9uJywgJ2RlbC1idXR0b24nLCAnWCcpLmVsZW1lbnQ7XG4gIGNvbnN0IHNocmluayA9IGJ1dHRvbkZhY3RvcnkoJ2J1dHRvbicsICdzaHJpbmstYnV0dG9uJywgJ1NocmluaycpLmVsZW1lbnQ7XG5cbiAgY2FyZFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG4gIGNhcmREZXNjcmlwdC50ZXh0Q29udGVudCA9IGRlc2NyaXB0O1xuICBjYXJkRGF0ZS50ZXh0Q29udGVudCA9IGRhdGU7XG4gIGNhcmRQcmlvcml0eS50ZXh0Q29udGVudCA9ICdQcmlvcml0eTogJyArIHByaW9yaXR5LnZhbHVlO1xuXG4gIGNhcmRJdGVtLmFwcGVuZChjYXJkVGl0bGUsIGNhcmREZXNjcmlwdCwgY2FyZERhdGUsIGNhcmRQcmlvcml0eSwgc2hyaW5rLCBlZGl0LCBkZWwpO1xuICBjYXJkQ29udGFpbmVyLmluc2VydEJlZm9yZShjYXJkSXRlbSwgaXRlbSlcblxuICBlZGl0QnV0dG9uTGlzdGVuZXIoZWRpdCwgY2FyZEl0ZW0sIHRpdGxlLCBkZXNjcmlwdCwgZGF0ZSwgcHJpb3JpdHkpO1xuICBkZWxCdXR0b25MaXN0ZW5lcihkZWwsIGNhcmRJdGVtKTtcbiAgc2hyaW5rQnV0dG9uTGlzdGVuZXIoc2hyaW5rLCBjYXJkSXRlbSwgdGl0bGUsIGRlc2NyaXB0LCBkYXRlLCBwcmlvcml0eSk7XG59XG5cbmZ1bmN0aW9uIGZpbmRFbGVtZW50KCkge1xuICBjb25zdCBuZXdCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRvZG8tZGl2Jyk7XG4gIGNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1jb250YWluZXInKTtcblxuICByZXR1cm4geyBuZXdCdXR0b24sIGNhcmRDb250YWluZXIgfVxuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG9DbGljaygpIHtcbiAgY29uc3QgdGFyZ2V0ID0gZmluZEVsZW1lbnQoKS5uZXdCdXR0b247XG4gIGlmICh0YXJnZXQgIT09IG51bGwpIHtcbiAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRDYXJkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRDYXJkKCkge1xuICBjb25zdCB0YXJnZXQgPSBmaW5kRWxlbWVudCgpLmNhcmRDb250YWluZXI7XG4gIGNvbnN0IG5ld0NhcmQgPSBjYXJkRmFjdG9yeSgnTmV3IFRpdGxlJywgJ05ldyBEZXNjcmlwdGlvbicsICdOZXcgRGF0ZScsICdBZGQnKS5jYXJkSXRlbTtcbiAgdGFyZ2V0LmFwcGVuZENoaWxkKG5ld0NhcmQpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVUb2RvQ2xpY2sgfTsiLCJjb25zdCBlbGVtZW50RmFjdG9yeSA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKG5hbWUpO1xuICByZXR1cm4geyBlbGVtZW50IH07XG59O1xuXG5jb25zdCBmb3JtRmFjdG9yeSA9IChjbHMpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNscyk7XG4gIC8vIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhY3Rpb24nLCBhY3Rpb24pO1xuICAvLyBlbGVtZW50LnNldEF0dHJpYnV0ZSgnbWV0aG9kJywgbWV0aG9kKTtcbiAgcmV0dXJuIHsgZWxlbWVudCB9O1xufTtcblxuY29uc3QgaW5wdXRGYWN0b3J5ID0gKHR5cGUsIHBsY2hvbGRlciwgdmFsdWUgPSAnJykgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCB0eXBlKTtcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgcGxjaG9sZGVyKTtcbiAgZWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICByZXR1cm4geyBlbGVtZW50IH07XG59XG5cbmNvbnN0IHNlbGVjdEZhY3RvcnkgPSAobGFiZWwsIG9wMSwgb3AyLCBvcDMpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBjb25zdCBncm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGdyb3VwJyk7XG4gIGNvbnN0IG9wdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgY29uc3Qgb3B0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBjb25zdCBvcHRpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cbiAgZ3JvdXAuc2V0QXR0cmlidXRlKCdsYWJlbCcsIGxhYmVsKTtcbiAgb3B0aW9uMS50ZXh0Q29udGVudCA9IG9wMTtcbiAgb3B0aW9uMi50ZXh0Q29udGVudCA9IG9wMjtcbiAgLy8gb3B0aW9uMi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XG4gIG9wdGlvbjMudGV4dENvbnRlbnQgPSBvcDM7XG4gIGdyb3VwLmFwcGVuZChvcHRpb24xLCBvcHRpb24yLCBvcHRpb24zKTtcbiAgZWxlbWVudC5hcHBlbmQoZ3JvdXApO1xuXG4gIHJldHVybiB7IGVsZW1lbnQgfVxufVxuXG5jb25zdCBidXR0b25GYWN0b3J5ID0gKHR5cGUsIGNscywgdGV4dCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0eXBlJywgdHlwZSk7XG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgcmV0dXJuIHsgZWxlbWVudCB9XG59XG5cbmNvbnN0IGFkZFByakZhY3RvcnkgPSAobGFiZWwsIC4uLm9wcykgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIGNvbnN0IGdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0Z3JvdXAnKTtcbiAgXG4gIGNvbnNvbGUubG9nKG9wcyk7XG4gIGdyb3VwLnNldEF0dHJpYnV0ZSgnbGFiZWwnLCBsYWJlbCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGRpdi50ZXh0Q29udGVudCA9IG9wc1swXVtpXTtcbiAgICBncm91cC5hcHBlbmQoZGl2KTtcbiAgfVxuXG4gIGVsZW1lbnQuYXBwZW5kKGdyb3VwKTtcblxuICByZXR1cm4geyBlbGVtZW50IH07XG59XG5cbmV4cG9ydCB7IGVsZW1lbnRGYWN0b3J5LCBpbnB1dEZhY3RvcnksIGZvcm1GYWN0b3J5LCBzZWxlY3RGYWN0b3J5LCBidXR0b25GYWN0b3J5LCBhZGRQcmpGYWN0b3J5IH0iLCJpbXBvcnQgeyBlbGVtZW50RmFjdG9yeSB9IGZyb20gXCIuL2ZhY3RvcnlcIjtcbmltcG9ydCB7IGNyZWF0ZVByb2plY3RDb250ZW50LCBhZGRUb1Byb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgY3JlYXRlVG9kb0NsaWNrIH0gZnJvbSBcIi4vYWRkLWNhcmRcIjtcbmltcG9ydCB7IHB1dFN0b3JhZ2UsIHNob3dTdG9yYWdlLCBwdXRQcm9qZWN0LCBmaW5kS2V5cyB9IGZyb20gJy4vc3RvcmFnZSc7XG5cbmZ1bmN0aW9uIGZpbmRFbGVtZW50KCkge1xuICBjb25zdCBmb290ZXJBZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyLWFkZCcpO1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXItY29udGFpbmVyID4gaW5wdXQnKTtcbiAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlLXByb2plY3QtY29udGFpbmVyJyk7XG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgY29uc3QgcHJvamVjdENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250ZW50Jyk7XG4gIGNvbnN0IHdpcGVDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQgPiAqJyk7XG4gIGNvbnN0IHdpcGVTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtZGl2IHNlbGVjdCcpO1xuICByZXR1cm4geyBmb290ZXJBZGQsIHByb2plY3ROYW1lLCBwcm9qZWN0RGl2LCBtYWluQ29udGVudCwgXG4gICAgcHJvamVjdENvbnRlbnQsIHdpcGVDb250ZW50LCB3aXBlU2VsZWN0IH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyQ2xpY2soKSB7XG4gIGNvbnN0IGFkZCA9IGZpbmRFbGVtZW50KCkuZm9vdGVyQWRkO1xuICBcbiAgYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgbGV0IHByb2plY3ROYW1lID0gZmluZEVsZW1lbnQoKS5wcm9qZWN0TmFtZTtcbiAgICBjcmVhdGVTaWRlUHJvamVjdChwcm9qZWN0TmFtZS52YWx1ZSk7XG4gICAgcHJvamVjdE5hbWUudmFsdWUgPSAnJztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGVQcm9qZWN0KHByb2plY3QpIHtcbiAgY29uc3QgcHJvamVjdEl0ZW0gPSBlbGVtZW50RmFjdG9yeSgnc2lkZS1wcm9qZWN0LXRpdGxlJykuZWxlbWVudDtcbiAgY29uc3QgcHJvamVjdERpdiA9IGZpbmRFbGVtZW50KCkucHJvamVjdERpdjtcblxuICBwcm9qZWN0SXRlbS50ZXh0Q29udGVudCA9IHByb2plY3Q7XG4gIHByb2plY3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgbG9hZFByb2plY3QocHJvamVjdCwgcHJvamVjdEl0ZW0pO1xuICAgIH0sIHsgb25jZTogdHJ1ZSB9KTtcbiAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0SXRlbSk7XG4gIFxuICBwdXRQcm9qZWN0KCk7XG4gIGZpbmRLZXlzKCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRQcm9qZWN0KHByb2plY3QsIHNpZGVEaXYpIHtcbiAgY29uc3QgbG9hZCA9IGZpbmRFbGVtZW50KCkubWFpbkNvbnRlbnQ7XG5cbiAgZmluZEVsZW1lbnQoKS53aXBlQ29udGVudC5yZW1vdmUoKTtcbiAgY29uc3QgcHJvamVjdENvbnRlbnQgPSBjcmVhdGVQcm9qZWN0Q29udGVudChwcm9qZWN0KVxuICBwdXRTdG9yYWdlKHByb2plY3QsIHByb2plY3RDb250ZW50KTtcbiAgbG9hZC5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGVudCk7XG4gIFxuICBjcmVhdGVUb2RvQ2xpY2soKTsgXG4gIGFkZFRvUHJvamVjdCgpO1xuXG4gIHNpZGVEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcmVsb2FkUHJvamVjdChwcm9qZWN0KVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVsb2FkUHJvamVjdChwcm9qZWN0KSB7XG4gIGNvbnN0IGxvYWQgPSBmaW5kRWxlbWVudCgpLm1haW5Db250ZW50O1xuXG4gIGZpbmRFbGVtZW50KCkud2lwZUNvbnRlbnQucmVtb3ZlKCk7XG4gIGxvYWQuYXBwZW5kQ2hpbGQoc2hvd1N0b3JhZ2UoKS5zdG9yYWdlW3Byb2plY3RdKTtcbiAgZmluZEVsZW1lbnQoKS53aXBlU2VsZWN0LnJlbW92ZSgpO1xuXG4gIHB1dFByb2plY3QoKTtcbiAgZmluZEtleXMoKTtcbiAgYWRkVG9Qcm9qZWN0KCk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUZvb3RlckNsaWNrIH07IiwiaW1wb3J0IHsgZWxlbWVudEZhY3RvcnksIGlucHV0RmFjdG9yeSwgYnV0dG9uRmFjdG9yeSB9IGZyb20gJy4vZmFjdG9yeSc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyRGl2ID0gZWxlbWVudEZhY3RvcnkoJ2Zvb3Rlci1jb250YWluZXInKS5lbGVtZW50O1xuICBjb25zdCBjb250ZW50ID0gY3JlYXRlRm9vdGVyQ29udGVudCgpO1xuXG4gIGZvb3RlckRpdi5hcHBlbmQoY29udGVudC5mb290ZXJBZGQsIGNvbnRlbnQuZm9vdGVyTmV3UHJqKTtcblxuICByZXR1cm4gZm9vdGVyRGl2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXJDb250ZW50KCkge1xuICBjb25zdCBmb290ZXJBZGQgPSBlbGVtZW50RmFjdG9yeSgnZm9vdGVyLWFkZCcpLmVsZW1lbnQ7XG4gIGNvbnN0IGZvb3Rlck5ld1ByaiA9IGlucHV0RmFjdG9yeSgndGV4dCcsICdOZXcgUHJvamVjdCcpLmVsZW1lbnQ7XG5cbiAgZm9vdGVyQWRkLnRleHRDb250ZW50ID0gJysnO1xuXG4gIHJldHVybiB7IGZvb3RlckFkZCwgZm9vdGVyTmV3UHJqIH07XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUZvb3RlciwgY3JlYXRlRm9vdGVyQ29udGVudCB9OyIsImltcG9ydCB7IGVsZW1lbnRGYWN0b3J5IH0gZnJvbSBcIi4vZmFjdG9yeVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlckRpdiA9IGVsZW1lbnRGYWN0b3J5KCdoZWFkZXItY29udGFpbmVyJykuZWxlbWVudDtcbiAgY29uc3QgY29udGVudCA9IGNyZWF0ZUhlYWRlckNvbnRlbnQoKTtcblxuICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgcmV0dXJuIGhlYWRlckRpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyQ29udGVudCgpIHtcbiAgY29uc3QgaGVhZGVyVGl0bGUgPSBlbGVtZW50RmFjdG9yeSgnaGVhZGVyLXRpdGxlJykuZWxlbWVudDtcblxuICBoZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9ICdUb2RvIExpc3QnO1xuXG4gIHJldHVybiBoZWFkZXJUaXRsZTtcblxufVxuXG5leHBvcnQgeyBjcmVhdGVIZWFkZXIgfTsiLCJpbXBvcnQgeyBlbGVtZW50RmFjdG9yeSB9IGZyb20gJy4vZmFjdG9yeSc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUluYm94Q29udGVudCgpIHtcbiAgY29uc3QgaW5ib3hDb250ZW50ID0gZWxlbWVudEZhY3RvcnkoJ2luYm94LWNvbnRlbnQnKS5lbGVtZW50O1xuICBjb25zdCBoZWFkZXJDb250ZW50ID0gY3JlYXRlSW5ib3hIZWFkZXIoKTtcbiAgY29uc3QgY2FyZENvbnRhaW5lciA9IGVsZW1lbnRGYWN0b3J5KCdjYXJkLWNvbnRhaW5lcicpLmVsZW1lbnQ7XG5cbiAgaW5ib3hDb250ZW50LmFwcGVuZChoZWFkZXJDb250ZW50LCBjYXJkQ29udGFpbmVyKTtcblxuICByZXR1cm4gaW5ib3hDb250ZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbmJveEhlYWRlcigpIHtcbiAgY29uc3QgaW5ib3hIZWFkZXJEaXYgPSBlbGVtZW50RmFjdG9yeSgnaW5ib3gtaGVhZGVyLWNvbnRhaW5lcicpLmVsZW1lbnQ7XG4gIGNvbnN0IGluYm94VGl0bGUgPSBlbGVtZW50RmFjdG9yeSgnaW5ib3gtdGl0bGUnKS5lbGVtZW50O1xuICBjb25zdCBuZXdUb2RvRGl2ID0gZWxlbWVudEZhY3RvcnkoJ25ldy10b2RvLWRpdicpLmVsZW1lbnQ7XG4gIGNvbnN0IGluYm94QWRkID0gZWxlbWVudEZhY3RvcnkoJ2luYm94LWFkZCcpLmVsZW1lbnQ7XG4gIGNvbnN0IG5ld1RvZG8gPSBlbGVtZW50RmFjdG9yeSgnbmV3LXRvZG8nKS5lbGVtZW50O1xuXG4gIGluYm94VGl0bGUudGV4dENvbnRlbnQgPSAnSW5ib3gnO1xuICBpbmJveEFkZC50ZXh0Q29udGVudCA9ICcrJztcbiAgbmV3VG9kby50ZXh0Q29udGVudCA9ICdOZXcgVG9kbyc7XG5cbiAgbmV3VG9kb0Rpdi5hcHBlbmQoaW5ib3hBZGQsIG5ld1RvZG8pO1xuICBpbmJveEhlYWRlckRpdi5hcHBlbmQoaW5ib3hUaXRsZSwgbmV3VG9kb0Rpdik7XG5cbiAgcmV0dXJuIGluYm94SGVhZGVyRGl2O1xufVxuXG5leHBvcnQgeyBjcmVhdGVJbmJveENvbnRlbnQgfTsiLCJpbXBvcnQgeyBlbGVtZW50RmFjdG9yeSB9IGZyb20gJy4vZmFjdG9yeSc7XG5pbXBvcnQgeyBjcmVhdGVIZWFkZXIgfSBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgeyBjcmVhdGVGb290ZXIgfSBmcm9tICcuL2Zvb3Rlcic7XG5pbXBvcnQgeyBjcmVhdGVTaWRlIH0gZnJvbSAnLi9zaWRlJztcbmltcG9ydCB7IGNyZWF0ZUluYm94Q29udGVudCB9IGZyb20gJy4vaW5ib3gnO1xuXG5mdW5jdGlvbiBjcmVhdGVEaXYoKSB7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBlbGVtZW50RmFjdG9yeSgnY29udGVudCcpLmVsZW1lbnQ7XG5cbiAgcmV0dXJuIGNvbnRlbnREaXY7XG59XG5cbmZ1bmN0aW9uIHBsYWNlVG9Db250YWluZXIoKSB7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBwbGFjZVRvUGFyZW50KCkuY29udGVudERpdjtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVNpZGUoKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50RGl2KTtcbn1cblxuZnVuY3Rpb24gcGxhY2VUb1BhcmVudCgpIHtcbiAgY29uc3QgY29udGVudERpdiA9IGNyZWF0ZURpdigpO1xuICBcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChjcmVhdGVJbmJveENvbnRlbnQoKSk7XG5cbiAgcmV0dXJuIHsgY29udGVudERpdiB9O1xufVxuXG5leHBvcnQgeyBwbGFjZVRvQ29udGFpbmVyIH07IiwiaW1wb3J0IHsgZWxlbWVudEZhY3RvcnksIGFkZFByakZhY3RvcnkgfSBmcm9tIFwiLi9mYWN0b3J5XCI7XG5pbXBvcnQgeyBzaG93S2V5cyB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdENvbnRlbnQocHJvamVjdCkge1xuICBjb25zdCBwcm9qZWN0Q29udGVudCA9IGVsZW1lbnRGYWN0b3J5KCdwcm9qZWN0LWNvbnRlbnQnKS5lbGVtZW50O1xuICBjb25zdCBoZWFkZXJDb250ZW50ID0gY3JlYXRlUHJvamVjdEhlYWRlcihwcm9qZWN0KTtcbiAgY29uc3QgY2FyZENvbnRhaW5lciA9IGVsZW1lbnRGYWN0b3J5KCdjYXJkLWNvbnRhaW5lcicpLmVsZW1lbnQ7XG5cbiAgcHJvamVjdENvbnRlbnQuYXBwZW5kKGhlYWRlckNvbnRlbnQsIGNhcmRDb250YWluZXIpO1xuXG4gIHJldHVybiBwcm9qZWN0Q29udGVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEhlYWRlcihwcm9qZWN0KSB7XG4gIGNvbnN0IHByb2plY3RIZWFkZXJEaXYgPSBlbGVtZW50RmFjdG9yeSgncHJvamVjdC1oZWFkZXItY29udGFpbmVyJykuZWxlbWVudDtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZWxlbWVudEZhY3RvcnkoJ3Byb2plY3QtdGl0bGUnKS5lbGVtZW50O1xuICBjb25zdCBuZXdQcm9qZWN0RGl2ID0gZWxlbWVudEZhY3RvcnkoJ25ldy1wcm9qZWN0LWRpdicpLmVsZW1lbnQ7XG4gIGNvbnN0IHByb2plY3RBZGQgPSBlbGVtZW50RmFjdG9yeSgncHJvamVjdC1hZGQnKS5lbGVtZW50O1xuXG4gIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3Q7XG4gIHByb2plY3RBZGQudGV4dENvbnRlbnQgPSAnKyc7XG5cbiAgbmV3UHJvamVjdERpdi5hcHBlbmQocHJvamVjdEFkZCk7XG5cbiAgcHJvamVjdEhlYWRlckRpdi5hcHBlbmQocHJvamVjdFRpdGxlLCBuZXdQcm9qZWN0RGl2KTtcblxuICByZXR1cm4gcHJvamVjdEhlYWRlckRpdjtcbn1cblxuZnVuY3Rpb24gYWRkVG9Qcm9qZWN0KCkge1xuICBjb25zdCBhZGRMaXN0ID0gc2hvd0tleXMoKTtcbiAgY29uc3QgbGlzdCA9IGFkZFByakZhY3RvcnkoJ0FkZCB0byBwcm9qZWN0JywgYWRkTGlzdCkuZWxlbWVudDtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0LWRpdicpO1xuICBkaXYuYXBwZW5kKGxpc3QpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0Q29udGVudCwgYWRkVG9Qcm9qZWN0IH07IiwiaW1wb3J0IHsgY3JlYXRlVG9kb0NsaWNrIH0gZnJvbSAnLi9hZGQtY2FyZCc7XG5pbXBvcnQgeyBwdXRTdG9yYWdlLCBzaG93U3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZSc7XG5cbmZ1bmN0aW9uIGZpbmRFbGVtZW50KCkge1xuICBjb25zdCBtZW51SW5ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZS1idXR0b246bnRoLWNoaWxkKDEpJyk7XG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgY29uc3QgaW5ib3hDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94LWNvbnRlbnQnKTtcbiAgY29uc3Qgd2lwZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCA+IConKTtcblxuICByZXR1cm4geyBtZW51SW5ib3gsIG1haW5Db250ZW50LCBpbmJveENvbnRlbnQsIHdpcGVDb250ZW50IH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGVDbGljaygpIHtcbiAgY29uc3QgaW5ib3ggPSBmaW5kRWxlbWVudCgpLm1lbnVJbmJveDtcbiAgcHV0U3RvcmFnZSgnaW5ib3gnLCBmaW5kRWxlbWVudCgpLmluYm94Q29udGVudCk7XG4gIGluYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZEluYm94KTtcbn1cblxuZnVuY3Rpb24gbG9hZEluYm94KCkge1xuICBjb25zdCBsb2FkID0gZmluZEVsZW1lbnQoKS5tYWluQ29udGVudDtcbiAgZmluZEVsZW1lbnQoKS53aXBlQ29udGVudC5yZW1vdmUoKTtcbiAgbG9hZC5hcHBlbmRDaGlsZChzaG93U3RvcmFnZSgpLnN0b3JhZ2VbJ2luYm94J10pO1xuICBjcmVhdGVUb2RvQ2xpY2soKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlU2lkZUNsaWNrIH0iLCJpbXBvcnQgeyBlbGVtZW50RmFjdG9yeSB9IGZyb20gJy4vZmFjdG9yeSc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGUoKSB7XG4gIGNvbnN0IHNpZGVEaXYgPSBlbGVtZW50RmFjdG9yeSgnc2lkZS1jb250YWluZXInKS5lbGVtZW50O1xuICBjb25zdCBjb250ZW50ID0gY3JlYXRlU2lkZUNvbnRlbnQoKS5zaWRlTWVudTtcbiAgXG4gIHNpZGVEaXYuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gIFxuICByZXR1cm4gc2lkZURpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2lkZUNvbnRlbnQoKSB7XG4gIGNvbnN0IHNpZGVNZW51ID0gZWxlbWVudEZhY3RvcnkoJ3NpZGUtbWVudScpLmVsZW1lbnQ7XG4gIGNvbnN0IHNpZGVJbmJveCA9IGVsZW1lbnRGYWN0b3J5KCdzaWRlLWJ1dHRvbicpLmVsZW1lbnQ7XG4gIGNvbnN0IHNpZGVQcm9qZWN0ID0gZWxlbWVudEZhY3RvcnkoJ3NpZGUtYnV0dG9uJykuZWxlbWVudDtcbiAgY29uc3QgcHJvamVjdERpdiA9IGVsZW1lbnRGYWN0b3J5KCdzaWRlLXByb2plY3QtY29udGFpbmVyJykuZWxlbWVudDtcbiAgc2lkZUluYm94LnRleHRDb250ZW50ID0gJ0luYm94JztcblxuICBzaWRlUHJvamVjdC50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG5cbiAgc2lkZU1lbnUuYXBwZW5kKHNpZGVJbmJveCwgc2lkZVByb2plY3QsIHByb2plY3REaXYpO1xuICBcbiAgcmV0dXJuIHsgc2lkZU1lbnUsIHNpZGVJbmJveCwgc2lkZVByb2plY3QgfTtcbn1cblxuXG5leHBvcnQgeyBjcmVhdGVTaWRlLCBjcmVhdGVTaWRlQ29udGVudCB9O1xuIiwibGV0IHN0b3JhZ2UgPSB7fTtcblxubGV0IHByb2plY3RMaXN0ID0ge307XG5cbmxldCBwcm9qZWN0S2V5cyA9IFtdO1xuXG5mdW5jdGlvbiBwdXRTdG9yYWdlKGZpbGVOYW1lLCBkaXZOYW1lKSB7XG4gIHN0b3JhZ2VbZmlsZU5hbWVdID0gZGl2TmFtZTtcbn1cblxuY29uc3Qgc2hvd1N0b3JhZ2UgPSAoKSA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKHByb2plY3RMaXN0KTtcblxuICBjb25zb2xlLmxvZyhwcm9qZWN0S2V5cyk7XG4gIHJldHVybiB7IHN0b3JhZ2UgfTtcbn07XG5cbmZ1bmN0aW9uIHB1dFByb2plY3QoKSB7XG4gIHByb2plY3RMaXN0ID0ge307XG4gIGNvbnN0IGl0ZW1MaXN0ID0gc3RvcmFnZVsnaW5ib3gnXS5jaGlsZHJlblsxXS5jaGlsZHJlbjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtTGlzdC5sZW5ndGg7IGkrKykge1xuICAgIGxldCBwcm9qZWN0ID0gaXRlbUxpc3RbaV0uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQ7XG4gICAgcHJvamVjdExpc3RbcHJvamVjdF0gPSBpdGVtTGlzdFtpXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kS2V5cygpIHtcbiAgcHJvamVjdEtleXMgPSBbXTtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHByb2plY3RMaXN0KTtcbiAgZm9yIChsZXQgaXRlbSBvZiBrZXlzKSB7XG4gICAgcHJvamVjdEtleXMucHVzaChpdGVtKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93S2V5cygpIHtcbiAgcmV0dXJuIHByb2plY3RLZXlzO1xufVxuXG5leHBvcnQgeyBwdXRTdG9yYWdlLCBzaG93U3RvcmFnZSwgcHV0UHJvamVjdCwgZmluZEtleXMsIHNob3dLZXlzIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBwbGFjZVRvQ29udGFpbmVyIH0gZnJvbSAnLi9sYXlvdXQnO1xuaW1wb3J0IHsgY3JlYXRlU2lkZUNsaWNrIH0gZnJvbSAnLi9zaWRlLWxpc3RlbmVycyc7XG5pbXBvcnQgeyBjcmVhdGVUb2RvQ2xpY2sgfSBmcm9tICcuL2FkZC1jYXJkJztcbmltcG9ydCB7IGNyZWF0ZUZvb3RlckNsaWNrIH0gZnJvbSAnLi9mb290ZXItbGlzdGVuZXJzJztcblxuKGZ1bmN0aW9uKCkge1xuICBwbGFjZVRvQ29udGFpbmVyKCk7XG59KSgpO1xuXG4oZnVuY3Rpb24oKSB7XG4gIGNyZWF0ZVNpZGVDbGljaygpO1xufSkoKTtcblxuKGZ1bmN0aW9uKCkge1xuICBjcmVhdGVUb2RvQ2xpY2soKTtcbn0pKCk7XG5cbihmdW5jdGlvbigpIHtcbiAgY3JlYXRlRm9vdGVyQ2xpY2soKTtcbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9