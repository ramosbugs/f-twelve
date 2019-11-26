/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/css/f-twelve.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/css/f-twelve.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".f-twelve_fTwelve {\n    color: #333;\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    font-family: verdana, sans-serif;\n    font-size: 12px;\n    z-index: 2147483647;\n}\n\n.f-twelve_tab {\n    cursor: pointer;\n    background-color: #ffffff;\n    border: 1px solid #bbb;\n    border-radius: 3px 3px 0 0;\n    display: inline-block;\n    margin-bottom: -1px;\n    margin-left: 1px;\n    padding: 3px 5px;\n    pointer-events: all;\n}\n\n.f-twelve_content {\n    height: 320px;\n    position: relative;\n    background-color: #fff;\n    border: 1px solid #bbb;\n    top: 0;\n}\n", ""]);

// Exports
exports.locals = {
	"fTwelve": "f-twelve_fTwelve",
	"tab": "f-twelve_tab",
	"content": "f-twelve_content"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/css/views/console.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/css/views/console.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".views-console_row {\n    display: block;\n    border-color: #f0f0f0;\n    border-bottom: 1px solid;\n    font-family: monospace;\n    overflow-x: hidden;\n    text-overflow: ellipsis;\n    padding: 3px 3px 3px 95px;\n    white-space: nowrap;\n}\n\n.views-console_row.views-console_error {\n    background-color: #fff0f0;\n    color: #ff0000;\n    border-color: #ffd6d6;\n}\n\n.views-console_row.views-console_log {\n    border-color: #f0f0f0;\n}\n\n.views-console_row.views-console_info {\n    border-color: #e2f3ff;\n    background-color: #f7fcff;\n}\n\n.views-console_row.views-console_warn {\n    background-color: #fffbe5;\n    color: #5c3c00;\n    border-color: #fff5c2;\n}\n\n.views-console_output {\n    position: absolute;\n    top: 0;\n    bottom: 20px;\n    overflow-y: auto;\n    width: 100%;\n}\n\n.views-console_timestamp {\n    padding-right: 5px;\n    margin-left: -90px;\n    color: #808080;\n}\n\n.views-console_outputText {\n    white-space: nowrap;\n    padding-right: 5px;\n}\n\n.views-console_outputText.views-console_block {\n    padding-left: 10px;\n    background: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCc+PHBvbHlnb24gcG9pbnRzPSczLDIgOCw1IDMsOScgc3R5bGU9J2ZpbGw6IzcyNzI3MicgLz48L3N2Zz4=\") no-repeat;\n    background-position-y: 2px;\n}\n\n.views-console_outputText.views-console_block.views-console_open {\n    white-space: pre;\n    background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCc+PHBvbHlnb24gcG9pbnRzPScyLDMgOCwzIDUsOScgc3R5bGU9J2ZpbGw6IzcyNzI3MicgLz48L3N2Zz4=\");\n}\n\n.views-console_outputText.views-console_block:hover {\n    background-color: #f1ffff88;\n}\n\n.views-console_prompt {\n    display: block;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    position: absolute;\n}\n\n.views-console_promptChar {\n    font-family: monospace;\n    font-size: 1.5em;\n    font-weight: bold;\n    line-height: 1;\n    padding-left: 5px;\n    position: absolute;\n}\n\n.views-console_promptInput {\n    font-family: monospace;\n    padding-left: 20px;\n    width: 100%;\n}", ""]);

// Exports
exports.locals = {
	"row": "views-console_row",
	"error": "views-console_error",
	"log": "views-console_log",
	"info": "views-console_info",
	"warn": "views-console_warn",
	"output": "views-console_output",
	"timestamp": "views-console_timestamp",
	"outputText": "views-console_outputText",
	"block": "views-console_block",
	"open": "views-console_open",
	"prompt": "views-console_prompt",
	"promptChar": "views-console_promptChar",
	"promptInput": "views-console_promptInput"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/json-prune/JSON.prune.js":
/*!***********************************************!*\
  !*** ./node_modules/json-prune/JSON.prune.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// JSON.prune : a function to stringify any object without overflow
// two additional optional parameters :
//   - the maximal depth (default : 6)
//   - the maximal length of arrays (default : 50)
// You can also pass an "options" object.
// examples :
//   var json = JSON.prune(window)
//   var arr = Array.apply(0,Array(1000)); var json = JSON.prune(arr, 4, 20)
//   var json = JSON.prune(window.location, {inheritedProperties:true})
// Web site : http://dystroy.org/JSON.prune/
// JSON.prune on github : https://github.com/Canop/JSON.prune
// This was discussed here : http://stackoverflow.com/q/13861254/263525
// The code is based on Douglas Crockford's code : https://github.com/douglascrockford/JSON-js/blob/master/json2.js
// No effort was done to support old browsers. JSON.prune will fail on IE8.
(function () {
	'use strict';

	var DEFAULT_MAX_DEPTH = 6;
	var DEFAULT_ARRAY_MAX_LENGTH = 50;
	var DEFAULT_PRUNED_VALUE = '"-pruned-"';
	var seen; // Same variable used for all stringifications
	var iterator; // either forEachEnumerableOwnProperty, forEachEnumerableProperty or forEachProperty
	
	// iterates on enumerable own properties (default behavior)
	var forEachEnumerableOwnProperty = function(obj, callback) {
		for (var k in obj) {
			if (Object.prototype.hasOwnProperty.call(obj, k)) callback(k);
		}
	};
	// iterates on enumerable properties
	var forEachEnumerableProperty = function(obj, callback) {
		for (var k in obj) callback(k);
	};
	// iterates on properties, even non enumerable and inherited ones
	// This is dangerous
	var forEachProperty = function(obj, callback, excluded) {
		if (obj==null) return;
		excluded = excluded || {};
		Object.getOwnPropertyNames(obj).forEach(function(k){
			if (!excluded[k]) {
				callback(k);
				excluded[k] = true;
			}
		});
		forEachProperty(Object.getPrototypeOf(obj), callback, excluded);
	};

	Object.defineProperty(Date.prototype, "toPrunedJSON", {value:Date.prototype.toJSON});

	var	cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
		escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
		meta = {	// table of character substitutions
			'\b': '\\b',
			'\t': '\\t',
			'\n': '\\n',
			'\f': '\\f',
			'\r': '\\r',
			'"' : '\\"',
			'\\': '\\\\'
		};

	function quote(string) {
		escapable.lastIndex = 0;
		return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
			var c = meta[a];
			return typeof c === 'string'
				? c
				: '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
		}) + '"' : '"' + string + '"';
	}


	var prune = function (value, depthDecr, arrayMaxLength) {
		var prunedString = DEFAULT_PRUNED_VALUE;
		var replacer;
		if (typeof depthDecr == "object") {
			var options = depthDecr;
			depthDecr = options.depthDecr;
			arrayMaxLength = options.arrayMaxLength;
			iterator = options.iterator || forEachEnumerableOwnProperty;
			if (options.allProperties) iterator = forEachProperty;
			else if (options.inheritedProperties) iterator = forEachEnumerableProperty
			if ("prunedString" in options) {
				prunedString = options.prunedString;
			}
			if (options.replacer) {
				replacer = options.replacer;
			}
		} else {
			iterator = forEachEnumerableOwnProperty;
		}
		seen = [];
		depthDecr = depthDecr || DEFAULT_MAX_DEPTH;
		arrayMaxLength = arrayMaxLength || DEFAULT_ARRAY_MAX_LENGTH;
		function str(key, holder, depthDecr) {
			var i, k, v, length, partial, value = holder[key];

			if (value && typeof value === 'object' && typeof value.toPrunedJSON === 'function') {
				value = value.toPrunedJSON(key);
			}
			if (value && typeof value.toJSON === 'function') {
				value = value.toJSON(); 
			}

			switch (typeof value) {
			case 'string':
				return quote(value);
			case 'number':
				return isFinite(value) ? String(value) : 'null';
			case 'boolean':
			case 'null':
				return String(value);
			case 'object':
				if (!value) {
					return 'null';
				}
				if (depthDecr<=0 || seen.indexOf(value)!==-1) {
					if (replacer) {
						var replacement = replacer(value, prunedString, true);
						return replacement===undefined ? undefined : ''+replacement;
					}
					return prunedString;
				}
				seen.push(value);
				partial = [];
				if (Object.prototype.toString.apply(value) === '[object Array]') {
					length = Math.min(value.length, arrayMaxLength);
					for (i = 0; i < length; i += 1) {
						partial[i] = str(i, value, depthDecr-1) || 'null';
					}
					v = '[' + partial.join(',') + ']';
					if (replacer && value.length>arrayMaxLength) return replacer(value, v, false);
					return v;
				}
				iterator(value, function(k) {
					try {
						v = str(k, value, depthDecr-1);
						if (v) partial.push(quote(k) + ':' + v);
					} catch (e) { 
						// this try/catch due to forbidden accessors on some objects
					}				
				});
				return '{' + partial.join(',') + '}';
			case 'function':
			case 'undefined':
				return replacer ? replacer(value, undefined, false) : undefined;
			}
		}
		return str('', {'': value}, depthDecr);
	};
	
	prune.log = function() {
		console.log.apply(console, Array.prototype.map.call(arguments, function(v) {
			return JSON.parse(JSON.prune(v));
		}));
	};
	prune.forEachProperty = forEachProperty; // you might want to also assign it to Object.forEachProperty

	if (true) module.exports = prune;
	else {}
}());


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/css/f-twelve.css":
/*!******************************!*\
  !*** ./src/css/f-twelve.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!./f-twelve.css */ "./node_modules/css-loader/dist/cjs.js?!./src/css/f-twelve.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/css/views/console.css":
/*!***********************************!*\
  !*** ./src/css/views/console.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./console.css */ "./node_modules/css-loader/dist/cjs.js?!./src/css/views/console.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_f_twelve__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/f-twelve */ "./src/js/views/f-twelve.js");

/**
 * Instantiate singleton and return public API
 */

var fTwelve = new _views_f_twelve__WEBPACK_IMPORTED_MODULE_0__["default"]();
window.FTwelve = Object.freeze({
  enable: function enable() {
    var show = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    return fTwelve.enable(show);
  },
  disable: function disable() {
    return fTwelve.disable();
  },
  hide: function hide() {
    return fTwelve.detach(fTwelve);
  },
  show: function show() {
    return fTwelve.attach(fTwelve);
  },
  onHide: function onHide(callback) {
    return fTwelve.onDetach = callback;
  },
  onShow: function onShow(callback) {
    return fTwelve.onAttach = callback;
  }
});

/***/ }),

