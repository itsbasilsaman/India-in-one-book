import { useEffect, useContext } from 'react';
 
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import LanguageContext from '../languageContext';

function SectionSix() {
  const { language } = useContext(LanguageContext);
  const texts = {
    en: {
      heading: [
        'Ready',
        'to',
        'Experience',
        'the',
        'Real India?'
      ],
      button: 'Download “India in One Book” Now',
      imgAlt: 'India in One Book – Kerala'
    },
    ar: {
      heading: [
        'جاهز',
        'لـ',
        'تجربة',
        'الهند',
        'الحقيقية؟'
      ],
      button: 'حمّل "الهند في كتاب واحد" الآن',
      imgAlt: 'الهند في كتاب واحد – كيرالا'
    }
  };

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
                <span className="is-word is-1">{texts[language].heading[0]}</span>{" "}
                <span className="is-word is-2">{texts[language].heading[1]}</span>
                <br />
                <span className="is-word is-3">{texts[language].heading[2]}</span>{" "}
                <span className="is-word is-4">{texts[language].heading[3]}</span>{" "}
                <span className="is-word is-5">{texts[language].heading[4]}</span>
              </h2>
            </div>
            <div className="bottom-cta_box">
              <div className="video_bg">
                <div className="video_bg_overlay" />
                <img
                  src={ "https://globalgrasshopper.com/wp-content/uploads/2011/01/Mumbai-India-scaled.jpg"}
                  loading="lazy"
                  sizes="90vw"
                  alt={texts[language].imgAlt}
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
                  {texts[language].button}
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
