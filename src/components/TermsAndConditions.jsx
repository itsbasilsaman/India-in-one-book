import React, { useEffect, useRef } from 'react';

function TermsAndConditions() {

  // Refs for the elements to animate
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  // Function to add visibility class when element is in view
  const handleScrollAnimation = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing after it is visible
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScrollAnimation, {
      threshold: 0.1,
    });

    // Observing elements for scroll-triggered animations
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
    <main className="main-wrapper pt-[45px]">
    <section data-w-id="dac3a0ad-1bc4-f50d-4480-37c180ea2f7d" className="section is-about-hero">
      <div className="container-large">
        <div className="about-hero_wrap">
          <div className="max-width-700">
            <h1 ref={headingRef} className="heading-style-h1 text-from-bottom">
              <span className="">Terms{'  '} and {'  '}

              </span> 
              <span className=""> Conditions</span>
            </h1>
          </div>
          
          <div className="w-layout-vflex flex-center">
            <div className="max-width-800">
              <p ref={paragraphRef} className="text-size-medium text-left text-from-bottom mt-[35px]">
              These Terms and Conditions Agreement govern your use of the digital travel guides  provided by Together for Many Miles Holiday Hackers. By accessing or using our Products, you agree to be bound by this Agreement. <br /><br />

<span className='font-semibold'>Intellectual Property:</span>The Products and all related content, including but not limited to text, images, graphics, and logos, are the intellectual property of Together for Many Miles. You are granted a limited, non-exclusive, and non-transferable license to use the Products for personal, non-commercial purposes only. Any unauthorized use or distribution of the Products may violate copyright laws and result in legal action. <br /><br />

<span className='font-semibold'>Product Delivery: </span>Upon successful purchase of a digital travel guide, you will receive access to the guide online. It is your responsibility to ensure that you provide accurate and up-to-date contact information during the purchase process. The Company will not be held liable for any delays or issues arising from inaccurate information provided by the customer. <br /> <br />

<span className='font-semibold'>Refunds:</span>Refunds for the Products will be governed by our Refund Policy. Please refer to the Refund Policy section for more details. <br /> <br />

<span className='font-semibold'>Usage Restrictions:</span>You agree not to reproduce, modify, distribute, display, transmit, publish, or create derivative works from the Products without prior written consent from the Company. Furthermore, you agree not to use the Products for any unlawful or unauthorized purpose, including but not limited to copyright infringement or unauthorized sharing of the content. <br /><br />


<span className='font-semibold'>Disclaimer:</span>The Products are provided on an “as is” basis, without any warranties or guarantees of any kind, whether express or implied. The Company disclaims all warranties, including but not limited to fitness for a particular purpose and non-infringement. While we strive to provide accurate and up-to-date information in our Products, we do not warrant the completeness or accuracy of the content. <br /><br />

<span className='font-semibold'>Limitation of Liability:</span>In no event shall the Company or its affiliates be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use of the Products. This includes, but is not limited to, damages for loss of profits, data, or other intangible losses, even if the Company has been advised of the possibility of such damages. <br /><br />

<span className='font-semibold'>Governing Law:</span>This Agreement shall be governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes arising from this Agreement shall be subject to the exclusive jurisdiction of the courts in the UAE. <br /> <br />

<span className='font-semibold'>Modification of Terms:</span>The Company reserves the right to modify or update these Terms and Conditions at any time without prior notice. By continuing to use the Products after any changes have been made, you agree to be bound by the revised Agreement. <br /> <br />

If you have any questions or concerns regarding these Terms and Conditions, please contact us at <span className='font-semibold'>togetherformanymiles@gmail</span>.com.

              </p>
              
            </div>
            
          </div>
        </div>
      </div>
    </section>
  </main>
  )
}

export default TermsAndConditions