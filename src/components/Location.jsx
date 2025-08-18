import   { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
 
import { Link } from "react-router-dom";

function Location() {
  const cardRef = useRef([]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          cardRef.current[index].classList.add("aos-animate");
        }
      });
    }, { threshold: 0.001 });

    cardRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="section is-location-hero " id="ourblog">
      <div className="container-large">
        <div className="content-wrapper">
          <div className="margin-bottom-48">
            <div
              className="wrap_flex is-align-bottom lg:flex lg:justify-between"
              data-aos="fade-up"
            >
              <div className="max-width-440 pb-[30px]">
                <h2
                  className="heading-style-h2 responsive-head lg:w-[680px] lg:text-left"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <span className="is-word is-1">India</span>{" "}
                  <span className="is-word is-2">Through My Eyes:</span>{" "}
                  <span className="is-word is-3">Culture,</span>{" "}
                  <span className="is-word is-5">Secrets,</span>{" "}
                  <span className="is-word is-6">Inspiration</span>
                </h2>
              </div>
            </div>
          </div>
          <ul className="locations_grid" role="list">
            {/* First Card */}
            <Link to="/blog" className="no-underline">
              <li
                className="locations_card shadow-card"
                ref={(el) => (cardRef.current[0] = el)}
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <img
                  src={"https://idsb.tmgrup.com.tr/ly/uploads/images/2021/06/13/121526.jpg"}
                  loading="lazy"
                  alt=""
                  sizes="(max-width: 767px) 90vw, 43vw"
                  className="img-cover"
                />
                <div className="locations_card_overlay" />
                <div className="z-index-3">
                  <p className="heading-style-h3">Discover India&#39;s Hidden Heritage</p>
                  <p>Uncover stories, Islamic history, and places only a local can share.</p>
                </div>
              </li>
            </Link>
            {/* Second Card */}
            <Link to="/blogtwo" className="no-underline">
              <li
                className="locations_card shadow-card"
                ref={(el) => (cardRef.current[1] = el)}
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <img
                  src={ "https://www.tripsavvy.com/thmb/25rcOSvrYud5Swik3VJGop8KBIc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TeaPlantationsMunnarKerala-62df8976c0ca479fa59717d383974530.jpg"}
                  loading="lazy"
                  alt=""
                  sizes="(max-width: 767px) 90vw, 43vw"
                  className="img-cover"
                />
                <div className="locations_card_overlay" />
                <div className="z-index-3">
                  <p className="heading-style-h3">Kerala: Where India Meets Arabia</p>
                  <p>Experience the culture, nature, and deep-rooted bonds with the Arab world.</p>
                </div>
              </li>
            </Link>
            {/* Third Card */}
            <Link to="/blogthree" className="no-underline">
              <li
                className="locations_card shadow-card"
                ref={(el) => (cardRef.current[2] = el)}
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <img
                  src={ "https://www.tourmyindia.com/blog/wp-content/uploads/2014/08/solo-travelling-india.png"}
                  loading="lazy"
                  alt=""
                  sizes="(max-width: 767px) 90vw, 43vw"
                  className="img-cover"
                />
                <div className="locations_card_overlay" />
                <div className="z-index-3">
                  <p className="heading-style-h3">
                    Plan Smart – Travel Far
                  </p>
                  <p>Get insider advice on food, clinics, wellness and safe journeys.</p>
                </div>
              </li>
            </Link>
            {/* Fourth Card */}
            <Link to="/blogfour" className="no-underline">
              <li
                className="locations_card shadow-card"
                ref={(el) => (cardRef.current[3] = el)}
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <img
                  src={ "https://tourwithrahul.com/wp-content/uploads/2020/07/humayun-s-tomb-under-blue-sky-3672388-scaled.jpg"}
                  loading="lazy"
                  alt=""
                  sizes="(max-width: 767px) 90vw, 43vw"
                  className="img-cover"
                />
                <div className="locations_card_overlay" />
                <div className="z-index-3">
                  <p className="heading-style-h3">Create Memories in Every Chapter</p>
                  <p>From sacred traditions to Bollywood, experience it all—wonder, joy, and learning.</p>
                </div>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Location;
