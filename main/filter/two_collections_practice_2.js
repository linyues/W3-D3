'use strict';
var choose_no_common_elements=(collection_a, collection_b)=>collection_a.filter(elem => !collection_b.includes(elem));
  
  
  module.exports = choose_no_common_elements;

