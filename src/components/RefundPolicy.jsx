import { useEffect, useRef } from 'react';
// import Two from '../assets/Images/2.jpg';
// import { Link } from 'react-router-dom';

function RefundPolicy() {
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
                <span className="">Refund  
                </span> 
                <span className=""> Policy</span>
              </h1>
            </div>
            
            <div className="w-layout-vflex flex-center">
              <div className="max-width-800">
                <p ref={paragraphRef} className="text-size-medium text-left text-from-bottom mt-[35px]">
                At Together for Many Miles, we strive to ensure a seamless and satisfactory experience for our customers. In the event that you have purchased one of our digital travel guides and it has not been delivered to you online, we are pleased to offer a refund. <br /> <br />

                <span className='font-semibold'>Refund Eligibility:</span> To be eligible for a refund, please ensure the following criteria are met: <br />

The digital travel guide was purchased directly from Together for Many Miles. <br />

You have not received access to the digital travel guide within the specified delivery timeframe.
                 <br /> <br />
                <span className='font-semibold'> Refund Process:</span> If you meet the eligibility criteria for a refund, please follow these steps: <br />

Contact our customer support team at <span className='font-semibold'>togetherformanymiles@gmail.com</span> within 7 days of your purchase. <br /> <br />

Provide your order details and explain the issue regarding the non-delivery of the digital travel guide. <br />

Our customer support team will verify the information provided and process the refund accordingly. <br /><br />

<span className='font-semibold'>Refund Method :</span> Refunds will be processed using the original payment method used for the purchase. Please note that it may take several business days for the refund to reflect in your account, depending on your financial institution’s policies. <br /> <br />

<span className='font-semibold'>Non-Refundable Situations:</span> Please note that refunds will not be provided under the following circumstances:

The digital travel guide has been successfully delivered to you. <br /><br />

Refund requests are made beyond the specified timeframe. <br />

We appreciate your understanding of our refund policy and strive to deliver our digital products promptly. <br /> <br />

If you have any further questions or concerns, please do not hesitate to reach out to our customer support team at <span className='font-semibold'>togetherformanymiles@gmail.com.</span>



                </p>
                
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default RefundPolicy