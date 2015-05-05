/**
 * Strict object type check. Only returns `true`
 * for plain JavaScript objects.
 *
 * @param  mixed   value The value to check.
 * @return Boolean
 */
module.exports = function(value) {
  return value !== null && typeof value === 'object' && value.constructor === Object;
}
