import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import CalculatorPage from './pages/CalculatorPage';
import JoinUs from './pages/JoinUs';
import About from './pages/About';
import Contact from './pages/Contact';

// Wrapper component to handle language detection from URL
function LanguageWrapper({ children }) {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    // Detect language from URL path
    const isEnglish = location.pathname.startsWith('/en');
    const targetLang = isEnglish ? 'en' : 'ro';

    // Only change if different to avoid unnecessary re-renders
    if (i18n.language !== targetLang) {
      console.log(`Changing language from ${i18n.language} to ${targetLang}`);
      i18n.changeLanguage(targetLang);
    }
  }, [location.pathname, i18n]);

  return children;
}

function App() {
  return (
    <Router>
      <LanguageWrapper>
        <Layout>
          <Routes>
            {/* Romanian routes (no prefix) */}
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/join" element={<JoinUs />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* English routes (with /en prefix) */}
            <Route path="/en" element={<Home />} />
            <Route path="/en/services" element={<Services />} />
            <Route path="/en/calculator" element={<CalculatorPage />} />
            <Route path="/en/join" element={<JoinUs />} />
            <Route path="/en/about" element={<About />} />
            <Route path="/en/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </LanguageWrapper>
    </Router>
  );
}

export default App;
