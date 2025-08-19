import { useEffect, useRef, useState, useContext } from "react";
import { Link } from "react-router-dom";
import LanguageContext from '../languageContext';
function SectionTwo() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { language } = useContext(LanguageContext);
  const texts = {
    en: {
      heading: 'Experience every side of India — history, food, healing, Kerala and more — in one Arabic digital book by Muhammed Rafih.',
      button: 'Download India in One Book Now!',
      howTo: 'How to Get “India in One Book”',
      steps: [
        'Click the download button',
        'Enter your name, email, and details',
        'Receive your digital Arabic guide to India instantly!'
      ]
    },
    ar: {
      heading: 'اكتشف كل جوانب الهند — التاريخ، الطعام، الشفاء، كيرالا والمزيد — في كتاب رقمي عربي واحد بقلم محمد رفيع.',
      button: 'حمّل كتاب الهند في كتاب واحد الآن!',
      howTo: 'كيف تحصل على "الهند في كتاب واحد"',
      steps: [
        'اضغط زر التحميل',
        'أدخل اسمك وبريدك الإلكتروني والتفاصيل',
        'استلم دليلك الرقمي العربي للهند فوراً!'
      ]
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div>
      <section
        className={`section item-box background-color-black ${isVisible ? "animate" : ""}`}
        ref={sectionRef}
        dir={language === 'ar' ? 'rtl' : 'ltr'}
      >
        <div className="container-large">
          <div className="wrap_flex is-align-top">
            <h2
              className={`heading-style-h2 box-title is-word item main-c is-1 ${isVisible ? "animate" : ""}`}
              style={{
                textTransform: 'capitalize',
                textAlign: language === 'ar' ? 'right' : 'left'
              }}
            >
              {texts[language].heading}
            </h2>
          </div>
        </div>
        <Link to="/userinfo" className="no-underline">
          <div className="flex items-center justify-center is-full-responsive lg:relative">
            <button className="button font-semibold travel-hacker-now-button lg:absolute lg:top-[-12px]">
              {texts[language].button}
            </button>
          </div>
        </Link>
      </section>
      {/* New Section: How to Get India in One Book */}
  <section className="py-12 how-to-get-india-one-book" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <div className="container-large">
          <h3
            className="mb-8 text-3xl font-bold text-black"
            style={{ textAlign: language === 'ar' ? 'right' : 'center' }}
          >
            {texts[language].howTo}
          </h3>
          <ol className="steps-list" style={{ textAlign: language === 'ar' ? 'right' : 'left' }}>
            {texts[language].steps.map((step, idx) => (
              <li className="step-item" key={idx}>
                <span className="step-number">{idx + 1}.</span> {step}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}

export default SectionTwo;
