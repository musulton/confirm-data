# confirm data
A collection of useful utilities for conditioning.

**Install with npm like this ↓**
```bash
$ npm install confirm-data
```

## Usage

**Only get a specific collection**
```js
const { keyword /** example: isEqual, isNull, ... */ } = require('confirm-data');
```
Also you can use it within typescript, like this ↓
```js
import { keyword /** example: isEqual, isNull, ... */ } from 'confirm-data';
```
**Keyword** means the function provided by confirm-data packages.

## API

### isEqual

Make sure whether value 1 and value 2 are equal.

**Params**

* `any` **{any}**: validation
* `any` **{any}**: validation
* `returns` **{Boolean}**: true if value 1 and value 2 are equal, else false.

**Example**

```js
isEqual('test', 'test')
//=> true
isEqual(1, 1)
//=> true
```

### isNull

Make sure whether value is null.

**Params**

* `any` **{any}**: validation
* `returns` **{Boolean}**: true if value is null, else false.

**Example**

```js
isNull(null)
//=> true
```

### isUndefined

Make sure whether type of value is undefined.

**Params**

* `any` **{any}**: validation
* `returns` **{Boolean}**: true if value is null, else false.

**Example**

```js
isUndefined(undefined)
//=> true
```

### isNotExist

Make sure whether value is null or undefined, therefore "not exist".

**Params**

* `any` **{any}**: validation
* `returns` **{Boolean}**: true if value is null or undefined, else false.

**Example**

```js
isNotExist(null)
//=> true
isNotExist(undefined)
//=> true
```

### isExist

Make sure whether value is not null and not undefined, therefore "exist"

**Params**

* `any` **{any}**: validation
* `returns` **{Boolean}**: true if value is not null and not undefined, else false.

**Example**

```js
isExist('test')
//=> true
```

### isBoolean

Make sure whether value is of type Boolean.

**Params**

* `any` **{any}**: validation
* `returns` **{Boolean}**: true if value is of type Boolean, else false.

**Example**

```js
isBoolean(false)
//=> true
```

### isArray

Make sure whether value is of type Array.

**Params**

* `any` **{any}**: validation
* `returns` **{Boolean}**: true if value is of type Array, else false.

**Example**

```js
isArray([1, 'test'])
//=> true
```

### isObject

Make sure whether value is of type Object.

**Params**

* `any` **{any}**: validation
* `returns` **{Boolean}**: true if value is of type Object, else false.

**Example**

```js
isObject({ prop: 'test' })
//=> true
```

### isString

Make sure whether value is of type String.

**Params**

* `any` **{any}**: validation
* `returns` **{Boolean}**: true if value is of type String, else false.

**Example**

```js
isString('test')
//=> true
```

### isNumber

Make sure whether value is of type Number.

**Params**

* `any` **{any}**: validation
* `returns` **{Boolean}**: true if value is of type Number, else false.

**Example**

```js
isNumber(123)
//=> true
```

### isDigit

Make sure whether value is of consist of Digit only.

**Params**

* `any` **{any}**: validation
* `returns` **{Boolean}**: true if value is consist of Digit only, else false.

**Example**

```js
isDigit('123')
//=> true
isDigit(123)
//=> true
```

### isFunction

Make sure whether value is of type Function.

**Params**

* `any` **{any}**: validation
* `returns` **{Boolean}**: true if value is of type Function, else false.

**Example**

```js
isFunction(() => console.log('test'))
//=> true
```

### isEmptyString

Make sure whether value is of type String, and has 0 characters.

**Params**

* `any` **{any}**: validation
* `returns` **{Boolean}**: true if value is of type String and has 0 characters, else false.

**Example**

```js
isEmptyString('')
//=> true
```

### isNonEmptyString

Make sure whether value is of type String, and has at least 1 character.

**Params**

* `any` **{any}**: validation
* `returns` **{Boolean}**: true if value is of type String and has at least 1 character, else false.

**Example**

```js
isNonEmptyString('test')
//=> true
```

### isEmptyArray

Make sure whether value is of type Array and has no elements.

**Params**

* `any` **{any}**: validation
* `returns` **{Boolean}**: true if value is of type Array and has no elements, else false.

**Example**

```js
isEmptyArray([])
//=> true
```

### isNonEmptyArray

Make sure whether value is of type Array and has at least one element.

**Params**

* `any` **{any}**: validation
* `returns` **{Boolean}**: true if value is of type Array and has at least one element, else false.

**Example**

```js
isNonEmptyArray([])
//=> true
```

### isEmptyObject

Make sure whether value is of type Object and has no keys, including non-enumerable properties, and symbols.

**Params**

* `any` **{any}**: validation
* `returns` **{Boolean}**: true if value is of type Object and is "empty", else false.

**Example**

```js
isEmptyObject([])
//=> true
```

### isTrue

Make sure whether value is of type Boolean and is true.

**Params**

* `any` **{any}**: validation
* `returns` **{Boolean}**: true if value is of type Boolean and is true, else false.

**Example**

```js
isTrue(true)
//=> true
```

### isFalse

Make sure whether value is of type Boolean and is false

**Params**

* `any` **{any}**: validation
* `returns` **{Boolean}**: true if value is of type Boolean and is false, else false.

**Example**

```js
isFalse(false)
//=> true
```

### isInteger

Make sure whether value is of type Number and is Integer.

**Params**

* `any` **{any}**: validation
* `returns` **{Boolean}**: true if value is of type Number, else false.

**Example**

```js
isInteger(123)
//=> true
```

### isPositiveInteger

Make sure whether value is an Integer and greater than 0.

**Params**

* `any` **{any}**: validation
* `returns` **{Boolean}**: true if value is an Integer and greater than 0, else false.
**Example**

```js
isPositiveInteger(123)
//=> true
```

### isNonNegativeInteger

Make sure whether value is an Integer and greater or equal to 0.

**Params**

* `any` **{any}**: validation
* `returns` **{Boolean}**: true if value is an Integer and greater or equal to 0, else false.

**Example**

```js
isNonNegativeInteger(0)
//=> true
```

### hasOneItem

Make sure whether value is an Array and its length is 1.

**Params**

* `any` **{any}**: validation
* `returns` **{Boolean}**: true if value is an Array and its length is 1, else false.

**Example**

```js
hasOneItem([1])
//=> true
```

### hasMultipleItems

Make sure whether value is an Array and its length is more than 1.

**Params**

* `any` **{any}**: validation
* `returns` **{Boolean}**: true if value is an Array and its length is greater than 1, else false.

**Example**

```js
hasMultipleItems([1, 2, 3])
//=> true
```

## Author

**Muhammad Sulton**

+ [github/musulton](https://github.com/musulton)
+ [twitter/musulton](http://twitter.com/musulton)

## License

Copyright © 2020 Muhammad Sulton
Released under the MIT license.