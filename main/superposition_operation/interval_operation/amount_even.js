'use strict';

function amount_even(collection) {

  //在这里写入代码
  //先选出偶数集合
  var even=[];
  for (var i = 0;i<collection.length;i++){
    if (collection[i]%2 == 0){
      even.push(collection[i]);
    }
  }

  //计算总数
  var sum = even.reduce(function(a,b){
    return a+b;
  })

  return sum;
}

module.exports = amount_even;
