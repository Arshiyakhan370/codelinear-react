import React, { Fragment } from "react";

const LetsTalkSection = () => {
  return (
    <Fragment>
      <div className="p-8 text-center mt-[5%] mb-[10%]">
        <div className="text-lg text-black">Wanna Know a Secret?</div>
      </div>
      <div className="text-8xl text-center p-8 mb-[10%]">
        <div
          className="text-white p-4 "
          style={{ textShadow: "1px 1px 2px rgba(128, 128, 128, 0.5)" }}
        >
          LET'S TALK
        </div>
      </div>
    </Fragment>
  );
};

export default LetsTalkSection;
