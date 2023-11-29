import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
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
        <div>
          <h1 className="text-7xl">PROPELLING THE </h1>
          <h1 className="text-7xl"> WORLD, BY DESIGN.</h1>
        </div>
        <ul
          className={` ${
            isSticky ? "fixed top-14 mt-10" : "absolute mt-[-8%]"
          } flex flex-col space-y-[-1px] right-[6%] items-left `}
        >
          <li className="text-black text-lg">introduction</li>
          <li className="text-gray-500 text-xs">
            <Link to="#">
              <span className="inline-block w-[40px] h-[2px] bg-gray-500 mb-1 mr-2"></span>
              about us
            </Link>
          </li>
          <li className="text-gray-500 text-xs">
            <Link to="#">
              <span className="inline-block w-[47px] h-[2px] bg-gray-500 mb-1 mr-2"></span>
              services
            </Link>
          </li>
          <li className="text-gray-500 text-xs">
            <Link to="#">
              <span className="inline-block w-[58px] h-[2px] bg-gray-500 mb-1 mr-2"></span>
              works
            </Link>
          </li>
          <li className="text-gray-500 text-xs">
            <Link to="#">
              <span className="inline-block w-[36px] h-[2px] bg-gray-500 mb-1 mr-2"></span>
              industries
            </Link>
          </li>
        </ul>
      </div>
      {/* Rest of your content */}
    </Fragment>
  );
};

export default HomePage;
