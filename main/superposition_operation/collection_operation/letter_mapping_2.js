'use strict';

function average_to_letter(collection) {

  //在这里写入代码
    //先求平均数
    var sum = collection.reduce(function(a,b){
      return a+b;
    })
    var average = Math.round(sum/collection.length);
  
    //转为字母
    return String.fromCharCode(average+96);
}

module.exports = average_to_letter;

