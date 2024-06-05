import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../Images/logo.png'
import Watsapp from '../Images/watsapp.png'
export default class SectionTwo extends Component {
render() {
return (
    <div style={{backgroundColor:"#141515",borderBottom:"3px solid #ff9400"}}>
    <Container >
        <div className='py-4 mobile_view_none'>
        <span style={{fontSize:"50px",fontWeight:"700",color:"#fff"}}>
            EXCHANGES<span style={{color:"#ff9400"}}>{' '}DEMO ACCOUNT</span> 
        </span>
        <br/>
            <span style={{fontSize:"30px",color:"#9f9f9f"}}>We're here with some supporting demo accounts</span>
        </div>
        {/* MOBILE VIEW  */}
        <div className='py-4 mobile_view_visible'>
        <span style={{fontSize:"20px",fontWeight:"700",color:"#fff"}}>
            EXCHANGES<span style={{color:"#ff9400"}}>{' '}DEMO ACCOUNT</span> 
        </span>
        <br/>
            <span style={{fontSize:"15px",color:"#9f9f9f"}}>We're here to support your dreams</span>
        </div>
    </Container>
    </div>
)
}
}