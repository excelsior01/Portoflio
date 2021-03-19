import logo from "./styles/assets/Logo.jpg";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { Link } from "react-scroll";

const Nav = () => {
  let nav = useRef(null);
  let items = useRef(null);
  let mobileNav = useRef(null);

  const [clicked,setClicked] = useState(false);

  const hideMobileNav = () =>{
    setClicked(true)
  }

  useEffect(() => {
    gsap.from([nav.current, items.current], {
      opacity: 0,
      y: -100,

      duration: 1,
    });

  }, []);


  useEffect(() => {
    if(clicked === true ){
     
    }
  }, [clicked]);

  return (
    <nav
      ref={nav}
      className='navbar navbar-expand-lg bg-secondary text-uppercase fixed-top '
      id='mainNav'
    >
      <div className='container mainNav'>
        <a
          ref={items}
          className='navbar-brand js-scroll-trigger logo-link'
          href='/'
        >
          <img className='logo' src={logo} alt='logo' />
        </a>
        <button
          className='navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-danger text-white rounded'
          type='button'
          data-toggle='collapse'
          data-target='#navbarResponsive'
          aria-controls='navbarResponsive'
          aria-expanded='false'
          aria-label='Toggle navigation'
           
        >
          Menu 
          <i className='fas fa-bars'></i>
        </button>
        <div ref={mobileNav}  className='collapse navbar-collapse ' id='navbarResponsive'>
          <ul  className='navbar-nav ml-auto'>
            <li className='nav-item mx-0 mx-lg-1'>
              <Link
                to="about"
                smooth={true}
                duration={1000}
                activeClass="activeLink"
                className='nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger'
                onClick={hideMobileNav}
              >
                About
              </Link>
            </li>
            <li className='nav-item mx-0 mx-lg-1 '>
            <Link
                to="portfolio"
                smooth={true}
                duration={1000}
                activeClass="activeLink"
                className='nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger portfolio '
              >
                Portfolio
              </Link>
            </li>
            <li className='nav-item mx-0 mx-lg-1'>
            <Link
                to="contact"
                smooth={true}
                duration={1000}
                activeClass="activeLink"
                className='nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger'
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
