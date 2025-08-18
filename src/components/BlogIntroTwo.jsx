import { useEffect, useRef, useContext } from 'react';
import LanguageContext from '../languageContext';
import { Link } from 'react-router-dom';

const KeralaTeaImage = "https://www.tripsavvy.com/thmb/25rcOSvrYud5Swik3VJGop8KBIc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TeaPlantationsMunnarKerala-62df8976c0ca479fa59717d383974530.jpg";

function BlogIntroTwo() {
  const { language } = useContext(LanguageContext);
  const texts = {
    en: {
      heading: ['Kerala:', 'Where India Meets Arabia'],
      desc: (
        <>
          Experience the culture, nature, and deep-rooted bonds with the Arab world. Kerala welcomes you to lush landscapes, ancient traditions, and a connection that spans centuries. Discover the warmth and hospitality that make this land the bridge between India and Arabia.
        </>
      ),
      button: 'Read More About Kerala',
      imgAlt: 'Tea Plantations Munnar Kerala'
    },
    ar: {
      heading: ['كيرالا:', 'حيث تلتقي الهند بالعالم العربي'],
      desc: (
        <>
          عِش الثقافة والطبيعة والروابط العميقة مع العالم العربي. ترحب بك كيرالا في مناظرها الخضراء وتقاليدها العريقة وارتباطها الذي يمتد لقرون. اكتشف الدفء والضيافة التي تجعل من هذه الأرض جسراً بين الهند والعالم العربي.
        </>
      ),
      button: 'اقرأ المزيد عن كيرالا',
      imgAlt: 'مزارع الشاي مونار كيرالا'
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
                    src={KeralaTeaImage}
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
                <Link to="/blogtwo" className="no-underline">
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

export default BlogIntroTwo;
