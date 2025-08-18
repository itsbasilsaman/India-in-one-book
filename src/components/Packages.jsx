import  { useContext, useEffect } from 'react';
import LanguageContext from '../languageContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

function Packages() {
  const { language } = useContext(LanguageContext);
  const texts = {
    en: {
      heading1: 'What We',
      heading2: 'Offer',
      intro: '“India in One Book – Through My Eyes” brings all of India to you — in Arabic, by an Indian who knows what you need to know. Whether you seek culture, medical help, halal food, or authentic adventure, our digital packages and guides unlock India for you and your family.',
      button: 'Download Your Guide',
      items: [
        {
          title: 'India for Arab Travelers',
          desc: 'Cultural etiquette, must-visit sites, and what to expect—direct from a local’s viewpoint.'
        },
        {
          title: 'Quick Kerala Mini Guide',
          desc: 'Everything you need for an incredible journey in Kerala: history, food, halal-friendly tips, and local secrets.'
        },
        {
          title: 'Wellness & Medical Travel',
          desc: 'Trusted hospital recommendations, Ayurveda tips, and a guide for Arabs seeking healing in India.'
        },
        {
          title: 'Halal Food & Dining Guide',
          desc: 'Where and what to eat: from halal Indian classics to Gulf-inspired recipes and family-safe options.'
        },
        {
          title: 'Indian Festivals & Family Fun',
          desc: 'Understand India’s colorful celebrations, how to join them respectfully, and top picks for families.'
        },
        {
          title: 'Practical Planning Extras',
          desc: 'Handy checklists, personalized itineraries, language starter kits, video tips, and exclusive discounts for Arab readers.'
        }
      ]
    },
    ar: {
      heading1: 'ماذا',
      heading2: 'نقدم',
      intro: '"الهند في كتاب واحد – بعيني" يجلب لك كل الهند — بالعربية، بقلم هندي يعرف ما تحتاج معرفته. سواء كنت تبحث عن الثقافة، المساعدة الطبية، الطعام الحلال، أو المغامرة الأصيلة، باقاتنا الرقمية وأدلتنا تفتح الهند لك ولعائلتك.',
      button: 'حمّل دليلك الآن',
      items: [
        {
          title: 'الهند للمسافرين العرب',
          desc: 'آداب الثقافة، أهم المواقع التي يجب زيارتها، وما يمكن توقعه — مباشرة من منظور محلي.'
        },
        {
          title: 'دليل كيرالا السريع',
          desc: 'كل ما تحتاجه لرحلة لا تُنسى في كيرالا: التاريخ، الطعام، نصائح الحلال، وأسرار محلية.'
        },
        {
          title: 'العافية والسياحة العلاجية',
          desc: 'توصيات المستشفيات الموثوقة، نصائح الأيورفيدا، ودليل للعرب الباحثين عن الشفاء في الهند.'
        },
        {
          title: 'دليل الطعام الحلال والمطاعم',
          desc: 'أين وماذا تأكل: من الأطباق الهندية الحلال إلى وصفات مستوحاة من الخليج وخيارات آمنة للعائلة.'
        },
        {
          title: 'المهرجانات الهندية ومرح العائلة',
          desc: 'تعرف على احتفالات الهند الملونة، كيف تشارك فيها باحترام، وأفضل الخيارات للعائلات.'
        },
        {
          title: 'إضافات التخطيط العملي',
          desc: 'قوائم مرجعية عملية، جداول سفر مخصصة، كتيبات لغة، نصائح فيديو، وخصومات حصرية للقراء العرب.'
        }
      ]
    }
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <section
        className="section is-location"
        data-aos="fade-in"
        id='package'
        dir={language === 'ar' ? 'rtl' : 'ltr'}
      >
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
                    {texts[language].heading1}
                  </span>{' '}
                  <span
                    className="is-word is-2"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                  >
                    {texts[language].heading2}
                  </span>
                </h2>
              </div>
              <div className="text-color-lightgrey" data-aos="fade-up">
                <p className="text-size-medium mb-[10px]">
                  {texts[language].intro}
                </p>
              </div>
              <div data-aos="zoom-in">
                <Link to={'/userinfo'} className='no-underline'>
                  <button className="font-semibold button content-one">
                    {texts[language].button}
                  </button>
                </Link>
              </div>
            </div>
            <ul role="list" className="locations_list">
              {/* List Items Localized */}
              {[
                " https://www.planetware.com/photos-large/IND/india-top-attractions-mysore-palace.jpg",
                "https://wallpapercave.com/wp/wp2649841.jpg",
                " https://realhappiness.org/images/about-ayurveda.jpg",
                "http://vietnamvisavoa.com/public/uploads/files/halal%20food.jpg",
                "https://www.treebo.com/blog/wp-content/uploads/2018/02/eid.jpg",
                "https://www.photojaanic.com/blog/wp-content/uploads/sites/2/2017/08/inspiring-indian-photography-communities.jpg"
              ].map((img, idx) => (
                <li className="locations_item" data-aos="fade-up" key={idx}>
                  <div className="margin-bottom-20" data-aos="zoom-in">
                    <div className="locations_visual">
                      <img
                        src={img}
                        loading="lazy"
                        alt=""
                        sizes="(max-width: 767px) 81vw, (max-width: 991px) 44vw, 20vw"
                        className="img-cover"
                        style={idx === 5 ? {objectFit:'cover'} : {}}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="margin-bottom-8" data-aos="fade-right">
                      <p className="heading-style-h4">{texts[language].items[idx].title}</p>
                    </div>
                    <div className="text-color-lightgrey" data-aos="fade-up">
                      <p className="text-size-eyebrow">
                        {texts[language].items[idx].desc}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Packages;
