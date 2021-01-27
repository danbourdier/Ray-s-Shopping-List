import React, { useEffect, useState } from 'react'

import InputContainer from './mainComponents/InputContainer'
import ListIndexesContainer from './mainComponents/ListIndexesContainer'
import TotalsContainer from './mainComponents/TotalsContainer'

/*

  Will use state that tracks items, total price, and total quantity
  Contains 3 main compnents; input for new items, Item Index, UI for aggregation

*/

const ShoppingList = () => {
  const [ items, addItem ] = useState([])

  useEffect( () => {
    console.log(items)
  }, [ items ])

  return (
    <main>
      <InputContainer addItem={ addItem } />
      <ListIndexesContainer items={ items } />
      <TotalsContainer />
    </main>
  )
}


export default ShoppingList