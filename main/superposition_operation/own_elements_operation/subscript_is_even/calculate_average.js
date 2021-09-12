'use strict';
var calculate_average = function(collection){
    var even=[];
    for (var i = 0;i<collection.length;i++){
      if (i%2 == 0&&i!=0){
        even.push(collection[i]);
      }
    }
  
    //计算总数
    var sum = even.reduce(function(a,b){
      return a+b;
    })
  
  //  return Math.floor(sum/even.length);
    return sum/even.length;
};
module.exports = calculate_average;
