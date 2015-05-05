/**
 * Type checking of Javascript native types.
 */
var _ = Object.create(null);

/**
 * Boolean type check.
 *
 * @param  mixed   value The value to check.
 * @return Boolean
 */
_.isBoolean = function(value) {
  return typeof value === 'boolean';
}

/**
 * Object type check.
 *
 * @param  mixed   value The value to check.
 * @return Boolean
 */
_.isObject = function(value) {
   return value !== null && typeof value === 'object';
}

/**
 * Strict object type check. Only returns `true`
 * for plain JavaScript objects.
 *
 * @param  mixed   value The value to check.
 * @return Boolean
 */
_.isPlainObject = function(value) {
  return _.isObject(value) && value.constructor === Object;
}

/**
 * Array type check.
 *
 * @param  mixed   value The value to check.
 * @return Boolean
 */
_.isArray = function(value) {
  return Array.isArray(value);
}

/**
 * Array type check.
 *
 * @param  mixed   data The value to check.
 * @return Boolean
 */
_.isTypedArray = function(value) {
  return !!(value && value.constructor && value.constructor.BYTES_PER_ELEMENT > 0);
}

/**
 * Scalar type check.
 *
 * @param  mixed   data The value to check.
 * @return Boolean
 */
_.isScalar = function(value) {
  return value === null ||
         typeof value === "boolean"  ||
         typeof value === "number"   ||
         typeof value === "string"   ||
         typeof value === "undefined";
}

/**
 * Various type check: isFunction, isString, isNumber, isDate, isRegExp.
 *
 * @param  mixed   value The object to check.
 * @return Boolean
 */
var types = ["Function", "String", "Number", "Date", "RegExp"];

types.forEach(function(name) {
  _["is" + name] = function(value) {
    return toString.call(value) === '[object ' + name + ']';
  };
});

/**
 * Extends an object with this module functions.
 *
 * @param Object object The object to extend.
 */
_.extend = function(object) {
  for (key in _) {
    object[key] = _[key];
  }
}

module.exports = _;
