'use strict';

function collect_all_even(collection) {
  var collection_a=[1,2,3,4,5];
  var arr=[];
  for(let i=0;i<collection_a.length;i++){
    if(collection_a[i] % 2 == 0){
      arr.push(collection_a[i])
    }
    
  
}
return arr;
}
module.exports = collect_all_even;
