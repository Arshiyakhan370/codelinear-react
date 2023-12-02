import React, { Fragment } from "react";

const LetsTalkSection = () => {
  return (
    <Fragment>
      <div className="p-4 md:p-8 text-center md:mt-16 md:mb-32  transition duration-300">
        <div className="text-lg md:text-2xl text-black font-bold">Wanna Know a Secret?</div>
      </div>

      <div className="relative text-4xl md:text-8xl text-center p-4 md:p-8 mb-16 md:mb-32 mt-5 md:mt-8 lg:mt-12">
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-500 hover:opacity-100 "style={{color:"white",textShadow:" 2px 2px 4px  gray"}}>
          LET'S TALK
        </h1>
      </div>
    </Fragment>
  );
};

export default LetsTalkSection;
