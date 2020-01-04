Array methods used in this project.

### `Array.prototype.some`
   used to check whether at least one element of an array satisfies a given condition or not.
   
**``usage``** : Array.some(callback, [, thisArg])

**``callback``** takes 3 parameters.

currentValue, index(optional), array(optional)
    
**``example usage``** : arr.some(each => each.key === 'value here')
returns true or false as like includes method.

------------
### `Array.prototype.every`
checks whether every element of array satisfies a given condition or not.
this method returns a boolean value.
usage is just like the **``some``** method above.

------------
### `Array.prototype.reduce`

i would show the usage with a simple basic example.

the method takes 2 arguments at basic.

first one is the reducer function and the second one is
the first value.

it is recommended to give the initial first value as second parameter.

if you don't provide it to the method, it uses the first element of array as the
accumulator and starts at the second element.

also reduce method can return an object and can be used for grouping objects
or counting objects in array.

------------
### `Array.prototype.includes`

checks whether an array includes given element or not.

cannot be used to check an array includes an object.

by meaning that it cannot be used unless two items are references to the same object.

you can use Array.prototype's **``some``** method to achieve this.


------------

### `Array.prototype.isArray()`
checks whether the given parameter is array or not.

 -  **``usage``** : Array.isArray(obj)

------------


### `ES6 Map()`
Map is a collection of keyed data items, just like an Object.

But the main difference is that Map allows keys of any type.

   - **``new Map()``** creates the Map.

   - **``map.set(key,value)``** stores value by the key.

   - **``map.get(key)``** returns the value with the specified key, undefined if key not exists.





