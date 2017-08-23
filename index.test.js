import { shallow } from 'enzyme'
import { expect } from 'chai'

import sortObjectList from './index'

describe('helper `sortObjectList`', () => {
  const commonSortRef = { sortBy: 'key' }
  const validPayload = [
    { key: 3 },
    { key: 1 },
    { key: 2 },
  ]

  let payload
  let result

  it('should return the original input if payload is not an array', () => {
    payload = { a: 1 }

    expect(sortObjectList(null, commonSortRef)).to.equal(null)
    expect(sortObjectList(1, commonSortRef)).to.equal(1)
    expect(sortObjectList(payload, commonSortRef)).to.equal(payload)
  })

  it('should return the original input if got no `sortBy` reference', () => {
    expect(sortObjectList(validPayload, {})).to.equal(validPayload)
  })

  it('should return the original input if not every item is a plain object', () => {
    payload = [ 1, null, NaN, '', undefined ]

    expect(sortObjectList(payload, commonSortRef)).to.equal(payload)
  })

  it('should sort children by certain prop which equals `sortBy` reference', () => {
    result = sortObjectList(validPayload, commonSortRef)
    expect(result[0].key).to.equal(1)
    expect(result[1].key).to.equal(2)
    expect(result[2].key).to.equal(3)
  })

  it('should sort children by the calling result of `sortBy` reference', () => {
    payload = [
      { a: { b: 3 } },
      { a: { b: 1 } },
      { a: { b: 4 } },
      { a: { b: 0 } },
    ]

    result = sortObjectList(payload, {
      sortBy(object) {
        return object.a.b
      },
    })

    expect(result[0].a.b).to.equal(0)
    expect(result[1].a.b).to.equal(1)
    expect(result[2].a.b).to.equal(3)
    expect(result[3].a.b).to.equal(4)
  })

  it('should return the reverse result if `isDecreasing` is true', () => {
    result = sortObjectList(validPayload, {
      sortBy: 'key',
      isDecreasing: true,
    })
    expect(result[0].key).to.equal(3)
    expect(result[1].key).to.equal(2)
    expect(result[2].key).to.equal(1)
  })
})
