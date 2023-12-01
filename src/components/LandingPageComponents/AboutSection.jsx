import { gsap } from "gsap";
import React from "react";
import image1 from "../../assets/images/iStock-1348120238 1.png";

const AboutSection = () => {

  const handleHover = () => {
    gsap.to(document.getElementsByClassName('myClass')[0], {
      background: "conic-gradient(from 178deg at 44.4% 50%, #D4A381 43.31266522407532deg, #46200D 360deg)",
      color: 'initial',
      duration: 1,
      ease: 'power2.inOut',
    });

    gsap.to(document.getElementsByClassName('mainHeading')[0], {
      color: 'white',
      duration: 0.5,
      ease: 'power2.inOut',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(document.getElementsByClassName('myClass')[0], {
      background: 'initial',
      color: 'initial',
      duration: 1,
      ease: 'power2.inOut',
    });

    gsap.to(document.getElementsByClassName('mainHeading')[0], {
      color: 'initial',
      duration: 0.5,
      ease: 'power2.inOut',
    });
  };

  return (
    <div
      className="relative myClass px-11 py-11 mt-[10%]  hover-effect border border-red-900"
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-4xl">
        <h1 className="text-[#100E0E] font-almarai mainHeading text-7xl font-normal uppercase">
          Amet magnis diam varius viverra at
        </h1>
      </div>
      <div className="w-96 h-auto ml-[52%] mt-[4%] text-[#100E0E]">
        <p className="mb-1 text-[16.5px]">
          Id donec rutrum mauris venenatis ac.Id metus lorem mus sit magna Varius cum proin. Accumsan volutpat natoque
          purus pellentesque nec ac nulla turpis consectetur. Fermentum ut non commodo lacus enim.
        </p>
      </div>

      <div className="flex">
        <img src={image1} alt="Logo" className="w-[555px] h-[500.5px] mb-20" />
        <div className="ml-[29%] mt-20 text-[#100E0E]">
          <p>ABOUT US</p>
          <div className="mt-[-25%] ml-[100%]">
            <svg xmlns="http://www.w3.org/2000/svg" width="16.482" height="19.434" viewBox="0 0 20 17" fill="none">
              <rect x="0.138977" y="9.04883" width="1.15946" height="19.2297" transform="rotate(-90 0.138977 9.04883)" fill="#131313" />
              <rect x="12.3485" y="1.01855" width="1.15946" height="9.75225" transform="rotate(-38.8464 12.3485 1.01855)" fill="#131313" />
              <rect width="1.15946" height="9.75225" transform="matrix(0.77883 0.627235 0.627235 -0.77883 12.3484 15.9147)" fill="#131313" />
            </svg>
          </div>
          <div className="mt-[-60%] ml-[58%]">
            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="89" viewBox="0 0 90 89" fill="none">
              <circle cx="44.8558" cy="44.4689" r="43.6546" transform="rotate(-90 44.8558 44.4689)" stroke="#131313" stroke-width="1" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
