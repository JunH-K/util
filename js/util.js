const util = {
  //객체인가? ,
  isObject(obj){
    return obj !== null && typeof obj === "object";
  },

//property가 있는 객체인가?
  isHasOwnProp(obj){
    if ( util.isObject( obj ) ){
      for ( let key in obj ) {
        if ( obj.hasOwnProperty( key ) ){
          return true;
        }
      }
    }
    return false;
  },

//문자열인가 ?
  isString(str){
    return typeof str === "string";
  },

  isNotEmptyString(str){
    return util.isString( str ) && !!str;
  },

//배열인가?
  isArray(arr){
    return Array.isArray( arr );
  },

//요소가 있는 배열인가?
  isNotEmptyArray(arr){
    return Array.isArray( arr ) && !!arr.length;
  },

  //null undefined 가 아니면 value 가있음
  isExist(value){
    return value !== null && value !== undefined;
  }

};

module.exports = util;
