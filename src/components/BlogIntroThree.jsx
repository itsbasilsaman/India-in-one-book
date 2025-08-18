import { useEffect, useRef, useContext } from 'react';
import LanguageContext from '../languageContext';
import { Link } from 'react-router-dom';

// Provided solo travel image
const TravelImage = "https://www.tourmyindia.com/blog/wp-content/uploads/2014/08/solo-travelling-india.png";

function BlogIntroThree() {
  const { language } = useContext(LanguageContext);
  const texts = {
    en: {
      heading: ['Plan Smart —', 'Travel Far'],
      desc: (
        <>
          Get insider advice on food, clinics, wellness and safe journeys.  <br />
          Start every trip with confidence and clarity—whether you’re exploring new regions, seeking medical care, tasting authentic Indian cuisine, or just navigating local culture.  <br />
          “India in One Book – Through My Eyes” provides personalized guidance, smart planning tips, and everything you need to turn travel into a rewarding adventure.
        </>
      ),
      button: 'Read More Planning Tips',
      imgAlt: 'Solo Travelling India'
    },
    ar: {
      heading: ['خطط بذكاء —', 'سافر بعيدًا'],
      desc: (
        <>
          احصل على نصائح من الداخل حول الطعام، والعيادات، والعافية، ورحلات آمنة.<br />
          ابدأ كل رحلة بثقة ووضوح — سواء كنت تستكشف مناطق جديدة، أو تبحث عن رعاية طبية، أو تتذوق المأكولات الهندية الأصيلة، أو تتعرف فقط على الثقافة المحلية.<br />
          &quot;الهند في كتاب واحد – بعيني&quot; يوفر لك إرشادات شخصية، ونصائح تخطيط ذكية، وكل ما تحتاجه لتحويل السفر إلى مغامرة مجزية.
        </>
      ),
      button: 'اقرأ المزيد من نصائح التخطيط',
      imgAlt: 'السفر الفردي في الهند'
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
                    src={TravelImage}
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
                <Link to="/blogthree" className="no-underline">
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

export default BlogIntroThree;
