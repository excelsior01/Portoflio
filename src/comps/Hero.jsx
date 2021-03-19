import React, { useRef, useEffect, useState} from "react";
import Hero2 from "./Hero2";
import gsap from "gsap";

 

const Hero = () => {
  let title = useRef(null);

  let line1 = useRef(null);
  let line2 = useRef(null);
  let star = useRef(null);
  let desc = useRef(null);
  let arrow = useRef(null);

  const [clicked, setClicked] = useState(false);

  const setMouth = () => {
    setClicked(true);
  };

  useEffect(() => {
    gsap.from(title.current, {
      opacity: 0,
      delay: 1.2,
      duration: 2,
      ease: "power4.out",
    });

    gsap.from(line1.current, {
      opacity: 0,
      x: -500,
      delay: 1.5,
      duration: 2,
      ease: "power4.out",
    });
    gsap.from(line2.current, {
      opacity: 0,
      x: 500,
      delay: 1.5,
      duration: 2,
      ease: "power4.out",
    });

    gsap.from(star.current, {
      opacity: 0,
      scale: 0.1,
      rotate: 360,
      delay: 1.7,
      duration: 2,
      ease: "power4.out",
    });

    gsap.from(desc.current, {
      opacity: 0,
      y: 50,

      delay: 1.8,
      duration: 2,
      ease: "power4.out",
    });
  }, []);

  useEffect(() => {
    gsap.to(arrow.current, {
      opacity: 0,
      y: 10,
      repeat: -1,
      repeatDelay: 1,
    });
  }, []);

  return (
    <header
      onClick={setMouth}
      className='masthead bg-black  text-white text-center'
    >
      <div className='container bg-black  d-flex align-items-center flex-column'>
        
          <Hero2 clicked={clicked} setClicked={setClicked} />
  
        <div
          id='#page-top'
          className='container  d-flex align-items-center flex-column topstuff'
        >
          <h1 ref={title} className='masthead-heading text-uppercase mb-0'>
            Hi! I'm Murad
          </h1>

          <div className='divider-custom symbol divider-light'>
            <div ref={line1} className='divider-custom-line'></div>
            <div ref={star} className='divider-custom-icon'>
              <i className='fas fa-star'></i>
            </div>
            <div ref={line2} className='divider-custom-line'></div>
          </div>
        </div>

        <p ref={desc} className='masthead-subheading font-weight-light mb-0'>
          Web Developer - Front End
        </p>
        <div ref={arrow} className='chevron'>
          <i className='fas fa-chevron-down'></i>
          <i className='fas fa-chevron-down'></i>
        </div>
      </div>
    </header>
  );
};

export default Hero;
