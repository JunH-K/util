//객체인가? ,
function isObject(obj){
  return obj !== null && typeof obj === "object";
}

//property가 있는 객체인가?
function isHasOwnProp(obj){
  if ( isObject( obj ) ){
    for ( let key in obj ) {
      if ( obj.hasOwnProperty( key ) ){
        return true;
      }
    }
  }
  return false;
}

//문자열인가 ?
function isString(str){
  if ( typeof str === "string" ){
    return true;
  }
}

//요소가 있는 배열인가?
function isArray(arr){
  return Array.isArray( arr ) && !!arr.length;
}


// module.exports = {
//   isObject,
//   isString,
//   isArray,
// };

module.exports = {
  isObject,
  isHasOwnProp,

};

