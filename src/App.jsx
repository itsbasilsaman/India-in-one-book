import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import SectionSix from './components/SectionSix'
import Header from './components/Header'
import Footer from './components/Footer'
import Location from './components/Location'
import AboutMe from './components/AboutMe'
import BlogIntro from './components/BlogIntro'
import BlogIntroTwo from './components/BlogIntroTwo'
import BlogIntroThree from './components/BlogIntroThree'
import BlogIntroFour from './components/BlogIntroFour'
import ScrollToTop from './components/ScrollToTop'
import Packages from './components/Packages'
import UserInfo from './components/UserInfo'
import RefundPolicy from './components/RefundPolicy'
import TermsAndConditions from './components/TermsAndConditions'

function App() {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/userinfo';

  return (
    <div className="page-wrapper">
      {!hideHeaderFooter && <Header />}
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SectionOne />
              <SectionTwo />
              <Location />
              <Packages />  
              <AboutMe />
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
  );
}

export default App;
