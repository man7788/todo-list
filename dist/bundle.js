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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: sans-serif;\n}\n\n#container {\n  display: grid;\n  grid-template-rows: 100px 10fr;\n  grid-template-columns: 300px 100fr;\n}\n\n/* ////////////////////////////////////////Header  */\n.header-container {\n  /* border: 2px solid salmon; */\n  grid-column: 1 / 2;\n  background: rgb(40, 40, 40);\n  font-size: 2rem;\n  color: whitesmoke;\n  display: grid;\n}\n\n.header-title {\n  place-self: center;\n}\n\n/* ////////////////////////////////////////Side  */\n.side-container {\n  /* border: 2px solid greenyellow; */\n  grid-row: 2 / 3;\n  grid-column: 1 / 2;\n  background: rgb(40, 40, 40);\n  display: grid;\n}\n\n.side-menu {\n  display: grid;\n  grid-template-rows: 50px 50px;\n  grid-template-columns: repeat(11, 1fr);\n  justify-content: center;\n}\n\n.side-button {\n  color: whitesmoke;\n  font-size: 1.5rem;\n}\n\n.side-button:nth-child(1) {\n  grid-row: 1 / 2;\n  grid-column: 3 / 10;\n\n}\n\n.side-button:nth-child(2) {\n  grid-row: 2 / 3;\n  grid-column: 3 / 10;\n  display: grid;\n  /* border-bottom: 3px solid whitesmoke; */\n}\n\n.side-project-container {\n  grid-row: 3 / 4;\n  grid-column: 4 / 10;\n  color: whitesmoke;\n}\n\n.side-project-box {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-size: 1.2rem;\n  margin-top: 1rem;\n}\n\n.side-del-button {\n  background: rgb(100, 100, 100);\n  color: whitesmoke;\n  border-radius: 20rem;\n  border: 1px solid transparent;\n  width: 2rem;\n  height: 1.8rem;\n}\n/* ////////////////////////////////////////Inbox  */\n\n.content {\n  grid-row: 1 / 4;\n  grid-column: 2 / 3;\n  background: rgb(55, 55, 55);\n  display: grid;\n  padding-bottom: 100px;\n}\n\n.inbox-content,\n.project-content {\n  color: whitesmoke;\n  display: grid;\n  grid-template-rows: 100px;\n  grid-template-columns: 1fr 5fr 1fr;\n}\n\n/* ////////////////////////////////////////Inbox Header  */\n.inbox-header-container,\n.project-header-container {\n  grid-row: 1 / 2;\n  grid-column: 2 / 3;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  border-bottom: 5px solid whitesmoke;\n  align-items: end;\n}\n\n.inbox-title,\n.project-title {\n  font-size: 2rem;\n  grid-column: 1 / 2;\n}\n\n.new-todo-div,\n.new-project-div {\n  grid-column: 3 / 4;\n  display: grid;\n  grid-template-columns: 1fr 1.5fr 109px;\n  justify-self: end;\n  align-items: center;\n}\n\n.inbox-add,\n.project-add {\n  font-size: 3rem;\n  grid-column: 2 / 3;\n  position: relative;\n  top: 0.28rem;\n  display: flex;\n  justify-content: flex-end;\n  padding-right: 0.5rem;\n}\n\n.new-todo {\n  font-size: 1.5rem;\n  position: relative;\n  top: 0.5rem;\n  width: fit-content;\n}\n\n.new-project-div select {\n  background: rgba(40, 40, 40, 0);\n  font-size: 1.5rem;\n  color: whitesmoke;\n  position: relative;\n  top: 0.5rem;\n}\n/* ////////////////////////////////////////Inbox Card  */\n.card-container {\n  grid-row: 2 / 3;\n  grid-column: 2 / 3;\n  display: flex;\n  flex-direction: column;\n}\n\n.card-item,\n.card-item-shrink {\n  background: rgba(40, 40, 40);\n  border-radius: 20px;\n  padding: 1rem;\n  margin-top: 1rem;\n  font-size: 1.5rem;\n  line-height: 30px;\n  display: grid;\n  grid-template-columns: minmax(200px, 1fr) minmax(140px, max-content);\n}\n\n.todo-form {\n  display: flex;\n  flex-direction: column;\n}\n\ninput,\n.card-item select {\n  background: rgba(40, 40, 40, 0);\n  color: whitesmoke;\n  font-size: 1.5rem;\n  border: 1px solid transparent;\n\n}\n\n.card-container input:nth-child(1) {\n  grid-row: 1 / 2;\n}\n\n.card-container input:nth-child(2) {\n  grid-row: 2 / 3;\n}\n\n.card-container input:nth-child(3) {\n  grid-row: 3 / 4;\n}\n\n.card-item select {\ngrid-row: 4 / 5;\n}\n\n.card-title {\n  grid-row: 1 / 2;\n}\n\n.card-descript {\n  grid-row: 2 / 3;\n}\n\n.card-date {\n  grid-row: 3 / 4;\n}\n\n.card-priority {\n  grid-row: 4 / 5;\n}\n\n.add-button,\n.edit-button,\n.del-button,\n.expand-button {\n  width: 4rem;\n  height: 1.8rem;\n  justify-self: end;\n  align-self: end;\n  background: rgb(100, 100, 100);\n  color: whitesmoke;\n  border-radius: 20rem;\n  border: 1px solid transparent;\n}\n.expand-button {\n  justify-self: start;\n  grid-row: 1 / 2;\n  grid-column: 2 / 3;\n}\n\n.add-button {\n  grid-column: 2 / 3;\n}\n.shrink-button,\n.edit-button {\n  grid-row: 4 / 5;\n  grid-column: 2 / 3;\n\n}\n\n.del-button {\n  grid-row: 1 / 2;\n  grid-column: 2 / 3;\n  width: 2rem;\n  justify-self: end;\n}\n\n.shrink-button {\n  width: 4rem;\n  height: 1.8rem;\n  justify-self: start;\n  align-self: end;\n  background: rgb(100, 100, 100);\n  color: whitesmoke;\n  border-radius: 20rem;\n  border: 1px solid transparent;\n}\n/* ////////////////////////////////////////Footer  */\n.footer-container {\n  /* border: 2px solid lightcoral; */\n  grid-column: 1 / 2;\n  background: rgb(40, 40, 40);\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  color: beige;\n  place-items: center;\n}\n\n.footer-add {\n  grid-column: 3 / 4;\n  font-size: 3rem;\n  padding-bottom: 0.5rem;\n}\n\n.footer-container > input {\n  grid-column: 5 / 6;\n  font-size: 1.5rem;\n  width: 14rem;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: sans-serif;\n}\n\n#container {\n  display: grid;\n  grid-template-rows: 100px 10fr;\n  grid-template-columns: 300px 100fr;\n}\n\n/* ////////////////////////////////////////Header  */\n.header-container {\n  /* border: 2px solid salmon; */\n  grid-column: 1 / 2;\n  background: rgb(40, 40, 40);\n  font-size: 2rem;\n  color: whitesmoke;\n  display: grid;\n}\n\n.header-title {\n  place-self: center;\n}\n\n/* ////////////////////////////////////////Side  */\n.side-container {\n  /* border: 2px solid greenyellow; */\n  grid-row: 2 / 3;\n  grid-column: 1 / 2;\n  background: rgb(40, 40, 40);\n  display: grid;\n}\n\n.side-menu {\n  display: grid;\n  grid-template-rows: 50px 50px;\n  grid-template-columns: repeat(11, 1fr);\n  justify-content: center;\n}\n\n.side-button {\n  color: whitesmoke;\n  font-size: 1.5rem;\n}\n\n.side-button:nth-child(1) {\n  grid-row: 1 / 2;\n  grid-column: 3 / 10;\n\n}\n\n.side-button:nth-child(2) {\n  grid-row: 2 / 3;\n  grid-column: 3 / 10;\n  display: grid;\n  /* border-bottom: 3px solid whitesmoke; */\n}\n\n.side-project-container {\n  grid-row: 3 / 4;\n  grid-column: 4 / 10;\n  color: whitesmoke;\n}\n\n.side-project-box {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-size: 1.2rem;\n  margin-top: 1rem;\n}\n\n.side-del-button {\n  background: rgb(100, 100, 100);\n  color: whitesmoke;\n  border-radius: 20rem;\n  border: 1px solid transparent;\n  width: 2rem;\n  height: 1.8rem;\n}\n/* ////////////////////////////////////////Inbox  */\n\n.content {\n  grid-row: 1 / 4;\n  grid-column: 2 / 3;\n  background: rgb(55, 55, 55);\n  display: grid;\n  padding-bottom: 100px;\n}\n\n.inbox-content,\n.project-content {\n  color: whitesmoke;\n  display: grid;\n  grid-template-rows: 100px;\n  grid-template-columns: 1fr 5fr 1fr;\n}\n\n/* ////////////////////////////////////////Inbox Header  */\n.inbox-header-container,\n.project-header-container {\n  grid-row: 1 / 2;\n  grid-column: 2 / 3;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  border-bottom: 5px solid whitesmoke;\n  align-items: end;\n}\n\n.inbox-title,\n.project-title {\n  font-size: 2rem;\n  grid-column: 1 / 2;\n}\n\n.new-todo-div,\n.new-project-div {\n  grid-column: 3 / 4;\n  display: grid;\n  grid-template-columns: 1fr 1.5fr 109px;\n  justify-self: end;\n  align-items: center;\n}\n\n.inbox-add,\n.project-add {\n  font-size: 3rem;\n  grid-column: 2 / 3;\n  position: relative;\n  top: 0.28rem;\n  display: flex;\n  justify-content: flex-end;\n  padding-right: 0.5rem;\n}\n\n.new-todo {\n  font-size: 1.5rem;\n  position: relative;\n  top: 0.5rem;\n  width: fit-content;\n}\n\n.new-project-div select {\n  background: rgba(40, 40, 40, 0);\n  font-size: 1.5rem;\n  color: whitesmoke;\n  position: relative;\n  top: 0.5rem;\n}\n/* ////////////////////////////////////////Inbox Card  */\n.card-container {\n  grid-row: 2 / 3;\n  grid-column: 2 / 3;\n  display: flex;\n  flex-direction: column;\n}\n\n.card-item,\n.card-item-shrink {\n  background: rgba(40, 40, 40);\n  border-radius: 20px;\n  padding: 1rem;\n  margin-top: 1rem;\n  font-size: 1.5rem;\n  line-height: 30px;\n  display: grid;\n  grid-template-columns: minmax(200px, 1fr) minmax(140px, max-content);\n}\n\n.todo-form {\n  display: flex;\n  flex-direction: column;\n}\n\ninput,\n.card-item select {\n  background: rgba(40, 40, 40, 0);\n  color: whitesmoke;\n  font-size: 1.5rem;\n  border: 1px solid transparent;\n\n}\n\n.card-container input:nth-child(1) {\n  grid-row: 1 / 2;\n}\n\n.card-container input:nth-child(2) {\n  grid-row: 2 / 3;\n}\n\n.card-container input:nth-child(3) {\n  grid-row: 3 / 4;\n}\n\n.card-item select {\ngrid-row: 4 / 5;\n}\n\n.card-title {\n  grid-row: 1 / 2;\n}\n\n.card-descript {\n  grid-row: 2 / 3;\n}\n\n.card-date {\n  grid-row: 3 / 4;\n}\n\n.card-priority {\n  grid-row: 4 / 5;\n}\n\n.add-button,\n.edit-button,\n.del-button,\n.expand-button {\n  width: 4rem;\n  height: 1.8rem;\n  justify-self: end;\n  align-self: end;\n  background: rgb(100, 100, 100);\n  color: whitesmoke;\n  border-radius: 20rem;\n  border: 1px solid transparent;\n}\n.expand-button {\n  justify-self: start;\n  grid-row: 1 / 2;\n  grid-column: 2 / 3;\n}\n\n.add-button {\n  grid-column: 2 / 3;\n}\n.shrink-button,\n.edit-button {\n  grid-row: 4 / 5;\n  grid-column: 2 / 3;\n\n}\n\n.del-button {\n  grid-row: 1 / 2;\n  grid-column: 2 / 3;\n  width: 2rem;\n  justify-self: end;\n}\n\n.shrink-button {\n  width: 4rem;\n  height: 1.8rem;\n  justify-self: start;\n  align-self: end;\n  background: rgb(100, 100, 100);\n  color: whitesmoke;\n  border-radius: 20rem;\n  border: 1px solid transparent;\n}\n/* ////////////////////////////////////////Footer  */\n.footer-container {\n  /* border: 2px solid lightcoral; */\n  grid-column: 1 / 2;\n  background: rgb(40, 40, 40);\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  color: beige;\n  place-items: center;\n}\n\n.footer-add {\n  grid-column: 3 / 4;\n  font-size: 3rem;\n  padding-bottom: 0.5rem;\n}\n\n.footer-container > input {\n  grid-column: 5 / 6;\n  font-size: 1.5rem;\n  width: 14rem;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _read_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./read-storage */ "./src/read-storage.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects */ "./src/projects.js");





