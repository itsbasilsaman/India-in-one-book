import { useEffect, useRef, useContext } from 'react';
import LanguageContext from '../languageContext';
import { Link } from 'react-router-dom';

// Use image from public CDN
const HeritageImage = "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/06/13/121526.jpg";

function BlogIntro() {
  const { language } = useContext(LanguageContext);
  const texts = {
    en: {
      heading: ["Discover India's", 'Hidden Heritage'],
      desc: (
        <>
          Uncover stories, Islamic history, and places that only a local can share.<br />
          Explore the mosques, monuments, and legends that shaped India’s soul.<br />
          Every page reveals culture, wisdom, and hidden beauty—from vibrant Kerala to timeless Delhi.<br />
          This journey isn’t just sight-seeing; it’s feeling the pulse of real India as interpreted by Muhammed Rafih, your companion and guide.<br /><br />
          Start discovering the unseen—connect with India’s heart, heritage, and stories.
        </>
      ),
      button: 'Download “India in One Book”',
      imgAlt: 'Indian Hidden Heritage'
    },
    ar: {
      heading: ['اكتشف', 'التراث الهندي الخفي'],
      desc: (
        <>
          اكتشف القصص والتاريخ الإسلامي والأماكن التي لا يعرفها إلا السكان المحليون.<br />
          استكشف المساجد والآثار والأساطير التي شكلت روح الهند.<br />
          كل صفحة تكشف عن الثقافة والحكمة والجمال الخفي—من كيرالا النابضة بالحياة إلى دلهي الخالدة.<br />
          هذه الرحلة ليست مجرد مشاهدة معالم؛ بل هي إحساس بنبض الهند الحقيقية كما يراها محمد رفيع، رفيقك ودليلك.<br /><br />
          ابدأ باكتشاف المجهول—وتواصل مع قلب الهند وتراثها وقصصها.
        </>
      ),
      button: 'حمّل "الهند في كتاب واحد"',
      imgAlt: 'التراث الهندي الخفي'
    }
  };

  // Refs for animation
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  // Intersection Observer logic
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
                    src={HeritageImage}
                    loading="eager"
                    sizes="(max-width: 991px) 81vw, 90vw"
                    srcSet={HeritageImage}
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
                <Link to={'/userinfo'} className='no-underline'>
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

export default BlogIntro;
