import { useEffect } from 'react';
 
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

function SectionSix() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div>
      <section
        data-w-id="4500f34f-ad71-c737-340f-a39b6520a855"
        className="section is-bottom-cta"
      >
        <div className="container-large">
          <div
            data-w-id="4500f34f-ad71-c737-340f-a39b6520a857"
            className="bottom-cta_wrap"
          >
            <div
              className="max-width-700"
              data-aos="fade-left"
            >
              <h2 className="heading-style-h1">
                <span className="is-word is-1">Ready</span>{" "}
                <span className="is-word is-2">to</span>
                <br />
                <span className="is-word is-3">Experience</span>{" "}
                <span className="is-word is-4">the</span>{" "}
                <span className="is-word is-5">Real India?</span>
              </h2>
             
            </div>
            <div className="bottom-cta_box">
              <div className="video_bg">
                <div className="video_bg_overlay" />
                <img
                  src={ "https://globalgrasshopper.com/wp-content/uploads/2011/01/Mumbai-India-scaled.jpg"}
                  loading="lazy"
                  sizes="90vw"
                  srcSet={Image}
                  alt="India in One Book – Kerala"
                  className="img-cover"
                  data-aos="fade-up"
                  style={{objectFit:'cover'}}
                />
              </div>
            </div>
            <div
              className="max-width-full bg-black rounded-[18px] buy-package-button "
            >
              <Link to={'/userinfo'}>
                <p
                  className="px-8 py-3 text-xl font-semibold text-white no-underline is-secondary w-inline-block"
                  
                >
                  Download “India in One Book” Now
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SectionSix;
