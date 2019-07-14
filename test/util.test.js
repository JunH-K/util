const {
  isObject,
  isHasOwnProp,
  isArray,
  isNotEmptyArray,
  isString,
  isNotEmptyString,
  isExist,
  isFunction,
  isNumber,
  isBoolean,
  isNull,
  isUndefined,
} = require( '../js/util' );

test( '객체인가?', () => {
  expect( isObject( {} ) ).toBe( true );
  expect( isObject( { a: 1 } ) ).toBe( true );
  expect( isObject( [] ) ).toBe( true );
  expect( isObject( "" ) ).toBe( false );
  expect( isObject( undefined ) ).toBe( false );
  expect( isObject( null ) ).toBe( false );
  expect( isObject( 1 ) ).toBe( false );
  expect( isObject( function(){} ) ).toBe( false );
  expect( isObject( ()=>{} ) ).toBe( false );
} );

test( '속성이 있는 객체인지 확인', () => {
  expect( isHasOwnProp( { a: 1 } ) ).toBe( true );
  expect( isHasOwnProp( [ 1 ] ) ).toBe( true );
  expect( isHasOwnProp( {} ) ).toBe( false );
  expect( isHasOwnProp( [] ) ).toBe( false );
  expect( isHasOwnProp( "" ) ).toBe( false );
  expect( isHasOwnProp( undefined ) ).toBe( false );
  expect( isHasOwnProp( null ) ).toBe( false );
  expect( isHasOwnProp( 1 ) ).toBe( false );
  expect( isHasOwnProp( function(){} ) ).toBe( false );
  expect( isHasOwnProp( function (a){} ) ).toBe( false );
  expect( isHasOwnProp( ()=>{} ) ).toBe( false );
} );

test( '배열인지 확인', () => {
  expect( isArray( [ 1 ] ) ).toBe( true );
  expect( isArray( [] ) ).toBe( true );
  expect( isArray( { a: 1 } ) ).toBe( false );
  expect( isArray( {} ) ).toBe( false );
  expect( isArray( "" ) ).toBe( false );
  expect( isArray( undefined ) ).toBe( false );
  expect( isArray( null ) ).toBe( false );
  expect( isArray( 1 ) ).toBe( false );
  expect( isArray( 'a' ) ).toBe( false );
} );

test( '빈 배열인지 확인', () => {
  expect( isNotEmptyArray( [ 1 ] ) ).toBe( true );
  expect( isNotEmptyArray( { a: 1 } ) ).toBe( false );
  expect( isNotEmptyArray( {} ) ).toBe( false );
  expect( isNotEmptyArray( [] ) ).toBe( false );
  expect( isNotEmptyArray( "" ) ).toBe( false );
  expect( isNotEmptyArray( undefined ) ).toBe( false );
  expect( isNotEmptyArray( null ) ).toBe( false );
  expect( isNotEmptyArray( 1 ) ).toBe( false );
  expect( isNotEmptyArray( 'a' ) ).toBe( false );
} );

test( '문자열인지 확인', () => {
  expect( isString( 'a' ) ).toBe( true );
  expect( isString( '' ) ).toBe( true );
  expect( isString( [ 1 ] ) ).toBe( false );
  expect( isString( { a: 1 } ) ).toBe( false );
  expect( isString( {} ) ).toBe( false );
  expect( isString( [] ) ).toBe( false );
  expect( isString( undefined ) ).toBe( false );
  expect( isString( null ) ).toBe( false );
  expect( isString( 1 ) ).toBe( false );
} );

test( '빈 문자열인지 확인', () => {
  expect( isNotEmptyString( 'a' ) ).toBe( true );
  expect( isNotEmptyString( '' ) ).toBe( false );
  expect( isNotEmptyString( [ 1 ] ) ).toBe( false );
  expect( isNotEmptyString( { a: 1 } ) ).toBe( false );
  expect( isNotEmptyString( {} ) ).toBe( false );
  expect( isNotEmptyString( [] ) ).toBe( false );
  expect( isNotEmptyString( undefined ) ).toBe( false );
  expect( isNotEmptyString( null ) ).toBe( false );
  expect( isNotEmptyString( 1 ) ).toBe( false );
} );

test( 'value 가 null, undefined가 아닌값인지 확인', () => {
  expect( isExist( 'a' ) ).toBe( true );
  expect( isExist( '' ) ).toBe( true );
  expect( isExist( [ 1 ] ) ).toBe( true );
  expect( isExist( { a: 1 } ) ).toBe( true );
  expect( isExist( {} ) ).toBe( true );
  expect( isExist( [] ) ).toBe( true );
  expect( isExist( 1 ) ).toBe( true );
  expect( isExist( undefined ) ).toBe( false );
  expect( isExist( null ) ).toBe( false );
} );

