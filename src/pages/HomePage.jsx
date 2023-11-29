import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <Fragment>
      <div className="flex justify-between   px-11 py-11">
        <div>
          <h1 className="text-8xl">PROPELLING THE</h1>
          <h1 className="text-8xl"> WORLD, BY DESIGN.</h1>
        </div>
        <ul className="flex flex-col space-y-1 mt-12 items-left">
          <li className="text-black font-bold text-lg">introduction</li>
          <li className="text-gray-500 text-m">
            <Link to="#">
              <span className="inline-block w-[36px] h-[2px] bg-gray-500 mb-1 mr-2"></span>
              about us
            </Link>
          </li>
          <li className="text-gray-500 text-m">
            <Link to="#">
              <span className="inline-block w-[43px] h-[2px] bg-gray-500 mb-1 mr-2"></span>
              services
            </Link>
          </li>
          <li className="text-gray-500 text-m">
            <Link to="#">
              <span className="inline-block w-[58px] h-[2px] bg-gray-500 mb-1 mr-2"></span>
              works
            </Link>
          </li>
          <li className="text-gray-500 text-m">
            <Link to="#">
              <span className="inline-block w-[32px] h-[2px] bg-gray-500 mb-1 mr-2"></span>
              industries
            </Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default HomePage;
