'use strict';
var collect_same_elements=(collection_a, collection_b)=>{
  
  let arr =[];
  for (var i of collection_a) {
    for (var k in i) {
      }
      arr.push(i[k]);
  }
return arr.filter(elem => collection_b.value.includes(elem));
}
module.exports = collect_same_elements;
