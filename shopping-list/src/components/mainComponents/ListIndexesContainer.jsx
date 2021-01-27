import React from 'react'

import PendingListIndex from './lists/PendingListIndex'
import CrossedListIndex from './lists/CrossedListIndex'

const ListIndexesContainer = props => {

  const { items } = props

  return (
    <section>
      <div>
        <PendingListIndex items={ items } />
      </div>

      <div>
        <CrossedListIndex />
      </div>
    </section>
  )

}


export default ListIndexesContainer