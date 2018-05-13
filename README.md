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
<dt><a href="#isSimpleObj">isSimpleObj(val)</a> ⇒ <code>boolean</code></dt>
<dd></dd>
<dt><a href="#mapKeys">mapKeys(mappers, objectToMap)</a> ⇒ <code>Object</code></dt>
<dd></dd>
<dt><a href="#mapKeysDeep">mapKeysDeep(mappers, objectToMap)</a> ⇒ <code>Object</code></dt>
<dd></dd>
<dt><a href="#onObjLeafs">onObjLeafs(fn, obj, [path])</a> ⇒ <code>Void</code></dt>
<dd></dd>
<dt><a href="#path">path(path, objToAccess)</a> ⇒ <code>*</code></dt>
<dd></dd>
<dt><a href="#pickIndexes">pickIndexes(indexes, arrayOfElements)</a> ⇒ <code>Array.&lt;*&gt;</code></dt>
<dd></dd>
<dt><a href="#sumOnly">sumOnly(condition, numbers)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#throwE">throwE(errorMessage)</a></dt>
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

<a name="isSimpleObj"></a>

## isSimpleObj(val) ⇒ <code>boolean</code>
**Kind**: global function  
**Returns**: <code>boolean</code> - Return true if val is an object but not a function, array nor a value  

| Param | Type            | Description       |
| ----- | --------------- | ----------------- |
| val   | <code>\*</code> | The value to test |

<a name="mapKeys"></a>

## mapKeys(mappers, objectToMap) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - A new object with the mapped keys  

| Param       | Type                                           | Description                                                                                                            |
| ----------- | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| mappers     | <code>Object.&lt;string, function()&gt;</code> | Object with keys corresponding to keys and value corresponding to maping function taking the value at objectToMap path |
| objectToMap | <code>Object</code>                            | The source object for the mapping                                                                                      |

<a name="mapKeysDeep"></a>

## mapKeysDeep(mappers, objectToMap) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - A new object with the mapped paths  

| Param       | Type                                           | Description                                                                                                                              |
| ----------- | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| mappers     | <code>Object.&lt;string, function()&gt;</code> | Object with keys corresponding to paths (or simple keys) and value corresponding to maping function taking the value at objectToMap path |
| objectToMap | <code>Object</code>                            | The source object for the mapping                                                                                                        |

<a name="onObjLeafs"></a>

## onObjLeafs(fn, obj, [path]) ⇒ <code>Void</code>
**Kind**: global function  
**Returns**: <code>Void</code> - Nothing  

| Param  | Type                  | Default            | Description                                                                                                                                                    |
| ------ | --------------------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fn     | <code>function</code> |                    | The callback receiving the path and value of the leaf as an object                                                                                             |
| obj    | <code>object</code>   |                    | The object on which the leafs are selected                                                                                                                     |
| [path] | <code>array</code>    | <code>array</code> | The accumulated path while iterating on obj properties, default to empty, needed only for recursion, should not be a passed argument when calling the function |

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

<a name="pickIndexes"></a>

## pickIndexes(indexes, arrayOfElements) ⇒ <code>Array.&lt;\*&gt;</code>
**Kind**: global function  
**Returns**: <code>Array.&lt;\*&gt;</code> - The picked elemnts in the order from indexes argument  
**Throws**:

- Can throw an error if oyu try to pick an index which does not exist on arrayOfElements


| Param           | Type                              | Description                                    |
| --------------- | --------------------------------- | ---------------------------------------------- |
| indexes         | <code>Array.&lt;number&gt;</code> | An array of indexes to pick (the order matter) |
| arrayOfElements | <code>Array.&lt;\*&gt;</code>     | The array to pick values from                  |

<a name="sumOnly"></a>

## sumOnly(condition, numbers) ⇒ <code>number</code>
**Kind**: global function  
**Returns**: <code>number</code> - The sum of matching numbers  

| Param     | Type                              | Description                            |
| --------- | --------------------------------- | -------------------------------------- |
| condition | <code>function</code>             | Retun true if the number can be summed |
| numbers   | <code>Array.&lt;number&gt;</code> | The array of numbers to sum            |

<a name="throwE"></a>

## throwE(errorMessage)
**Kind**: global function  
**Throws**:

- Throw a new error with the provided message


| Param        | Type                | Description       |
| ------------ | ------------------- | ----------------- |
| errorMessage | <code>string</code> | The error message |

