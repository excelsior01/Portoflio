import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  let text1 = useRef(null);
  let text2 = useRef(null);
  let about = useRef(null);
  let title = useRef(null);

  let star = useRef(null);

  useEffect(() => {
    gsap.from(text1.current, {
      scrollTrigger: {
        trigger: "#about",
        start: "top 20%",
        end: "top 70%",

        scrub: 1,
      },
      y: 300,
      opacity: 0,
    });

    gsap.from(text2.current, {
      scrollTrigger: {
        trigger: "#about",
        start: "top 20%",
        end: "top 70%",

        scrub: 1,
      },
      y: 300,
      opacity: 0,
    });

    gsap.from(title.current, {
      scrollTrigger: {
        trigger: "#about",
      },
      delay: 1,
      opacity: 0,
      scale: 0.5,
      ease: "bounce.out",
    });

    gsap.from(star.current, {
      scrollTrigger: {
        trigger: star.current,
      },

      opacity: 0,
      rotate: 90,
      ease: "bounce.out",
    });
  }, []);

  return (
    <section
      ref={about}
      id='about'
      className='page-section bg-secondary text-white mb-0 about'
    >
      <div className='container about-container'>
        <h2
          ref={title}
          className='page-section-heading text-center text-uppercase text-white'
        >
          About
        </h2>

        <div className='divider-custom divider-light'>
          <div className='divider-custom-line'></div>
          <div className='divider-custom-icon'>
            <i ref={star} className='fas fa-star'></i>
          </div>
          <div className='divider-custom-line'></div>
        </div>

        <div className='row d-flex justify-content-center'>
          <div className='col-lg-6 col-md-5 col-sm-3  text-left '>
            <p ref={text1} id='text-trigger1  ' className='lead'>
              I'm web developer based in London (UK) with frontend experience (React).
              I enjoy creating things that live on the internet, whether that be websites,
              applications or any type of content. 
            </p>
          </div>
          <div className='col-lg-6 col-md-5 col-sm-3  text-right '>
            <p ref={text2} id='text-trigger2 ' className='lead'>

              I am obsessed for UI effects, animations and creating
              intuitive, dynamic user experiences.
              Find out more about me and my works in the section below
              

            </p>
          </div>
        </div>

        <div className='text-center mt-5'>
          <a
            className='btn btn-xl btn-outline-light'
            href='https://drive.google.com/file/d/1TBYIvqzD6NeGeQCh-rs5tljYT6kspNyD/view?usp=sharing'
          >
            <i className='fas fa-download mr-2'></i>
            Resume
          </a>
        </div>

        <div className='skills'></div>

        <div className=' sk-conntainer'>
          <ul className='row sk-list1    justify-content-center  '>
            <li className='col-lg-auto  skill'>Scss</li>
            <li className='col-lg-auto  skill'>HTML</li>
            <li className='col-lg-auto  skill'>Javascript</li>
            <li className='col-lg-auto  skill'>Bootstrap</li>
            <li className='col-lg-auto    skill'>React/Redux</li>
          </ul>
          <ul className=' row p-0  justify-content-center '>
            <li className='col-lg-auto   skill'>Gsap/MotionFramer</li>
            <li className='col-lg-auto   skill'>SQL</li>
            <li className='col-lg-auto   skill '>WordPress</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
