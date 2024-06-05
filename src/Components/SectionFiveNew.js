import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Logo from '../Images/logo (1).png'
import Watsapp from '../Images/watsapp.png'
import Button from 'react-bootstrap/Button';

export default class SectionFiveNew extends Component {
render() {
return (
    <>
    <div style={{backgroundColor:"#141515"}}>
    <Container>
        <div className='py-5 '>
        <div className='card bg_card' variant="primary" size="lg" style={{minHeight:"35vh",width:"100%",borderRadius:"20px",border:"none"}}>
        {/* <span style={{fontSize:"30px",fontWeight:"900" ,color:"#ff9400"}}>KUBER <sapn style={{color:"#fff"}}>EXCHANGE</sapn></span> */}
        <div className='row'>
            <div className='col-md-6 col-sm-12 p-5' style={{textAlign:"left"}}>
            <span style={{fontSize:"25px",color:"#ff9400",fontWeight:"800"}}>Get In Touch With Us</span>
            <p style={{fontSize:"15px",color:"#fff"}}>
                For Any Queries,Emergenccies,Feedbacks Or Complaints.
                We Are Here To Help You 24/7 With Our Online Services.
            </p>
            </div>
            <div className='col-md-6 col-sm-12'>
                <div className='px-5 pt-5'>
                <span style={{fontSize:"25px",color:"#fff",fontWeight:"800"}}>We Deals Only On WhatsApp</span>
            <center>
            <hr style={{backgroundColor:"#ff9400",width:"10%",height:"3px",opacity:"unset",border:"1px"}}/>
            </center>
                </div>
           
            <div className='mobile_view_visible' style={{textAlign:"center"}}>
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
            <div className='mobile_view_none' style={{textAlign:"center"}}>
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
        </div>
        </div>
        </div>
    </Container>
    </div>

</>
)
}
}