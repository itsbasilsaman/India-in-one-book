import React, { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer'; 

function SectionThree() {

  const [inView, setInView] = useState(false);

  // IntersectionObserver callback to detect when the element is in view
  const handleScrollAnimation = (entry) => {
    if (entry.isIntersecting) {
      setInView(true);
    }
  };

  // Optionally, using react-intersection-observer hook
  const { ref, inView: inViewHook } = useInView({
    triggerOnce: true, // Trigger only once when the element first comes into view
    onChange: handleScrollAnimation,
  });

  useEffect(() => {
    setInView(inViewHook);
  }, [inViewHook]);


  return (
    <div>
      <section id="intro" className="section background-color-white">
        <div className="container-large">
          <div className="margin-bottom-48">
            <div
              data-w-id="0e2ba735-0b1e-eb7d-5169-048742268950"
              className="wrap_flex is-align-bottom"
            >
              <div ref={ref} className="max-width-440">
      <h2 className={`heading-style-h2 ${inView ? "animate-text" : ""}`}>
        <span
          style={{
            transform: inView ? "translate3d(0, 0.5em, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" : "none",
          }}
          className="is-word is-1"
        >
          Meet
        </span>{" "}
        <span
          style={{
            transform: inView ? "translate3d(0, 0.5em, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" : "none",
          }}
          className="is-word is-2"
        >
          the
        </span>{" "}
        <span
          style={{
            transform: inView ? "translate3d(0, 0.5em, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" : "none",
          }}
          className="is-word is-3"
        >
          Coaches
        </span>{" "}
        <span
          style={{
            transform: inView ? "translate3d(0, 0.5em, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" : "none",
          }}
          className="is-word is-5"
        >
          Behind
        </span>{" "}
        <span
          style={{
            transform: inView ? "translate3d(0, 0.5em, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" : "none",
          }}
          className="is-word is-6"
        >
          elysian
        </span>
      </h2>
    </div>
              <a
                data-w-id="0b3b7d24-f975-d9ef-d93e-6f41868a416a"
                style={{
                  WebkitTransform:
                    "translate3d(0, 0.5em, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  MozTransform:
                    "translate3d(0, 0.5em, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  msTransform:
                    "translate3d(0, 0.5em, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  transform:
                    "translate3d(0, 0.5em, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              
                }}
                href="#"
                className="button w-inline-block"
              >
                <div className="z-index-2">
                  <p>Explore Academy</p>
                </div>
                <div className="z-index-2">
                  <img
                    src="https://cdn.prod.website-files.com/67041c2a6a806901e0c7ed1b/670563f226883663736a6d20_icon-arrow-light.svg"
                    loading="lazy"
                    alt=""
                    className="icon-16"
                  />
                </div>
              </a>
            </div>
          </div>
          <ul role="list" className="player_list">
            <li
              data-w-id="20bd0fcf-0ffa-fb32-1801-11b2da2948a3"
              className="player_item"
            >
              <div className="margin-bottom-40">
                <div className="player_visual shadow-card">
                  <img
                    src="https://cdn.prod.website-files.com/67041c2a6a806901e0c7ed1b/67093f38a5337d5f28be5266_tennis-image-01%402x.avif"
                    loading="lazy"
                    alt=""
                    sizes="(max-width: 767px) 90vw, (max-width: 991px) 46vw, 40vw"
                    srcSet="https://cdn.prod.website-files.com/67041c2a6a806901e0c7ed1b/67093f38a5337d5f28be5266_tennis-image-01%402x-p-500.avif 500w, https://cdn.prod.website-files.com/67041c2a6a806901e0c7ed1b/67093f38a5337d5f28be5266_tennis-image-01%402x-p-800.avif 800w, https://cdn.prod.website-files.com/67041c2a6a806901e0c7ed1b/67093f38a5337d5f28be5266_tennis-image-01%402x.avif 1060w"
                    className="img-cover"
                  />
                </div>
              </div>
              <div className="max-width-440">
                <div className="w-layout-vflex">
                  <div className="margin-bottom-16">
                    <p className="text-size-eyebrow">Los Angeles, CA</p>
                  </div>
                  <div className="margin-bottom-24">
                    <p className="heading-style-h2">Sarah Thompson</p>
                  </div>
                  <div className="margin-bottom-24">
                    <p className="text-size-medium">
                      With 18 years of coaching under her belt, Sarah is known
                      for her ability to develop young talent, guiding players
                      to reach their full potential on the court.
                    </p>
                  </div>
                  <a
                    href="about-us.html"
                    className="button is-secondary w-inline-block"
                  >
                    <p>Learn More</p>
                  </a>
                </div>
              </div>
            </li>
            <li
              data-w-id="20bd0fcf-0ffa-fb32-1801-11b2da2948a3"
              className="player_item"
            >
              <div className="margin-bottom-40">
                <div className="player_visual shadow-card">
                  <img
                    src="https://cdn.prod.website-files.com/67041c2a6a806901e0c7ed1b/67093f38bde340df4cbf31cf_tennis-image-04%402x.avif"
                    loading="lazy"
                    alt=""
                    sizes="(max-width: 767px) 90vw, (max-width: 991px) 43vw, 40vw"
                    srcSet="https://cdn.prod.website-files.com/67041c2a6a806901e0c7ed1b/67093f38bde340df4cbf31cf_tennis-image-04%402x-p-500.avif 500w, https://cdn.prod.website-files.com/67041c2a6a806901e0c7ed1b/67093f38bde340df4cbf31cf_tennis-image-04%402x-p-800.avif 800w, https://cdn.prod.website-files.com/67041c2a6a806901e0c7ed1b/67093f38bde340df4cbf31cf_tennis-image-04%402x.avif 1060w"
                    className="img-cover"
                  />
                </div>
              </div>
              <div className="max-width-440">
                <div className="w-layout-vflex">
                  <div className="margin-bottom-16">
                    <p className="text-size-eyebrow">Austin, TX</p>
                  </div>
                  <div className="margin-bottom-24">
                    <p className="heading-style-h2">Jessica Novak</p>
                  </div>
                  <div className="margin-bottom-24">
                    <p className="text-size-medium">
                      Jessica brings 22 years of experience to the table,
                      specializing in refining advanced techniques and mental
                      toughness in competitive players.
                    </p>
                  </div>
                  <a
                    href="about-us.html"
                    className="button is-secondary w-inline-block"
                  >
                    <p>Learn More</p>
                  </a>
                </div>
              </div>
            </li>
            <li
              data-w-id="20bd0fcf-0ffa-fb32-1801-11b2da2948a3"
              className="player_item"
            >
              <div className="margin-bottom-40">
                <div className="player_visual shadow-card">
                  <img
                    src="https://cdn.prod.website-files.com/67041c2a6a806901e0c7ed1b/67093f97c1a41c3ca80b6dd3_tennis-image-07%402x.avif"
                    loading="lazy"
                    alt=""
                    sizes="(max-width: 767px) 90vw, (max-width: 991px) 46vw, 40vw"
                    srcSet="https://cdn.prod.website-files.com/67041c2a6a806901e0c7ed1b/67093f97c1a41c3ca80b6dd3_tennis-image-07%402x-p-500.avif 500w, https://cdn.prod.website-files.com/67041c2a6a806901e0c7ed1b/67093f97c1a41c3ca80b6dd3_tennis-image-07%402x-p-800.avif 800w, https://cdn.prod.website-files.com/67041c2a6a806901e0c7ed1b/67093f97c1a41c3ca80b6dd3_tennis-image-07%402x.avif 1060w"
                    className="img-cover"
                  />
                </div>
              </div>
              <div className="max-width-440">
                <div className="w-layout-vflex">
                  <div className="margin-bottom-16">
                    <p className="text-size-eyebrow">Miami, FL</p>
                  </div>
                  <div className="margin-bottom-24">
                    <p className="heading-style-h2">Martina Rojas</p>
                  </div>
                  <div className="margin-bottom-24">
                    <p className="text-size-medium">
                      A former collegiate athlete with 15 years of coaching
                      experience, Martina is praised for her dynamic coaching
                      style and her success in training elite junior players.
                    </p>
                  </div>
                  <a
                    href="about-us.html"
                    className="button is-secondary w-inline-block"
                  >
                    <p>Learn More</p>
                  </a>
                </div>
              </div>
            </li>
            <li
              data-w-id="20bd0fcf-0ffa-fb32-1801-11b2da2948a3"
              className="player_item"
            >
              <div className="margin-bottom-40">
                <div className="player_visual shadow-card">
                  <img
                    src="https://cdn.prod.website-files.com/67041c2a6a806901e0c7ed1b/67093f38a6fdc3f1533d59be_tennis-image-03%402x.avif"
                    loading="lazy"
                    alt=""
                    sizes="(max-width: 767px) 90vw, (max-width: 991px) 43vw, 40vw"
                    srcSet="https://cdn.prod.website-files.com/67041c2a6a806901e0c7ed1b/67093f38a6fdc3f1533d59be_tennis-image-03%402x-p-500.avif 500w, https://cdn.prod.website-files.com/67041c2a6a806901e0c7ed1b/67093f38a6fdc3f1533d59be_tennis-image-03%402x-p-800.avif 800w, https://cdn.prod.website-files.com/67041c2a6a806901e0c7ed1b/67093f38a6fdc3f1533d59be_tennis-image-03%402x.avif 1060w"
                    className="img-cover"
                  />
                </div>
              </div>
              <div className="max-width-440">
                <div className="w-layout-vflex">
                  <div className="margin-bottom-16">
                    <p className="text-size-eyebrow">Chicago, IL</p>
                  </div>
                  <div className="margin-bottom-24">
                    <p className="heading-style-h2">Kevin O'Connor</p>
                  </div>
                  <div className="margin-bottom-24">
                    <p className="text-size-medium">
                      With 20 years of experience, Kevin’s passion for tennis
                      has made him a favorite among players seeking to improve
                      both their technical skills and strategic thinking.
                    </p>
                  </div>
                  <a
                    href="about-us.html"
                    className="button is-secondary w-inline-block"
                  >
                    <p>Learn More</p>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default SectionThree