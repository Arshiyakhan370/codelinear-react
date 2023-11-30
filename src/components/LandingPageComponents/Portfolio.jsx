import React, { Fragment } from "react";
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

  return (
    <Fragment>
      <div className="flex">
        <div className="w-1/2 p-1">
          <h1 className="text-7xl px-1 py-11 ml-[5%]">PORTFOLIO</h1>
        </div>
        <div className="w-1/2 p-1 mt-[3%] mr-[8%] ml-[7%]">
          <h5 className="mb-1 text-s">
            Id donec rutrum mauris venenatis ac. Id metus lorem mus sit magna
            Varius cum proin. Accumsan volutpat natoque purus pellentesque nec
            Ac nulla turpis consectetur. Fermentum ut non commodo lacus enim.
          </h5>
        </div>
      </div>

      <div className="flex overflow-x-auto mt-10 mb-[10%]">
        {images.map((image, index) => (
          <div key={index} className="flex-none p-2">
            <img
              src={image.img}
              alt={`Image ${index + 1}`}
              className="w-100 h-auto rounded-md"
            />
            <div>{image.title}</div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Portfolio;
