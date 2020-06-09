const isEqual = (val1: any, val2: any): boolean => val1 === val2;

const isNull = (val: any): boolean => val === null;

const isUndefined = (val: any): boolean => typeof val === 'undefined';

const isNotExist = (val: any): boolean => isNull(val) || isUndefined(val);

const isExist = (val: any): boolean => !isNotExist(val);

const isBoolean = (val: any): boolean => isExist(val) && typeof val === 'boolean';

const isArray = (val: any): boolean => isExist(val) && Array.isArray(val);

const isObject = (val: any): boolean => isExist(val) && typeof val === 'object' && !isArray(val);

const isString = (val: any): boolean => isExist(val) && typeof val === 'string';

const isNumber = (val: any): boolean => isExist(val) && typeof val === 'number' && !Number.isNaN(val);

const isDigit = (val: any): boolean => {
  const digitPattern = /^\d+$/;
  return isExist(val) && digitPattern.test(val);
};

const isFunction = (val: any): boolean => isExist(val) && typeof val === 'function';

const isEmptyString = (val: any): boolean => isString(val) && isEqual(val.length, 0);

const isNonEmptyString = (val: any): boolean => isString(val) && val.length > 0;

const isEmptyArray = (val: any): boolean => isArray(val) && isEqual(val.length, 0);

const isNonEmptyArray = (val: any): boolean => isArray(val) && val.length > 0;

const isEmptyObject = (val: any): boolean => {
  if (isObject(val)) {
    const propertyNames = Object.getOwnPropertyNames(val);
    const symbolKeys = Object.getOwnPropertySymbols(val);
    const keysLength = propertyNames.length + symbolKeys.length;

    return isEqual(keysLength, 0);
  }
  return false;
};

const isTrue = (val: any): boolean => isBoolean(val) && val === true;

const isFalse = (val: any): boolean => isBoolean(val) && val === false;

const isInteger = (val: any): boolean => isNumber(val) && Number.isInteger(val);

const isPositiveInteger = (val: any): boolean => isInteger(val) && val > 0;

const isNonNegativeInteger = (val: any): boolean => isInteger(val) && val >= 0;

const hasOneItem = (val: any): boolean => isArray(val) && val.length === 1;

const hasMultipleItems = (val: any): boolean => isArray(val) && val.length > 1;

export default {
  isEqual,
  isNull,
  isUndefined,
  isNotExist,
  isExist,
  isBoolean,
  isArray,
  isObject,
  isString,
  isNumber,
  isDigit,
  isFunction,
  isEmptyString,
  isNonEmptyString,
  isEmptyArray,
  isNonEmptyArray,
  isEmptyObject,
  isTrue,
  isFalse,
  isInteger,
  isPositiveInteger,
  isNonNegativeInteger,
  hasOneItem,
  hasMultipleItems,
};
