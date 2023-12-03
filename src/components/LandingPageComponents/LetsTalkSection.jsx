import React, { Fragment } from "react";

const LetsTalkSection = () => {
  return (
    <Fragment>
      <div className="p-4 md:p-8 text-center md:mt-16 md:mb-32  transition duration-300">
        <div className="text-lg md:text-2xl text-black ">Wanna Know a Secret?</div>
      </div>
     <div className=" w-full h-48">
      <div className=" text-4xl md:text-9xl lg:text-9xl text-center p-2  md:p-8  ml-[44%]  mt-28 ] ">
        <h1 className=" top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-500 hover:opacity-100 "style={{color:"white",textShadow:" 8px 16px 32px #DCDCDC"}}>
          LET'S TALK
        </h1>
      </div>
      </div>
    </Fragment>
  );
};

export default LetsTalkSection;
