'use strict';

function average_uneven(collection) {

  //在这里写入代码
   //先选出奇数集合
   var odd=[];
   for (var i = 0;i<collection.length;i++){
     if (collection[i]%2 == 1){
       odd.push(collection[i]);
     }
   }
 
   //计算总数
   var sum = odd.reduce(function(a,b){
     return a+b;
   })
 
   return sum/odd.length;
}

module.exports = average_uneven;
