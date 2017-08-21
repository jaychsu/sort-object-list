/**
 * To sort an array of objects by certain property.
 * @param  {Array<Object>}    objectList
 * @param  {String|Function}  options.sortBy
 * @param  {Boolean}          options.isDecreasing
 * @return {Array<Object>}
 */
export default function sortObjectList(objectList, {
  sortBy,
  isDecreasing = false,
}) {
  if ( !isArray(objectList)
    || !sortBy
    || Array.prototype.some.call(objectList, object => !object)
  ) return objectList

  const fetchProp = (object) => (typeof sortBy === 'function')
    ? sortBy(object)
    : object[sortBy]

  return objectList.slice().sort((a, b) => {
    const [x, y] = [fetchProp(a), fetchProp(b)]
    const factor = (x < y)
      ? -1
      : (x > y)
        ? 1
        : 0
    return isDecreasing ? factor * -1 : factor
  })
}

function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]'
}
