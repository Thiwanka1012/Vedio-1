import  { useState } from 'react'

function App() {
  //let num1=2;

  const [num1, setNum1] = useState(2)
  const[count, setcount] = useState(0)

  function handleClick() {
    //num1=num1+1;
    //console.log('Button clicked')

    setNum1(num1 + 1)
  }

  const decrementFunction = () => {
    setcount(count - 1)
  }

  const incrementFunction = () => {
    setcount(count + 1)
  }
  return (
  <>
  <div id="wrapper">
    <button onClick={handleClick}>Click</button>
    <p>{num1}</p>

    <p>Counter</p>
    <button onClick={decrementFunction}>-</button>
    <button onClick={incrementFunction}>+</button>
    <p>{count}</p>

  </div>
  </>
  )
}


export default App