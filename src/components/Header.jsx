import  { useEffect, useContext, useState } from "react";
import LanguageContext from '../languageContext';
// import Image from '../assets/Images/22.png'
// import { IoClose } from "react-icons/io5";
// import { Link } from "react-router-dom";



function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);

  // Function to toggle the menu
  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  
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

  // Texts for both languages
  const texts = {
    en: {
      brand: 'India in One Book',
      home: 'Home',
      blog: 'Our Blog',
      packages: 'Packages',
      about: 'About',
    },
    ar: {
      brand: 'الهند في كتاب واحد',
      home: 'الرئيسية',
      blog: 'مدونتنا',
      packages: 'الباقات',
      about: 'معلومات عنا',
    }
  };

  return (
    <div
      className={`nav_wrapper  ${isVisible ? "visible" : ""}`}
      style={{position:'fixed' , top:'0px', left:'0px'}}
      dir="ltr"
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
        <div className="flex items-center justify-between nav_wrap">
          <a
            data-w-id="17a6340c-761b-7fc0-e914-c76287f98ca8"
            href="#"
            onClick={() => smoothScroll("home")}
            aria-current="page"
            className="nav_brand w-nav-brand w--current"
          >
            <img src="/white-logo.png" alt="Brand Logo" className="w-auto z-index-2" />
            <div className="link_line" />
          </a>
          {/* Language Switcher */}
          <div className="flex items-center mr-4">
            <div
              className="relative flex items-center w-[80px] h-9 bg-gray-800 rounded-full cursor-pointer select-none transition-all"
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              style={{direction: 'ltr'}}
            >
              {/* Toggle Knob */}
              <div
                className={`absolute top-1 left-1 transition-all duration-300 w-8 h-7 rounded-full flex items-center justify-center shadow-md ${language === "en" ? "translate-x-0" : "translate-x-[37px]"} bg-white`}
                style={{zIndex:2}}
              >
                <span className={`font-bold text-gray-900 text-sm`}>{language === "en" ? "EN" : "عربي"}</span>
              </div>
              {/* Arabic label */}
              <span
                className={`absolute right-3 text-white text-sm font-bold transition-all duration-300 ${language === "ar" ? 'opacity-100' : 'opacity-60'}`}
                style={{zIndex:1}}
              >عربي</span>
              {/* English label (background) */}
              <span
                className={`absolute left-3 text-gray-900 text-sm font-bold transition-all duration-300 ${language === "en" ? 'opacity-100' : 'opacity-60'}`}
                style={{zIndex:1, color: language === "en" ? '#111' : '#888'}}
              >EN</span>
            </div>
          </div>
          {/* End Language Switcher */}
          <nav role="navigation" className="nav_menu-items w-nav-menu">
            <div className="nav_menu-items-inner">
           
                <div className="nav_menu-link-wrap is-left">
                  
                    <a href="#"
                  onClick={() => smoothScroll("home")} className="nav_link w-inline-block">
                      <div className="text-white text-[16px] z-index-2 font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>{texts[language].home}</div>
                      <div className="link_line" />
                    </a>
                    <a href="#"
                  onClick={() => smoothScroll("ourblog")} className="nav_link w-inline-block">
                      <div className="text-white text-[16px] z-index-2 font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>{texts[language].blog}</div>
                      <div className="link_line" />
                    </a>
               
                </div>
            
              <div
                id="w-node-_05d0023e-f06c-50f0-7ea3-558eecf113b0-87f98ca6"
                className="nav_menu-link-wrap"
              >
                  <a href="#"
                  onClick={() => smoothScroll("package")} className="nav_link w-inline-block">
                    <div className="text-white text-[16px] z-index-2 font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>{texts[language].packages}</div>
                    <div className="link_line" />
                  </a>
                  <a  href="#"
                  onClick={() => smoothScroll("about")} className="nav_link w-inline-block">
                    <div className="text-white text-[16px] z-index-2 font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>{texts[language].about}</div>
                    <div className="link_line" />
                  </a>
              
              </div>
            </div>
          </nav>
           
        </div>
      </div>

      {isMenuOpen && (
        <div className="menu-content link-contents absolute top-0 right-0 toggle-contents shadow-md p-5 w-[80%] sm:w-[50%]">
          <ul className="pl-[0px]">
            <a href="#"  onClick={() => {   setIsMenuOpen(false); smoothScroll("home") }}>
              <li>
                <span className="block p-2">{texts[language].home}</span>
              </li>
            </a>
            <a href="#" onClick={() => {   setIsMenuOpen(false); smoothScroll("ourblog")  }}>
              <li>
                <span className="block p-2">{texts[language].blog}</span>
              </li>
            </a>
            <a href="#"   onClick={() => {   setIsMenuOpen(false); smoothScroll("package") }}>
              <li>
                <span className="block p-2">{texts[language].packages}</span>
              </li>
            </a>
            <a href="#" onClick={() => {  setIsMenuOpen(false); smoothScroll("about") }}>
              <li>
                <span className="block p-2">{texts[language].about}</span>
              </li>
            </a>
          </ul>
        </div>
      )}

    </div>
  );
}

export default Header;
