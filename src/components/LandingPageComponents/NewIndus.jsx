import React, { useEffect, useState } from 'react';
import image from '../../assets/images/shubham-dhage-05rC4c5-oWw-unsplash 2.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const NewIndus = () => {
    
  useEffect(() => {
    const section = document.querySelector('.Industry');
    const body = document?.querySelector('.body');
    const h1 = section?.querySelector('.h1');
    const p = section?.querySelector('.p');
    const div = section?.querySelector('.div');
    const serve = section?.querySelector('.serve');
    const leftText = document.querySelector('.lefttext');

    gsap.to(".left-bottom-img", { opacity: 0, pointerEvents: "none", duration: 0.3 });
    gsap.to(leftText, {
        visibility: "visible",
        y: "e",
        rotate: "-e",
        duration: 0.3,
        // y: "-10%", opacity: 1, duration: 1, ease: "power3.inOut"
    })
    gsap.to(".middel", {
                background: "#D30AA7",
                width: "600%",
                visibility: "hidden",
                duration: 8.3
              });
              gsap.to(".middel", {
                          background: "#D30AA7",
                          width: "600%",
                          visibility: "hidden",
                          duration: 8.3
                        });
                        // gsap.to(".one-list", { background: "#D30AA7", duration: 8.3 });
                        // gsap.to(".right-consult", {
                        //             background: "#D3D4A7",
                        //             width: "600%",
                        //             duration: 8.3
                      
                        //           });
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        // lerp: 30,
        duration: 0.5,
        
        
       
      },
      
    });
  }, []);
  const onEnterBack = () => {
    gsap.to('.body', { background: 'white', duration: 0.5 });
    gsap.to('.h1, .p, .div, .serve', { color: 'black', duration: 0.5 });
};


  const onEnter = () => {
    gsap.to('.body', {
        duration: 0.5,
        background: 'conic-gradient(from 193deg at 35.28% 47.29%,#386128, #BCC66F 50.44203579425812deg, #386128 360deg)',
    });
    gsap.to('.h1, .p, .div, .serve', { color: '#F5FF9D', duration: 0.5 });
};

    
  
    // gsap.to(".left-bottom-img", { opacity: 0, pointerEvents: "none", duration: 0.3 });
    // gsap.to(".one-list", { background: "#D30AA7", duration: 8.3 });
           
    //         gsap.to(".right-consult", {
    //           background: "#D3D4A7",
    //           width: "600%",
    //           duration: 8.3

    //         });
           
    //         gsap.to(".middel", {
    //           background: "#D3DAA7",
    //           duration: 0.3
    //         });
           
            // gsap.to(".lefttext", {
            //   visibility: "visible",
            //   y: "-10",
            //   rotate: "-10",
            //   duration: 2.3
            // translateY: '-100%', duration: 0.5, ease: 'power2.inOut' 
            // });
           
    //         gsap.to(".middel", {
    //           background: "#D30AA7",
    //           width: "600%",
    //           visibility: "hidden",
    //           duration: 8.3
    //         });
           
            gsap.to(".lefttext", { visibility: "visible", ypercent:-100 , ease:"slow", duration: 0.3 });
           
            gsap.to(".right", { visibility: "hidden", duration: 0.3 });
          
  

  return (
    <section className='Industry'>
      <div className='body pt-[80px] md:pt-[120px] lg:pt-[220px]'>
        <div className='flex flex-col md:flex-col lg:flex-row'>
          <h1 className='h1 text-3xl md:text-[70px] lg:text-[80px] leading-[40px] md:leading-[90px] lg:leading-[90px] toChangeColor  mr-16 md:mr-56 lg:mr-0 ml-16 md:ml-10 lg:ml-10'>
            INDUSTRIES WE SERVED
          </h1>
          <p className='p ml-4 md:ml-8 lg:ml-44 mr-4 md:mr-8 lg:mr-44 mt-4'>
            Id donec rutrum mauris venenatis ac.Id metus lorem mus sit magna Varius cum proin.
            Accumsan volutpat natoque purus pellentesque nec ac nulla turpis consectetur.
            Fermentum ut non commodo lacus enim
          </p>
        </div>
        <div className=' serve relative text-right mt-10 md:mt-12 lg:mt-[-1%] mr-40 md:mr-52 lg:mr-52  mb-16 md:mb-12 toChangeColor'>
          SERVICES
          {/* arrow svg */}
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16.482'
              height='19.434'
              viewBox='0 0 20 17'
              fill='none'
              className='absolute right-[-20px] mt-4 toChangeColor bottom-6'
            >
              <rect
                x='0.138977'
                y='9.04883'
                width='1.15946'
                height='19.2297'
                transform='rotate(-90 0.138977 9.04883)'
                fill='#131313'
              />
              <rect
                x='12.3485'
                y='1.01855'
                width='1.15946'
                height='9.75225'
                transform='rotate(-38.8464 12.3485 1.01855)'
                fill='#131313'
              />
              <rect
                width='1.15946'
                height='9.75225'
                transform='matrix(0.77883 0.627235 0.627235 -0.77883 12.3484 15.9147)'
                fill='#131313'
              />
            </svg>
            :{' '}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='21'
              height='17'
              viewBox='0 0 21 17'
              fill='none'
              className='absolute right-[-45px] toChangeColor bottom-1'
            >
              <rect
                x='0.855957'
                y='9.23779'
                width='1.15946'
                height='19.2297'
                transform='rotate(-90 0.855957 9.23779)'
                fill='#DCE2C0'
              />
              <rect
                x='13.0658'
                y='1.20825'
                width='1.15946'
                height='9.75225'
                transform='rotate(-38.8464 13.0658 1.20825)'
                fill='#DCE2C0'
              />
              <rect
                width='1.15946'
                height='9.75225'
                transform='matrix(0.77883 0.627235 0.627235 -0.77883 13.0658 16.1035)'
                fill='#DCE2C0'
              />
            </svg>
            {/* circle svg */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='90'
              height='89'
              viewBox='0 0 90 89'
              fill='none'
              className='absolute right-[-60px] bottom-[-10px]'
            >
              <circle
                cx='44.8558'
                cy='44.4689'
                r='43.6546'
                transform='rotate(-90 44.8558 44.4689)'
                stroke='#131313'
                stroke-width='1'
                className='absolute right-[-60px] bottom-[-40px]'
              />
              :{' '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='absolute right-[-30px] toChangeColor bottom-1 '
                width='89'
                height='89'
                viewBox='0 0 89 89'
                fill='none'
              >
                <g opacity='0.6'>
                  <g filter='url(#filter0_i_484_230)'>
                    <circle
                      cx='44.2176'
                      cy='44.7814'
                      r='44.1546'
                      transform='rotate(-90 44.2176 44.7814)'
                      fill='url(#paint0_radial_484_230)'
                    />
                  </g>
                  <circle
                    cx='44.2176'
                    cy='44.7814'
                    r='43.6546'
                    transform='rotate(-90 44.2176 44.7814)'
                    stroke='white'
                    className='absolute right-[-60px] bottom-[-30px]'
                  />
                </g>
                <defs>
                  <filter
                    id='filter0_i_484_230'
                    x='-2.93701'
                    y='0.626831'
                    width='91.3092'
                    height='88.3092'
                    filterUnits='userSpaceOnUse'
                    color-interpolation-filters='sRGB'
                  >
                    <feFlood flood-opacity='0' result='BackgroundImageFix' />
                    <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
                    <feColorMatrix
                      in='SourceAlpha'
                      type='matrix'
                      values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                      result='hardAlpha'
                    />
                    <feOffset dx='-3' />
                    <feGaussianBlur stdDeviation='1.5' />
                    <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
                    <feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 0.937167 0 0 0 0 0.879167 0' />
                    <feBlend mode='normal' in2='shape' result='effect1_innerShadow_484_230' />
                  </filter>
                  <radialGradient
                    id='paint0_radial_484_230'
                    cx='0'
                    cy='0'
                    r='1'
                    gradientUnits='userSpaceOnUse'
                    gradientTransform='translate(46.7279 65.6261) rotate(-86.88) scale(92.6688 121.391)'
                  >
                    <stop stop-color='#FFE7D9' />
                    <stop offset='0.723861' stop-color='#F6DADA' stop-opacity='0' />
                  </radialGradient>
                </defs>
              </svg>
            </svg>
            {/* circle */}
          </div>
        </div>
        <div className='botton concept relative flex-col md:flex-col mb-10 space-y-3 w-screen md:space-x-12 lg:flex-row'onMouseEnter={onEnter} onMouseLeave={onEnterBack}>
          <div className='flex items-start'>
            <div className='flex-col w-[628px]  max-h-[515px] mr-8 md:mr-0 lg:mr-0 ml-4 md:ml-12 lg:ml-12 mt-5 md:mt-[-60px] lg: lg:mt-[-40px]  text-center md:text-left lg:text-left transition-opacity duration-300 ease-in-out'>
              <img src={image} alt='' className=''/>
            
            </div>
            
            <div className='hidden ml-8 text-2xl py-4 mt-10 hover:middel hover:left-bottom-img'>
            <div className='middle-consult middle mb-12'>FINTECH</div>
            <div className='middle-consult middle mb-12'>TECHNOLOGY</div>
            
           
           <div className='middle-consult middle mb-12'>ECOMMERCE</div>
           <div className='middle-consult middle mb-12'>SUPPLY CHAIN AND LOGISTICS</div>
           <div className='middle-consult middle mb-12'>HEALTHCARE</div>
           <div className='middle-consult middle mb-12'>FOOD AND BEVERAGES</div>
           <div className='middle-consult middle mb-12'>BIOPHARMACEUTICAL</div>
           <div className='middle-consult middle mb-12'>MANUFACTURING</div>
           </div>
          











            <div className=' div list-one one-list hover:w-screen hover:middel text-2xl text-center md:text-left lg:text-left ' >
              <div className='hover:right  hover:middel hover:lefttext hover:bg-[#D3DAA7] w-full h-auto hover:ml-2 hover:text-[#577F3E] flex flex-row left-consulting  hover:text-8xl hover:py-2 uppercase hover:text-left hover:left-bottom-img ' >Fintech
              <div className='middle-consult middel'>FINTECH</div>
              <div className='right-consult right '>
              
                <ul className='right flex uppercase text-right  text-[15px]  font-bold'>
                  <li className='mr-4  mt-10'>klub</li>
                  <li className='mr-2  mt-10'>  |</li>
                  <li className='mr-4  mt-10'>middle</li>
                  <li className='mr-2  mt-10'>  |</li>
                  <li className='mr-4  mt-10'>Karnal Wealth</li>
                  <li className='mr-2  mt-10'>  |</li>
                  <li className='mr-4  mt-10'>TRADEJINI</li>
                </ul>
                </div>
              </div>
              
              <div className='left-consulting left'>TECHNOLOGY</div>
              <div className='right-consult right'>
               <ul className='uppercase text-right flex text-[15px] px-64 font-bold'>
                  <li className='mr-2  mt-10'>DEAL</li>
                  <li className='mr-2  mt-10'>|</li>
                  <li className='mr-2  mt-10'>BOOKIN FACTORY</li>
                </ul>
              </div>
              <div className='left-consulting left'>Ecommerce</div>
              
              <div className='right-consult right'>
               <ul className='uppercase text-right flex text-[15px] px-64 font-bold'></ul>
              </div>
              <div className='left-consulting left'>Supply chain and logistics</div>
              
              <div className='right-consult right'>
               <ul className='uppercase text-right flex text-[15px] px-64 font-bold'>
                  <li>CONVOY</li>
                </ul>
              </div>
              <div className='left-consulting left'> Healthcare</div>
              
              <div className='right-consult right'>
              <ul className='uppercase text-right flex text-[15px] px-64 font-bold'>
                  <li>LYRA HEALTH</li>|
                  <li> HINGE HEALTH</li>
                </ul>
              </div>
              <div className='left-consulting left'>Food and beverages</div>
              
              <div className='right-consult right'>
               <ul className='uppercase text-right flex text-[15px] px-64 font-bold'>
                  <li>Britania</li>|
                  <li>Leaf And Hive</li>
                </ul>
              </div>
              <div className='left-consulting left'> Biopharmaceutical</div>
             
              <div className='right-consult right'>
              <ul className='uppercase text-right flex text-[15px] px-64 font-bold'>
                  <li>impact</li>
                </ul>
              </div>
             
                                <div className='left-consulting left'>Manufacturing</div>
                               
                                <div className='right-consult right'>
                                <ul className='flex'>
                                </ul>
                                </div>
                                 </div>
                            </div>
                        </div>
                    </div>
                    </section>
               
  )
}

export default NewIndus