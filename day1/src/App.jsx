

function App() {
  const fristname="Jhon";
  const middlename="Smith";
  const surname="gomes";
  const age="30";
  const country="England";
  const getFullName=(f,m,s)=> {
    return `${f} ${m} ${s}`
  }

  const arr=["Apple","Grapes","Oranges"];

  const lang=<ul>
  <li>HTML</li>
  <li>Css</li>
  <li>JS</li>
  <li>React</li>
</ul>;

const pobj = {
  fname : "Smith",
  age: "40"
}



  return (
    <>
<h1 className="const">Eployee Details</h1>
<p>Full name :{getFullName("NIck","Jhon","Steve")} </p>
<p>fristname:{fristname}</p>
<p>middlename:{middlename}</p>
<p>surname:{surname}</p>
<p>age:{age}</p>
<p>country:{country}</p>
<p>{fristname} likes to eat {arr[0]}</p>

<p>Frontend Languages</p>
<p>{lang}</p>

{pobj.age}

<p>{pobj.fname} is {pobj.age} years old</p>

</>
  )
}

export default App
