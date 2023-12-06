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
import Practice from '../components/LandingPageComponents/Practice'
import NewIndus from '../components/LandingPageComponents/NewIndus'

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
            <Industries  setMyState={setMyState}/>
            {/* <NewIndus/> */}
            <LetsTalkSection/>
            <Footer/>
        </Fragment>
    )
}

export default LandingPage