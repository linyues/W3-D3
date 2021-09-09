'use strict';

var compute_average=(collection)=>collection.reduce((x, y) => x + y) / collection.length;

module.exports = compute_average;
