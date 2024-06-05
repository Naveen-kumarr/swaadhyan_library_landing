import React, { Component } from 'react'
import NavbarOne from './NavbarDark'
import NavbarTwo from './NavbarBlack'
import Banner from './Banner'
import SectionTwo from './SectionTwo'
import SectionTwoNew from './SectionTwoNew'
import SectionThree from './SectionThree'
import SectionThreeNew from './SectionThreeNew'
import SectionFour from './SectionFour'
import SectionFourNew from './SectionFourNew'
import SectionFive from './SectionFive'
import SectionFiveNew from './SectionFiveNew'
import Footer from './Footer'
import FooterNew from './FooterNew'
export default class Landing extends Component {
state={
    balance:0,
}
render() {
return (
    <>
    {/* <NavbarOne/> */}
    <NavbarTwo/>
    <Banner/>
    <SectionTwoNew/>
    <SectionThreeNew/>
    {/* <SectionTwo/> */}
    {/* <SectionThree/> */}
    {/* <SectionFour/> */}
    <SectionFourNew/>
    {/* <SectionFive/> */}
    <SectionFiveNew/>
    {/* <Footer/> */}
    <FooterNew/>
    </>
)
}
}