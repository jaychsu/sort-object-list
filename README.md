sort-object-list
======

[![GitHub release](https://img.shields.io/github/release/jaychsu/sort-object-list.svg)](https://github.com/jaychsu/sort-object-list/releases)
[![npm](https://img.shields.io/npm/dm/sort-object-list.svg)](https://www.npmjs.com/package/sort-object-list)
[![Travis](https://img.shields.io/travis/jaychsu/sort-object-list.svg)](https://travis-ci.org/jaychsu/sort-object-list)
[![Maintenance](https://img.shields.io/maintenance/yes/2017.svg)](https://github.com/jaychsu/sort-object-list)
[![license](https://img.shields.io/github/license/jaychsu/sort-object-list.svg)](https://github.com/jaychsu/sort-object-list/blob/master/LICENSE)

## To import component

Use any of the ways below to import

- `import sortObjectList from 'sort-object-list'`
- `var sortObjectList = require('sort-object-list/es5').default`
- `<script type="text/javascript" src="@node_modules/sort-object-list/es5/index.js"></script>`

## Usage

### To sort an array of plain object

```javascript
import sortObjectList from 'sort-object-list'

sortObjectList(
  [ 'B', 2, null, 1, undefined ],
  { sortBy: 'key' }
)
// [ 'B', 2, null, 1, undefined ]

sortObjectList(
  [ { key: 2 }, { key: 1 }, { key: 100 }, { key: 0 } ],
  { sortBy: 'key', isDecreasing: true }
)
// [ { key: 100 }, { key: 2 }, { key: 1 }, { key: 0 } ]

sortObjectList(
  [ { key: 'Z' }, { key: 'G' }, { key: 'B' }, { key: 'A' } ],
  { sortBy: 'key' }
)
// [ { key: 'A' }, { key: 'B' }, { key: 'G' }, { key: 'Z' } ]

sortObjectList(
  [
    { key: { something: 3 } },
    { key: { something: 1 } },
    { key: { something: 4 } },
    { key: { something: 0 } },
  ],
  { sortBy(object) { return object.key.something } }
)
// [
//   { key: { something: 0 } },
//   { key: { something: 1 } },
//   { key: { something: 3 } },
//   { key: { something: 4 } },
// ]
```

### To sort children in `react-native`

```javascript
import { Sorter } from 'sort-object-list/react-native'

<Sorter style={{...}}>
    <Text order={3}>B</Text>
    <Text order={0}>A</Text>
    <Text>C</Text>
</Sorter>
```
