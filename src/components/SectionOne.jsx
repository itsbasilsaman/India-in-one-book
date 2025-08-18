
import One from '../assets/rafi-one.jpg';
import { useContext } from 'react';
import LanguageContext from '../languageContext';

function SectionOne() {
  const { language } = useContext(LanguageContext);
  const texts = {
    en: {
      imgAlt: 'India in One Book – Through My Eyes',
      subtitle: "India, Through An Indian’s Eyes",
      title: <>The Complete Arabic Guidebook <span className="text-gray-500">to India’s Heart & Heritage</span></>,
      desc: (
        <>
          Discover <strong>“India in One Book – Through My Eyes”</strong>: the only digital guidebook to unlock India’s history, culture, food, wellness, travel secrets, and more — all explained in Arabic, by an Indian who knows what you need to know.<br /><br />
          Whether you’re planning a family adventure, seeking medical care, searching for halal dining, or dreaming of Kerala’s beauty, this book answers your real questions with practical tips, personal stories, and exclusive maps and checklists.<br /><br />
          Start your Indian journey with confidence, clarity, and insider access—crafted for Arab travelers, by Muhammed Rafih.
        </>
      ),
    },
    ar: {
      imgAlt: 'الهند في كتاب واحد – بعيني',
      subtitle: 'الهند بعيون هندي',
      title: <><span className="text-gray-500">الدليل العربي الشامل</span> إلى قلب وتراث الهند</>,
      desc: (
        <>
            اكتشف <strong>&quot;الهند في كتاب واحد – بعيني&quot;</strong>: الدليل الرقمي الوحيد الذي يكشف لك تاريخ الهند، ثقافتها، طعامها، الصحة، أسرار السفر والمزيد — كل ذلك باللغة العربية، بقلم هندي يعرف ما تحتاج معرفته.<br /><br />
          سواء كنت تخطط لمغامرة عائلية، أو تبحث عن رعاية طبية، أو مطاعم حلال، أو تحلم بجمال كيرالا، هذا الكتاب يجيب عن أسئلتك الحقيقية بنصائح عملية، وقصص شخصية، وخرائط وقوائم حصرية.<br /><br />
          ابدأ رحلتك الهندية بثقة ووضوح ومعرفة من الداخل—مصمم خصيصًا للمسافرين العرب، بقلم محمد رفيع.
        </>
      ),
    }
  };
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10 bg-white pt-[150px]">
      {/* Left Image Section */}
      <div className="w-full md:w-1/2 animate-fadeIn">
        <img
          src={One}
          alt={texts[language].imgAlt}
          className="rounded-lg shadow-lg w-full lg:h-[400px] h-[300px] object-cover lg:w-[370px]"
        />
      </div>

      {/* Right Text Section */}
      <div className={`w-full mt-8 md:w-1/2 md:mt-0 md:ml-10 animate-slideIn${language === 'ar' ? ' text-right' : ''}`}>
        <p className="mb-2 text-sm text-gray-600">{texts[language].subtitle}</p>
        <h1
          className="mb-6 text-3xl font-bold leading-tight text-gray-800 md:text-5xl"
          style={{ wordSpacing: "0.5rem" }}
        >
          {texts[language].title}
        </h1>
        <p className="mb-6 text-gray-600">
          {texts[language].desc}
        </p>
      </div>
    </div>
  );
}

export default SectionOne;
