'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Returns any input value.
 * 
 * @param {Anything} anything: the input whose value is being determined.
 */ 
 
function identity(anything) {
    return anything;
}

/**
 * typeOf: Returns any input type as a string (e.g., "number", "boolean", "object")
 * 
 * @param {Anything} anything: the input whose type is returned as a string.
 */ 

function typeOf(anything) {
    if (Array.isArray(anything)) {
        return "array";
    }
    else if (anything === null) {
        return "null";
    }
    else {
        return typeof anything;   
    }
}

/**
 * first: Designed to loop over an <array> and return the first <number> of elements
 * within the <array>. For example, if <number> = 3, this function will return the first
 * three elements within the <array>. If <number> is not given or is not a number, 
 * this function returns first element of the <array>. If <array> is not an array,
 * or is the given <number> is less than zero, this function returns an empty array ([]).
 * If the given <number> is greater than the length of the array, this function
 * returns the entire array.
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Number} number: The number of elements to check the function against;
 * function will return this many elements, starting with the first element
 * in the array and going in order (if none of the other above conditions are true).
 */

function first(array, number) {
    if (typeOf(array) !== "array") {
        return [];
    } 
    else if (typeOf(number) !== "number") {
        return array[0];
    }
    else if (number < 0) {
        return [];
    }
    else if (number > array.length) {
        return array;
    }
    else {
        var newArray = [];
        for (var x = 0; x < number; x++) {
                newArray.push(array[x]);
            }
       }
        return newArray;
}

/**
 * last: Designed to loop over an <array> backwards and return the last <number> 
 * of elements within the <array>. For example, if <number> = 3, this function 
 * will return the last three elements within the <array>. If <number> is not 
 * given or is not a number, this function returns last element of the <array>. 
 * If <array> is not an array, or is the given <number> is less than zero, 
 * this function returns an empty array ([]). If the given <number> is greater 
 * than the length of the array, this function returns the entire array.
 * 
 * @param {Array} array: The array over which to iterate (decrementing)
 * @param {Number} number: The number of elements to check the function against;
 * function will return this many elements, starting with the last element in 
 * the array and going in reverse order (if none of the other above conditions
 * are true).
 */

function last(array, number) {
    if (typeOf(array) !== "array") {
        return [];
    } 
    else if (typeOf(number) !== "number") {
        return array[array.length-1];
    }
    else if (number < 0) {
        return [];
    }
    else if (number > array.length) {
        return array;
    }
    else {
        var newArray = [];
        for (var x = (number - (number - 1)); x <= number; x++) {
                newArray.push(array[x]);
            }
       }
        return newArray;
}

/**
 * each: Designed to loop over a collection, Array or Object, and apply the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
 
function each(collection, action) {
    if(Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}

/**
 * function: Designed to loop over an Array and return the index of the
 * first occurrence of a given Value, val. If Value is not present, returns -1.
 * 
 * @param {Array} array: The array being incremented through.
 * @param {Value} val: The Value whose presence and index is being checked
 * within the Array.
 */

function indexOf(array, val) {
    for (var x = 0; x < array.length; x++) {
            if (array[x] === val) {
                return x;
            }
        }
    return -1;
}

/**
 * filter: Designed to iterate through an Array and return a new Array of values
 * for which calling a Function proves true -- "filter" out the falsy values.
 * 
 * @param {Array} array: The set of values the Function is being called against.
 * @param {Function} action: The Function being applied to the values in the
 * array in order to return the "filter"ed array of truthy values.
 */

function filter(array, action) {
    var newArray = [];
    each(array, function (ell, x, arr) {
        if (action(ell, x, arr) === true) {
            newArray.push(ell);
        }
    });
    return newArray;
}

/**
 * reject: Designed to iterate through an Array and return a new Array of values
 * for which calling a Function proves false -- "reject" the truthy values.
 * 
 * @param {Array} array: The set of values the Function is being called against.
 * @param {Function} action: The Function being applied to the values in the
 * Array in order to return the array of falsy values.
 */

function reject(array, action) {
    return filter(array, function(ell, x, arr) {
        return !action(ell, x, arr);
        });
}

/**
 * partition: Designed to iterate through an Array, and return an Array that
 * contains within it two Arrays: one Array of values for which calling a 
 * Function proves true, and another Array of values for which calling a 
 * Function proves false.
 * 
 * @param {Array} array: The set of values the Function is being called against.
 * @param {Function} action: The Function being applied to the values in the
 * Array to determine which are truthy and which are falsy.
 */

