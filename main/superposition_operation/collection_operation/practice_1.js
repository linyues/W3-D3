'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  //每个数*3+2,得到数列list
  var list = collection.map(function(item){
    return item*3+2;
  })

  //求和
  var sum = list.reduce(function (a,b){
    return a+b;
  } )

  return sum;
}

module.exports = hybrid_operation;

