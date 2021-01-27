import React from 'react'

import PendingListIndex from './lists/PendingListIndex'
import CrossedListIndex from './lists/CrossedListIndex'

const ListIndexesContainer = props => {


  return (
    <section>
      <div>
        <PendingListIndex />
      </div>

      <div>
        <CrossedListIndex />
      </div>
    </section>
  )

}


export default ListIndexesContainer