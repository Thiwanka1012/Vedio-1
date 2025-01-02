import 'react'
import './BodyContent.css'

function BodyContent(props) {
  return (
    <div id="bodycontent">
    <p>Main side Content</p>
    {props.children}
    </div>
  
  )
}

export default BodyContent
