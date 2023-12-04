
import React, { useState } from 'react'
import image1 from "../../assets/images/iStock-1348120238 1.png";
import { animationFun } from "../GSAPanimation/GSAPaniation";
import { gsap } from "gsap";



const AboutSection = ({setMyState}) => {
const [isHover, SetIsHover] = useState(false);

    const handleHover = () => {
        // setMyState(true);
        gsap.to(document.getElementsByClassName("myClass")[0], {
            background:
                "conic-gradient(from 180deg at 44.4% 50%,#46200D, #D4A381 43.31266522407532deg, #46200D 360deg)",
            color: "initial",
            duration: 0.3,
            ease: "power2.inOut",
        });
        animationFun("mainHeading", "white")
        animationFun("paraGraph", "white")
        animationFun("about-us", "white")
    };

    const handleMouseLeave = () => {
        // setMyState(false);
        gsap.to(document.getElementsByClassName("myClass")[0], {
            background: "initial",
            color: "initial",
            duration: 0.3,
            ease: "power2.inOut",
        });
        animationFun("mainHeading", "initial")
        animationFun("paraGraph", "initial")
        animationFun("about-us", "initial")
    };

    return (
        <div className='pr-12 pb-12 hoverEffect pt-[220px] myClass' onMouseEnter={() => { handleHover("hoverEffect", "toChangeColor", "toChangeGradientBg"); SetIsHover(true); setMyState(true) }} onMouseLeave={() => { handleMouseLeave("hoverEffect", "toChangeColor", "toChangeGradientBg"); SetIsHover(false); setMyState(false) }}>
            <div className='flex flex-col mb-[100px] space-y-3 md:space-x-12'>
                <h1 className='text-4xl md:text-[70px] lg:text-[80px] leading-[90px] toChangeColor   ml-10 uppercase lg:w-[60vw] mainHeading'>Amet magnis diam varius viverra at</h1>
                <div className='flex flex-col'>
                    <div className='w-[100%] md:w-[34%] flex flex-col space-y-16 ml-14 mr-32 pr-10 md:ml-auto'>
                        <p className='toChangeColor paraGraph text-[16.5px]'>Id donec rutrum mauris venenatis ac.Id metus lorem mus sit magna
                            Varius cum proin. Accumsan volutpat natoque purus pellentesque nec ac
                            nulla turpis consectetur. Fermentum ut non commodo lacus enim.</p>
                        <div className='relative text-right mr-12 toChangeColor about-us'>About Us
                            {/* circle */}
                            <div>
                                {isHover ? <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16.482"
                                    height="19.434"
                                    viewBox="0 0 20 17"
                                    fill="none"
                                    className="absolute right-[-40px] toChangeColor bottom-1"
                                >
                                    <rect
                                        x="0.138977"
                                        y="9.04883"
                                        width="1.15946"
                                        height="19.2297"
                                        transform="rotate(-90 0.138977 9.04883)"
                                        fill="#FFFFFF"
                                    />
                                    <rect
                                        x="12.3485"
                                        y="1.01855"
                                        width="1.15946"
                                        height="9.75225"
                                        transform="rotate(-38.8464 12.3485 1.01855)"
                                        fill="#FFFFFF"
                                    />
                                    <rect
                                        width="1.15946"
                                        height="9.75225"
                                        transform="matrix(0.77883 0.627235 0.627235 -0.77883 12.3484 15.9147)"
                                        fill="#FFFFFF"
                                    />
                                </svg> : <svg xmlns="http://www.w3.org/2000/svg"
                                className='absolute right-[-25px] bottom-[5px]' width="21" height="17" viewBox="0 0 21 17" fill="none">
                                    <rect x="0.855957" y="9.23779" width="1.15946" height="19.2297" transform="rotate(-90 0.855957 9.23779)" fill="#000000" />
                                    <rect x="13.0658" y="1.20825" width="1.15946" height="9.75225" transform="rotate(-38.8464 13.0658 1.20825)" fill="#000000" />
                                    <rect width="1.15946" height="9.75225" transform="matrix(0.77883 0.627235 0.627235 -0.77883 13.0658 16.1035)" fill="#000000" />
                                </svg>}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="90"
                                    height="89"
                                    viewBox="0 0 90 89"
                                    fill="none"
                                    className='absolute right-[-60px] toChangeGradientBg bottom-[-30px]'
                                >
                                    {!isHover ? <circle
                                        cx="44.8558"
                                        cy="44.4689"
                                        r="43.6546"
                                        transform="rotate(-90 44.8558 44.4689)"
                                        stroke="#131313"
                                        stroke-width="1"
                                    />
                                        : <svg xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 89 89" fill="none">
                                            <g opacity="0.6">
                                                <g filter="url(#filter0_i_484_230)">
                                                    <circle cx="44.2176" cy="44.7814" r="44.1546" transform="rotate(-90 44.2176 44.7814)" fill="url(#paint0_radial_484_230)" />
                                                </g>
                                                <circle cx="44.2176" cy="44.7814" r="43.6546" transform="rotate(-90 44.2176 44.7814)" stroke="white" />
                                            </g>
                                            <defs>
                                                <filter id="filter0_i_484_230" x="-2.93701" y="0.626831" width="91.3092" height="88.3092" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                    <feOffset dx="-3" />
                                                    <feGaussianBlur stdDeviation="1.5" />
                                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.937167 0 0 0 0 0.879167 0 0 0 1 0" />
                                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_484_230" />
                                                </filter>
                                                <radialGradient id="paint0_radial_484_230" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(46.7279 65.6261) rotate(-86.88) scale(92.6688 121.391)">
                                                    <stop stop-color="#FFE7D9" />
                                                    <stop offset="0.723861" stop-color="#F6DADA" stop-opacity="0" />
                                                </radialGradient>
                                            </defs>
                                        </svg>
                                    }
                                </svg>

                                {/* circle */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col mb-10 space-y-3 w-screen md:space-x-12 md:flex-row'>
                <img
                    src={image1}
                    alt="Image"
                    className={`max-w-[578px] max-h-[607px] ml-12 mr-12 lg:mr-1 lg:mt-[-180px] transition-opacity duration-300 ease-in-out`}
                />
            </div>
        </div>
    )
}


export default AboutSection;
