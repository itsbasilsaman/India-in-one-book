import  { useEffect, useRef } from 'react';
// import One from '../assets/Images/32.jpg';
import { Link } from 'react-router-dom';

function BlogIntroFour() {
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
      <section className="section is-about-hero">
        <div className="container-large">
          <div className="about-hero_wrap">
            <div className="max-width-700">
              <h1 ref={headingRef} className="heading-style-h1 text-from-bottom">
                <span className="is-word is-1">Create lasting </span>
                <span className="is-word is-2">memories.</span>
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
                  Treasure the beauty of unforgettable experiences and let each journey leave a lasting imprint on your soul. Hold on to the moments that bring joy, spark wonder, and evoke emotions that stay with you long after the adventure ends. From the simple pleasures of quiet reflection to the exhilaration of new discoveries, these experiences weave together the stories that define your life and enrich your spirit.
                </p>
              </div>
              <div className="margin-top-24">
                <Link to={'/userinfo'} className='no-underline'>
                  <a
                    ref={buttonRef}
                    href=""
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

export default BlogIntroFour;
