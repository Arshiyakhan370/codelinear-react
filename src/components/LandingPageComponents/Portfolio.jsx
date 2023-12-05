import React, { Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/images/Frame 567 (1).png";
import image2 from "../../assets/images/Frame 567 (2).png";
import image3 from "../../assets/images/Frame 567 (3).png";
import image4 from "../../assets/images/Frame  (4).png";
import image5 from "../../assets/images/Frame 1000001741 (5).png";
import image6 from "../../assets/images/Frame 1000001741 (1).png";
import image7 from "../../assets/images/Frame 1000001741 (2).png";
import image8 from "../../assets/images/Frame 1000001741 (3).png";
import image9 from "../../assets/images/Frame 1000001741 (4).png";

const Portfolio = () => {
  const images = [
    { img: image1, title: "MANGO" },
    { img: image2, title: "COWBOY" },
    { img: image3, title: "WEAR WELL" },
    { img: image4, title: "TRADEJINI" },
    { img: image5, title: "KULB" },
    { img: image6, title: "Britannia" },
    { img: image7, title: "IKEA" },
    { img: image8, title: "William Abraham" },
    { img: image9, title: "Vuori" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Fragment>
      <div className="flex flex-col md:flex-row mb-10 md:mb-[10%] lg:mb-[10%] mt-[-25%] md:mt-0 lg:mt-0">
  <div className="md:w-1/2 p-1">
    <h1 className="text-3xl md:text-5xl lg:text-7xl px-1 py-2 md:py-4 lg:py-11 ml-4 md:ml-[7%] lg:ml-[8%] mt-4 md:mt-[4%] text-[#100E0E]">
      PORTFOLIO
    </h1>
  </div>
  <div className="md:w-[45%] lg:w-[37%] h-auto p-1 mt-4 md:mt-[4%]  lg:mt-[5%] mr-4 md:mr-[8%] lg:mr-[10%] ml-4 md:ml-[-4%] text-[#100E0E]">
    <p className="mb-1 text-xs md:text-sm lg:text-base">
      Id donec rutrum mauris venenatis ac. Id metus lorem mus sit magna varius cum proin. Accumsan volutpat natoque
      purus pellentesque nec ac nulla turpis consectetur. Fermentum ut non commodo lacus enim.
    </p>
  </div>
</div>
      
      <Slider {...settings} className="flex mt-10 mb-[10%] slick-carousel">
        {images.map((image, index) => (
          <div key={index} className="flex-none p-2">
            <img
              src={image.img}
              alt={`Image ${index + 1}`}
              className="w-full h-auto  sm:mr-[8%]"
            />
            <div>{image.title}</div>
          </div>
        ))}
      </Slider>
    </Fragment>
  );
};

export default Portfolio;
