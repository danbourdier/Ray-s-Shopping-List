import React, { useState } from 'react'


const InputContainer = props => {
  const [ name, updateName ] = useState("")
  const [ cost, updateCost ] = useState("")

  const { addItem: createItem } = props 

  // This grabs entered data and adds the new item to our Parent's collection.
  const handleSubmit = () => {
    const newItem = {
      'title': name,
      'price': cost
    }

    createItem( currentList => [...currentList, { newItem } ] )
  }


  const handleUpdate = e => {

    // console.log(e.target.name)

  }


  return (
    <section>
      Input Container
      <div>
        <input type="text" name="item-name" onChange={ handleUpdate } /> {/* name of item*/}
        <input type="number" name="item-price" onChange={ handleUpdate } /> { /* price of item */ }
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