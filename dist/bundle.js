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
/* harmony export */   "cardShrink": () => (/* binding */ cardShrink),
/* harmony export */   "createTodoClick": () => (/* binding */ createTodoClick)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./src/factory.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/storage.js");



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
    //------------------------------------------------------------------------------------------------
    const output = (0,_storage__WEBPACK_IMPORTED_MODULE_1__.cardData)(title.value, descript.value, date.value, priority.value).data;
    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.putJSON)('inbox' ,title.value, output);
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

function changeColor(value, item) {
  switch (value) {
    case 'High':
      item.style.background = "rgba(255, 0, 0, 0.4)";
      break;
    case 'Normal':
      item.style.background = "rgba(0, 128, 0, 0.4)";
      break;  
    case 'Low':
      item.style.background = "rgba(0, 0, 255, 0.4)";
      break;
    default:
      item.style.background = "rgba(40, 40, 40)";
  }
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

  // if (editPri !== undefined) {
  //   let selected = editPri.selectedIndex;
  //   cardPriority.options[selected].setAttribute('selected', 'selected');
  // }

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
  
  if (typeof priority === 'string') {
    changeColor(priority, cardItem);
  } else {
    changeColor(priority.value, cardItem);
  }

  cardItem.append(cardTitle, expand, del)
  if (item == '') {
    cardContainer.append(cardItem)
  } else { 
    cardContainer.insertBefore(cardItem, item)
  }

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

  if (typeof priority === 'string') {
    cardPriority.textContent = 'Priority: ' + priority;
    changeColor(priority, cardItem);
  } else {
    cardPriority.textContent = 'Priority: ' + priority.value;
    changeColor(priority.value, cardItem);
  }

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
  target.addEventListener('click', addCard);
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
/* harmony export */   "createFooterClick": () => (/* binding */ createFooterClick),
/* harmony export */   "createSideProject": () => (/* binding */ createSideProject)
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
    //------------------------------------------------------------------------------------------------
    const output = (0,_storage__WEBPACK_IMPORTED_MODULE_2__.cardData)(projectName.value).data;
    (0,_storage__WEBPACK_IMPORTED_MODULE_2__.putJSON)('side', projectName.value, output);
    projectName.value = '';
  });
}

function createSideProject(project) {
  const projectItem = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('side-project-title').element;
  const projectDiv = findElement().projectDiv;

  projectItem.textContent = project;
  
  projectItem.addEventListener('click', function() {
    loadProject(project, projectItem);
    // addProjectCard();
  }, { once: false });
  
  projectDiv.appendChild(projectItem);

  // findKeys();
}

function loadProject(project, sideDiv) {
  const load = findElement().mainContent;

  findElement().wipeContent.remove();
  const projectContent = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.createProjectContent)(project)
  // putStorage(project, projectContent);
  load.appendChild(projectContent);
  
  // addToProject();

  // sideDiv.addEventListener('click', function() {
    // findKeys();
    // reloadProject(project)
  // });
}

// function reloadProject(project) {
//   const load = findElement().mainContent;
//   findElement().wipeContent.remove();
//   load.appendChild(showStorage().storage[project]);
//   findElement().wipeSelect.remove();

//   addToProject();
// }



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

/***/ "./src/read-storage.js":
/*!*****************************!*\
  !*** ./src/read-storage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkStorage": () => (/* binding */ checkStorage)
/* harmony export */ });
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout */ "./src/layout.js");
/* harmony import */ var _add_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-card */ "./src/add-card.js");
/* harmony import */ var _footer_listeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer-listeners */ "./src/footer-listeners.js");




//Check if stroage exsists
//If not, just do normal layout
//If yes, do normal and call add-cards/footer-listeners

function checkStorage(type) {
  if(!localStorage.getItem(type)) {
    return;
  } else {
    findStorage(type);
  }
}

function loadStorage(key, type) {
  const data = JSON.parse(localStorage.getItem(type));
  const title = data[key]['title'];
  const discript = data[key]['discript'];
  const date = data[key]['date'];
  const priority = data[key]['priority'];

  console.log(title, discript, date, priority);

  if (type == 'inbox') {
    (0,_add_card__WEBPACK_IMPORTED_MODULE_1__.cardShrink)('', title, discript, date, priority);
  } else if (type == 'side') {
    (0,_footer_listeners__WEBPACK_IMPORTED_MODULE_2__.createSideProject)(title);
  }

  console.log(localStorage);
}

function findStorage(type) {
  const keyList = Object.keys(JSON.parse(localStorage[type]));

  console.log(keyList);
  for (let i = 0; i < keyList.length; i++) {
    loadStorage(keyList[i], type);
  }
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
/* harmony import */ var _read_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./read-storage */ "./src/read-storage.js");
/* harmony import */ var _inbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inbox */ "./src/inbox.js");





function findElement() {
  const menuInbox = document.querySelector('.side-button:nth-child(1)');
  const mainContent = document.querySelector('.content');
  const inboxContent = document.querySelector('.inbox-content');
  const wipeContent = document.querySelector('.content > *');

  return { menuInbox, mainContent, inboxContent, wipeContent };
}

function createSideClick() {
  const inbox = findElement().menuInbox;
  // putStorage('inbox', findElement().inboxContent);
  inbox.addEventListener('click', loadInbox);
}

function loadInbox() {
  const load = findElement().mainContent;

  const p1 = new Promise((resolve) => {
    resolve(findElement().wipeContent.remove())
  });

  const p2 = new Promise((resolve) => {
    const clean = (0,_inbox__WEBPACK_IMPORTED_MODULE_3__.createInboxContent)();
    resolve(load.append(clean));
  });
  
  p1.then(() => {
    p2.then (() => {
      (0,_read_storage__WEBPACK_IMPORTED_MODULE_2__.checkStorage)('inbox');
    });
  });
    
  // createTodoClick();
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
/* harmony export */   "cardData": () => (/* binding */ cardData),
/* harmony export */   "putJSON": () => (/* binding */ putJSON),
/* harmony export */   "putStorage": () => (/* binding */ putStorage),
/* harmony export */   "showStorage": () => (/* binding */ showStorage)
/* harmony export */ });

const cardData = (title, discript, date, priority) => {
  const data = {
    title,
    discript,
    date,
    priority,
  };
  return { data };
};

function putJSON(type, key, value) {
  if (!localStorage.getItem(type)) {
    let create = {};
    create[key] = value;
    localStorage.setItem(type, JSON.stringify(create));
  } else {
    let text = JSON.parse(localStorage.getItem(type));
    text[key] = value
    localStorage.setItem(type, JSON.stringify(text));
    console.log(text);
  }
  console.log(localStorage);
}


let storage = {};

let projectList = {};

let projectKeys = [];

function putStorage(fileName, divName) {
  storage[fileName] = divName;
}

const showStorage = () => {
  // console.log(inboxJSON);
  // console.log(sideJSON);
  // console.log(localStorage.getItem('storage'));
  // console.log(storage);
  // console.log(putJSON());

  // console.log(projectKeys);
  // console.log(projectList);
  // console.log(storage['inbox'].children[1].children);
  return { storage };
};

// function findKeys() {
//   projectList = {};
//   const itemList = storage['inbox'].children[1].children;
//   for (let i = 0; i < itemList.length; i++) {
//     let project = itemList[i].children[0].textContent;
//     projectList[project] = itemList[i];
//   }
//   projectKeys = [];
//   const keys = Object.keys(projectList);
//   for (let item of keys) {
//     projectKeys.push(item);
//   }
// }

// function showKeys() {
//   return projectKeys;
// }

// export { putStorage, showStorage, findKeys, showKeys };


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
/* harmony import */ var _read_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./read-storage */ "./src/read-storage.js");







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

(0,_read_storage__WEBPACK_IMPORTED_MODULE_5__.checkStorage)('inbox');
(0,_read_storage__WEBPACK_IMPORTED_MODULE_5__.checkStorage)('side');


