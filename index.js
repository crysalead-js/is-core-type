/**
 * Type checking of Javascript native types.
 */

/**
 * Object type check.
 *
 * @param  mixed   value The value to check.
 * @return Boolean
 */
function isObject(value) {
   return value !== null && typeof value === 'object';
}

/**
 * Strict object type check. Only returns `true`
 * for plain JavaScript objects.
 *
 * @param  mixed   value The value to check.
 * @return Boolean
 */
function isPlainObject(value) {
  return isObject(value) && value.constructor === Object;
}

/**
 * Array type check.
 *
 * @param  mixed   value The value to check.
 * @return Boolean
 */
function isArray(value) {
  return Array.isArray(value);
};

/**
 * Number type check.
 *
 * @param  mixed   value The value to check.
 * @return Boolean
 */
function isNumber(value) {
  return typeof value == "number";
};

/**
 * String type check.
 *
 * @param  mixed   value The value to check.
 * @return Boolean
 */
function isString(value) {
  return typeof value === "string";
};

/**
 * Boolean type check.
 *
 * @param  mixed   value The value to check.
 * @return Boolean
 */
function isBoolean(value) {
  return typeof value === 'boolean';
};


/**
 * Array type check.
 *
 * @param  mixed   data The value to check.
 * @return Boolean
 */
function isTypedArray(value) {
  return !!(value && value.constructor && value.constructor.BYTES_PER_ELEMENT > 0);
}

/**
 * Function type check.
 *
 * @param  mixed   value The value to check.
 * @return Boolean
 */
function isFunction(value) {
  return typeof value == "function";
};

/**
 * Date type check.
 *
 * @param  mixed   value The value to check.
 * @return Boolean
 */
function isDate(value) {
  return toString.call(value) === "[object Date]";
};


/**
 * Number type check.
 *
 * @param  mixed   value The value to check.
 * @return Boolean
 */
function isRegExp(value) {
  return toString.call(value) === "[object RegExp]";
};

/**
 * Scalar type check.
 *
 * @param  mixed   data The value to check.
 * @return Boolean
 */
function isScalar(value) {
  return value === null ||
         typeof value === "boolean"  ||
         typeof value === "number"   ||
         typeof value === "string"   ||
         typeof value === "undefined";
}

module.exports = {
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
