import { gsap } from "gsap";

export const animationFun = (className,color) =>{
return gsap.to(document.getElementsByClassName(className)[0], {
    color: color,
    duration: 0.3,
    ease: 'power2.inOut',
  });
}