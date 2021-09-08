'use strict';

var get_letter_interval=(number_a, number_b)=> {
  //在这里写入代码
  var str=['0','a','b','c','d','e'];
  var arr=[];
  if(number_a < number_b){
    var i = 0;
    while(number_a <= number_b){
      arr.push(str[number_a]);
      i++;
      number_a++;
    }
  }
  else if(number_a > number_b){
    var i = 0;
    while(number_a >= number_b){
      arr.push(str[number_a]);
      i++;
      number_a--;
    }
  }
  else if(number_a == number_b){
      
      arr.push(str[number_a]);
    }
  
return arr;
  }
module.exports = get_letter_interval;
