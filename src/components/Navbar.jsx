import React from 'react'

const Navbar = () => {
  return (
   <nav className=" p-3 mt-4 ml-[5%] mr-[3%] ">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-black font-bold text-lg">co<span className="tall-letter inline-block leading-tight">d</span>e<span className="tall-letter">l</span>inear</div>
          <div>
         
          <button  className="text-black focus:outline-none">
          <svg
  className="h-8 w-12"
  fill="none"
  stroke="currentColor"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
>
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16"></path>
</svg>

          </button>
        </div>
          </div>
        </div>
    
    </nav>
  );
};
export default Navbar;