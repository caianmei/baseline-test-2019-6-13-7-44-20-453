'use strict';

function collectSameElements(collectionA, objectB) {
  var result = [];
  for(var i=0,lenA=collectionA.length; i<lenA;i++)
   for(var k=0,lenK=objectB.value.length; k<lenK;k++){   
    if(collectionA[i].key == objectB.value[k]){
      result.push(collectionA[i].key);
    }
  }
 
  return result;
}
