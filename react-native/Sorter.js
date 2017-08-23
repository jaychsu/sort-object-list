import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

import sortObjectList from '../index'

export const SORT_BY = 'order'

function Sorter({
  style,
  children,
}) {
  return (
    <View style={style}>
      { sortObjectList(children, {
          sortBy(node) {
            return node.props[SORT_BY]
          },
        })
      }
    </View>
  )
}

Sorter.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
  ]),
  children: PropTypes.arrayOf(
    PropTypes.node
  ).isRequired,
}

export default Sorter
