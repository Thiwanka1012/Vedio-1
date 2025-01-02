import 'react'
import './HeaderContent.css'
import MenuLink from '../MenuLink/MenuLink'

function HeaderContent() {
  return (
    <div id="navcontent">
      <a href="http://www.react.dev"><img src="logo" alt="React" /></a>
    <div>
      <MenuLink linkname="Home" url="#home"/>
      <MenuLink linkname="About" url="#about"/>
      <MenuLink linkname="Contact" url="#contact"/>
      <MenuLink linkname="Login" url="#login"/>
    </div>
  </div>
  )
}

export default HeaderContent
