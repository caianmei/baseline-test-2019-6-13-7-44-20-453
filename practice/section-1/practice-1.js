'use strict';

function collectSameElements(collectionA, collectionB) {
  var lenA = collectionA.length;
  var lenB = collectionB.length;
  var result = [];
  for(var i = 0; i < lenA; i++){
    for(var j = 0; j < lenB; j++){
      if(collectionA[i] == collectionB[j])
      result.push(collectionA[i]);
    }
  }
  return result;
}
