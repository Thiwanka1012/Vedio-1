import React, { useState } from 'react'

function App() {
  //let num1=2;

  const [num1, setNum1] = useState(2)

  function handleClick() {
    //num1=num1+1;
    //console.log('Button clicked')

    setNum1(num1 + 1)
  }

  return (
  <>
  <div id="wrapper">
    <button onClick={handleClick}>Click</button>
    <p>{num1}</p>

  </div>
  </>
  )
}

export default App