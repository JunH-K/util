#Javascript type check or value check

### Install

npm install js-util-junk

#### Example

```javascript
import util, { isArray, isBoolean } from 'js-util-junk';

function example(){
  console.log( util.isObject( {} ) ); //true
  console.log( util.isObject( [] ) ); //false
  console.log( util.isHasOwnProp( { a: 1 } ) );//true
  console.log( isArray( { a: 1 } ) );//false
  console.log( isArray( [] ) );//true
  console.log( isBoolean( isArray( [] ) ) );//true
  }
```

