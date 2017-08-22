sort-object-list
======

## Usage

### To sort an array of plain object

```javascript
sortObjectList(
  ["B",2,null,1,null,"A",100,null,"a",3,"b",null,5],
  { sortBy: "what_ever" }
)
// return what input

sortObjectList(
  [{"a":2},{"a":1},{"a":100},{"a":0}],
  { sortBy: "a", isDecreasing: true }
)
// [{"a":100},{"a":2},{"a":1},{"a":0}]

sortObjectList(
  [{"key":"Z"},{"key":"G"},{"key":"B"},{"key":"A"}],
  { sortBy: "key" }
)
// [{"key":"A"},{"key":"B"},{"key":"G"},{"key":"Z"}]

sortObjectList(
  [{"a":{"b":3}},{"a":{"b":1}},{"a":{"b":4}},{"a":{"b":0}}],
  { sortBy(obj) { return obj.a.b; } }
)
// [{"a":{"b":0}},{"a":{"b":1}},{"a":{"b":3}},{"a":{"b":4}}]
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