/***/ "./src/js/views/content/console/console.js":
/*!*************************************************!*\
  !*** ./src/js/views/content/console/console.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_f_twelve_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../css/f-twelve.css */ "./src/css/f-twelve.css");
/* harmony import */ var _css_f_twelve_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_f_twelve_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _output__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./output */ "./src/js/views/content/console/output.js");
/* harmony import */ var _prompt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prompt */ "./src/js/views/content/console/prompt.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable no-console */



var historyKey = 'fTwelve.history';
/**
 * The content of the Console tab
 */

var Console =
/*#__PURE__*/
function () {
  function Console() {
    _classCallCheck(this, Console);

    this.el = document.createElement('div');
    this.execHistory = this.getHistory();
    this.output = new _output__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.prompt = new _prompt__WEBPACK_IMPORTED_MODULE_2__["default"]({
      console: this
    });
    this.overrideWindowConsole();
    this.overrideWindowOnError();
  }

  _createClass(Console, [{
    key: "render",
    value: function render() {
      this.el.className = _css_f_twelve_css__WEBPACK_IMPORTED_MODULE_0___default.a.content;
      this.el.appendChild(this.output.render());
      this.el.appendChild(this.prompt.render());
      return this.el;
    }
  }, {
    key: "getHistory",
    value: function getHistory() {
      return window.localStorage ? JSON.parse(window.localStorage.getItem(historyKey)) || [] : this.execHistory || [];
    }
  }, {
    key: "setHistory",
    value: function setHistory(command) {
      this.execHistory.unshift(command);
      this.execHistory = this.execHistory.slice(0, 50);

      if (window.localStorage) {
        window.localStorage.setItem(historyKey, JSON.stringify(this.execHistory));
      }
    }
  }, {
    key: "overrideWindowConsole",
    value: function overrideWindowConsole() {
      var _this = this;

      var verbs = ['log', 'warn', 'error', 'info'];
      verbs.forEach(function (verb) {
        var oldVerb = window.console[verb];

        window.console[verb] = function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this.output.append({
            verb: verb,
            args: args
          });

          return oldVerb.apply(window.console, args);
        };
      });
    }
  }, {
    key: "overrideWindowOnError",
    value: function overrideWindowOnError() {
      var _this2 = this;

      var oldOnError = window.onerror;

      window.onerror = function (message, source, lineNo, colNo, error) {
        if (oldOnError && typeof oldOnError === 'function') {
          oldOnError.call(_this2, message, source, lineNo, colNo, error);
        }

        console.error(error);
        return true;
      };
    }
  }, {
    key: "exec",
    value: function exec(command) {
      this.setHistory(command);
      console.log(command);

      try {
        console.log(eval(command));
      } catch (e) {
        console.error(e);
      }
    }
  }, {
    key: "evaluateObjectReference",
    value: function evaluateObjectReference(referenceString) {
      return referenceString.replace(/(?=\[)/g, '.').split('.').reduce(function (object, memberString) {
        var bracketMatch = memberString.match(/^\[([^\]]*)]$/);
        var memberName = bracketMatch ? bracketMatch[1].replace(/^["']|["']$/g, '') : memberString;
        return (object || {})[memberName];
      }, window);
    }
  }]);

  return Console;
}();

/* harmony default export */ __webpack_exports__["default"] = (Console);

/***/ }),

/***/ "./src/js/views/content/console/output.js":
/*!************************************************!*\
  !*** ./src/js/views/content/console/output.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_views_console_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../css/views/console.css */ "./src/css/views/console.css");
/* harmony import */ var _css_views_console_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_views_console_css__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var prune = __webpack_require__(/*! json-prune */ "./node_modules/json-prune/JSON.prune.js");
/**
 * Console tab output
 */


var Output =
/*#__PURE__*/
function () {
  function Output() {
    _classCallCheck(this, Output);

    this.el = document.createElement('div');
  }

  _createClass(Output, [{
    key: "render",
    value: function render() {
      this.el.className = _css_views_console_css__WEBPACK_IMPORTED_MODULE_0___default.a.output;
      return this.el;
    }
  }, {
    key: "append",
    value: function append(_ref) {
      var _this = this;

      var _ref$verb = _ref.verb,
          verb = _ref$verb === void 0 ? 'log' : _ref$verb,
          args = _ref.args;
      var newEntry = document.createElement('div');
      newEntry.className = "".concat(_css_views_console_css__WEBPACK_IMPORTED_MODULE_0___default.a.row, " ").concat(_css_views_console_css__WEBPACK_IMPORTED_MODULE_0___default.a[verb]); // Add timestamp

      var timestamp = document.createElement('span');
      var tzOffset = new Date().getTimezoneOffset() * 60000;
      timestamp.className = _css_views_console_css__WEBPACK_IMPORTED_MODULE_0___default.a.timestamp;
      timestamp.textContent = new Date(Date.now() - tzOffset).toISOString().slice(11, 23);
      newEntry.appendChild(timestamp);
      Object.keys(args).forEach(function (key) {
        var arg = args[key]; // Output text

        var outputText = document.createElement('span');
        outputText.className = _css_views_console_css__WEBPACK_IMPORTED_MODULE_0___default.a.outputText;

        if (_typeof(arg) === 'object') {
          outputText.innerHTML = arg.constructor && arg.constructor.name && arg.constructor.name.indexOf('Error') > -1 ? arg.stack : JSON.stringify(JSON.parse(prune(arg, Output.pruneOptions)), null, 2);
        } else {
          outputText.innerHTML = arg;
        } // Expand icon


        if (outputText.textContent.indexOf('\n') > -1) {
          outputText.classList.add(_css_views_console_css__WEBPACK_IMPORTED_MODULE_0___default.a.block);
          outputText.onclick = Output.onClickExpandIcon.bind(_this, outputText);
        }

        newEntry.appendChild(outputText);
      });
      this.el.appendChild(newEntry);

      if (newEntry.scrollIntoView) {
        newEntry.scrollIntoView();
      }
    }
  }], [{
    key: "onClickExpandIcon",
    value: function onClickExpandIcon(outputEntry) {
      if (outputEntry.classList.contains(_css_views_console_css__WEBPACK_IMPORTED_MODULE_0___default.a.open)) {
        outputEntry.classList.remove(_css_views_console_css__WEBPACK_IMPORTED_MODULE_0___default.a.open);
      } else {
        outputEntry.classList.add(_css_views_console_css__WEBPACK_IMPORTED_MODULE_0___default.a.open);
      }
    }
  }]);

  return Output;
}();

Output.pruneOptions = {
  depthDecr: 10,
  replacer: function replacer(value, defaultValue, circular) {
    if (circular) return "\"-circular-\"";
    if (value === undefined) return "\"-undefined-\"";
    if (Array.isArray(value)) return "\"-array(" + value.length + ")-\"";
    return defaultValue;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Output);

/***/ }),

/***/ "./src/js/views/content/console/prompt.js":
/*!************************************************!*\
  !*** ./src/js/views/content/console/prompt.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_views_console_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../css/views/console.css */ "./src/css/views/console.css");
/* harmony import */ var _css_views_console_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_views_console_css__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * Console tab input
 */

var Prompt =
/*#__PURE__*/
function () {
  function Prompt(_ref) {
    var console = _ref.console;

    _classCallCheck(this, Prompt);

    this.el = document.createElement('div');
    this.console = console;
    this.historyPos = -1;
    this.currentInput = '';
  }

  _createClass(Prompt, [{
    key: "render",
    value: function render() {
      var promptChar = document.createElement('div');
      promptChar.className = _css_views_console_css__WEBPACK_IMPORTED_MODULE_0___default.a.promptChar;
      promptChar.innerHTML = '&#8250;';
      this.el.appendChild(promptChar);
      this.promptInput = document.createElement('input');
      this.promptInput.className = _css_views_console_css__WEBPACK_IMPORTED_MODULE_0___default.a.promptInput;
      this.promptInput.onkeydown = this.onKeyDown.bind(this);
      this.promptInput.onchange = this.onChange.bind(this);
      this.promptInput.onpaste = this.onChange.bind(this);
      this.promptInput.oninput = this.onChange.bind(this);
      this.el.appendChild(this.promptInput);
      this.el.className = _css_views_console_css__WEBPACK_IMPORTED_MODULE_0___default.a.prompt;
      return this.el;
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      if (event.key === 'Enter' && this.promptInput.value) {
        this.executeCommand(this.promptInput.value);
      } else if (event.key === 'ArrowUp' || event.key === 'Up') {
        this.retrieveHistory();
      } else if (event.key === 'ArrowDown' || event.key === 'Down') {
        this.retrieveHistory(true);
      }
    }
  }, {
    key: "onChange",
    value: function onChange() {
      this.historyPos = -1;
      this.currentInput = this.promptInput.value;
    }
  }, {
    key: "executeCommand",
    value: function executeCommand(command) {
      this.console.exec(command);
      this.historyPos = -1;
      this.currentInput = '';
      this.promptInput.value = '';
    }
  }, {
    key: "retrieveHistory",
    value: function retrieveHistory() {
      var reverse = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var history = this.console.getHistory();

      if (reverse) {
        this.historyPos = Math.max(--this.historyPos, -1);
      } else {
        this.historyPos = Math.min(++this.historyPos, history.length - 1);
      }

      this.promptInput.value = this.historyPos === -1 ? this.currentInput : history[this.historyPos] || '';
    }
  }]);

  return Prompt;
}();

