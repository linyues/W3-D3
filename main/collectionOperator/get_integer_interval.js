'use strict';

var get_integer_interval=(number_a, number_b) =>
  //在这里写入代码
 { var arr = [];
  if(number_a<number_b){
    let i = 0;
    while(number_a <= number_b){
      arr[i]=number_a;
      i++;
      number_a++;
    }

  }
  else if(number_a>number_b){
    let i = 0;
    while(number_a >= number_b){
      arr[i]=number_a;
      i++;
      number_a--;
    }
  }
  else if(number_a == number_b){
    let i = 0;
    arr[i]=number_a;
  }
return arr;

 }
module.exports = get_integer_interval;

