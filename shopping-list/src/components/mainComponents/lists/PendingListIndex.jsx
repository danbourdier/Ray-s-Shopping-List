import React from 'react'


const PendingListIndex = props => {

  
  const listItems = props.items.length ? 

    props.items.map( (item, idx) => {
      return (
        <article key={ idx }>
          <span>
            { item.title }
          </span>
          <span>
            { item.price }
          </span>
          
        </article>
      )
    }) : <span> No Items Yet! </span>


  return (
    <section>
      { listItems }
    </section>

  )

}


export default PendingListIndex