/* harmony default export */ __webpack_exports__["default"] = (Prompt);

/***/ }),

/***/ "./src/js/views/f-twelve.js":
/*!**********************************!*\
  !*** ./src/js/views/f-twelve.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_f_twelve_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/f-twelve.css */ "./src/css/f-twelve.css");
/* harmony import */ var _css_f_twelve_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_f_twelve_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs */ "./src/js/views/tabs.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



/**
 * F-Twelve entrypoint
 */

var FTwelve =
/*#__PURE__*/
function () {
  function FTwelve() {
    _classCallCheck(this, FTwelve);

    this.el = document.createElement('div');
    this.onAttach = undefined;
    this.onDetach = undefined;
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.enable(false);
    this.render();
  }

  _createClass(FTwelve, [{
    key: "render",
    value: function render() {
      this.el.id = 'f-twelve';
      this.el.className = _css_f_twelve_css__WEBPACK_IMPORTED_MODULE_0___default.a.fTwelve;
      this.contentWrapper = document.createElement('div');
      this.el.appendChild(new _tabs__WEBPACK_IMPORTED_MODULE_1__["default"]({
        setContent: this.setContent.bind(this)
      }).render());
      this.el.appendChild(this.contentWrapper);
      return this.el;
    }
  }, {
    key: "setContent",
    value: function setContent(el) {
      if (this.content) {
        this.contentWrapper.removeChild(this.content);
      }

      if (!el.isSameNode(this.content)) {
        this.contentWrapper.appendChild(el);
        this.content = el;
      } else {
        this.content = undefined;
      }
    }
  }, {
    key: "enable",
    value: function enable() {
      var show = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.active = true;

      if (show) {
        this.attach();
      }

      this.enableKeyboardTrigger();
    }
  }, {
    key: "disable",
    value: function disable() {
      this.active = false;
      this.detach();
      this.disableKeyboardTrigger();
    }
  }, {
    key: "attach",
    value: function attach() {
      if (this.attached === true || this.active !== true) {
        return;
      }

      var body = document.getElementsByTagName('body')[0];
      body.appendChild(this.el);
      this.attached = true;

      if (typeof this.onAttach === 'function') {
        this.onAttach();
      }
    }
  }, {
    key: "detach",
    value: function detach() {
      if (this.attached !== true) {
        return;
      }

      var el = document.getElementById(this.el.id);
      el.parentNode.removeChild(el);
      this.attached = false;

      if (typeof this.onDetach === 'function') {
        this.onDetach();
      }
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      this.keyDownStack += event.key;

      if (this.keyDownStack.toUpperCase() !== 'F12') {
        return;
      }

      if (this.attached) {
        this.detach();
      } else {
        this.attach();
      }
    }
  }, {
    key: "onKeyUp",
    value: function onKeyUp() {
      this.keyDownStack = '';
    }
  }, {
    key: "enableKeyboardTrigger",
    value: function enableKeyboardTrigger() {
      this.keyDownStack = '';
      document.addEventListener('keydown', this.onKeyDown);
      document.addEventListener('keyup', this.onKeyUp);
    }
  }, {
    key: "disableKeyboardTrigger",
    value: function disableKeyboardTrigger() {
      document.removeEventListener('keydown', this.onKeyDown);
      document.removeEventListener('keyup', this.onKeyUp);
    }
  }]);

  return FTwelve;
}();

/* harmony default export */ __webpack_exports__["default"] = (FTwelve);

/***/ }),

/***/ "./src/js/views/tab.js":
/*!*****************************!*\
  !*** ./src/js/views/tab.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_f_twelve_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/f-twelve.css */ "./src/css/f-twelve.css");
/* harmony import */ var _css_f_twelve_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_f_twelve_css__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * Single tab for the tab bar
 */

var Tab =
/*#__PURE__*/
function () {
  function Tab(_ref) {
    var onClick = _ref.onClick,
        label = _ref.label,
        content = _ref.content;

    _classCallCheck(this, Tab);

    this.el = document.createElement('div');
    this.onClick = onClick;
    this.label = label;
    this.content = content;
  }

  _createClass(Tab, [{
    key: "render",
    value: function render() {
      this.el.className = _css_f_twelve_css__WEBPACK_IMPORTED_MODULE_0___default.a.tab;
      this.el.innerText = this.label;
      this.el.onclick = this.onClick.bind(this, this.content.render());
      return this.el;
    }
  }]);

  return Tab;
}();

/* harmony default export */ __webpack_exports__["default"] = (Tab);

/***/ }),

/***/ "./src/js/views/tabs.js":
/*!******************************!*\
  !*** ./src/js/views/tabs.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab */ "./src/js/views/tab.js");
/* harmony import */ var _views_content_console_console__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/content/console/console */ "./src/js/views/content/console/console.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



/**
 * Tab bar with content
 */

var Tabs =
/*#__PURE__*/
function () {
  function Tabs(_ref) {
    var setContent = _ref.setContent;

    _classCallCheck(this, Tabs);

    this.el = document.createElement('div');
    this.setContent = setContent;
  }

  _createClass(Tabs, [{
    key: "render",
    value: function render() {
      var _this = this;

      var tabs = this.getTabs();
      tabs.forEach(function (tab) {
        _this.el.appendChild(tab.render());
      });
      return this.el;
    }
  }, {
    key: "getTabs",
    value: function getTabs() {
      var onClick = this.setContent.bind(this);
      return [new _tab__WEBPACK_IMPORTED_MODULE_0__["default"]({
        onClick: onClick,
        label: 'Console',
        content: new _views_content_console_console__WEBPACK_IMPORTED_MODULE_1__["default"]()
      })];
    }
  }]);

  return Tabs;
}();

