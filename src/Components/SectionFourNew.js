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
import Cricket from '../Images/cricket.png'
import Casino from '../Images/casino.png'
import Football from '../Images/football.png'
import Tennis from '../Images/tennis.png'
export default class SectionFourNew extends Component {
render() {
return (
    <div className='banner_four py-5'>
    <Container style={{textAlign:"left"}}>
        <div className='py-4 mobile_view_none'>
            <div className='row'>
                <div className='col-md-6'>
            <div className='row'>
                <div className='col-md-6' style={{textAlign:"right",color:"#fff",fontWeight:"800"}}>
                <img className='' src={Cricket} style={{width:"100%",height:"30vh"}}/>
                <br/>
                <br/>
                 <p>Cricket</p>
                 <img className='' src={Football} style={{width:"100%",height:"30vh"}}/>
                 <br/>
                <br/>
                 <p>Football</p>
                </div>
                <div className='col-md-6' style={{textAlign:"left",color:"#fff",fontWeight:"800"}}>
                <img className='' src={Casino} style={{width:"100%",height:"30vh"}}/>
                <br/>
                <br/>
                <p>Casino</p>
                <img className='' src={Tennis} style={{width:"100%",height:"30vh"}}/>
                <br/>
                <br/>
                <p>Tennis</p>
                    </div>
            </div>
            </div>

            <div className='col-md-6 mt-5'>
            <span style={{fontSize:"30px",fontWeight:"700",color:"#fff"}}>
            HOW TO GET ADMISSION IN<span style={{color:"#603e0f"}}>{' '}LIBRARY</span> 
                </span>
                <br/>
                <br/>
                <span style={{fontSize:"20px",color:"#fff"}}>With Our Step-By-Step Guide For Beginners,Get Started Studying.Start Learning Now.
                <span style={{fontWeight:"900"}}>24/7 ACTIVE.</span>
        </span>
        <div  className='mt-5'>
            <span style={{fontSize:"30px",color:"#fff",fontWeight:"800"}}>We Deals Only On WhatsApp</span>
            {/* <center> */}
            <hr style={{backgroundColor:"#ff9400",width:"10%",height:"3px",opacity:"unset",border:"1px"}}/>
            {/* </center> */}
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
            </div>
       
        <br/>
        <br/>
        </div>
        {/* MOBILE VIEW  */}
        {/* <div className='py-4 mobile_view_visible'> */}
        <div className='py-4 mobile_view_visible' style={{textAlign:"center"}}>
        <div className='row'>
                <div className='col-md-6'>
            <div className='row'>
                <div className='col-md-6' style={{textAlign:"",color:"#fff",fontWeight:"800"}}>
                <img className='' src={Cricket} style={{width:"100%",height:"30vh"}}/>
                <br/>
                <br/>
                 <p>Cricket</p>
                 <img className='' src={Football} style={{width:"100%",height:"30vh"}}/>
                 <br/>
                <br/>
                 <p>Football</p>
                </div>
                <div className='col-md-6' style={{textAlign:"",color:"#fff",fontWeight:"800"}}>
                <img className='' src={Casino} style={{width:"100%",height:"30vh"}}/>
                <br/>
                <br/>
                <p>Casino</p>
                <img className='' src={Tennis} style={{width:"100%",height:"30vh"}}/>
                <br/>
                <br/>
                <p>Tennis</p>
                    </div>
            </div>
            </div>

            <div className='col-md-6 mt-5'>
            <span style={{fontSize:"30px",fontWeight:"700",color:"#fff"}}>
            HOW TO GET ADMISSION IN <span style={{color:"#603e0f"}}>{' '}LIBRARY</span> 
                </span>
                <br/>
                <br/>
                <span style={{fontSize:"20px",color:"#fff"}}>With Our Step-By-Step Guide For Beginners,Get Started Studying.Start Learning Now.
                <span style={{fontWeight:"900"}}>24/7 ACTIVE.</span>
        </span>
        <div  className='mt-5'>
            <span style={{fontSize:"30px",color:"#fff",fontWeight:"800"}}>We Deals Only On WhatsApp</span>
            {/* <center> */}
            <hr style={{backgroundColor:"#ff9400",width:"10%",height:"3px",opacity:"unset",border:"1px"}}/>
            {/* </center> */}
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
            </div>
       
        <br/>
        <br/>
        </div>
        {/* </div> */}
    </Container>
    </div>
)
}
}