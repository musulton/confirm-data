import Checks from '../Checks';

describe('Confirm data value and type', () => {
  const val = {
    str: 'test',
    emptyStr: '',
    number: 123,
    null: null,
    undefined: undefined,
    true: true,
    false: false,
    emptyArray: [],
    hasItem: [1],
    hasMultipleItems: [1, 2, 3],
    emptyObject: {},
    hasProp: { prop: 123 },
    fn1: () => true,
    fn2: function () {
      return true;
    },
  };

  describe('execute isEqual function', () => {
    test('should return true', () => {
      expect(Checks.isEqual(val.str, val.str)).toBeTruthy();
    });
    test('should return false', () => {
      expect(Checks.isEqual(val.str, val.number)).toBeFalsy();
    });
  });

  describe('execute isNull function', () => {
    test('should return true', () => {
      expect(Checks.isNull(val.null)).toBeTruthy();
    });
    test('should return false', () => {
      expect(Checks.isNull(val.undefined)).toBeFalsy();
      expect(Checks.isNull(val.str)).toBeFalsy();
    });
  });

  describe('execute isUndefined function', () => {
    test('should return true', () => {
      expect(Checks.isUndefined(val.undefined)).toBeTruthy();
    });
    test('should return false', () => {
      expect(Checks.isUndefined(val.null)).toBeFalsy();
    });
  });

  describe('execute isNotExist function', () => {
    test('should return true', () => {
      expect(Checks.isNotExist(val.undefined)).toBeTruthy();
      expect(Checks.isNotExist(val.null)).toBeTruthy();
    });
    test('should return false', () => {
      expect(Checks.isNotExist(val.str)).toBeFalsy();
    });
  });

  describe('execute isExist function', () => {
    test('should return true', () => {
      expect(Checks.isExist(val.str)).toBeTruthy();
    });
    test('should return false', () => {
      expect(Checks.isExist(val.null)).toBeFalsy();
      expect(Checks.isExist(val.undefined)).toBeFalsy();
    });
  });

  describe('execute isBoolean function', () => {
    test('should return true', () => {
      expect(Checks.isBoolean(val.true)).toBeTruthy();
      expect(Checks.isBoolean(val.false)).toBeTruthy();
    });
    test('should return false', () => {
      expect(Checks.isBoolean(val.str)).toBeFalsy();
    });
  });

  describe('execute isArray function', () => {
    test('should return true', () => {
      expect(Checks.isArray(val.emptyArray)).toBeTruthy();
      expect(Checks.isArray(val.hasItem)).toBeTruthy();
    });
    test('should return false', () => {
      expect(Checks.isArray(val.str)).toBeFalsy();
      expect(Checks.isArray(val.null)).toBeFalsy();
    });
  });

  describe('execute isObject function', () => {
    test('should return true', () => {
      expect(Checks.isObject(val.emptyObject)).toBeTruthy();
      expect(Checks.isObject(val.hasProp)).toBeTruthy();
    });
    test('should return false', () => {
      expect(Checks.isObject(val.str)).toBeFalsy();
      expect(Checks.isObject(val.null)).toBeFalsy();
    });
  });

  describe('execute isString function', () => {
    test('should return true', () => {
      expect(Checks.isString(val.str)).toBeTruthy();
    });
    test('should return false', () => {
      expect(Checks.isString(val.number)).toBeFalsy();
    });
  });

  describe('execute isNumber function', () => {
    test('should return true', () => {
      expect(Checks.isNumber(val.number)).toBeTruthy();
    });
    test('should return false', () => {
      expect(Checks.isNumber(val.str)).toBeFalsy();
    });
  });

  describe('execute isDigit function', () => {
    test('should return true', () => {
      expect(Checks.isDigit(val.number)).toBeTruthy();
    });
    test('should return false', () => {
      expect(Checks.isDigit(val.str)).toBeFalsy();
    });
  });

  describe('execute isFunction function', () => {
    test('should return true', () => {
      expect(Checks.isFunction(val.fn1)).toBeTruthy();
      expect(Checks.isFunction(val.fn2)).toBeTruthy();
    });
    test('should return false', () => {
      expect(Checks.isFunction(val.str)).toBeFalsy();
      expect(Checks.isFunction(val.null)).toBeFalsy();
    });
  });

  describe('execute isEmptyString function', () => {
    test('should return true', () => {
      expect(Checks.isEmptyString(val.emptyStr)).toBeTruthy();
    });
    test('should return false', () => {
      expect(Checks.isEmptyString(val.str)).toBeFalsy();
    });
  });

  describe('execute isNonEmptyString function', () => {
    test('should return true', () => {
      expect(Checks.isNonEmptyString(val.str)).toBeTruthy();
    });
    test('should return false', () => {
      expect(Checks.isNonEmptyString(val.emptyStr)).toBeFalsy();
    });
  });

  describe('execute isEmptyArray function', () => {
    test('should return true', () => {
      expect(Checks.isEmptyArray(val.emptyArray)).toBeTruthy();
    });
    test('should return false', () => {
      expect(Checks.isEmptyArray(val.hasItem)).toBeFalsy();
    });
  });

  describe('execute isNonEmptyArray function', () => {
    test('should return true', () => {
      expect(Checks.isNonEmptyArray(val.hasMultipleItems)).toBeTruthy();
    });
    test('should return false', () => {
      expect(Checks.isNonEmptyArray(val.emptyArray)).toBeFalsy();
    });
  });

  describe('execute isEmptyObject function', () => {
    test('should return true', () => {
      expect(Checks.isEmptyObject(val.emptyObject)).toBeTruthy();
    });
    test('should return false', () => {
      expect(Checks.isEmptyObject(val.hasProp)).toBeFalsy();
    });
  });

  describe('execute isTrue function', () => {
    test('should return true', () => {
      expect(Checks.isTrue(val.true)).toBeTruthy();
    });
    test('should return false', () => {
      expect(Checks.isTrue(val.false)).toBeFalsy();
    });
  });

  describe('execute isFalse function', () => {
    test('should return true', () => {
      expect(Checks.isFalse(val.false)).toBeTruthy();
    });
    test('should return false', () => {
      expect(Checks.isFalse(val.true)).toBeFalsy();
    });
  });

  describe('execute isInteger function', () => {
    test('should return true', () => {
      expect(Checks.isInteger(val.number)).toBeTruthy();
    });
    test('should return false', () => {
      expect(Checks.isInteger(val.str)).toBeFalsy();
    });
  });

  describe('execute isPositiveInteger function', () => {
    test('should return true', () => {
      expect(Checks.isPositiveInteger(val.number)).toBeTruthy();
    });
    test('should return false', () => {
      expect(Checks.isPositiveInteger(-val.number)).toBeFalsy();
    });
  });

  describe('execute isNonNegativeInteger function', () => {
    test('should return true', () => {
      const val = 0;
      expect(Checks.isNonNegativeInteger(val)).toBeTruthy();
    });
    test('should return false', () => {
      expect(Checks.isNonNegativeInteger(-val.number)).toBeFalsy();
    });
  });

  describe('execute hasOneItem function', () => {
    test('should return true', () => {
      expect(Checks.hasOneItem(val.hasItem)).toBeTruthy();
    });
    test('should return false', () => {
      expect(Checks.hasOneItem(val.hasMultipleItems)).toBeFalsy();
    });
  });

  describe('execute hasMultipleItems function', () => {
    test('should return true', () => {
      expect(Checks.hasMultipleItems(val.hasMultipleItems)).toBeTruthy();
    });
    test('should return false', () => {
      expect(Checks.hasMultipleItems(val.hasItem)).toBeFalsy();
    });
  });
});
