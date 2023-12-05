import React, { useState } from 'react'
import image from "../../assets/images/shubham-dhage-05rC4c5-oWw-unsplash 2.png";
import { gsap } from 'gsap';


import { handleMouseEnter, handleMouseLeave } from '../GSAPanimation/GSAPaniation';
import { useEffect } from 'react';
import _gsap from 'gsap/gsap-core';

const Practice = ({ setMyState }) => {
    const [isImgShow, setisImgShow] = useState(true);
    const [isHover, SetIsHover] = useState(false);
    const [isColorChange, setIsColorChange]= useState(false)
    let id;
    const mouseLeaveHandler = () => {
        id = setTimeout(() => {
            setisImgShow(true)
        }, [300])
    }

    gsap.to('.imgClass', {
      opacity: 1,
      y: -20,
      duration: 0.5,
      scrollTrigger: {
        trigger: '.imgClass',
        start: 'top center', 
        end: 'bottom center', 
        toggleActions: 'play none none reverse', 
        markers: true 
      }
    });
    useEffect(() => {
        gsap.to(".left1", {
            visibility: "visible",
            y: "e",
            rotate: "e",
            duration: 2.3
          });
          
      gsap.to('.imgClass', {
        opacity: 0,
        y: 100,
        duration: 0.5,
        scrollTrigger: {
          trigger: '.imgClass',
          start: 'top center',
          end: 'bottom center',
          toggleActions: 'play none none reverse',
          markers: true
        }
      });
    }, []);
  return (
    <div>
        <div className='pr-12 pb-12 hoverEffect pt-[80px]  md:pt-[120px] lg:pt-[220px]' onMouseEnter={() => { handleMouseEnter("hoverEffect", "toChangeColor"); SetIsHover(true); setMyState(true);setIsColorChange(true) }} onMouseLeave={() => { handleMouseLeave("hoverEffect", "toChangeColor"); SetIsHover(false); setMyState(true);setIsColorChange(false)}}>
            <div className='flex flex-col mb-[100px] space-y-3 md:space-x-12 md:flex-row'>
                <h1 className='text-3xl md:text-[70px] lg:text-[80px] leading-[40px] md:leading-[90px] lg:leading-[90px] toChangeColor  mr-16 md:mr-0 lg:mr-0 ml-16 md:ml-10 lg:ml-10'>INDUSTRIES WE SERVED</h1>
                <div className='flex flex-col'> 
                <div className='w-[100%] md:w-[180%] lg:w-[75%]  text-[18px]  mt-0 md:mt-44 lg:mt-0 toChangeColor ml-5 md:ml-[-130%] lg:ml-20 mr-24'>
                    <p >Id donec rutrum mauris venenatis ac.Id metus lorem mus sit magna
                        Varius cum proin. Accumsan volutpat natoque purus pellentesque nec ac nulla turpis consectetur. Fermentum ut non commodo lacus enim.</p>
                    <div className='relative text-right mt-16 md:mt-24 lg:mt-24 mr-44 toChangeColor'>SERVICES
                        {/* circle */}
                        <div>
                             {!isHover ? <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16.482"
                                height="19.434"
                                viewBox="0 0 20 17"
                                fill="none"
                                className="absolute right-[-20px] toChangeColor bottom-1"
                            >
                                <rect
                                    x="0.138977"
                                    y="9.04883"
                                    width="1.15946"
                                    height="19.2297"
                                    transform="rotate(-90 0.138977 9.04883)"
                                    fill="#131313"
                                />
                                <rect
                                    x="12.3485"
                                    y="1.01855"
                                    width="1.15946"
                                    height="9.75225"
                                    transform="rotate(-38.8464 12.3485 1.01855)"
                                    fill="#131313"
                                />
                                <rect
                                    width="1.15946"
                                    height="9.75225"
                                    transform="matrix(0.77883 0.627235 0.627235 -0.77883 12.3484 15.9147)"
                                    fill="#131313"
                                />
                            </svg> 
                            : <svg xmlns="http://www.w3.org/2000/svg" width="21" height="17" viewBox="0 0 21 17" fill="none"
                             className="absolute right-[-45px] toChangeColor bottom-1"> 
                                <rect x="0.855957" y="9.23779" width="1.15946" height="19.2297" transform="rotate(-90 0.855957 9.23779)" fill="#DCE2C0" />
                                <rect x="13.0658" y="1.20825" width="1.15946" height="9.75225" transform="rotate(-38.8464 13.0658 1.20825)" fill="#DCE2C0" />
                                <rect width="1.15946" height="9.75225" transform="matrix(0.77883 0.627235 0.627235 -0.77883 13.0658 16.1035)" fill="#DCE2C0" />
                            </svg>}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="90"
                                height="89"
                                viewBox="0 0 90 89"
                                fill="none"
                                className='absolute right-[-60px] bottom-[-30px]'
                            >
                                {!isHover ? <circle
                                    cx="44.8558"
                                    cy="44.4689"
                                    r="43.6546"
                                    transform="rotate(-90 44.8558 44.4689)"
                                    stroke="#131313"
                                    stroke-width="1"
                                    className='absolute right-[-60px] bottom-[-30px]'
                                /> : <svg xmlns="http://www.w3.org/2000/svg" 
                                className="absolute right-[-30px] toChangeColor bottom-1 border border-red-900" width="89" height="89" viewBox="0 0 89 89" fill="none"
                                >
                                    <g opacity="0.6">
                                        <g filter="url(#filter0_i_484_230)">
                                            <circle cx="44.2176" cy="44.7814" r="44.1546" transform="rotate(-90 44.2176 44.7814)" fill="url(#paint0_radial_484_230)" />
                                        </g>
                                        <circle cx="44.2176" cy="44.7814" r="43.6546" transform="rotate(-90 44.2176 44.7814)" stroke="white"  className='absolute right-[-60px] bottom-[-30px]'/>
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
            <div className='bottom concept relative'>
            <div className='flex items-start'>
            <div className='left-bootom-img flex flex-col mb-10 space-y-3 w-screen md:space-x-12 lg:flex-row'>
                {isImgShow && <img
                    src={image}
                    alt="Your Alt Text"
                    className={`max-w-[628px] max-h-[607px] mr-8 md:mr-0 lg:mr-0 ml-4 md:ml-12 lg:ml-12 mt-5 md:mt-[-50px] lg: lg:mt-[-50px]  text-center md:text-left lg:text-left transition-opacity duration-300 ease-in-out imgClass ${isImgShow ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                />}
            </div>
            </div>
            </div>
            </div>
    </div>
  )
}

export default Practice