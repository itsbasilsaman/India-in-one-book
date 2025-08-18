import React, { useEffect, useState } from "react";
import Image from '../assets/Images/22.png'
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

function Header() {
  const [isVisible, setIsVisible] = useState(false);


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
  const smoothScroll = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      const offset = -55; // Adjust this value to set the desired offset
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const finalPosition = elementPosition + offset;
  
      window.scrollTo({
        top: finalPosition,
        behavior: "smooth", // Enables smooth scrolling
      });
  
      setIsMenuOpen(false); // Close menu after scrolling
    }
    // else  {
    //   element.scrollIntoView({
    //     behavior: "smooth", // Enables smooth scrolling
    //     block: "start", // Aligns to the start of the element
    //   });
    //   setIsMenuOpen(false); // Close menu after scrolling
    // }
  };



  useEffect(() => {
    // Trigger the visibility after a slight delay
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div
      className={`nav_wrapper  ${isVisible ? "visible" : ""}`} // Add the 'visible' class when isVisible is true
      style={{position:'fixed' , top:'0px', left:'0px'}}
     
    >
      <div
        data-w-id="17a6340c-761b-7fc0-e914-c76287f98ca6"
        data-animation="default"
        data-collapse="medium"
        data-duration={400}
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="navbar w-nav"
      >
        <div className="nav_wrap">
          <a
            data-w-id="17a6340c-761b-7fc0-e914-c76287f98ca8"
            href="#"
                  onClick={() => smoothScroll("home")}
            aria-current="page"
            className="nav_brand w-nav-brand w--current"
          >
              <img src={Image}   className="lg:w-[140px] w-[120px]" />
              
            <div className="link_line" />
          </a>
          <nav role="navigation" className="nav_menu-items w-nav-menu">
            <div className="nav_menu-items-inner">
           
                <div className="nav_menu-link-wrap is-left">
                  
                    <a href="#"
                  onClick={() => smoothScroll("home")} className="nav_link w-inline-block">
                      <div className="z-index-2 text-white">Home</div>
                      <div className="link_line" />
                    </a>
                 
                  
                    <a href="#"
                  onClick={() => smoothScroll("ourblog")} className="nav_link w-inline-block">
                      <div className="z-index-2 text-white">Our Blog</div>
                      <div className="link_line" />
                    </a>
               
                </div>
            
              <div
                id="w-node-_05d0023e-f06c-50f0-7ea3-558eecf113b0-87f98ca6"
                className="nav_menu-link-wrap"
              >
                  <a href="#"
                  onClick={() => smoothScroll("package")} className="nav_link w-inline-block">
                    <div className="z-index-2 text-white">Packages</div>
                    <div className="link_line" />
                  </a>
               
                  <a  href="#"
                  onClick={() => smoothScroll("about")} className="nav_link w-inline-block">
                    <div className="z-index-2 text-white">About</div>
                    <div className="link_line" />
                  </a>
              
              </div>
            </div>
          </nav>
          <div className="nav_button w-nav-button" onClick={toggleMenu}>
          {isMenuOpen ? (
          <IoClose className="text-white text-[31px]" />
        ) : (
          <div className="icon-wrapper">
            <div className="header-menu-button-icon-top" />
            <div className="header-menu-button-icon-medium" />
            <div className="header-menu-button-icon-bottom" />
          </div>
        )}
          </div>
        </div>
      </div>

      {isMenuOpen && (
  <div className="menu-content link-contents absolute top-0 right-0 toggle-contents shadow-md p-5 w-[80%] sm:w-[50%]">
    <ul className="pl-[0px]">
      <a href="#"  onClick={() => {   setIsMenuOpen(false); smoothScroll("home") }}>
        <li>
          <span className="block p-2">Home</span>
        </li>
      </a>
      <a href="#" onClick={() => {   setIsMenuOpen(false); smoothScroll("ourblog")  }}>
        <li>
          <span className="block p-2">Our Blog</span>
        </li>
      </a>
      <a href="#"   onClick={() => {   setIsMenuOpen(false); smoothScroll("package") }}>
        <li>
          <span className="block p-2">Packages</span>
        </li>
      </a>
      <a href="#" onClick={() => {  setIsMenuOpen(false); smoothScroll("about") }}>
        <li>
          <span className="block p-2">About</span>
        </li>
      </a>
       
    </ul>
  </div>
)}

    </div>
  );
}

export default Header;
