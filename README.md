<p align="center">
  <img src="https://i.imgur.com/9IKr8Tb.png"/>
</p>

# Reduss

[![Build Status](https://travis-ci.org/elcoosp/reduss.svg?branch=master)](https://travis-ci.org/elcoosp/reduss)
[![codecov](https://codecov.io/gh/elcoosp/reduss/branch/master/graph/badge.svg)](https://codecov.io/gh/elcoosp/reduss)
[![Greenkeeper badge](https://badges.greenkeeper.io/elcoosp/reduss.svg)](https://greenkeeper.io/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![david-dm](https://david-dm.org/elcoosp/reduss.svg)

A passionate love letter to Array.prototype.reduce()

## Functions

<dl>
<dt><a href="#atPathSet">atPathSet(path, data, [baseObject])</a> ⇒ <code>Object</code></dt>
<dd></dd>
<dt><a href="#leafs">leafs(obj, [previousPath])</a> ⇒ <code>Array.&lt;PathValueObject&gt;</code></dt>
<dd></dd>
<dt><a href="#mapKeys">mapKeys(mappers, objectToMap)</a> ⇒ <code>Object</code></dt>
<dd></dd>
<dt><a href="#mapKeysDeep">mapKeysDeep(mappers, objectToMap)</a> ⇒ <code>Object</code></dt>
<dd></dd>
<dt><a href="#path">path(path, objToAccess)</a> ⇒ <code>*</code></dt>
<dd></dd>
<dt><a href="#pickIndexes">pickIndexes(indexes, arrayOfElements)</a> ⇒ <code>Array.&lt;*&gt;</code></dt>
<dd></dd>
<dt><a href="#reduceIf">reduceIf(condition, reducer, array, [initAcc])</a> ⇒ <code>*</code></dt>
<dd></dd>
<dt><a href="#sumOnly">sumOnly(condition, numbers)</a> ⇒ <code>number</code></dt>
<dd></dd>
</dl>

<a name="atPathSet"></a>

## atPathSet(path, data, [baseObject]) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - A new object with the path provided equal to data, and optionnaly any values present in baseObject  

| Param        | Type                | Default             | Description                                                   |
| ------------ | ------------------- | ------------------- | ------------------------------------------------------------- |
| path         | <code>string</code> |                     | The path on which to set a new value                          |
| data         | <code>\*</code>     |                     | The data to set                                               |
| [baseObject] | <code>Object</code> | <code>Object</code> | The base object, serve as the initial accumulator, default {} |

**Example**  
```js
//returns { some: { prop: { one: 1, two: 2 } } }
atPathSet('some.prop.one', 1, atPathSet('some.prop.two', 2))
```
<a name="leafs"></a>

## leafs(obj, [previousPath]) ⇒ <code>Array.&lt;PathValueObject&gt;</code>
**Kind**: global function  
**Returns**: <code>Array.&lt;PathValueObject&gt;</code> - An array with object containing the leafs information (path/value)  

| Param          | Type                | Default            | Description                                                                                                                                                          |
| -------------- | ------------------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| obj            | <code>object</code> |                    | The object on which the leafs are selected                                                                                                                           |
| [previousPath] | <code>array</code>  | <code>array</code> | The accumulated path while iterating on obj properties, default to empty array, needed only for recursion, should not be a passed argument when calling the function |

**Example**  
```js
// returns [
//   { path: ['a', 'b', 'c'], value: 4 },
//   { path: ['a', 'b', 'e'], value: 6 },
//   { path: ['a', 'd', 'l'], value: 2 }
// ]
leafs({
    a: {
      b: { c: 4, e: 6 },
      d: { l: 2 }
    }
  })
```
<a name="mapKeys"></a>

## mapKeys(mappers, objectToMap) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - A new object with the mapped keys  

| Param       | Type                                           | Description                                                                                                             |
| ----------- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| mappers     | <code>Object.&lt;string, function()&gt;</code> | Object with keys corresponding to paths and value corresponding to maping function taking the value at objectToMap path |
| objectToMap | <code>Object</code>                            | The source object for the mapping                                                                                       |

**Example**  
```js
// returns { str: 'SOMEVALUE', num: 4 }
mapKeys(
   { str: x => x.toUpperCase(), num: n => n + 3 },
   { str: 'someValue',
     num: 1,
   }
)
```
<a name="mapKeysDeep"></a>

## mapKeysDeep(mappers, objectToMap) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - A new object with the mapped paths  

| Param       | Type                                           | Description                                                                                                                              |
| ----------- | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| mappers     | <code>Object.&lt;string, function()&gt;</code> | Object with keys corresponding to paths (or simple keys) and value corresponding to maping function taking the value at objectToMap path |
| objectToMap | <code>Object</code>                            | The source object for the mapping                                                                                                        |

**Example**  
```js
// returns {
// obj: {
//     prop: {
//        last: 8
//      }
//    }
// }
mapKeysDeep(
   {
     'obj.prop.last': x => x * 2
   },
   {
     obj: {
       prop: { last: 4 }
     }
   }
 )
```
<a name="path"></a>

## path(path, objToAccess) ⇒ <code>\*</code>
**Kind**: global function  
**Returns**: <code>\*</code> - The value corresponding to the path  
**Throws**:

- If we try to access a non existing property on objToAccess


| Param       | Type                | Description                                                        |
| ----------- | ------------------- | ------------------------------------------------------------------ |
| path        | <code>string</code> | A string representing the path to access (e.g. 'some.prop.nested') |
| objToAccess | <code>Object</code> | The accessed object                                                |

**Example**  
```js
// returns 6
path('a.b.c', { a: { b: { c: 6 } } })
```
<a name="pickIndexes"></a>

## pickIndexes(indexes, arrayOfElements) ⇒ <code>Array.&lt;\*&gt;</code>
**Kind**: global function  
**Returns**: <code>Array.&lt;\*&gt;</code> - The picked elements in the order of the indexes argument  
**Throws**:

- Can throw an error if oyu try to pick an index which does not exist on arrayOfElements


| Param           | Type                              | Description                                    |
| --------------- | --------------------------------- | ---------------------------------------------- |
| indexes         | <code>Array.&lt;number&gt;</code> | An array of indexes to pick (the order matter) |
| arrayOfElements | <code>Array.&lt;\*&gt;</code>     | The array to pick values from                  |

**Example**  
```js
// returns [6, 6, 2]
pickIndexes([2, 4, 1], [1, 2, 6, 1, 6])
```
<a name="reduceIf"></a>

## reduceIf(condition, reducer, array, [initAcc]) ⇒ <code>\*</code>
**Kind**: global function  
**Returns**: <code>\*</code> - The reduced value  

| Param     | Type                  | Default            | Description                                                                                                                                          |
| --------- | --------------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| condition | <code>function</code> |                    | Take as first argment the current value and next all the reducer argument (acumulator, index, array) and return true if the reducer should be called |
| reducer   | <code>function</code> |                    | Take all the reducer argument (acumulator, value, index, array), return the new accumuulator                                                         |
| array     | <code>Array</code>    |                    | An array to reduce                                                                                                                                   |
| [initAcc] | <code>\*</code>       | <code>Array</code> | The initial accumulator, default empty array                                                                                                         |

**Example**  
```js
// returns 6
reduceIf(x => x <= 3, (acc, v) => acc + v, [1,2,3,4], 0)
```
<a name="sumOnly"></a>

## sumOnly(condition, numbers) ⇒ <code>number</code>
**Kind**: global function  
**Returns**: <code>number</code> - The sum of matching numbers  

| Param     | Type                              | Description                            |
| --------- | --------------------------------- | -------------------------------------- |
| condition | <code>function</code>             | Retun true if the number can be summed |
| numbers   | <code>Array.&lt;number&gt;</code> | The array of numbers to sum            |

**Example**  
```js
// returns 6
sumOnly(x => x <= 3, [1,2,3,4])
```