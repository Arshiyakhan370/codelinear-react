import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeroSection = ({ myState }) => {
  const [isSticky, setSticky] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (offset > 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }, [offset]);

  return (
    <Fragment>
      <div className="relative px-11 py-11 mt-[10%]">
        <div className=" max-w-4xl">
          <h1 className="text-[#100E0E] font-almarai text-7xl font-normal  uppercase">PROPELLING THE WORLD, BY DESIGN. </h1>
          
        </div>
        <ul
          className={` ${
            isSticky ? "fixed top-10 " : "absolute mt-[-20%]"
          } flex flex-col  right-[4%] items-left w-[97px] h-[230.75px] pt-[123.75px] z-50 items-start  `}
        >
          <li
            className={`${myState ? "text-gray-200" : "text-black"} text-lg mt-2`}
          >
            introduction
          </li>
          <li className="text-gray-800 text-right font-sora text-xs font-normal leading-[150%] opacity-[.5]">
            <Link to="#">
              <span className="inline-block opacity-50 bg-gray-800  w-[29.5px] h-[0.75px] mr-[14.90px] mb-1"></span>
              about us
            </Link>
          </li>
          <li className="text-gray-800 text-right font-sora text-xs font-normal leading-[150%] opacity-[.5]">
            <Link to="#">
              <span className="inline-block opacity-50 bg-gray-800  w-[31.5px] h-[0.75px] mr-[14.90px] mb-1"></span>
              services
            </Link>
          </li>
          <li className="text-gray-800 text-right font-sora text-xs font-normal leading-[150%] opacity-[.5]">
            <Link to="#">
              <span className="inline-block opacity-50 bg-gray-800  w-[45.5px] h-[0.75px] mr-[14.90px] mb-1"></span>
              works
            </Link>
          </li>
          <li className="text-gray-800 text-right font-sora text-xs font-normal leading-[150%] opacity-[.5]">
            <Link to="#">
              <span className="inline-block opacity-50 bg-gray-800  w-[25.5px] h-[0.75px] mr-[14.90px] mb-1"></span>
              industries
            </Link>
          </li>
        </ul>
        </div>
    </Fragment>
  );
};

export default HeroSection;
