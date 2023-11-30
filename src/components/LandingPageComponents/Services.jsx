import React, { Fragment } from "react";

const Services = () => {
  const sections = [
    {
      title: "Consulting ",
      title1: " and Strategy",
      items: [
        "Market Research",
        "Stakeholder Workshops",
        "Product Strategy and Roadmapping",
        "Technology Consulting and Platform Planning",
        "GTM Strategy",
      ],
    },
    {
      title: "User",
      title1: " Experience",
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
      title: "Product ",
      title1: " Development",
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
      title: "Digital ",
      title1: " Marketing",
      items: ["SEO", "Social Media", "Paid Search", "Paid Social"],
    },
  ];
  return (
    <Fragment>
      <div className="flex">
        <div className="w-1/2 p-1">
          <h1 className="text-7xl px-1 py-11 ml-[5%]">SERVICES</h1>
        </div>
        <div className="w-1/2 p-1 mt-[3%] mr-[8%] ml-[7%]">
          <h5 className="mb-1 text-s">
            Id donec rutrum mauris venenatis ac.Id metus lorem mus sit magna
            Varius cum proin. Accumsan volutpat natoque purus pellentesque nec
            Ac nulla turpis consectetur. Fermentum ut non commodo lacus enim.
          </h5>
        </div>
      </div>
      <div
        className="flex overflow-x-auto whitespace-nowrap"
        style={{ overflowY: "scroll", scrollbarWidth: "0" }}
      >
        {sections.map((section, index) => (
          <div
            key={index}
            className="p-6 mt-[8%] mb-[10%] mr-[20%] border-b inline-block"
          >
            <div className="flex-1 text-9xl font-bold uppercase ml-[5%] ">
              <div className="block">{section.title}</div>
              <div className="block">{section.title1}</div>
            </div>

            <ul className="flex-1 ml-[100%] text-xs text-left uppercase list-none mr-[10%] mt-[-24%]">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="mb-2 mr-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Services;
