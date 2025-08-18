import   { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function SectionTwo() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div>
      <section
        className={`section item-box background-color-black ${isVisible ? "animate" : ""}`}
        ref={sectionRef}
      >
        <div className="container-large">
          <div className="wrap_flex is-align-top">
            <h2 className={`heading-style-h2 box-title lg:text-left is-word item main-c is-1 ${isVisible ? "animate" : ""}`}>
              Experience every side of India — history, food, healing, Kerala and more — in one Arabic digital book by Muhammed Rafih.
            </h2>
          </div>
        </div>

        <Link to="/userinfo" className="no-underline">
          <div className="flex items-center justify-center is-full-responsive lg:relative">
            <button className="button font-semibold travel-hacker-now-button lg:absolute lg:top-[-12px]">
              Download India in One Book Now!
            </button>
          </div>
        </Link>
      </section>

      {/* New Section: How to Get India in One Book */}
      <section className="py-12 how-to-get-india-one-book">
        <div className="container-large">
          <h3 className="mb-8 text-3xl font-bold text-center text-black">How to Get “India in One Book”</h3>
          <ol className="steps-list">
            <li className="step-item">
              <span className="step-number">1.</span> Click the download button
            </li>
            <li className="step-item">
              <span className="step-number">2.</span> Enter your name, email, and details
            </li>
            <li className="step-item">
              <span className="step-number">3.</span> Receive your digital Arabic guide to India instantly!
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}

export default SectionTwo;
