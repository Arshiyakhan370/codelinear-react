import React, { useState, useEffect } from "react";
import image from "../../assets/images/logo (1).png";
import gsap from "gsap";

const Footer = () => {
  const [isLogoVisible, setIsLogoVisible] = useState(true);

  useEffect(() => {
    const logoContainer = document.querySelector(".logo-container");

    gsap.to(".logo-container", {
      x: "-100%", 
      opacity: 1,
      duration: 2,
      ease: 'power3.inOut',
    });

    const interval = setInterval(() => {
      setIsLogoVisible((prev) => !prev);
      gsap.to(".logo-container", { x: "0%", opacity: 1, duration: 1 });
    }, 1000);

    logoContainer.addEventListener("mouseenter", () => {
      gsap.to(".logo-container", { x: "-100%", opacity: 0, duration: 1, ease: 'power3.inOut' });
    });

    logoContainer.addEventListener("mouseleave", () => {
      gsap.to(".logo-container", { x: "-100%", opacity: 1, duration: 1, ease: 'power3.inOut' });
    });

    return () => {
      clearInterval(interval);
      logoContainer.removeEventListener("mouseenter", () => {});
      logoContainer.removeEventListener("mouseleave", () => {});
    };
  }, []);
  return (
    <footer className="py-4 border border-gray-200">
      <div className="container mx-auto  flex-col md:flex-row lg:flex-row">
        <div className="flex flex-col md:flex-row justify-between items-center mt-24 ml-10">
          <div className="logo-container relative w-48 h-16 md:mb-[15%] lg:mb-4 text-left mr-32 md:mr-3 lg:mr-0">
            <p
              className={`logo-text text-3xl mt-4 md:ml-[-8%] text-black ${isLogoVisible ? "block" : "hidden"}`}
            >
              near to impact
            </p>
            <img
              src={image}
              alt="Company Logo"
              className={`w-24 h-12 mx-auto mb-4 md:mb-44 lg:mb-24 md:ml-[-8%] mr-48 md:mr-0 lg:mr-0 logo-image ${isLogoVisible ? "hidden" : "block"}`}
            />
          </div>
          
          <div className=" flex flex-col  md:flex-row mt-2  md:mt-[-15%] lg:mt-0 mb-[-2%]  text-[20px] md:text-[15px] lg:text-[15px] text-black mr-36 sm:mr-36 md:mr-[-66%] lg:mr-[-20%]">
  <div className=" flex flex-row md:flex-col lg:flex-col mb-4 md:mr-8 ">
    <ul className="mb-2 md:mb-6  mr-10 md:mr-20 lg:mr-0">
      <li>about us</li>
    </ul>
    <ul>
      <li>services</li>
    </ul>
  </div>
  <div className="flex flex-row md:flex-col lg:flex-col mb-4  mr-0 md:mr-8 ">
    <ul className="mb-2 md:mb-6 mr-10 md:mr-20 lg:mr-0">
      <li>work</li>
    </ul>
    <ul>
      <li>career</li>
    </ul>
  </div>
  <div className=" flex flex-row md:flex-col lg:flex-col mb-4  mr-0 md:mr-8">
    <ul className="mb-2 md:mb-6  mr-10 md:mr-20 lg:mr-0">
      <li>idea</li>
    </ul>
    <ul>
      <li>Let's Talk</li>
    </ul>
  </div>
</div>


<div className="flex items-center space-x-5 md:mt-0 mb-[-1%] md:mb-[-20%] lg:mb-[-1%] mr-40 md:mr-4 lg:mr-[-25%]">
  <div className="text-[20px] md:text-[15px] lg:text-[15px] text-left">
    <p className="mb-2 md:mb-6 md:mr-16 ">info@codlinear.com</p>
    <p>+14155235957</p>
  </div>
</div>


            <div className=" text-[20px] md:text-[15px] lg:text-[15px] flex flex-wrap md:flex-row  lg:flex-row items-start justify-start  md:justify-center space-x-2 md:space-x-0 lg:space-x-4 mb-[-5px] md:mb-[-20%] lg:mb-8 mr-44 ms:mr-56 md:mr-12 lg:mr-[1%] mt-4 md:mt-0 lg:mt-0 w-auto md:w-10 lg:w-auto ml-[-44px]">
       
                   <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  d="M15.4718 3.2041C15.8994 3.2041 16.3095 3.37398 16.6119 3.67637C16.9143 3.97876 17.0842 4.38889 17.0842 4.81654V16.1036C17.0842 16.5312 16.9143 16.9414 16.6119 17.2438C16.3095 17.5461 15.8994 17.716 15.4718 17.716H4.1847C3.75706 17.716 3.34693 17.5461 3.04454 17.2438C2.74215 16.9414 2.57227 16.5312 2.57227 16.1036V4.81654C2.57227 4.38889 2.74215 3.97876 3.04454 3.67637C3.34693 3.37398 3.75706 3.2041 4.1847 3.2041H15.4718ZM15.0686 15.7005V11.4275C15.0686 10.7305 14.7917 10.062 14.2988 9.56906C13.8059 9.07616 13.1374 8.79926 12.4404 8.79926C11.7551 8.79926 10.9569 9.21849 10.57 9.84734V8.95244H8.3206V15.7005H10.57V11.7258C10.57 11.105 11.0698 10.5971 11.6906 10.5971C11.9899 10.5971 12.277 10.716 12.4887 10.9277C12.7004 11.1394 12.8193 11.4265 12.8193 11.7258V15.7005H15.0686ZM5.70039 7.68668C6.05961 7.68668 6.40412 7.54398 6.65813 7.28997C6.91214 7.03596 7.05484 6.69145 7.05484 6.33223C7.05484 5.58245 6.45018 4.96972 5.70039 4.96972C5.33903 4.96972 4.99247 5.11327 4.73695 5.36879C4.48143 5.62431 4.33788 5.97087 4.33788 6.33223C4.33788 7.08201 4.95061 7.68668 5.70039 7.68668ZM6.82104 15.7005V8.95244H4.58781V15.7005H6.82104Z"
                  fill="#000000"
                />
              </svg>
              
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  d="M17.9303 10.46C17.9303 6.00949 14.3183 2.39746 9.86775 2.39746C5.41721 2.39746 1.80518 6.00949 1.80518 10.46C1.80518 14.3623 4.5787 17.6115 8.25523 18.3613V12.8788H6.64272V10.46H8.25523V8.44439C8.25523 6.88831 9.52105 5.62249 11.0771 5.62249H13.0928V8.04126H11.4803C11.0368 8.04126 10.674 8.40407 10.674 8.84752V10.46H13.0928V12.8788H10.674V18.4823C14.7456 18.0792 17.9303 14.6445 17.9303 10.46Z"
                  fill="#000000"
                />
              </svg>
               <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  d="M6.5215 2.39746H13.2941C15.8741 2.39746 17.9704 4.49373 17.9704 7.07375V13.8463C17.9704 15.0865 17.4777 16.276 16.6007 17.1529C15.7237 18.0299 14.5343 18.5226 13.2941 18.5226H6.5215C3.94148 18.5226 1.84521 16.4263 1.84521 13.8463V7.07375C1.84521 5.83352 2.33789 4.64409 3.21487 3.76711C4.09184 2.89014 5.28128 2.39746 6.5215 2.39746ZM6.36025 4.00997C5.59046 4.00997 4.85219 4.31578 4.30786 4.8601C3.76353 5.40443 3.45773 6.1427 3.45773 6.9125V14.0076C3.45773 15.612 4.7558 16.9101 6.36025 16.9101H13.4553C14.2251 16.9101 14.9634 16.6043 15.5077 16.06C16.052 15.5156 16.3578 14.7774 16.3578 14.0076V6.9125C16.3578 5.30805 15.0598 4.00997 13.4553 4.00997H6.36025ZM14.1406 5.21936C14.4079 5.21936 14.6643 5.32554 14.8533 5.51454C15.0423 5.70355 15.1485 5.95989 15.1485 6.22718C15.1485 6.49447 15.0423 6.75082 14.8533 6.93982C14.6643 7.12882 14.4079 7.235 14.1406 7.235C13.8733 7.235 13.617 7.12882 13.428 6.93982C13.239 6.75082 13.1328 6.49447 13.1328 6.22718C13.1328 5.95989 13.239 5.70355 13.428 5.51454C13.617 5.32554 13.8733 5.21936 14.1406 5.21936ZM9.90778 6.42875C10.9769 6.42875 12.0023 6.85347 12.7583 7.60948C13.5143 8.36549 13.9391 9.39087 13.9391 10.46C13.9391 11.5292 13.5143 12.5546 12.7583 13.3106C12.0023 14.0666 10.9769 14.4913 9.90778 14.4913C8.83862 14.4913 7.81325 14.0666 7.05724 13.3106C6.30122 12.5546 5.8765 11.5292 5.8765 10.46C5.8765 9.39087 6.30122 8.36549 7.05724 7.60948C7.81325 6.85347 8.83862 6.42875 9.90778 6.42875ZM9.90778 8.04126C9.26629 8.04126 8.65106 8.29609 8.19745 8.7497C7.74385 9.20331 7.48901 9.81853 7.48901 10.46C7.48901 11.1015 7.74385 11.7168 8.19745 12.1704C8.65106 12.624 9.26629 12.8788 9.90778 12.8788C10.5493 12.8788 11.1645 12.624 11.6181 12.1704C12.0717 11.7168 12.3266 11.1015 12.3266 10.46C12.3266 9.81853 12.0717 9.20331 11.6181 8.7497C11.1645 8.29609 10.5493 8.04126 9.90778 8.04126Z"
                  fill="#000000"
                />
              </svg>
               <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <g clip-path="url(#clip0_298_118)">
                  <path
                    d="M11.1873 10.4598C11.1873 13.4651 8.74438 15.902 5.7294 15.902C5.01377 15.9029 4.30496 15.7629 3.64344 15.4899C2.98192 15.2169 2.38064 14.8163 1.87394 14.311C1.36724 13.8056 0.965035 13.2054 0.690295 12.5446C0.415554 11.8838 0.273657 11.1754 0.272705 10.4598C0.272705 7.45327 2.71564 5.01758 5.7294 5.01758C6.44514 5.01647 7.15408 5.15636 7.81574 5.42927C8.4774 5.70218 9.07882 6.10276 9.58565 6.60813C10.0925 7.1135 10.4948 7.71376 10.7696 8.37463C11.0444 9.0355 11.1864 9.74404 11.1873 10.4598ZM17.1737 10.4598C17.1737 13.2897 15.9523 15.5827 14.4454 15.5827C12.9385 15.5827 11.717 13.2885 11.717 10.4598C11.717 7.62983 12.9385 5.33686 14.4454 5.33686C15.9523 5.33686 17.1737 7.63104 17.1737 10.4598ZM19.6227 10.4598C19.6227 12.9946 19.1934 15.0494 18.6625 15.0494C18.1328 15.0494 17.7034 12.9934 17.7034 10.4598C17.7034 7.92492 18.1328 5.87019 18.6637 5.87019C19.1934 5.87019 19.6227 7.92492 19.6227 10.4598Z"
                    fill="#000000"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_298_118">
                    <rect
                      width="19.35"
                      height="19.35"
                      fill="white"
                      transform="translate(0.272705 0.784668)"
                    />
                  </clipPath>
                </defs>
              </svg>
            
          </div>
         
        </div>
        <div
  className="text-left text-[20px] md:text-[20px] lg:text-[15px] w-[174px] md:w-[174px] lg:w-auto h-auto   text-gray-600  mt-6 md:mt-[-45px] lg:mt-[-8px] md:mb-12 lg:mb-12 mr-8 md:mr-0 lg:mr-0 sm:ml-8 ml-10 md:ml-4 lg:md-4"
  
>
  &copy; Codelinear 2023. All Rights Reserved.
</div>


      </div>
    </footer>
  );
};
export default Footer;