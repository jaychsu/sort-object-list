sort-object-list
======



## Usage

### To sort an array of plain object

```javascript
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
import { Sorter } from 'sort-object-list'

<Sorter style={{...}}>
    <Text order={3}>B</Text>
    <Text order={0}>A</Text>
    <Text>C</Text>
</Sorter>
```
