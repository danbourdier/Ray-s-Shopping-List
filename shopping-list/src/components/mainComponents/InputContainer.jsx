import React from 'react'


const InputContainer = props => {


  return (
    <section>

      <div>
        <input type="text" /> {/* name of item*/}
        <input type="number" /> { /* price of item */ }
      </div>

      <div>
        <button>
          To add a new entry
        </button>
      </div>
      
    </section>
  )

}


export default InputContainer