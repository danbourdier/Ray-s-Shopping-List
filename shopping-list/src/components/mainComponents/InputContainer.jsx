import React from 'react'


const InputContainer = props => {
  const { addItem: createItem } = props 

  // This grabs entered data and adds the new item to our Parent's collection.
  const handleSubmit = ( title, cost ) => {
    const newItem = {
      'title': title,
      'price': cost
    }

    addItem( currentList => [...currentList, { newItem } ] )
  }

  return (
    <section>

      <div>
        <input type="text" /> {/* name of item*/}
        <input type="number" /> { /* price of item */ }
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