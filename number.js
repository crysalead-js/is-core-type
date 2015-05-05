/**
 * Number type check.
 *
 * @param  mixed   value The value to check.
 * @return Boolean
 */
module.exports = function(value) {
  return typeof value == "number";
};