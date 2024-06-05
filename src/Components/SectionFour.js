import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Register from '../Images/register.png'
import Multi from '../Images/multi.png'
import GetPaid from '../Images/getpaid.png'
import Deposit from '../Images/deposit.png'
import MinW from '../Images/minwithdrawal.png'

export default class SectionFour extends Component {
    state={
        card:''
    }
render() {
return (
    <div style={{backgroundColor:"#272727"}}>
    <Container>
        <div className='py-4 '>
            <span className='mobile_view_none' style={{fontSize:"35px",fontWeight:"700",color:"#fff"}}>HOW IT <span style={{color:"#ff9400"}}>WORKS</span></span>
            <span className='mobile_view_visible' style={{fontSize:"20px",fontWeight:"700",color:"#fff"}}>HOW IT <span style={{color:"#ff9400"}}>WORKS</span></span>
            <br/>
            <br/>
            <span className='mobile_view_none' style={{fontSize:"24px",fontWeight:"600",color:"#9f9f9f"}}>It's easier than you think. Follow 3 simple easy step</span>
            <span className='mobile_view_visible' style={{fontSize:"18px",fontWeight:"600",color:"#9f9f9f"}}>It's easier than you think. Follow 3 simple easy step</span>

            <br/>
            <br/>
            <div className='row' style={{color:"#fff"}}>
               <div className='col-md-7 col-sm-12'>
                <div className='row' style={{height:"100%"}}>
                    <div className='col-4 mb-3'>
                        {/* <div className='py-3' style={{border:"1px solid",backgroundColor:"#363636"}}> */}
                    <img className='section_img' src={Register} style={{width:"10vw",height:"100%"}}/>
                    {/* </div> */}
                    </div>
                    <div className='col-8 mb-3' style={{textAlign:"left"}}>
                        <h5 className='headingOne'>REGISTER</h5>
                        <span style={{fontSize:"16px"}}>
                            To start playing ,WatsApp us.
                            Click <a style={{textDecoration:"none"}} href="https://api.whatsapp.com/send?phone=+910000000000&text=Hi,%20I want to register" target="_blank"><span style={{color:"#ff9400"}}>HERE</span></a> for instant registration
                        </span>
                    </div>
                </div>
               </div>
               <div className='col-md-5 col-sm-12'>
               <div className='row' style={{height:"100%"}}>
                    <div className='col-4 mb-3'>
                        {/* <div className='py-3' style={{border:"1px solid",backgroundColor:"#363636"}}> */}
                    <img className='section_img' src={Multi} style={{width:"10vw",height:"100%"}}/>
                    {/* </div> */}
                    </div>
                    <div className='col-8 mb-3' style={{textAlign:"left"}}>
                        <h5 className='headingOne'>MIN BET</h5>
                        <span style={{fontSize:"16px"}}>
                           RS 100
                        </span>
                    </div>
                </div>
               </div>
             </div>
             <br/>
            <br/>
            <div className='row' style={{color:"#fff"}}>
               <div className='col-md-7 col-sm-12'>
                <div className='row' style={{height:"100%"}}>
                    <div className='col-4 mb-3'>
                        {/* <div className='py-3' style={{border:"1px solid",backgroundColor:"#363636"}}> */}
                    <img className='section_img' src={Deposit} style={{width:"10vw",height:"100%"}}/>
                    {/* </div> */}
                    </div>
                    <div className='col-8 mb-3' style={{textAlign:"left"}}>
                        <h5 className='headingOne'>DEPOSIT AND PLAY</h5>
                        <span style={{fontSize:"16px"}}>
                           Deposit money and play on multiple exchanges on your choice
                        </span>
                    </div>
                </div>
               </div>
               <div className='col-md-5 col-sm-12'>
               <div className='row' style={{height:"100%"}}>
                    <div className='col-4 mb-3'>
                        {/* <div className='py-3' style={{border:"1px solid",backgroundColor:"#363636"}}> */}
                    <img className='section_img' src={Multi} style={{width:"10vw",height:"100%"}}/>
                    {/* </div> */}
                    </div>
                    <div className='col-8 mb-3' style={{textAlign:"left"}}>
                        <h5 className='headingOne'>MIN REFILL</h5>
                        <span style={{fontSize:"16px"}}>
                           RS 100
                        </span>
                    </div>
                </div>
               </div>
             </div>
             <br/>
            <br/>
            <div className='row' style={{color:"#fff"}}>
               <div className='col-md-7 col-sm-12'>
                <div className='row' style={{height:"100%"}}>
                    <div className='col-4 mb-3'>
                        {/* <div className='py-3' style={{border:"1px solid",backgroundColor:"#363636"}}> */}
                    <img className='section_img' src={GetPaid} style={{width:"10vw",height:"100%"}}/>
                    {/* </div> */}
                    </div>
                    <div className='col-8 mb-3' style={{textAlign:"left"}}>
                        <h5 className='headingOne'>GET PAID</h5>
                        <span style={{fontSize:"16px"}}>
                           Deposit money and play on multiple exchanges on your choice
                        </span>
                    </div>
                </div>
               </div>
               <div className='col-md-5 col-sm-12'>
               <div className='row' style={{height:"100%"}}>
                    <div className='col-4 mb-3'>
                        {/* <div className='py-3' style={{border:"1px solid",backgroundColor:"#363636"}}> */}
                    <img className='section_img' src={MinW} style={{width:"10vw",height:"100%"}}/>
                    {/* </div> */}
                    </div>
                    <div className='col-8 mb-3' style={{textAlign:"left"}}>
                        <h5 className='headingOne'>MIN WITHDRAWAL</h5>
                        <span style={{fontSize:"16px"}}>
                           RS 100
                        </span>
                    </div>
                </div>
               </div>
             </div>
        </div>
    </Container>
    </div>
)
}
}