/* harmony default export */ __webpack_exports__["default"] = (Tabs);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9mLXR3ZWx2ZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy92aWV3cy9jb25zb2xlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qc29uLXBydW5lL0pTT04ucHJ1bmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9mLXR3ZWx2ZS5jc3M/ZmIwYSIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3ZpZXdzL2NvbnNvbGUuY3NzPzIzN2QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3ZpZXdzL2NvbnRlbnQvY29uc29sZS9jb25zb2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy92aWV3cy9jb250ZW50L2NvbnNvbGUvb3V0cHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy92aWV3cy9jb250ZW50L2NvbnNvbGUvcHJvbXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy92aWV3cy9mLXR3ZWx2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdmlld3MvdGFiLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy92aWV3cy90YWJzLmpzIl0sIm5hbWVzIjpbImZUd2VsdmUiLCJGVHdlbHZlIiwid2luZG93IiwiT2JqZWN0IiwiZnJlZXplIiwiZW5hYmxlIiwic2hvdyIsImRpc2FibGUiLCJoaWRlIiwiZGV0YWNoIiwiYXR0YWNoIiwib25IaWRlIiwiY2FsbGJhY2siLCJvbkRldGFjaCIsIm9uU2hvdyIsIm9uQXR0YWNoIiwiaGlzdG9yeUtleSIsIkNvbnNvbGUiLCJlbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImV4ZWNIaXN0b3J5IiwiZ2V0SGlzdG9yeSIsIm91dHB1dCIsIk91dHB1dCIsInByb21wdCIsIlByb21wdCIsImNvbnNvbGUiLCJvdmVycmlkZVdpbmRvd0NvbnNvbGUiLCJvdmVycmlkZVdpbmRvd09uRXJyb3IiLCJjbGFzc05hbWUiLCJzdHlsZXMiLCJjb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJyZW5kZXIiLCJsb2NhbFN0b3JhZ2UiLCJKU09OIiwicGFyc2UiLCJnZXRJdGVtIiwiY29tbWFuZCIsInVuc2hpZnQiLCJzbGljZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJ2ZXJicyIsImZvckVhY2giLCJ2ZXJiIiwib2xkVmVyYiIsImFyZ3MiLCJhcHBlbmQiLCJhcHBseSIsIm9sZE9uRXJyb3IiLCJvbmVycm9yIiwibWVzc2FnZSIsInNvdXJjZSIsImxpbmVObyIsImNvbE5vIiwiZXJyb3IiLCJjYWxsIiwic2V0SGlzdG9yeSIsImxvZyIsImV2YWwiLCJlIiwicmVmZXJlbmNlU3RyaW5nIiwicmVwbGFjZSIsInNwbGl0IiwicmVkdWNlIiwib2JqZWN0IiwibWVtYmVyU3RyaW5nIiwiYnJhY2tldE1hdGNoIiwibWF0Y2giLCJtZW1iZXJOYW1lIiwicHJ1bmUiLCJyZXF1aXJlIiwibmV3RW50cnkiLCJyb3ciLCJ0aW1lc3RhbXAiLCJ0ek9mZnNldCIsIkRhdGUiLCJnZXRUaW1lem9uZU9mZnNldCIsInRleHRDb250ZW50Iiwibm93IiwidG9JU09TdHJpbmciLCJrZXlzIiwia2V5IiwiYXJnIiwib3V0cHV0VGV4dCIsImlubmVySFRNTCIsImNvbnN0cnVjdG9yIiwibmFtZSIsImluZGV4T2YiLCJzdGFjayIsInBydW5lT3B0aW9ucyIsImNsYXNzTGlzdCIsImFkZCIsImJsb2NrIiwib25jbGljayIsIm9uQ2xpY2tFeHBhbmRJY29uIiwiYmluZCIsInNjcm9sbEludG9WaWV3Iiwib3V0cHV0RW50cnkiLCJjb250YWlucyIsIm9wZW4iLCJyZW1vdmUiLCJkZXB0aERlY3IiLCJyZXBsYWNlciIsInZhbHVlIiwiZGVmYXVsdFZhbHVlIiwiY2lyY3VsYXIiLCJ1bmRlZmluZWQiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJoaXN0b3J5UG9zIiwiY3VycmVudElucHV0IiwicHJvbXB0Q2hhciIsInByb21wdElucHV0Iiwib25rZXlkb3duIiwib25LZXlEb3duIiwib25jaGFuZ2UiLCJvbkNoYW5nZSIsIm9ucGFzdGUiLCJvbmlucHV0IiwiZXZlbnQiLCJleGVjdXRlQ29tbWFuZCIsInJldHJpZXZlSGlzdG9yeSIsImV4ZWMiLCJyZXZlcnNlIiwiaGlzdG9yeSIsIk1hdGgiLCJtYXgiLCJtaW4iLCJvbktleVVwIiwiaWQiLCJjb250ZW50V3JhcHBlciIsIlRhYnMiLCJzZXRDb250ZW50IiwicmVtb3ZlQ2hpbGQiLCJpc1NhbWVOb2RlIiwiYWN0aXZlIiwiZW5hYmxlS2V5Ym9hcmRUcmlnZ2VyIiwiZGlzYWJsZUtleWJvYXJkVHJpZ2dlciIsImF0dGFjaGVkIiwiYm9keSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZ2V0RWxlbWVudEJ5SWQiLCJwYXJlbnROb2RlIiwia2V5RG93blN0YWNrIiwidG9VcHBlckNhc2UiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIlRhYiIsIm9uQ2xpY2siLCJsYWJlbCIsInRhYiIsImlubmVyVGV4dCIsInRhYnMiLCJnZXRUYWJzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFr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QUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0EsS0FBSyxLQUF3QyxFQUFFLEVBRTdDOztBQUVGLFFBQVEsc0JBQWlCO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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LFVBQUksQ0FBQy9HLE9BQUwsQ0FBYSxVQUFDNkcsR0FBRCxFQUFTO0FBQ3BCLGFBQUksQ0FBQ3hJLEVBQUwsQ0FBUWUsV0FBUixDQUFvQnlILEdBQUcsQ0FBQ3hILE1BQUosRUFBcEI7QUFDRCxPQUZEO0FBR0EsYUFBTyxLQUFLaEIsRUFBWjtBQUNEOzs7OEJBRVM7QUFDUixVQUFNc0ksT0FBTyxHQUFHLEtBQUtoQixVQUFMLENBQWdCdEMsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBaEI7QUFDQSxhQUFPLENBQ0wsSUFBSXFELDRDQUFKLENBQVE7QUFDTkMsZUFBTyxFQUFFQSxPQURIO0FBRU5DLGFBQUssRUFBRSxTQUZEO0FBR056SCxlQUFPLEVBQUUsSUFBSWYsc0VBQUo7QUFISCxPQUFSLENBREssQ0FBUDtBQU9EOzs7Ozs7QUFHWXNILG1FQUFmLEUiLCJmaWxlIjoiZi10d2VsdmUudW1kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvbWFpbi5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmYtdHdlbHZlX2ZUd2VsdmUge1xcbiAgICBjb2xvcjogIzMzMztcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogdmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICB6LWluZGV4OiAyMTQ3NDgzNjQ3O1xcbn1cXG5cXG4uZi10d2VsdmVfdGFiIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xcbiAgICBwYWRkaW5nOiAzcHggNXB4O1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4uZi10d2VsdmVfY29udGVudCB7XFxuICAgIGhlaWdodDogMzIwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JiYjtcXG4gICAgdG9wOiAwO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJmVHdlbHZlXCI6IFwiZi10d2VsdmVfZlR3ZWx2ZVwiLFxuXHRcInRhYlwiOiBcImYtdHdlbHZlX3RhYlwiLFxuXHRcImNvbnRlbnRcIjogXCJmLXR3ZWx2ZV9jb250ZW50XCJcbn07IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudmlld3MtY29uc29sZV9yb3cge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm9yZGVyLWNvbG9yOiAjZjBmMGYwO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIHBhZGRpbmc6IDNweCAzcHggM3B4IDk1cHg7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi52aWV3cy1jb25zb2xlX3Jvdy52aWV3cy1jb25zb2xlX2Vycm9yIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjBmMDtcXG4gICAgY29sb3I6ICNmZjAwMDA7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZmZDZkNjtcXG59XFxuXFxuLnZpZXdzLWNvbnNvbGVfcm93LnZpZXdzLWNvbnNvbGVfbG9nIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZjBmMGYwO1xcbn1cXG5cXG4udmlld3MtY29uc29sZV9yb3cudmlld3MtY29uc29sZV9pbmZvIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZTJmM2ZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmY2ZmO1xcbn1cXG5cXG4udmlld3MtY29uc29sZV9yb3cudmlld3MtY29uc29sZV93YXJuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmJlNTtcXG4gICAgY29sb3I6ICM1YzNjMDA7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZmZjVjMjtcXG59XFxuXFxuLnZpZXdzLWNvbnNvbGVfb3V0cHV0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMjBweDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi52aWV3cy1jb25zb2xlX3RpbWVzdGFtcCB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC05MHB4O1xcbiAgICBjb2xvcjogIzgwODA4MDtcXG59XFxuXFxuLnZpZXdzLWNvbnNvbGVfb3V0cHV0VGV4dCB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXG59XFxuXFxuLnZpZXdzLWNvbnNvbGVfb3V0cHV0VGV4dC52aWV3cy1jb25zb2xlX2Jsb2NrIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owbmFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jbklIZHBaSFJvUFNjeE1DY2dhR1ZwWjJoMFBTY3hNQ2MrUEhCdmJIbG5iMjRnY0c5cGJuUnpQU2N6TERJZ09DdzFJRE1zT1NjZ2MzUjViR1U5SjJacGJHdzZJemN5TnpJM01pY2dMejQ4TDNOMlp6ND1cXFwiKSBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogMnB4O1xcbn1cXG5cXG4udmlld3MtY29uc29sZV9vdXRwdXRUZXh0LnZpZXdzLWNvbnNvbGVfYmxvY2sudmlld3MtY29uc29sZV9vcGVuIHtcXG4gICAgd2hpdGUtc3BhY2U6IHByZTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MG5hSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY25JSGRwWkhSb1BTY3hNQ2NnYUdWcFoyaDBQU2N4TUNjK1BIQnZiSGxuYjI0Z2NHOXBiblJ6UFNjeUxETWdPQ3d6SURVc09TY2djM1I1YkdVOUoyWnBiR3c2SXpjeU56STNNaWNnTHo0OEwzTjJaejQ9XFxcIik7XFxufVxcblxcbi52aWV3cy1jb25zb2xlX291dHB1dFRleHQudmlld3MtY29uc29sZV9ibG9jazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWZmZmY4ODtcXG59XFxuXFxuLnZpZXdzLWNvbnNvbGVfcHJvbXB0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLnZpZXdzLWNvbnNvbGVfcHJvbXB0Q2hhciB7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLnZpZXdzLWNvbnNvbGVfcHJvbXB0SW5wdXQge1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb3dcIjogXCJ2aWV3cy1jb25zb2xlX3Jvd1wiLFxuXHRcImVycm9yXCI6IFwidmlld3MtY29uc29sZV9lcnJvclwiLFxuXHRcImxvZ1wiOiBcInZpZXdzLWNvbnNvbGVfbG9nXCIsXG5cdFwiaW5mb1wiOiBcInZpZXdzLWNvbnNvbGVfaW5mb1wiLFxuXHRcIndhcm5cIjogXCJ2aWV3cy1jb25zb2xlX3dhcm5cIixcblx0XCJvdXRwdXRcIjogXCJ2aWV3cy1jb25zb2xlX291dHB1dFwiLFxuXHRcInRpbWVzdGFtcFwiOiBcInZpZXdzLWNvbnNvbGVfdGltZXN0YW1wXCIsXG5cdFwib3V0cHV0VGV4dFwiOiBcInZpZXdzLWNvbnNvbGVfb3V0cHV0VGV4dFwiLFxuXHRcImJsb2NrXCI6IFwidmlld3MtY29uc29sZV9ibG9ja1wiLFxuXHRcIm9wZW5cIjogXCJ2aWV3cy1jb25zb2xlX29wZW5cIixcblx0XCJwcm9tcHRcIjogXCJ2aWV3cy1jb25zb2xlX3Byb21wdFwiLFxuXHRcInByb21wdENoYXJcIjogXCJ2aWV3cy1jb25zb2xlX3Byb21wdENoYXJcIixcblx0XCJwcm9tcHRJbnB1dFwiOiBcInZpZXdzLWNvbnNvbGVfcHJvbXB0SW5wdXRcIlxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gJ0BtZWRpYSAnICsgaXRlbVsyXSArICd7JyArIGNvbnRlbnQgKyAnfSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH1cbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tpXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gJygnICsgaXRlbVsyXSArICcpIGFuZCAoJyArIG1lZGlhUXVlcnkgKyAnKSc7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG4gIHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59IiwiLy8gSlNPTi5wcnVuZSA6IGEgZnVuY3Rpb24gdG8gc3RyaW5naWZ5IGFueSBvYmplY3Qgd2l0aG91dCBvdmVyZmxvd1xuLy8gdHdvIGFkZGl0aW9uYWwgb3B0aW9uYWwgcGFyYW1ldGVycyA6XG4vLyAgIC0gdGhlIG1heGltYWwgZGVwdGggKGRlZmF1bHQgOiA2KVxuLy8gICAtIHRoZSBtYXhpbWFsIGxlbmd0aCBvZiBhcnJheXMgKGRlZmF1bHQgOiA1MClcbi8vIFlvdSBjYW4gYWxzbyBwYXNzIGFuIFwib3B0aW9uc1wiIG9iamVjdC5cbi8vIGV4YW1wbGVzIDpcbi8vICAgdmFyIGpzb24gPSBKU09OLnBydW5lKHdpbmRvdylcbi8vICAgdmFyIGFyciA9IEFycmF5LmFwcGx5KDAsQXJyYXkoMTAwMCkpOyB2YXIganNvbiA9IEpTT04ucHJ1bmUoYXJyLCA0LCAyMClcbi8vICAgdmFyIGpzb24gPSBKU09OLnBydW5lKHdpbmRvdy5sb2NhdGlvbiwge2luaGVyaXRlZFByb3BlcnRpZXM6dHJ1ZX0pXG4vLyBXZWIgc2l0ZSA6IGh0dHA6Ly9keXN0cm95Lm9yZy9KU09OLnBydW5lL1xuLy8gSlNPTi5wcnVuZSBvbiBnaXRodWIgOiBodHRwczovL2dpdGh1Yi5jb20vQ2Fub3AvSlNPTi5wcnVuZVxuLy8gVGhpcyB3YXMgZGlzY3Vzc2VkIGhlcmUgOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8xMzg2MTI1NC8yNjM1MjVcbi8vIFRoZSBjb2RlIGlzIGJhc2VkIG9uIERvdWdsYXMgQ3JvY2tmb3JkJ3MgY29kZSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9kb3VnbGFzY3JvY2tmb3JkL0pTT04tanMvYmxvYi9tYXN0ZXIvanNvbjIuanNcbi8vIE5vIGVmZm9ydCB3YXMgZG9uZSB0byBzdXBwb3J0IG9sZCBicm93c2Vycy4gSlNPTi5wcnVuZSB3aWxsIGZhaWwgb24gSUU4LlxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBERUZBVUxUX01BWF9ERVBUSCA9IDY7XG5cdHZhciBERUZBVUxUX0FSUkFZX01BWF9MRU5HVEggPSA1MDtcblx0dmFyIERFRkFVTFRfUFJVTkVEX1ZBTFVFID0gJ1wiLXBydW5lZC1cIic7XG5cdHZhciBzZWVuOyAvLyBTYW1lIHZhcmlhYmxlIHVzZWQgZm9yIGFsbCBzdHJpbmdpZmljYXRpb25zXG5cdHZhciBpdGVyYXRvcjsgLy8gZWl0aGVyIGZvckVhY2hFbnVtZXJhYmxlT3duUHJvcGVydHksIGZvckVhY2hFbnVtZXJhYmxlUHJvcGVydHkgb3IgZm9yRWFjaFByb3BlcnR5XG5cdFxuXHQvLyBpdGVyYXRlcyBvbiBlbnVtZXJhYmxlIG93biBwcm9wZXJ0aWVzIChkZWZhdWx0IGJlaGF2aW9yKVxuXHR2YXIgZm9yRWFjaEVudW1lcmFibGVPd25Qcm9wZXJ0eSA9IGZ1bmN0aW9uKG9iaiwgY2FsbGJhY2spIHtcblx0XHRmb3IgKHZhciBrIGluIG9iaikge1xuXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGspKSBjYWxsYmFjayhrKTtcblx0XHR9XG5cdH07XG5cdC8vIGl0ZXJhdGVzIG9uIGVudW1lcmFibGUgcHJvcGVydGllc1xuXHR2YXIgZm9yRWFjaEVudW1lcmFibGVQcm9wZXJ0eSA9IGZ1bmN0aW9uKG9iaiwgY2FsbGJhY2spIHtcblx0XHRmb3IgKHZhciBrIGluIG9iaikgY2FsbGJhY2soayk7XG5cdH07XG5cdC8vIGl0ZXJhdGVzIG9uIHByb3BlcnRpZXMsIGV2ZW4gbm9uIGVudW1lcmFibGUgYW5kIGluaGVyaXRlZCBvbmVzXG5cdC8vIFRoaXMgaXMgZGFuZ2Vyb3VzXG5cdHZhciBmb3JFYWNoUHJvcGVydHkgPSBmdW5jdGlvbihvYmosIGNhbGxiYWNrLCBleGNsdWRlZCkge1xuXHRcdGlmIChvYmo9PW51bGwpIHJldHVybjtcblx0XHRleGNsdWRlZCA9IGV4Y2x1ZGVkIHx8IHt9O1xuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaikuZm9yRWFjaChmdW5jdGlvbihrKXtcblx0XHRcdGlmICghZXhjbHVkZWRba10pIHtcblx0XHRcdFx0Y2FsbGJhY2soayk7XG5cdFx0XHRcdGV4Y2x1ZGVkW2tdID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRmb3JFYWNoUHJvcGVydHkoT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaiksIGNhbGxiYWNrLCBleGNsdWRlZCk7XG5cdH07XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KERhdGUucHJvdG90eXBlLCBcInRvUHJ1bmVkSlNPTlwiLCB7dmFsdWU6RGF0ZS5wcm90b3R5cGUudG9KU09OfSk7XG5cblx0dmFyXHRjeCA9IC9bXFx1MDAwMFxcdTAwYWRcXHUwNjAwLVxcdTA2MDRcXHUwNzBmXFx1MTdiNFxcdTE3YjVcXHUyMDBjLVxcdTIwMGZcXHUyMDI4LVxcdTIwMmZcXHUyMDYwLVxcdTIwNmZcXHVmZWZmXFx1ZmZmMC1cXHVmZmZmXS9nLFxuXHRcdGVzY2FwYWJsZSA9IC9bXFxcXFxcXCJcXHgwMC1cXHgxZlxceDdmLVxceDlmXFx1MDBhZFxcdTA2MDAtXFx1MDYwNFxcdTA3MGZcXHUxN2I0XFx1MTdiNVxcdTIwMGMtXFx1MjAwZlxcdTIwMjgtXFx1MjAyZlxcdTIwNjAtXFx1MjA2ZlxcdWZlZmZcXHVmZmYwLVxcdWZmZmZdL2csXG5cdFx0bWV0YSA9IHtcdC8vIHRhYmxlIG9mIGNoYXJhY3RlciBzdWJzdGl0dXRpb25zXG5cdFx0XHQnXFxiJzogJ1xcXFxiJyxcblx0XHRcdCdcXHQnOiAnXFxcXHQnLFxuXHRcdFx0J1xcbic6ICdcXFxcbicsXG5cdFx0XHQnXFxmJzogJ1xcXFxmJyxcblx0XHRcdCdcXHInOiAnXFxcXHInLFxuXHRcdFx0J1wiJyA6ICdcXFxcXCInLFxuXHRcdFx0J1xcXFwnOiAnXFxcXFxcXFwnXG5cdFx0fTtcblxuXHRmdW5jdGlvbiBxdW90ZShzdHJpbmcpIHtcblx0XHRlc2NhcGFibGUubGFzdEluZGV4ID0gMDtcblx0XHRyZXR1cm4gZXNjYXBhYmxlLnRlc3Qoc3RyaW5nKSA/ICdcIicgKyBzdHJpbmcucmVwbGFjZShlc2NhcGFibGUsIGZ1bmN0aW9uIChhKSB7XG5cdFx0XHR2YXIgYyA9IG1ldGFbYV07XG5cdFx0XHRyZXR1cm4gdHlwZW9mIGMgPT09ICdzdHJpbmcnXG5cdFx0XHRcdD8gY1xuXHRcdFx0XHQ6ICdcXFxcdScgKyAoJzAwMDAnICsgYS5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTQpO1xuXHRcdH0pICsgJ1wiJyA6ICdcIicgKyBzdHJpbmcgKyAnXCInO1xuXHR9XG5cblxuXHR2YXIgcHJ1bmUgPSBmdW5jdGlvbiAodmFsdWUsIGRlcHRoRGVjciwgYXJyYXlNYXhMZW5ndGgpIHtcblx0XHR2YXIgcHJ1bmVkU3RyaW5nID0gREVGQVVMVF9QUlVORURfVkFMVUU7XG5cdFx0dmFyIHJlcGxhY2VyO1xuXHRcdGlmICh0eXBlb2YgZGVwdGhEZWNyID09IFwib2JqZWN0XCIpIHtcblx0XHRcdHZhciBvcHRpb25zID0gZGVwdGhEZWNyO1xuXHRcdFx0ZGVwdGhEZWNyID0gb3B0aW9ucy5kZXB0aERlY3I7XG5cdFx0XHRhcnJheU1heExlbmd0aCA9IG9wdGlvbnMuYXJyYXlNYXhMZW5ndGg7XG5cdFx0XHRpdGVyYXRvciA9IG9wdGlvbnMuaXRlcmF0b3IgfHwgZm9yRWFjaEVudW1lcmFibGVPd25Qcm9wZXJ0eTtcblx0XHRcdGlmIChvcHRpb25zLmFsbFByb3BlcnRpZXMpIGl0ZXJhdG9yID0gZm9yRWFjaFByb3BlcnR5O1xuXHRcdFx0ZWxzZSBpZiAob3B0aW9ucy5pbmhlcml0ZWRQcm9wZXJ0aWVzKSBpdGVyYXRvciA9IGZvckVhY2hFbnVtZXJhYmxlUHJvcGVydHlcblx0XHRcdGlmIChcInBydW5lZFN0cmluZ1wiIGluIG9wdGlvbnMpIHtcblx0XHRcdFx0cHJ1bmVkU3RyaW5nID0gb3B0aW9ucy5wcnVuZWRTdHJpbmc7XG5cdFx0XHR9XG5cdFx0XHRpZiAob3B0aW9ucy5yZXBsYWNlcikge1xuXHRcdFx0XHRyZXBsYWNlciA9IG9wdGlvbnMucmVwbGFjZXI7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGl0ZXJhdG9yID0gZm9yRWFjaEVudW1lcmFibGVPd25Qcm9wZXJ0eTtcblx0XHR9XG5cdFx0c2VlbiA9IFtdO1xuXHRcdGRlcHRoRGVjciA9IGRlcHRoRGVjciB8fCBERUZBVUxUX01BWF9ERVBUSDtcblx0XHRhcnJheU1heExlbmd0aCA9IGFycmF5TWF4TGVuZ3RoIHx8IERFRkFVTFRfQVJSQVlfTUFYX0xFTkdUSDtcblx0XHRmdW5jdGlvbiBzdHIoa2V5LCBob2xkZXIsIGRlcHRoRGVjcikge1xuXHRcdFx0dmFyIGksIGssIHYsIGxlbmd0aCwgcGFydGlhbCwgdmFsdWUgPSBob2xkZXJba2V5XTtcblxuXHRcdFx0aWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbHVlLnRvUHJ1bmVkSlNPTiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHR2YWx1ZSA9IHZhbHVlLnRvUHJ1bmVkSlNPTihrZXkpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZS50b0pTT04gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0dmFsdWUgPSB2YWx1ZS50b0pTT04oKTsgXG5cdFx0XHR9XG5cblx0XHRcdHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG5cdFx0XHRjYXNlICdzdHJpbmcnOlxuXHRcdFx0XHRyZXR1cm4gcXVvdGUodmFsdWUpO1xuXHRcdFx0Y2FzZSAnbnVtYmVyJzpcblx0XHRcdFx0cmV0dXJuIGlzRmluaXRlKHZhbHVlKSA/IFN0cmluZyh2YWx1ZSkgOiAnbnVsbCc7XG5cdFx0XHRjYXNlICdib29sZWFuJzpcblx0XHRcdGNhc2UgJ251bGwnOlxuXHRcdFx0XHRyZXR1cm4gU3RyaW5nKHZhbHVlKTtcblx0XHRcdGNhc2UgJ29iamVjdCc6XG5cdFx0XHRcdGlmICghdmFsdWUpIHtcblx0XHRcdFx0XHRyZXR1cm4gJ251bGwnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkZXB0aERlY3I8PTAgfHwgc2Vlbi5pbmRleE9mKHZhbHVlKSE9PS0xKSB7XG5cdFx0XHRcdFx0aWYgKHJlcGxhY2VyKSB7XG5cdFx0XHRcdFx0XHR2YXIgcmVwbGFjZW1lbnQgPSByZXBsYWNlcih2YWx1ZSwgcHJ1bmVkU3RyaW5nLCB0cnVlKTtcblx0XHRcdFx0XHRcdHJldHVybiByZXBsYWNlbWVudD09PXVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6ICcnK3JlcGxhY2VtZW50O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gcHJ1bmVkU3RyaW5nO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNlZW4ucHVzaCh2YWx1ZSk7XG5cdFx0XHRcdHBhcnRpYWwgPSBbXTtcblx0XHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuYXBwbHkodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG5cdFx0XHRcdFx0bGVuZ3RoID0gTWF0aC5taW4odmFsdWUubGVuZ3RoLCBhcnJheU1heExlbmd0aCk7XG5cdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHRcdFx0XHRwYXJ0aWFsW2ldID0gc3RyKGksIHZhbHVlLCBkZXB0aERlY3ItMSkgfHwgJ251bGwnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR2ID0gJ1snICsgcGFydGlhbC5qb2luKCcsJykgKyAnXSc7XG5cdFx0XHRcdFx0aWYgKHJlcGxhY2VyICYmIHZhbHVlLmxlbmd0aD5hcnJheU1heExlbmd0aCkgcmV0dXJuIHJlcGxhY2VyKHZhbHVlLCB2LCBmYWxzZSk7XG5cdFx0XHRcdFx0cmV0dXJuIHY7XG5cdFx0XHRcdH1cblx0XHRcdFx0aXRlcmF0b3IodmFsdWUsIGZ1bmN0aW9uKGspIHtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0diA9IHN0cihrLCB2YWx1ZSwgZGVwdGhEZWNyLTEpO1xuXHRcdFx0XHRcdFx0aWYgKHYpIHBhcnRpYWwucHVzaChxdW90ZShrKSArICc6JyArIHYpO1xuXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHsgXG5cdFx0XHRcdFx0XHQvLyB0aGlzIHRyeS9jYXRjaCBkdWUgdG8gZm9yYmlkZGVuIGFjY2Vzc29ycyBvbiBzb21lIG9iamVjdHNcblx0XHRcdFx0XHR9XHRcdFx0XHRcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybiAneycgKyBwYXJ0aWFsLmpvaW4oJywnKSArICd9Jztcblx0XHRcdGNhc2UgJ2Z1bmN0aW9uJzpcblx0XHRcdGNhc2UgJ3VuZGVmaW5lZCc6XG5cdFx0XHRcdHJldHVybiByZXBsYWNlciA/IHJlcGxhY2VyKHZhbHVlLCB1bmRlZmluZWQsIGZhbHNlKSA6IHVuZGVmaW5lZDtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHN0cignJywgeycnOiB2YWx1ZX0sIGRlcHRoRGVjcik7XG5cdH07XG5cdFxuXHRwcnVuZS5sb2cgPSBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoYXJndW1lbnRzLCBmdW5jdGlvbih2KSB7XG5cdFx0XHRyZXR1cm4gSlNPTi5wYXJzZShKU09OLnBydW5lKHYpKTtcblx0XHR9KSk7XG5cdH07XG5cdHBydW5lLmZvckVhY2hQcm9wZXJ0eSA9IGZvckVhY2hQcm9wZXJ0eTsgLy8geW91IG1pZ2h0IHdhbnQgdG8gYWxzbyBhc3NpZ24gaXQgdG8gT2JqZWN0LmZvckVhY2hQcm9wZXJ0eVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiKSBtb2R1bGUuZXhwb3J0cyA9IHBydW5lO1xuXHRlbHNlIEpTT04ucHJ1bmUgPSBwcnVuZTtcbn0oKSk7XG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0xIS4vZi10d2VsdmUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTEhLi9mLXR3ZWx2ZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTEhLi9mLXR3ZWx2ZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0xIS4vY29uc29sZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMSEuL2NvbnNvbGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0xIS4vY29uc29sZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgRlR3ZWx2ZSBmcm9tICcuL3ZpZXdzL2YtdHdlbHZlJztcblxuLyoqXG4gKiBJbnN0YW50aWF0ZSBzaW5nbGV0b24gYW5kIHJldHVybiBwdWJsaWMgQVBJXG4gKi9cbmNvbnN0IGZUd2VsdmUgPSBuZXcgRlR3ZWx2ZSgpO1xud2luZG93LkZUd2VsdmUgPSBPYmplY3QuZnJlZXplKHtcbiAgZW5hYmxlOiAoc2hvdyA9IHRydWUpID0+IGZUd2VsdmUuZW5hYmxlKHNob3cpLFxuICBkaXNhYmxlOiAoKSA9PiBmVHdlbHZlLmRpc2FibGUoKSxcbiAgaGlkZTogKCkgPT4gZlR3ZWx2ZS5kZXRhY2goZlR3ZWx2ZSksXG4gIHNob3c6ICgpID0+IGZUd2VsdmUuYXR0YWNoKGZUd2VsdmUpLFxuICBvbkhpZGU6IChjYWxsYmFjaykgPT4gKGZUd2VsdmUub25EZXRhY2ggPSBjYWxsYmFjayksXG4gIG9uU2hvdzogKGNhbGxiYWNrKSA9PiAoZlR3ZWx2ZS5vbkF0dGFjaCA9IGNhbGxiYWNrKSxcbn0pO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuaW1wb3J0IHN0eWxlcyBmcm9tICdzcmMvY3NzL2YtdHdlbHZlLmNzcyc7XG5pbXBvcnQgT3V0cHV0IGZyb20gJy4vb3V0cHV0JztcbmltcG9ydCBQcm9tcHQgZnJvbSAnLi9wcm9tcHQnO1xuXG5jb25zdCBoaXN0b3J5S2V5ID0gJ2ZUd2VsdmUuaGlzdG9yeSc7XG5cbi8qKlxuICogVGhlIGNvbnRlbnQgb2YgdGhlIENvbnNvbGUgdGFiXG4gKi9cbmNsYXNzIENvbnNvbGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5leGVjSGlzdG9yeSA9IHRoaXMuZ2V0SGlzdG9yeSgpO1xuICAgIHRoaXMub3V0cHV0ID0gbmV3IE91dHB1dCgpO1xuICAgIHRoaXMucHJvbXB0ID0gbmV3IFByb21wdCh7IGNvbnNvbGU6IHRoaXMgfSk7XG4gICAgdGhpcy5vdmVycmlkZVdpbmRvd0NvbnNvbGUoKTtcbiAgICB0aGlzLm92ZXJyaWRlV2luZG93T25FcnJvcigpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuZWwuY2xhc3NOYW1lID0gc3R5bGVzLmNvbnRlbnQ7XG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLm91dHB1dC5yZW5kZXIoKSk7XG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLnByb21wdC5yZW5kZXIoKSk7XG4gICAgcmV0dXJuIHRoaXMuZWw7XG4gIH1cblxuICBnZXRIaXN0b3J5KCkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlXG4gICAgICA/IChKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShoaXN0b3J5S2V5KSkgfHwgW10pXG4gICAgICA6IHRoaXMuZXhlY0hpc3RvcnkgfHwgW107XG4gIH1cblxuICBzZXRIaXN0b3J5KGNvbW1hbmQpIHtcbiAgICB0aGlzLmV4ZWNIaXN0b3J5LnVuc2hpZnQoY29tbWFuZCk7XG4gICAgdGhpcy5leGVjSGlzdG9yeSA9IHRoaXMuZXhlY0hpc3Rvcnkuc2xpY2UoMCwgNTApO1xuICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlKSB7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oaGlzdG9yeUtleSwgSlNPTi5zdHJpbmdpZnkodGhpcy5leGVjSGlzdG9yeSkpO1xuICAgIH1cbiAgfVxuXG4gIG92ZXJyaWRlV2luZG93Q29uc29sZSgpIHtcbiAgICBjb25zdCB2ZXJicyA9IFsnbG9nJywgJ3dhcm4nLCAnZXJyb3InLCAnaW5mbyddO1xuICAgIHZlcmJzLmZvckVhY2goKHZlcmIpID0+IHtcbiAgICAgIGNvbnN0IG9sZFZlcmIgPSB3aW5kb3cuY29uc29sZVt2ZXJiXTtcbiAgICAgIHdpbmRvdy5jb25zb2xlW3ZlcmJdID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgdGhpcy5vdXRwdXQuYXBwZW5kKHsgdmVyYjogdmVyYiwgYXJnczogYXJncyB9KTtcbiAgICAgICAgcmV0dXJuIG9sZFZlcmIuYXBwbHkod2luZG93LmNvbnNvbGUsIGFyZ3MpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIG92ZXJyaWRlV2luZG93T25FcnJvcigpIHtcbiAgICBjb25zdCBvbGRPbkVycm9yID0gd2luZG93Lm9uZXJyb3I7XG4gICAgd2luZG93Lm9uZXJyb3IgPSAobWVzc2FnZSwgc291cmNlLCBsaW5lTm8sIGNvbE5vLCBlcnJvcikgPT4ge1xuICAgICAgaWYgKG9sZE9uRXJyb3IgJiYgdHlwZW9mIG9sZE9uRXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb2xkT25FcnJvci5jYWxsKHRoaXMsIG1lc3NhZ2UsIHNvdXJjZSwgbGluZU5vLCBjb2xObywgZXJyb3IpO1xuICAgICAgfVxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICB9XG5cbiAgZXhlYyhjb21tYW5kKSB7XG4gICAgdGhpcy5zZXRIaXN0b3J5KGNvbW1hbmQpO1xuICAgIGNvbnNvbGUubG9nKGNvbW1hbmQpO1xuICAgIHRyeSB7XG4gICAgICBjb25zb2xlLmxvZyhldmFsKGNvbW1hbmQpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgfVxuXG4gIGV2YWx1YXRlT2JqZWN0UmVmZXJlbmNlKHJlZmVyZW5jZVN0cmluZykge1xuICAgIHJldHVybiByZWZlcmVuY2VTdHJpbmcucmVwbGFjZSgvKD89XFxbKS9nLCAnLicpLnNwbGl0KCcuJykucmVkdWNlKChvYmplY3QsIG1lbWJlclN0cmluZykgPT4ge1xuICAgICAgY29uc3QgYnJhY2tldE1hdGNoID0gbWVtYmVyU3RyaW5nLm1hdGNoKC9eXFxbKFteXFxdXSopXSQvKTtcbiAgICAgIGNvbnN0IG1lbWJlck5hbWUgPSBicmFja2V0TWF0Y2ggPyBicmFja2V0TWF0Y2hbMV0ucmVwbGFjZSgvXltcIiddfFtcIiddJC9nLCAnJykgOiBtZW1iZXJTdHJpbmc7XG4gICAgICByZXR1cm4gKG9iamVjdCB8fCB7fSlbbWVtYmVyTmFtZV07XG4gICAgfSwgd2luZG93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb25zb2xlO1xuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICdzcmMvY3NzL3ZpZXdzL2NvbnNvbGUuY3NzJztcbmNvbnN0IHBydW5lID0gcmVxdWlyZSgnanNvbi1wcnVuZScpO1xuXG4vKipcbiAqIENvbnNvbGUgdGFiIG91dHB1dFxuICovXG5jbGFzcyBPdXRwdXQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5lbC5jbGFzc05hbWUgPSBzdHlsZXMub3V0cHV0O1xuICAgIHJldHVybiB0aGlzLmVsO1xuICB9XG5cbiAgYXBwZW5kKHsgdmVyYiA9ICdsb2cnLCBhcmdzIH0pIHtcbiAgICBjb25zdCBuZXdFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld0VudHJ5LmNsYXNzTmFtZSA9IGAke3N0eWxlcy5yb3d9ICR7c3R5bGVzW3ZlcmJdfWA7XG5cbiAgICAvLyBBZGQgdGltZXN0YW1wXG4gICAgY29uc3QgdGltZXN0YW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IHR6T2Zmc2V0ID0gKG5ldyBEYXRlKCkpLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMDtcbiAgICB0aW1lc3RhbXAuY2xhc3NOYW1lID0gc3R5bGVzLnRpbWVzdGFtcDtcbiAgICB0aW1lc3RhbXAudGV4dENvbnRlbnQgPSAobmV3IERhdGUoRGF0ZS5ub3coKSAtIHR6T2Zmc2V0KSkudG9JU09TdHJpbmcoKS5zbGljZSgxMSwgMjMpO1xuICAgIG5ld0VudHJ5LmFwcGVuZENoaWxkKHRpbWVzdGFtcCk7XG5cbiAgICBPYmplY3Qua2V5cyhhcmdzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGFyZyA9IGFyZ3Nba2V5XTtcblxuICAgICAgLy8gT3V0cHV0IHRleHRcbiAgICAgIGNvbnN0IG91dHB1dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBvdXRwdXRUZXh0LmNsYXNzTmFtZSA9IHN0eWxlcy5vdXRwdXRUZXh0O1xuICAgICAgaWYgKHR5cGVvZiBhcmcgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIG91dHB1dFRleHQuaW5uZXJIVE1MID0gYXJnLmNvbnN0cnVjdG9yICYmIGFyZy5jb25zdHJ1Y3Rvci5uYW1lICYmIGFyZy5jb25zdHJ1Y3Rvci5uYW1lLmluZGV4T2YoJ0Vycm9yJykgPiAtMVxuICAgICAgICAgID8gYXJnLnN0YWNrIDogSlNPTi5zdHJpbmdpZnkoSlNPTi5wYXJzZShwcnVuZShhcmcsIE91dHB1dC5wcnVuZU9wdGlvbnMpKSwgbnVsbCwgMik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvdXRwdXRUZXh0LmlubmVySFRNTCA9IGFyZztcbiAgICAgIH1cblxuICAgICAgLy8gRXhwYW5kIGljb25cbiAgICAgIGlmIChvdXRwdXRUZXh0LnRleHRDb250ZW50LmluZGV4T2YoJ1xcbicpID4gLTEpIHtcbiAgICAgICAgb3V0cHV0VGV4dC5jbGFzc0xpc3QuYWRkKHN0eWxlcy5ibG9jayk7XG4gICAgICAgIG91dHB1dFRleHQub25jbGljayA9IE91dHB1dC5vbkNsaWNrRXhwYW5kSWNvbi5iaW5kKHRoaXMsIG91dHB1dFRleHQpO1xuICAgICAgfVxuXG4gICAgICBuZXdFbnRyeS5hcHBlbmRDaGlsZChvdXRwdXRUZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQobmV3RW50cnkpO1xuICAgIGlmIChuZXdFbnRyeS5zY3JvbGxJbnRvVmlldykge1xuICAgICAgbmV3RW50cnkuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgb25DbGlja0V4cGFuZEljb24ob3V0cHV0RW50cnkpIHtcbiAgICBpZiAob3V0cHV0RW50cnkuY2xhc3NMaXN0LmNvbnRhaW5zKHN0eWxlcy5vcGVuKSkge1xuICAgICAgb3V0cHV0RW50cnkuY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMub3Blbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dHB1dEVudHJ5LmNsYXNzTGlzdC5hZGQoc3R5bGVzLm9wZW4pO1xuICAgIH1cbiAgfVxufVxuXG5PdXRwdXQucHJ1bmVPcHRpb25zID0ge1xuICBkZXB0aERlY3I6IDEwLFxuICByZXBsYWNlcjogZnVuY3Rpb24odmFsdWUsIGRlZmF1bHRWYWx1ZSwgY2lyY3VsYXIpIHtcbiAgICBpZiAoY2lyY3VsYXIpIHJldHVybiBgXCItY2lyY3VsYXItXCJgO1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gYFwiLXVuZGVmaW5lZC1cImA7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSByZXR1cm4gYFwiLWFycmF5KGAgKyB2YWx1ZS5sZW5ndGggKyBgKS1cImA7XG4gICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgT3V0cHV0O1xuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICdzcmMvY3NzL3ZpZXdzL2NvbnNvbGUuY3NzJztcblxuLyoqXG4gKiBDb25zb2xlIHRhYiBpbnB1dFxuICovXG5jbGFzcyBQcm9tcHQge1xuICBjb25zdHJ1Y3Rvcih7IGNvbnNvbGUgfSkge1xuICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmNvbnNvbGUgPSBjb25zb2xlO1xuICAgIHRoaXMuaGlzdG9yeVBvcyA9IC0xO1xuICAgIHRoaXMuY3VycmVudElucHV0ID0gJyc7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcHJvbXB0Q2hhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb21wdENoYXIuY2xhc3NOYW1lID0gc3R5bGVzLnByb21wdENoYXI7XG4gICAgcHJvbXB0Q2hhci5pbm5lckhUTUwgPSAnJiM4MjUwOyc7XG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZChwcm9tcHRDaGFyKTtcblxuICAgIHRoaXMucHJvbXB0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRoaXMucHJvbXB0SW5wdXQuY2xhc3NOYW1lID0gc3R5bGVzLnByb21wdElucHV0O1xuICAgIHRoaXMucHJvbXB0SW5wdXQub25rZXlkb3duID0gdGhpcy5vbktleURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLnByb21wdElucHV0Lm9uY2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucHJvbXB0SW5wdXQub25wYXN0ZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnByb21wdElucHV0Lm9uaW5wdXQgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLnByb21wdElucHV0KTtcbiAgICB0aGlzLmVsLmNsYXNzTmFtZSA9IHN0eWxlcy5wcm9tcHQ7XG4gICAgcmV0dXJuIHRoaXMuZWw7XG4gIH1cblxuICBvbktleURvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInICYmIHRoaXMucHJvbXB0SW5wdXQudmFsdWUpIHtcbiAgICAgIHRoaXMuZXhlY3V0ZUNvbW1hbmQodGhpcy5wcm9tcHRJbnB1dC52YWx1ZSk7XG4gICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT09ICdBcnJvd1VwJyB8fCBldmVudC5rZXkgPT09ICdVcCcpIHtcbiAgICAgIHRoaXMucmV0cmlldmVIaXN0b3J5KCk7XG4gICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT09ICdBcnJvd0Rvd24nIHx8IGV2ZW50LmtleSA9PT0gJ0Rvd24nKSB7XG4gICAgICB0aGlzLnJldHJpZXZlSGlzdG9yeSh0cnVlKTtcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZSgpIHtcbiAgICB0aGlzLmhpc3RvcnlQb3MgPSAtMTtcbiAgICB0aGlzLmN1cnJlbnRJbnB1dCA9IHRoaXMucHJvbXB0SW5wdXQudmFsdWU7XG4gIH1cblxuICBleGVjdXRlQ29tbWFuZChjb21tYW5kKSB7XG4gICAgdGhpcy5jb25zb2xlLmV4ZWMoY29tbWFuZCk7XG4gICAgdGhpcy5oaXN0b3J5UG9zID0gLTE7XG4gICAgdGhpcy5jdXJyZW50SW5wdXQgPSAnJztcbiAgICB0aGlzLnByb21wdElucHV0LnZhbHVlID0gJyc7XG4gIH1cblxuICByZXRyaWV2ZUhpc3RvcnkocmV2ZXJzZSA9IGZhbHNlKSB7XG4gICAgY29uc3QgaGlzdG9yeSA9IHRoaXMuY29uc29sZS5nZXRIaXN0b3J5KCk7XG4gICAgaWYgKHJldmVyc2UpIHtcbiAgICAgIHRoaXMuaGlzdG9yeVBvcyA9IE1hdGgubWF4KC0tdGhpcy5oaXN0b3J5UG9zLCAtMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGlzdG9yeVBvcyA9IE1hdGgubWluKCsrdGhpcy5oaXN0b3J5UG9zLCBoaXN0b3J5Lmxlbmd0aCAtIDEpO1xuICAgIH1cbiAgICB0aGlzLnByb21wdElucHV0LnZhbHVlID0gdGhpcy5oaXN0b3J5UG9zID09PSAtMSA/IHRoaXMuY3VycmVudElucHV0IDogaGlzdG9yeVt0aGlzLmhpc3RvcnlQb3NdIHx8ICcnO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb21wdDtcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnc3JjL2Nzcy9mLXR3ZWx2ZS5jc3MnO1xuaW1wb3J0IFRhYnMgZnJvbSAnLi90YWJzJztcblxuLyoqXG4gKiBGLVR3ZWx2ZSBlbnRyeXBvaW50XG4gKi9cbmNsYXNzIEZUd2VsdmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5vbkF0dGFjaCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm9uRGV0YWNoID0gdW5kZWZpbmVkO1xuICAgIHRoaXMub25LZXlEb3duID0gdGhpcy5vbktleURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uS2V5VXAgPSB0aGlzLm9uS2V5VXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLmVuYWJsZShmYWxzZSk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLmVsLmlkID0gJ2YtdHdlbHZlJztcbiAgICB0aGlzLmVsLmNsYXNzTmFtZSA9IHN0eWxlcy5mVHdlbHZlO1xuICAgIHRoaXMuY29udGVudFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKG5ldyBUYWJzKHsgc2V0Q29udGVudDogdGhpcy5zZXRDb250ZW50LmJpbmQodGhpcykgfSkucmVuZGVyKCkpO1xuICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5jb250ZW50V3JhcHBlcik7XG4gICAgcmV0dXJuIHRoaXMuZWw7XG4gIH1cblxuICBzZXRDb250ZW50KGVsKSB7XG4gICAgaWYgKHRoaXMuY29udGVudCkge1xuICAgICAgdGhpcy5jb250ZW50V3JhcHBlci5yZW1vdmVDaGlsZCh0aGlzLmNvbnRlbnQpO1xuICAgIH1cbiAgICBpZiAoIWVsLmlzU2FtZU5vZGUodGhpcy5jb250ZW50KSkge1xuICAgICAgdGhpcy5jb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZChlbCk7XG4gICAgICB0aGlzLmNvbnRlbnQgPSBlbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250ZW50ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIGVuYWJsZShzaG93ID0gdHJ1ZSkge1xuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICBpZiAoc2hvdykge1xuICAgICAgdGhpcy5hdHRhY2goKTtcbiAgICB9XG4gICAgdGhpcy5lbmFibGVLZXlib2FyZFRyaWdnZXIoKTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmRldGFjaCgpO1xuICAgIHRoaXMuZGlzYWJsZUtleWJvYXJkVHJpZ2dlcigpO1xuICB9XG5cbiAgYXR0YWNoKCkge1xuICAgIGlmICh0aGlzLmF0dGFjaGVkID09PSB0cnVlIHx8IHRoaXMuYWN0aXZlICE9PSB0cnVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG4gICAgdGhpcy5hdHRhY2hlZCA9IHRydWU7XG4gICAgaWYgKHR5cGVvZiB0aGlzLm9uQXR0YWNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLm9uQXR0YWNoKCk7XG4gICAgfVxuICB9XG5cbiAgZGV0YWNoKCkge1xuICAgIGlmICh0aGlzLmF0dGFjaGVkICE9PSB0cnVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbC5pZCk7XG4gICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XG4gICAgdGhpcy5hdHRhY2hlZCA9IGZhbHNlO1xuICAgIGlmICh0eXBlb2YgdGhpcy5vbkRldGFjaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5vbkRldGFjaCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIHRoaXMua2V5RG93blN0YWNrICs9IGV2ZW50LmtleTtcbiAgICBpZiAodGhpcy5rZXlEb3duU3RhY2sudG9VcHBlckNhc2UoKSAhPT0gJ0YxMicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuYXR0YWNoZWQpIHtcbiAgICAgIHRoaXMuZGV0YWNoKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXR0YWNoKCk7XG4gICAgfVxuICB9XG5cbiAgb25LZXlVcCgpIHtcbiAgICB0aGlzLmtleURvd25TdGFjayA9ICcnO1xuICB9XG5cbiAgZW5hYmxlS2V5Ym9hcmRUcmlnZ2VyKCkge1xuICAgIHRoaXMua2V5RG93blN0YWNrID0gJyc7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlEb3duKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMub25LZXlVcCk7XG4gIH1cblxuICBkaXNhYmxlS2V5Ym9hcmRUcmlnZ2VyKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5RG93bik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLm9uS2V5VXApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZUd2VsdmU7XG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gJ3NyYy9jc3MvZi10d2VsdmUuY3NzJztcblxuLyoqXG4gKiBTaW5nbGUgdGFiIGZvciB0aGUgdGFiIGJhclxuICovXG5jbGFzcyBUYWIge1xuICBjb25zdHJ1Y3Rvcih7IG9uQ2xpY2ssIGxhYmVsLCBjb250ZW50IH0pIHtcbiAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5vbkNsaWNrID0gb25DbGljaztcbiAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLmVsLmNsYXNzTmFtZSA9IHN0eWxlcy50YWI7XG4gICAgdGhpcy5lbC5pbm5lclRleHQgPSB0aGlzLmxhYmVsO1xuICAgIHRoaXMuZWwub25jbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMsIHRoaXMuY29udGVudC5yZW5kZXIoKSk7XG4gICAgcmV0dXJuIHRoaXMuZWw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFiO1xuIiwiaW1wb3J0IFRhYiBmcm9tICcuL3RhYic7XG5pbXBvcnQgQ29uc29sZSBmcm9tICcuLi92aWV3cy9jb250ZW50L2NvbnNvbGUvY29uc29sZSc7XG5cbi8qKlxuICogVGFiIGJhciB3aXRoIGNvbnRlbnRcbiAqL1xuY2xhc3MgVGFicyB7XG4gIGNvbnN0cnVjdG9yKHsgc2V0Q29udGVudCB9KSB7XG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuc2V0Q29udGVudCA9IHNldENvbnRlbnQ7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdGFicyA9IHRoaXMuZ2V0VGFicygpO1xuICAgIHRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRhYi5yZW5kZXIoKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuZWw7XG4gIH1cblxuICBnZXRUYWJzKCkge1xuICAgIGNvbnN0IG9uQ2xpY2sgPSB0aGlzLnNldENvbnRlbnQuYmluZCh0aGlzKTtcbiAgICByZXR1cm4gW1xuICAgICAgbmV3IFRhYih7XG4gICAgICAgIG9uQ2xpY2s6IG9uQ2xpY2ssXG4gICAgICAgIGxhYmVsOiAnQ29uc29sZScsXG4gICAgICAgIGNvbnRlbnQ6IG5ldyBDb25zb2xlKClcbiAgICAgIH0pXG4gICAgXTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==