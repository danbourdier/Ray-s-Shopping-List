import React, { useState } from 'react'


const InputContainer = props => {
  const [ name, updateName ] = useState("")
  const [ cost, updateCost ] = useState("")

  const { addItem: createItem } = props 

  // input validations to be added soon
  // This grabs entered data and adds the new item to our Parent's collection.
  const handleSubmit = () => {
    const newItem = {
      'title': name,
      'price': cost
    }

    createItem( currentList => [...currentList, { newItem } ] )
  }


  const handleUpdate = e => {

    e.preventDefault()
    let targetValue = e.target.value

    switch (e.target.name) {
      case 'item-name':
        updateName( targetValue )
        break;

      case 'item-price':
        updateCost( targetValue )
        break;

    }
  }


  return (
    <section>
      Input Container
      <div>
        <input type="text" name="item-name" onChange={ handleUpdate } /> {/* name of item*/}
        <input type="number" step="0.01" min="0.01" name="item-price" onChange={ handleUpdate } /> { /* price of item */ }
      </div>

      <div>
        <button onClick={ handleSubmit }>
          To add a new entry
        </button>
      </div>
      
    </section>
  )

}


export default InputContainer