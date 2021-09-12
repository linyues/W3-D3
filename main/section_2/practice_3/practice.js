function count_same_elements(collection) {
  //在这里写入代码

  var clone_collection = [
    "a", "a", "a",
    "e", "e", "e", "e", "e", "e", "e",
    "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h",
    "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t",
    "f", "f", "f", "f", "f", "f", "f", "f", "f",
    "c", "c", "c", "c", "c", "c", "c", "c",
    "g", "g", "g", "g", "g", "g", "g",
    "b", "b", "b", "b", "b", "b",
    "d", "d", "d", "d", "d"
  ];

  var result = [];

  for(var i =0;i<clone_collection.length;){
    var count =0;
    for (var j = i;j<clone_collection.length;j++){
      if(clone_collection[i]==clone_collection[j]){
        count ++;
      }

    }
    var temp = {};
    temp['name']=clone_collection[i];
    console.log(temp);
    temp ['summary']= count;
    result.push(temp);
    i = i+count;
  }
  return result;

}

module.exports = count_same_elements;


