'use strict';

function collectSameElements(collectionA, collectionB) {
  var lenA = collectionA.length;
  var lenB = collectionB.length;
  var result = [];
  for(var i = 0; i < lenA; i++){
    for(var j = 0; j < lenB; j++){
      var kind = collectionB[j];
      for(var k=0,lenK=kind.length; k<lenK;k++)
      if(collectionA[i] == kind[k])
      result.push(collectionA[i]);
    }
  }
  return result;
}
