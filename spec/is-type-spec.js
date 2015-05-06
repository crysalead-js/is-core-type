var _ = require('..');

describe('.isBoolean()', function() {

  it('returns true for plain objects', function() {

    expect(_.isBoolean(true)).toBe(true);
    expect(_.isBoolean(false)).toBe(true);

  });

  it('returns false for non plain objects', function() {

    expect(_.isBoolean(new Date())).toBe(false);
    expect(_.isBoolean([])).toBe(false);
    expect(_.isBoolean(null)).toBe(false);
    expect(_.isBoolean('')).toBe(false);
    expect(_.isBoolean(23)).toBe(false);
    expect(_.isBoolean(function(){})).toBe(false);

  });

});

describe('.isObject()', function() {

  it('returns true for objects', function() {

    expect(_.isObject(new Date())).toBe(true);
    expect(_.isObject([])).toBe(true);
    expect(_.isObject({})).toBe(true);

  });

  it('returns false for non objects', function() {

    expect(_.isObject(null)).toBe(false);
    expect(_.isObject('')).toBe(false);
    expect(_.isObject(23)).toBe(false);
    expect(_.isObject(false)).toBe(false);
    expect(_.isObject(function(){})).toBe(false);

  });

});

describe('.isPlainObject()', function() {

  it('returns true for plain objects', function() {

    expect(_.isPlainObject({})).toBe(true);

  });

  it('returns false for non plain objects', function() {

    expect(_.isPlainObject(new Date())).toBe(false);
    expect(_.isPlainObject([])).toBe(false);
    expect(_.isPlainObject(null)).toBe(false);
    expect(_.isPlainObject('')).toBe(false);
    expect(_.isPlainObject(23)).toBe(false);
    expect(_.isPlainObject(false)).toBe(false);
    expect(_.isPlainObject(function(){})).toBe(false);

  });

});

describe('.isArray()', function() {

  it('returns true for arrays', function() {

    expect(_.isArray([])).toBe(true);

  });

  it('returns false for non arrays', function() {

    expect(_.isArray(new Date())).toBe(false);
    expect(_.isArray({})).toBe(false);
    expect(_.isArray(null)).toBe(false);
    expect(_.isArray('')).toBe(false);
    expect(_.isArray(23)).toBe(false);
    expect(_.isArray(false)).toBe(false);
    expect(_.isArray(function(){})).toBe(false);

  });

});

describe('.isTypedArray()', function() {

  it('returns true for typed arrays', function() {

    expect(_.isTypedArray(new Int8Array())).toBe(true);
    expect(_.isTypedArray(new Int16Array())).toBe(true);
    expect(_.isTypedArray(new Int32Array())).toBe(true);
    expect(_.isTypedArray(new Uint8Array())).toBe(true);
    expect(_.isTypedArray(new Uint16Array())).toBe(true);
    expect(_.isTypedArray(new Uint32Array())).toBe(true);
    expect(_.isTypedArray(new Float32Array())).toBe(true);
    expect(_.isTypedArray(new Float64Array())).toBe(true);

  });

  it('returns false for non arrays', function() {

    expect(_.isTypedArray(new Date())).toBe(false);
    expect(_.isTypedArray({})).toBe(false);
    expect(_.isTypedArray(null)).toBe(false);
    expect(_.isTypedArray('')).toBe(false);
    expect(_.isTypedArray(23)).toBe(false);
    expect(_.isTypedArray(false)).toBe(false);
    expect(_.isTypedArray(function(){})).toBe(false);

  });

});

describe('.isScalar()', function() {

  it('returns true for typed arrays', function() {

    expect(_.isScalar(null)).toBe(true);
    expect(_.isScalar('')).toBe(true);
    expect(_.isScalar(23)).toBe(true);
    expect(_.isScalar(false)).toBe(true);
    expect(_.isScalar(undefined)).toBe(true);

  });

  it('returns false for non arrays', function() {

    expect(_.isScalar(new Date())).toBe(false);
    expect(_.isScalar({})).toBe(false);
    expect(_.isScalar(function(){})).toBe(false);

  });

});

describe('.isNumber()', function() {

  it('returns true for numbers', function() {

    expect(_.isNumber(23)).toBe(true);

  });

  it('returns false for non numbers', function() {

    expect(_.isNumber(new Date())).toBe(false);
    expect(_.isNumber({})).toBe(false);
    expect(_.isNumber(null)).toBe(false);
    expect(_.isNumber('')).toBe(false);
    expect(_.isNumber([])).toBe(false);
    expect(_.isNumber(false)).toBe(false);
    expect(_.isNumber(function(){})).toBe(false);

  });

});

describe('.isString()', function() {

  it('returns true for strings', function() {

    expect(_.isString('')).toBe(true);
    expect(_.isString('hello')).toBe(true);
    expect(_.isString("world")).toBe(true);

  });

  it('returns false for non strings', function() {

    expect(_.isString(new Date())).toBe(false);
    expect(_.isString({})).toBe(false);
    expect(_.isString(null)).toBe(false);
    expect(_.isString(23)).toBe(false);
    expect(_.isString([])).toBe(false);
    expect(_.isString(false)).toBe(false);
    expect(_.isString(function(){})).toBe(false);

  });

});

describe('.isDate()', function() {

  it('returns true for Date objects', function() {

    expect(_.isDate(new Date())).toBe(true);

  });

  it('returns false for non Date objects', function() {

    expect(_.isDate([])).toBe(false);
    expect(_.isDate({})).toBe(false);
    expect(_.isDate(null)).toBe(false);
    expect(_.isDate('')).toBe(false);
    expect(_.isDate(23)).toBe(false);
    expect(_.isDate(false)).toBe(false);
    expect(_.isDate(function(){})).toBe(false);

  });

});

describe('.isFunction()', function() {

  it('returns true for Function objects', function() {

    expect(_.isFunction(function(){})).toBe(true);

  });

  it('returns false for non Date objects', function() {

    expect(_.isFunction(new Date())).toBe(false);
    expect(_.isFunction([])).toBe(false);
    expect(_.isFunction({})).toBe(false);
    expect(_.isFunction(null)).toBe(false);
    expect(_.isFunction('')).toBe(false);
    expect(_.isFunction(23)).toBe(false);
    expect(_.isFunction(false)).toBe(false);

  });

});


describe('.isRegExp()', function() {

  it('returns true for RegExp objects', function() {

    expect(_.isRegExp(/^foobar$/)).toBe(true);
    expect(_.isRegExp(new RegExp('^foobar$/'))).toBe(true);

  });

  it('returns false for non RegExp objects', function() {

    expect(_.isRegExp(new Date())).toBe(false);
    expect(_.isRegExp([])).toBe(false);
    expect(_.isRegExp({})).toBe(false);
    expect(_.isRegExp(null)).toBe(false);
    expect(_.isRegExp('')).toBe(false);
    expect(_.isRegExp(23)).toBe(false);
    expect(_.isRegExp(false)).toBe(false);
    expect(_.isRegExp(function(){})).toBe(false);

  });

});
