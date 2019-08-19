'use strict';

function collectSameElements(collectionA, objectB) {
  var lenA = collectionA.length;
  var result = [];
  for(var i = 0; i < lenA; i++){
      for(var k=0,lenK=objectB.value.length; k<lenK;k++){
      if(collectionA[i] == objectB.value[k]){
        result.push(collectionA[i]);
      }      
    }
  }
  return result;
}
