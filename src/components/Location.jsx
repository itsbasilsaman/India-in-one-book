import   { useEffect, useRef, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
 
import { Link } from "react-router-dom";
import LanguageContext from '../languageContext';

function Location() {
  const cardRef = useRef([]);
  const { language } = useContext(LanguageContext);
  const texts = {
    en: {
      cards: [
        {
          heading: "Discover India's Hidden Heritage",
          desc: "Uncover stories, Islamic history, and places only a local can share."
        },
        {
          heading: "Kerala: Where India Meets Arabia",
          desc: "Experience the culture, nature, and deep-rooted bonds with the Arab world."
        },
        {
          heading: "Plan Smart – Travel Far",
          desc: "Get insider advice on food, clinics, wellness and safe journeys."
        },
        {
          heading: 'Create Memories in Every Chapter',
          desc: 'From sacred traditions to Bollywood, experience it all—wonder, joy, and learning.'
        }
      ],
      sectionHeading: [
        "India",
        "Through My Eyes:",
        "Culture,",
        "Secrets,",
        "Inspiration"
      ]
    },
    ar: {
      cards: [
        {
          heading: "اكتشف التراث الهندي الخفي",
          desc: "اكتشف القصص والتاريخ الإسلامي وأماكن لا يعرفها إلا السكان المحليون."
        },
        {
          heading: "كيرالا: حيث تلتقي الهند بالعالم العربي",
          desc: "عِش الثقافة والطبيعة والروابط العميقة مع العالم العربي."
        },
        {
          heading: "خطط بذكاء – وسافر بعيدًا",
          desc: "احصل على نصائح من الداخل حول الطعام والعيادات والصحة ورحلات آمنة."
        },
        {
          heading: 'اصنع ذكريات في كل فصل',
          desc: 'من التقاليد المقدسة إلى بوليوود، عِش كل شيء—الدهشة، الفرح، والتعلم.'
        }
      ],
      sectionHeading: [
        "الهند",
        "بعيني:",
        "الثقافة،",
        "الأسرار،",
        "الإلهام"
      ]
    }
  };

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
                  <span className="is-word is-1">{texts[language].sectionHeading[0]}</span>{" "}
                  <span className="is-word is-2">{texts[language].sectionHeading[1]}</span>{" "}
                  <span className="is-word is-3">{texts[language].sectionHeading[2]}</span>{" "}
                  <span className="is-word is-5">{texts[language].sectionHeading[3]}</span>{" "}
                  <span className="is-word is-6">{texts[language].sectionHeading[4]}</span>
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
                  <p className="heading-style-h3">{texts[language].cards[0].heading}</p>
                  <p>{texts[language].cards[0].desc}</p>
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
                  <p className="heading-style-h3">{texts[language].cards[1].heading}</p>
                  <p>{texts[language].cards[1].desc}</p>
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
                  <p className="heading-style-h3">{texts[language].cards[2].heading}</p>
                  <p>{texts[language].cards[2].desc}</p>
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
                  <p className="heading-style-h3">{texts[language].cards[3].heading}</p>
                  <p>{texts[language].cards[3].desc}</p>
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
