const {
  isObject,
  isHasOwnProp,
  isArray,
  isNotEmptyArray,
  isString,
  isNotEmptyString,
  isExist
} = require( '../js/util' );

test( '객체인가?', () => {
  expect( isObject( {} ) ).toBe( true );
  expect( isObject( { a: 1 } ) ).toBe( true );
  expect( isObject( [] ) ).toBe( true );
  expect( isObject( "" ) ).toBe( false );
  expect( isObject( undefined ) ).toBe( false );
  expect( isObject( null ) ).toBe( false );
  expect( isObject( 1 ) ).toBe( false );
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

test( 'value가 null, undefined가 아닌지 확인', () => {
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