function addButtonListener(add, item, title, descript, date, priority, editTitle) {
  add.addEventListener('click', function(e) {
    const output = (0,_storage__WEBPACK_IMPORTED_MODULE_1__.cardData)(title.value, descript.value, date.value, priority.value).data;
    
    let parent = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.parentFactory)(e).result;
    let searchParent = parent;
    if (searchParent == 'Inbox') {
      searchParent = 'inbox';
    }

    const buttonName = e.target.childNodes[0].textContent;
    
    const exist = (0,_read_storage__WEBPACK_IMPORTED_MODULE_2__.findExistKey)(searchParent, title.value);
    console.log(exist);
    console.log(searchParent);

    
    // 1. Plain new inbox, no name check needed
    if ((0,_read_storage__WEBPACK_IMPORTED_MODULE_2__.findKeys)('inbox').length == 0 && parent == 'Inbox') {
      cardShrink(
        item,
        title.value,
        descript.value,
        date.value,
        priority,
        );

      item.remove();
      (0,_storage__WEBPACK_IMPORTED_MODULE_1__.putJSON)('inbox', title.value, output);

      console.log('Item added fresh inbox');
      // 2. Inbox with items, check name for duplicate
    } else if (exist == true && buttonName == 'Add') {
      alert('Todo already exists.');
      console.log('Name already exists');
      
      // 3. Add card with no name duplicate
    } else if (!exist == true && buttonName == 'Add') { 
      cardShrink(
        item,
        title.value,
        descript.value,
        date.value,
        priority,
        );

      item.remove();
      console.log('Item added no duplicate name');
      (0,_storage__WEBPACK_IMPORTED_MODULE_1__.putJSON)('inbox', title.value, output);
      
        // 4. Edit card with name change, check name for duplicate
    } else if (title.value !== editTitle && exist == true && buttonName == 'Save') {
      alert('Name already exists.');
      console.log('Name already exists');
      
      // 5. Edit card without name change, edit without name duplicate
    } else if ((title.value == editTitle && exist == true && buttonName == 'Save') ||
    (title.value !== editTitle && exist !== true && buttonName == 'Save')) {
      console.log('Edit without name change / Edit without name duplicate');
      cardShrink(
        item,
        title.value,
        descript.value,
        date.value,
        priority,
        )
      item.remove();
      
      if (parent !== 'Inbox') {
        if (editTitle !== undefined) { 
          (0,_storage__WEBPACK_IMPORTED_MODULE_1__.putKey)(parent, editTitle, title.value);
        }
        (0,_storage__WEBPACK_IMPORTED_MODULE_1__.putJSON)(parent, title.value, output);
        findElement().select.remove()
        ;(0,_projects__WEBPACK_IMPORTED_MODULE_3__.addToProject)(parent);
      } else {
        if (editTitle !== undefined) { 
          (0,_storage__WEBPACK_IMPORTED_MODULE_1__.putKey)('inbox', editTitle, title.value);
        }
        (0,_storage__WEBPACK_IMPORTED_MODULE_1__.putJSON)('inbox', title.value, output);
      }
    }
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

function delButtonListener(del, item, type, key) {
  del.addEventListener('click', function(e) {
    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.removeCardData)(type, key);

    let parent = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.parentFactory)(e).result;

    check:
    if (parent !== 'Inbox') {
      findElement().select.remove()
      ;(0,_projects__WEBPACK_IMPORTED_MODULE_3__.addToProject)(type);
    } else {
      break check;
    }

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

  addButtonListener(add, cardItem, cardTitle, cardDescript, cardDate, cardPriority, editTitle);

  if (editPri !== undefined) {
    if (typeof editPri === 'string') {
      for (let i = 0; i < cardPriority.options.length; i++) {
        if (cardPriority.options[i].textContent == editPri) {
          cardPriority.options[i].setAttribute('selected', 'selected');
        }
      }
    } else {
      let selected = editPri.selectedIndex;
      cardPriority.options[selected].setAttribute('selected', 'selected');
    }
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
  const inboxTitle = findElement().inboxTitle;
  const projectTitle = findElement().projectTitle;

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

  if (inboxTitle !== null) {
    delButtonListener(del, cardItem, inboxTitle.textContent.toLowerCase(), cardTitle.textContent );
  } else {
    delButtonListener(del, cardItem, projectTitle.textContent, cardTitle.textContent );
  }

  expandButtonListener(expand, cardItem, title, descript, date, priority);
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
  const inboxTitle = findElement().inboxTitle;
  const projectTitle = findElement().projectTitle;

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
  
  if (inboxTitle !== null) {
    delButtonListener(del, cardItem, inboxTitle.textContent.toLowerCase(), cardTitle.textContent );
  } else {
    delButtonListener(del, cardItem, projectTitle.textContent, cardTitle.textContent );
  }

  editButtonListener(edit, cardItem, title, descript, date, priority);
  shrinkButtonListener(shrink, cardItem, title, descript, date, priority);
}

function findElement() {
  const newButton = document.querySelector('.new-todo-div');
  const cardContainer = document.querySelector('.card-container');
  const inboxTitle = document.querySelector('.inbox-title');
  const projectTitle = document.querySelector('.project-title');
  const select = document.querySelector('.new-project-div > select');

  return { newButton, cardContainer, inboxTitle, projectTitle, select }

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
/* harmony export */   "parentFactory": () => (/* binding */ parentFactory),
/* harmony export */   "prjNameFactory": () => (/* binding */ prjNameFactory),
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

const parentFactory = (event) => {
  const regex = /.+/;
  let text = event.composedPath();
  text = text[3].innerText;
  let result = regex.exec(text);
  result = result[0];

  return { result }
}

const prjNameFactory = (event) => {
  const regex = /.+/;
  let path = event.composedPath();
  path = path[1].innerText;
  let result = regex.exec(path);
  result = result[0];

  return { result }
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
/* harmony import */ var _read_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./read-storage */ "./src/read-storage.js");
/* harmony import */ var _side_listeners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./side-listeners */ "./src/side-listeners.js");






function findElement() {
  const footerAdd = document.querySelector('.footer-add');
  const projectName = document.querySelector('.footer-container > input');
  const projectDiv = document.querySelector('.side-project-container');
  const mainContent = document.querySelector('.content');
  const wipeContent = document.querySelector('.content > *');

  let contentTitle;
  if (document.querySelector('.inbox-title') == undefined) {
    contentTitle = document.querySelector('.project-title').textContent;
  } else {
    contentTitle = document.querySelector('.inbox-title').textContent;
  }

  return { footerAdd, projectName, projectDiv, mainContent, 
    wipeContent, contentTitle }
}

function createFooterClick() {
  const add = findElement().footerAdd;
  
  add.addEventListener('click', function() {
    const projectName = findElement().projectName;
    const exist = (0,_read_storage__WEBPACK_IMPORTED_MODULE_3__.findExistKey)('side', projectName.value);
    console.log(exist);
    if (exist !== true) {
      createSideProject(projectName.value);
      const output = (0,_storage__WEBPACK_IMPORTED_MODULE_2__.cardData)(projectName.value).data;
      (0,_storage__WEBPACK_IMPORTED_MODULE_2__.putJSON)('side', projectName.value, output);
      (0,_storage__WEBPACK_IMPORTED_MODULE_2__.putJSON)(projectName.value);
      projectName.value = '';
    } else { alert('Name already exists'); }
  });
}

function createSideProject(project) {
  const projectBox = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('side-project-box').element;
  const projectItem = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('side-project-title').element;
  const projectDelete = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.buttonFactory)('button', 'side-del-button', 'X').element;
  const projectDiv = findElement().projectDiv;

  projectItem.textContent = project;
  projectDelete.textContent = 'X';
  projectBox.append(projectItem, projectDelete);
  
  projectItem.addEventListener('click', function() {
    loadProject(project, projectItem);
    (0,_projects__WEBPACK_IMPORTED_MODULE_1__.addProjectCard)();
    (0,_projects__WEBPACK_IMPORTED_MODULE_1__.addToProject)(project);
  });
  
  projectDelete.addEventListener('click', function(e) {
    deleteProject(project, e);
  });

  projectDiv.append(projectBox);
}

function loadProject(project) {
  const load = findElement().mainContent;

  findElement().wipeContent.remove();
  const projectContent = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.createProjectContent)(project)
  load.appendChild(projectContent);
  (0,_read_storage__WEBPACK_IMPORTED_MODULE_3__.checkStorage)(project);
}

function deleteProject(project, event) {
  const title = findElement().contentTitle;
  const prjName = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.prjNameFactory)(event).result;
  const container = findElement().projectDiv;
  const length = Object.keys(JSON.parse(localStorage.getItem('side'))).length;

  (0,_storage__WEBPACK_IMPORTED_MODULE_2__.removePrjData)(project);
  container.replaceChildren();
  (0,_read_storage__WEBPACK_IMPORTED_MODULE_3__.checkStorage)('side');

  if (title == prjName || length == 0) {
    (0,_side_listeners__WEBPACK_IMPORTED_MODULE_4__.loadInbox)();
  }

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
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/storage.js");



function createInboxContent() {
  const inboxContent = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('inbox-content').element;
  const headerContent = createInboxHeader();
  const cardContainer = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('card-container').element;

  inboxContent.append(headerContent, cardContainer);
  
  if (!localStorage.getItem('inbox')) {
    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.putJSON)('inbox');
  }

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
/* harmony import */ var _read_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./read-storage */ "./src/read-storage.js");




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

function addToProject(project) {
  let addList = (0,_read_storage__WEBPACK_IMPORTED_MODULE_2__.findKeys)('inbox');
  let removeList = (0,_read_storage__WEBPACK_IMPORTED_MODULE_2__.findKeys)(project);
  let newList = [];

  addList.forEach(item => {
    if (!removeList.includes(item)) {
      newList.push(item);
    }
  }); 
  
  const list = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.addPrjFactory)('Add to project', newList).element;
  const div = document.querySelector('.new-project-div');
  div.append(list);
}

function addProjectCard() {
  const add = document.querySelector('.project-add');
  const title = document.querySelector('.project-title').textContent;
  
  add.addEventListener('click', function() {
    const selected = document.querySelector('.new-project-div select');
    const value = selected.value;
    const index = selected.selectedIndex;
    const data = (0,_read_storage__WEBPACK_IMPORTED_MODULE_2__.findSelect)(value);

    check:
    if (selected.length !== 0) {
      (0,_read_storage__WEBPACK_IMPORTED_MODULE_2__.loadStorage)(value, 'inbox');
      (0,_storage__WEBPACK_IMPORTED_MODULE_1__.putJSON)(title, value, data);
      selected[index].remove();
    } else {
      break check;
    }
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
/* harmony export */   "checkStorage": () => (/* binding */ checkStorage),
/* harmony export */   "findExistKey": () => (/* binding */ findExistKey),
/* harmony export */   "findKeys": () => (/* binding */ findKeys),
/* harmony export */   "findSelect": () => (/* binding */ findSelect),
/* harmony export */   "findStorage": () => (/* binding */ findStorage),
/* harmony export */   "loadStorage": () => (/* binding */ loadStorage)
/* harmony export */ });
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout */ "./src/layout.js");
/* harmony import */ var _add_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-card */ "./src/add-card.js");
/* harmony import */ var _footer_listeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer-listeners */ "./src/footer-listeners.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects */ "./src/projects.js");





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

  if (type == 'inbox') {
    (0,_add_card__WEBPACK_IMPORTED_MODULE_1__.cardShrink)('', title, discript, date, priority);
  } else if (type == 'side') {
    (0,_footer_listeners__WEBPACK_IMPORTED_MODULE_2__.createSideProject)(title);
  } else {
    (0,_add_card__WEBPACK_IMPORTED_MODULE_1__.cardShrink)('', title, discript, date, priority);
  }
}

function findStorage(type) {
  const keyList = Object.keys(JSON.parse(localStorage[type]));
  for (let i = 0; i < keyList.length; i++) {
    loadStorage(keyList[i], type);
  }
}

function findKeys(type) {
  const keyList = Object.keys(JSON.parse(localStorage[type]));
  return keyList;
}

function findExistKey(type, exist) {
  if (JSON.parse(localStorage[type]) == undefined) {
    return;
  }
  const keysList = findKeys(type);
  let value;
  if (keysList.includes(exist)) {
    console.log('exist');
    console.log(keysList);
    value = true;
  } else {
    value = false;
    }
  return value;
}

function findSelect(key) {
  const keyList = JSON.parse(localStorage['inbox']);
  return keyList[key];
}




/***/ }),

/***/ "./src/side-listeners.js":
/*!*******************************!*\
  !*** ./src/side-listeners.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSideClick": () => (/* binding */ createSideClick),
/* harmony export */   "loadInbox": () => (/* binding */ loadInbox)
/* harmony export */ });
/* harmony import */ var _add_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-card */ "./src/add-card.js");
/* harmony import */ var _read_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./read-storage */ "./src/read-storage.js");
/* harmony import */ var _inbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inbox */ "./src/inbox.js");





function findElement() {
  const menuInbox = document.querySelector('.side-button:nth-child(1)');
  const mainContent = document.querySelector('.content');
  const inboxContent = document.querySelector('.inbox-content');
  const wipeContent = document.querySelector('.content > *');

  return { menuInbox, mainContent, inboxContent, wipeContent };
}

function createSideClick() {
  const inbox = findElement().menuInbox;
  inbox.addEventListener('click', loadInbox);
}

function loadInbox() {
  const load = findElement().mainContent;

  const p1 = new Promise((resolve) => {
    resolve(findElement().wipeContent.remove())
  });

  const p2 = new Promise((resolve) => {
    const clean = (0,_inbox__WEBPACK_IMPORTED_MODULE_2__.createInboxContent)();
    resolve(load.append(clean));
  });
  
  p1.then(() => {
    p2.then (() => {
      (0,_read_storage__WEBPACK_IMPORTED_MODULE_1__.checkStorage)('inbox');
    });
  });
    
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
/* harmony export */   "cardData": () => (/* binding */ cardData),
/* harmony export */   "putJSON": () => (/* binding */ putJSON),
/* harmony export */   "putKey": () => (/* binding */ putKey),
/* harmony export */   "removeCardData": () => (/* binding */ removeCardData),
/* harmony export */   "removePrjData": () => (/* binding */ removePrjData)
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
    // console.log(text);
  }
  console.log(localStorage);
}

function putKey(type, oldKey, modKey) {
  const data = JSON.parse(localStorage.getItem(type));
  const replacements = {};
  replacements[oldKey] = modKey;

  let replacedItems = Object.keys(data).map((key) => {
  const newKey = replacements[key] || key;
  return { [newKey] : data[key] };
  });

  const newData = replacedItems.reduce((a, b) => Object.assign({}, a, b));
  localStorage.setItem(type, JSON.stringify(newData));
}


