import  { useEffect, useRef } from 'react';
// import One from '../assets/Images/20.jpg';
import { Link } from 'react-router-dom';

function BlogIntroThree() {
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
                <span className="is-word is-1">Strategically planning</span> 
                <span className="is-word is-2">your trips</span>
              </h1>
            </div>
            <div className="about-visual_wrap">
              <div className="video_box">
                <div className="video_bg">
                  {/* <img
                    ref={imageRef}
                    src={One}
                    loading="eager"
                    sizes="(max-width: 991px) 81vw, 90vw"
                    srcSet={One}
                    alt="Travel Image"
                    className="parallax-img is-full slide-up"
                  /> */}
                </div>
              </div>
            </div>
            <div className="w-layout-vflex flex-center">
              <div className="max-width-800">
                <p ref={paragraphRef} className="text-size-medium text-from-bottom">
                  Strategically plan your trips to make the most of every journey. Maximize your adventures with smart planning, ensuring unforgettable experiences, efficient itineraries, and the perfect balance of exploration and relaxation.  
                  From uncovering hidden gems to optimizing your travel time, thoughtful preparation turns every trip into a seamless adventure. Create lasting memories with a plan that aligns with your goals and passions.
                </p>
              </div>
              <div className="margin-top-24">
                <Link to={'/userinfo'} className='no-underline'>
                  <a
                    ref={buttonRef}
                    href=" "
                    className="font-semibold text-white button w-inline-block text-from-bottom"
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

export default BlogIntroThree;
