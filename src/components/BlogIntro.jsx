import React, { useEffect, useRef } from 'react';
import One from '../assets/Images/24.jpg';
import { Link } from 'react-router-dom';

function BlogIntro() {
  // Refs for the elements to animate
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  // Function to add visibility class when element is in view
  const handleScrollAnimation = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing after it is visible
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScrollAnimation, {
      threshold: 0.1,
    });

    // Observing elements for scroll-triggered animations
    if (headingRef.current) observer.observe(headingRef.current);
    if (paragraphRef.current) observer.observe(paragraphRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (paragraphRef.current) observer.unobserve(paragraphRef.current);
      if (buttonRef.current) observer.unobserve(buttonRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <main className="main-wrapper">
      <section data-w-id="dac3a0ad-1bc4-f50d-4480-37c180ea2f7d" className="section is-about-hero">
        <div className="container-large">
          <div className="about-hero_wrap">
            <div className="max-width-700">
              <h1 ref={headingRef} className="heading-style-h1 text-from-bottom">
                <span className="is-word is-1">Explore a</span> 
                <span className="is-word is-2">World of Wonders</span>
              </h1>
            </div>
            <div className="about-visual_wrap">
              <div className="video_box">
                <div className="video_bg">
                  <img
                    ref={imageRef}
                    src={One}
                    loading="eager"
                    sizes="(max-width: 991px) 81vw, 90vw"
                    srcSet={One}
                    alt="Travel Image"
                    className="parallax-img is-full slide-up"
                  />
                </div>
              </div>
            </div>
            <div className="w-layout-vflex flex-center">
              <div className="max-width-800">
                <p ref={paragraphRef} className="text-size-medium text-from-bottom">
                  Beyond our windows lies a world of experiences, curiosities, and knowledge that only travel can offer. Travel isn't just about visiting new places; it's about discovering yourself, broadening your horizons, and creating lasting memories. It opens doors to diverse cultures, unfamiliar perspectives, and profound connections. Through travel, we embrace the beauty of the unknown and the adventure of the journey.
                </p>
              </div>
              <div className="margin-top-24">
                <Link to={'/userinfo'} className='no-underline'>
                  <a
                    ref={buttonRef}
                    href=" "
                    className="button w-inline-block text-white font-semibold text-from-bottom"
                  >
                    <p>Buy our package</p>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BlogIntro;
