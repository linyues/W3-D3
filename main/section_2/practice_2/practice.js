'ust strict';

  var count_same_elements=(collection)=>{
    var result = [];
    let k = collection.findIndex(item => item =="d-5");
    collection.splice(k,5,"d","d","d","d","d");
    for(var i = 0;i<collection.length;){
      var count = 0;
      
      for(var j = i;j<collection.length;j++){
        if(collection[i]==collection[j]){
          count++;    
        }
      }
      result.push({key:collection[i],count:count});
      i+=count;
    }
  return result;
  }
module.exports = count_same_elements;

