const {
  isObject,
  isHasOwnProp
} = require( '../js/util' );

test( '객체이면 true', () => {
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
