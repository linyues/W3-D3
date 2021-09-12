'use strict';

function even_to_letter(collection) {

  //在这里写入代码
    //先选出偶数集合
    var even = [];
    for(var i = 0;i<collection.length;i++){
      if (collection[i]%2 ==0 ){
        even.push(collection[i]);
      }
    }
  
    //进行映射
    var result = even.map(function(item){
      return String.fromCharCode(item+96);
    })
  
    return result;
}

module.exports = even_to_letter;