function removeCardData(type, key) {
  let text = JSON.parse(localStorage.getItem(type));
  delete text[key];
  localStorage.setItem(type, JSON.stringify(text));
}

function removePrjData(type) {
  localStorage.removeItem(type);
  removeCardData('side', type);
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

(function() {
  (0,_read_storage__WEBPACK_IMPORTED_MODULE_5__.checkStorage)('inbox');
  (0,_read_storage__WEBPACK_IMPORTED_MODULE_5__.checkStorage)('side');
})();

// localStorage.clear();

    // Prevent new todo using duplicated names
    // Prevent edit todo using duplicated names
    // Prevent add to project to add duplicated names todo
    // Delete project buttons

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSw2Q0FBNkMsZUFBZSxjQUFjLDJCQUEyQiw0QkFBNEIsR0FBRyxnQkFBZ0Isa0JBQWtCLG1DQUFtQyx1Q0FBdUMsR0FBRyw4RUFBOEUsaUNBQWlDLHlCQUF5QixnQ0FBZ0Msb0JBQW9CLHNCQUFzQixrQkFBa0IsR0FBRyxtQkFBbUIsdUJBQXVCLEdBQUcsMEVBQTBFLHNDQUFzQyxzQkFBc0IsdUJBQXVCLGdDQUFnQyxrQkFBa0IsR0FBRyxnQkFBZ0Isa0JBQWtCLGtDQUFrQywyQ0FBMkMsNEJBQTRCLEdBQUcsa0JBQWtCLHNCQUFzQixzQkFBc0IsR0FBRywrQkFBK0Isb0JBQW9CLHdCQUF3QixLQUFLLCtCQUErQixvQkFBb0Isd0JBQXdCLGtCQUFrQiw0Q0FBNEMsS0FBSyw2QkFBNkIsb0JBQW9CLHdCQUF3QixzQkFBc0IsR0FBRyx1QkFBdUIsa0JBQWtCLHdCQUF3QixtQ0FBbUMsc0JBQXNCLHFCQUFxQixHQUFHLHNCQUFzQixtQ0FBbUMsc0JBQXNCLHlCQUF5QixrQ0FBa0MsZ0JBQWdCLG1CQUFtQixHQUFHLG9FQUFvRSxvQkFBb0IsdUJBQXVCLGdDQUFnQyxrQkFBa0IsMEJBQTBCLEdBQUcsdUNBQXVDLHNCQUFzQixrQkFBa0IsOEJBQThCLHVDQUF1QyxHQUFHLHNIQUFzSCxvQkFBb0IsdUJBQXVCLGtCQUFrQix1Q0FBdUMsd0NBQXdDLHFCQUFxQixHQUFHLG1DQUFtQyxvQkFBb0IsdUJBQXVCLEdBQUcsc0NBQXNDLHVCQUF1QixrQkFBa0IsMkNBQTJDLHNCQUFzQix3QkFBd0IsR0FBRywrQkFBK0Isb0JBQW9CLHVCQUF1Qix1QkFBdUIsaUJBQWlCLGtCQUFrQiw4QkFBOEIsMEJBQTBCLEdBQUcsZUFBZSxzQkFBc0IsdUJBQXVCLGdCQUFnQix1QkFBdUIsR0FBRyw2QkFBNkIsb0NBQW9DLHNCQUFzQixzQkFBc0IsdUJBQXVCLGdCQUFnQixHQUFHLDhFQUE4RSxvQkFBb0IsdUJBQXVCLGtCQUFrQiwyQkFBMkIsR0FBRyxvQ0FBb0MsaUNBQWlDLHdCQUF3QixrQkFBa0IscUJBQXFCLHNCQUFzQixzQkFBc0Isa0JBQWtCLHlFQUF5RSxHQUFHLGdCQUFnQixrQkFBa0IsMkJBQTJCLEdBQUcsK0JBQStCLG9DQUFvQyxzQkFBc0Isc0JBQXNCLGtDQUFrQyxLQUFLLHdDQUF3QyxvQkFBb0IsR0FBRyx3Q0FBd0Msb0JBQW9CLEdBQUcsd0NBQXdDLG9CQUFvQixHQUFHLHVCQUF1QixrQkFBa0IsR0FBRyxpQkFBaUIsb0JBQW9CLEdBQUcsb0JBQW9CLG9CQUFvQixHQUFHLGdCQUFnQixvQkFBb0IsR0FBRyxvQkFBb0Isb0JBQW9CLEdBQUcsK0RBQStELGdCQUFnQixtQkFBbUIsc0JBQXNCLG9CQUFvQixtQ0FBbUMsc0JBQXNCLHlCQUF5QixrQ0FBa0MsR0FBRyxrQkFBa0Isd0JBQXdCLG9CQUFvQix1QkFBdUIsR0FBRyxpQkFBaUIsdUJBQXVCLEdBQUcsaUNBQWlDLG9CQUFvQix1QkFBdUIsS0FBSyxpQkFBaUIsb0JBQW9CLHVCQUF1QixnQkFBZ0Isc0JBQXNCLEdBQUcsb0JBQW9CLGdCQUFnQixtQkFBbUIsd0JBQXdCLG9CQUFvQixtQ0FBbUMsc0JBQXNCLHlCQUF5QixrQ0FBa0MsR0FBRyw0RUFBNEUscUNBQXFDLHlCQUF5QixnQ0FBZ0Msa0JBQWtCLDBDQUEwQyxpQkFBaUIsd0JBQXdCLEdBQUcsaUJBQWlCLHVCQUF1QixvQkFBb0IsMkJBQTJCLEdBQUcsK0JBQStCLHVCQUF1QixzQkFBc0IsaUJBQWlCLEdBQUcsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sWUFBWSxPQUFPLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLEtBQUssWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sUUFBUSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZ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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsR0FBRzs7QUFFSCxpRUFBaUU7QUFDakU7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUNoREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3VCO0FBQ087QUFDTjtBQUNVO0FBQ1Q7O0FBRTlDO0FBQ0EsRUFBRSx5REFBZ0I7QUFDbEIsQ0FBQzs7QUFFRDtBQUNBLEVBQUUsZ0VBQWU7QUFDakIsQ0FBQzs7QUFFRDtBQUNBLEVBQUUsMERBQWU7QUFDakIsQ0FBQzs7QUFFRDtBQUNBLEVBQUUsb0VBQWlCO0FBQ25CLENBQUM7O0FBRUQ7QUFDQSxFQUFFLDJEQUFZO0FBQ2QsRUFBRSwyREFBWTtBQUNkLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FkZC1jYXJkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mYWN0b3J5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mb290ZXItbGlzdGVuZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5ib3guanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xheW91dC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3JlYWQtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2lkZS1saXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NpZGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDEwZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDEwMGZyO1xcbn1cXG5cXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vSGVhZGVyICAqL1xcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIHNhbG1vbjsgKi9cXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGJhY2tncm91bmQ6IHJnYig0MCwgNDAsIDQwKTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmhlYWRlci10aXRsZSB7XFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9TaWRlICAqL1xcbi5zaWRlLWNvbnRhaW5lciB7XFxuICAvKiBib3JkZXI6IDJweCBzb2xpZCBncmVlbnllbGxvdzsgKi9cXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGJhY2tncm91bmQ6IHJnYig0MCwgNDAsIDQwKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5zaWRlLW1lbnUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCA1MHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDFmcik7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNpZGUtYnV0dG9uIHtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5zaWRlLWJ1dHRvbjpudGgtY2hpbGQoMSkge1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgZ3JpZC1jb2x1bW46IDMgLyAxMDtcXG5cXG59XFxuXFxuLnNpZGUtYnV0dG9uOm50aC1jaGlsZCgyKSB7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBncmlkLWNvbHVtbjogMyAvIDEwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIC8qIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB3aGl0ZXNtb2tlOyAqL1xcbn1cXG5cXG4uc2lkZS1wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxuICBncmlkLWNvbHVtbjogNCAvIDEwO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbi5zaWRlLXByb2plY3QtYm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4uc2lkZS1kZWwtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxMDAsIDEwMCwgMTAwKTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyLXJhZGl1czogMjByZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiAycmVtO1xcbiAgaGVpZ2h0OiAxLjhyZW07XFxufVxcbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9JbmJveCAgKi9cXG5cXG4uY29udGVudCB7XFxuICBncmlkLXJvdzogMSAvIDQ7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBiYWNrZ3JvdW5kOiByZ2IoNTUsIDU1LCA1NSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xcbn1cXG5cXG4uaW5ib3gtY29udGVudCxcXG4ucHJvamVjdC1jb250ZW50IHtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnIgMWZyO1xcbn1cXG5cXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vSW5ib3ggSGVhZGVyICAqL1xcbi5pbmJveC1oZWFkZXItY29udGFpbmVyLFxcbi5wcm9qZWN0LWhlYWRlci1jb250YWluZXIge1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgd2hpdGVzbW9rZTtcXG4gIGFsaWduLWl0ZW1zOiBlbmQ7XFxufVxcblxcbi5pbmJveC10aXRsZSxcXG4ucHJvamVjdC10aXRsZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxufVxcblxcbi5uZXctdG9kby1kaXYsXFxuLm5ldy1wcm9qZWN0LWRpdiB7XFxuICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS41ZnIgMTA5cHg7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbmJveC1hZGQsXFxuLnByb2plY3QtYWRkIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMC4yOHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbn1cXG5cXG4ubmV3LXRvZG8ge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDAuNXJlbTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWRpdiBzZWxlY3Qge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MCwgNDAsIDQwLCAwKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDAuNXJlbTtcXG59XFxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0luYm94IENhcmQgICovXFxuLmNhcmQtY29udGFpbmVyIHtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY2FyZC1pdGVtLFxcbi5jYXJkLWl0ZW0tc2hyaW5rIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDAsIDQwLCA0MCk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDIwMHB4LCAxZnIpIG1pbm1heCgxNDBweCwgbWF4LWNvbnRlbnQpO1xcbn1cXG5cXG4udG9kby1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5pbnB1dCxcXG4uY2FyZC1pdGVtIHNlbGVjdCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQwLCA0MCwgNDAsIDApO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcblxcbn1cXG5cXG4uY2FyZC1jb250YWluZXIgaW5wdXQ6bnRoLWNoaWxkKDEpIHtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLmNhcmQtY29udGFpbmVyIGlucHV0Om50aC1jaGlsZCgyKSB7XFxuICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbi5jYXJkLWNvbnRhaW5lciBpbnB1dDpudGgtY2hpbGQoMykge1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cXG4uY2FyZC1pdGVtIHNlbGVjdCB7XFxuZ3JpZC1yb3c6IDQgLyA1O1xcbn1cXG5cXG4uY2FyZC10aXRsZSB7XFxuICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi5jYXJkLWRlc2NyaXB0IHtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuLmNhcmQtZGF0ZSB7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxufVxcblxcbi5jYXJkLXByaW9yaXR5IHtcXG4gIGdyaWQtcm93OiA0IC8gNTtcXG59XFxuXFxuLmFkZC1idXR0b24sXFxuLmVkaXQtYnV0dG9uLFxcbi5kZWwtYnV0dG9uLFxcbi5leHBhbmQtYnV0dG9uIHtcXG4gIHdpZHRoOiA0cmVtO1xcbiAgaGVpZ2h0OiAxLjhyZW07XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGJhY2tncm91bmQ6IHJnYigxMDAsIDEwMCwgMTAwKTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyLXJhZGl1czogMjByZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuLmV4cGFuZC1idXR0b24ge1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG59XFxuXFxuLmFkZC1idXR0b24ge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbn1cXG4uc2hyaW5rLWJ1dHRvbixcXG4uZWRpdC1idXR0b24ge1xcbiAgZ3JpZC1yb3c6IDQgLyA1O1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcblxcbn1cXG5cXG4uZGVsLWJ1dHRvbiB7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICB3aWR0aDogMnJlbTtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4uc2hyaW5rLWJ1dHRvbiB7XFxuICB3aWR0aDogNHJlbTtcXG4gIGhlaWdodDogMS44cmVtO1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGJhY2tncm91bmQ6IHJnYigxMDAsIDEwMCwgMTAwKTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyLXJhZGl1czogMjByZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0Zvb3RlciAgKi9cXG4uZm9vdGVyLWNvbnRhaW5lciB7XFxuICAvKiBib3JkZXI6IDJweCBzb2xpZCBsaWdodGNvcmFsOyAqL1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgYmFja2dyb3VuZDogcmdiKDQwLCA0MCwgNDApO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XFxuICBjb2xvcjogYmVpZ2U7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyLWFkZCB7XFxuICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4uZm9vdGVyLWNvbnRhaW5lciA+IGlucHV0IHtcXG4gIGdyaWQtY29sdW1uOiA1IC8gNjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgd2lkdGg6IDE0cmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixrQ0FBa0M7QUFDcEM7O0FBRUEsb0RBQW9EO0FBQ3BEO0VBQ0UsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUEsa0RBQWtEO0FBQ2xEO0VBQ0UsbUNBQW1DO0VBQ25DLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0Isc0NBQXNDO0VBQ3RDLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1COztBQUVyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsY0FBYztBQUNoQjtBQUNBLG1EQUFtRDs7QUFFbkQ7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtDQUFrQztBQUNwQzs7QUFFQSwwREFBMEQ7QUFDMUQ7O0VBRUUsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLG1DQUFtQztFQUNuQyxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFDQSx3REFBd0Q7QUFDeEQ7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsNEJBQTRCO0VBQzVCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG9FQUFvRTtBQUN0RTs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsK0JBQStCO0VBQy9CLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsNkJBQTZCOztBQUUvQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtBQUNBLGVBQWU7QUFDZjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7Ozs7RUFJRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBOztFQUVFLGVBQWU7RUFDZixrQkFBa0I7O0FBRXBCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLDZCQUE2QjtBQUMvQjtBQUNBLG9EQUFvRDtBQUNwRDtFQUNFLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDEwZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDEwMGZyO1xcbn1cXG5cXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vSGVhZGVyICAqL1xcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIHNhbG1vbjsgKi9cXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGJhY2tncm91bmQ6IHJnYig0MCwgNDAsIDQwKTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmhlYWRlci10aXRsZSB7XFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9TaWRlICAqL1xcbi5zaWRlLWNvbnRhaW5lciB7XFxuICAvKiBib3JkZXI6IDJweCBzb2xpZCBncmVlbnllbGxvdzsgKi9cXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGJhY2tncm91bmQ6IHJnYig0MCwgNDAsIDQwKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5zaWRlLW1lbnUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCA1MHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDFmcik7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNpZGUtYnV0dG9uIHtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5zaWRlLWJ1dHRvbjpudGgtY2hpbGQoMSkge1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgZ3JpZC1jb2x1bW46IDMgLyAxMDtcXG5cXG59XFxuXFxuLnNpZGUtYnV0dG9uOm50aC1jaGlsZCgyKSB7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBncmlkLWNvbHVtbjogMyAvIDEwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIC8qIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB3aGl0ZXNtb2tlOyAqL1xcbn1cXG5cXG4uc2lkZS1wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxuICBncmlkLWNvbHVtbjogNCAvIDEwO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbi5zaWRlLXByb2plY3QtYm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4uc2lkZS1kZWwtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxMDAsIDEwMCwgMTAwKTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyLXJhZGl1czogMjByZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiAycmVtO1xcbiAgaGVpZ2h0OiAxLjhyZW07XFxufVxcbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9JbmJveCAgKi9cXG5cXG4uY29udGVudCB7XFxuICBncmlkLXJvdzogMSAvIDQ7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBiYWNrZ3JvdW5kOiByZ2IoNTUsIDU1LCA1NSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xcbn1cXG5cXG4uaW5ib3gtY29udGVudCxcXG4ucHJvamVjdC1jb250ZW50IHtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnIgMWZyO1xcbn1cXG5cXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vSW5ib3ggSGVhZGVyICAqL1xcbi5pbmJveC1oZWFkZXItY29udGFpbmVyLFxcbi5wcm9qZWN0LWhlYWRlci1jb250YWluZXIge1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgd2hpdGVzbW9rZTtcXG4gIGFsaWduLWl0ZW1zOiBlbmQ7XFxufVxcblxcbi5pbmJveC10aXRsZSxcXG4ucHJvamVjdC10aXRsZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxufVxcblxcbi5uZXctdG9kby1kaXYsXFxuLm5ldy1wcm9qZWN0LWRpdiB7XFxuICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS41ZnIgMTA5cHg7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbmJveC1hZGQsXFxuLnByb2plY3QtYWRkIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMC4yOHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbn1cXG5cXG4ubmV3LXRvZG8ge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDAuNXJlbTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWRpdiBzZWxlY3Qge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MCwgNDAsIDQwLCAwKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDAuNXJlbTtcXG59XFxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0luYm94IENhcmQgICovXFxuLmNhcmQtY29udGFpbmVyIHtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY2FyZC1pdGVtLFxcbi5jYXJkLWl0ZW0tc2hyaW5rIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDAsIDQwLCA0MCk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDIwMHB4LCAxZnIpIG1pbm1heCgxNDBweCwgbWF4LWNvbnRlbnQpO1xcbn1cXG5cXG4udG9kby1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5pbnB1dCxcXG4uY2FyZC1pdGVtIHNlbGVjdCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQwLCA0MCwgNDAsIDApO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcblxcbn1cXG5cXG4uY2FyZC1jb250YWluZXIgaW5wdXQ6bnRoLWNoaWxkKDEpIHtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLmNhcmQtY29udGFpbmVyIGlucHV0Om50aC1jaGlsZCgyKSB7XFxuICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbi5jYXJkLWNvbnRhaW5lciBpbnB1dDpudGgtY2hpbGQoMykge1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cXG4uY2FyZC1pdGVtIHNlbGVjdCB7XFxuZ3JpZC1yb3c6IDQgLyA1O1xcbn1cXG5cXG4uY2FyZC10aXRsZSB7XFxuICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi5jYXJkLWRlc2NyaXB0IHtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuLmNhcmQtZGF0ZSB7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxufVxcblxcbi5jYXJkLXByaW9yaXR5IHtcXG4gIGdyaWQtcm93OiA0IC8gNTtcXG59XFxuXFxuLmFkZC1idXR0b24sXFxuLmVkaXQtYnV0dG9uLFxcbi5kZWwtYnV0dG9uLFxcbi5leHBhbmQtYnV0dG9uIHtcXG4gIHdpZHRoOiA0cmVtO1xcbiAgaGVpZ2h0OiAxLjhyZW07XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGJhY2tncm91bmQ6IHJnYigxMDAsIDEwMCwgMTAwKTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyLXJhZGl1czogMjByZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuLmV4cGFuZC1idXR0b24ge1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG59XFxuXFxuLmFkZC1idXR0b24ge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbn1cXG4uc2hyaW5rLWJ1dHRvbixcXG4uZWRpdC1idXR0b24ge1xcbiAgZ3JpZC1yb3c6IDQgLyA1O1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcblxcbn1cXG5cXG4uZGVsLWJ1dHRvbiB7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICB3aWR0aDogMnJlbTtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4uc2hyaW5rLWJ1dHRvbiB7XFxuICB3aWR0aDogNHJlbTtcXG4gIGhlaWdodDogMS44cmVtO1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGJhY2tncm91bmQ6IHJnYigxMDAsIDEwMCwgMTAwKTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyLXJhZGl1czogMjByZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0Zvb3RlciAgKi9cXG4uZm9vdGVyLWNvbnRhaW5lciB7XFxuICAvKiBib3JkZXI6IDJweCBzb2xpZCBsaWdodGNvcmFsOyAqL1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgYmFja2dyb3VuZDogcmdiKDQwLCA0MCwgNDApO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XFxuICBjb2xvcjogYmVpZ2U7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyLWFkZCB7XFxuICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4uZm9vdGVyLWNvbnRhaW5lciA+IGlucHV0IHtcXG4gIGdyaWQtY29sdW1uOiA1IC8gNjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgd2lkdGg6IDE0cmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IFxuICBlbGVtZW50RmFjdG9yeSwgXG4gIGZvcm1GYWN0b3J5LCBcbiAgaW5wdXRGYWN0b3J5LCBcbiAgc2VsZWN0RmFjdG9yeSwgXG4gIGJ1dHRvbkZhY3RvcnksXG4gIHBhcmVudEZhY3Rvcnlcbn0gZnJvbSAnLi9mYWN0b3J5JztcbmltcG9ydCB7IGNhcmREYXRhLCBwdXRKU09OLCBwdXRLZXksIHJlbW92ZUNhcmREYXRhfSBmcm9tICcuL3N0b3JhZ2UnO1xuaW1wb3J0IHsgZmluZEtleXMsIGZpbmRFeGlzdEtleX0gZnJvbSAnLi9yZWFkLXN0b3JhZ2UnO1xuaW1wb3J0IHsgYWRkVG9Qcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0cyc7XG5cbmZ1bmN0aW9uIGFkZEJ1dHRvbkxpc3RlbmVyKGFkZCwgaXRlbSwgdGl0bGUsIGRlc2NyaXB0LCBkYXRlLCBwcmlvcml0eSwgZWRpdFRpdGxlKSB7XG4gIGFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zdCBvdXRwdXQgPSBjYXJkRGF0YSh0aXRsZS52YWx1ZSwgZGVzY3JpcHQudmFsdWUsIGRhdGUudmFsdWUsIHByaW9yaXR5LnZhbHVlKS5kYXRhO1xuICAgIFxuICAgIGxldCBwYXJlbnQgPSBwYXJlbnRGYWN0b3J5KGUpLnJlc3VsdDtcbiAgICBsZXQgc2VhcmNoUGFyZW50ID0gcGFyZW50O1xuICAgIGlmIChzZWFyY2hQYXJlbnQgPT0gJ0luYm94Jykge1xuICAgICAgc2VhcmNoUGFyZW50ID0gJ2luYm94JztcbiAgICB9XG5cbiAgICBjb25zdCBidXR0b25OYW1lID0gZS50YXJnZXQuY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudDtcbiAgICBcbiAgICBjb25zdCBleGlzdCA9IGZpbmRFeGlzdEtleShzZWFyY2hQYXJlbnQsIHRpdGxlLnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyhleGlzdCk7XG4gICAgY29uc29sZS5sb2coc2VhcmNoUGFyZW50KTtcblxuICAgIFxuICAgIC8vIDEuIFBsYWluIG5ldyBpbmJveCwgbm8gbmFtZSBjaGVjayBuZWVkZWRcbiAgICBpZiAoZmluZEtleXMoJ2luYm94JykubGVuZ3RoID09IDAgJiYgcGFyZW50ID09ICdJbmJveCcpIHtcbiAgICAgIGNhcmRTaHJpbmsoXG4gICAgICAgIGl0ZW0sXG4gICAgICAgIHRpdGxlLnZhbHVlLFxuICAgICAgICBkZXNjcmlwdC52YWx1ZSxcbiAgICAgICAgZGF0ZS52YWx1ZSxcbiAgICAgICAgcHJpb3JpdHksXG4gICAgICAgICk7XG5cbiAgICAgIGl0ZW0ucmVtb3ZlKCk7XG4gICAgICBwdXRKU09OKCdpbmJveCcsIHRpdGxlLnZhbHVlLCBvdXRwdXQpO1xuXG4gICAgICBjb25zb2xlLmxvZygnSXRlbSBhZGRlZCBmcmVzaCBpbmJveCcpO1xuICAgICAgLy8gMi4gSW5ib3ggd2l0aCBpdGVtcywgY2hlY2sgbmFtZSBmb3IgZHVwbGljYXRlXG4gICAgfSBlbHNlIGlmIChleGlzdCA9PSB0cnVlICYmIGJ1dHRvbk5hbWUgPT0gJ0FkZCcpIHtcbiAgICAgIGFsZXJ0KCdUb2RvIGFscmVhZHkgZXhpc3RzLicpO1xuICAgICAgY29uc29sZS5sb2coJ05hbWUgYWxyZWFkeSBleGlzdHMnKTtcbiAgICAgIFxuICAgICAgLy8gMy4gQWRkIGNhcmQgd2l0aCBubyBuYW1lIGR1cGxpY2F0ZVxuICAgIH0gZWxzZSBpZiAoIWV4aXN0ID09IHRydWUgJiYgYnV0dG9uTmFtZSA9PSAnQWRkJykgeyBcbiAgICAgIGNhcmRTaHJpbmsoXG4gICAgICAgIGl0ZW0sXG4gICAgICAgIHRpdGxlLnZhbHVlLFxuICAgICAgICBkZXNjcmlwdC52YWx1ZSxcbiAgICAgICAgZGF0ZS52YWx1ZSxcbiAgICAgICAgcHJpb3JpdHksXG4gICAgICAgICk7XG5cbiAgICAgIGl0ZW0ucmVtb3ZlKCk7XG4gICAgICBjb25zb2xlLmxvZygnSXRlbSBhZGRlZCBubyBkdXBsaWNhdGUgbmFtZScpO1xuICAgICAgcHV0SlNPTignaW5ib3gnLCB0aXRsZS52YWx1ZSwgb3V0cHV0KTtcbiAgICAgIFxuICAgICAgICAvLyA0LiBFZGl0IGNhcmQgd2l0aCBuYW1lIGNoYW5nZSwgY2hlY2sgbmFtZSBmb3IgZHVwbGljYXRlXG4gICAgfSBlbHNlIGlmICh0aXRsZS52YWx1ZSAhPT0gZWRpdFRpdGxlICYmIGV4aXN0ID09IHRydWUgJiYgYnV0dG9uTmFtZSA9PSAnU2F2ZScpIHtcbiAgICAgIGFsZXJ0KCdOYW1lIGFscmVhZHkgZXhpc3RzLicpO1xuICAgICAgY29uc29sZS5sb2coJ05hbWUgYWxyZWFkeSBleGlzdHMnKTtcbiAgICAgIFxuICAgICAgLy8gNS4gRWRpdCBjYXJkIHdpdGhvdXQgbmFtZSBjaGFuZ2UsIGVkaXQgd2l0aG91dCBuYW1lIGR1cGxpY2F0ZVxuICAgIH0gZWxzZSBpZiAoKHRpdGxlLnZhbHVlID09IGVkaXRUaXRsZSAmJiBleGlzdCA9PSB0cnVlICYmIGJ1dHRvbk5hbWUgPT0gJ1NhdmUnKSB8fFxuICAgICh0aXRsZS52YWx1ZSAhPT0gZWRpdFRpdGxlICYmIGV4aXN0ICE9PSB0cnVlICYmIGJ1dHRvbk5hbWUgPT0gJ1NhdmUnKSkge1xuICAgICAgY29uc29sZS5sb2coJ0VkaXQgd2l0aG91dCBuYW1lIGNoYW5nZSAvIEVkaXQgd2l0aG91dCBuYW1lIGR1cGxpY2F0ZScpO1xuICAgICAgY2FyZFNocmluayhcbiAgICAgICAgaXRlbSxcbiAgICAgICAgdGl0bGUudmFsdWUsXG4gICAgICAgIGRlc2NyaXB0LnZhbHVlLFxuICAgICAgICBkYXRlLnZhbHVlLFxuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgKVxuICAgICAgaXRlbS5yZW1vdmUoKTtcbiAgICAgIFxuICAgICAgaWYgKHBhcmVudCAhPT0gJ0luYm94Jykge1xuICAgICAgICBpZiAoZWRpdFRpdGxlICE9PSB1bmRlZmluZWQpIHsgXG4gICAgICAgICAgcHV0S2V5KHBhcmVudCwgZWRpdFRpdGxlLCB0aXRsZS52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcHV0SlNPTihwYXJlbnQsIHRpdGxlLnZhbHVlLCBvdXRwdXQpO1xuICAgICAgICBmaW5kRWxlbWVudCgpLnNlbGVjdC5yZW1vdmUoKVxuICAgICAgICBhZGRUb1Byb2plY3QocGFyZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChlZGl0VGl0bGUgIT09IHVuZGVmaW5lZCkgeyBcbiAgICAgICAgICBwdXRLZXkoJ2luYm94JywgZWRpdFRpdGxlLCB0aXRsZS52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcHV0SlNPTignaW5ib3gnLCB0aXRsZS52YWx1ZSwgb3V0cHV0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBleHBhbmRCdXR0b25MaXN0ZW5lcihleHBhbmQsIGl0ZW0sIHRpdGxlLCBkZXNjcmlwdCwgZGF0ZSwgcHJpb3JpdHkpIHtcbiAgZXhwYW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY2FyZE91dHB1dCggXG4gICAgICBpdGVtLFxuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcmlwdCxcbiAgICAgIGRhdGUsXG4gICAgICBwcmlvcml0eSxcbiAgICApXG4gICAgaXRlbS5yZW1vdmUoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVkaXRCdXR0b25MaXN0ZW5lcihlZGl0LCBpdGVtLCB0aXRsZSwgZGVzY3JpcHQsIGRhdGUsIHByaW9yaXR5KSB7XG4gIGNvbnN0IHRhcmdldCA9IGZpbmRFbGVtZW50KCkuY2FyZENvbnRhaW5lcjtcbiAgY29uc3QgZWRpdENhcmQgPSBjYXJkRmFjdG9yeSgnJywgJycsICcnLCAnU2F2ZScsIHRpdGxlLCBkZXNjcmlwdCwgZGF0ZSwgcHJpb3JpdHkpLmNhcmRJdGVtO1xuXG4gIGVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICB0YXJnZXQuaW5zZXJ0QmVmb3JlKGVkaXRDYXJkLCBpdGVtKTtcbiAgICBpdGVtLnJlbW92ZSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVsQnV0dG9uTGlzdGVuZXIoZGVsLCBpdGVtLCB0eXBlLCBrZXkpIHtcbiAgZGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIHJlbW92ZUNhcmREYXRhKHR5cGUsIGtleSk7XG5cbiAgICBsZXQgcGFyZW50ID0gcGFyZW50RmFjdG9yeShlKS5yZXN1bHQ7XG5cbiAgICBjaGVjazpcbiAgICBpZiAocGFyZW50ICE9PSAnSW5ib3gnKSB7XG4gICAgICBmaW5kRWxlbWVudCgpLnNlbGVjdC5yZW1vdmUoKVxuICAgICAgYWRkVG9Qcm9qZWN0KHR5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBicmVhayBjaGVjaztcbiAgICB9XG5cbiAgICBpdGVtLnJlbW92ZSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2hyaW5rQnV0dG9uTGlzdGVuZXIoc2hyaW5rLCBpdGVtLCB0aXRsZSwgZGVzY3JpcHQsIGRhdGUsIHByaW9yaXR5KSB7XG4gIHNocmluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGNhcmRTaHJpbmsoXG4gICAgICBpdGVtLFxuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcmlwdCxcbiAgICAgIGRhdGUsXG4gICAgICBwcmlvcml0eSxcbiAgICApXG4gICAgaXRlbS5yZW1vdmUoKTtcbn0pO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VDb2xvcih2YWx1ZSwgaXRlbSkge1xuICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgY2FzZSAnSGlnaCc6XG4gICAgICBpdGVtLnN0eWxlLmJhY2tncm91bmQgPSBcInJnYmEoMjU1LCAwLCAwLCAwLjQpXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdOb3JtYWwnOlxuICAgICAgaXRlbS5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDAsIDEyOCwgMCwgMC40KVwiO1xuICAgICAgYnJlYWs7ICBcbiAgICBjYXNlICdMb3cnOlxuICAgICAgaXRlbS5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDAsIDAsIDI1NSwgMC40KVwiO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGl0ZW0uc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSg0MCwgNDAsIDQwKVwiO1xuICB9XG59XG5cbmNvbnN0IGNhcmRGYWN0b3J5ID0gKHRpdGxlLCBkZXNjcmlwdCwgZGF0ZSwgYnV0dG9uLCBlZGl0VGl0bGUsIGVkaXREZXMsIGVkaXREYXRlLCBlZGl0UHJpKSA9PiB7XG4gIGNvbnN0IGNhcmRJdGVtID0gZWxlbWVudEZhY3RvcnkoJ2NhcmQtaXRlbScpLmVsZW1lbnQ7XG4gIGNvbnN0IGZvcm0gPSBmb3JtRmFjdG9yeSgndG9kby1mb3JtJykuZWxlbWVudDtcbiAgY29uc3QgY2FyZFRpdGxlID0gaW5wdXRGYWN0b3J5KCd0ZXh0JywgdGl0bGUsIGVkaXRUaXRsZSkuZWxlbWVudDtcbiAgY29uc3QgY2FyZERlc2NyaXB0ID0gaW5wdXRGYWN0b3J5KCd0ZXh0JywgZGVzY3JpcHQsIGVkaXREZXMpLmVsZW1lbnQ7XG4gIGNvbnN0IGNhcmREYXRlID0gaW5wdXRGYWN0b3J5KCdkYXRlJywgZGF0ZSwgZWRpdERhdGUpLmVsZW1lbnQ7XG4gIGNvbnN0IGNhcmRQcmlvcml0eSA9IHNlbGVjdEZhY3RvcnkoJ1ByaW9yaXR5JywgJ0hpZ2gnLCAnTm9ybWFsJywgJ0xvdycsIGVkaXRQcmkpLmVsZW1lbnQ7XG4gIGNvbnN0IGFkZCA9IGJ1dHRvbkZhY3RvcnkoJ2J1dHRvbicsICdhZGQtYnV0dG9uJywgYnV0dG9uKS5lbGVtZW50O1xuXG4gIGFkZEJ1dHRvbkxpc3RlbmVyKGFkZCwgY2FyZEl0ZW0sIGNhcmRUaXRsZSwgY2FyZERlc2NyaXB0LCBjYXJkRGF0ZSwgY2FyZFByaW9yaXR5LCBlZGl0VGl0bGUpO1xuXG4gIGlmIChlZGl0UHJpICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAodHlwZW9mIGVkaXRQcmkgPT09ICdzdHJpbmcnKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcmRQcmlvcml0eS5vcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChjYXJkUHJpb3JpdHkub3B0aW9uc1tpXS50ZXh0Q29udGVudCA9PSBlZGl0UHJpKSB7XG4gICAgICAgICAgY2FyZFByaW9yaXR5Lm9wdGlvbnNbaV0uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBzZWxlY3RlZCA9IGVkaXRQcmkuc2VsZWN0ZWRJbmRleDtcbiAgICAgIGNhcmRQcmlvcml0eS5vcHRpb25zW3NlbGVjdGVkXS5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XG4gICAgfVxuICB9XG4gIFxuICBmb3JtLmFwcGVuZChjYXJkVGl0bGUsIGNhcmREZXNjcmlwdCwgY2FyZERhdGUsIGNhcmRQcmlvcml0eSk7XG4gIGNhcmRJdGVtLmFwcGVuZChmb3JtLCBhZGQpO1xuXG4gIHJldHVybiB7IGNhcmRJdGVtLCBjYXJkVGl0bGUsIGNhcmREZXNjcmlwdCwgY2FyZERhdGUsIGNhcmRQcmlvcml0eSB9O1xufVxuXG5mdW5jdGlvbiBjYXJkU2hyaW5rKGl0ZW0sIHRpdGxlLCBkZXNjcmlwdCwgZGF0ZSwgcHJpb3JpdHkpIHtcbiAgY29uc3QgY2FyZENvbnRhaW5lciA9IGZpbmRFbGVtZW50KCkuY2FyZENvbnRhaW5lcjtcbiAgY29uc3QgY2FyZEl0ZW0gPSBlbGVtZW50RmFjdG9yeSgnY2FyZC1pdGVtLXNocmluaycpLmVsZW1lbnQ7XG4gIGNvbnN0IGNhcmRUaXRsZSA9IGVsZW1lbnRGYWN0b3J5KCdjYXJkLXRpdGxlLXNocmluaycpLmVsZW1lbnQ7XG4gIGNvbnN0IGV4cGFuZCA9IGJ1dHRvbkZhY3RvcnkoJ2J1dHRvbicsICdleHBhbmQtYnV0dG9uJywgJ0V4cGFuZCcpLmVsZW1lbnQ7XG4gIGNvbnN0IGRlbCA9IGJ1dHRvbkZhY3RvcnkoJ2J1dHRvbicsICdkZWwtYnV0dG9uJywgJ1gnKS5lbGVtZW50O1xuICBjb25zdCBpbmJveFRpdGxlID0gZmluZEVsZW1lbnQoKS5pbmJveFRpdGxlO1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBmaW5kRWxlbWVudCgpLnByb2plY3RUaXRsZTtcblxuICBjYXJkVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgXG4gIGlmICh0eXBlb2YgcHJpb3JpdHkgPT09ICdzdHJpbmcnKSB7XG4gICAgY2hhbmdlQ29sb3IocHJpb3JpdHksIGNhcmRJdGVtKTtcbiAgfSBlbHNlIHtcbiAgICBjaGFuZ2VDb2xvcihwcmlvcml0eS52YWx1ZSwgY2FyZEl0ZW0pO1xuICB9XG5cbiAgY2FyZEl0ZW0uYXBwZW5kKGNhcmRUaXRsZSwgZXhwYW5kLCBkZWwpXG4gIGlmIChpdGVtID09ICcnKSB7XG4gICAgY2FyZENvbnRhaW5lci5hcHBlbmQoY2FyZEl0ZW0pXG4gIH0gZWxzZSB7IFxuICAgIGNhcmRDb250YWluZXIuaW5zZXJ0QmVmb3JlKGNhcmRJdGVtLCBpdGVtKVxuICB9XG5cbiAgaWYgKGluYm94VGl0bGUgIT09IG51bGwpIHtcbiAgICBkZWxCdXR0b25MaXN0ZW5lcihkZWwsIGNhcmRJdGVtLCBpbmJveFRpdGxlLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCksIGNhcmRUaXRsZS50ZXh0Q29udGVudCApO1xuICB9IGVsc2Uge1xuICAgIGRlbEJ1dHRvbkxpc3RlbmVyKGRlbCwgY2FyZEl0ZW0sIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCwgY2FyZFRpdGxlLnRleHRDb250ZW50ICk7XG4gIH1cblxuICBleHBhbmRCdXR0b25MaXN0ZW5lcihleHBhbmQsIGNhcmRJdGVtLCB0aXRsZSwgZGVzY3JpcHQsIGRhdGUsIHByaW9yaXR5KTtcbn1cblxuZnVuY3Rpb24gY2FyZE91dHB1dCAoaXRlbSwgdGl0bGUsIGRlc2NyaXB0LCBkYXRlLCBwcmlvcml0eSkge1xuICBjb25zdCBjYXJkQ29udGFpbmVyID0gZmluZEVsZW1lbnQoKS5jYXJkQ29udGFpbmVyO1xuICBjb25zdCBjYXJkSXRlbSA9IGVsZW1lbnRGYWN0b3J5KCdjYXJkLWl0ZW0nKS5lbGVtZW50O1xuICBjb25zdCBjYXJkVGl0bGUgPSBlbGVtZW50RmFjdG9yeSgnY2FyZC10aXRsZScpLmVsZW1lbnQ7XG4gIGNvbnN0IGNhcmREZXNjcmlwdCA9IGVsZW1lbnRGYWN0b3J5KCdjYXJkLWRlc2NyaXB0JykuZWxlbWVudDtcbiAgY29uc3QgY2FyZERhdGUgPSBlbGVtZW50RmFjdG9yeSgnY2FyZC1kYXRlJykuZWxlbWVudDtcbiAgY29uc3QgY2FyZFByaW9yaXR5ID0gZWxlbWVudEZhY3RvcnkoJ2NhcmQtcHJpb3JpdHknKS5lbGVtZW50O1xuICBjb25zdCBlZGl0ID0gYnV0dG9uRmFjdG9yeSgnYnV0dG9uJywgJ2VkaXQtYnV0dG9uJywnRWRpdCcpLmVsZW1lbnQ7XG4gIGNvbnN0IGRlbCA9IGJ1dHRvbkZhY3RvcnkoJ2J1dHRvbicsICdkZWwtYnV0dG9uJywgJ1gnKS5lbGVtZW50O1xuICBjb25zdCBzaHJpbmsgPSBidXR0b25GYWN0b3J5KCdidXR0b24nLCAnc2hyaW5rLWJ1dHRvbicsICdTaHJpbmsnKS5lbGVtZW50O1xuICBjb25zdCBpbmJveFRpdGxlID0gZmluZEVsZW1lbnQoKS5pbmJveFRpdGxlO1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBmaW5kRWxlbWVudCgpLnByb2plY3RUaXRsZTtcblxuICBjYXJkVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgY2FyZERlc2NyaXB0LnRleHRDb250ZW50ID0gZGVzY3JpcHQ7XG4gIGNhcmREYXRlLnRleHRDb250ZW50ID0gZGF0ZTtcblxuICBpZiAodHlwZW9mIHByaW9yaXR5ID09PSAnc3RyaW5nJykge1xuICAgIGNhcmRQcmlvcml0eS50ZXh0Q29udGVudCA9ICdQcmlvcml0eTogJyArIHByaW9yaXR5O1xuICAgIGNoYW5nZUNvbG9yKHByaW9yaXR5LCBjYXJkSXRlbSk7XG4gIH0gZWxzZSB7XG4gICAgY2FyZFByaW9yaXR5LnRleHRDb250ZW50ID0gJ1ByaW9yaXR5OiAnICsgcHJpb3JpdHkudmFsdWU7XG4gICAgY2hhbmdlQ29sb3IocHJpb3JpdHkudmFsdWUsIGNhcmRJdGVtKTtcbiAgfVxuXG4gIGNhcmRJdGVtLmFwcGVuZChjYXJkVGl0bGUsIGNhcmREZXNjcmlwdCwgY2FyZERhdGUsIGNhcmRQcmlvcml0eSwgc2hyaW5rLCBlZGl0LCBkZWwpO1xuICBjYXJkQ29udGFpbmVyLmluc2VydEJlZm9yZShjYXJkSXRlbSwgaXRlbSlcbiAgXG4gIGlmIChpbmJveFRpdGxlICE9PSBudWxsKSB7XG4gICAgZGVsQnV0dG9uTGlzdGVuZXIoZGVsLCBjYXJkSXRlbSwgaW5ib3hUaXRsZS50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpLCBjYXJkVGl0bGUudGV4dENvbnRlbnQgKTtcbiAgfSBlbHNlIHtcbiAgICBkZWxCdXR0b25MaXN0ZW5lcihkZWwsIGNhcmRJdGVtLCBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQsIGNhcmRUaXRsZS50ZXh0Q29udGVudCApO1xuICB9XG5cbiAgZWRpdEJ1dHRvbkxpc3RlbmVyKGVkaXQsIGNhcmRJdGVtLCB0aXRsZSwgZGVzY3JpcHQsIGRhdGUsIHByaW9yaXR5KTtcbiAgc2hyaW5rQnV0dG9uTGlzdGVuZXIoc2hyaW5rLCBjYXJkSXRlbSwgdGl0bGUsIGRlc2NyaXB0LCBkYXRlLCBwcmlvcml0eSk7XG59XG5cbmZ1bmN0aW9uIGZpbmRFbGVtZW50KCkge1xuICBjb25zdCBuZXdCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRvZG8tZGl2Jyk7XG4gIGNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1jb250YWluZXInKTtcbiAgY29uc3QgaW5ib3hUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveC10aXRsZScpO1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10aXRsZScpO1xuICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtZGl2ID4gc2VsZWN0Jyk7XG5cbiAgcmV0dXJuIHsgbmV3QnV0dG9uLCBjYXJkQ29udGFpbmVyLCBpbmJveFRpdGxlLCBwcm9qZWN0VGl0bGUsIHNlbGVjdCB9XG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9kb0NsaWNrKCkge1xuICBjb25zdCB0YXJnZXQgPSBmaW5kRWxlbWVudCgpLm5ld0J1dHRvbjtcbiAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkQ2FyZCk7XG59XG5cbmZ1bmN0aW9uIGFkZENhcmQoKSB7XG4gIGNvbnN0IHRhcmdldCA9IGZpbmRFbGVtZW50KCkuY2FyZENvbnRhaW5lcjtcbiAgY29uc3QgbmV3Q2FyZCA9IGNhcmRGYWN0b3J5KCdOZXcgVGl0bGUnLCAnTmV3IERlc2NyaXB0aW9uJywgJ05ldyBEYXRlJywgJ0FkZCcpLmNhcmRJdGVtO1xuICB0YXJnZXQuYXBwZW5kQ2hpbGQobmV3Q2FyZCk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVRvZG9DbGljaywgY2FyZFNocmluayB9OyIsImNvbnN0IGVsZW1lbnRGYWN0b3J5ID0gKG5hbWUpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQobmFtZSk7XG4gIHJldHVybiB7IGVsZW1lbnQgfTtcbn07XG5cbmNvbnN0IGZvcm1GYWN0b3J5ID0gKGNscykgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgLy8gZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsIGFjdGlvbik7XG4gIC8vIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdtZXRob2QnLCBtZXRob2QpO1xuICByZXR1cm4geyBlbGVtZW50IH07XG59O1xuXG5jb25zdCBpbnB1dEZhY3RvcnkgPSAodHlwZSwgcGxjaG9sZGVyLCB2YWx1ZSA9ICcnKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndHlwZScsIHR5cGUpO1xuICBlbGVtZW50LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBwbGNob2xkZXIpO1xuICBlbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gIHJldHVybiB7IGVsZW1lbnQgfTtcbn1cblxuY29uc3Qgc2VsZWN0RmFjdG9yeSA9IChsYWJlbCwgb3AxLCBvcDIsIG9wMykgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIGNvbnN0IGdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0Z3JvdXAnKTtcbiAgY29uc3Qgb3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBjb25zdCBvcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGNvbnN0IG9wdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblxuICBncm91cC5zZXRBdHRyaWJ1dGUoJ2xhYmVsJywgbGFiZWwpO1xuICBvcHRpb24xLnRleHRDb250ZW50ID0gb3AxO1xuICBvcHRpb24yLnRleHRDb250ZW50ID0gb3AyO1xuICBvcHRpb24zLnRleHRDb250ZW50ID0gb3AzO1xuICBncm91cC5hcHBlbmQob3B0aW9uMSwgb3B0aW9uMiwgb3B0aW9uMyk7XG4gIGVsZW1lbnQuYXBwZW5kKGdyb3VwKTtcblxuICByZXR1cm4geyBlbGVtZW50IH1cbn1cblxuY29uc3QgYnV0dG9uRmFjdG9yeSA9ICh0eXBlLCBjbHMsIHRleHQpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndHlwZScsIHR5cGUpO1xuICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNscyk7XG4gIHJldHVybiB7IGVsZW1lbnQgfVxufVxuXG5jb25zdCBhZGRQcmpGYWN0b3J5ID0gKGxhYmVsLCAuLi5vcHMpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBjb25zdCBncm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGdyb3VwJyk7XG5cbiAgZ3JvdXAuc2V0QXR0cmlidXRlKCdsYWJlbCcsIGxhYmVsKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9wc1swXS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBkaXYudGV4dENvbnRlbnQgPSBvcHNbMF1baV07XG4gICAgZ3JvdXAuYXBwZW5kKGRpdik7XG4gIH1cblxuICBlbGVtZW50LmFwcGVuZChncm91cCk7XG5cbiAgcmV0dXJuIHsgZWxlbWVudCB9O1xufVxuXG5jb25zdCBwYXJlbnRGYWN0b3J5ID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHJlZ2V4ID0gLy4rLztcbiAgbGV0IHRleHQgPSBldmVudC5jb21wb3NlZFBhdGgoKTtcbiAgdGV4dCA9IHRleHRbM10uaW5uZXJUZXh0O1xuICBsZXQgcmVzdWx0ID0gcmVnZXguZXhlYyh0ZXh0KTtcbiAgcmVzdWx0ID0gcmVzdWx0WzBdO1xuXG4gIHJldHVybiB7IHJlc3VsdCB9XG59XG5cbmNvbnN0IHByak5hbWVGYWN0b3J5ID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHJlZ2V4ID0gLy4rLztcbiAgbGV0IHBhdGggPSBldmVudC5jb21wb3NlZFBhdGgoKTtcbiAgcGF0aCA9IHBhdGhbMV0uaW5uZXJUZXh0O1xuICBsZXQgcmVzdWx0ID0gcmVnZXguZXhlYyhwYXRoKTtcbiAgcmVzdWx0ID0gcmVzdWx0WzBdO1xuXG4gIHJldHVybiB7IHJlc3VsdCB9XG59XG5cbmV4cG9ydCB7IGVsZW1lbnRGYWN0b3J5LCBpbnB1dEZhY3RvcnksIGZvcm1GYWN0b3J5LCBzZWxlY3RGYWN0b3J5LCBidXR0b25GYWN0b3J5LCBhZGRQcmpGYWN0b3J5LCBwYXJlbnRGYWN0b3J5LCBwcmpOYW1lRmFjdG9yeSB9IiwiaW1wb3J0IHsgZWxlbWVudEZhY3RvcnksIGJ1dHRvbkZhY3RvcnksIHByak5hbWVGYWN0b3J5IH0gZnJvbSBcIi4vZmFjdG9yeVwiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdENvbnRlbnQsIGFkZFRvUHJvamVjdCwgYWRkUHJvamVjdENhcmQgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgY2FyZERhdGEsIHB1dEpTT04sIHJlbW92ZVByakRhdGEgfSBmcm9tICcuL3N0b3JhZ2UnO1xuaW1wb3J0IHsgY2hlY2tTdG9yYWdlLCBmaW5kRXhpc3RLZXkgfSBmcm9tIFwiLi9yZWFkLXN0b3JhZ2VcIjtcbmltcG9ydCB7IGxvYWRJbmJveCB9IGZyb20gXCIuL3NpZGUtbGlzdGVuZXJzXCI7XG5cbmZ1bmN0aW9uIGZpbmRFbGVtZW50KCkge1xuICBjb25zdCBmb290ZXJBZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyLWFkZCcpO1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXItY29udGFpbmVyID4gaW5wdXQnKTtcbiAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlLXByb2plY3QtY29udGFpbmVyJyk7XG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgY29uc3Qgd2lwZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCA+IConKTtcblxuICBsZXQgY29udGVudFRpdGxlO1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94LXRpdGxlJykgPT0gdW5kZWZpbmVkKSB7XG4gICAgY29udGVudFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGl0bGUnKS50ZXh0Q29udGVudDtcbiAgfSBlbHNlIHtcbiAgICBjb250ZW50VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gtdGl0bGUnKS50ZXh0Q29udGVudDtcbiAgfVxuXG4gIHJldHVybiB7IGZvb3RlckFkZCwgcHJvamVjdE5hbWUsIHByb2plY3REaXYsIG1haW5Db250ZW50LCBcbiAgICB3aXBlQ29udGVudCwgY29udGVudFRpdGxlIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyQ2xpY2soKSB7XG4gIGNvbnN0IGFkZCA9IGZpbmRFbGVtZW50KCkuZm9vdGVyQWRkO1xuICBcbiAgYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBmaW5kRWxlbWVudCgpLnByb2plY3ROYW1lO1xuICAgIGNvbnN0IGV4aXN0ID0gZmluZEV4aXN0S2V5KCdzaWRlJywgcHJvamVjdE5hbWUudmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKGV4aXN0KTtcbiAgICBpZiAoZXhpc3QgIT09IHRydWUpIHtcbiAgICAgIGNyZWF0ZVNpZGVQcm9qZWN0KHByb2plY3ROYW1lLnZhbHVlKTtcbiAgICAgIGNvbnN0IG91dHB1dCA9IGNhcmREYXRhKHByb2plY3ROYW1lLnZhbHVlKS5kYXRhO1xuICAgICAgcHV0SlNPTignc2lkZScsIHByb2plY3ROYW1lLnZhbHVlLCBvdXRwdXQpO1xuICAgICAgcHV0SlNPTihwcm9qZWN0TmFtZS52YWx1ZSk7XG4gICAgICBwcm9qZWN0TmFtZS52YWx1ZSA9ICcnO1xuICAgIH0gZWxzZSB7IGFsZXJ0KCdOYW1lIGFscmVhZHkgZXhpc3RzJyk7IH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGVQcm9qZWN0KHByb2plY3QpIHtcbiAgY29uc3QgcHJvamVjdEJveCA9IGVsZW1lbnRGYWN0b3J5KCdzaWRlLXByb2plY3QtYm94JykuZWxlbWVudDtcbiAgY29uc3QgcHJvamVjdEl0ZW0gPSBlbGVtZW50RmFjdG9yeSgnc2lkZS1wcm9qZWN0LXRpdGxlJykuZWxlbWVudDtcbiAgY29uc3QgcHJvamVjdERlbGV0ZSA9IGJ1dHRvbkZhY3RvcnkoJ2J1dHRvbicsICdzaWRlLWRlbC1idXR0b24nLCAnWCcpLmVsZW1lbnQ7XG4gIGNvbnN0IHByb2plY3REaXYgPSBmaW5kRWxlbWVudCgpLnByb2plY3REaXY7XG5cbiAgcHJvamVjdEl0ZW0udGV4dENvbnRlbnQgPSBwcm9qZWN0O1xuICBwcm9qZWN0RGVsZXRlLnRleHRDb250ZW50ID0gJ1gnO1xuICBwcm9qZWN0Qm94LmFwcGVuZChwcm9qZWN0SXRlbSwgcHJvamVjdERlbGV0ZSk7XG4gIFxuICBwcm9qZWN0SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGxvYWRQcm9qZWN0KHByb2plY3QsIHByb2plY3RJdGVtKTtcbiAgICBhZGRQcm9qZWN0Q2FyZCgpO1xuICAgIGFkZFRvUHJvamVjdChwcm9qZWN0KTtcbiAgfSk7XG4gIFxuICBwcm9qZWN0RGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGRlbGV0ZVByb2plY3QocHJvamVjdCwgZSk7XG4gIH0pO1xuXG4gIHByb2plY3REaXYuYXBwZW5kKHByb2plY3RCb3gpO1xufVxuXG5mdW5jdGlvbiBsb2FkUHJvamVjdChwcm9qZWN0KSB7XG4gIGNvbnN0IGxvYWQgPSBmaW5kRWxlbWVudCgpLm1haW5Db250ZW50O1xuXG4gIGZpbmRFbGVtZW50KCkud2lwZUNvbnRlbnQucmVtb3ZlKCk7XG4gIGNvbnN0IHByb2plY3RDb250ZW50ID0gY3JlYXRlUHJvamVjdENvbnRlbnQocHJvamVjdClcbiAgbG9hZC5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGVudCk7XG4gIGNoZWNrU3RvcmFnZShwcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0LCBldmVudCkge1xuICBjb25zdCB0aXRsZSA9IGZpbmRFbGVtZW50KCkuY29udGVudFRpdGxlO1xuICBjb25zdCBwcmpOYW1lID0gcHJqTmFtZUZhY3RvcnkoZXZlbnQpLnJlc3VsdDtcbiAgY29uc3QgY29udGFpbmVyID0gZmluZEVsZW1lbnQoKS5wcm9qZWN0RGl2O1xuICBjb25zdCBsZW5ndGggPSBPYmplY3Qua2V5cyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzaWRlJykpKS5sZW5ndGg7XG5cbiAgcmVtb3ZlUHJqRGF0YShwcm9qZWN0KTtcbiAgY29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpO1xuICBjaGVja1N0b3JhZ2UoJ3NpZGUnKTtcblxuICBpZiAodGl0bGUgPT0gcHJqTmFtZSB8fCBsZW5ndGggPT0gMCkge1xuICAgIGxvYWRJbmJveCgpO1xuICB9XG5cbn1cbmV4cG9ydCB7IGNyZWF0ZUZvb3RlckNsaWNrLCBjcmVhdGVTaWRlUHJvamVjdCB9OyIsImltcG9ydCB7IGVsZW1lbnRGYWN0b3J5LCBpbnB1dEZhY3RvcnksIGJ1dHRvbkZhY3RvcnkgfSBmcm9tICcuL2ZhY3RvcnknO1xuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlckRpdiA9IGVsZW1lbnRGYWN0b3J5KCdmb290ZXItY29udGFpbmVyJykuZWxlbWVudDtcbiAgY29uc3QgY29udGVudCA9IGNyZWF0ZUZvb3RlckNvbnRlbnQoKTtcblxuICBmb290ZXJEaXYuYXBwZW5kKGNvbnRlbnQuZm9vdGVyQWRkLCBjb250ZW50LmZvb3Rlck5ld1Byaik7XG5cbiAgcmV0dXJuIGZvb3RlckRpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyQ29udGVudCgpIHtcbiAgY29uc3QgZm9vdGVyQWRkID0gZWxlbWVudEZhY3RvcnkoJ2Zvb3Rlci1hZGQnKS5lbGVtZW50O1xuICBjb25zdCBmb290ZXJOZXdQcmogPSBpbnB1dEZhY3RvcnkoJ3RleHQnLCAnTmV3IFByb2plY3QnKS5lbGVtZW50O1xuXG4gIGZvb3RlckFkZC50ZXh0Q29udGVudCA9ICcrJztcblxuICByZXR1cm4geyBmb290ZXJBZGQsIGZvb3Rlck5ld1ByaiB9O1xufVxuXG5leHBvcnQgeyBjcmVhdGVGb290ZXIsIGNyZWF0ZUZvb3RlckNvbnRlbnQgfTsiLCJpbXBvcnQgeyBlbGVtZW50RmFjdG9yeSB9IGZyb20gXCIuL2ZhY3RvcnlcIjtcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXJEaXYgPSBlbGVtZW50RmFjdG9yeSgnaGVhZGVyLWNvbnRhaW5lcicpLmVsZW1lbnQ7XG4gIGNvbnN0IGNvbnRlbnQgPSBjcmVhdGVIZWFkZXJDb250ZW50KCk7XG5cbiAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gIHJldHVybiBoZWFkZXJEaXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlckNvbnRlbnQoKSB7XG4gIGNvbnN0IGhlYWRlclRpdGxlID0gZWxlbWVudEZhY3RvcnkoJ2hlYWRlci10aXRsZScpLmVsZW1lbnQ7XG5cbiAgaGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSAnVG9kbyBMaXN0JztcblxuICByZXR1cm4gaGVhZGVyVGl0bGU7XG5cbn1cblxuZXhwb3J0IHsgY3JlYXRlSGVhZGVyIH07IiwiaW1wb3J0IHsgZWxlbWVudEZhY3RvcnkgfSBmcm9tICcuL2ZhY3RvcnknO1xuaW1wb3J0IHsgcHV0SlNPTiB9IGZyb20gJy4vc3RvcmFnZSc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUluYm94Q29udGVudCgpIHtcbiAgY29uc3QgaW5ib3hDb250ZW50ID0gZWxlbWVudEZhY3RvcnkoJ2luYm94LWNvbnRlbnQnKS5lbGVtZW50O1xuICBjb25zdCBoZWFkZXJDb250ZW50ID0gY3JlYXRlSW5ib3hIZWFkZXIoKTtcbiAgY29uc3QgY2FyZENvbnRhaW5lciA9IGVsZW1lbnRGYWN0b3J5KCdjYXJkLWNvbnRhaW5lcicpLmVsZW1lbnQ7XG5cbiAgaW5ib3hDb250ZW50LmFwcGVuZChoZWFkZXJDb250ZW50LCBjYXJkQ29udGFpbmVyKTtcbiAgXG4gIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2luYm94JykpIHtcbiAgICBwdXRKU09OKCdpbmJveCcpO1xuICB9XG5cbiAgcmV0dXJuIGluYm94Q29udGVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5ib3hIZWFkZXIoKSB7XG4gIGNvbnN0IGluYm94SGVhZGVyRGl2ID0gZWxlbWVudEZhY3RvcnkoJ2luYm94LWhlYWRlci1jb250YWluZXInKS5lbGVtZW50O1xuICBjb25zdCBpbmJveFRpdGxlID0gZWxlbWVudEZhY3RvcnkoJ2luYm94LXRpdGxlJykuZWxlbWVudDtcbiAgY29uc3QgbmV3VG9kb0RpdiA9IGVsZW1lbnRGYWN0b3J5KCduZXctdG9kby1kaXYnKS5lbGVtZW50O1xuICBjb25zdCBpbmJveEFkZCA9IGVsZW1lbnRGYWN0b3J5KCdpbmJveC1hZGQnKS5lbGVtZW50O1xuICBjb25zdCBuZXdUb2RvID0gZWxlbWVudEZhY3RvcnkoJ25ldy10b2RvJykuZWxlbWVudDtcblxuICBpbmJveFRpdGxlLnRleHRDb250ZW50ID0gJ0luYm94JztcbiAgaW5ib3hBZGQudGV4dENvbnRlbnQgPSAnKyc7XG4gIG5ld1RvZG8udGV4dENvbnRlbnQgPSAnTmV3IFRvZG8nO1xuXG4gIG5ld1RvZG9EaXYuYXBwZW5kKGluYm94QWRkLCBuZXdUb2RvKTtcbiAgaW5ib3hIZWFkZXJEaXYuYXBwZW5kKGluYm94VGl0bGUsIG5ld1RvZG9EaXYpO1xuXG4gIHJldHVybiBpbmJveEhlYWRlckRpdjtcbn1cblxuZXhwb3J0IHsgY3JlYXRlSW5ib3hDb250ZW50IH07IiwiaW1wb3J0IHsgZWxlbWVudEZhY3RvcnkgfSBmcm9tICcuL2ZhY3RvcnknO1xuaW1wb3J0IHsgY3JlYXRlSGVhZGVyIH0gZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IHsgY3JlYXRlRm9vdGVyIH0gZnJvbSAnLi9mb290ZXInO1xuaW1wb3J0IHsgY3JlYXRlU2lkZSB9IGZyb20gJy4vc2lkZSc7XG5pbXBvcnQgeyBjcmVhdGVJbmJveENvbnRlbnQgfSBmcm9tICcuL2luYm94JztcblxuZnVuY3Rpb24gY3JlYXRlRGl2KCkge1xuICBjb25zdCBjb250ZW50RGl2ID0gZWxlbWVudEZhY3RvcnkoJ2NvbnRlbnQnKS5lbGVtZW50O1xuXG4gIHJldHVybiBjb250ZW50RGl2O1xufVxuXG5mdW5jdGlvbiBwbGFjZVRvQ29udGFpbmVyKCkge1xuICBjb25zdCBjb250ZW50RGl2ID0gcGxhY2VUb1BhcmVudCgpLmNvbnRlbnREaXY7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVTaWRlKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudERpdik7XG59XG5cbmZ1bmN0aW9uIHBsYWNlVG9QYXJlbnQoKSB7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBjcmVhdGVEaXYoKTtcbiAgXG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlSW5ib3hDb250ZW50KCkpO1xuXG4gIHJldHVybiB7IGNvbnRlbnREaXYgfTtcbn1cblxuZXhwb3J0IHsgcGxhY2VUb0NvbnRhaW5lciB9OyIsImltcG9ydCB7IGVsZW1lbnRGYWN0b3J5LCBhZGRQcmpGYWN0b3J5LCBwYXJlbnRGYWN0b3J5IH0gZnJvbSBcIi4vZmFjdG9yeVwiO1xuaW1wb3J0IHsgcHV0SlNPTiwgc2hvd0tleXMsIHNob3dTdG9yYWdlIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuaW1wb3J0IHsgZmluZEtleXMsIGZpbmRTZWxlY3QsIGxvYWRTdG9yYWdlLCBmaW5kRXhpc3RLZXkgfSBmcm9tIFwiLi9yZWFkLXN0b3JhZ2VcIjtcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdENvbnRlbnQocHJvamVjdCkge1xuICBjb25zdCBwcm9qZWN0Q29udGVudCA9IGVsZW1lbnRGYWN0b3J5KCdwcm9qZWN0LWNvbnRlbnQnKS5lbGVtZW50O1xuICBjb25zdCBoZWFkZXJDb250ZW50ID0gY3JlYXRlUHJvamVjdEhlYWRlcihwcm9qZWN0KTtcbiAgY29uc3QgY2FyZENvbnRhaW5lciA9IGVsZW1lbnRGYWN0b3J5KCdjYXJkLWNvbnRhaW5lcicpLmVsZW1lbnQ7XG5cbiAgcHJvamVjdENvbnRlbnQuYXBwZW5kKGhlYWRlckNvbnRlbnQsIGNhcmRDb250YWluZXIpO1xuXG4gIHJldHVybiBwcm9qZWN0Q29udGVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEhlYWRlcihwcm9qZWN0KSB7XG4gIGNvbnN0IHByb2plY3RIZWFkZXJEaXYgPSBlbGVtZW50RmFjdG9yeSgncHJvamVjdC1oZWFkZXItY29udGFpbmVyJykuZWxlbWVudDtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZWxlbWVudEZhY3RvcnkoJ3Byb2plY3QtdGl0bGUnKS5lbGVtZW50O1xuICBjb25zdCBuZXdQcm9qZWN0RGl2ID0gZWxlbWVudEZhY3RvcnkoJ25ldy1wcm9qZWN0LWRpdicpLmVsZW1lbnQ7XG4gIGNvbnN0IHByb2plY3RBZGQgPSBlbGVtZW50RmFjdG9yeSgncHJvamVjdC1hZGQnKS5lbGVtZW50O1xuXG4gIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3Q7XG4gIHByb2plY3RBZGQudGV4dENvbnRlbnQgPSAnKyc7XG5cbiAgbmV3UHJvamVjdERpdi5hcHBlbmQocHJvamVjdEFkZCk7XG5cbiAgcHJvamVjdEhlYWRlckRpdi5hcHBlbmQocHJvamVjdFRpdGxlLCBuZXdQcm9qZWN0RGl2KTtcblxuICByZXR1cm4gcHJvamVjdEhlYWRlckRpdjtcbn1cblxuZnVuY3Rpb24gYWRkVG9Qcm9qZWN0KHByb2plY3QpIHtcbiAgbGV0IGFkZExpc3QgPSBmaW5kS2V5cygnaW5ib3gnKTtcbiAgbGV0IHJlbW92ZUxpc3QgPSBmaW5kS2V5cyhwcm9qZWN0KTtcbiAgbGV0IG5ld0xpc3QgPSBbXTtcblxuICBhZGRMaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgaWYgKCFyZW1vdmVMaXN0LmluY2x1ZGVzKGl0ZW0pKSB7XG4gICAgICBuZXdMaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9KTsgXG4gIFxuICBjb25zdCBsaXN0ID0gYWRkUHJqRmFjdG9yeSgnQWRkIHRvIHByb2plY3QnLCBuZXdMaXN0KS5lbGVtZW50O1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtZGl2Jyk7XG4gIGRpdi5hcHBlbmQobGlzdCk7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RDYXJkKCkge1xuICBjb25zdCBhZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1hZGQnKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10aXRsZScpLnRleHRDb250ZW50O1xuICBcbiAgYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtZGl2IHNlbGVjdCcpO1xuICAgIGNvbnN0IHZhbHVlID0gc2VsZWN0ZWQudmFsdWU7XG4gICAgY29uc3QgaW5kZXggPSBzZWxlY3RlZC5zZWxlY3RlZEluZGV4O1xuICAgIGNvbnN0IGRhdGEgPSBmaW5kU2VsZWN0KHZhbHVlKTtcblxuICAgIGNoZWNrOlxuICAgIGlmIChzZWxlY3RlZC5sZW5ndGggIT09IDApIHtcbiAgICAgIGxvYWRTdG9yYWdlKHZhbHVlLCAnaW5ib3gnKTtcbiAgICAgIHB1dEpTT04odGl0bGUsIHZhbHVlLCBkYXRhKTtcbiAgICAgIHNlbGVjdGVkW2luZGV4XS5yZW1vdmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYnJlYWsgY2hlY2s7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdENvbnRlbnQsIGFkZFRvUHJvamVjdCwgYWRkUHJvamVjdENhcmQgfTsiLCJpbXBvcnQgeyBwbGFjZVRvQ29udGFpbmVyIH0gZnJvbSBcIi4vbGF5b3V0XCI7XG5pbXBvcnQgeyBjYXJkU2hyaW5rIH0gZnJvbSBcIi4vYWRkLWNhcmRcIjtcbmltcG9ydCB7IGNyZWF0ZVNpZGVQcm9qZWN0IH0gZnJvbSBcIi4vZm9vdGVyLWxpc3RlbmVyc1wiO1xuaW1wb3J0IHsgYWRkVG9Qcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcblxuLy9DaGVjayBpZiBzdHJvYWdlIGV4c2lzdHNcbi8vSWYgbm90LCBqdXN0IGRvIG5vcm1hbCBsYXlvdXRcbi8vSWYgeWVzLCBkbyBub3JtYWwgYW5kIGNhbGwgYWRkLWNhcmRzL2Zvb3Rlci1saXN0ZW5lcnNcblxuZnVuY3Rpb24gY2hlY2tTdG9yYWdlKHR5cGUpIHtcbiAgaWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKHR5cGUpKSB7XG4gICAgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIGZpbmRTdG9yYWdlKHR5cGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRTdG9yYWdlKGtleSwgdHlwZSkge1xuICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0eXBlKSk7XG4gIGNvbnN0IHRpdGxlID0gZGF0YVtrZXldWyd0aXRsZSddO1xuICBjb25zdCBkaXNjcmlwdCA9IGRhdGFba2V5XVsnZGlzY3JpcHQnXTtcbiAgY29uc3QgZGF0ZSA9IGRhdGFba2V5XVsnZGF0ZSddO1xuICBjb25zdCBwcmlvcml0eSA9IGRhdGFba2V5XVsncHJpb3JpdHknXTtcblxuICBpZiAodHlwZSA9PSAnaW5ib3gnKSB7XG4gICAgY2FyZFNocmluaygnJywgdGl0bGUsIGRpc2NyaXB0LCBkYXRlLCBwcmlvcml0eSk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PSAnc2lkZScpIHtcbiAgICBjcmVhdGVTaWRlUHJvamVjdCh0aXRsZSk7XG4gIH0gZWxzZSB7XG4gICAgY2FyZFNocmluaygnJywgdGl0bGUsIGRpc2NyaXB0LCBkYXRlLCBwcmlvcml0eSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZFN0b3JhZ2UodHlwZSkge1xuICBjb25zdCBrZXlMaXN0ID0gT2JqZWN0LmtleXMoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VbdHlwZV0pKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgbG9hZFN0b3JhZ2Uoa2V5TGlzdFtpXSwgdHlwZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZEtleXModHlwZSkge1xuICBjb25zdCBrZXlMaXN0ID0gT2JqZWN0LmtleXMoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VbdHlwZV0pKTtcbiAgcmV0dXJuIGtleUxpc3Q7XG59XG5cbmZ1bmN0aW9uIGZpbmRFeGlzdEtleSh0eXBlLCBleGlzdCkge1xuICBpZiAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VbdHlwZV0pID09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBrZXlzTGlzdCA9IGZpbmRLZXlzKHR5cGUpO1xuICBsZXQgdmFsdWU7XG4gIGlmIChrZXlzTGlzdC5pbmNsdWRlcyhleGlzdCkpIHtcbiAgICBjb25zb2xlLmxvZygnZXhpc3QnKTtcbiAgICBjb25zb2xlLmxvZyhrZXlzTGlzdCk7XG4gICAgdmFsdWUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHZhbHVlID0gZmFsc2U7XG4gICAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGZpbmRTZWxlY3Qoa2V5KSB7XG4gIGNvbnN0IGtleUxpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVsnaW5ib3gnXSk7XG4gIHJldHVybiBrZXlMaXN0W2tleV07XG59XG5cbmV4cG9ydCB7IGNoZWNrU3RvcmFnZSwgZmluZFN0b3JhZ2UsIGZpbmRLZXlzLCBmaW5kU2VsZWN0LCBsb2FkU3RvcmFnZSwgZmluZEV4aXN0S2V5IH07XG4iLCJpbXBvcnQgeyBjcmVhdGVUb2RvQ2xpY2sgfSBmcm9tICcuL2FkZC1jYXJkJztcbmltcG9ydCB7IGNoZWNrU3RvcmFnZSB9IGZyb20gJy4vcmVhZC1zdG9yYWdlJztcbmltcG9ydCB7IGNyZWF0ZUluYm94Q29udGVudCB9IGZyb20gJy4vaW5ib3gnO1xuXG5cbmZ1bmN0aW9uIGZpbmRFbGVtZW50KCkge1xuICBjb25zdCBtZW51SW5ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZS1idXR0b246bnRoLWNoaWxkKDEpJyk7XG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgY29uc3QgaW5ib3hDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94LWNvbnRlbnQnKTtcbiAgY29uc3Qgd2lwZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCA+IConKTtcblxuICByZXR1cm4geyBtZW51SW5ib3gsIG1haW5Db250ZW50LCBpbmJveENvbnRlbnQsIHdpcGVDb250ZW50IH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGVDbGljaygpIHtcbiAgY29uc3QgaW5ib3ggPSBmaW5kRWxlbWVudCgpLm1lbnVJbmJveDtcbiAgaW5ib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkSW5ib3gpO1xufVxuXG5mdW5jdGlvbiBsb2FkSW5ib3goKSB7XG4gIGNvbnN0IGxvYWQgPSBmaW5kRWxlbWVudCgpLm1haW5Db250ZW50O1xuXG4gIGNvbnN0IHAxID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICByZXNvbHZlKGZpbmRFbGVtZW50KCkud2lwZUNvbnRlbnQucmVtb3ZlKCkpXG4gIH0pO1xuXG4gIGNvbnN0IHAyID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBjb25zdCBjbGVhbiA9IGNyZWF0ZUluYm94Q29udGVudCgpO1xuICAgIHJlc29sdmUobG9hZC5hcHBlbmQoY2xlYW4pKTtcbiAgfSk7XG4gIFxuICBwMS50aGVuKCgpID0+IHtcbiAgICBwMi50aGVuICgoKSA9PiB7XG4gICAgICBjaGVja1N0b3JhZ2UoJ2luYm94Jyk7XG4gICAgfSk7XG4gIH0pO1xuICAgIFxuICBjcmVhdGVUb2RvQ2xpY2soKTtcbn1cblxuXG5leHBvcnQgeyBjcmVhdGVTaWRlQ2xpY2ssIGxvYWRJbmJveCB9IiwiaW1wb3J0IHsgZWxlbWVudEZhY3RvcnkgfSBmcm9tICcuL2ZhY3RvcnknO1xuXG5mdW5jdGlvbiBjcmVhdGVTaWRlKCkge1xuICBjb25zdCBzaWRlRGl2ID0gZWxlbWVudEZhY3RvcnkoJ3NpZGUtY29udGFpbmVyJykuZWxlbWVudDtcbiAgY29uc3QgY29udGVudCA9IGNyZWF0ZVNpZGVDb250ZW50KCkuc2lkZU1lbnU7XG4gIFxuICBzaWRlRGl2LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICBcbiAgcmV0dXJuIHNpZGVEaXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGVDb250ZW50KCkge1xuICBjb25zdCBzaWRlTWVudSA9IGVsZW1lbnRGYWN0b3J5KCdzaWRlLW1lbnUnKS5lbGVtZW50O1xuICBjb25zdCBzaWRlSW5ib3ggPSBlbGVtZW50RmFjdG9yeSgnc2lkZS1idXR0b24nKS5lbGVtZW50O1xuICBjb25zdCBzaWRlUHJvamVjdCA9IGVsZW1lbnRGYWN0b3J5KCdzaWRlLWJ1dHRvbicpLmVsZW1lbnQ7XG4gIGNvbnN0IHByb2plY3REaXYgPSBlbGVtZW50RmFjdG9yeSgnc2lkZS1wcm9qZWN0LWNvbnRhaW5lcicpLmVsZW1lbnQ7XG4gIHNpZGVJbmJveC50ZXh0Q29udGVudCA9ICdJbmJveCc7XG5cbiAgc2lkZVByb2plY3QudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xuXG4gIHNpZGVNZW51LmFwcGVuZChzaWRlSW5ib3gsIHNpZGVQcm9qZWN0LCBwcm9qZWN0RGl2KTtcbiAgXG4gIHJldHVybiB7IHNpZGVNZW51LCBzaWRlSW5ib3gsIHNpZGVQcm9qZWN0IH07XG59XG5cblxuZXhwb3J0IHsgY3JlYXRlU2lkZSwgY3JlYXRlU2lkZUNvbnRlbnQgfTtcbiIsImNvbnN0IGNhcmREYXRhID0gKHRpdGxlLCBkaXNjcmlwdCwgZGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgY29uc3QgZGF0YSA9IHtcbiAgICB0aXRsZSxcbiAgICBkaXNjcmlwdCxcbiAgICBkYXRlLFxuICAgIHByaW9yaXR5LFxuICB9O1xuICByZXR1cm4geyBkYXRhIH07XG59O1xuXG5mdW5jdGlvbiBwdXRKU09OKHR5cGUsIGtleSwgdmFsdWUpIHtcbiAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0eXBlKSkge1xuICAgIGxldCBjcmVhdGUgPSB7fTtcbiAgICBjcmVhdGVba2V5XSA9IHZhbHVlO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHR5cGUsIEpTT04uc3RyaW5naWZ5KGNyZWF0ZSkpO1xuICB9IGVsc2Uge1xuICAgIGxldCB0ZXh0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0eXBlKSk7XG4gICAgdGV4dFtrZXldID0gdmFsdWVcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0eXBlLCBKU09OLnN0cmluZ2lmeSh0ZXh0KSk7XG4gICAgLy8gY29uc29sZS5sb2codGV4dCk7XG4gIH1cbiAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcbn1cblxuZnVuY3Rpb24gcHV0S2V5KHR5cGUsIG9sZEtleSwgbW9kS2V5KSB7XG4gIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHR5cGUpKTtcbiAgY29uc3QgcmVwbGFjZW1lbnRzID0ge307XG4gIHJlcGxhY2VtZW50c1tvbGRLZXldID0gbW9kS2V5O1xuXG4gIGxldCByZXBsYWNlZEl0ZW1zID0gT2JqZWN0LmtleXMoZGF0YSkubWFwKChrZXkpID0+IHtcbiAgY29uc3QgbmV3S2V5ID0gcmVwbGFjZW1lbnRzW2tleV0gfHwga2V5O1xuICByZXR1cm4geyBbbmV3S2V5XSA6IGRhdGFba2V5XSB9O1xuICB9KTtcblxuICBjb25zdCBuZXdEYXRhID0gcmVwbGFjZWRJdGVtcy5yZWR1Y2UoKGEsIGIpID0+IE9iamVjdC5hc3NpZ24oe30sIGEsIGIpKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odHlwZSwgSlNPTi5zdHJpbmdpZnkobmV3RGF0YSkpO1xufVxuXG5cbmZ1bmN0aW9uIHJlbW92ZUNhcmREYXRhKHR5cGUsIGtleSkge1xuICBsZXQgdGV4dCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odHlwZSkpO1xuICBkZWxldGUgdGV4dFtrZXldO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0eXBlLCBKU09OLnN0cmluZ2lmeSh0ZXh0KSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVByakRhdGEodHlwZSkge1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0eXBlKTtcbiAgcmVtb3ZlQ2FyZERhdGEoJ3NpZGUnLCB0eXBlKTtcbn1cblxuZXhwb3J0IHsgY2FyZERhdGEsIHB1dEpTT04sIHB1dEtleSwgcmVtb3ZlQ2FyZERhdGEsIHJlbW92ZVByakRhdGEgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHBsYWNlVG9Db250YWluZXIgfSBmcm9tICcuL2xheW91dCc7XG5pbXBvcnQgeyBjcmVhdGVTaWRlQ2xpY2sgfSBmcm9tICcuL3NpZGUtbGlzdGVuZXJzJztcbmltcG9ydCB7IGNyZWF0ZVRvZG9DbGljayB9IGZyb20gJy4vYWRkLWNhcmQnO1xuaW1wb3J0IHsgY3JlYXRlRm9vdGVyQ2xpY2sgfSBmcm9tICcuL2Zvb3Rlci1saXN0ZW5lcnMnO1xuaW1wb3J0IHsgY2hlY2tTdG9yYWdlIH0gZnJvbSAnLi9yZWFkLXN0b3JhZ2UnO1xuXG4oZnVuY3Rpb24oKSB7XG4gIHBsYWNlVG9Db250YWluZXIoKTtcbn0pKCk7XG5cbihmdW5jdGlvbigpIHtcbiAgY3JlYXRlU2lkZUNsaWNrKCk7XG59KSgpO1xuXG4oZnVuY3Rpb24oKSB7XG4gIGNyZWF0ZVRvZG9DbGljaygpO1xufSkoKTtcblxuKGZ1bmN0aW9uKCkge1xuICBjcmVhdGVGb290ZXJDbGljaygpO1xufSkoKTtcblxuKGZ1bmN0aW9uKCkge1xuICBjaGVja1N0b3JhZ2UoJ2luYm94Jyk7XG4gIGNoZWNrU3RvcmFnZSgnc2lkZScpO1xufSkoKTtcblxuLy8gbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5cbiAgICAvLyBQcmV2ZW50IG5ldyB0b2RvIHVzaW5nIGR1cGxpY2F0ZWQgbmFtZXNcbiAgICAvLyBQcmV2ZW50IGVkaXQgdG9kbyB1c2luZyBkdXBsaWNhdGVkIG5hbWVzXG4gICAgLy8gUHJldmVudCBhZGQgdG8gcHJvamVjdCB0byBhZGQgZHVwbGljYXRlZCBuYW1lcyB0b2RvXG4gICAgLy8gRGVsZXRlIHByb2plY3QgYnV0dG9uc1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9