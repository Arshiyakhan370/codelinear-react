import { gsap } from "gsap";
import React from "react";
import image1 from "../../assets/images/iStock-1348120238 1.png";
import { animationFun } from "../GSAPanimation/GSAPaniation";

const AboutSection = ({ myState, setMyState }) => {
  const handleHover = () => {
    setMyState(true);
    gsap.to(document.getElementsByClassName("myClass")[0], {
      background:
        "conic-gradient(from 180deg at 44.4% 50%,#46200D, #D4A381 43.31266522407532deg, #46200D 360deg)",
      color: "initial",
      duration: 0.3,
      ease: "power2.inOut",
    });
    // gsap.to(document.getElementsByClassName('mainHeading')[0], {
    //   color: 'white',
    //   duration: 0.5,
    //   ease: 'power2.inOut',
    // });
    // gsap.to(document.getElementsByClassName('paraGraph')[0], {
    //   color: 'white',
    //   duration: 0.5,
    //   ease: 'power2.inOut',
    // });
    // gsap.to(document.getElementsByClassName('about-us')[0], {
    //   color: 'white',
    //   duration: 0.5,
    //   ease: 'power2.inOut',
    // });

    animationFun("mainHeading","white")
    animationFun("paraGraph","white")
    animationFun("about-us","white")

  };

  const handleMouseLeave = () => {
    setMyState(false);
    gsap.to(document.getElementsByClassName("myClass")[0], {
      background: "initial",
      color: "initial",
      duration: 0.3,
      ease: "power2.inOut",
    });

    // gsap.to(document.getElementsByClassName('mainHeading')[0], {
    //   color: 'initial',
    //   duration: 0.5,
    //   ease: 'power2.inOut',
    // });
    // gsap.to(document.getElementsByClassName('paraGraph')[0], {
    //   color: 'initial',
    //   duration: 0.5,
    //   ease: 'power2.inOut',
    // });
    // gsap.to(document.getElementsByClassName('about-us')[0], {
    //   color: 'initial',
    //   duration: 0.5,
    //   ease: 'power2.inOut',
    // });
    animationFun("mainHeading","initial")
    animationFun("paraGraph","initial")
    animationFun("about-us","initial")

  };

  return (
    <div
      className="relative myClass px-11 py-11 mt-[10%]  hover-effect "
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-4xl">
        <h1 className="text-[#100E0E] font-almarai mainHeading text-7xl font-normal uppercase">
          Amet magnis diam varius viverra at
        </h1>
      </div>
      <div className="w-96 h-auto ml-[52%] mt-[4%] text-[#100E0E]">
        <p className="mb-1 paraGraph text-[16.5px]">
          Id donec rutrum mauris venenatis ac.Id metus lorem mus sit magna
          Varius cum proin. Accumsan volutpat natoque purus pellentesque nec ac
          nulla turpis consectetur. Fermentum ut non commodo lacus enim.
        </p>
      </div>

      <div className="flex">
        <img src={image1} alt="Logo" className="w-[555px] h-[500.5px] mb-20" />
        <div className="ml-[29%] mt-20 text-[#100E0E]">
          <p className="about-us">ABOUT US</p>
          <div className="mt-[-25%] ml-[100%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16.482"
              height="19.434"
              viewBox="0 0 20 17"
              fill="none"
            >
              <rect
                x="0.138977"
                y="9.04883"
                width="1.15946"
                height="19.2297"
                transform="rotate(-90 0.138977 9.04883)"
                fill={!myState ? "#131313" : "white"}
              />
              <rect
                x="12.3485"
                y="1.01855"
                width="1.15946"
                height="9.75225"
                transform="rotate(-38.8464 12.3485 1.01855)"
                fill={!myState ? "#131313" : "white"}
              />
              <rect
                width="1.15946"
                height="9.75225"
                transform="matrix(0.77883 0.627235 0.627235 -0.77883 12.3484 15.9147)"
                fill={!myState ? "#131313" : "white"}
              />
            </svg>
          </div>
          <div className="mt-[-60%] ml-[58%]">
            {!myState ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="90"
                height="89"
                viewBox="0 0 90 89"
                fill="none"
              >
                <circle
                  cx="44.8558"
                  cy="44.4689"
                  r="43.6546"
                  transform="rotate(-90 44.8558 44.4689)"
                  stroke={!myState ? "#131313" : "white"}
                  stroke-width="1"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="89"
                height="89"
                viewBox="0 0 89 89"
                fill="none"
              >
                <g opacity="0.6">
                  <g filter="url(#filter0_i_332_230)">
                    <circle
                      cx="44.2176"
                      cy="44.7814"
                      r="44.1546"
                      transform="rotate(-90 44.2176 44.7814)"
                      fill="url(#paint0_radial_332_230)"
                    />
                  </g>
                  <circle
                    cx="44.2176"
                    cy="44.7814"
                    r="43.6546"
                    transform="rotate(-90 44.2176 44.7814)"
                    stroke="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_i_332_230"
                    x="-2.93701"
                    y="0.626831"
                    width="91.3092"
                    height="88.3092"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="-3" />
                    <feGaussianBlur stdDeviation="1.5" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 0.937167 0 0 0 0 0.879167 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_332_230"
                    />
                  </filter>
                  <radialGradient
                    id="paint0_radial_332_230"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(46.7279 65.6261) rotate(-86.88) scale(92.6688 121.391)"
                  >
                    <stop stop-color="#FFE7D9" />
                    <stop
                      offset="0.723861"
                      stop-color="#F6DADA"
                      stop-opacity="0"
                    />
                  </radialGradient>
                </defs>
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