test( '함수인가?', () => {
  expect( isFunction( function(){} ) ).toBe( true );
  expect( isFunction( ()=>{} ) ).toBe( true );
  expect( isFunction( 'a' ) ).toBe( false );
  expect( isFunction( '' ) ).toBe( false );
  expect( isFunction( [ 1 ] ) ).toBe( false );
  expect( isFunction( { a: 1 } ) ).toBe( false );
  expect( isFunction( {} ) ).toBe( false );
  expect( isFunction( [] ) ).toBe( false );
  expect( isFunction( 1 ) ).toBe( false );
  expect( isFunction( undefined ) ).toBe( false );
  expect( isFunction( null ) ).toBe( false );
} );

test( '숫자인가?', () => {
  expect( isNumber( 0 ) ).toBe( true );
  expect( isNumber( 1 ) ).toBe( true );
  expect( isNumber( 0.1 ) ).toBe( true );
  expect( isNumber( NaN ) ).toBe( false );
  expect( isNumber( function(){} ) ).toBe( false );
  expect( isNumber( ()=>{} ) ).toBe( false );
  expect( isNumber( 'a' ) ).toBe( false );
  expect( isNumber( '' ) ).toBe( false );
  expect( isNumber( [ 1 ] ) ).toBe( false );
  expect( isNumber( { a: 1 } ) ).toBe( false );
  expect( isNumber( {} ) ).toBe( false );
  expect( isNumber( [] ) ).toBe( false );
  expect( isNumber( undefined ) ).toBe( false );
  expect( isNumber( null ) ).toBe( false );
} );

test( 'Boolean 인가?', () => {
  expect( isBoolean( false ) ).toBe( true );
  expect( isBoolean( true ) ).toBe( true );
  expect( isBoolean( new Boolean() ) ).toBe( false );
  expect( isBoolean( 0 ) ).toBe( false );
  expect( isBoolean( 1 ) ).toBe( false );
  expect( isBoolean( 0.1 ) ).toBe( false );
  expect( isBoolean( NaN ) ).toBe( false );
  expect( isBoolean( function(){} ) ).toBe( false );
  expect( isBoolean( ()=>{} ) ).toBe( false );
  expect( isBoolean( 'a' ) ).toBe( false );
  expect( isBoolean( '' ) ).toBe( false );
  expect( isBoolean( [ 1 ] ) ).toBe( false );
  expect( isBoolean( { a: 1 } ) ).toBe( false );
  expect( isBoolean( {} ) ).toBe( false );
  expect( isBoolean( [] ) ).toBe( false );
  expect( isBoolean( undefined ) ).toBe( false );
  expect( isBoolean( null ) ).toBe( false );
} );

test( 'null 인가?', () => {
  expect( isNull( null ) ).toBe( true );
  expect( isNull( 0 ) ).toBe( false );
  expect( isNull( 1 ) ).toBe( false );
  expect( isNull( 0.1 ) ).toBe( false );
  expect( isNull( NaN ) ).toBe( false )
  expect(isNull( function(){} ) ).toBe( false );
  expect(isNull( ()=>{} ) ).toBe( false );
  expect( isNull( 'a' ) ).toBe( false );
  expect( isNull( '' ) ).toBe( false );
  expect( isNull( [ 1 ] ) ).toBe( false );
  expect( isNull( { a: 1 } ) ).toBe( false );
  expect( isNull( {} ) ).toBe( false );
  expect( isNull( [] ) ).toBe( false );
  expect( isNull( undefined ) ).toBe( false );
} );

test( 'undefined 인가?', () => {
  var value;
  expect( isUndefined( value ) ).toBe( true );
  expect( isUndefined( undefined ) ).toBe( true );
  expect( isUndefined( 0 ) ).toBe( false );
  expect( isUndefined( 1 ) ).toBe( false );
  expect( isUndefined( 0.1 ) ).toBe( false );
  expect( isUndefined( NaN ) ).toBe( false );
  expect( isUndefined( function(){} ) ).toBe( false );
  expect( isUndefined( ()=>{} ) ).toBe( false );
  expect( isUndefined( 'a' ) ).toBe( false );
  expect( isUndefined( '' ) ).toBe( false );
  expect( isUndefined( [ 1 ] ) ).toBe( false );
  expect( isUndefined( { a: 1 } ) ).toBe( false );
  expect( isUndefined( {} ) ).toBe( false );
  expect( isUndefined( [] ) ).toBe( false );
  expect( isUndefined( null ) ).toBe( false );
} );

