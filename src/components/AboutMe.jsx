/* eslint-disable no-irregular-whitespace */
 
import { motion } from "framer-motion";
import { useContext } from 'react';
import LanguageContext from '../languageContext';
 
function AboutMe() {
  const { language } = useContext(LanguageContext);
  const texts = {
    en: {
      heading: 'About Me',
      label: 'India in One Book – Through My Eyes',
      para1: (
        <>
          Assalamu Alaikum wa Rahmatullah,<br /><br />
          I’m <strong>Muhammed Rafih</strong>, the first Indian Arabic-language content creator and a proud son of Kerala. For years, I’ve devoted myself to bridging India and the Arab world by sharing the stories, traditions, and everyday realities of this incredible country – all in Arabic, a language I love.<br /><br />
          My journey began in the heart of Kerala, surrounded by rich culture and endless natural beauty. Inspired by the deep historical bonds between India and the Gulf, I made it my mission to answer the real, everyday questions my Arab brothers and sisters ask: “What is India truly like? What food can we enjoy? How can we travel, find healing, or do business?”<br /><br />
          Every message, every comment from my audience has shaped this project. That’s why I’ve poured my heart into creating <strong>India in One Book – Through My Eyes</strong>: a digital resource that goes beyond travel, answering all your questions about Indian history, food, wellness, medical tourism, family journeys, business, and, of course, the secrets of my homeland Kerala.<br /><br />
        </>
      ),
      para2: (
        <>
          As someone who has lived, learned, and grown in both India and the Gulf, I know the hopes and concerns of Arab travelers: halal food, authentic experiences, trusted hospitals, honest advice, language barriers. My book covers it all, with practical checklists, video guides, family tips – and above all, an Indian’s honest perspective in your own language.<br /><br />
          My vision is simple: to make India welcoming, safe, and unforgettable for every Arab traveler and family.
        </>
      ),
      para3: (
        <>
          I invite you to join me on this journey, see India through my eyes, and turn your dream trip into reality. Whether you want to relax on Kerala’s backwaters, seek healing in a top hospital, try a new spice in Delhi, or simply understand Indian festivals and family life – you’ll find it all here, with love and clarity.<br /><br />
          <strong>India in One Book – your bridge to the real India, written for Arabs, by an Indian who cares.<br /><br />
          معكم محمد رفيع – الهند كما لم ترها من قبل</strong>
        </>
      ),
    },
    ar: {
      heading: 'من أنا',
      label: 'الهند في كتاب واحد – بعيني',
      para1: (
        <>
          السلام عليكم ورحمة الله وبركاته،<br /><br />
          أنا <strong>محمد رفيع</strong>، أول صانع محتوى هندي باللغة العربية وابن فخور من كيرالا. لسنوات كرست نفسي لبناء جسر بين الهند والعالم العربي من خلال مشاركة القصص والتقاليد والواقع اليومي لهذا البلد الرائع – وكل ذلك بالعربية، اللغة التي أحبها.<br /><br />
          بدأت رحلتي في قلب كيرالا، وسط ثقافة غنية وجمال طبيعي لا ينتهي. واستلهمت من الروابط التاريخية العميقة بين الهند والخليج، وجعلت مهمتي الإجابة عن الأسئلة الحقيقية اليومية التي يطرحها إخوتي العرب: &#34;كيف هي الهند حقًا؟ ما الطعام الذي يمكننا الاستمتاع به؟ كيف نسافر أو نجد الشفاء أو نمارس الأعمال؟&#34;<br /><br />
          كل رسالة وكل تعليق من جمهوري شكل هذا المشروع. لهذا السبب وضعت قلبي في إنشاء <strong>الهند في كتاب واحد – بعيني</strong>: مورد رقمي يتجاوز السفر، ويجيب عن جميع أسئلتكم حول تاريخ الهند، الطعام، الصحة، السياحة العلاجية، الرحلات العائلية، الأعمال، وأسرار موطني كيرالا.<br /><br />
        </>
      ),
      para2: (
        <>
          كشخص عاش وتعلم ونشأ في الهند والخليج، أعرف آمال ومخاوف المسافرين العرب: الطعام الحلال، التجارب الأصيلة، المستشفيات الموثوقة، النصائح الصادقة، حاجز اللغة. يغطي كتابي كل ذلك، مع قوائم عملية، وأدلة فيديو، ونصائح عائلية – وقبل كل شيء، منظور هندي صادق بلغتك.<br /><br />
          رؤيتي بسيطة: أن أجعل الهند مرحبة وآمنة ولا تُنسى لكل مسافر وعائلة عربية.
        </>
      ),
      para3: (
        <>
          أدعوك للانضمام إلي في هذه الرحلة، لترى الهند بعيني، وتحول رحلتك الحلم إلى حقيقة. سواء أردت الاسترخاء في مياه كيرالا، أو البحث عن الشفاء في أفضل المستشفيات، أو تجربة توابل جديدة في دلهي، أو ببساطة فهم المهرجانات والحياة العائلية الهندية – ستجد كل ذلك هنا، بمحبة ووضوح.<br /><br />
          <strong>الهند في كتاب واحد – جسرُك إلى الهند الحقيقية، مكتوب للعرب، بقلم هندي يهتم.<br /><br />
          معكم محمد رفيع – الهند كما لم ترها من قبل</strong>
        </>
      ),
    }
  };
  // Set text and flex direction for Arabic mode
  const isArabic = language === 'ar';
  return (
    <main className="main-wrapper" id="about" dir={isArabic ? 'rtl' : 'ltr'}>
      <section className="section is-contact">
        <div className="container-large">
          <div className="contact_wrap">
            <motion.div
              className={`contact_content${isArabic ? ' text-right arabic-font' : ' text-left'}`}
              style={isArabic ? { direction: 'rtl' } : { direction: 'ltr' }}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="margin-bottom-24">
                <h1 className="heading-style-h1 lg:mb-[55px]">
                  <span className="is-word is-1">{texts[language].heading}</span>
                </h1>
              </div>
              <div className="margin-top-64">
                <div className="contact_form-block w-form">
                  <div className={`flex flex-col justify-start ${isArabic ? 'items-end' : 'items-start'}`}> 
                    <motion.div
                      className="form-field-wrapper"
                      initial={{ y: 50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <label htmlFor="first_name" className="field-label">
                        {texts[language].label}
                      </label>
                      <p className={`${isArabic ? 'text-right' : 'text-left'} mb-[20px]`}>
                        {texts[language].para1}
                      </p>
                    </motion.div>
                    <motion.div
                      className="form-field-wrapper"
                      initial={{ y: 50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <p className={`${isArabic ? 'text-right' : 'text-left'} mb-[20px]`}>
                        {texts[language].para2}
                      </p>
                    </motion.div>
                    <motion.div
                      className="form-field-wrapper"
                      initial={{ y: 50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <p className={`${isArabic ? 'text-right' : 'text-left'} mb-[20px]`}>
                        {texts[language].para3}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="contact_visual"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            ></motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default AboutMe;
