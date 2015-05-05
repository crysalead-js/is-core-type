/**
 * Array type check.
 *
 * @param  mixed   data The value to check.
 * @return Boolean
 */
module.exports = function(value) {
  return !!(value && value.constructor && value.constructor.BYTES_PER_ELEMENT > 0);
}