function partition(array, action) {
    var newArray = [];
    newArray.push(filter(array, action), reject(array, action));
    return newArray;
}

/**
 * unique: Designed to iterate through an Array and return a new Array in which
 * all duplicate values (contained within the original Array) have been removed.
 * 
 * @param {Array} array: The set of values being incremented through.
 */
 
function unique(array) {
    var uniqueArray = [];
    each(array, function(ell, x, arr) {
        if (indexOf(uniqueArray, ell) === -1) {
        uniqueArray.push(ell);
    }
});
    return uniqueArray;
}

/**
 * map: Designed to loop over a collection (Array or Object), apply the 
 * action Function to each value in the collection, save the return value of each 
 * element within the collection into a new Array, and return this new Array.
 * 
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection in order to determine the Array of new values being returned.
 */

function map(collection, action) {
  var newCollection = [];
  each(collection, function(ell, x, arr) {
      newCollection.push(action(ell, x, arr));
  });
  return newCollection;
}

/**
 * pluck: Designed to iterate through an Array of Objects, determine the values
 * that correspond throughout the Array to a specific Property, save those values
 * within a new Array, and return this new Array.
 * 
 * @param {Array of Objects} array: The Array of Objects being iteratred through.
 * @param {Property} property: The specific property ("key" in a key-value pair)
 * being checked against the Array of Objects to determine the corresponding values.
 */
 
function pluck(array, property) {
    var newPropArray = [];
    map(array, function (ell, x, arr) {
        newPropArray.push(ell[property]);
    });
    return newPropArray;
}

/**
 * contains: Designed to determine if an Array contains a certain Value, return
 * true if it does, and return false otherwise.
 * 
 * @param {Array} array: The Array being iterated through to determine if the 
 * Value is present.
 * @param {Value} val: The Value being searched for within the Array.
 */

function contains (array, value) {
    return indexOf(array, value) < 0 ? false : true;
}

/**
 * every: Designed to call a Function against every element within a Collection
 * {Object or Array} and determine if every return value is true.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The function being run against every element to
 * determine whether every value returns true.
 */
 
function every(collection, action){
        var check = true;
    each(collection, function (ell, x, arr) {
    if (action) {
        if (!action(ell, x, arr)) {
                check = false;
            }
        }
    else {
            if (ell === false) {
                check = false;
            }
        }
    });
    return check;
}

/**
 * some: Designed to call a Function against every element within a Collection
 * {Object or Array} and determine if at least one return value is true.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The function being run against every element to
 * determine whether at least one value returns true.
 */

function some(collection, action) {
    var check = false;
    each(collection, function (ell, x, arr) {
    if (action) {
        if (action(ell, x, arr)) {
                check = true;
            }
    }
    else {
            if (ell === true) {
                check = true;
            }
    console.log(ell);
        }
    });
    return check;
}

/**
 * reduce: Designed to call a Function against an Array of values and reduce the
 * Array to single value by re-calling the Function against the next element of
 * the Array while incorporating the result of the previous call until all
 * elements have iterated through.
 * 
 * @param {Array} array: the set of values being called against
 * @param {Function} action: the Function being called throughout
 * @param {Value} seed: the initial value used during the first Function call 
 * (subsequent calls use the result of the previous call)
 */

function reduce(array, action, seed) {
      var prev = 0;
      each(array, function(ell, x, arr){
        if (seed < 0) {seed = array[0];}
        if (typeof(seed) === "undefined") {seed = 1}
        if (!prev) {prev = seed;}
        prev = action(prev, ell, x);
    });
        return prev;
}

/**
 * extend: Designed to copy the properties of an endless number of objects back
 * to an original Object.
 * 
 * @param {Object} objOne: the original Object onto which properties of 
 * subsequent passed objects will be copied.
 */

function extend(objOne){
    each(arguments, function(newObj) {
        each(newObj, function(value, key) {
            objOne[key] = value;
        });
    });
return objOne;
}
 

module.exports.identity = identity;
module.exports.typeOf = typeOf;
module.exports.first = first;
module.exports.last = last;
module.exports.each = each;
module.exports.indexOf = indexOf;
module.exports.filter = filter;
module.exports.reject = reject;
module.exports.partition = partition;
module.exports.unique = unique;
module.exports.map = map;
module.exports.pluck = pluck;
module.exports.contains = contains;
module.exports.every = every;
module.exports.some = some;
module.exports.reduce = reduce;
module.exports.extend = extend;