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
import Support from '../Images/image 104 (1).png'
export default class SectionThreeNew extends Component {
render() {
return (
    <div className='banner_three py-5'>
    <Container style={{textAlign:"left"}}>
        <div className='py-4 mobile_view_none'>
        <span style={{fontSize:"50px",fontWeight:"700",color:"#fff"}}>
        <span style={{color:"#ff9400"}}>{' '}CUSTOMER </span>SUPPORT 
        </span>
        <br/>
        <br/>
        <div className='row'>
        <div className='col-md-6 mt-3'>
        <span style={{fontSize:"20px",color:"#fff"}}>Get In Touch With KUBER BOOK CARE For Any Queries,Emergenccies,Feedbacks Or Complaints.
        We Are Here To Help You 24/7 With Our Online Services.
        </span>
            <br/>
            <br/>
            <div  className=''>
            <span style={{fontSize:"30px",color:"#fff",fontWeight:"800"}}>Customer Care Number</span>
            {/* <center> */}
            <hr style={{backgroundColor:"#ff9400",width:"10%",height:"3px",opacity:"unset"}}/>
            {/* </center> */}
            <a href="https://api.whatsapp.com/send?phone=+910000000000&text=Hi,%20SWAADHYAN" target="_blank">
     <Button variant="primary" size="lg" style={{height:"7vh",backgroundColor:"#ff9400",border:"none"}}>
          <span style={{fontSize:"",fontWeight:"600",outline:"none"}}>+91 0000000000</span>
        </Button>
        </a>
        {/* <a href="https://api.whatsapp.com/send?phone=+910000000000&text=Hi,%20SWAADHYAN" target="_blank">
        <Button variant="primary" size="lg" style={{height:"7vh",backgroundColor:"#ff9400",border:"none",marginLeft:"10px"}}>
          <span style={{fontSize:"20px",fontWeight:"600",outline:"none"}}>+91 0000000000</span>
        </Button>
        </a> */}
        </div>
      
            </div>
            <div className='col-md-6 text-center mt-3'>
        <img className='' src={Support} style={{width:"50%"}}/>
        </div>
            </div>
            
        </div>
        {/* MOBILE VIEW  */}
        {/* <div className='py-4 mobile_view_visible'> */}
        <div className='py-4 mobile_view_visible' style={{textAlign:"center"}}>
        <span style={{fontSize:"30px",fontWeight:"700",color:"#fff"}}>
        <span style={{color:"#ff9400"}}>{' '}CUSTOMER </span>SUPPORT 
        </span>
        <br/>
        <br/>
        <div className='row'>
        <div className='col-md-6 mt-3'>
        <span style={{fontSize:"15px",color:"#fff"}}>Get In Touch With KUBER BOOK CARE For Any Queries,Emergenccies,Feedbacks Or Complaints.
        We Are Here To Help You 24/7 With Our Online Services.
        </span>
            <br/>
            <br/>
            <div  className=''>
            <span style={{fontSize:"20px",color:"#fff",fontWeight:"800"}}>Customer Care Number</span>
            <center>
            <hr style={{backgroundColor:"#ff9400",width:"10%",height:"3px",opacity:"unset"}}/>
            </center>
            <a href="https://api.whatsapp.com/send?phone=+910000000000&text=Hi,%20SWAADHYAN" target="_blank">
     <Button variant="primary" size="lg" style={{backgroundColor:"#ff9400",border:"none"}}>
          <span style={{fontSize:"",fontWeight:"600",outline:"none"}}>+91 0000000000</span>
        </Button>
        </a>
        {/* <a href="https://api.whatsapp.com/send?phone=+910000000000&text=Hi,%20SWAADHYAN" target="_blank">
        <Button variant="primary" size="lg" style={{height:"7vh",backgroundColor:"#ff9400",border:"none",marginLeft:"10px"}}>
          <span style={{fontSize:"20px",fontWeight:"600",outline:"none"}}>+91 0000000000</span>
        </Button>
        </a> */}
        </div>
      
            </div>
            <div className='col-md-6 text-center mt-3'>
        <img className='' src={Support} style={{width:"50%"}}/>
        </div>
            </div>
            
        </div>
        {/* </div> */}
    </Container>
    </div>
)
}
}