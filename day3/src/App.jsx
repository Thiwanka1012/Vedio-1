
import './App.css'
import BodyContent from './Components/BodyContent/BodyContent'
import FooterContent from './Components/FooterContent/FooterContent'
import HeaderContent from './Components/HeaderContent/HeaderContent'

function App() {

  const styles_div = {
    color:'red',
    fontSize:'2rem'
  }
  
function hello1(e){
  console.log("Hello" , e);
}

const hello2 = () =>{
  console.log("Hello2");
}

function hello3(name){
  console.log("Hello 3" + name);
}

function hello4(name){
  console.log("Hello 4" + name);
}


  return (
    <>
<div id="wrapper">

    <HeaderContent/>
    <p style={{color:'green',fontSize:'2rem'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia repudiandae distinctio possimus, ea repellat sit dignissimos perferendis laboriosam voluptatibus sapiente vitae dolorum, consectetur magnam. Aperiam dolorem accusantium quibusdam aut commodi?</p>
    <BodyContent>
      <p>Main side Content</p>

    </BodyContent>
    <button onClick={hello1}>Click Me</button>
    <button onClick={hello2}>Click Me2</button>
    <button onClick={() => {hello3(" Thiwanka")}}>Click Me3</button>
    <button onClick={() => {hello4(" Umesh")}}>Click Me4</button>


    <FooterContent/>
    <p style={styles_div}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis blanditiis consequatur quaerat, deserunt optio debitis maiores error nesciunt nemo. Illo quaerat inventore maxime sint molestiae consequatur fugiat, quisquam repellendus officiis?</p> 

    <p style={styles_div}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore illum corrupti eum labore eaque reprehenderit in ab, quibusdam blanditiis accusamus sed a sit ipsam voluptas autem similique itaque aut magni.</p>

 </div>
 </>


  )
}

export default App
