import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
 
import { Link } from 'react-router-dom';

function Packages() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <section className="section is-location" data-aos="fade-in" id='package'>
        <div
          data-w-id="4654afeb-bf30-8433-b76d-671c51894643"
          className="parallax-wrap"
          data-aos="fade-in"
        >
          <img
            src=" "
            loading="lazy"
            sizes="100vw"
            srcSet=" "
            alt=""
            className="parallax-img"
          />
          <div className="parallax-overlay" />
        </div>
        <div className="container-large">
          <div className="locations_wrap">
            <div
              data-w-id="b2d90520-e10a-4f72-0cf3-af4a01a8b8ba"
              className="w-layout-vflex package-head max-width-440"
              data-aos="fade-up"
            >
              <div className="margin-bottom-16" data-aos="fade-right">
                <h2 className="lg:mb-[18px] mb-[10px] text-[3rem] lg:text-[4rem]">
                  <span
                    className="is-word is-1"
                    data-aos="zoom-in"
                  >
                    What We
                  </span>{' '}
                  <span
                    className="is-word is-2"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                  >
                    Offer
                  </span>
                </h2>
              </div>
              <div className="text-color-lightgrey" data-aos="fade-up">
                <p className="text-size-medium mb-[10px]">
                  “India in One Book – Through My Eyes” brings all of India to you — in Arabic, by an Indian who knows what you need to know. Whether you seek culture, medical help, halal food, or authentic adventure, our digital packages and guides unlock India for you and your family.
                </p>
              </div>
              <div data-aos="zoom-in">
                <Link to={'/userinfo'} className='no-underline'>
                  <button className="font-semibold button content-one">
                    Download Your Guide
                  </button>
                </Link>
              </div>
            </div>
            <ul role="list" className="locations_list">
              {/* First List Item */}
              <li className="locations_item" data-aos="fade-up">
                <div className="margin-bottom-20" data-aos="zoom-in">
                  <div className="locations_visual">
                    <img
                      src={" https://www.planetware.com/photos-large/IND/india-top-attractions-mysore-palace.jpg"}
                      loading="lazy"
                      alt=""
                      sizes="(max-width: 767px) 81vw, (max-width: 991px) 44vw, 20vw"
                      className="img-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="margin-bottom-8" data-aos="fade-right">
                    <p className="heading-style-h4">India for Arab Travelers</p>
                  </div>
                  <div className="text-color-lightgrey" data-aos="fade-up">
                    <p className="text-size-eyebrow">
                      Cultural etiquette, must-visit sites, and what to expect—direct from a local’s viewpoint.
                    </p>
                  </div>
                </div>
              </li>
              {/* Second List Item */}
              <li className="locations_item" data-aos="fade-up">
                <div className="margin-bottom-20" data-aos="zoom-in">
                  <div className="locations_visual">
                    <img
                      src={ "https://wallpapercave.com/wp/wp2649841.jpg"}
                      loading="lazy"
                      alt=""
                      sizes="(max-width: 767px) 81vw, (max-width: 991px) 44vw, 20vw"
                      className="img-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="margin-bottom-8" data-aos="fade-right">
                    <p className="heading-style-h4">Quick Kerala Mini Guide</p>
                  </div>
                  <div className="text-color-lightgrey" data-aos="fade-up">
                    <p className="text-size-eyebrow">
                      Everything you need for an incredible journey in Kerala: history, food, halal-friendly tips, and local secrets.
                    </p>
                  </div>
                </div>
              </li>
              {/* Third List Item */}
              <li className="locations_item" data-aos="fade-up">
                <div className="margin-bottom-20" data-aos="zoom-in">
                  <div className="locations_visual">
                    <img
                      src={" https://realhappiness.org/images/about-ayurveda.jpg"}
                      loading="lazy"
                      alt=""
                      sizes="(max-width: 767px) 81vw, (max-width: 991px) 44vw, 20vw"
                      className="img-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="margin-bottom-8" data-aos="fade-right">
                    <p className="heading-style-h4">Wellness & Medical Travel</p>
                  </div>
                  <div className="text-color-lightgrey" data-aos="fade-up">
                    <p className="text-size-eyebrow">
                      Trusted hospital recommendations, Ayurveda tips, and a guide for Arabs seeking healing in India.
                    </p>
                  </div>
                </div>
              </li>
              {/* Fourth List Item */}
              <li className="locations_item" data-aos="fade-up">
                <div className="margin-bottom-20" data-aos="zoom-in">
                  <div className="locations_visual">
                    <img
                      src={ "http://vietnamvisavoa.com/public/uploads/files/halal%20food.jpg"}
                      loading="lazy"
                      alt=""
                      sizes="(max-width: 767px) 81vw, (max-width: 991px) 44vw, 20vw"
                      className="img-cover "
                    />
                  </div>
                </div>
                <div>
                  <div className="margin-bottom-8" data-aos="fade-right">
                    <p className="heading-style-h4">Halal Food & Dining Guide</p>
                  </div>
                  <div className="text-color-lightgrey" data-aos="fade-up">
                    <p className="text-size-eyebrow">
                      Where and what to eat: from halal Indian classics to Gulf-inspired recipes and family-safe options.
                    </p>
                  </div>
                </div>
              </li>
              {/* Fifth List Item */}
              <li className="locations_item" data-aos="fade-up">
                <div className="margin-bottom-20" data-aos="zoom-in">
                  <div className="locations_visual">
                    <img
                      src={ "https://www.treebo.com/blog/wp-content/uploads/2018/02/eid.jpg"}
                      loading="lazy"
                      alt=""
                      sizes="(max-width: 767px) 81vw, (max-width: 991px) 44vw, 20vw"
                      className="img-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="margin-bottom-8" data-aos="fade-right">
                    <p className="heading-style-h4">Indian Festivals & Family Fun</p>
                  </div>
                  <div className="text-color-lightgrey" data-aos="fade-up">
                    <p className="text-size-eyebrow">
                      Understand India’s colorful celebrations, how to join them respectfully, and top picks for families.
                    </p>
                  </div>
                </div>
              </li>
              {/* Sixth List Item */}
              <li className="locations_item" data-aos="fade-up">
                <div className="margin-bottom-20" data-aos="zoom-in">
                  <div className="locations_visual">
                    <img
                      src={ "https://www.photojaanic.com/blog/wp-content/uploads/sites/2/2017/08/inspiring-indian-photography-communities.jpg"}
                      loading="lazy"
                      alt=""
                      sizes="(max-width: 767px) 81vw, (max-width: 991px) 44vw, 20vw"
                      className=""
                      style={{objectFit:'cover'}}
                    />
                  </div>
                </div>
                <div>
                  <div className="margin-bottom-8" data-aos="fade-right">
                    <p className="heading-style-h4">Practical Planning Extras</p>
                  </div>
                  <div className="text-color-lightgrey" data-aos="fade-up">
                    <p className="text-size-eyebrow">
                      Handy checklists, personalized itineraries, language starter kits, video tips, and exclusive discounts for Arab readers.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Packages;
