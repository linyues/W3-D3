'use strict';
var calculate_median = function(collection){
    let arr1 = [];

    let a = null;
    for (let i = 0; i < collection.length; i++) {
        if (i % 2 != 0) {
            arr1.push(collection[i]);
        }
        if (arr1.length % 2 != 0) {
            a = arr1[collection[parseInt(arr1.length / 2 - 1)]];
        }

        if (arr1.length % 2 === 0) {
            a = (collection[arr1.length / 2 - 1] + collection[arr1.length / 2]);
        }
    }
    console.log(a);
    return a;
};
module.exports = calculate_median;
