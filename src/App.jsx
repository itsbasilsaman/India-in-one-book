

import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionSix from './components/SectionSix';
import Header from './components/Header';
import Footer from './components/Footer';
import Location from './components/Location';
import AboutMe from './components/AboutMe';
import BlogIntro from './components/BlogIntro';
import BlogIntroTwo from './components/BlogIntroTwo';
import BlogIntroThree from './components/BlogIntroThree';
import BlogIntroFour from './components/BlogIntroFour';
import ScrollToTop from './components/ScrollToTop';
import Packages from './components/Packages';
import UserInfo from './components/UserInfo';
import RefundPolicy from './components/RefundPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import { useState } from 'react';
import LanguageContext from './languageContext';


function App() {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/userinfo';
  const [language, setLanguage] = useState('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className={`page-wrapper${language === 'ar' ? ' arabic-font' : ''}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {!hideHeaderFooter && <Header />}
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SectionOne />
                <SectionTwo />
                  <AboutMe />
                <Location />
                <Packages />  
                <SectionSix />
              </>
            }
          />
          <Route path="/blog" element={<BlogIntro />} />
          <Route path="/blogtwo" element={<BlogIntroTwo />} />
          <Route path="/blogthree" element={<BlogIntroThree />} />
          <Route path="/blogfour" element={<BlogIntroFour />} />
          <Route path="/userinfo" element={<UserInfo />} />
          <Route path="/refundpolicy" element={<RefundPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
        </Routes>
        {!hideHeaderFooter && <Footer />}
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
