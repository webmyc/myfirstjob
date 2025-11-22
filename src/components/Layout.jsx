import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Heart, Globe, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Get current language from URL
    const getCurrentLang = () => {
        return location.pathname.startsWith('/en') ? 'en' : 'ro';
    };

    // Create language-aware path
    const createPath = (path) => {
        const currentLang = getCurrentLang();
        const cleanPath = path.startsWith('/') ? path.slice(1) : path;
        return currentLang === 'en' ? `/en/${cleanPath}` : `/${cleanPath}`;
    };

    // Toggle language and navigate to same page in new language
    const toggleLanguage = () => {
        const currentLang = getCurrentLang();
        const newLang = currentLang === 'ro' ? 'en' : 'ro';

        // Get current path without language prefix
        let currentPath = location.pathname;
        if (currentPath.startsWith('/en/')) {
            currentPath = currentPath.slice(3); // Remove '/en'
        } else if (currentPath.startsWith('/en')) {
            currentPath = '/'; // Home page
        }

        // Navigate to same page in new language
        const newPath = newLang === 'en' ? `/en${currentPath}` : currentPath;
        navigate(newPath);
    };

    const navLinks = [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.services'), path: '/services' },
        { name: t('nav.calculator'), path: '/calculator' },
        { name: t('nav.join'), path: '/join' },
        { name: t('nav.about'), path: '/about' },
    ];

    // Check if current path matches link (accounting for language prefix)
    const isActive = (linkPath) => {
        const currentPath = location.pathname;
        const langAwarePath = createPath(linkPath);
        return currentPath === langAwarePath;
    };

    return (
        <div className="min-h-screen flex flex-col bg-light">
            <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm py-2' : 'bg-transparent py-4'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <Link to={createPath('/')} className="flex items-center gap-2 text-2xl font-display font-bold text-dark group">
                            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white transform group-hover:rotate-12 transition-transform duration-300 shadow-glow">
                                <Heart className="w-6 h-6 fill-current" />
                            </div>
                            <span>MyFirstJob</span>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={createPath(link.path)}
                                    className={`text-sm font-bold transition-all duration-300 relative group ${isActive(link.path) ? 'text-primary' : 'text-gray-500 hover:text-dark'}`}
                                >
                                    {link.name}
                                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                                </Link>
                            ))}

                            <div className="h-6 w-px bg-gray-200"></div>

                            <button
                                onClick={toggleLanguage}
                                className="flex items-center gap-1 text-sm font-bold text-gray-500 hover:text-primary transition-colors"
                            >
                                <Globe className="w-4 h-4" />
                                {getCurrentLang() === 'ro' ? 'EN' : 'RO'}
                            </button>

                            <Link
                                to={createPath('/contact')}
                                className="btn-primary py-2 px-6 text-sm"
                            >
                                {t('nav.book')}
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 text-dark"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Nav */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl animate-slide-up">
                        <div className="px-4 pt-2 pb-4 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={createPath(link.path)}
                                    className={`block px-4 py-3 rounded-xl text-base font-bold ${isActive(link.path) ? 'bg-primary/10 text-primary' : 'text-gray-600 hover:bg-gray-50'}`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <button
                                onClick={() => {
                                    toggleLanguage();
                                    setIsMenuOpen(false);
                                }}
                                className="flex items-center gap-2 px-4 py-3 text-base font-bold text-gray-600 hover:bg-gray-50 w-full rounded-xl"
                            >
                                <Globe className="w-5 h-5" />
                                {getCurrentLang() === 'ro' ? 'English' : 'Română'}
                            </button>
                            <Link
                                to={createPath('/contact')}
                                className="block w-full text-center mt-4 btn-primary"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {t('nav.book')}
                            </Link>
                        </div>
                    </div>
                )}
            </nav>

            <main className="flex-grow pt-20">
                {children}
            </main>

            <footer className="bg-dark text-white pt-20 pb-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                        <div className="col-span-1 md:col-span-2">
                            <h3 className="text-3xl font-bold mb-6 flex items-center gap-2">
                                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
                                    <Heart className="w-6 h-6 fill-current" />
                                </div>
                                MyFirstJob
                            </h3>
                            <p className="text-gray-400 max-w-md text-lg leading-relaxed">
                                {t('hero.subtitle')}
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-xl mb-6 text-white">{t('nav.services')}</h4>
                            <ul className="space-y-4 text-gray-400">
                                <li><Link to={createPath('/services')} className="hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> {t('services.babysitting.title')}</Link></li>
                                <li><Link to={createPath('/services')} className="hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> {t('services.tutoring.title')}</Link></li>
                                <li><Link to={createPath('/services')} className="hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> {t('services.dogwalking.title')}</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-xl mb-6 text-white">Contact</h4>
                            <ul className="space-y-4 text-gray-400">
                                <li>Brașov, Romania</li>
                                <li><a href="mailto:hello@myfirstjob.ro" className="hover:text-primary transition-colors">hello@myfirstjob.ro</a></li>
                                <li><Link to={createPath('/join')} className="text-primary font-bold hover:text-white transition-colors">{t('nav.join')}</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
                        <p>© {new Date().getFullYear()} MyFirstJob. Built with ❤️ in Brașov.</p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-white transition-colors">Instagram</a>
                            <a href="#" className="hover:text-white transition-colors">Facebook</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
