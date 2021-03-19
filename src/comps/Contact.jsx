import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  let contactTitle = useRef(null);
  let contactTrigger = useRef(null);
  let star = useRef(null);

  useEffect(() => {
    gsap.from(contactTitle.current, {
      scrollTrigger: {
        trigger: "#contact",
      
      },
 
      opacity: 0,
      scale: 0.5,
      ease: "bounce.out",
    });

    gsap.from(star.current, {
      scrollTrigger: {
        trigger: "#contact",
      },
      
      opacity: 0,
      rotate: 90,
      ease: "bounce.out",
    });
  }, []);

  return (
    <section className='page-section bg-black' id='contact'>
      <div className='container' ref={contactTrigger}>
        <h2
          className='page-section-heading text-center text-uppercase text-white mb-0'
          ref={contactTitle}
        >
          Contact 
        </h2>

        <div className='divider-custom'>
          <div className='divider-custom-line'></div>
          <div ref={star} className='divider-custom-icon'>
            <i className='fas fa-star'></i>
          </div>
          <div className='divider-custom-line'></div>
        </div>

        <div className='row'>
          <div className='col-lg-8 mx-auto'>
            <form id='contactForm' name='sentMessage' novalidate='novalidate'>
              <div className='control-group'>
                <div className='form-group floating-label-form-group controls mb-0 '>
                  <label>Name</label>
                  <input
                    className='form-control'
                    id='name'
                    type='text'
                    placeholder='Name'
                    required='required'
                    data-validation-required-message='Please enter your name.'
                  />
                  <p className='help-block text-danger'></p>
                </div>
              </div>
              <div className='control-group'>
                <div className='form-group floating-label-form-group controls mb-0 '>
                  <label>Email Address</label>
                  <input
                    className='form-control'
                    id='email'
                    type='email'
                    placeholder='Email Address'
                    required='required'
                    data-validation-required-message='Please enter your email address.'
                  />
                  <p className='help-block text-danger'></p>
                </div>
              </div>
              <div className='control-group'>
                <div className='form-group floating-label-form-group controls mb-0 '>
                  <label>Phone Number</label>
                  <input
                    className='form-control'
                    id='phone'
                    type='tel'
                    placeholder='Phone Number'
                    required='required'
                    data-validation-required-message='Please enter your phone number.'
                  />
                  <p className='help-block text-danger'></p>
                </div>
              </div>
              <div className='control-group'>
                <div className='form-group floating-label-form-group controls mb-0 '>
                  <label>Message</label>
                  <textarea
                    className='form-control'
                    id='message'
                    rows='5'
                    placeholder='Message'
                    required='required'
                    data-validation-required-message='Please enter a message.'
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
              </div>
              <br />
              <div id='success'></div>
              <div className='form-group'>
                <button
                  className='btn btn-danger btn-xl'
                  id='sendMessageButton'
                  type='submit'
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
