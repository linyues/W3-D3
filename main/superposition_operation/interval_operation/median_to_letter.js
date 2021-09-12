'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  //计算中位数

  var mediumIndex =Math.round((collection.length -1)/2);
  var medium = collection[mediumIndex];

  function numToChar (number) {
    if(number>0&&number<=26){
      return String.fromCharCode(number+96)
    }else if(number >=27 && number <=52){
      var resulta = String.fromCharCode(number+70);
      return 'a'+resulta;
    }else if (number>=53){
      var resultb = String.fromCharCode(number+44);
      return 'b'+resultb;
    }
  }

  return  numToChar(medium);
}

module.exports = median_to_letter;
