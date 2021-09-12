'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
   //先选出奇数集合
   var odd =[];
   for(var i = 0;i<collection.length;i++){
     if (collection[i]%2 ==1){
       odd.push(collection[i]);
     }
   }
 
   //进行映射
   var result = odd.map(function (value) {
     return value*3+2;
   })
 
   return result;
}

module.exports = hybrid_operation_to_uneven;

