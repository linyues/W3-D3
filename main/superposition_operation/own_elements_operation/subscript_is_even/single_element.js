'use strict';
var single_element = function (collection) {
    let arr = [];
    let arr1 = [];
    for (let i = 0; i < collection.length; i++) {
        if (i % 2 != 0) {
            arr.push(collection[i]);
        }
    }
    for (let item of arr) {
        if (arr.indexOf(item) === arr.lastIndexOf(item)) {
            arr1.push(item);
        }
    }
    console.log(arr1);
    return arr1;
};
module.exports = single_element;
