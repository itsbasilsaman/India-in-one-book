/* eslint-disable no-irregular-whitespace */
 
import { motion } from "framer-motion";
 

function AboutMe() {
  return (
    <main className="main-wrapper" id="about">
      <section className="section is-contact">
        <div className="container-large">
          <div className="contact_wrap">
            <motion.div
              className="contact_content"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="margin-bottom-24">
                <h1 className="heading-style-h1 lg:mb-[55px]">
                  <span className="is-word is-1">About Me</span>
                </h1>
              </div>
              <div className="margin-top-64">
                <div className="contact_form-block w-form">
                  <div className="flex flex-col justify-start items-left">
                    



              <motion.div
  className="form-field-wrapper"
  initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.1 }}
  viewport={{ once: true }}
>
  <label htmlFor="first_name" className="field-label">
    India in One Book – Through My Eyes
  </label>
  <p className="text-left mb-[20px]">

    Assalamu Alaikum wa Rahmatullah,<br /><br />
    I’m <strong>Muhammed Rafih</strong>, the first Indian Arabic-language content creator and a proud son of Kerala. For years, I’ve devoted myself to bridging India and the Arab world by sharing the stories, traditions, and everyday realities of this incredible country – all in Arabic, a language I love.<br /><br />

    My journey began in the heart of Kerala, surrounded by rich culture and endless natural beauty. Inspired by the deep historical bonds between India and the Gulf, I made it my mission to answer the real, everyday questions my Arab brothers and sisters ask: “What is India truly like? What food can we enjoy? How can we travel, find healing, or do business?”<br /><br />

    Every message, every comment from my audience has shaped this project. That’s why I’ve poured my heart into creating <strong>India in One Book – Through My Eyes</strong>: a digital resource that goes beyond travel, answering all your questions about Indian history, food, wellness, medical tourism, family journeys, business, and, of course, the secrets of my homeland Kerala.<br /><br />
  </p>
</motion.div>

<motion.div
  className="form-field-wrapper"
  initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.1 }}
  viewport={{ once: true }}
>
  <p className='text-left mb-[20px]'> 
    As someone who has lived, learned, and grown in both India and the Gulf, I know the hopes and concerns of Arab travelers: halal food, authentic experiences, trusted hospitals, honest advice, language barriers. My book covers it all, with practical checklists, video guides, family tips – and above all, an Indian’s honest perspective in your own language.<br /><br />

    My vision is simple: to make India welcoming, safe, and unforgettable for every Arab traveler and family.
  </p>
</motion.div>

<motion.div
  className="form-field-wrapper"
  initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.1 }}
  viewport={{ once: true }}
>
  <p className='text-left mb-[20px]'> 
    I invite you to join me on this journey, see India through my eyes, and turn your dream trip into reality. Whether you want to relax on Kerala’s backwaters, seek healing in a top hospital, try a new spice in Delhi, or simply understand Indian festivals and family life – you’ll find it all here, with love and clarity.<br /><br />

    <strong>India in One Book – your bridge to the real India, written for Arabs, by an Indian who cares.<br /><br />
    معكم محمد رفيع – الهند كما لم ترها من قبل</strong>
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
