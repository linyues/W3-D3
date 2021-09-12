'use strict';
function create_updated_collection(collection_a, object_b) {

  var collectionA = [
    "a", "a", "a",
    "e", "e", "e", "e", "e", "e", "e",
    "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h",
    "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t",
    "f", "f", "f", "f", "f", "f", "f", "f", "f",
    "c", "c", "c", "c", "c", "c", "c", "c",
    "g", "g", "g", "g", "g", "g", "g",
    "b", "b", "b", "b", "b", "b",
    "d", "d", "d", "d", "d"
  ];




  //获得各个元素的个数，得到数组result
  var result = [];

  for(var i =0;i<collectionA.length;){
    var count =0;
    for (var j = i;j<collectionA.length;j++){
      if(collectionA[i]==collectionA[j]){
        count ++;
      }

    }
    var temp = {};
    temp['key']=collectionA[i];
    console.log(temp);
    temp ['count']= count;
    result.push(temp);
    i = i+count;
  }

//判断key元素是否存在于哈希表中


  var array =object_b['value'];//取value的值，需要加引号

  for(var i = 0 ;i<result.length;i++) {
    for (var j = 0; j < array.length; j++) {
      if (result[i]["key"] == array[j]) {
        result[i]["count"] = result[i]["count"] - Math.floor(result[i]["count"] / 3);
      }
    }

  }


  return result;
}

module.exports = create_updated_collection;
