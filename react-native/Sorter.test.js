import React from 'react'
import { Text } from 'react-native'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import Sorter, { SORT_BY } from './Sorter'

describe('<Sorter />', () => {
  const wrapper = shallow(
    <Sorter>
      <Text order={3}>B</Text>
      <Text order={0}>A</Text>
      <Text>C</Text>
    </Sorter>
  )

  it('should render stuff', () => {
    expect(wrapper.length).to.equal(1)
    expect(wrapper.children().length).to.equal(3)
  })

  it(`should sort children by its '${SORT_BY}' prop`, () => {
    expect(wrapper.childAt(0).props().children).to.equal('A')
    expect(wrapper.childAt(1).props().children).to.equal('B')
    expect(wrapper.childAt(2).props().children).to.equal('C')
  })
})
