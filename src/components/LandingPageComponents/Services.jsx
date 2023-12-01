import React, { Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
  const sections = [
    {
      title: "Consulting and Strategy",
      items: [
        "Market Research",
        "Stakeholder Workshops",
        "Product Strategy and Roadmapping",
        "Technology Consulting and Platform Planning",
        "GTM Strategy",
      ],
    },
    {
      title: "User Experience",
      items: [
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
        "Enterprise App Development",
      ],
    },
    {
      title: "Digital Marketing",
      items: ["SEO", "Social Media", "Paid Search", "Paid Social"],
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Fragment>
      <Slider {...settings}>
        {sections.map((section, index) => (
          <div key={index} className="p-28">
            <h1 className="text-9xl font-bold mb-3 mr-4 uppercase text-[#2C2C2C]">
              {section.title}
            </h1>
            <ul className="text-[10px] ml-[80%] text-left  font-bold uppercase list-none mt-[-27%]  w-[18%] h-[2%] mb-0 ">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="mb-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Slider>
    </Fragment>
  );
};

export default Services;