// localStorage.clear();



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLFNBQVMsTUFBTSxZQUFZLE9BQU8sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxRQUFRLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLFVBQVUsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyw0QkFBNEIsZUFBZSxjQUFjLDJCQUEyQiw0QkFBNEIsR0FBRyxnQkFBZ0Isa0JBQWtCLGtCQUFrQixxQ0FBcUMsdUNBQXVDLEdBQUcsOEVBQThFLGlDQUFpQyx5QkFBeUIsZ0NBQWdDLG9CQUFvQixzQkFBc0Isa0JBQWtCLEdBQUcsbUJBQW1CLHVCQUF1QixHQUFHLDBFQUEwRSxzQ0FBc0Msc0JBQXNCLHVCQUF1QixnQ0FBZ0Msa0JBQWtCLEdBQUcsZ0JBQWdCLGtCQUFrQixpREFBaUQsMkNBQTJDLDRCQUE0QixHQUFHLGtCQUFrQixzQkFBc0Isc0JBQXNCLHVCQUF1QixHQUFHLCtCQUErQixvQkFBb0Isd0JBQXdCLEtBQUssK0JBQStCLG9CQUFvQix3QkFBd0Isa0JBQWtCLDRDQUE0QyxLQUFLLCtCQUErQixvQkFBb0IsR0FBRyw2QkFBNkIsb0JBQW9CLHdCQUF3QixzQkFBc0IsR0FBRyx5QkFBeUIsc0JBQXNCLDJCQUEyQixLQUFLLG9FQUFvRSxvQkFBb0IsdUJBQXVCLGdDQUFnQyxrQkFBa0IsR0FBRyx1Q0FBdUMsc0JBQXNCLGtCQUFrQix1Q0FBdUMsdUNBQXVDLEdBQUcseUJBQXlCLHNCQUFzQixrQkFBa0IsdUNBQXVDLHVDQUF1QyxJQUFJLHdIQUF3SCxvQkFBb0IsdUJBQXVCLGtCQUFrQix1Q0FBdUMsd0NBQXdDLHFCQUFxQixHQUFHLG1DQUFtQyxvQkFBb0IsdUJBQXVCLEdBQUcsc0NBQXNDLHVCQUF1QixrQkFBa0IsMkNBQTJDLHNCQUFzQix3QkFBd0IsR0FBRywrQkFBK0Isb0JBQW9CLHVCQUF1Qix1QkFBdUIsaUJBQWlCLGtCQUFrQiw4QkFBOEIsMEJBQTBCLEdBQUcsZUFBZSxzQkFBc0IsdUJBQXVCLGdCQUFnQix1QkFBdUIsR0FBRyw2QkFBNkIsb0NBQW9DLHNCQUFzQixzQkFBc0IsdUJBQXVCLGdCQUFnQixHQUFHLDhFQUE4RSxvQkFBb0IsdUJBQXVCLGtCQUFrQiwyQkFBMkIsR0FBRyxvQ0FBb0MsaUNBQWlDLHdCQUF3QixrQkFBa0IscUJBQXFCLHNCQUFzQixzQkFBc0Isa0JBQWtCLHlFQUF5RSxHQUFHLGdCQUFnQixrQkFBa0IsMkJBQTJCLEdBQUcsK0JBQStCLG9DQUFvQyxzQkFBc0Isc0JBQXNCLGtDQUFrQyxLQUFLLHdDQUF3QyxvQkFBb0IsR0FBRyx3Q0FBd0Msb0JBQW9CLEdBQUcsd0NBQXdDLG9CQUFvQixHQUFHLHVCQUF1QixrQkFBa0IsR0FBRyxpQkFBaUIsb0JBQW9CLEdBQUcsb0JBQW9CLG9CQUFvQixHQUFHLGdCQUFnQixvQkFBb0IsR0FBRyxvQkFBb0Isb0JBQW9CLEdBQUcsK0RBQStELGdCQUFnQixtQkFBbUIsc0JBQXNCLG9CQUFvQixtQ0FBbUMsc0JBQXNCLHlCQUF5QixrQ0FBa0MsR0FBRyxrQkFBa0Isd0JBQXdCLG9CQUFvQix1QkFBdUIsR0FBRyxpQkFBaUIsdUJBQXVCLEdBQUcsaUNBQWlDLG9CQUFvQix1QkFBdUIsS0FBSyxpQkFBaUIsb0JBQW9CLHVCQUF1QixnQkFBZ0Isc0JBQXNCLEdBQUcsb0JBQW9CLGdCQUFnQixtQkFBbUIsd0JBQXdCLG9CQUFvQixtQ0FBbUMsc0JBQXNCLHlCQUF5QixrQ0FBa0MsR0FBRyw0RUFBNEUscUNBQXFDLHlCQUF5QixnQ0FBZ0Msa0JBQWtCLDBDQUEwQyxpQkFBaUIsd0JBQXdCLEdBQUcsaUJBQWlCLHVCQUF1QixvQkFBb0IsMkJBQTJCLEdBQUcsK0JBQStCLHVCQUF1QixzQkFBc0IsaUJBQWlCLEdBQUcsbUJBQW1CO0FBQ3g2WTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1RtQjtBQUMwQjs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrREFBUTtBQUMzQixJQUFJLGlEQUFPO0FBQ1gsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQix3REFBYztBQUNqQyxlQUFlLHFEQUFXO0FBQzFCLG9CQUFvQixzREFBWTtBQUNoQyx1QkFBdUIsc0RBQVk7QUFDbkMsbUJBQW1CLHNEQUFZO0FBQy9CLHVCQUF1Qix1REFBYTtBQUNwQyxjQUFjLHVEQUFhOztBQUUzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLHdEQUFjO0FBQ2pDLG9CQUFvQix3REFBYztBQUNsQyxpQkFBaUIsdURBQWE7QUFDOUIsY0FBYyx1REFBYTs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQix3REFBYztBQUNqQyxvQkFBb0Isd0RBQWM7QUFDbEMsdUJBQXVCLHdEQUFjO0FBQ3JDLG1CQUFtQix3REFBYztBQUNqQyx1QkFBdUIsd0RBQWM7QUFDckMsZUFBZSx1REFBYTtBQUM1QixjQUFjLHVEQUFhO0FBQzNCLGlCQUFpQix1REFBYTs7QUFFOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVzs7QUFFWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuTEE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLGtCQUFrQixtQkFBbUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRDJDO0FBQ3FDO0FBQ0M7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0RBQVE7QUFDM0IsSUFBSSxpREFBTztBQUNYO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0Esc0JBQXNCLHdEQUFjO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLElBQUksYUFBYTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QiwrREFBb0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckV3RTs7QUFFeEU7QUFDQSxvQkFBb0Isd0RBQWM7QUFDbEM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQix3REFBYztBQUNsQyx1QkFBdUIsc0RBQVk7O0FBRW5DOztBQUVBLFdBQVc7QUFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQjJDOztBQUUzQztBQUNBLG9CQUFvQix3REFBYztBQUNsQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLHdEQUFjOztBQUVwQzs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQjJDOztBQUUzQztBQUNBLHVCQUF1Qix3REFBYztBQUNyQztBQUNBLHdCQUF3Qix3REFBYzs7QUFFdEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHlCQUF5Qix3REFBYztBQUN2QyxxQkFBcUIsd0RBQWM7QUFDbkMscUJBQXFCLHdEQUFjO0FBQ25DLG1CQUFtQix3REFBYztBQUNqQyxrQkFBa0Isd0RBQWM7O0FBRWhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCMkM7QUFDSDtBQUNBO0FBQ0o7QUFDUzs7QUFFN0M7QUFDQSxxQkFBcUIsd0RBQWM7O0FBRW5DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixxREFBWTtBQUNwQyx3QkFBd0IscURBQVk7QUFDcEMsd0JBQXdCLGlEQUFVO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDBEQUFrQjs7QUFFM0MsV0FBVztBQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCMEQ7QUFDRTs7QUFFNUQ7QUFDQSx5QkFBeUIsd0RBQWM7QUFDdkM7QUFDQSx3QkFBd0Isd0RBQWM7O0FBRXRDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsd0RBQWM7QUFDekMsdUJBQXVCLHdEQUFjO0FBQ3JDLHdCQUF3Qix3REFBYztBQUN0QyxxQkFBcUIsd0RBQWM7O0FBRW5DO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixrREFBUTtBQUMxQixlQUFlLHVEQUFhO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscURBQVc7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxPQUFPO0FBQ2I7QUFDQSxJQUFJLGtEQUFRO0FBQ1o7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRDRDO0FBQ0o7QUFDZTs7QUFFdkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxxREFBVTtBQUNkLElBQUk7QUFDSixJQUFJLG9FQUFpQjtBQUNyQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0Isb0JBQW9CO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ3FCO0FBQ2tCO0FBQ2pCO0FBQ0Q7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLGtCQUFrQiwwREFBa0I7QUFDcEM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsTUFBTSwyREFBWTtBQUNsQixLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDMkM7O0FBRTNDO0FBQ0Esa0JBQWtCLHdEQUFjO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQix3REFBYztBQUNqQyxvQkFBb0Isd0RBQWM7QUFDbEMsc0JBQXNCLHdEQUFjO0FBQ3BDLHFCQUFxQix3REFBYztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYOzs7QUFHeUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QnpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZOzs7Ozs7O1VDbkVaO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUN1QjtBQUNPO0FBQ047QUFDVTtBQUNUOztBQUU5QztBQUNBLEVBQUUseURBQWdCO0FBQ2xCLENBQUM7O0FBRUQ7QUFDQSxFQUFFLGdFQUFlO0FBQ2pCLENBQUM7O0FBRUQ7QUFDQSxFQUFFLDBEQUFlO0FBQ2pCLENBQUM7O0FBRUQ7QUFDQSxFQUFFLG9FQUFpQjtBQUNuQixDQUFDOztBQUVELDJEQUFZO0FBQ1osMkRBQVk7OztBQUdaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hZGQtY2FyZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZm9vdGVyLWxpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luYm94LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9yZWFkLXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NpZGUtbGlzdGVuZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zaWRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEwZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAxMDBmcjtcXG59XFxuXFxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0hlYWRlciAgKi9cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuICAvKiBib3JkZXI6IDJweCBzb2xpZCBzYWxtb247ICovXFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBiYWNrZ3JvdW5kOiByZ2IoNDAsIDQwLCA0MCk7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5oZWFkZXItdGl0bGUge1xcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xcbn1cXG5cXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vU2lkZSAgKi9cXG4uc2lkZS1jb250YWluZXIge1xcbiAgLyogYm9yZGVyOiAycHggc29saWQgZ3JlZW55ZWxsb3c7ICovXFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBiYWNrZ3JvdW5kOiByZ2IoNDAsIDQwLCA0MCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uc2lkZS1tZW51IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMC41ZnIgMC4xZnIgMTBmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAxZnIpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zaWRlLWJ1dHRvbiB7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbn1cXG5cXG4uc2lkZS1idXR0b246bnRoLWNoaWxkKDEpIHtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGdyaWQtY29sdW1uOiAzIC8gMTA7XFxuXFxufVxcblxcbi5zaWRlLWJ1dHRvbjpudGgtY2hpbGQoMikge1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgZ3JpZC1jb2x1bW46IDMgLyAxMDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICAvKiBib3JkZXItYm90dG9tOiAzcHggc29saWQgd2hpdGVzbW9rZTsgKi9cXG59XFxuXFxuLnNpZGUtYnV0dG9uOm50aC1jaGlsZCgzKSB7XFxuICBncmlkLXJvdzogNCAvIDU7XFxufVxcblxcbi5zaWRlLXByb2plY3QtY29udGFpbmVyIHtcXG4gIGdyaWQtcm93OiA1IC8gNjtcXG4gIGdyaWQtY29sdW1uOiA0IC8gMTA7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuLnNpZGUtcHJvamVjdC10aXRsZSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXG59XFxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0luYm94ICAqL1xcblxcbi5jb250ZW50IHtcXG4gIGdyaWQtcm93OiAxIC8gNDtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGJhY2tncm91bmQ6IHJnYig1NSwgNTUsIDU1KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5pbmJveC1jb250ZW50LFxcbi5wcm9qZWN0LWNvbnRlbnQge1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjFmciAxZnIgMTBmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmciAxZnI7XFxufVxcblxcbi8qIC5zdG9yYWdlLWNvbnRlbnQge1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjFmciAxZnIgMTBmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmciAxZnI7XFxufSAqL1xcblxcbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9JbmJveCBIZWFkZXIgICovXFxuLmluYm94LWhlYWRlci1jb250YWluZXIsXFxuLnByb2plY3QtaGVhZGVyLWNvbnRhaW5lciB7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB3aGl0ZXNtb2tlO1xcbiAgYWxpZ24taXRlbXM6IGVuZDtcXG59XFxuXFxuLmluYm94LXRpdGxlLFxcbi5wcm9qZWN0LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG59XFxuXFxuLm5ldy10b2RvLWRpdixcXG4ubmV3LXByb2plY3QtZGl2IHtcXG4gIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxLjVmciAxMDlweDtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmluYm94LWFkZCxcXG4ucHJvamVjdC1hZGQge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAwLjI4cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbi5uZXctdG9kbyB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMC41cmVtO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4ubmV3LXByb2plY3QtZGl2IHNlbGVjdCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQwLCA0MCwgNDAsIDApO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMC41cmVtO1xcbn1cXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vSW5ib3ggQ2FyZCAgKi9cXG4uY2FyZC1jb250YWluZXIge1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jYXJkLWl0ZW0sXFxuLmNhcmQtaXRlbS1zaHJpbmsge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MCwgNDAsIDQwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjAwcHgsIDFmcikgbWlubWF4KDE0MHB4LCBtYXgtY29udGVudCk7XFxufVxcblxcbi50b2RvLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmlucHV0LFxcbi5jYXJkLWl0ZW0gc2VsZWN0IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDAsIDQwLCA0MCwgMCk7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuXFxufVxcblxcbi5jYXJkLWNvbnRhaW5lciBpbnB1dDpudGgtY2hpbGQoMSkge1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4uY2FyZC1jb250YWluZXIgaW5wdXQ6bnRoLWNoaWxkKDIpIHtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuLmNhcmQtY29udGFpbmVyIGlucHV0Om50aC1jaGlsZCgzKSB7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxufVxcblxcbi5jYXJkLWl0ZW0gc2VsZWN0IHtcXG5ncmlkLXJvdzogNCAvIDU7XFxufVxcblxcbi5jYXJkLXRpdGxlIHtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLmNhcmQtZGVzY3JpcHQge1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4uY2FyZC1kYXRlIHtcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG59XFxuXFxuLmNhcmQtcHJpb3JpdHkge1xcbiAgZ3JpZC1yb3c6IDQgLyA1O1xcbn1cXG5cXG4uYWRkLWJ1dHRvbixcXG4uZWRpdC1idXR0b24sXFxuLmRlbC1idXR0b24sXFxuLmV4cGFuZC1idXR0b24ge1xcbiAgd2lkdGg6IDRyZW07XFxuICBoZWlnaHQ6IDEuOHJlbTtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbiAgYmFja2dyb3VuZDogcmdiKDEwMCwgMTAwLCAxMDApO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBib3JkZXItcmFkaXVzOiAyMHJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG4uZXhwYW5kLWJ1dHRvbiB7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbn1cXG5cXG4uYWRkLWJ1dHRvbiB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxufVxcbi5zaHJpbmstYnV0dG9uLFxcbi5lZGl0LWJ1dHRvbiB7XFxuICBncmlkLXJvdzogNCAvIDU7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuXFxufVxcblxcbi5kZWwtYnV0dG9uIHtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIHdpZHRoOiAycmVtO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5zaHJpbmstYnV0dG9uIHtcXG4gIHdpZHRoOiA0cmVtO1xcbiAgaGVpZ2h0OiAxLjhyZW07XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbiAgYmFja2dyb3VuZDogcmdiKDEwMCwgMTAwLCAxMDApO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBib3JkZXItcmFkaXVzOiAyMHJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vRm9vdGVyICAqL1xcbi5mb290ZXItY29udGFpbmVyIHtcXG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Y29yYWw7ICovXFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBiYWNrZ3JvdW5kOiByZ2IoNDAsIDQwLCA0MCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXG4gIGNvbG9yOiBiZWlnZTtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXItYWRkIHtcXG4gIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi5mb290ZXItY29udGFpbmVyID4gaW5wdXQge1xcbiAgZ3JpZC1jb2x1bW46IDUgLyA2O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB3aWR0aDogMTRyZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxrQ0FBa0M7QUFDcEM7O0FBRUEsb0RBQW9EO0FBQ3BEO0VBQ0UsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQiwyQkFBMkI7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LGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQiw2QkFBNkI7QUFDL0I7QUFDQSxvREFBb0Q7QUFDcEQ7RUFDRSxrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEwZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAxMDBmcjtcXG59XFxuXFxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0hlYWRlciAgKi9cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuICAvKiBib3JkZXI6IDJweCBzb2xpZCBzYWxtb247ICovXFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBiYWNrZ3JvdW5kOiByZ2IoNDAsIDQwLCA0MCk7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5oZWFkZXItdGl0bGUge1xcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xcbn1cXG5cXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vU2lkZSAgKi9cXG4uc2lkZS1jb250YWluZXIge1xcbiAgLyogYm9yZGVyOiAycHggc29saWQgZ3JlZW55ZWxsb3c7ICovXFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBiYWNrZ3JvdW5kOiByZ2IoNDAsIDQwLCA0MCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uc2lkZS1tZW51IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMC41ZnIgMC4xZnIgMTBmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAxZnIpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zaWRlLWJ1dHRvbiB7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbn1cXG5cXG4uc2lkZS1idXR0b246bnRoLWNoaWxkKDEpIHtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGdyaWQtY29sdW1uOiAzIC8gMTA7XFxuXFxufVxcblxcbi5zaWRlLWJ1dHRvbjpudGgtY2hpbGQoMikge1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgZ3JpZC1jb2x1bW46IDMgLyAxMDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICAvKiBib3JkZXItYm90dG9tOiAzcHggc29saWQgd2hpdGVzbW9rZTsgKi9cXG59XFxuXFxuLnNpZGUtYnV0dG9uOm50aC1jaGlsZCgzKSB7XFxuICBncmlkLXJvdzogNCAvIDU7XFxufVxcblxcbi5zaWRlLXByb2plY3QtY29udGFpbmVyIHtcXG4gIGdyaWQtcm93OiA1IC8gNjtcXG4gIGdyaWQtY29sdW1uOiA0IC8gMTA7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuLnNpZGUtcHJvamVjdC10aXRsZSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXG59XFxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0luYm94ICAqL1xcblxcbi5jb250ZW50IHtcXG4gIGdyaWQtcm93OiAxIC8gNDtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGJhY2tncm91bmQ6IHJnYig1NSwgNTUsIDU1KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5pbmJveC1jb250ZW50LFxcbi5wcm9qZWN0LWNvbnRlbnQge1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjFmciAxZnIgMTBmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmciAxZnI7XFxufVxcblxcbi8qIC5zdG9yYWdlLWNvbnRlbnQge1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjFmciAxZnIgMTBmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmciAxZnI7XFxufSAqL1xcblxcbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9JbmJveCBIZWFkZXIgICovXFxuLmluYm94LWhlYWRlci1jb250YWluZXIsXFxuLnByb2plY3QtaGVhZGVyLWNvbnRhaW5lciB7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB3aGl0ZXNtb2tlO1xcbiAgYWxpZ24taXRlbXM6IGVuZDtcXG59XFxuXFxuLmluYm94LXRpdGxlLFxcbi5wcm9qZWN0LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG59XFxuXFxuLm5ldy10b2RvLWRpdixcXG4ubmV3LXByb2plY3QtZGl2IHtcXG4gIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxLjVmciAxMDlweDtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmluYm94LWFkZCxcXG4ucHJvamVjdC1hZGQge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAwLjI4cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbi5uZXctdG9kbyB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMC41cmVtO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4ubmV3LXByb2plY3QtZGl2IHNlbGVjdCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQwLCA0MCwgNDAsIDApO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMC41cmVtO1xcbn1cXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vSW5ib3ggQ2FyZCAgKi9cXG4uY2FyZC1jb250YWluZXIge1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jYXJkLWl0ZW0sXFxuLmNhcmQtaXRlbS1zaHJpbmsge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MCwgNDAsIDQwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjAwcHgsIDFmcikgbWlubWF4KDE0MHB4LCBtYXgtY29udGVudCk7XFxufVxcblxcbi50b2RvLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmlucHV0LFxcbi5jYXJkLWl0ZW0gc2VsZWN0IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDAsIDQwLCA0MCwgMCk7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuXFxufVxcblxcbi5jYXJkLWNvbnRhaW5lciBpbnB1dDpudGgtY2hpbGQoMSkge1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4uY2FyZC1jb250YWluZXIgaW5wdXQ6bnRoLWNoaWxkKDIpIHtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuLmNhcmQtY29udGFpbmVyIGlucHV0Om50aC1jaGlsZCgzKSB7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxufVxcblxcbi5jYXJkLWl0ZW0gc2VsZWN0IHtcXG5ncmlkLXJvdzogNCAvIDU7XFxufVxcblxcbi5jYXJkLXRpdGxlIHtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLmNhcmQtZGVzY3JpcHQge1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4uY2FyZC1kYXRlIHtcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG59XFxuXFxuLmNhcmQtcHJpb3JpdHkge1xcbiAgZ3JpZC1yb3c6IDQgLyA1O1xcbn1cXG5cXG4uYWRkLWJ1dHRvbixcXG4uZWRpdC1idXR0b24sXFxuLmRlbC1idXR0b24sXFxuLmV4cGFuZC1idXR0b24ge1xcbiAgd2lkdGg6IDRyZW07XFxuICBoZWlnaHQ6IDEuOHJlbTtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbiAgYmFja2dyb3VuZDogcmdiKDEwMCwgMTAwLCAxMDApO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBib3JkZXItcmFkaXVzOiAyMHJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG4uZXhwYW5kLWJ1dHRvbiB7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbn1cXG5cXG4uYWRkLWJ1dHRvbiB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxufVxcbi5zaHJpbmstYnV0dG9uLFxcbi5lZGl0LWJ1dHRvbiB7XFxuICBncmlkLXJvdzogNCAvIDU7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuXFxufVxcblxcbi5kZWwtYnV0dG9uIHtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIHdpZHRoOiAycmVtO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5zaHJpbmstYnV0dG9uIHtcXG4gIHdpZHRoOiA0cmVtO1xcbiAgaGVpZ2h0OiAxLjhyZW07XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbiAgYmFja2dyb3VuZDogcmdiKDEwMCwgMTAwLCAxMDApO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBib3JkZXItcmFkaXVzOiAyMHJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vRm9vdGVyICAqL1xcbi5mb290ZXItY29udGFpbmVyIHtcXG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Y29yYWw7ICovXFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBiYWNrZ3JvdW5kOiByZ2IoNDAsIDQwLCA0MCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXG4gIGNvbG9yOiBiZWlnZTtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXItYWRkIHtcXG4gIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi5mb290ZXItY29udGFpbmVyID4gaW5wdXQge1xcbiAgZ3JpZC1jb2x1bW46IDUgLyA2O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB3aWR0aDogMTRyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgXG4gIGVsZW1lbnRGYWN0b3J5LCBcbiAgZm9ybUZhY3RvcnksIFxuICBpbnB1dEZhY3RvcnksIFxuICBzZWxlY3RGYWN0b3J5LCBcbiAgYnV0dG9uRmFjdG9yeVxufSBmcm9tICcuL2ZhY3RvcnknO1xuaW1wb3J0IHsgY2FyZERhdGEsIHB1dEpTT059IGZyb20gJy4vc3RvcmFnZSc7XG5cbmZ1bmN0aW9uIGFkZEJ1dHRvbkxpc3RlbmVyKGFkZCwgaXRlbSwgdGl0bGUsIGRlc2NyaXB0LCBkYXRlLCBwcmlvcml0eSkge1xuICBhZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBjYXJkU2hyaW5rKFxuICAgICAgaXRlbSxcbiAgICAgIHRpdGxlLnZhbHVlLFxuICAgICAgZGVzY3JpcHQudmFsdWUsXG4gICAgICBkYXRlLnZhbHVlLFxuICAgICAgcHJpb3JpdHksXG4gICAgKVxuICAgIGl0ZW0ucmVtb3ZlKCk7XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBjb25zdCBvdXRwdXQgPSBjYXJkRGF0YSh0aXRsZS52YWx1ZSwgZGVzY3JpcHQudmFsdWUsIGRhdGUudmFsdWUsIHByaW9yaXR5LnZhbHVlKS5kYXRhO1xuICAgIHB1dEpTT04oJ2luYm94JyAsdGl0bGUudmFsdWUsIG91dHB1dCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBleHBhbmRCdXR0b25MaXN0ZW5lcihleHBhbmQsIGl0ZW0sIHRpdGxlLCBkZXNjcmlwdCwgZGF0ZSwgcHJpb3JpdHkpIHtcbiAgZXhwYW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY2FyZE91dHB1dCggXG4gICAgICBpdGVtLFxuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcmlwdCxcbiAgICAgIGRhdGUsXG4gICAgICBwcmlvcml0eSxcbiAgICApXG4gICAgaXRlbS5yZW1vdmUoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVkaXRCdXR0b25MaXN0ZW5lcihlZGl0LCBpdGVtLCB0aXRsZSwgZGVzY3JpcHQsIGRhdGUsIHByaW9yaXR5KSB7XG4gIGNvbnN0IHRhcmdldCA9IGZpbmRFbGVtZW50KCkuY2FyZENvbnRhaW5lcjtcbiAgY29uc3QgZWRpdENhcmQgPSBjYXJkRmFjdG9yeSgnJywgJycsICcnLCAnU2F2ZScsIHRpdGxlLCBkZXNjcmlwdCwgZGF0ZSwgcHJpb3JpdHkpLmNhcmRJdGVtO1xuXG4gIGVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICB0YXJnZXQuaW5zZXJ0QmVmb3JlKGVkaXRDYXJkLCBpdGVtKTtcbiAgICBpdGVtLnJlbW92ZSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVsQnV0dG9uTGlzdGVuZXIoZGVsLCBpdGVtKSB7XG4gIGRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGl0ZW0ucmVtb3ZlKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzaHJpbmtCdXR0b25MaXN0ZW5lcihzaHJpbmssIGl0ZW0sIHRpdGxlLCBkZXNjcmlwdCwgZGF0ZSwgcHJpb3JpdHkpIHtcbiAgc2hyaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY2FyZFNocmluayhcbiAgICAgIGl0ZW0sXG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0LFxuICAgICAgZGF0ZSxcbiAgICAgIHByaW9yaXR5LFxuICAgIClcbiAgICBpdGVtLnJlbW92ZSgpO1xufSk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUNvbG9yKHZhbHVlLCBpdGVtKSB7XG4gIHN3aXRjaCAodmFsdWUpIHtcbiAgICBjYXNlICdIaWdoJzpcbiAgICAgIGl0ZW0uc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgyNTUsIDAsIDAsIDAuNClcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ05vcm1hbCc6XG4gICAgICBpdGVtLnN0eWxlLmJhY2tncm91bmQgPSBcInJnYmEoMCwgMTI4LCAwLCAwLjQpXCI7XG4gICAgICBicmVhazsgIFxuICAgIGNhc2UgJ0xvdyc6XG4gICAgICBpdGVtLnN0eWxlLmJhY2tncm91bmQgPSBcInJnYmEoMCwgMCwgMjU1LCAwLjQpXCI7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgaXRlbS5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDQwLCA0MCwgNDApXCI7XG4gIH1cbn1cblxuY29uc3QgY2FyZEZhY3RvcnkgPSAodGl0bGUsIGRlc2NyaXB0LCBkYXRlLCBidXR0b24sIGVkaXRUaXRsZSwgZWRpdERlcywgZWRpdERhdGUsIGVkaXRQcmkpID0+IHtcbiAgY29uc3QgY2FyZEl0ZW0gPSBlbGVtZW50RmFjdG9yeSgnY2FyZC1pdGVtJykuZWxlbWVudDtcbiAgY29uc3QgZm9ybSA9IGZvcm1GYWN0b3J5KCd0b2RvLWZvcm0nKS5lbGVtZW50O1xuICBjb25zdCBjYXJkVGl0bGUgPSBpbnB1dEZhY3RvcnkoJ3RleHQnLCB0aXRsZSwgZWRpdFRpdGxlKS5lbGVtZW50O1xuICBjb25zdCBjYXJkRGVzY3JpcHQgPSBpbnB1dEZhY3RvcnkoJ3RleHQnLCBkZXNjcmlwdCwgZWRpdERlcykuZWxlbWVudDtcbiAgY29uc3QgY2FyZERhdGUgPSBpbnB1dEZhY3RvcnkoJ2RhdGUnLCBkYXRlLCBlZGl0RGF0ZSkuZWxlbWVudDtcbiAgY29uc3QgY2FyZFByaW9yaXR5ID0gc2VsZWN0RmFjdG9yeSgnUHJpb3JpdHknLCAnSGlnaCcsICdOb3JtYWwnLCAnTG93JywgZWRpdFByaSkuZWxlbWVudDtcbiAgY29uc3QgYWRkID0gYnV0dG9uRmFjdG9yeSgnYnV0dG9uJywgJ2FkZC1idXR0b24nLCBidXR0b24pLmVsZW1lbnQ7XG5cbiAgYWRkQnV0dG9uTGlzdGVuZXIoYWRkLCBjYXJkSXRlbSwgY2FyZFRpdGxlLCBjYXJkRGVzY3JpcHQsIGNhcmREYXRlLCBjYXJkUHJpb3JpdHkgKTtcblxuICAvLyBpZiAoZWRpdFByaSAhPT0gdW5kZWZpbmVkKSB7XG4gIC8vICAgbGV0IHNlbGVjdGVkID0gZWRpdFByaS5zZWxlY3RlZEluZGV4O1xuICAvLyAgIGNhcmRQcmlvcml0eS5vcHRpb25zW3NlbGVjdGVkXS5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XG4gIC8vIH1cblxuICBmb3JtLmFwcGVuZChjYXJkVGl0bGUsIGNhcmREZXNjcmlwdCwgY2FyZERhdGUsIGNhcmRQcmlvcml0eSk7XG4gIGNhcmRJdGVtLmFwcGVuZChmb3JtLCBhZGQpO1xuXG4gIHJldHVybiB7IGNhcmRJdGVtLCBjYXJkVGl0bGUsIGNhcmREZXNjcmlwdCwgY2FyZERhdGUsIGNhcmRQcmlvcml0eSB9O1xufVxuXG5mdW5jdGlvbiBjYXJkU2hyaW5rKGl0ZW0sIHRpdGxlLCBkZXNjcmlwdCwgZGF0ZSwgcHJpb3JpdHkpIHtcbiAgY29uc3QgY2FyZENvbnRhaW5lciA9IGZpbmRFbGVtZW50KCkuY2FyZENvbnRhaW5lcjtcbiAgY29uc3QgY2FyZEl0ZW0gPSBlbGVtZW50RmFjdG9yeSgnY2FyZC1pdGVtLXNocmluaycpLmVsZW1lbnQ7XG4gIGNvbnN0IGNhcmRUaXRsZSA9IGVsZW1lbnRGYWN0b3J5KCdjYXJkLXRpdGxlLXNocmluaycpLmVsZW1lbnQ7XG4gIGNvbnN0IGV4cGFuZCA9IGJ1dHRvbkZhY3RvcnkoJ2J1dHRvbicsICdleHBhbmQtYnV0dG9uJywgJ0V4cGFuZCcpLmVsZW1lbnQ7XG4gIGNvbnN0IGRlbCA9IGJ1dHRvbkZhY3RvcnkoJ2J1dHRvbicsICdkZWwtYnV0dG9uJywgJ1gnKS5lbGVtZW50O1xuXG4gIGNhcmRUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICBcbiAgaWYgKHR5cGVvZiBwcmlvcml0eSA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGFuZ2VDb2xvcihwcmlvcml0eSwgY2FyZEl0ZW0pO1xuICB9IGVsc2Uge1xuICAgIGNoYW5nZUNvbG9yKHByaW9yaXR5LnZhbHVlLCBjYXJkSXRlbSk7XG4gIH1cblxuICBjYXJkSXRlbS5hcHBlbmQoY2FyZFRpdGxlLCBleHBhbmQsIGRlbClcbiAgaWYgKGl0ZW0gPT0gJycpIHtcbiAgICBjYXJkQ29udGFpbmVyLmFwcGVuZChjYXJkSXRlbSlcbiAgfSBlbHNlIHsgXG4gICAgY2FyZENvbnRhaW5lci5pbnNlcnRCZWZvcmUoY2FyZEl0ZW0sIGl0ZW0pXG4gIH1cblxuICBleHBhbmRCdXR0b25MaXN0ZW5lcihleHBhbmQsIGNhcmRJdGVtLCB0aXRsZSwgZGVzY3JpcHQsIGRhdGUsIHByaW9yaXR5KTtcbiAgZGVsQnV0dG9uTGlzdGVuZXIoZGVsLCBjYXJkSXRlbSk7XG59XG5cbmZ1bmN0aW9uIGNhcmRPdXRwdXQgKGl0ZW0sIHRpdGxlLCBkZXNjcmlwdCwgZGF0ZSwgcHJpb3JpdHkpIHtcbiAgY29uc3QgY2FyZENvbnRhaW5lciA9IGZpbmRFbGVtZW50KCkuY2FyZENvbnRhaW5lcjtcbiAgY29uc3QgY2FyZEl0ZW0gPSBlbGVtZW50RmFjdG9yeSgnY2FyZC1pdGVtJykuZWxlbWVudDtcbiAgY29uc3QgY2FyZFRpdGxlID0gZWxlbWVudEZhY3RvcnkoJ2NhcmQtdGl0bGUnKS5lbGVtZW50O1xuICBjb25zdCBjYXJkRGVzY3JpcHQgPSBlbGVtZW50RmFjdG9yeSgnY2FyZC1kZXNjcmlwdCcpLmVsZW1lbnQ7XG4gIGNvbnN0IGNhcmREYXRlID0gZWxlbWVudEZhY3RvcnkoJ2NhcmQtZGF0ZScpLmVsZW1lbnQ7XG4gIGNvbnN0IGNhcmRQcmlvcml0eSA9IGVsZW1lbnRGYWN0b3J5KCdjYXJkLXByaW9yaXR5JykuZWxlbWVudDtcbiAgY29uc3QgZWRpdCA9IGJ1dHRvbkZhY3RvcnkoJ2J1dHRvbicsICdlZGl0LWJ1dHRvbicsJ0VkaXQnKS5lbGVtZW50O1xuICBjb25zdCBkZWwgPSBidXR0b25GYWN0b3J5KCdidXR0b24nLCAnZGVsLWJ1dHRvbicsICdYJykuZWxlbWVudDtcbiAgY29uc3Qgc2hyaW5rID0gYnV0dG9uRmFjdG9yeSgnYnV0dG9uJywgJ3Nocmluay1idXR0b24nLCAnU2hyaW5rJykuZWxlbWVudDtcblxuICBjYXJkVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgY2FyZERlc2NyaXB0LnRleHRDb250ZW50ID0gZGVzY3JpcHQ7XG4gIGNhcmREYXRlLnRleHRDb250ZW50ID0gZGF0ZTtcblxuICBpZiAodHlwZW9mIHByaW9yaXR5ID09PSAnc3RyaW5nJykge1xuICAgIGNhcmRQcmlvcml0eS50ZXh0Q29udGVudCA9ICdQcmlvcml0eTogJyArIHByaW9yaXR5O1xuICAgIGNoYW5nZUNvbG9yKHByaW9yaXR5LCBjYXJkSXRlbSk7XG4gIH0gZWxzZSB7XG4gICAgY2FyZFByaW9yaXR5LnRleHRDb250ZW50ID0gJ1ByaW9yaXR5OiAnICsgcHJpb3JpdHkudmFsdWU7XG4gICAgY2hhbmdlQ29sb3IocHJpb3JpdHkudmFsdWUsIGNhcmRJdGVtKTtcbiAgfVxuXG4gIGNhcmRJdGVtLmFwcGVuZChjYXJkVGl0bGUsIGNhcmREZXNjcmlwdCwgY2FyZERhdGUsIGNhcmRQcmlvcml0eSwgc2hyaW5rLCBlZGl0LCBkZWwpO1xuICBjYXJkQ29udGFpbmVyLmluc2VydEJlZm9yZShjYXJkSXRlbSwgaXRlbSlcblxuICBlZGl0QnV0dG9uTGlzdGVuZXIoZWRpdCwgY2FyZEl0ZW0sIHRpdGxlLCBkZXNjcmlwdCwgZGF0ZSwgcHJpb3JpdHkpO1xuICBkZWxCdXR0b25MaXN0ZW5lcihkZWwsIGNhcmRJdGVtKTtcbiAgc2hyaW5rQnV0dG9uTGlzdGVuZXIoc2hyaW5rLCBjYXJkSXRlbSwgdGl0bGUsIGRlc2NyaXB0LCBkYXRlLCBwcmlvcml0eSk7XG59XG5cbmZ1bmN0aW9uIGZpbmRFbGVtZW50KCkge1xuICBjb25zdCBuZXdCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRvZG8tZGl2Jyk7XG4gIGNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1jb250YWluZXInKTtcblxuICByZXR1cm4geyBuZXdCdXR0b24sIGNhcmRDb250YWluZXIgfVxuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG9DbGljaygpIHtcbiAgY29uc3QgdGFyZ2V0ID0gZmluZEVsZW1lbnQoKS5uZXdCdXR0b247XG4gIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZENhcmQpO1xufVxuXG5mdW5jdGlvbiBhZGRDYXJkKCkge1xuICBjb25zdCB0YXJnZXQgPSBmaW5kRWxlbWVudCgpLmNhcmRDb250YWluZXI7XG4gIGNvbnN0IG5ld0NhcmQgPSBjYXJkRmFjdG9yeSgnTmV3IFRpdGxlJywgJ05ldyBEZXNjcmlwdGlvbicsICdOZXcgRGF0ZScsICdBZGQnKS5jYXJkSXRlbTtcbiAgdGFyZ2V0LmFwcGVuZENoaWxkKG5ld0NhcmQpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVUb2RvQ2xpY2ssIGNhcmRTaHJpbmsgfTsiLCJjb25zdCBlbGVtZW50RmFjdG9yeSA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKG5hbWUpO1xuICByZXR1cm4geyBlbGVtZW50IH07XG59O1xuXG5jb25zdCBmb3JtRmFjdG9yeSA9IChjbHMpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNscyk7XG4gIC8vIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhY3Rpb24nLCBhY3Rpb24pO1xuICAvLyBlbGVtZW50LnNldEF0dHJpYnV0ZSgnbWV0aG9kJywgbWV0aG9kKTtcbiAgcmV0dXJuIHsgZWxlbWVudCB9O1xufTtcblxuY29uc3QgaW5wdXRGYWN0b3J5ID0gKHR5cGUsIHBsY2hvbGRlciwgdmFsdWUgPSAnJykgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCB0eXBlKTtcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgcGxjaG9sZGVyKTtcbiAgZWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICByZXR1cm4geyBlbGVtZW50IH07XG59XG5cbmNvbnN0IHNlbGVjdEZhY3RvcnkgPSAobGFiZWwsIG9wMSwgb3AyLCBvcDMpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBjb25zdCBncm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGdyb3VwJyk7XG4gIGNvbnN0IG9wdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgY29uc3Qgb3B0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBjb25zdCBvcHRpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cbiAgZ3JvdXAuc2V0QXR0cmlidXRlKCdsYWJlbCcsIGxhYmVsKTtcbiAgb3B0aW9uMS50ZXh0Q29udGVudCA9IG9wMTtcbiAgb3B0aW9uMi50ZXh0Q29udGVudCA9IG9wMjtcbiAgLy8gb3B0aW9uMi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XG4gIG9wdGlvbjMudGV4dENvbnRlbnQgPSBvcDM7XG4gIGdyb3VwLmFwcGVuZChvcHRpb24xLCBvcHRpb24yLCBvcHRpb24zKTtcbiAgZWxlbWVudC5hcHBlbmQoZ3JvdXApO1xuXG4gIHJldHVybiB7IGVsZW1lbnQgfVxufVxuXG5jb25zdCBidXR0b25GYWN0b3J5ID0gKHR5cGUsIGNscywgdGV4dCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0eXBlJywgdHlwZSk7XG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgcmV0dXJuIHsgZWxlbWVudCB9XG59XG5cbmNvbnN0IGFkZFByakZhY3RvcnkgPSAobGFiZWwsIC4uLm9wcykgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIGNvbnN0IGdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0Z3JvdXAnKTtcblxuICBncm91cC5zZXRBdHRyaWJ1dGUoJ2xhYmVsJywgbGFiZWwpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb3BzWzBdLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGRpdi50ZXh0Q29udGVudCA9IG9wc1swXVtpXTtcbiAgICBncm91cC5hcHBlbmQoZGl2KTtcbiAgfVxuICBcbiAgZWxlbWVudC5hcHBlbmQoZ3JvdXApO1xuXG4gIHJldHVybiB7IGVsZW1lbnQgfTtcbn1cblxuZXhwb3J0IHsgZWxlbWVudEZhY3RvcnksIGlucHV0RmFjdG9yeSwgZm9ybUZhY3RvcnksIHNlbGVjdEZhY3RvcnksIGJ1dHRvbkZhY3RvcnksIGFkZFByakZhY3RvcnkgfSIsImltcG9ydCB7IGVsZW1lbnRGYWN0b3J5IH0gZnJvbSBcIi4vZmFjdG9yeVwiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdENvbnRlbnQsIGFkZFRvUHJvamVjdCwgYWRkUHJvamVjdENhcmQgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgcHV0U3RvcmFnZSwgc2hvd1N0b3JhZ2UsIGZpbmRLZXlzLCBjYXJkRGF0YSwgcHV0SlNPTiB9IGZyb20gJy4vc3RvcmFnZSc7XG5cbmZ1bmN0aW9uIGZpbmRFbGVtZW50KCkge1xuICBjb25zdCBmb290ZXJBZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyLWFkZCcpO1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXItY29udGFpbmVyID4gaW5wdXQnKTtcbiAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlLXByb2plY3QtY29udGFpbmVyJyk7XG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgY29uc3QgcHJvamVjdENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250ZW50Jyk7XG4gIGNvbnN0IHdpcGVDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQgPiAqJyk7XG4gIGNvbnN0IHdpcGVTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtZGl2IHNlbGVjdCcpO1xuICBjb25zdCBpbmJveENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gtY29udGVudCcpO1xuICByZXR1cm4geyBmb290ZXJBZGQsIHByb2plY3ROYW1lLCBwcm9qZWN0RGl2LCBtYWluQ29udGVudCwgXG4gICAgcHJvamVjdENvbnRlbnQsIHdpcGVDb250ZW50LCB3aXBlU2VsZWN0LCBpbmJveENvbnRlbnQgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXJDbGljaygpIHtcbiAgY29uc3QgYWRkID0gZmluZEVsZW1lbnQoKS5mb290ZXJBZGQ7XG5cbiAgYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgbGV0IHByb2plY3ROYW1lID0gZmluZEVsZW1lbnQoKS5wcm9qZWN0TmFtZTtcbiAgICBjcmVhdGVTaWRlUHJvamVjdChwcm9qZWN0TmFtZS52YWx1ZSk7XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBjb25zdCBvdXRwdXQgPSBjYXJkRGF0YShwcm9qZWN0TmFtZS52YWx1ZSkuZGF0YTtcbiAgICBwdXRKU09OKCdzaWRlJywgcHJvamVjdE5hbWUudmFsdWUsIG91dHB1dCk7XG4gICAgcHJvamVjdE5hbWUudmFsdWUgPSAnJztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGVQcm9qZWN0KHByb2plY3QpIHtcbiAgY29uc3QgcHJvamVjdEl0ZW0gPSBlbGVtZW50RmFjdG9yeSgnc2lkZS1wcm9qZWN0LXRpdGxlJykuZWxlbWVudDtcbiAgY29uc3QgcHJvamVjdERpdiA9IGZpbmRFbGVtZW50KCkucHJvamVjdERpdjtcblxuICBwcm9qZWN0SXRlbS50ZXh0Q29udGVudCA9IHByb2plY3Q7XG4gIFxuICBwcm9qZWN0SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGxvYWRQcm9qZWN0KHByb2plY3QsIHByb2plY3RJdGVtKTtcbiAgICAvLyBhZGRQcm9qZWN0Q2FyZCgpO1xuICB9LCB7IG9uY2U6IGZhbHNlIH0pO1xuICBcbiAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0SXRlbSk7XG5cbiAgLy8gZmluZEtleXMoKTtcbn1cblxuZnVuY3Rpb24gbG9hZFByb2plY3QocHJvamVjdCwgc2lkZURpdikge1xuICBjb25zdCBsb2FkID0gZmluZEVsZW1lbnQoKS5tYWluQ29udGVudDtcblxuICBmaW5kRWxlbWVudCgpLndpcGVDb250ZW50LnJlbW92ZSgpO1xuICBjb25zdCBwcm9qZWN0Q29udGVudCA9IGNyZWF0ZVByb2plY3RDb250ZW50KHByb2plY3QpXG4gIC8vIHB1dFN0b3JhZ2UocHJvamVjdCwgcHJvamVjdENvbnRlbnQpO1xuICBsb2FkLmFwcGVuZENoaWxkKHByb2plY3RDb250ZW50KTtcbiAgXG4gIC8vIGFkZFRvUHJvamVjdCgpO1xuXG4gIC8vIHNpZGVEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAvLyBmaW5kS2V5cygpO1xuICAgIC8vIHJlbG9hZFByb2plY3QocHJvamVjdClcbiAgLy8gfSk7XG59XG5cbi8vIGZ1bmN0aW9uIHJlbG9hZFByb2plY3QocHJvamVjdCkge1xuLy8gICBjb25zdCBsb2FkID0gZmluZEVsZW1lbnQoKS5tYWluQ29udGVudDtcbi8vICAgZmluZEVsZW1lbnQoKS53aXBlQ29udGVudC5yZW1vdmUoKTtcbi8vICAgbG9hZC5hcHBlbmRDaGlsZChzaG93U3RvcmFnZSgpLnN0b3JhZ2VbcHJvamVjdF0pO1xuLy8gICBmaW5kRWxlbWVudCgpLndpcGVTZWxlY3QucmVtb3ZlKCk7XG5cbi8vICAgYWRkVG9Qcm9qZWN0KCk7XG4vLyB9XG5cbmV4cG9ydCB7IGNyZWF0ZUZvb3RlckNsaWNrLCBjcmVhdGVTaWRlUHJvamVjdCB9OyIsImltcG9ydCB7IGVsZW1lbnRGYWN0b3J5LCBpbnB1dEZhY3RvcnksIGJ1dHRvbkZhY3RvcnkgfSBmcm9tICcuL2ZhY3RvcnknO1xuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlckRpdiA9IGVsZW1lbnRGYWN0b3J5KCdmb290ZXItY29udGFpbmVyJykuZWxlbWVudDtcbiAgY29uc3QgY29udGVudCA9IGNyZWF0ZUZvb3RlckNvbnRlbnQoKTtcblxuICBmb290ZXJEaXYuYXBwZW5kKGNvbnRlbnQuZm9vdGVyQWRkLCBjb250ZW50LmZvb3Rlck5ld1Byaik7XG5cbiAgcmV0dXJuIGZvb3RlckRpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyQ29udGVudCgpIHtcbiAgY29uc3QgZm9vdGVyQWRkID0gZWxlbWVudEZhY3RvcnkoJ2Zvb3Rlci1hZGQnKS5lbGVtZW50O1xuICBjb25zdCBmb290ZXJOZXdQcmogPSBpbnB1dEZhY3RvcnkoJ3RleHQnLCAnTmV3IFByb2plY3QnKS5lbGVtZW50O1xuXG4gIGZvb3RlckFkZC50ZXh0Q29udGVudCA9ICcrJztcblxuICByZXR1cm4geyBmb290ZXJBZGQsIGZvb3Rlck5ld1ByaiB9O1xufVxuXG5leHBvcnQgeyBjcmVhdGVGb290ZXIsIGNyZWF0ZUZvb3RlckNvbnRlbnQgfTsiLCJpbXBvcnQgeyBlbGVtZW50RmFjdG9yeSB9IGZyb20gXCIuL2ZhY3RvcnlcIjtcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXJEaXYgPSBlbGVtZW50RmFjdG9yeSgnaGVhZGVyLWNvbnRhaW5lcicpLmVsZW1lbnQ7XG4gIGNvbnN0IGNvbnRlbnQgPSBjcmVhdGVIZWFkZXJDb250ZW50KCk7XG5cbiAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gIHJldHVybiBoZWFkZXJEaXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlckNvbnRlbnQoKSB7XG4gIGNvbnN0IGhlYWRlclRpdGxlID0gZWxlbWVudEZhY3RvcnkoJ2hlYWRlci10aXRsZScpLmVsZW1lbnQ7XG5cbiAgaGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSAnVG9kbyBMaXN0JztcblxuICByZXR1cm4gaGVhZGVyVGl0bGU7XG5cbn1cblxuZXhwb3J0IHsgY3JlYXRlSGVhZGVyIH07IiwiaW1wb3J0IHsgZWxlbWVudEZhY3RvcnkgfSBmcm9tICcuL2ZhY3RvcnknO1xuXG5mdW5jdGlvbiBjcmVhdGVJbmJveENvbnRlbnQoKSB7XG4gIGNvbnN0IGluYm94Q29udGVudCA9IGVsZW1lbnRGYWN0b3J5KCdpbmJveC1jb250ZW50JykuZWxlbWVudDtcbiAgY29uc3QgaGVhZGVyQ29udGVudCA9IGNyZWF0ZUluYm94SGVhZGVyKCk7XG4gIGNvbnN0IGNhcmRDb250YWluZXIgPSBlbGVtZW50RmFjdG9yeSgnY2FyZC1jb250YWluZXInKS5lbGVtZW50O1xuXG4gIGluYm94Q29udGVudC5hcHBlbmQoaGVhZGVyQ29udGVudCwgY2FyZENvbnRhaW5lcik7XG5cbiAgcmV0dXJuIGluYm94Q29udGVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5ib3hIZWFkZXIoKSB7XG4gIGNvbnN0IGluYm94SGVhZGVyRGl2ID0gZWxlbWVudEZhY3RvcnkoJ2luYm94LWhlYWRlci1jb250YWluZXInKS5lbGVtZW50O1xuICBjb25zdCBpbmJveFRpdGxlID0gZWxlbWVudEZhY3RvcnkoJ2luYm94LXRpdGxlJykuZWxlbWVudDtcbiAgY29uc3QgbmV3VG9kb0RpdiA9IGVsZW1lbnRGYWN0b3J5KCduZXctdG9kby1kaXYnKS5lbGVtZW50O1xuICBjb25zdCBpbmJveEFkZCA9IGVsZW1lbnRGYWN0b3J5KCdpbmJveC1hZGQnKS5lbGVtZW50O1xuICBjb25zdCBuZXdUb2RvID0gZWxlbWVudEZhY3RvcnkoJ25ldy10b2RvJykuZWxlbWVudDtcblxuICBpbmJveFRpdGxlLnRleHRDb250ZW50ID0gJ0luYm94JztcbiAgaW5ib3hBZGQudGV4dENvbnRlbnQgPSAnKyc7XG4gIG5ld1RvZG8udGV4dENvbnRlbnQgPSAnTmV3IFRvZG8nO1xuXG4gIG5ld1RvZG9EaXYuYXBwZW5kKGluYm94QWRkLCBuZXdUb2RvKTtcbiAgaW5ib3hIZWFkZXJEaXYuYXBwZW5kKGluYm94VGl0bGUsIG5ld1RvZG9EaXYpO1xuXG4gIHJldHVybiBpbmJveEhlYWRlckRpdjtcbn1cblxuZXhwb3J0IHsgY3JlYXRlSW5ib3hDb250ZW50IH07IiwiaW1wb3J0IHsgZWxlbWVudEZhY3RvcnkgfSBmcm9tICcuL2ZhY3RvcnknO1xuaW1wb3J0IHsgY3JlYXRlSGVhZGVyIH0gZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IHsgY3JlYXRlRm9vdGVyIH0gZnJvbSAnLi9mb290ZXInO1xuaW1wb3J0IHsgY3JlYXRlU2lkZSB9IGZyb20gJy4vc2lkZSc7XG5pbXBvcnQgeyBjcmVhdGVJbmJveENvbnRlbnQgfSBmcm9tICcuL2luYm94JztcblxuZnVuY3Rpb24gY3JlYXRlRGl2KCkge1xuICBjb25zdCBjb250ZW50RGl2ID0gZWxlbWVudEZhY3RvcnkoJ2NvbnRlbnQnKS5lbGVtZW50O1xuXG4gIHJldHVybiBjb250ZW50RGl2O1xufVxuXG5mdW5jdGlvbiBwbGFjZVRvQ29udGFpbmVyKCkge1xuICBjb25zdCBjb250ZW50RGl2ID0gcGxhY2VUb1BhcmVudCgpLmNvbnRlbnREaXY7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVTaWRlKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudERpdik7XG59XG5cbmZ1bmN0aW9uIHBsYWNlVG9QYXJlbnQoKSB7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBjcmVhdGVEaXYoKTtcbiAgXG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlSW5ib3hDb250ZW50KCkpO1xuXG4gIHJldHVybiB7IGNvbnRlbnREaXYgfTtcbn1cblxuZXhwb3J0IHsgcGxhY2VUb0NvbnRhaW5lciB9OyIsImltcG9ydCB7IGVsZW1lbnRGYWN0b3J5LCBhZGRQcmpGYWN0b3J5IH0gZnJvbSBcIi4vZmFjdG9yeVwiO1xuaW1wb3J0IHsgc2hvd0tleXMsIHNob3dTdG9yYWdlLCBmaW5kS2V5cyB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdENvbnRlbnQocHJvamVjdCkge1xuICBjb25zdCBwcm9qZWN0Q29udGVudCA9IGVsZW1lbnRGYWN0b3J5KCdwcm9qZWN0LWNvbnRlbnQnKS5lbGVtZW50O1xuICBjb25zdCBoZWFkZXJDb250ZW50ID0gY3JlYXRlUHJvamVjdEhlYWRlcihwcm9qZWN0KTtcbiAgY29uc3QgY2FyZENvbnRhaW5lciA9IGVsZW1lbnRGYWN0b3J5KCdjYXJkLWNvbnRhaW5lcicpLmVsZW1lbnQ7XG5cbiAgcHJvamVjdENvbnRlbnQuYXBwZW5kKGhlYWRlckNvbnRlbnQsIGNhcmRDb250YWluZXIpO1xuXG4gIHJldHVybiBwcm9qZWN0Q29udGVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEhlYWRlcihwcm9qZWN0KSB7XG4gIGNvbnN0IHByb2plY3RIZWFkZXJEaXYgPSBlbGVtZW50RmFjdG9yeSgncHJvamVjdC1oZWFkZXItY29udGFpbmVyJykuZWxlbWVudDtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZWxlbWVudEZhY3RvcnkoJ3Byb2plY3QtdGl0bGUnKS5lbGVtZW50O1xuICBjb25zdCBuZXdQcm9qZWN0RGl2ID0gZWxlbWVudEZhY3RvcnkoJ25ldy1wcm9qZWN0LWRpdicpLmVsZW1lbnQ7XG4gIGNvbnN0IHByb2plY3RBZGQgPSBlbGVtZW50RmFjdG9yeSgncHJvamVjdC1hZGQnKS5lbGVtZW50O1xuXG4gIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3Q7XG4gIHByb2plY3RBZGQudGV4dENvbnRlbnQgPSAnKyc7XG5cbiAgbmV3UHJvamVjdERpdi5hcHBlbmQocHJvamVjdEFkZCk7XG5cbiAgcHJvamVjdEhlYWRlckRpdi5hcHBlbmQocHJvamVjdFRpdGxlLCBuZXdQcm9qZWN0RGl2KTtcblxuICByZXR1cm4gcHJvamVjdEhlYWRlckRpdjtcbn1cblxuZnVuY3Rpb24gYWRkVG9Qcm9qZWN0KCkge1xuICBjb25zdCBhZGRMaXN0ID0gc2hvd0tleXMoKTtcbiAgY29uc3QgbGlzdCA9IGFkZFByakZhY3RvcnkoJ0FkZCB0byBwcm9qZWN0JywgYWRkTGlzdCkuZWxlbWVudDtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0LWRpdicpO1xuICBkaXYuYXBwZW5kKGxpc3QpO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0Q2FyZCgpIHtcbiAgY29uc3QgYWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtYWRkJyk7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1jb250YWluZXInKTtcbiAgY29uc3Qgc3RvcmFnZSA9IHNob3dTdG9yYWdlKCkuc3RvcmFnZTtcbiAgY29uc3QgY2hpbGRyZW4gPSBzdG9yYWdlWydpbmJveCddLmNoaWxkcmVuWzFdLmNoaWxkcmVuXG4gIFxuICBhZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBzZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdC1kaXYgc2VsZWN0Jykuc2VsZWN0ZWRJbmRleDtcbiAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoICE9IDApIHtcbiAgICAgIGNvbnRlbnQuYXBwZW5kKGNoaWxkcmVuW3NlbGVjdGVkXSk7XG4gICAgfSBlbHNlIHsgcmV0dXJuIH07XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0LWRpdiBzZWxlY3QnKS5yZW1vdmUoKTtcbiAgICBmaW5kS2V5cygpO1xuICAgIGFkZFRvUHJvamVjdCgpXG4gIH0pO1xufVxuXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0Q29udGVudCwgYWRkVG9Qcm9qZWN0LCBhZGRQcm9qZWN0Q2FyZCB9OyIsImltcG9ydCB7IHBsYWNlVG9Db250YWluZXIgfSBmcm9tIFwiLi9sYXlvdXRcIjtcbmltcG9ydCB7IGNhcmRTaHJpbmsgfSBmcm9tIFwiLi9hZGQtY2FyZFwiO1xuaW1wb3J0IHsgY3JlYXRlU2lkZVByb2plY3QgfSBmcm9tIFwiLi9mb290ZXItbGlzdGVuZXJzXCI7XG5cbi8vQ2hlY2sgaWYgc3Ryb2FnZSBleHNpc3RzXG4vL0lmIG5vdCwganVzdCBkbyBub3JtYWwgbGF5b3V0XG4vL0lmIHllcywgZG8gbm9ybWFsIGFuZCBjYWxsIGFkZC1jYXJkcy9mb290ZXItbGlzdGVuZXJzXG5cbmZ1bmN0aW9uIGNoZWNrU3RvcmFnZSh0eXBlKSB7XG4gIGlmKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0eXBlKSkge1xuICAgIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICBmaW5kU3RvcmFnZSh0eXBlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2FkU3RvcmFnZShrZXksIHR5cGUpIHtcbiAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odHlwZSkpO1xuICBjb25zdCB0aXRsZSA9IGRhdGFba2V5XVsndGl0bGUnXTtcbiAgY29uc3QgZGlzY3JpcHQgPSBkYXRhW2tleV1bJ2Rpc2NyaXB0J107XG4gIGNvbnN0IGRhdGUgPSBkYXRhW2tleV1bJ2RhdGUnXTtcbiAgY29uc3QgcHJpb3JpdHkgPSBkYXRhW2tleV1bJ3ByaW9yaXR5J107XG5cbiAgY29uc29sZS5sb2codGl0bGUsIGRpc2NyaXB0LCBkYXRlLCBwcmlvcml0eSk7XG5cbiAgaWYgKHR5cGUgPT0gJ2luYm94Jykge1xuICAgIGNhcmRTaHJpbmsoJycsIHRpdGxlLCBkaXNjcmlwdCwgZGF0ZSwgcHJpb3JpdHkpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT0gJ3NpZGUnKSB7XG4gICAgY3JlYXRlU2lkZVByb2plY3QodGl0bGUpO1xuICB9XG5cbiAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcbn1cblxuZnVuY3Rpb24gZmluZFN0b3JhZ2UodHlwZSkge1xuICBjb25zdCBrZXlMaXN0ID0gT2JqZWN0LmtleXMoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VbdHlwZV0pKTtcblxuICBjb25zb2xlLmxvZyhrZXlMaXN0KTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgbG9hZFN0b3JhZ2Uoa2V5TGlzdFtpXSwgdHlwZSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgY2hlY2tTdG9yYWdlIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVUb2RvQ2xpY2sgfSBmcm9tICcuL2FkZC1jYXJkJztcbmltcG9ydCB7IHB1dFN0b3JhZ2UsIHNob3dTdG9yYWdlICwgY2FyZERhdGEgfSBmcm9tICcuL3N0b3JhZ2UnO1xuaW1wb3J0IHsgY2hlY2tTdG9yYWdlIH0gZnJvbSAnLi9yZWFkLXN0b3JhZ2UnO1xuaW1wb3J0IHsgY3JlYXRlSW5ib3hDb250ZW50IH0gZnJvbSAnLi9pbmJveCc7XG5cbmZ1bmN0aW9uIGZpbmRFbGVtZW50KCkge1xuICBjb25zdCBtZW51SW5ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZS1idXR0b246bnRoLWNoaWxkKDEpJyk7XG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgY29uc3QgaW5ib3hDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94LWNvbnRlbnQnKTtcbiAgY29uc3Qgd2lwZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCA+IConKTtcblxuICByZXR1cm4geyBtZW51SW5ib3gsIG1haW5Db250ZW50LCBpbmJveENvbnRlbnQsIHdpcGVDb250ZW50IH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGVDbGljaygpIHtcbiAgY29uc3QgaW5ib3ggPSBmaW5kRWxlbWVudCgpLm1lbnVJbmJveDtcbiAgLy8gcHV0U3RvcmFnZSgnaW5ib3gnLCBmaW5kRWxlbWVudCgpLmluYm94Q29udGVudCk7XG4gIGluYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZEluYm94KTtcbn1cblxuZnVuY3Rpb24gbG9hZEluYm94KCkge1xuICBjb25zdCBsb2FkID0gZmluZEVsZW1lbnQoKS5tYWluQ29udGVudDtcblxuICBjb25zdCBwMSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgcmVzb2x2ZShmaW5kRWxlbWVudCgpLndpcGVDb250ZW50LnJlbW92ZSgpKVxuICB9KTtcblxuICBjb25zdCBwMiA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgY29uc3QgY2xlYW4gPSBjcmVhdGVJbmJveENvbnRlbnQoKTtcbiAgICByZXNvbHZlKGxvYWQuYXBwZW5kKGNsZWFuKSk7XG4gIH0pO1xuICBcbiAgcDEudGhlbigoKSA9PiB7XG4gICAgcDIudGhlbiAoKCkgPT4ge1xuICAgICAgY2hlY2tTdG9yYWdlKCdpbmJveCcpO1xuICAgIH0pO1xuICB9KTtcbiAgICBcbiAgLy8gY3JlYXRlVG9kb0NsaWNrKCk7XG59XG5cblxuZXhwb3J0IHsgY3JlYXRlU2lkZUNsaWNrIH0iLCJpbXBvcnQgeyBlbGVtZW50RmFjdG9yeSB9IGZyb20gJy4vZmFjdG9yeSc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGUoKSB7XG4gIGNvbnN0IHNpZGVEaXYgPSBlbGVtZW50RmFjdG9yeSgnc2lkZS1jb250YWluZXInKS5lbGVtZW50O1xuICBjb25zdCBjb250ZW50ID0gY3JlYXRlU2lkZUNvbnRlbnQoKS5zaWRlTWVudTtcbiAgXG4gIHNpZGVEaXYuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gIFxuICByZXR1cm4gc2lkZURpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2lkZUNvbnRlbnQoKSB7XG4gIGNvbnN0IHNpZGVNZW51ID0gZWxlbWVudEZhY3RvcnkoJ3NpZGUtbWVudScpLmVsZW1lbnQ7XG4gIGNvbnN0IHNpZGVJbmJveCA9IGVsZW1lbnRGYWN0b3J5KCdzaWRlLWJ1dHRvbicpLmVsZW1lbnQ7XG4gIGNvbnN0IHNpZGVQcm9qZWN0ID0gZWxlbWVudEZhY3RvcnkoJ3NpZGUtYnV0dG9uJykuZWxlbWVudDtcbiAgY29uc3QgcHJvamVjdERpdiA9IGVsZW1lbnRGYWN0b3J5KCdzaWRlLXByb2plY3QtY29udGFpbmVyJykuZWxlbWVudDtcbiAgc2lkZUluYm94LnRleHRDb250ZW50ID0gJ0luYm94JztcblxuICBzaWRlUHJvamVjdC50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG5cbiAgc2lkZU1lbnUuYXBwZW5kKHNpZGVJbmJveCwgc2lkZVByb2plY3QsIHByb2plY3REaXYpO1xuICBcbiAgcmV0dXJuIHsgc2lkZU1lbnUsIHNpZGVJbmJveCwgc2lkZVByb2plY3QgfTtcbn1cblxuXG5leHBvcnQgeyBjcmVhdGVTaWRlLCBjcmVhdGVTaWRlQ29udGVudCB9O1xuIiwiXG5jb25zdCBjYXJkRGF0YSA9ICh0aXRsZSwgZGlzY3JpcHQsIGRhdGUsIHByaW9yaXR5KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgdGl0bGUsXG4gICAgZGlzY3JpcHQsXG4gICAgZGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgfTtcbiAgcmV0dXJuIHsgZGF0YSB9O1xufTtcblxuZnVuY3Rpb24gcHV0SlNPTih0eXBlLCBrZXksIHZhbHVlKSB7XG4gIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0odHlwZSkpIHtcbiAgICBsZXQgY3JlYXRlID0ge307XG4gICAgY3JlYXRlW2tleV0gPSB2YWx1ZTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0eXBlLCBKU09OLnN0cmluZ2lmeShjcmVhdGUpKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgdGV4dCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odHlwZSkpO1xuICAgIHRleHRba2V5XSA9IHZhbHVlXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odHlwZSwgSlNPTi5zdHJpbmdpZnkodGV4dCkpO1xuICAgIGNvbnNvbGUubG9nKHRleHQpO1xuICB9XG4gIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7XG59XG5cblxubGV0IHN0b3JhZ2UgPSB7fTtcblxubGV0IHByb2plY3RMaXN0ID0ge307XG5cbmxldCBwcm9qZWN0S2V5cyA9IFtdO1xuXG5mdW5jdGlvbiBwdXRTdG9yYWdlKGZpbGVOYW1lLCBkaXZOYW1lKSB7XG4gIHN0b3JhZ2VbZmlsZU5hbWVdID0gZGl2TmFtZTtcbn1cblxuY29uc3Qgc2hvd1N0b3JhZ2UgPSAoKSA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKGluYm94SlNPTik7XG4gIC8vIGNvbnNvbGUubG9nKHNpZGVKU09OKTtcbiAgLy8gY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0b3JhZ2UnKSk7XG4gIC8vIGNvbnNvbGUubG9nKHN0b3JhZ2UpO1xuICAvLyBjb25zb2xlLmxvZyhwdXRKU09OKCkpO1xuXG4gIC8vIGNvbnNvbGUubG9nKHByb2plY3RLZXlzKTtcbiAgLy8gY29uc29sZS5sb2cocHJvamVjdExpc3QpO1xuICAvLyBjb25zb2xlLmxvZyhzdG9yYWdlWydpbmJveCddLmNoaWxkcmVuWzFdLmNoaWxkcmVuKTtcbiAgcmV0dXJuIHsgc3RvcmFnZSB9O1xufTtcblxuLy8gZnVuY3Rpb24gZmluZEtleXMoKSB7XG4vLyAgIHByb2plY3RMaXN0ID0ge307XG4vLyAgIGNvbnN0IGl0ZW1MaXN0ID0gc3RvcmFnZVsnaW5ib3gnXS5jaGlsZHJlblsxXS5jaGlsZHJlbjtcbi8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtTGlzdC5sZW5ndGg7IGkrKykge1xuLy8gICAgIGxldCBwcm9qZWN0ID0gaXRlbUxpc3RbaV0uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQ7XG4vLyAgICAgcHJvamVjdExpc3RbcHJvamVjdF0gPSBpdGVtTGlzdFtpXTtcbi8vICAgfVxuLy8gICBwcm9qZWN0S2V5cyA9IFtdO1xuLy8gICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocHJvamVjdExpc3QpO1xuLy8gICBmb3IgKGxldCBpdGVtIG9mIGtleXMpIHtcbi8vICAgICBwcm9qZWN0S2V5cy5wdXNoKGl0ZW0pO1xuLy8gICB9XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIHNob3dLZXlzKCkge1xuLy8gICByZXR1cm4gcHJvamVjdEtleXM7XG4vLyB9XG5cbi8vIGV4cG9ydCB7IHB1dFN0b3JhZ2UsIHNob3dTdG9yYWdlLCBmaW5kS2V5cywgc2hvd0tleXMgfTtcbmV4cG9ydCB7IHB1dFN0b3JhZ2UsIHNob3dTdG9yYWdlLCBjYXJkRGF0YSwgcHV0SlNPTiB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgcGxhY2VUb0NvbnRhaW5lciB9IGZyb20gJy4vbGF5b3V0JztcbmltcG9ydCB7IGNyZWF0ZVNpZGVDbGljayB9IGZyb20gJy4vc2lkZS1saXN0ZW5lcnMnO1xuaW1wb3J0IHsgY3JlYXRlVG9kb0NsaWNrIH0gZnJvbSAnLi9hZGQtY2FyZCc7XG5pbXBvcnQgeyBjcmVhdGVGb290ZXJDbGljayB9IGZyb20gJy4vZm9vdGVyLWxpc3RlbmVycyc7XG5pbXBvcnQgeyBjaGVja1N0b3JhZ2UgfSBmcm9tICcuL3JlYWQtc3RvcmFnZSc7XG5cbihmdW5jdGlvbigpIHtcbiAgcGxhY2VUb0NvbnRhaW5lcigpO1xufSkoKTtcblxuKGZ1bmN0aW9uKCkge1xuICBjcmVhdGVTaWRlQ2xpY2soKTtcbn0pKCk7XG5cbihmdW5jdGlvbigpIHtcbiAgY3JlYXRlVG9kb0NsaWNrKCk7XG59KSgpO1xuXG4oZnVuY3Rpb24oKSB7XG4gIGNyZWF0ZUZvb3RlckNsaWNrKCk7XG59KSgpO1xuXG5jaGVja1N0b3JhZ2UoJ2luYm94Jyk7XG5jaGVja1N0b3JhZ2UoJ3NpZGUnKTtcblxuXG4vLyBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=