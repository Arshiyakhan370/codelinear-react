import gsap from 'gsap';
import React, { Fragment } from 'react';

const IndustryList = ({ item, subText }) => {
  const onEnterBack = () => {
    gsap.to(".left1", { visibility: "visible", y: "0", rotate: "0", duration: 2.3 });
    gsap.to('.opacity', { opacity: 0, duration: 0.5, delay: 0.3 });
  };

  const onEnter = () => {
    gsap.to(".left1", { opacity: 1, visibility: "visible", y: "-20" , rotate: "1", duration: 2.3 });
    gsap.to('.opacity', { opacity: 1, duration: 0.5, delay: 0.3 });
  };

  return (
    <Fragment>
      <div
        className="left1 opacity transform-animation hover:left-bottom-img py-5 text-[25px] md:text-[25px] flex group justify-start w-1/2 ml-14 md:!ml-[40%] lg:!ml-[40%] hover:!ml-0 hover:z-[100] lg:text-3xl text-center md:text-left lg:text-left toChangeColor pl-14 transition duration-400 ease-in-out toChangeColor hover:!text-[#567f3e] hover:w-screen hover:bg-[#d3daa7] hover:text-2xl hover:md:text-4xl hover:lg:text-7xl"
        onMouseEnter={onEnter}
        onMouseLeave={onEnterBack}
      >
        {item}
        <div className='mt-8 font-bold ml-44 text-[15px] hidden group-hover:block'>
          <span className='text-[#567f3e] text-[20px] !mb-[50%] ml-56'>
            {subText &&
              subText?.split(' ').map((itm, index) => {
                if (itm === '|') {
                  return <span key={index} className='mx-5 text-[#567f3e]'>{itm}</span>;
                }
                return <span key={index} className='text-[#567f3e]'>{itm}</span>;
              })}
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default IndustryList;
