import  { useState, useEffect } from 'react'

function App() {
  //let num1=2;

  const [num1, setNum1] = useState(2)
  const[count, setcount] = useState(0)
  const[clicks, setclicks] = useState(0)

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

  useEffect(()=>{
    document.title = `You clicked ${clicks} times`;
  });


//useEffect(()=>{
  console.log("HI")

//},[num1])

  return (
  <>
  <div id="wrapper">
    <button onClick={handleClick}>Click</button>
    <p>{num1}</p>

    <p>Counter</p>
    <button onClick={decrementFunction}>-</button>
    <button onClick={incrementFunction}>+</button>
    <p>{count}</p>


    <p>You clickes{clicks} times </p>
    <button onClick={()=> setclicks(clicks + 1)}>Click me</button>

    <p className='one'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, incidunt sit velit molestias culpa voluptatum dignissimos sunt esse optio. Dicta natus animi qui sapiente voluptates magni obcaecati perferendis voluptas! Aspernatur.</p>

  </div>
  </>
  )
}


export default App