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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: sans-serif;\n}\n\n#container {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 1fr 10fr 1fr;\n  grid-template-columns: 300px 100fr;\n}\n\n/* ////////////////////////////////////////Header  */\n.header-container {\n  /* border: 2px solid salmon; */\n  grid-column: 1 / 2;\n  background: rgb(40, 40, 40);\n  font-size: 2rem;\n  color: whitesmoke;\n  display: grid;\n}\n\n.header-title {\n  place-self: center;\n}\n\n/* ////////////////////////////////////////Side  */\n.side-container {\n  /* border: 2px solid greenyellow; */\n  grid-row: 2 / 3;\n  grid-column: 1 / 2;\n  background: rgb(40, 40, 40);\n  display: grid;\n}\n\n.side-menu {\n  display: grid;\n  grid-template-rows: 1fr 1fr 0.5fr 0.1fr 10fr;\n  grid-template-columns: repeat(11, 1fr);\n  justify-content: center;\n}\n\n.side-button {\n  color: whitesmoke;\n  font-size: 1.5rem;\n  grid-column: 2 / 3;\n}\n\n.side-button:nth-child(1) {\n  grid-row: 2 / 3;\n  grid-column: 3 / 10;\n\n}\n\n.side-button:nth-child(2) {\n  grid-row: 3 / 4;\n  grid-column: 3 / 10;\n  display: grid;\n  /* border-bottom: 3px solid whitesmoke; */\n}\n\n.side-button:nth-child(3) {\n  grid-row: 4 / 5;\n}\n\n.side-project-container {\n  grid-row: 5 / 6;\n  grid-column: 4 / 10;\n  color: whitesmoke;\n}\n\n.side-project-box {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-size: 1.2rem;\n  margin-top: 1rem;\n}\n\n.side-del-button {\n  background: rgb(100, 100, 100);\n  color: whitesmoke;\n  border-radius: 20rem;\n  border: 1px solid transparent;\n  width: 2rem;\n  height: 1.8rem;\n}\n/* ////////////////////////////////////////Inbox  */\n\n.content {\n  grid-row: 1 / 4;\n  grid-column: 2 / 3;\n  background: rgb(55, 55, 55);\n  display: grid;\n}\n\n.inbox-content,\n.project-content {\n  color: whitesmoke;\n  display: grid;\n  grid-template-rows: 0.1fr 1fr 10fr;\n  grid-template-columns: 1fr 5fr 1fr;\n}\n\n/* .storage-content {\n  color: whitesmoke;\n  display: grid;\n  grid-template-rows: 0.1fr 1fr 10fr;\n  grid-template-columns: 1fr 5fr 1fr;\n} */\n\n/* ////////////////////////////////////////Inbox Header  */\n.inbox-header-container,\n.project-header-container {\n  grid-row: 2 / 3;\n  grid-column: 2 / 3;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  border-bottom: 5px solid whitesmoke;\n  align-items: end;\n}\n\n.inbox-title,\n.project-title {\n  font-size: 2rem;\n  grid-column: 1 / 2;\n}\n\n.new-todo-div,\n.new-project-div {\n  grid-column: 3 / 4;\n  display: grid;\n  grid-template-columns: 1fr 1.5fr 109px;\n  justify-self: end;\n  align-items: center;\n}\n\n.inbox-add,\n.project-add {\n  font-size: 3rem;\n  grid-column: 2 / 3;\n  position: relative;\n  top: 0.28rem;\n  display: flex;\n  justify-content: flex-end;\n  padding-right: 0.5rem;\n}\n\n.new-todo {\n  font-size: 1.5rem;\n  position: relative;\n  top: 0.5rem;\n  width: fit-content;\n}\n\n.new-project-div select {\n  background: rgba(40, 40, 40, 0);\n  font-size: 1.5rem;\n  color: whitesmoke;\n  position: relative;\n  top: 0.5rem;\n}\n/* ////////////////////////////////////////Inbox Card  */\n.card-container {\n  grid-row: 3 / 4;\n  grid-column: 2 / 3;\n  display: flex;\n  flex-direction: column;\n}\n\n.card-item,\n.card-item-shrink {\n  background: rgba(40, 40, 40);\n  border-radius: 20px;\n  padding: 1rem;\n  margin-top: 1rem;\n  font-size: 1.5rem;\n  line-height: 30px;\n  display: grid;\n  grid-template-columns: minmax(200px, 1fr) minmax(140px, max-content);\n}\n\n.todo-form {\n  display: flex;\n  flex-direction: column;\n}\n\ninput,\n.card-item select {\n  background: rgba(40, 40, 40, 0);\n  color: whitesmoke;\n  font-size: 1.5rem;\n  border: 1px solid transparent;\n\n}\n\n.card-container input:nth-child(1) {\n  grid-row: 1 / 2;\n}\n\n.card-container input:nth-child(2) {\n  grid-row: 2 / 3;\n}\n\n.card-container input:nth-child(3) {\n  grid-row: 3 / 4;\n}\n\n.card-item select {\ngrid-row: 4 / 5;\n}\n\n.card-title {\n  grid-row: 1 / 2;\n}\n\n.card-descript {\n  grid-row: 2 / 3;\n}\n\n.card-date {\n  grid-row: 3 / 4;\n}\n\n.card-priority {\n  grid-row: 4 / 5;\n}\n\n.add-button,\n.edit-button,\n.del-button,\n.expand-button {\n  width: 4rem;\n  height: 1.8rem;\n  justify-self: end;\n  align-self: end;\n  background: rgb(100, 100, 100);\n  color: whitesmoke;\n  border-radius: 20rem;\n  border: 1px solid transparent;\n}\n.expand-button {\n  justify-self: start;\n  grid-row: 1 / 2;\n  grid-column: 2 / 3;\n}\n\n.add-button {\n  grid-column: 2 / 3;\n}\n.shrink-button,\n.edit-button {\n  grid-row: 4 / 5;\n  grid-column: 2 / 3;\n\n}\n\n.del-button {\n  grid-row: 1 / 2;\n  grid-column: 2 / 3;\n  width: 2rem;\n  justify-self: end;\n}\n\n.shrink-button {\n  width: 4rem;\n  height: 1.8rem;\n  justify-self: start;\n  align-self: end;\n  background: rgb(100, 100, 100);\n  color: whitesmoke;\n  border-radius: 20rem;\n  border: 1px solid transparent;\n}\n/* ////////////////////////////////////////Footer  */\n.footer-container {\n  /* border: 2px solid lightcoral; */\n  grid-column: 1 / 2;\n  background: rgb(40, 40, 40);\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  color: beige;\n  place-items: center;\n}\n\n.footer-add {\n  grid-column: 3 / 4;\n  font-size: 3rem;\n  padding-bottom: 0.5rem;\n}\n\n.footer-container > input {\n  grid-column: 5 / 6;\n  font-size: 1.5rem;\n  width: 14rem;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: sans-serif;\n}\n\n#container {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 1fr 10fr 1fr;\n  grid-template-columns: 300px 100fr;\n}\n\n/* ////////////////////////////////////////Header  */\n.header-container {\n  /* border: 2px solid salmon; */\n  grid-column: 1 / 2;\n  background: rgb(40, 40, 40);\n  font-size: 2rem;\n  color: whitesmoke;\n  display: grid;\n}\n\n.header-title {\n  place-self: center;\n}\n\n/* ////////////////////////////////////////Side  */\n.side-container {\n  /* border: 2px solid greenyellow; */\n  grid-row: 2 / 3;\n  grid-column: 1 / 2;\n  background: rgb(40, 40, 40);\n  display: grid;\n}\n\n.side-menu {\n  display: grid;\n  grid-template-rows: 1fr 1fr 0.5fr 0.1fr 10fr;\n  grid-template-columns: repeat(11, 1fr);\n  justify-content: center;\n}\n\n.side-button {\n  color: whitesmoke;\n  font-size: 1.5rem;\n  grid-column: 2 / 3;\n}\n\n.side-button:nth-child(1) {\n  grid-row: 2 / 3;\n  grid-column: 3 / 10;\n\n}\n\n.side-button:nth-child(2) {\n  grid-row: 3 / 4;\n  grid-column: 3 / 10;\n  display: grid;\n  /* border-bottom: 3px solid whitesmoke; */\n}\n\n.side-button:nth-child(3) {\n  grid-row: 4 / 5;\n}\n\n.side-project-container {\n  grid-row: 5 / 6;\n  grid-column: 4 / 10;\n  color: whitesmoke;\n}\n\n.side-project-box {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-size: 1.2rem;\n  margin-top: 1rem;\n}\n\n.side-del-button {\n  background: rgb(100, 100, 100);\n  color: whitesmoke;\n  border-radius: 20rem;\n  border: 1px solid transparent;\n  width: 2rem;\n  height: 1.8rem;\n}\n/* ////////////////////////////////////////Inbox  */\n\n.content {\n  grid-row: 1 / 4;\n  grid-column: 2 / 3;\n  background: rgb(55, 55, 55);\n  display: grid;\n}\n\n.inbox-content,\n.project-content {\n  color: whitesmoke;\n  display: grid;\n  grid-template-rows: 0.1fr 1fr 10fr;\n  grid-template-columns: 1fr 5fr 1fr;\n}\n\n/* .storage-content {\n  color: whitesmoke;\n  display: grid;\n  grid-template-rows: 0.1fr 1fr 10fr;\n  grid-template-columns: 1fr 5fr 1fr;\n} */\n\n/* ////////////////////////////////////////Inbox Header  */\n.inbox-header-container,\n.project-header-container {\n  grid-row: 2 / 3;\n  grid-column: 2 / 3;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  border-bottom: 5px solid whitesmoke;\n  align-items: end;\n}\n\n.inbox-title,\n.project-title {\n  font-size: 2rem;\n  grid-column: 1 / 2;\n}\n\n.new-todo-div,\n.new-project-div {\n  grid-column: 3 / 4;\n  display: grid;\n  grid-template-columns: 1fr 1.5fr 109px;\n  justify-self: end;\n  align-items: center;\n}\n\n.inbox-add,\n.project-add {\n  font-size: 3rem;\n  grid-column: 2 / 3;\n  position: relative;\n  top: 0.28rem;\n  display: flex;\n  justify-content: flex-end;\n  padding-right: 0.5rem;\n}\n\n.new-todo {\n  font-size: 1.5rem;\n  position: relative;\n  top: 0.5rem;\n  width: fit-content;\n}\n\n.new-project-div select {\n  background: rgba(40, 40, 40, 0);\n  font-size: 1.5rem;\n  color: whitesmoke;\n  position: relative;\n  top: 0.5rem;\n}\n/* ////////////////////////////////////////Inbox Card  */\n.card-container {\n  grid-row: 3 / 4;\n  grid-column: 2 / 3;\n  display: flex;\n  flex-direction: column;\n}\n\n.card-item,\n.card-item-shrink {\n  background: rgba(40, 40, 40);\n  border-radius: 20px;\n  padding: 1rem;\n  margin-top: 1rem;\n  font-size: 1.5rem;\n  line-height: 30px;\n  display: grid;\n  grid-template-columns: minmax(200px, 1fr) minmax(140px, max-content);\n}\n\n.todo-form {\n  display: flex;\n  flex-direction: column;\n}\n\ninput,\n.card-item select {\n  background: rgba(40, 40, 40, 0);\n  color: whitesmoke;\n  font-size: 1.5rem;\n  border: 1px solid transparent;\n\n}\n\n.card-container input:nth-child(1) {\n  grid-row: 1 / 2;\n}\n\n.card-container input:nth-child(2) {\n  grid-row: 2 / 3;\n}\n\n.card-container input:nth-child(3) {\n  grid-row: 3 / 4;\n}\n\n.card-item select {\ngrid-row: 4 / 5;\n}\n\n.card-title {\n  grid-row: 1 / 2;\n}\n\n.card-descript {\n  grid-row: 2 / 3;\n}\n\n.card-date {\n  grid-row: 3 / 4;\n}\n\n.card-priority {\n  grid-row: 4 / 5;\n}\n\n.add-button,\n.edit-button,\n.del-button,\n.expand-button {\n  width: 4rem;\n  height: 1.8rem;\n  justify-self: end;\n  align-self: end;\n  background: rgb(100, 100, 100);\n  color: whitesmoke;\n  border-radius: 20rem;\n  border: 1px solid transparent;\n}\n.expand-button {\n  justify-self: start;\n  grid-row: 1 / 2;\n  grid-column: 2 / 3;\n}\n\n.add-button {\n  grid-column: 2 / 3;\n}\n.shrink-button,\n.edit-button {\n  grid-row: 4 / 5;\n  grid-column: 2 / 3;\n\n}\n\n.del-button {\n  grid-row: 1 / 2;\n  grid-column: 2 / 3;\n  width: 2rem;\n  justify-self: end;\n}\n\n.shrink-button {\n  width: 4rem;\n  height: 1.8rem;\n  justify-self: start;\n  align-self: end;\n  background: rgb(100, 100, 100);\n  color: whitesmoke;\n  border-radius: 20rem;\n  border: 1px solid transparent;\n}\n/* ////////////////////////////////////////Footer  */\n.footer-container {\n  /* border: 2px solid lightcoral; */\n  grid-column: 1 / 2;\n  background: rgb(40, 40, 40);\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  color: beige;\n  place-items: center;\n}\n\n.footer-add {\n  grid-column: 3 / 4;\n  font-size: 3rem;\n  padding-bottom: 0.5rem;\n}\n\n.footer-container > input {\n  grid-column: 5 / 6;\n  font-size: 1.5rem;\n  width: 14rem;\n}"],"sourceRoot":""}]);
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
    let projectName = findElement().projectName;
    createSideProject(projectName.value);
    //------------------------------------------------------------------------------------------------
    const output = (0,_storage__WEBPACK_IMPORTED_MODULE_2__.cardData)(projectName.value).data;
    (0,_storage__WEBPACK_IMPORTED_MODULE_2__.putJSON)('side', projectName.value, output);
    (0,_storage__WEBPACK_IMPORTED_MODULE_2__.putJSON)(projectName.value);
    projectName.value = '';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxTQUFTLE1BQU0sWUFBWSxPQUFPLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLEtBQUssWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sUUFBUSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FB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QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYWRkLWNhcmQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Zvb3Rlci1saXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmJveC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbGF5b3V0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcmVhZC1zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zaWRlLWxpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2lkZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMGZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMTAwZnI7XFxufVxcblxcbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9IZWFkZXIgICovXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgLyogYm9yZGVyOiAycHggc29saWQgc2FsbW9uOyAqL1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgYmFja2dyb3VuZDogcmdiKDQwLCA0MCwgNDApO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uaGVhZGVyLXRpdGxlIHtcXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1NpZGUgICovXFxuLnNpZGUtY29udGFpbmVyIHtcXG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVueWVsbG93OyAqL1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgYmFja2dyb3VuZDogcmdiKDQwLCA0MCwgNDApO1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLnNpZGUtbWVudSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDAuNWZyIDAuMWZyIDEwZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMWZyKTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc2lkZS1idXR0b24ge1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG59XFxuXFxuLnNpZGUtYnV0dG9uOm50aC1jaGlsZCgxKSB7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBncmlkLWNvbHVtbjogMyAvIDEwO1xcblxcbn1cXG5cXG4uc2lkZS1idXR0b246bnRoLWNoaWxkKDIpIHtcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG4gIGdyaWQtY29sdW1uOiAzIC8gMTA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgLyogYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHdoaXRlc21va2U7ICovXFxufVxcblxcbi5zaWRlLWJ1dHRvbjpudGgtY2hpbGQoMykge1xcbiAgZ3JpZC1yb3c6IDQgLyA1O1xcbn1cXG5cXG4uc2lkZS1wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBncmlkLXJvdzogNSAvIDY7XFxuICBncmlkLWNvbHVtbjogNCAvIDEwO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbi5zaWRlLXByb2plY3QtYm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4uc2lkZS1kZWwtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxMDAsIDEwMCwgMTAwKTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyLXJhZGl1czogMjByZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiAycmVtO1xcbiAgaGVpZ2h0OiAxLjhyZW07XFxufVxcbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9JbmJveCAgKi9cXG5cXG4uY29udGVudCB7XFxuICBncmlkLXJvdzogMSAvIDQ7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBiYWNrZ3JvdW5kOiByZ2IoNTUsIDU1LCA1NSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uaW5ib3gtY29udGVudCxcXG4ucHJvamVjdC1jb250ZW50IHtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC4xZnIgMWZyIDEwZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnIgMWZyO1xcbn1cXG5cXG4vKiAuc3RvcmFnZS1jb250ZW50IHtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC4xZnIgMWZyIDEwZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnIgMWZyO1xcbn0gKi9cXG5cXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vSW5ib3ggSGVhZGVyICAqL1xcbi5pbmJveC1oZWFkZXItY29udGFpbmVyLFxcbi5wcm9qZWN0LWhlYWRlci1jb250YWluZXIge1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgd2hpdGVzbW9rZTtcXG4gIGFsaWduLWl0ZW1zOiBlbmQ7XFxufVxcblxcbi5pbmJveC10aXRsZSxcXG4ucHJvamVjdC10aXRsZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxufVxcblxcbi5uZXctdG9kby1kaXYsXFxuLm5ldy1wcm9qZWN0LWRpdiB7XFxuICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS41ZnIgMTA5cHg7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbmJveC1hZGQsXFxuLnByb2plY3QtYWRkIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMC4yOHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbn1cXG5cXG4ubmV3LXRvZG8ge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDAuNXJlbTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWRpdiBzZWxlY3Qge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MCwgNDAsIDQwLCAwKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDAuNXJlbTtcXG59XFxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0luYm94IENhcmQgICovXFxuLmNhcmQtY29udGFpbmVyIHtcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY2FyZC1pdGVtLFxcbi5jYXJkLWl0ZW0tc2hyaW5rIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDAsIDQwLCA0MCk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDIwMHB4LCAxZnIpIG1pbm1heCgxNDBweCwgbWF4LWNvbnRlbnQpO1xcbn1cXG5cXG4udG9kby1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5pbnB1dCxcXG4uY2FyZC1pdGVtIHNlbGVjdCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQwLCA0MCwgNDAsIDApO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcblxcbn1cXG5cXG4uY2FyZC1jb250YWluZXIgaW5wdXQ6bnRoLWNoaWxkKDEpIHtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLmNhcmQtY29udGFpbmVyIGlucHV0Om50aC1jaGlsZCgyKSB7XFxuICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbi5jYXJkLWNvbnRhaW5lciBpbnB1dDpudGgtY2hpbGQoMykge1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cXG4uY2FyZC1pdGVtIHNlbGVjdCB7XFxuZ3JpZC1yb3c6IDQgLyA1O1xcbn1cXG5cXG4uY2FyZC10aXRsZSB7XFxuICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi5jYXJkLWRlc2NyaXB0IHtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuLmNhcmQtZGF0ZSB7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxufVxcblxcbi5jYXJkLXByaW9yaXR5IHtcXG4gIGdyaWQtcm93OiA0IC8gNTtcXG59XFxuXFxuLmFkZC1idXR0b24sXFxuLmVkaXQtYnV0dG9uLFxcbi5kZWwtYnV0dG9uLFxcbi5leHBhbmQtYnV0dG9uIHtcXG4gIHdpZHRoOiA0cmVtO1xcbiAgaGVpZ2h0OiAxLjhyZW07XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGJhY2tncm91bmQ6IHJnYigxMDAsIDEwMCwgMTAwKTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyLXJhZGl1czogMjByZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuLmV4cGFuZC1idXR0b24ge1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG59XFxuXFxuLmFkZC1idXR0b24ge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbn1cXG4uc2hyaW5rLWJ1dHRvbixcXG4uZWRpdC1idXR0b24ge1xcbiAgZ3JpZC1yb3c6IDQgLyA1O1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcblxcbn1cXG5cXG4uZGVsLWJ1dHRvbiB7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICB3aWR0aDogMnJlbTtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4uc2hyaW5rLWJ1dHRvbiB7XFxuICB3aWR0aDogNHJlbTtcXG4gIGhlaWdodDogMS44cmVtO1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGJhY2tncm91bmQ6IHJnYigxMDAsIDEwMCwgMTAwKTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyLXJhZGl1czogMjByZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0Zvb3RlciAgKi9cXG4uZm9vdGVyLWNvbnRhaW5lciB7XFxuICAvKiBib3JkZXI6IDJweCBzb2xpZCBsaWdodGNvcmFsOyAqL1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgYmFja2dyb3VuZDogcmdiKDQwLCA0MCwgNDApO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XFxuICBjb2xvcjogYmVpZ2U7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyLWFkZCB7XFxuICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4uZm9vdGVyLWNvbnRhaW5lciA+IGlucHV0IHtcXG4gIGdyaWQtY29sdW1uOiA1IC8gNjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgd2lkdGg6IDE0cmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsa0NBQWtDO0FBQ3BDOztBQUVBLG9EQUFvRDtBQUNwRDtFQUNFLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLGtEQUFrRDtBQUNsRDtFQUNFLG1DQUFtQztFQUNuQyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNENBQTRDO0VBQzVDLHNDQUFzQztFQUN0Qyx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7O0FBRXJCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsY0FBYztBQUNoQjtBQUNBLG1EQUFtRDs7QUFFbkQ7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsa0NBQWtDO0FBQ3BDOztBQUVBOzs7OztHQUtHOztBQUVILDBEQUEwRDtBQUMxRDs7RUFFRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsbUNBQW1DO0VBQ25DLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUNBLHdEQUF3RDtBQUN4RDtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSw0QkFBNEI7RUFDNUIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isb0VBQW9FO0FBQ3RFOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSwrQkFBK0I7RUFDL0IsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQiw2QkFBNkI7O0FBRS9COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0FBQ0EsZUFBZTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTs7OztFQUlFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7O0VBRUUsZUFBZTtFQUNmLGtCQUFrQjs7QUFFcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsNkJBQTZCO0FBQy9CO0FBQ0Esb0RBQW9EO0FBQ3BEO0VBQ0Usa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMGZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMTAwZnI7XFxufVxcblxcbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9IZWFkZXIgICovXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgLyogYm9yZGVyOiAycHggc29saWQgc2FsbW9uOyAqL1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgYmFja2dyb3VuZDogcmdiKDQwLCA0MCwgNDApO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uaGVhZGVyLXRpdGxlIHtcXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1NpZGUgICovXFxuLnNpZGUtY29udGFpbmVyIHtcXG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVueWVsbG93OyAqL1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgYmFja2dyb3VuZDogcmdiKDQwLCA0MCwgNDApO1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLnNpZGUtbWVudSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDAuNWZyIDAuMWZyIDEwZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMWZyKTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc2lkZS1idXR0b24ge1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG59XFxuXFxuLnNpZGUtYnV0dG9uOm50aC1jaGlsZCgxKSB7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBncmlkLWNvbHVtbjogMyAvIDEwO1xcblxcbn1cXG5cXG4uc2lkZS1idXR0b246bnRoLWNoaWxkKDIpIHtcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG4gIGdyaWQtY29sdW1uOiAzIC8gMTA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgLyogYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHdoaXRlc21va2U7ICovXFxufVxcblxcbi5zaWRlLWJ1dHRvbjpudGgtY2hpbGQoMykge1xcbiAgZ3JpZC1yb3c6IDQgLyA1O1xcbn1cXG5cXG4uc2lkZS1wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBncmlkLXJvdzogNSAvIDY7XFxuICBncmlkLWNvbHVtbjogNCAvIDEwO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbi5zaWRlLXByb2plY3QtYm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4uc2lkZS1kZWwtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxMDAsIDEwMCwgMTAwKTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyLXJhZGl1czogMjByZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiAycmVtO1xcbiAgaGVpZ2h0OiAxLjhyZW07XFxufVxcbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9JbmJveCAgKi9cXG5cXG4uY29udGVudCB7XFxuICBncmlkLXJvdzogMSAvIDQ7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBiYWNrZ3JvdW5kOiByZ2IoNTUsIDU1LCA1NSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uaW5ib3gtY29udGVudCxcXG4ucHJvamVjdC1jb250ZW50IHtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC4xZnIgMWZyIDEwZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnIgMWZyO1xcbn1cXG5cXG4vKiAuc3RvcmFnZS1jb250ZW50IHtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC4xZnIgMWZyIDEwZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnIgMWZyO1xcbn0gKi9cXG5cXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vSW5ib3ggSGVhZGVyICAqL1xcbi5pbmJveC1oZWFkZXItY29udGFpbmVyLFxcbi5wcm9qZWN0LWhlYWRlci1jb250YWluZXIge1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgd2hpdGVzbW9rZTtcXG4gIGFsaWduLWl0ZW1zOiBlbmQ7XFxufVxcblxcbi5pbmJveC10aXRsZSxcXG4ucHJvamVjdC10aXRsZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxufVxcblxcbi5uZXctdG9kby1kaXYsXFxuLm5ldy1wcm9qZWN0LWRpdiB7XFxuICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS41ZnIgMTA5cHg7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbmJveC1hZGQsXFxuLnByb2plY3QtYWRkIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMC4yOHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbn1cXG5cXG4ubmV3LXRvZG8ge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDAuNXJlbTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWRpdiBzZWxlY3Qge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MCwgNDAsIDQwLCAwKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDAuNXJlbTtcXG59XFxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0luYm94IENhcmQgICovXFxuLmNhcmQtY29udGFpbmVyIHtcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY2FyZC1pdGVtLFxcbi5jYXJkLWl0ZW0tc2hyaW5rIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDAsIDQwLCA0MCk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDIwMHB4LCAxZnIpIG1pbm1heCgxNDBweCwgbWF4LWNvbnRlbnQpO1xcbn1cXG5cXG4udG9kby1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5pbnB1dCxcXG4uY2FyZC1pdGVtIHNlbGVjdCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQwLCA0MCwgNDAsIDApO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcblxcbn1cXG5cXG4uY2FyZC1jb250YWluZXIgaW5wdXQ6bnRoLWNoaWxkKDEpIHtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLmNhcmQtY29udGFpbmVyIGlucHV0Om50aC1jaGlsZCgyKSB7XFxuICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbi5jYXJkLWNvbnRhaW5lciBpbnB1dDpudGgtY2hpbGQoMykge1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cXG4uY2FyZC1pdGVtIHNlbGVjdCB7XFxuZ3JpZC1yb3c6IDQgLyA1O1xcbn1cXG5cXG4uY2FyZC10aXRsZSB7XFxuICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi5jYXJkLWRlc2NyaXB0IHtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuLmNhcmQtZGF0ZSB7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxufVxcblxcbi5jYXJkLXByaW9yaXR5IHtcXG4gIGdyaWQtcm93OiA0IC8gNTtcXG59XFxuXFxuLmFkZC1idXR0b24sXFxuLmVkaXQtYnV0dG9uLFxcbi5kZWwtYnV0dG9uLFxcbi5leHBhbmQtYnV0dG9uIHtcXG4gIHdpZHRoOiA0cmVtO1xcbiAgaGVpZ2h0OiAxLjhyZW07XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGJhY2tncm91bmQ6IHJnYigxMDAsIDEwMCwgMTAwKTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyLXJhZGl1czogMjByZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuLmV4cGFuZC1idXR0b24ge1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG59XFxuXFxuLmFkZC1idXR0b24ge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbn1cXG4uc2hyaW5rLWJ1dHRvbixcXG4uZWRpdC1idXR0b24ge1xcbiAgZ3JpZC1yb3c6IDQgLyA1O1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcblxcbn1cXG5cXG4uZGVsLWJ1dHRvbiB7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICB3aWR0aDogMnJlbTtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4uc2hyaW5rLWJ1dHRvbiB7XFxuICB3aWR0aDogNHJlbTtcXG4gIGhlaWdodDogMS44cmVtO1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGJhY2tncm91bmQ6IHJnYigxMDAsIDEwMCwgMTAwKTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyLXJhZGl1czogMjByZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0Zvb3RlciAgKi9cXG4uZm9vdGVyLWNvbnRhaW5lciB7XFxuICAvKiBib3JkZXI6IDJweCBzb2xpZCBsaWdodGNvcmFsOyAqL1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgYmFja2dyb3VuZDogcmdiKDQwLCA0MCwgNDApO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XFxuICBjb2xvcjogYmVpZ2U7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyLWFkZCB7XFxuICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4uZm9vdGVyLWNvbnRhaW5lciA+IGlucHV0IHtcXG4gIGdyaWQtY29sdW1uOiA1IC8gNjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgd2lkdGg6IDE0cmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IFxuICBlbGVtZW50RmFjdG9yeSwgXG4gIGZvcm1GYWN0b3J5LCBcbiAgaW5wdXRGYWN0b3J5LCBcbiAgc2VsZWN0RmFjdG9yeSwgXG4gIGJ1dHRvbkZhY3RvcnksXG4gIHBhcmVudEZhY3Rvcnlcbn0gZnJvbSAnLi9mYWN0b3J5JztcbmltcG9ydCB7IGNhcmREYXRhLCBwdXRKU09OLCBwdXRLZXksIHJlbW92ZUNhcmREYXRhfSBmcm9tICcuL3N0b3JhZ2UnO1xuaW1wb3J0IHsgZmluZEtleXMsIGZpbmRFeGlzdEtleX0gZnJvbSAnLi9yZWFkLXN0b3JhZ2UnO1xuaW1wb3J0IHsgYWRkVG9Qcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0cyc7XG5cbmZ1bmN0aW9uIGFkZEJ1dHRvbkxpc3RlbmVyKGFkZCwgaXRlbSwgdGl0bGUsIGRlc2NyaXB0LCBkYXRlLCBwcmlvcml0eSwgZWRpdFRpdGxlKSB7XG4gIGFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zdCBvdXRwdXQgPSBjYXJkRGF0YSh0aXRsZS52YWx1ZSwgZGVzY3JpcHQudmFsdWUsIGRhdGUudmFsdWUsIHByaW9yaXR5LnZhbHVlKS5kYXRhO1xuICAgIFxuICAgIGxldCBwYXJlbnQgPSBwYXJlbnRGYWN0b3J5KGUpLnJlc3VsdDtcbiAgICBsZXQgc2VhcmNoUGFyZW50ID0gcGFyZW50O1xuICAgIGlmIChzZWFyY2hQYXJlbnQgPT0gJ0luYm94Jykge1xuICAgICAgc2VhcmNoUGFyZW50ID0gJ2luYm94JztcbiAgICB9XG5cbiAgICBjb25zdCBidXR0b25OYW1lID0gZS50YXJnZXQuY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudDtcbiAgICBcbiAgICBjb25zdCBleGlzdCA9IGZpbmRFeGlzdEtleShzZWFyY2hQYXJlbnQsIHRpdGxlLnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyhleGlzdCk7XG4gICAgY29uc29sZS5sb2coc2VhcmNoUGFyZW50KTtcblxuICAgIFxuICAgIC8vIDEuIFBsYWluIG5ldyBpbmJveCwgbm8gbmFtZSBjaGVjayBuZWVkZWRcbiAgICBpZiAoZmluZEtleXMoJ2luYm94JykubGVuZ3RoID09IDAgJiYgcGFyZW50ID09ICdJbmJveCcpIHtcbiAgICAgIGNhcmRTaHJpbmsoXG4gICAgICAgIGl0ZW0sXG4gICAgICAgIHRpdGxlLnZhbHVlLFxuICAgICAgICBkZXNjcmlwdC52YWx1ZSxcbiAgICAgICAgZGF0ZS52YWx1ZSxcbiAgICAgICAgcHJpb3JpdHksXG4gICAgICAgICk7XG5cbiAgICAgIGl0ZW0ucmVtb3ZlKCk7XG4gICAgICBwdXRKU09OKCdpbmJveCcsIHRpdGxlLnZhbHVlLCBvdXRwdXQpO1xuXG4gICAgICBjb25zb2xlLmxvZygnSXRlbSBhZGRlZCBmcmVzaCBpbmJveCcpO1xuICAgICAgLy8gMi4gSW5ib3ggd2l0aCBpdGVtcywgY2hlY2sgbmFtZSBmb3IgZHVwbGljYXRlXG4gICAgfSBlbHNlIGlmIChleGlzdCA9PSB0cnVlICYmIGJ1dHRvbk5hbWUgPT0gJ0FkZCcpIHtcbiAgICAgIGFsZXJ0KCdUb2RvIGFscmVhZHkgZXhpc3RzLicpO1xuICAgICAgY29uc29sZS5sb2coJ05hbWUgYWxyZWFkeSBleGlzdHMnKTtcbiAgICAgIFxuICAgICAgLy8gMy4gQWRkIGNhcmQgd2l0aCBubyBuYW1lIGR1cGxpY2F0ZVxuICAgIH0gZWxzZSBpZiAoIWV4aXN0ID09IHRydWUgJiYgYnV0dG9uTmFtZSA9PSAnQWRkJykgeyBcbiAgICAgIGNhcmRTaHJpbmsoXG4gICAgICAgIGl0ZW0sXG4gICAgICAgIHRpdGxlLnZhbHVlLFxuICAgICAgICBkZXNjcmlwdC52YWx1ZSxcbiAgICAgICAgZGF0ZS52YWx1ZSxcbiAgICAgICAgcHJpb3JpdHksXG4gICAgICAgICk7XG5cbiAgICAgIGl0ZW0ucmVtb3ZlKCk7XG4gICAgICBjb25zb2xlLmxvZygnSXRlbSBhZGRlZCBubyBkdXBsaWNhdGUgbmFtZScpO1xuICAgICAgcHV0SlNPTignaW5ib3gnLCB0aXRsZS52YWx1ZSwgb3V0cHV0KTtcbiAgICAgIFxuICAgICAgICAvLyA0LiBFZGl0IGNhcmQgd2l0aCBuYW1lIGNoYW5nZSwgY2hlY2sgbmFtZSBmb3IgZHVwbGljYXRlXG4gICAgfSBlbHNlIGlmICh0aXRsZS52YWx1ZSAhPT0gZWRpdFRpdGxlICYmIGV4aXN0ID09IHRydWUgJiYgYnV0dG9uTmFtZSA9PSAnU2F2ZScpIHtcbiAgICAgIGFsZXJ0KCdOYW1lIGFscmVhZHkgZXhpc3RzLicpO1xuICAgICAgY29uc29sZS5sb2coJ05hbWUgYWxyZWFkeSBleGlzdHMnKTtcbiAgICAgIFxuICAgICAgLy8gNS4gRWRpdCBjYXJkIHdpdGhvdXQgbmFtZSBjaGFuZ2UsIGVkaXQgd2l0aG91dCBuYW1lIGR1cGxpY2F0ZVxuICAgIH0gZWxzZSBpZiAoKHRpdGxlLnZhbHVlID09IGVkaXRUaXRsZSAmJiBleGlzdCA9PSB0cnVlICYmIGJ1dHRvbk5hbWUgPT0gJ1NhdmUnKSB8fFxuICAgICh0aXRsZS52YWx1ZSAhPT0gZWRpdFRpdGxlICYmIGV4aXN0ICE9PSB0cnVlICYmIGJ1dHRvbk5hbWUgPT0gJ1NhdmUnKSkge1xuICAgICAgY29uc29sZS5sb2coJ0VkaXQgd2l0aG91dCBuYW1lIGNoYW5nZSAvIEVkaXQgd2l0aG91dCBuYW1lIGR1cGxpY2F0ZScpO1xuICAgICAgY2FyZFNocmluayhcbiAgICAgICAgaXRlbSxcbiAgICAgICAgdGl0bGUudmFsdWUsXG4gICAgICAgIGRlc2NyaXB0LnZhbHVlLFxuICAgICAgICBkYXRlLnZhbHVlLFxuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgKVxuICAgICAgaXRlbS5yZW1vdmUoKTtcbiAgICAgIFxuICAgICAgaWYgKHBhcmVudCAhPT0gJ0luYm94Jykge1xuICAgICAgICBpZiAoZWRpdFRpdGxlICE9PSB1bmRlZmluZWQpIHsgXG4gICAgICAgICAgcHV0S2V5KHBhcmVudCwgZWRpdFRpdGxlLCB0aXRsZS52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcHV0SlNPTihwYXJlbnQsIHRpdGxlLnZhbHVlLCBvdXRwdXQpO1xuICAgICAgICBmaW5kRWxlbWVudCgpLnNlbGVjdC5yZW1vdmUoKVxuICAgICAgICBhZGRUb1Byb2plY3QocGFyZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChlZGl0VGl0bGUgIT09IHVuZGVmaW5lZCkgeyBcbiAgICAgICAgICBwdXRLZXkoJ2luYm94JywgZWRpdFRpdGxlLCB0aXRsZS52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcHV0SlNPTignaW5ib3gnLCB0aXRsZS52YWx1ZSwgb3V0cHV0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBleHBhbmRCdXR0b25MaXN0ZW5lcihleHBhbmQsIGl0ZW0sIHRpdGxlLCBkZXNjcmlwdCwgZGF0ZSwgcHJpb3JpdHkpIHtcbiAgZXhwYW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY2FyZE91dHB1dCggXG4gICAgICBpdGVtLFxuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcmlwdCxcbiAgICAgIGRhdGUsXG4gICAgICBwcmlvcml0eSxcbiAgICApXG4gICAgaXRlbS5yZW1vdmUoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVkaXRCdXR0b25MaXN0ZW5lcihlZGl0LCBpdGVtLCB0aXRsZSwgZGVzY3JpcHQsIGRhdGUsIHByaW9yaXR5KSB7XG4gIGNvbnN0IHRhcmdldCA9IGZpbmRFbGVtZW50KCkuY2FyZENvbnRhaW5lcjtcbiAgY29uc3QgZWRpdENhcmQgPSBjYXJkRmFjdG9yeSgnJywgJycsICcnLCAnU2F2ZScsIHRpdGxlLCBkZXNjcmlwdCwgZGF0ZSwgcHJpb3JpdHkpLmNhcmRJdGVtO1xuXG4gIGVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICB0YXJnZXQuaW5zZXJ0QmVmb3JlKGVkaXRDYXJkLCBpdGVtKTtcbiAgICBpdGVtLnJlbW92ZSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVsQnV0dG9uTGlzdGVuZXIoZGVsLCBpdGVtLCB0eXBlLCBrZXkpIHtcbiAgZGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIHJlbW92ZUNhcmREYXRhKHR5cGUsIGtleSk7XG5cbiAgICBsZXQgcGFyZW50ID0gcGFyZW50RmFjdG9yeShlKS5yZXN1bHQ7XG5cbiAgICBjaGVjazpcbiAgICBpZiAocGFyZW50ICE9PSAnSW5ib3gnKSB7XG4gICAgICBmaW5kRWxlbWVudCgpLnNlbGVjdC5yZW1vdmUoKVxuICAgICAgYWRkVG9Qcm9qZWN0KHR5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBicmVhayBjaGVjaztcbiAgICB9XG5cbiAgICBpdGVtLnJlbW92ZSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2hyaW5rQnV0dG9uTGlzdGVuZXIoc2hyaW5rLCBpdGVtLCB0aXRsZSwgZGVzY3JpcHQsIGRhdGUsIHByaW9yaXR5KSB7XG4gIHNocmluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGNhcmRTaHJpbmsoXG4gICAgICBpdGVtLFxuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcmlwdCxcbiAgICAgIGRhdGUsXG4gICAgICBwcmlvcml0eSxcbiAgICApXG4gICAgaXRlbS5yZW1vdmUoKTtcbn0pO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VDb2xvcih2YWx1ZSwgaXRlbSkge1xuICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgY2FzZSAnSGlnaCc6XG4gICAgICBpdGVtLnN0eWxlLmJhY2tncm91bmQgPSBcInJnYmEoMjU1LCAwLCAwLCAwLjQpXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdOb3JtYWwnOlxuICAgICAgaXRlbS5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDAsIDEyOCwgMCwgMC40KVwiO1xuICAgICAgYnJlYWs7ICBcbiAgICBjYXNlICdMb3cnOlxuICAgICAgaXRlbS5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDAsIDAsIDI1NSwgMC40KVwiO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGl0ZW0uc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSg0MCwgNDAsIDQwKVwiO1xuICB9XG59XG5cbmNvbnN0IGNhcmRGYWN0b3J5ID0gKHRpdGxlLCBkZXNjcmlwdCwgZGF0ZSwgYnV0dG9uLCBlZGl0VGl0bGUsIGVkaXREZXMsIGVkaXREYXRlLCBlZGl0UHJpKSA9PiB7XG4gIGNvbnN0IGNhcmRJdGVtID0gZWxlbWVudEZhY3RvcnkoJ2NhcmQtaXRlbScpLmVsZW1lbnQ7XG4gIGNvbnN0IGZvcm0gPSBmb3JtRmFjdG9yeSgndG9kby1mb3JtJykuZWxlbWVudDtcbiAgY29uc3QgY2FyZFRpdGxlID0gaW5wdXRGYWN0b3J5KCd0ZXh0JywgdGl0bGUsIGVkaXRUaXRsZSkuZWxlbWVudDtcbiAgY29uc3QgY2FyZERlc2NyaXB0ID0gaW5wdXRGYWN0b3J5KCd0ZXh0JywgZGVzY3JpcHQsIGVkaXREZXMpLmVsZW1lbnQ7XG4gIGNvbnN0IGNhcmREYXRlID0gaW5wdXRGYWN0b3J5KCdkYXRlJywgZGF0ZSwgZWRpdERhdGUpLmVsZW1lbnQ7XG4gIGNvbnN0IGNhcmRQcmlvcml0eSA9IHNlbGVjdEZhY3RvcnkoJ1ByaW9yaXR5JywgJ0hpZ2gnLCAnTm9ybWFsJywgJ0xvdycsIGVkaXRQcmkpLmVsZW1lbnQ7XG4gIGNvbnN0IGFkZCA9IGJ1dHRvbkZhY3RvcnkoJ2J1dHRvbicsICdhZGQtYnV0dG9uJywgYnV0dG9uKS5lbGVtZW50O1xuXG4gIGFkZEJ1dHRvbkxpc3RlbmVyKGFkZCwgY2FyZEl0ZW0sIGNhcmRUaXRsZSwgY2FyZERlc2NyaXB0LCBjYXJkRGF0ZSwgY2FyZFByaW9yaXR5LCBlZGl0VGl0bGUpO1xuXG4gIGlmIChlZGl0UHJpICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAodHlwZW9mIGVkaXRQcmkgPT09ICdzdHJpbmcnKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcmRQcmlvcml0eS5vcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChjYXJkUHJpb3JpdHkub3B0aW9uc1tpXS50ZXh0Q29udGVudCA9PSBlZGl0UHJpKSB7XG4gICAgICAgICAgY2FyZFByaW9yaXR5Lm9wdGlvbnNbaV0uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBzZWxlY3RlZCA9IGVkaXRQcmkuc2VsZWN0ZWRJbmRleDtcbiAgICAgIGNhcmRQcmlvcml0eS5vcHRpb25zW3NlbGVjdGVkXS5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XG4gICAgfVxuICB9XG4gIFxuICBmb3JtLmFwcGVuZChjYXJkVGl0bGUsIGNhcmREZXNjcmlwdCwgY2FyZERhdGUsIGNhcmRQcmlvcml0eSk7XG4gIGNhcmRJdGVtLmFwcGVuZChmb3JtLCBhZGQpO1xuXG4gIHJldHVybiB7IGNhcmRJdGVtLCBjYXJkVGl0bGUsIGNhcmREZXNjcmlwdCwgY2FyZERhdGUsIGNhcmRQcmlvcml0eSB9O1xufVxuXG5mdW5jdGlvbiBjYXJkU2hyaW5rKGl0ZW0sIHRpdGxlLCBkZXNjcmlwdCwgZGF0ZSwgcHJpb3JpdHkpIHtcbiAgY29uc3QgY2FyZENvbnRhaW5lciA9IGZpbmRFbGVtZW50KCkuY2FyZENvbnRhaW5lcjtcbiAgY29uc3QgY2FyZEl0ZW0gPSBlbGVtZW50RmFjdG9yeSgnY2FyZC1pdGVtLXNocmluaycpLmVsZW1lbnQ7XG4gIGNvbnN0IGNhcmRUaXRsZSA9IGVsZW1lbnRGYWN0b3J5KCdjYXJkLXRpdGxlLXNocmluaycpLmVsZW1lbnQ7XG4gIGNvbnN0IGV4cGFuZCA9IGJ1dHRvbkZhY3RvcnkoJ2J1dHRvbicsICdleHBhbmQtYnV0dG9uJywgJ0V4cGFuZCcpLmVsZW1lbnQ7XG4gIGNvbnN0IGRlbCA9IGJ1dHRvbkZhY3RvcnkoJ2J1dHRvbicsICdkZWwtYnV0dG9uJywgJ1gnKS5lbGVtZW50O1xuICBjb25zdCBpbmJveFRpdGxlID0gZmluZEVsZW1lbnQoKS5pbmJveFRpdGxlO1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBmaW5kRWxlbWVudCgpLnByb2plY3RUaXRsZTtcblxuICBjYXJkVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgXG4gIGlmICh0eXBlb2YgcHJpb3JpdHkgPT09ICdzdHJpbmcnKSB7XG4gICAgY2hhbmdlQ29sb3IocHJpb3JpdHksIGNhcmRJdGVtKTtcbiAgfSBlbHNlIHtcbiAgICBjaGFuZ2VDb2xvcihwcmlvcml0eS52YWx1ZSwgY2FyZEl0ZW0pO1xuICB9XG5cbiAgY2FyZEl0ZW0uYXBwZW5kKGNhcmRUaXRsZSwgZXhwYW5kLCBkZWwpXG4gIGlmIChpdGVtID09ICcnKSB7XG4gICAgY2FyZENvbnRhaW5lci5hcHBlbmQoY2FyZEl0ZW0pXG4gIH0gZWxzZSB7IFxuICAgIGNhcmRDb250YWluZXIuaW5zZXJ0QmVmb3JlKGNhcmRJdGVtLCBpdGVtKVxuICB9XG5cbiAgaWYgKGluYm94VGl0bGUgIT09IG51bGwpIHtcbiAgICBkZWxCdXR0b25MaXN0ZW5lcihkZWwsIGNhcmRJdGVtLCBpbmJveFRpdGxlLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCksIGNhcmRUaXRsZS50ZXh0Q29udGVudCApO1xuICB9IGVsc2Uge1xuICAgIGRlbEJ1dHRvbkxpc3RlbmVyKGRlbCwgY2FyZEl0ZW0sIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCwgY2FyZFRpdGxlLnRleHRDb250ZW50ICk7XG4gIH1cblxuICBleHBhbmRCdXR0b25MaXN0ZW5lcihleHBhbmQsIGNhcmRJdGVtLCB0aXRsZSwgZGVzY3JpcHQsIGRhdGUsIHByaW9yaXR5KTtcbn1cblxuZnVuY3Rpb24gY2FyZE91dHB1dCAoaXRlbSwgdGl0bGUsIGRlc2NyaXB0LCBkYXRlLCBwcmlvcml0eSkge1xuICBjb25zdCBjYXJkQ29udGFpbmVyID0gZmluZEVsZW1lbnQoKS5jYXJkQ29udGFpbmVyO1xuICBjb25zdCBjYXJkSXRlbSA9IGVsZW1lbnRGYWN0b3J5KCdjYXJkLWl0ZW0nKS5lbGVtZW50O1xuICBjb25zdCBjYXJkVGl0bGUgPSBlbGVtZW50RmFjdG9yeSgnY2FyZC10aXRsZScpLmVsZW1lbnQ7XG4gIGNvbnN0IGNhcmREZXNjcmlwdCA9IGVsZW1lbnRGYWN0b3J5KCdjYXJkLWRlc2NyaXB0JykuZWxlbWVudDtcbiAgY29uc3QgY2FyZERhdGUgPSBlbGVtZW50RmFjdG9yeSgnY2FyZC1kYXRlJykuZWxlbWVudDtcbiAgY29uc3QgY2FyZFByaW9yaXR5ID0gZWxlbWVudEZhY3RvcnkoJ2NhcmQtcHJpb3JpdHknKS5lbGVtZW50O1xuICBjb25zdCBlZGl0ID0gYnV0dG9uRmFjdG9yeSgnYnV0dG9uJywgJ2VkaXQtYnV0dG9uJywnRWRpdCcpLmVsZW1lbnQ7XG4gIGNvbnN0IGRlbCA9IGJ1dHRvbkZhY3RvcnkoJ2J1dHRvbicsICdkZWwtYnV0dG9uJywgJ1gnKS5lbGVtZW50O1xuICBjb25zdCBzaHJpbmsgPSBidXR0b25GYWN0b3J5KCdidXR0b24nLCAnc2hyaW5rLWJ1dHRvbicsICdTaHJpbmsnKS5lbGVtZW50O1xuICBjb25zdCBpbmJveFRpdGxlID0gZmluZEVsZW1lbnQoKS5pbmJveFRpdGxlO1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBmaW5kRWxlbWVudCgpLnByb2plY3RUaXRsZTtcblxuICBjYXJkVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgY2FyZERlc2NyaXB0LnRleHRDb250ZW50ID0gZGVzY3JpcHQ7XG4gIGNhcmREYXRlLnRleHRDb250ZW50ID0gZGF0ZTtcblxuICBpZiAodHlwZW9mIHByaW9yaXR5ID09PSAnc3RyaW5nJykge1xuICAgIGNhcmRQcmlvcml0eS50ZXh0Q29udGVudCA9ICdQcmlvcml0eTogJyArIHByaW9yaXR5O1xuICAgIGNoYW5nZUNvbG9yKHByaW9yaXR5LCBjYXJkSXRlbSk7XG4gIH0gZWxzZSB7XG4gICAgY2FyZFByaW9yaXR5LnRleHRDb250ZW50ID0gJ1ByaW9yaXR5OiAnICsgcHJpb3JpdHkudmFsdWU7XG4gICAgY2hhbmdlQ29sb3IocHJpb3JpdHkudmFsdWUsIGNhcmRJdGVtKTtcbiAgfVxuXG4gIGNhcmRJdGVtLmFwcGVuZChjYXJkVGl0bGUsIGNhcmREZXNjcmlwdCwgY2FyZERhdGUsIGNhcmRQcmlvcml0eSwgc2hyaW5rLCBlZGl0LCBkZWwpO1xuICBjYXJkQ29udGFpbmVyLmluc2VydEJlZm9yZShjYXJkSXRlbSwgaXRlbSlcbiAgXG4gIGlmIChpbmJveFRpdGxlICE9PSBudWxsKSB7XG4gICAgZGVsQnV0dG9uTGlzdGVuZXIoZGVsLCBjYXJkSXRlbSwgaW5ib3hUaXRsZS50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpLCBjYXJkVGl0bGUudGV4dENvbnRlbnQgKTtcbiAgfSBlbHNlIHtcbiAgICBkZWxCdXR0b25MaXN0ZW5lcihkZWwsIGNhcmRJdGVtLCBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQsIGNhcmRUaXRsZS50ZXh0Q29udGVudCApO1xuICB9XG5cbiAgZWRpdEJ1dHRvbkxpc3RlbmVyKGVkaXQsIGNhcmRJdGVtLCB0aXRsZSwgZGVzY3JpcHQsIGRhdGUsIHByaW9yaXR5KTtcbiAgc2hyaW5rQnV0dG9uTGlzdGVuZXIoc2hyaW5rLCBjYXJkSXRlbSwgdGl0bGUsIGRlc2NyaXB0LCBkYXRlLCBwcmlvcml0eSk7XG59XG5cbmZ1bmN0aW9uIGZpbmRFbGVtZW50KCkge1xuICBjb25zdCBuZXdCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRvZG8tZGl2Jyk7XG4gIGNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1jb250YWluZXInKTtcbiAgY29uc3QgaW5ib3hUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveC10aXRsZScpO1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10aXRsZScpO1xuICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtZGl2ID4gc2VsZWN0Jyk7XG5cbiAgcmV0dXJuIHsgbmV3QnV0dG9uLCBjYXJkQ29udGFpbmVyLCBpbmJveFRpdGxlLCBwcm9qZWN0VGl0bGUsIHNlbGVjdCB9XG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9kb0NsaWNrKCkge1xuICBjb25zdCB0YXJnZXQgPSBmaW5kRWxlbWVudCgpLm5ld0J1dHRvbjtcbiAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkQ2FyZCk7XG59XG5cbmZ1bmN0aW9uIGFkZENhcmQoKSB7XG4gIGNvbnN0IHRhcmdldCA9IGZpbmRFbGVtZW50KCkuY2FyZENvbnRhaW5lcjtcbiAgY29uc3QgbmV3Q2FyZCA9IGNhcmRGYWN0b3J5KCdOZXcgVGl0bGUnLCAnTmV3IERlc2NyaXB0aW9uJywgJ05ldyBEYXRlJywgJ0FkZCcpLmNhcmRJdGVtO1xuICB0YXJnZXQuYXBwZW5kQ2hpbGQobmV3Q2FyZCk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVRvZG9DbGljaywgY2FyZFNocmluayB9OyIsImNvbnN0IGVsZW1lbnRGYWN0b3J5ID0gKG5hbWUpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQobmFtZSk7XG4gIHJldHVybiB7IGVsZW1lbnQgfTtcbn07XG5cbmNvbnN0IGZvcm1GYWN0b3J5ID0gKGNscykgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgLy8gZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsIGFjdGlvbik7XG4gIC8vIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdtZXRob2QnLCBtZXRob2QpO1xuICByZXR1cm4geyBlbGVtZW50IH07XG59O1xuXG5jb25zdCBpbnB1dEZhY3RvcnkgPSAodHlwZSwgcGxjaG9sZGVyLCB2YWx1ZSA9ICcnKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndHlwZScsIHR5cGUpO1xuICBlbGVtZW50LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBwbGNob2xkZXIpO1xuICBlbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gIHJldHVybiB7IGVsZW1lbnQgfTtcbn1cblxuY29uc3Qgc2VsZWN0RmFjdG9yeSA9IChsYWJlbCwgb3AxLCBvcDIsIG9wMykgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIGNvbnN0IGdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0Z3JvdXAnKTtcbiAgY29uc3Qgb3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBjb25zdCBvcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGNvbnN0IG9wdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblxuICBncm91cC5zZXRBdHRyaWJ1dGUoJ2xhYmVsJywgbGFiZWwpO1xuICBvcHRpb24xLnRleHRDb250ZW50ID0gb3AxO1xuICBvcHRpb24yLnRleHRDb250ZW50ID0gb3AyO1xuICBvcHRpb24zLnRleHRDb250ZW50ID0gb3AzO1xuICBncm91cC5hcHBlbmQob3B0aW9uMSwgb3B0aW9uMiwgb3B0aW9uMyk7XG4gIGVsZW1lbnQuYXBwZW5kKGdyb3VwKTtcblxuICByZXR1cm4geyBlbGVtZW50IH1cbn1cblxuY29uc3QgYnV0dG9uRmFjdG9yeSA9ICh0eXBlLCBjbHMsIHRleHQpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndHlwZScsIHR5cGUpO1xuICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNscyk7XG4gIHJldHVybiB7IGVsZW1lbnQgfVxufVxuXG5jb25zdCBhZGRQcmpGYWN0b3J5ID0gKGxhYmVsLCAuLi5vcHMpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBjb25zdCBncm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGdyb3VwJyk7XG5cbiAgZ3JvdXAuc2V0QXR0cmlidXRlKCdsYWJlbCcsIGxhYmVsKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9wc1swXS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBkaXYudGV4dENvbnRlbnQgPSBvcHNbMF1baV07XG4gICAgZ3JvdXAuYXBwZW5kKGRpdik7XG4gIH1cblxuICBlbGVtZW50LmFwcGVuZChncm91cCk7XG5cbiAgcmV0dXJuIHsgZWxlbWVudCB9O1xufVxuXG5jb25zdCBwYXJlbnRGYWN0b3J5ID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHJlZ2V4ID0gLy4rLztcbiAgbGV0IHRleHQgPSBldmVudC5jb21wb3NlZFBhdGgoKTtcbiAgdGV4dCA9IHRleHRbM10uaW5uZXJUZXh0O1xuICBsZXQgcmVzdWx0ID0gcmVnZXguZXhlYyh0ZXh0KTtcbiAgcmVzdWx0ID0gcmVzdWx0WzBdO1xuXG4gIHJldHVybiB7IHJlc3VsdCB9XG59XG5cbmNvbnN0IHByak5hbWVGYWN0b3J5ID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHJlZ2V4ID0gLy4rLztcbiAgbGV0IHBhdGggPSBldmVudC5jb21wb3NlZFBhdGgoKTtcbiAgcGF0aCA9IHBhdGhbMV0uaW5uZXJUZXh0O1xuICBsZXQgcmVzdWx0ID0gcmVnZXguZXhlYyhwYXRoKTtcbiAgcmVzdWx0ID0gcmVzdWx0WzBdO1xuXG4gIHJldHVybiB7IHJlc3VsdCB9XG59XG5cbmV4cG9ydCB7IGVsZW1lbnRGYWN0b3J5LCBpbnB1dEZhY3RvcnksIGZvcm1GYWN0b3J5LCBzZWxlY3RGYWN0b3J5LCBidXR0b25GYWN0b3J5LCBhZGRQcmpGYWN0b3J5LCBwYXJlbnRGYWN0b3J5LCBwcmpOYW1lRmFjdG9yeSB9IiwiaW1wb3J0IHsgZWxlbWVudEZhY3RvcnksIGJ1dHRvbkZhY3RvcnksIHByak5hbWVGYWN0b3J5IH0gZnJvbSBcIi4vZmFjdG9yeVwiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdENvbnRlbnQsIGFkZFRvUHJvamVjdCwgYWRkUHJvamVjdENhcmQgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgY2FyZERhdGEsIHB1dEpTT04sIHJlbW92ZVByakRhdGEgfSBmcm9tICcuL3N0b3JhZ2UnO1xuaW1wb3J0IHsgY2hlY2tTdG9yYWdlIH0gZnJvbSBcIi4vcmVhZC1zdG9yYWdlXCI7XG5pbXBvcnQgeyBsb2FkSW5ib3ggfSBmcm9tIFwiLi9zaWRlLWxpc3RlbmVyc1wiO1xuXG5mdW5jdGlvbiBmaW5kRWxlbWVudCgpIHtcbiAgY29uc3QgZm9vdGVyQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3Rlci1hZGQnKTtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyLWNvbnRhaW5lciA+IGlucHV0Jyk7XG4gIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZS1wcm9qZWN0LWNvbnRhaW5lcicpO1xuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gIGNvbnN0IHdpcGVDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQgPiAqJyk7XG5cbiAgbGV0IGNvbnRlbnRUaXRsZTtcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveC10aXRsZScpID09IHVuZGVmaW5lZCkge1xuICAgIGNvbnRlbnRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRpdGxlJykudGV4dENvbnRlbnQ7XG4gIH0gZWxzZSB7XG4gICAgY29udGVudFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94LXRpdGxlJykudGV4dENvbnRlbnQ7XG4gIH1cblxuICByZXR1cm4geyBmb290ZXJBZGQsIHByb2plY3ROYW1lLCBwcm9qZWN0RGl2LCBtYWluQ29udGVudCwgXG4gICAgd2lwZUNvbnRlbnQsIGNvbnRlbnRUaXRsZSB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlckNsaWNrKCkge1xuICBjb25zdCBhZGQgPSBmaW5kRWxlbWVudCgpLmZvb3RlckFkZDtcblxuICBhZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBsZXQgcHJvamVjdE5hbWUgPSBmaW5kRWxlbWVudCgpLnByb2plY3ROYW1lO1xuICAgIGNyZWF0ZVNpZGVQcm9qZWN0KHByb2plY3ROYW1lLnZhbHVlKTtcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGNvbnN0IG91dHB1dCA9IGNhcmREYXRhKHByb2plY3ROYW1lLnZhbHVlKS5kYXRhO1xuICAgIHB1dEpTT04oJ3NpZGUnLCBwcm9qZWN0TmFtZS52YWx1ZSwgb3V0cHV0KTtcbiAgICBwdXRKU09OKHByb2plY3ROYW1lLnZhbHVlKTtcbiAgICBwcm9qZWN0TmFtZS52YWx1ZSA9ICcnO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2lkZVByb2plY3QocHJvamVjdCkge1xuICBjb25zdCBwcm9qZWN0Qm94ID0gZWxlbWVudEZhY3RvcnkoJ3NpZGUtcHJvamVjdC1ib3gnKS5lbGVtZW50O1xuICBjb25zdCBwcm9qZWN0SXRlbSA9IGVsZW1lbnRGYWN0b3J5KCdzaWRlLXByb2plY3QtdGl0bGUnKS5lbGVtZW50O1xuICBjb25zdCBwcm9qZWN0RGVsZXRlID0gYnV0dG9uRmFjdG9yeSgnYnV0dG9uJywgJ3NpZGUtZGVsLWJ1dHRvbicsICdYJykuZWxlbWVudDtcbiAgY29uc3QgcHJvamVjdERpdiA9IGZpbmRFbGVtZW50KCkucHJvamVjdERpdjtcblxuICBwcm9qZWN0SXRlbS50ZXh0Q29udGVudCA9IHByb2plY3Q7XG4gIHByb2plY3REZWxldGUudGV4dENvbnRlbnQgPSAnWCc7XG4gIHByb2plY3RCb3guYXBwZW5kKHByb2plY3RJdGVtLCBwcm9qZWN0RGVsZXRlKTtcbiAgXG4gIHByb2plY3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgbG9hZFByb2plY3QocHJvamVjdCwgcHJvamVjdEl0ZW0pO1xuICAgIGFkZFByb2plY3RDYXJkKCk7XG4gICAgYWRkVG9Qcm9qZWN0KHByb2plY3QpO1xuICB9KTtcbiAgXG4gIHByb2plY3REZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZGVsZXRlUHJvamVjdChwcm9qZWN0LCBlKTtcbiAgfSk7XG5cbiAgcHJvamVjdERpdi5hcHBlbmQocHJvamVjdEJveCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRQcm9qZWN0KHByb2plY3QpIHtcbiAgY29uc3QgbG9hZCA9IGZpbmRFbGVtZW50KCkubWFpbkNvbnRlbnQ7XG5cbiAgZmluZEVsZW1lbnQoKS53aXBlQ29udGVudC5yZW1vdmUoKTtcbiAgY29uc3QgcHJvamVjdENvbnRlbnQgPSBjcmVhdGVQcm9qZWN0Q29udGVudChwcm9qZWN0KVxuICBsb2FkLmFwcGVuZENoaWxkKHByb2plY3RDb250ZW50KTtcbiAgY2hlY2tTdG9yYWdlKHByb2plY3QpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3QsIGV2ZW50KSB7XG4gIGNvbnN0IHRpdGxlID0gZmluZEVsZW1lbnQoKS5jb250ZW50VGl0bGU7XG4gIGNvbnN0IHByak5hbWUgPSBwcmpOYW1lRmFjdG9yeShldmVudCkucmVzdWx0O1xuICBjb25zdCBjb250YWluZXIgPSBmaW5kRWxlbWVudCgpLnByb2plY3REaXY7XG4gIGNvbnN0IGxlbmd0aCA9IE9iamVjdC5rZXlzKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NpZGUnKSkpLmxlbmd0aDtcblxuICByZW1vdmVQcmpEYXRhKHByb2plY3QpO1xuICBjb250YWluZXIucmVwbGFjZUNoaWxkcmVuKCk7XG4gIGNoZWNrU3RvcmFnZSgnc2lkZScpO1xuXG4gIGlmICh0aXRsZSA9PSBwcmpOYW1lIHx8IGxlbmd0aCA9PSAwKSB7XG4gICAgbG9hZEluYm94KCk7XG4gIH1cblxufVxuZXhwb3J0IHsgY3JlYXRlRm9vdGVyQ2xpY2ssIGNyZWF0ZVNpZGVQcm9qZWN0IH07IiwiaW1wb3J0IHsgZWxlbWVudEZhY3RvcnksIGlucHV0RmFjdG9yeSwgYnV0dG9uRmFjdG9yeSB9IGZyb20gJy4vZmFjdG9yeSc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyRGl2ID0gZWxlbWVudEZhY3RvcnkoJ2Zvb3Rlci1jb250YWluZXInKS5lbGVtZW50O1xuICBjb25zdCBjb250ZW50ID0gY3JlYXRlRm9vdGVyQ29udGVudCgpO1xuXG4gIGZvb3RlckRpdi5hcHBlbmQoY29udGVudC5mb290ZXJBZGQsIGNvbnRlbnQuZm9vdGVyTmV3UHJqKTtcblxuICByZXR1cm4gZm9vdGVyRGl2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXJDb250ZW50KCkge1xuICBjb25zdCBmb290ZXJBZGQgPSBlbGVtZW50RmFjdG9yeSgnZm9vdGVyLWFkZCcpLmVsZW1lbnQ7XG4gIGNvbnN0IGZvb3Rlck5ld1ByaiA9IGlucHV0RmFjdG9yeSgndGV4dCcsICdOZXcgUHJvamVjdCcpLmVsZW1lbnQ7XG5cbiAgZm9vdGVyQWRkLnRleHRDb250ZW50ID0gJysnO1xuXG4gIHJldHVybiB7IGZvb3RlckFkZCwgZm9vdGVyTmV3UHJqIH07XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUZvb3RlciwgY3JlYXRlRm9vdGVyQ29udGVudCB9OyIsImltcG9ydCB7IGVsZW1lbnRGYWN0b3J5IH0gZnJvbSBcIi4vZmFjdG9yeVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlckRpdiA9IGVsZW1lbnRGYWN0b3J5KCdoZWFkZXItY29udGFpbmVyJykuZWxlbWVudDtcbiAgY29uc3QgY29udGVudCA9IGNyZWF0ZUhlYWRlckNvbnRlbnQoKTtcblxuICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgcmV0dXJuIGhlYWRlckRpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyQ29udGVudCgpIHtcbiAgY29uc3QgaGVhZGVyVGl0bGUgPSBlbGVtZW50RmFjdG9yeSgnaGVhZGVyLXRpdGxlJykuZWxlbWVudDtcblxuICBoZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9ICdUb2RvIExpc3QnO1xuXG4gIHJldHVybiBoZWFkZXJUaXRsZTtcblxufVxuXG5leHBvcnQgeyBjcmVhdGVIZWFkZXIgfTsiLCJpbXBvcnQgeyBlbGVtZW50RmFjdG9yeSB9IGZyb20gJy4vZmFjdG9yeSc7XG5pbXBvcnQgeyBwdXRKU09OIH0gZnJvbSAnLi9zdG9yYWdlJztcblxuZnVuY3Rpb24gY3JlYXRlSW5ib3hDb250ZW50KCkge1xuICBjb25zdCBpbmJveENvbnRlbnQgPSBlbGVtZW50RmFjdG9yeSgnaW5ib3gtY29udGVudCcpLmVsZW1lbnQ7XG4gIGNvbnN0IGhlYWRlckNvbnRlbnQgPSBjcmVhdGVJbmJveEhlYWRlcigpO1xuICBjb25zdCBjYXJkQ29udGFpbmVyID0gZWxlbWVudEZhY3RvcnkoJ2NhcmQtY29udGFpbmVyJykuZWxlbWVudDtcblxuICBpbmJveENvbnRlbnQuYXBwZW5kKGhlYWRlckNvbnRlbnQsIGNhcmRDb250YWluZXIpO1xuICBcbiAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5ib3gnKSkge1xuICAgIHB1dEpTT04oJ2luYm94Jyk7XG4gIH1cblxuICByZXR1cm4gaW5ib3hDb250ZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbmJveEhlYWRlcigpIHtcbiAgY29uc3QgaW5ib3hIZWFkZXJEaXYgPSBlbGVtZW50RmFjdG9yeSgnaW5ib3gtaGVhZGVyLWNvbnRhaW5lcicpLmVsZW1lbnQ7XG4gIGNvbnN0IGluYm94VGl0bGUgPSBlbGVtZW50RmFjdG9yeSgnaW5ib3gtdGl0bGUnKS5lbGVtZW50O1xuICBjb25zdCBuZXdUb2RvRGl2ID0gZWxlbWVudEZhY3RvcnkoJ25ldy10b2RvLWRpdicpLmVsZW1lbnQ7XG4gIGNvbnN0IGluYm94QWRkID0gZWxlbWVudEZhY3RvcnkoJ2luYm94LWFkZCcpLmVsZW1lbnQ7XG4gIGNvbnN0IG5ld1RvZG8gPSBlbGVtZW50RmFjdG9yeSgnbmV3LXRvZG8nKS5lbGVtZW50O1xuXG4gIGluYm94VGl0bGUudGV4dENvbnRlbnQgPSAnSW5ib3gnO1xuICBpbmJveEFkZC50ZXh0Q29udGVudCA9ICcrJztcbiAgbmV3VG9kby50ZXh0Q29udGVudCA9ICdOZXcgVG9kbyc7XG5cbiAgbmV3VG9kb0Rpdi5hcHBlbmQoaW5ib3hBZGQsIG5ld1RvZG8pO1xuICBpbmJveEhlYWRlckRpdi5hcHBlbmQoaW5ib3hUaXRsZSwgbmV3VG9kb0Rpdik7XG5cbiAgcmV0dXJuIGluYm94SGVhZGVyRGl2O1xufVxuXG5leHBvcnQgeyBjcmVhdGVJbmJveENvbnRlbnQgfTsiLCJpbXBvcnQgeyBlbGVtZW50RmFjdG9yeSB9IGZyb20gJy4vZmFjdG9yeSc7XG5pbXBvcnQgeyBjcmVhdGVIZWFkZXIgfSBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgeyBjcmVhdGVGb290ZXIgfSBmcm9tICcuL2Zvb3Rlcic7XG5pbXBvcnQgeyBjcmVhdGVTaWRlIH0gZnJvbSAnLi9zaWRlJztcbmltcG9ydCB7IGNyZWF0ZUluYm94Q29udGVudCB9IGZyb20gJy4vaW5ib3gnO1xuXG5mdW5jdGlvbiBjcmVhdGVEaXYoKSB7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBlbGVtZW50RmFjdG9yeSgnY29udGVudCcpLmVsZW1lbnQ7XG5cbiAgcmV0dXJuIGNvbnRlbnREaXY7XG59XG5cbmZ1bmN0aW9uIHBsYWNlVG9Db250YWluZXIoKSB7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBwbGFjZVRvUGFyZW50KCkuY29udGVudERpdjtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVNpZGUoKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50RGl2KTtcbn1cblxuZnVuY3Rpb24gcGxhY2VUb1BhcmVudCgpIHtcbiAgY29uc3QgY29udGVudERpdiA9IGNyZWF0ZURpdigpO1xuICBcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChjcmVhdGVJbmJveENvbnRlbnQoKSk7XG5cbiAgcmV0dXJuIHsgY29udGVudERpdiB9O1xufVxuXG5leHBvcnQgeyBwbGFjZVRvQ29udGFpbmVyIH07IiwiaW1wb3J0IHsgZWxlbWVudEZhY3RvcnksIGFkZFByakZhY3RvcnksIHBhcmVudEZhY3RvcnkgfSBmcm9tIFwiLi9mYWN0b3J5XCI7XG5pbXBvcnQgeyBwdXRKU09OLCBzaG93S2V5cywgc2hvd1N0b3JhZ2UgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQgeyBmaW5kS2V5cywgZmluZFNlbGVjdCwgbG9hZFN0b3JhZ2UsIGZpbmRFeGlzdEtleSB9IGZyb20gXCIuL3JlYWQtc3RvcmFnZVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0Q29udGVudChwcm9qZWN0KSB7XG4gIGNvbnN0IHByb2plY3RDb250ZW50ID0gZWxlbWVudEZhY3RvcnkoJ3Byb2plY3QtY29udGVudCcpLmVsZW1lbnQ7XG4gIGNvbnN0IGhlYWRlckNvbnRlbnQgPSBjcmVhdGVQcm9qZWN0SGVhZGVyKHByb2plY3QpO1xuICBjb25zdCBjYXJkQ29udGFpbmVyID0gZWxlbWVudEZhY3RvcnkoJ2NhcmQtY29udGFpbmVyJykuZWxlbWVudDtcblxuICBwcm9qZWN0Q29udGVudC5hcHBlbmQoaGVhZGVyQ29udGVudCwgY2FyZENvbnRhaW5lcik7XG5cbiAgcmV0dXJuIHByb2plY3RDb250ZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0SGVhZGVyKHByb2plY3QpIHtcbiAgY29uc3QgcHJvamVjdEhlYWRlckRpdiA9IGVsZW1lbnRGYWN0b3J5KCdwcm9qZWN0LWhlYWRlci1jb250YWluZXInKS5lbGVtZW50O1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBlbGVtZW50RmFjdG9yeSgncHJvamVjdC10aXRsZScpLmVsZW1lbnQ7XG4gIGNvbnN0IG5ld1Byb2plY3REaXYgPSBlbGVtZW50RmFjdG9yeSgnbmV3LXByb2plY3QtZGl2JykuZWxlbWVudDtcbiAgY29uc3QgcHJvamVjdEFkZCA9IGVsZW1lbnRGYWN0b3J5KCdwcm9qZWN0LWFkZCcpLmVsZW1lbnQ7XG5cbiAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdDtcbiAgcHJvamVjdEFkZC50ZXh0Q29udGVudCA9ICcrJztcblxuICBuZXdQcm9qZWN0RGl2LmFwcGVuZChwcm9qZWN0QWRkKTtcblxuICBwcm9qZWN0SGVhZGVyRGl2LmFwcGVuZChwcm9qZWN0VGl0bGUsIG5ld1Byb2plY3REaXYpO1xuXG4gIHJldHVybiBwcm9qZWN0SGVhZGVyRGl2O1xufVxuXG5mdW5jdGlvbiBhZGRUb1Byb2plY3QocHJvamVjdCkge1xuICBsZXQgYWRkTGlzdCA9IGZpbmRLZXlzKCdpbmJveCcpO1xuICBsZXQgcmVtb3ZlTGlzdCA9IGZpbmRLZXlzKHByb2plY3QpO1xuICBsZXQgbmV3TGlzdCA9IFtdO1xuXG4gIGFkZExpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpZiAoIXJlbW92ZUxpc3QuaW5jbHVkZXMoaXRlbSkpIHtcbiAgICAgIG5ld0xpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH0pOyBcbiAgXG4gIGNvbnN0IGxpc3QgPSBhZGRQcmpGYWN0b3J5KCdBZGQgdG8gcHJvamVjdCcsIG5ld0xpc3QpLmVsZW1lbnQ7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdC1kaXYnKTtcbiAgZGl2LmFwcGVuZChsaXN0KTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdENhcmQoKSB7XG4gIGNvbnN0IGFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWFkZCcpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRpdGxlJykudGV4dENvbnRlbnQ7XG4gIFxuICBhZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBzZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdC1kaXYgc2VsZWN0Jyk7XG4gICAgY29uc3QgdmFsdWUgPSBzZWxlY3RlZC52YWx1ZTtcbiAgICBjb25zdCBpbmRleCA9IHNlbGVjdGVkLnNlbGVjdGVkSW5kZXg7XG4gICAgY29uc3QgZGF0YSA9IGZpbmRTZWxlY3QodmFsdWUpO1xuXG4gICAgY2hlY2s6XG4gICAgaWYgKHNlbGVjdGVkLmxlbmd0aCAhPT0gMCkge1xuICAgICAgbG9hZFN0b3JhZ2UodmFsdWUsICdpbmJveCcpO1xuICAgICAgcHV0SlNPTih0aXRsZSwgdmFsdWUsIGRhdGEpO1xuICAgICAgc2VsZWN0ZWRbaW5kZXhdLnJlbW92ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBicmVhayBjaGVjaztcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0Q29udGVudCwgYWRkVG9Qcm9qZWN0LCBhZGRQcm9qZWN0Q2FyZCB9OyIsImltcG9ydCB7IHBsYWNlVG9Db250YWluZXIgfSBmcm9tIFwiLi9sYXlvdXRcIjtcbmltcG9ydCB7IGNhcmRTaHJpbmsgfSBmcm9tIFwiLi9hZGQtY2FyZFwiO1xuaW1wb3J0IHsgY3JlYXRlU2lkZVByb2plY3QgfSBmcm9tIFwiLi9mb290ZXItbGlzdGVuZXJzXCI7XG5pbXBvcnQgeyBhZGRUb1Byb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuXG4vL0NoZWNrIGlmIHN0cm9hZ2UgZXhzaXN0c1xuLy9JZiBub3QsIGp1c3QgZG8gbm9ybWFsIGxheW91dFxuLy9JZiB5ZXMsIGRvIG5vcm1hbCBhbmQgY2FsbCBhZGQtY2FyZHMvZm9vdGVyLWxpc3RlbmVyc1xuXG5mdW5jdGlvbiBjaGVja1N0b3JhZ2UodHlwZSkge1xuICBpZighbG9jYWxTdG9yYWdlLmdldEl0ZW0odHlwZSkpIHtcbiAgICByZXR1cm47XG4gIH0gZWxzZSB7XG4gICAgZmluZFN0b3JhZ2UodHlwZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZFN0b3JhZ2Uoa2V5LCB0eXBlKSB7XG4gIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHR5cGUpKTtcbiAgY29uc3QgdGl0bGUgPSBkYXRhW2tleV1bJ3RpdGxlJ107XG4gIGNvbnN0IGRpc2NyaXB0ID0gZGF0YVtrZXldWydkaXNjcmlwdCddO1xuICBjb25zdCBkYXRlID0gZGF0YVtrZXldWydkYXRlJ107XG4gIGNvbnN0IHByaW9yaXR5ID0gZGF0YVtrZXldWydwcmlvcml0eSddO1xuXG4gIGlmICh0eXBlID09ICdpbmJveCcpIHtcbiAgICBjYXJkU2hyaW5rKCcnLCB0aXRsZSwgZGlzY3JpcHQsIGRhdGUsIHByaW9yaXR5KTtcbiAgfSBlbHNlIGlmICh0eXBlID09ICdzaWRlJykge1xuICAgIGNyZWF0ZVNpZGVQcm9qZWN0KHRpdGxlKTtcbiAgfSBlbHNlIHtcbiAgICBjYXJkU2hyaW5rKCcnLCB0aXRsZSwgZGlzY3JpcHQsIGRhdGUsIHByaW9yaXR5KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kU3RvcmFnZSh0eXBlKSB7XG4gIGNvbnN0IGtleUxpc3QgPSBPYmplY3Qua2V5cyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVt0eXBlXSkpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBsb2FkU3RvcmFnZShrZXlMaXN0W2ldLCB0eXBlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kS2V5cyh0eXBlKSB7XG4gIGNvbnN0IGtleUxpc3QgPSBPYmplY3Qua2V5cyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVt0eXBlXSkpO1xuICByZXR1cm4ga2V5TGlzdDtcbn1cblxuZnVuY3Rpb24gZmluZEV4aXN0S2V5KHR5cGUsIGV4aXN0KSB7XG4gIGlmIChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVt0eXBlXSkgPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGtleXNMaXN0ID0gZmluZEtleXModHlwZSk7XG4gIGxldCB2YWx1ZTtcbiAgaWYgKGtleXNMaXN0LmluY2x1ZGVzKGV4aXN0KSkge1xuICAgIGNvbnNvbGUubG9nKCdleGlzdCcpO1xuICAgIGNvbnNvbGUubG9nKGtleXNMaXN0KTtcbiAgICB2YWx1ZSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgdmFsdWUgPSBmYWxzZTtcbiAgICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZmluZFNlbGVjdChrZXkpIHtcbiAgY29uc3Qga2V5TGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlWydpbmJveCddKTtcbiAgcmV0dXJuIGtleUxpc3Rba2V5XTtcbn1cblxuZXhwb3J0IHsgY2hlY2tTdG9yYWdlLCBmaW5kU3RvcmFnZSwgZmluZEtleXMsIGZpbmRTZWxlY3QsIGxvYWRTdG9yYWdlLCBmaW5kRXhpc3RLZXkgfTtcbiIsImltcG9ydCB7IGNyZWF0ZVRvZG9DbGljayB9IGZyb20gJy4vYWRkLWNhcmQnO1xuaW1wb3J0IHsgY2hlY2tTdG9yYWdlIH0gZnJvbSAnLi9yZWFkLXN0b3JhZ2UnO1xuaW1wb3J0IHsgY3JlYXRlSW5ib3hDb250ZW50IH0gZnJvbSAnLi9pbmJveCc7XG5cblxuZnVuY3Rpb24gZmluZEVsZW1lbnQoKSB7XG4gIGNvbnN0IG1lbnVJbmJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlLWJ1dHRvbjpudGgtY2hpbGQoMSknKTtcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICBjb25zdCBpbmJveENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gtY29udGVudCcpO1xuICBjb25zdCB3aXBlQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50ID4gKicpO1xuXG4gIHJldHVybiB7IG1lbnVJbmJveCwgbWFpbkNvbnRlbnQsIGluYm94Q29udGVudCwgd2lwZUNvbnRlbnQgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2lkZUNsaWNrKCkge1xuICBjb25zdCBpbmJveCA9IGZpbmRFbGVtZW50KCkubWVudUluYm94O1xuICBpbmJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRJbmJveCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRJbmJveCgpIHtcbiAgY29uc3QgbG9hZCA9IGZpbmRFbGVtZW50KCkubWFpbkNvbnRlbnQ7XG5cbiAgY29uc3QgcDEgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIHJlc29sdmUoZmluZEVsZW1lbnQoKS53aXBlQ29udGVudC5yZW1vdmUoKSlcbiAgfSk7XG5cbiAgY29uc3QgcDIgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnN0IGNsZWFuID0gY3JlYXRlSW5ib3hDb250ZW50KCk7XG4gICAgcmVzb2x2ZShsb2FkLmFwcGVuZChjbGVhbikpO1xuICB9KTtcbiAgXG4gIHAxLnRoZW4oKCkgPT4ge1xuICAgIHAyLnRoZW4gKCgpID0+IHtcbiAgICAgIGNoZWNrU3RvcmFnZSgnaW5ib3gnKTtcbiAgICB9KTtcbiAgfSk7XG4gICAgXG4gIGNyZWF0ZVRvZG9DbGljaygpO1xufVxuXG5cbmV4cG9ydCB7IGNyZWF0ZVNpZGVDbGljaywgbG9hZEluYm94IH0iLCJpbXBvcnQgeyBlbGVtZW50RmFjdG9yeSB9IGZyb20gJy4vZmFjdG9yeSc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGUoKSB7XG4gIGNvbnN0IHNpZGVEaXYgPSBlbGVtZW50RmFjdG9yeSgnc2lkZS1jb250YWluZXInKS5lbGVtZW50O1xuICBjb25zdCBjb250ZW50ID0gY3JlYXRlU2lkZUNvbnRlbnQoKS5zaWRlTWVudTtcbiAgXG4gIHNpZGVEaXYuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gIFxuICByZXR1cm4gc2lkZURpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2lkZUNvbnRlbnQoKSB7XG4gIGNvbnN0IHNpZGVNZW51ID0gZWxlbWVudEZhY3RvcnkoJ3NpZGUtbWVudScpLmVsZW1lbnQ7XG4gIGNvbnN0IHNpZGVJbmJveCA9IGVsZW1lbnRGYWN0b3J5KCdzaWRlLWJ1dHRvbicpLmVsZW1lbnQ7XG4gIGNvbnN0IHNpZGVQcm9qZWN0ID0gZWxlbWVudEZhY3RvcnkoJ3NpZGUtYnV0dG9uJykuZWxlbWVudDtcbiAgY29uc3QgcHJvamVjdERpdiA9IGVsZW1lbnRGYWN0b3J5KCdzaWRlLXByb2plY3QtY29udGFpbmVyJykuZWxlbWVudDtcbiAgc2lkZUluYm94LnRleHRDb250ZW50ID0gJ0luYm94JztcblxuICBzaWRlUHJvamVjdC50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG5cbiAgc2lkZU1lbnUuYXBwZW5kKHNpZGVJbmJveCwgc2lkZVByb2plY3QsIHByb2plY3REaXYpO1xuICBcbiAgcmV0dXJuIHsgc2lkZU1lbnUsIHNpZGVJbmJveCwgc2lkZVByb2plY3QgfTtcbn1cblxuXG5leHBvcnQgeyBjcmVhdGVTaWRlLCBjcmVhdGVTaWRlQ29udGVudCB9O1xuIiwiY29uc3QgY2FyZERhdGEgPSAodGl0bGUsIGRpc2NyaXB0LCBkYXRlLCBwcmlvcml0eSkgPT4ge1xuICBjb25zdCBkYXRhID0ge1xuICAgIHRpdGxlLFxuICAgIGRpc2NyaXB0LFxuICAgIGRhdGUsXG4gICAgcHJpb3JpdHksXG4gIH07XG4gIHJldHVybiB7IGRhdGEgfTtcbn07XG5cbmZ1bmN0aW9uIHB1dEpTT04odHlwZSwga2V5LCB2YWx1ZSkge1xuICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKHR5cGUpKSB7XG4gICAgbGV0IGNyZWF0ZSA9IHt9O1xuICAgIGNyZWF0ZVtrZXldID0gdmFsdWU7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odHlwZSwgSlNPTi5zdHJpbmdpZnkoY3JlYXRlKSk7XG4gIH0gZWxzZSB7XG4gICAgbGV0IHRleHQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHR5cGUpKTtcbiAgICB0ZXh0W2tleV0gPSB2YWx1ZVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHR5cGUsIEpTT04uc3RyaW5naWZ5KHRleHQpKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0ZXh0KTtcbiAgfVxuICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UpO1xufVxuXG5mdW5jdGlvbiBwdXRLZXkodHlwZSwgb2xkS2V5LCBtb2RLZXkpIHtcbiAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odHlwZSkpO1xuICBjb25zdCByZXBsYWNlbWVudHMgPSB7fTtcbiAgcmVwbGFjZW1lbnRzW29sZEtleV0gPSBtb2RLZXk7XG5cbiAgbGV0IHJlcGxhY2VkSXRlbXMgPSBPYmplY3Qua2V5cyhkYXRhKS5tYXAoKGtleSkgPT4ge1xuICBjb25zdCBuZXdLZXkgPSByZXBsYWNlbWVudHNba2V5XSB8fCBrZXk7XG4gIHJldHVybiB7IFtuZXdLZXldIDogZGF0YVtrZXldIH07XG4gIH0pO1xuXG4gIGNvbnN0IG5ld0RhdGEgPSByZXBsYWNlZEl0ZW1zLnJlZHVjZSgoYSwgYikgPT4gT2JqZWN0LmFzc2lnbih7fSwgYSwgYikpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0eXBlLCBKU09OLnN0cmluZ2lmeShuZXdEYXRhKSk7XG59XG5cblxuZnVuY3Rpb24gcmVtb3ZlQ2FyZERhdGEodHlwZSwga2V5KSB7XG4gIGxldCB0ZXh0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0eXBlKSk7XG4gIGRlbGV0ZSB0ZXh0W2tleV07XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHR5cGUsIEpTT04uc3RyaW5naWZ5KHRleHQpKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJqRGF0YSh0eXBlKSB7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHR5cGUpO1xuICByZW1vdmVDYXJkRGF0YSgnc2lkZScsIHR5cGUpO1xufVxuXG5leHBvcnQgeyBjYXJkRGF0YSwgcHV0SlNPTiwgcHV0S2V5LCByZW1vdmVDYXJkRGF0YSwgcmVtb3ZlUHJqRGF0YSB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgcGxhY2VUb0NvbnRhaW5lciB9IGZyb20gJy4vbGF5b3V0JztcbmltcG9ydCB7IGNyZWF0ZVNpZGVDbGljayB9IGZyb20gJy4vc2lkZS1saXN0ZW5lcnMnO1xuaW1wb3J0IHsgY3JlYXRlVG9kb0NsaWNrIH0gZnJvbSAnLi9hZGQtY2FyZCc7XG5pbXBvcnQgeyBjcmVhdGVGb290ZXJDbGljayB9IGZyb20gJy4vZm9vdGVyLWxpc3RlbmVycyc7XG5pbXBvcnQgeyBjaGVja1N0b3JhZ2UgfSBmcm9tICcuL3JlYWQtc3RvcmFnZSc7XG5cbihmdW5jdGlvbigpIHtcbiAgcGxhY2VUb0NvbnRhaW5lcigpO1xufSkoKTtcblxuKGZ1bmN0aW9uKCkge1xuICBjcmVhdGVTaWRlQ2xpY2soKTtcbn0pKCk7XG5cbihmdW5jdGlvbigpIHtcbiAgY3JlYXRlVG9kb0NsaWNrKCk7XG59KSgpO1xuXG4oZnVuY3Rpb24oKSB7XG4gIGNyZWF0ZUZvb3RlckNsaWNrKCk7XG59KSgpO1xuXG4oZnVuY3Rpb24oKSB7XG4gIGNoZWNrU3RvcmFnZSgnaW5ib3gnKTtcbiAgY2hlY2tTdG9yYWdlKCdzaWRlJyk7XG59KSgpO1xuXG4vLyBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcblxuICAgIC8vIFByZXZlbnQgbmV3IHRvZG8gdXNpbmcgZHVwbGljYXRlZCBuYW1lc1xuICAgIC8vIFByZXZlbnQgZWRpdCB0b2RvIHVzaW5nIGR1cGxpY2F0ZWQgbmFtZXNcbiAgICAvLyBQcmV2ZW50IGFkZCB0byBwcm9qZWN0IHRvIGFkZCBkdXBsaWNhdGVkIG5hbWVzIHRvZG9cbiAgICAvLyBEZWxldGUgcHJvamVjdCBidXR0b25zXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=