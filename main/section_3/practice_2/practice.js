'use strict';
function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  for (var a=0 ;a<collection_a.length;a++){
    for (var b=0;b < 5;b++){
      if (collection_a[a].key ==object_b.value[b] ){
        var sub = Math.floor(collection_a[a].count/3);
        collection_a[a].count=collection_a[a].count-sub};
    }
  }
  return collection_a;
}


module.exports = create_updated_collection;
