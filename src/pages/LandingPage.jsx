import React, { Fragment, useState } from 'react'
import HeroSection from '../components/LandingPageComponents/HeroSection'
import Navbar from '../components/LandingPageComponents/Navbar'
import WhiteSpace from '../components/LandingPageComponents/WhiteSpace'
import Services from '../components/LandingPageComponents/Services'
import AboutSection from '../components/LandingPageComponents/AboutSection'

const LandingPage = () => {
    const [myState, setMyState] = useState(false);
    return (
        <Fragment>
            <Navbar />
            <HeroSection myState={myState}/>
            <WhiteSpace />
            <AboutSection SetStateFun={setMyState}/>
            <Services />
        </Fragment>
    )
}

export default LandingPage