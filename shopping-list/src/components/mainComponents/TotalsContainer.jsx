import React from 'react'

import TotalPrice from './totals/TotalPrice'
import TotalCount from './totals/TotalCount'

/*

  Will get passed state variables from Parent Component
  Has Two main components; TotalPriceContainer, TotalQuantity container
*/

const TotalsContainer = props => {


  return (
    <section>
      <TotalPrice />
      <TotalCount />
    </section>
  )

}


export default TotalsContainer