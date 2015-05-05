/**
 * Scalar type check.
 *
 * @param  mixed   data The value to check.
 * @return Boolean
 */
module.exports = function(value) {
  return value === null ||
         typeof value === "boolean"  ||
         typeof value === "number"   ||
         typeof value === "string"   ||
         typeof value === "undefined";
}
