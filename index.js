/**
 * Type checking of Javascript native types.
 */
var isObject = require("./object.js");
var isPlainObject = require("./plain-object.js");
var isArray = require("./array.js");
var isTypedArray = require("./typed-array.js");
var isNumber = require("./number.js");
var isString = require("./string.js");
var isBoolean = require("./boolean.js");
var isDate = require("./date.js");
var isRegExp = require("./reg-exp.js");
var isFunction = require("./function.js");
var isScalar = require("./scalar.js");

var is = {
  isObject: isObject,
  isPlainObject: isPlainObject,
  isArray: isArray,
  isTypedArray: isTypedArray,
  isNumber: isNumber,
  isString: isString,
  isBoolean: isBoolean,
  isDate: isDate,
  isRegExp: isRegExp,
  isFunction: isFunction,
  isScalar: isScalar
};

/**
 * Extends an object with this module functions.
 *
 * @param Object object The object to extend.
 */
is.extend = function(object) {
  for (key in is) {
    object[key] = is[key];
  }
}

module.exports = is;
