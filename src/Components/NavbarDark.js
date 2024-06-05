import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Images/logo.png'
import Watsapp from '../Images/watsapp.png'
export default class NavbarDark extends Component {
render() {
return (
    <Navbar variant="dark" style={{backgroundColor:"#383c46",color:"#fff"}} expand="lg">
    <Container fluid>
      <Navbar.Brand href="#"><img src={Logo} style={{width:"110px"}}/></Navbar.Brand>
      <Navbar.Toggle/>
      <Navbar.Collapse>
        <Nav
          className="mx-auto my-2 my-lg-0"
        >

<div class="form-group fg--search">
  <input type="text" class="input" placeholder="search"/>
  <button type="submit"><i class="fa fa-search"></i></button>
</div>

        </Nav>
        <Nav.Link href="#action1">Follow Us : 
        <i className="fa fa-facebook" style={{padding:"7px",background:"#5f636c",borderRadius:"100px",fontSize:"11px",marginLeft:"10px"}}></i>
        <i className="fa fa-twitter" style={{padding:"7px",background:"#5f636c",borderRadius:"100px",fontSize:"11px",marginLeft:"10px"}}></i>
        <i className="fa fa-linkedin" style={{padding:"7px",background:"#5f636c",borderRadius:"100px",fontSize:"11px",marginLeft:"10px"}}></i>
        <i className="fa fa-instagram" style={{padding:"7px",background:"#5f636c",borderRadius:"100px",fontSize:"11px",marginLeft:"10px"}}></i>
        <i className="fa fa-watsapp" style={{padding:"7px",background:"#5f636c",borderRadius:"10px",fontSize:"11px",marginLeft:"10px"}}>
            <img src={Watsapp} style={{width:"4vh"}}/>
        </i>

        </Nav.Link>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)
}
}