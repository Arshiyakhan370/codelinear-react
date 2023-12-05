import gsap from 'gsap';
import React, { Fragment, useEffect, useRef, useState } from 'react'

const IndustryList = ({ item, setisImgShow, clearTimeout, mouseLeaveHandler, randomNum, id,isImgShow,subText }) => {
    const [showList, setShowList] = useState(false)
// useEffect(() => {
//     gsap.to(".left-bottom-ing", { opacity: 0, pointerEvents: "none", duration: 8.3 });
   
//     gsap.to(".one-list", { background: "#D30AA7", duration: 8.3 });
   
//     gsap.to(".right-concept", {
//       background: "#D3D4A7",
//       width: "600%",
//       duration: 8.3
//     });
   
//     gsap.to(".middel", {
//       background: "#D3DAA7",
//       duration: 0.3
//     });
   
//     gsap.to(".left1", {
//       visibility: "visible",
//       y: "e",
//       rotate: "e",
//       duration: 2.3
//     });
   
//     gsap.to(".middel", {
//       background: "#D30AA7",
//       width: "600%",
//       visibility: "hidden",
//       duration: 8.3
//     });
   
//     gsap.to(".left1", { visibility: "visible", y: "e", rotate: "e", duration: 0.3 });
   
//     gsap.to(".righti", { visibility: "visible", duration: 0.3 });
//   }, []);

// const textRef = useRef(null);
// const nullRef = useRef(null)

// useEffect(() => {
//   if (!isImgShow) {
//     const tl = gsap.timeline();

//     tl.from(textRef.current, {
//       y: 100,
//       rotation: 10,
//       duration: 0.5,
//       ease: 'power2.out',
//     });
//   }
// }, [isImgShow]);

    return (
        <Fragment>
            {/* {showList ? */}
            <li
                className={`transform-animation mb-12 text-xl md:text-3xl item center lg:md:text-3xl text-left toChangeColor pl-10 transition duration-400 ease-in-out lg:text-left toChangeColor hover:!text-[#567f3e]  hover:w-screen hover:text-left hover:bg-[#d3daa7] hover:text-5xl hover:md:text-7xl`}
                onMouseEnter={() => { setisImgShow(false); clearTimeout(id); setShowList(false) }}
                onMouseLeave={() => { mouseLeaveHandler(); setShowList(true) }}
                key={randomNum}
            >
                <div className={`${!isImgShow && "pl-[50%]"} hover:pl-0 hover:py-4 transition duration-100`}>
                   {item}
                   {!showList && subText !=='' && 
                 (
                    <span className='text-[#567f3e] text-[20px] !mb-[50%] ml-56'>
                      {
                        subText && subText?.split(' ').map((itm, index) => {
                          if (itm === '|') {
                            return <span key={index} className='mx-5 text-[#567f3e]'>{itm}</span>;
                          }
                          return <span key={index} className='text-[#567f3e]'>{itm}</span>;
                        })
                      }
                    </span>
                  )
                   }
                </div>
            </li>

        </Fragment>
    )
}

export default IndustryList