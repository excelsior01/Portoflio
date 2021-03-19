import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import marketark from "./styles/assets/Marketark2-min.jpg";
import pomo from "./styles/assets/pomo-min.jpg";
import port2 from "./styles/assets/port2-min.jpg";
import sensi from "./styles/assets/sensi-min.jpg";
import world from "./styles/assets/world-min.jpg";

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  let star = useRef(null);

  useEffect(() => {
    gsap.from("#card", {
      duration: 1,

      y: 100,
      stagger: 0.5,
    });

    gsap.from("#card", {
      scrollTrigger: {
        trigger: "#portfolio",
        start: "top 20%",
        end: "top 80%",
      },

      opacity: 0,
      y: 100,
      stagger: 0.5,
      delay: 0.3,
    });

    gsap.from(".port-tit", {
      scrollTrigger: {
        trigger: "#portfolio",
      },
      delay: 1,
      opacity: 0,
      scale: 0.5,
      ease: "bounce.out",
    });

    gsap.from(star.current, {
      scrollTrigger: {
        trigger: "#portfolio",
      },

      opacity: 0,
      rotate: 90,
      ease: "bounce.out",
    });
  }, []);

  return (
    <section className='page-section portfolio' id='portfolio'>
      <div className='container '>
        <h2 className='page-section-heading port-tit text-center text-uppercase  text-white mb-0'>
          Portfolio
        </h2>

        <div className='divider-custom'>
          <div className='divider-custom-line'></div>
          <div className='divider-custom-icon'>
            <i ref={star} className='fas fa-star'></i>
          </div>
          <div className='divider-custom-line'></div>
        </div>

        <div className='row justify-content-center'>
          <div id='card' className='col-md-6 col-lg-4 mb-5'>
            <div
              className='portfolio-item mx-auto'
              data-toggle='modal'
              data-target='#portfolioModal1'
            >
              <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                <div className='portfolio-item-caption-content text-center  '>
                  <div className='text-white'>
                    <p className='work-title'>MarketArk</p>
                    <p className='work-desc'>
                      Amazon clone with Firebase auth and Stripe payment
                      implementation
                    </p>
                    <p className='work-tech'> React, NodeJS, Scss</p>
                    <a
                      style={{ margin: "10px" }}
                      href='https://marketark2.web.app/'
                    >
                      Link
                    </a>
                    <a href='https://github.com/excelsior01/Amazon-clone'>Code</a>
                  </div>
                </div>
              </div>

              <img className='img-fluid workCard' src={marketark} alt='' />
            </div>
          </div>

          <div id='card' className='col-md-6 col-lg-4 mb-5'>
            <div
              className='portfolio-item mx-auto'
              data-toggle='modal'
              data-target='#portfolioModal2'
            >
              <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                <div className='portfolio-item-caption-content text-center '>
                  <div className='text-white'>
                    <p className='work-title'>Portfolio Template 2</p>
                    <p className='work-desc'>
                      Single page app with cool navbar animations
                    </p>
                    <p className='work-tech'> React, Gsap, Scss</p>
                    <a
                      style={{ margin: "10px" }}
                      href='https://city-menu.netlify.app/'
                    >
                      Link
                    </a>
                    <a href='https://github.com/excelsior01/Port-v2'>Code</a>
                  </div>
                </div>
              </div>

              <img className='img-fluid workCard' src={sensi} alt='' />
            </div>
          </div>

          <div id='card' className='col-md-6 col-lg-4 mb-5'>
            <div
              className='portfolio-item mx-auto'
              data-toggle='modal'
              data-target='#portfolioModal3'
            >
              <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                <div className='portfolio-item-caption-content text-center text-danger'>
                  <div className='text-white'>
                    <p className='work-title'>Portfolio Template 1</p>
                    <p className='work-desc'>
                      Responsive page with custom cursorm, EmailJS for form
                    </p>
                    <p className='work-tech'> React, Gsap, Scss,React-Media</p>
                    <a
                      style={{ margin: "10px" }}
                      href='https://shigo-portfolio-template.netlify.app/'
                    >
                      Link
                    </a>
                    <a href='https://github.com/excelsior01/Portfolio-template1'>Code</a>
                  </div>
                </div>
              </div>
              <img className='img-fluid  workCard' src={port2} alt='' />
            </div>
          </div>

          <div id='card' className='col-md-6 col-lg-4 mb-5 mb-lg-0'>
            <div
              className='portfolio-item mx-auto'
              data-toggle='modal'
              data-target='#portfolioModal4'
            >
              <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                <div className='portfolio-item-caption-content text-center '>
                  <div className='text-white'>
                    <p className='work-title'>Pomodoro Clock</p>
                    <p className='work-desc'>
                      Pomodoro clock with audio alarm and neomorph design
                    </p>
                    <p className='work-tech'> React, Scss </p>
                    <a style={{ margin: "10px" }} href='https://gracious-edison-e54e4f.netlify.app/'>
                      Link
                    </a>
                    <a href='https://github.com/excelsior01/Pomodoro-Clock'>Code</a>
                  </div>
                </div>
              </div>
              <img className='img-fluid workCard' src={pomo} alt='' />
            </div>
          </div>

          <div id='card' className='col-md-6 col-lg-4 mb-5 mb-md-0'>
            <div
              className='portfolio-item mx-auto'
              data-toggle='modal'
              data-target='#portfolioModal5'
            >
              <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                <div className='portfolio-item-caption-content text-center '>
                  <div className='text-white'>
                    <p className='work-title'>The Road</p>
                    <p className='work-desc'>
                      Showcase website front page with responsive design
                    </p>
                    <p className='work-tech'> html, javascript, css </p>
                    <a
                      style={{ margin: "10px" }}
                      href='https://showcase-template-1.netlify.app/'
                    >
                      Link
                    </a>
                    <a href='https://github.com/excelsior01/Showcase'>Code</a>
                  </div>
                </div>
              </div>
              <img className='img-fluid workCard' src={world} alt='' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
