import { useState } from 'react'

import './App.css'

function App() {

  const [counter, setCounter] = useState(0)
  //let counter = 0

  const addValue = () => {
   setCounter(counter + 1)
  }

  const removeValue = () => {
    if (counter >= 1) {
    setCounter(counter - 1)
    }
    else {
      alert("The value cannot be negative!")
    }
  }
  
  return (
    <>
      <h1>Counter App by Rohan Hadvani</h1>
      <h2>Counter Value : {counter} </h2>
      <button
      onClick={addValue}
      >Add value</button> {" "}
      <button
      onClick={removeValue}
      >Remove value</button>
      {/* <p>Footer: {counter}</p> */}
    </>
  )
}

export default App