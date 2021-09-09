'use strict';
var collect_same_elements=(collection_a, collection_b)=>collection_a.filter(elem => collection_b.value.includes(elem));

module.exports = collect_same_elements;
