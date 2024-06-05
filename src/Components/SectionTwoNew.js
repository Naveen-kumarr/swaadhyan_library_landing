import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../Images/logo.png'
import Watsapp from '../Images/watsapp.png'
import SecondBack from '../Images/second.png'
export default class SectionTwoNew extends Component {
render() {
return (
    <div className='banner_two py-5'>
    <Container style={{textAlign:""}}>
        <div className='py-4 mobile_view_none'>
        <span style={{fontSize:"50px",fontWeight:"700",color:"#fff"}}>
        <span style={{color:"#ff9400"}}>{' '}THE STUDY FRIENDLY</span>BOOK 
        </span>
        <br/>
        <br/>
            <span style={{fontSize:"20px",color:"#fff"}}>We Deals With All Branded Site,And Present The Fastest Withdrawal Service.</span>
            <br/>
            <br/>
            <div  className=''>
            <span style={{fontSize:"",color:"#fff",fontWeight:"800"}}>We Deals Only On WhatsApp</span>
            <center>
            <hr style={{backgroundColor:"#ff9400",width:"10%",height:"3px",opacity:"unset"}}/>
            </center>
            <a href="https://api.whatsapp.com/send?phone=+910000000000&text=Hi,%20SWAADHYAN" target="_blank">
     <Button variant="primary" size="lg" style={{height:"7vh",backgroundColor:"#ff9400",border:"none"}}>
          <span style={{fontSize:"",fontWeight:"600",outline:"none"}}>+91 0000000000</span>
        </Button>
        </a>
        <a href="https://api.whatsapp.com/send?phone=+910000000000&text=Hi,%20SWAADHYAN" target="_blank">
        <Button variant="primary" size="lg" style={{height:"7vh",backgroundColor:"#ff9400",border:"none",marginLeft:"10px"}}>
          <span style={{fontSize:"",fontWeight:"600",outline:"none"}}>+91 0000000000</span>
        </Button>
        </a>
            </div>
            
        </div>
        {/* MOBILE VIEW  */}
        <div className='py-4 mobile_view_visible'>
        <span style={{fontSize:"30px",fontWeight:"700",color:"#fff"}}>
        <span style={{color:"#ff9400"}}>{' '}THE STUDY FRIENDLY</span>BOOK 
        </span>
        <br/>
        <br/>
            <span style={{fontSize:"15px",color:"#fff"}}>We Deals With All Branded Site,And Present The Fastest Withdrawal Service.</span>
            <br/>
            <br/>
            <div  className=''>
            <span style={{fontSize:"",color:"#fff",fontWeight:"800"}}>We Deals Only On WhatsApp</span>
            <center>
            <hr style={{backgroundColor:"#ff9400",width:"10%",height:"3px",opacity:"unset"}}/>
            </center>
            <a href="https://api.whatsapp.com/send?phone=+910000000000&text=Hi,%20SWAADHYAN" target="_blank">
     <Button variant="primary" size="lg" style={{backgroundColor:"#ff9400",border:"none"}}>
          <span style={{fontSize:"15px",fontWeight:"600",outline:"none"}}>+91 0000000000</span>
        </Button>
        </a>
        <a href="https://api.whatsapp.com/send?phone=+910000000000&text=Hi,%20SWAADHYAN" target="_blank">
        <Button variant="primary" size="lg" style={{backgroundColor:"#ff9400",border:"none",marginLeft:"10px"}}>
          <span style={{fontSize:"15px",fontWeight:"600",outline:"none"}}>+91 0000000000</span>
        </Button>
        </a>
            </div>
            
        </div>
    </Container>
    </div>
)
}
}