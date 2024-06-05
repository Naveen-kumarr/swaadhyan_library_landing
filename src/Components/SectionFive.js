import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Logo from '../Images/logo.png'
import Watsapp from '../Images/watsapp.png'
import Button from 'react-bootstrap/Button';

export default class SectionFive extends Component {
render() {
return (
    <>
    <div style={{backgroundColor:"#141515"}}>
    <Container>
        <div className='py-5 '>
        <Button variant="primary" size="lg" style={{boxShadow:"0 5px 1px #ff9400",minHeight:"10vh",width:"75%",borderRadius:"60px",backgroundColor:"#3c3c3c",border:"none"}}>
        <span style={{fontSize:"30px",fontWeight:"900" ,color:"#ff9400"}}>KUBER <sapn style={{color:"#fff"}}>EXCHANGE</sapn></span>
        </Button>
        </div>
    </Container>
    </div>

<div style={{backgroundColor:"#272727"}}>
<Container >
    <div className='py-5 '>
        <div className='row' style={{color:"#fff"}}>
            <div className='col-md-4 col-sm-12 some_for_mobile' style={{textAlign:"left"}}>
                <img src={Logo} style={{width:"15vw",float:""}}/>
            </div>
            <div className='col-md-2 col-sm-12'>
                <span style={{fontSize:"15px",fontWeight:"900"}}>KUBER HEAD OFIICE </span>
                <hr style={{width:"30%",margin:"revert",borderTop:"3px solid #ff9400"}}/>
                <img src={Watsapp} style={{width:"15px",marginRight:"5px"}}/>
                <span>+91 0000000000</span>
            </div>
            {/* <div className='col-md-2 col-sm-12'>
            <span style={{fontSize:"15px",fontWeight:"900"}}>KUBER HEAD OFIICE 1</span>
                <hr style={{width:"30%",margin:"revert",borderTop:"3px solid #ff9400"}}/>
                <img src={Watsapp} style={{width:"15px",marginRight:"5px"}}/>
                <span>+91 0000000000</span>
                </div>
                <div className='col-md-2 col-sm-12'>
                <span style={{fontSize:"15px",fontWeight:"900"}}>KUBER HEAD OFIICE 1</span>
                <hr style={{width:"30%",margin:"revert",borderTop:"3px solid #ff9400"}}/>
                <img src={Watsapp} style={{width:"15px",marginRight:"5px"}}/>
                <span>+91 0000000000</span>
                </div>
                <div className='col-md-2 col-sm-12'>
                <span style={{fontSize:"15px",fontWeight:"900"}}>KUBER HEAD OFIICE 1</span>
                <hr style={{width:"30%",margin:"revert",borderTop:"3px solid #ff9400"}}/>
                <img src={Watsapp} style={{width:"15px",marginRight:"5px"}}/>
                <span>+91 0000000000</span>
                </div> */}
        </div>
    </div>
</Container>
</div>
</>
)
}
}