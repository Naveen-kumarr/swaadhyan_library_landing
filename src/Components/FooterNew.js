import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Logo from '../Images/logo.jpg'
import Watsapp from '../Images/watsapp.png'
import Button from 'react-bootstrap/Button';

export default class FooterNew extends Component {
render() {
return (
    <>
    <div style={{backgroundColor:"#141515"}}>
    <Container>
        <div className='py-3 '>
        <div className='row' style={{color:"#fff"}}>
            <div className='col-md-8 col-sm-12 some_for_mobile' style={{textAlign:"left"}}>
               {/* <span style={{fontSize:"10px",color:"#ff9400"}}>Kuber Exchange<span style={{color:"#fff"}}>@2022 - All rights reserved</span></span> */}
               <img src={Logo} style={{width:"85px"}}/>
            </div>
                <div className='col-md-4 col-sm-12'>
                <span style={{fontSize:"15px"}}>Follow Us: 
                <i class="fa fa-facebook p-1"  aria-hidden="true"></i>
                <i class="fa fa-twitter p-1"></i>
                <i class="fa fa-linkedin p-1"></i>
                <i class="fa fa-instagram p-1"></i>
                </span>
                </div>
        </div>
        </div>
    </Container>
    </div>
</>
)
}
}