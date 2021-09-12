'use strict';
var even_group_calculate_average = function(collection){
 //选出偶数位
 var evenIndex = [];
 for(var i  = 0;i<collection.length;i++){
   if (i%2==1){
     evenIndex.push(collection[i]);
   }

 }
 console.log(evenIndex);
 //选出偶数
 var even = [];
 for(var j = 0;j<evenIndex.length;j++){
   if (evenIndex[j]%2==0){
     even.push(evenIndex[j]);
   }
 }
 console.log("even is"+ even);
 //判断是否有偶数

 if(even.length>0){
   //按位数分组
   var three =[];
   var two = [];
   var one = [];
   for(var k=0;k<even.length;k++){
     if (even[k]>=100){
       three.push(even[k]);
     }
     else if (even[k]>=10&&even[k]<100){
       two.push(even[k]);
     }
     else {
       one.push(even[k]);
     }
   }
   console.log("one is"+ one);
   console.log("two is"+ two);
   console.log("three is"+ three);

   //计算平均值
   var result =[];
   if (one.length>0){
     var aveOne = one.reduce(function(a,b){return a+b;})/one.length;
     result.push(aveOne);
   }
   if (two.length>0){
     var aveTwo = two.reduce(function(a,b){return a+b;})/two.length;
     result.push(aveTwo);
   }

   if (three.length>0){
     var aveThree =three.reduce(function(a,b){return a+b;})/three.length;
     result.push(aveThree);
   }

 }
 else {
   result = [0];
 }
 console.log(result);
 return result;
s
};
module.exports = even_group_calculate_average;
