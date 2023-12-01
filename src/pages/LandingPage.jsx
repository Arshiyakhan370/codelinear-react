import React, { Fragment, useState } from 'react'
import HeroSection from '../components/LandingPageComponents/HeroSection'
import Navbar from '../components/LandingPageComponents/Navbar'
import WhiteSpace from '../components/LandingPageComponents/WhiteSpace'
import Services from '../components/LandingPageComponents/Services'
import AboutSection from '../components/LandingPageComponents/AboutSection'
import Portfolio from '../components/LandingPageComponents/Portfolio'
import Industries from '../components/LandingPageComponents/Industries'
import Footer from '../components/LandingPageComponents/Footer'
import LetsTalkSection from '../components/LandingPageComponents/LetsTalkSection'

const LandingPage = () => {
    const [myState, setMyState] = useState(false);
    return (
        <Fragment>
            <Navbar />
            <HeroSection myState={myState}/>
            <WhiteSpace />
            <AboutSection myState={myState} setMyState={setMyState}/>
            <Services />
            <Portfolio/>
            <Industries SetStateFun={setMyState}/>
            <LetsTalkSection/>
            <Footer/>
        </Fragment>
    )
}

export default LandingPage