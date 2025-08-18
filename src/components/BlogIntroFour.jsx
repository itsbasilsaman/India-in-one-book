import { useEffect, useRef, useContext } from 'react';
import LanguageContext from '../languageContext';
import { Link } from 'react-router-dom';

// Humayun's Tomb image (public URL)
const TombImage = "https://tourwithrahul.com/wp-content/uploads/2020/07/humayun-s-tomb-under-blue-sky-3672388-scaled.jpg";

function BlogIntroFour() {
  const { language } = useContext(LanguageContext);
  const texts = {
    en: {
      heading: ['Create Memories', 'in Every Chapter'],
      desc: (
        <>
          From sacred traditions to Bollywood, experience it all—wonder, joy, and learning.<br />
          Every adventure in India leaves you with memories, stories, and lessons that last a lifetime.<br />
          Capture vibrant festivals, awe-inspiring monuments, and unforgettable moments of laughter and discovery.<br />
          With “India in One Book – Through My Eyes,” every chapter is filled with experiences that enrich your spirit.
        </>
      ),
      button: 'Explore Cultural Experiences',
      imgAlt: "Humayun's Tomb under blue sky"
    },
    ar: {
      heading: ['اصنع الذكريات', 'في كل فصل'],
      desc: (
        <>
          من التقاليد المقدسة إلى بوليوود، عِش كل شيء — الدهشة، الفرح، والتعلم.<br />
          كل مغامرة في الهند تترك لك ذكريات وقصصًا ودروسًا تدوم مدى الحياة.<br />
          التقط المهرجانات النابضة بالحياة، والمعالم المذهلة، ولحظات الضحك والاكتشاف التي لا تُنسى.<br />
          مع &quot;الهند في كتاب واحد – بعيني&quot;، كل فصل مليء بتجارب تغني روحك.
        </>
      ),
      button: 'استكشف التجارب الثقافية',
      imgAlt: 'ضريح همايون تحت السماء الزرقاء'
    }
  };
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  const handleScrollAnimation = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScrollAnimation, {
      threshold: 0.1,
    });

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
                <span className="is-word is-1">{texts[language].heading[0]}</span>
                <span className="is-word is-2">{texts[language].heading[1]}</span>
              </h1>
            </div>
            <div className="about-visual_wrap">
              <div className="video_box">
                <div className="video_bg">
                  <img
                    ref={imageRef}
                    src={TombImage}
                    loading="eager"
                    sizes="(max-width: 991px) 81vw, 90vw"
                    alt={texts[language].imgAlt}
                    className="parallax-img is-full slide-up"
                    style={{ borderRadius: "16px", objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
            <div className="w-layout-vflex flex-center">
              <div className="max-width-800">
                <p ref={paragraphRef} className="text-size-medium text-from-bottom">
                  {texts[language].desc}
                </p>
              </div>
              <div className="margin-top-24">
                <Link to="/blogfour" className="no-underline">
                  <button
                    ref={buttonRef}
                    className="font-semibold text-white button w-inline-block text-from-bottom"
                  >
                    <p>{texts[language].button}</p>
                  </button>
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
