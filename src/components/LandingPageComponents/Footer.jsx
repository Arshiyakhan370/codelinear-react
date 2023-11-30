import React, { Fragment } from "react";
import image from "../../assets/images/logo (1).png";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaLinkedin, FaMedium } from "react-icons/fa";
const Footer = () => {
  return (
    <Fragment>
      <footer className="py-4">
        <div className="flex justify-between items-left container mx-auto ml-12">
          <div>
            <img
              src={image}
              alt="Company Logo"
              className="w-20 h-12 mx-auto mb-4 ml-1"
            />
            <div className="text-left mt-2 text-sm text-gray-600">
              &copy; Codlinear 2023 . All rights reserved.
            </div>
          </div>
          <div className="text-center mt-4 text-sm text-black ml-60">
            <ul className="flex space-x-6 mb-5">
              <li>about</li>
              <li>work </li>
              <li>ideas</li>
            </ul>
            <ul className="flex space-x-6 ">
              <li>services</li>
              <li>career</li>
              <li>Let's Talk</li>
            </ul>
          </div>
          <div className="flex items-center space-x-4 space-y-5  ">
            <div>
              <p> info@codlinear.com</p>
              <p> +14155235957</p>
            </div>
            <div className="flex space-x-5 ">
              <Link
                to="https://www.linkedin.com/"
                target="_blank"
                className="text-black "
              >
                <FaLinkedin />
              </Link>
              <Link
                to="https://www.facebook.com/"
                target="_blank"
                className="text-black"
              >
                <FaFacebook />
              </Link>
              <Link
                to="https://www.instagram.com/"
                target="_blank"
                className="text-black"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
