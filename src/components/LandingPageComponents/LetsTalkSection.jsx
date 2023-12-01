import React, { Fragment } from "react";

const LetsTalkSection = () => {
  return (
    <Fragment>
      <div className="p-8 text-center mt-[5%] mb-[10%] group hover:shadow-lg transition duration-300">
        <div className="text-lg text-black">Wanna Know a Secret?</div>
      </div>
      <div className="text-8xl text-center p-8 mb-[10%] group relative">
        <div className="text-white p-4 relative group-hover:after:bg-[rgba(0,0,0,0.5)] group-hover:after:block group-hover:after:content-['']">
          LET'S TALK
        </div>
      </div>
    </Fragment>
  );
};

export default LetsTalkSection;
