'use strict';

function get_integer_interval_2(number_a, number_b) {
//在这里写入代码
var arr = [];
if(number_b > number_a){
  var i = 0;
  while(number_b >= number_a){
    if(number_a %2 == 0){
      arr[i]=number_a;
      i++;
      number_a++;
    }
    else{
      number_a++;
    }
  }
}
else if(number_a > number_b){
  let i = 0;
  while(number_a >= number_b){
    if(number_a %2 == 0){
      arr[i]=number_a;
      i++;
      number_a--;
    }
    else{
      number_a--;
    }
  }
}
else if(number_a==number_b&&number_b%2==0){
  let i = 0;
  arr[i]=number_b;
}
return arr;
}

module.exports = get_integer_interval_2;
