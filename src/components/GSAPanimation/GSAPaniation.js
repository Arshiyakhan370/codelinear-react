import { gsap } from "gsap";

export const animationFun = (className, color) => {
  return gsap.to(document.getElementsByClassName(className)[0], {
    color: color,
    duration: 0.3,
    ease: "power2.inOut",
  });
};


export const handleMouseEnter = (className,classToChangeColor) => {
  if(className){
  gsap.to(`.${className}`, {
    background:
      "conic-gradient(from 193deg at 35.28% 47.29%,#386128, #BCC66F 50.44203579425812deg, #386128 360deg)",
    // color: "white",
    duration: 0.3,
    ease: "power2.inOut",
  });
}
  if(classToChangeColor){
  gsap.to(`.${classToChangeColor}`, {
    color: "#F5FF9D",
    duration: 0.3,
    ease: "power2.inOut",
  });
  }
};

export const handleMouseLeave = (className,classToChangeColor) => {
  if(className){
  gsap.to(`.${className}`, {
    background:
      "initial",
    // color: "initial",
    duration: 0.3,
    ease: "power2.inOut",
  });
}

 if(classToChangeColor){
  gsap.to(`.${classToChangeColor}`, {
    // background:
    //   "initial",
    color: "initial",
    duration: 0.3,
    ease: "power2.inOut",
  });
 }

};