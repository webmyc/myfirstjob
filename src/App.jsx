import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useParams, Navigate } from 'react-router-dom';
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
  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set language based on URL parameter
    const currentLang = lang || 'ro';
    if (i18n.language !== currentLang) {
      i18n.changeLanguage(currentLang);
    }
  }, [lang, i18n]);

  return children;
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Romanian routes (no prefix) */}
        <Route path="/" element={<LanguageWrapper><Layout><Home /></Layout></LanguageWrapper>} />
        <Route path="/services" element={<LanguageWrapper><Layout><Services /></Layout></LanguageWrapper>} />
        <Route path="/calculator" element={<LanguageWrapper><Layout><CalculatorPage /></Layout></LanguageWrapper>} />
        <Route path="/join" element={<LanguageWrapper><Layout><JoinUs /></Layout></LanguageWrapper>} />
        <Route path="/about" element={<LanguageWrapper><Layout><About /></Layout></LanguageWrapper>} />
        <Route path="/contact" element={<LanguageWrapper><Layout><Contact /></Layout></LanguageWrapper>} />

        {/* English routes (with /en prefix) */}
        <Route path="/en" element={<LanguageWrapper><Layout><Home /></Layout></LanguageWrapper>} />
        <Route path="/en/services" element={<LanguageWrapper><Layout><Services /></Layout></LanguageWrapper>} />
        <Route path="/en/calculator" element={<LanguageWrapper><Layout><CalculatorPage /></Layout></LanguageWrapper>} />
        <Route path="/en/join" element={<LanguageWrapper><Layout><JoinUs /></Layout></LanguageWrapper>} />
        <Route path="/en/about" element={<LanguageWrapper><Layout><About /></Layout></LanguageWrapper>} />
        <Route path="/en/contact" element={<LanguageWrapper><Layout><Contact /></Layout></LanguageWrapper>} />
      </Routes>
    </Router>
  );
}

export default App;
