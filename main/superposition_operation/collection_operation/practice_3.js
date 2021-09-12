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

  //奇数*3+5,得到数列list
  var list = odd.map(function(item){
    return item*3+5;
  })

  //求和
  var sum = list.reduce(function (a,b){
    return a+b;
  } )

  return sum;
}

module.exports = hybrid_operation_to_uneven;

