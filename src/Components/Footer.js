import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Logo from '../Images/logo.png'
import Watsapp from '../Images/watsapp.png'
import Button from 'react-bootstrap/Button';

export default class Footer extends Component {
render() {
return (
    <>
    <div style={{backgroundColor:"#141515"}}>
    <Container>
        <div className='py-3 '>
        <div className='row' style={{color:"#fff"}}>
            <div className='col-md-4 col-sm-12 some_for_mobile' style={{textAlign:"left"}}>
               <span style={{fontSize:"10px",color:"#ff9400"}}>Kuber Exchange<span style={{color:"#fff"}}>@2022 - All rights reserved</span></span>
               
            </div>
            <div className='col-md-2 col-sm-12'>
                {/* <span style={{fontSize:"10px"}}>Betting is not legal in India</span> */}
            </div>
            <div className='col-md-2 col-sm-12'>
            <span style={{fontSize:"10px"}}>Responsible Gambling</span>
                </div>
                <div className='col-md-2 col-sm-12'>
                <span style={{fontSize:"10px"}}>Prohibited territories</span>
                </div>
                <div className='col-md-2 col-sm-12'>
                <span style={{fontSize:"10px"}}>Gamecare</span>
                </div>
        </div>
        </div>
    </Container>
    </div>
</>
)
}
}