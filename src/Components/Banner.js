import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import RightTriangle from '../Images/triangleRight.png'
import LeftTriangle from '../Images/triangleLeft.png'
import Watsapp from '../Images/watsapp.png'
export default class Banner extends Component {
render() {
return (
 <>
 <div className='banner'>
     <div className='container'>
     <div className='pt-5 mobile_view_none' style={{textAlign:"left"}}>
     <span style={{fontSize:"65px",fontWeight:"900",color:"#ff9400"}}>SWAADHYAN <span style={{color:"#fff"}}>LIBRARY</span></span>
     </div>
     <div className='pt-4 mobile_view_none' style={{textAlign:"left"}}>
     <span style={{fontSize:"35px",fontWeight:"800",color:"#fff"}}>
         <span className=''>Study, Study, Study, Study</span>
         </span>
         <p style={{fontSize:"30px",fontWeight:"800",color:"#e7e7e7"}}>
         <span className=''>Easiest way to Study</span>
         </p>
         
     </div>
     <div className='pt-5 mobile_view_none' style={{textAlign:"left"}}>
     <img className='' src={Watsapp} style={{width:"5vh",marginBottom:"15px",marginRight:"10px"}}/>
     <span style={{fontSize:"30px",fontWeight:"800",color:"#fff"}}>WatsApp Us on</span><br/><br/>
     <a href="https://api.whatsapp.com/send?phone=+910000000000&text=Hi,%20SWAADHYAN" target="_blank">
     <Button variant="primary" size="lg" style={{height:"9vh",backgroundColor:"#ff9400",border:"none"}}>
          <span style={{fontSize:"",fontWeight:"600",outline:"none"}}>+91 0000000000</span>
        </Button>
        </a>
        <a href="https://api.whatsapp.com/send?phone=+910000000000&text=Hi,%20SWAADHYAN" target="_blank">
        <Button variant="primary" size="lg" style={{height:"9vh",backgroundColor:"#ff9400",border:"none",marginLeft:"10px"}}>
          <span style={{fontSize:"",fontWeight:"600",outline:"none"}}>+91 0000000000</span>
        </Button>
        </a>
       
     </div>
     </div>
     
     <div className='mobile_view_visible py-5'>
     <div className='container' style={{textAlign:"left"}}>
     <span style={{fontSize:"35px",fontWeight:"900",color:"#ff9400"}}>SWAADHYAN <span style={{color:"#fff"}}>LIBRARY</span></span>
     <div className='pt-4' style={{textAlign:"left"}}>
     <span style={{fontSize:"20px",fontWeight:"800",color:"#fff"}}>
         {/* <img style={{width:"180px"}} src={LeftTriangle}/> */}
         <span className=''>Study, Study, Study, Study</span>
         {/* <img style={{width:"180px"}} src={RightTriangle}/> */}
         </span>
         <p style={{fontSize:"20px",fontWeight:"800",color:"#e7e7e7"}}>
         {/* <img style={{width:"180px"}} src={LeftTriangle}/> */}
         <span className=''>Easiest way to Study</span>
         {/* <img style={{width:"180px"}} src={RightTriangle}/> */}
         </p>
         
     </div>
     <div className='pt-5' style={{textAlign:"left"}}>
     <img className='' src={Watsapp} style={{width:"3vh",marginBottom:"5px",marginRight:"10px"}}/>
     <span style={{fontSize:"20px",fontWeight:"800",color:"#fff"}}>WatsApp Us on</span><br/><br/>
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
  </>
)
}
}