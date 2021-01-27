import React from 'react'

import InputContainer from './mainComponents/InputContainer'
import ListIndexContainer from './mainComponents/ListIndexContainer'
import TotalsContainer from './mainComponents/TotalsContainer'

/*

  Will use state that tracks items, total price, and total quantity
  Contains 3 main compnents; input for new items, Item Index, UI for aggregation

*/

const ShoppingList = () => {

  return (
    <main>
      <InputContainer />
      <ListIndexContainer />
      <TotalsContainer />
    </main>
  )
}


export default ShoppingList