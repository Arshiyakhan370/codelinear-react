import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
  const sections = [
    {
      title: "Consulting and Strategy",
         items1: [
        "Market Research",
        "Stakeholder Workshops",
        "Product Strategy and Roadmapping",
        "Technology Consulting and Platform Planning",
        "GTM Strategy",
      ],
    },
    {
      title: "User Experience",
      items2: [
        "Ux Audit",
        "UX Research",
        "UI UX Consulting",
        "User Experience Design",
        "User Interface Design",
        "Digital Branding",
      ],
    },
    {
      title: "Product Development",
      items: [
        "Website Development",
        "Web App Development",
        "E-Commerce Development",
        "MVP Development",
        "Native App Development",
        "Hybrid App Development",
      ],
      items1: ["Enterprise App Development"],
    },
    {
      title: "Digital Marketing",
      items2: ["SEO", "Social Media", "Paid Search", "Paid Social"],
    },
  ];

  return (
    <Fragment>
    <div className="flex flex-col md:flex-row mb-10 md:mb-[10%] lg:mb-[10%]">
  <div className="md:w-1/2 p-1">
    <h1 className="text-3xl md:text-5xl lg:text-7xl px-1 py-2 md:py-4 lg:py-11 ml-4 md:ml-[7%] lg:ml-[8%] mt-4 md:mt-[4%] text-[#100E0E]">
      SERVICES
    </h1>
  </div>
  <div className="md:w-[45%] lg:w-[36%] h-auto p-1 mt-4 md:mt-[4%]  lg:mt-[5%] mr-4 md:mr-[8%] lg:mr-[10%] ml-4 md:ml-[-4%] text-[#100E0E]">
    <p className="mb-1 text-xs md:text-sm lg:text-base">
      Id donec rutrum mauris venenatis ac. Id metus lorem mus sit magna varius cum proin. Accumsan volutpat natoque
      purus pellentesque nec ac nulla turpis consectetur. Fermentum ut non commodo lacus enim.
    </p>
  </div>
</div>

      <Swiper
        
        pagination={{ clickable: false }}
        spaceBetween={100}
        slidesPerView={1}
      >
        {sections.map(({ title, items, items1, items2 }, index) => (
          <SwiperSlide key={index}>
            
              <div
  key={index}
  className="relative flex md:flex-grow flex-row justify-end space-x-1"
>
  <h1 className="text-4xl md:text-8xl lg:text-[171px] font-normal top-[15vh] md:top-[55vh] lg:top-[220px] w-[80vw] md:w-[150vw] lg:w-[1665.16px] h-[50vh] md:h-[20vh] lg:h-[500px] mb-80 md:mb-[15vh] lg:mb-[50px] leading-[10vw] md:leading-[130px] lg:leading-[220px] tracking-normal mr-10 md:mr-0 lg:mr-0 text-center md:text-left lg:text-left  uppercase text-[#2C2C2C]">
    {title}
  </h1>

              {items && (
                <ul className="text-[12px]  md:text-[7px] lg:text-[12px] mt-24 md:mt-2 lg:mt:2    text-center md:text-left lg:text-left font-400 uppercase list-none absolute flex-col bottom:0 md:bottom-0 lg:bottom-0  left-[100px] md:left-[500px] lg:left-[872px] md:w-[16%] lg:w-[13%] md:h-[30] lg:h-[36] mb-32 md:mb-[270px] lg:mb-[367px]">
                  {items.map((item, itemIndex) => (
                    <li key={itemIndex} className="mb-3">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {items1 && (
                <ul className="text-[12px]  md:text-[7px] lg:text-[12px] mt-20 md:mt-2 lg:mt:2   text-center md:text-left lg:text-left font-400 uppercase list-none absolute flex-col  top-0 md:top-0 lg:top-0 left-auto right-12 md:right-0 lg:right-0 md:w-[16%] lg:w-[16%] lg:h-[36] mb-16 md:mb-[220px] lg:mb-[367px]">
                  {items1.map((item, itemIndex) => (
                    <li key={itemIndex} className="mb-3">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {items2 && (
                <ul className="text-[12px]  md:text-[7px] lg:text-[12px] mt-20 md:mt-2 lg:mt:2   text-left md:text-left lg:text-left font-400 uppercase list-none absolute flex-col  bottom:0 md:bottom-0 lg:bottom-0  left-[140px] md:left-[400px] lg:left-[720px] md:w-[12%] lg:w-[16%] lg:h-[36] mb-[50px] md:mb-[250px] lg:mb-[367px]">
                  {items2.map((item, itemIndex) => (
                    <li key={itemIndex} className="mb-3">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Fragment>
  );
};

export default Services;
