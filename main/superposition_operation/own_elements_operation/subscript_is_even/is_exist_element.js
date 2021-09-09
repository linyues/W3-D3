'use strict';
var is_exist_element=(collection,element)=>{
    var result=[];
     for(var i=0;i<collection.length;i+=2){
       result.push(collection[i]);
     }
     if(result.indexOf(element)==-1){
       return false;
     }else{
       return true;
     }
  };
  module.exports=is_exist_element;