import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'ro' ? 'en' : 'ro';
        i18n.changeLanguage(newLang);
    };

    const navLinks = [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.services'), path: '/services' },
        { name: t('nav.calculator'), path: '/calculator' },
        { name: t('nav.join'), path: '/join' },
        { name: t('nav.about'), path: '/about' },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <Link to="/" className="flex items-center gap-2 text-2xl font-display font-bold text-primary hover:scale-105 transition-transform">
                            <Heart className="w-8 h-8 fill-primary" />
                            <span>MyFirstJob</span>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-gray-600'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <button
                                onClick={toggleLanguage}
                                className="flex items-center gap-1 text-sm font-bold text-gray-600 hover:text-primary transition-colors"
                            >
                                <Globe className="w-4 h-4" />
                                {i18n.language.toUpperCase()}
                            </button>

                            <Link
                                to="/contact"
                                className="bg-primary text-white px-5 py-2 rounded-full font-bold hover:bg-red-500 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                {t('nav.book')}
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 text-gray-600"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Nav */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-100 absolute w-full">
                        <div className="px-4 pt-2 pb-4 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md"
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
                                className="flex items-center gap-2 px-3 py-2 text-base font-medium text-gray-600 hover:text-primary w-full"
                            >
                                <Globe className="w-4 h-4" />
                                Switch to {i18n.language === 'ro' ? 'English' : 'Română'}
                            </button>
                            <Link
                                to="/contact"
                                className="block w-full text-center mt-4 bg-primary text-white px-5 py-3 rounded-xl font-bold"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {t('nav.book')}
                            </Link>
                        </div>
                    </div>
                )}
            </nav>

            <main className="flex-grow">
                {children}
            </main>

            <footer className="bg-dark text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <Heart className="w-6 h-6 fill-primary text-primary" />
                                MyFirstJob
                            </h3>
                            <p className="text-gray-400">
                                {t('hero.subtitle')}
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-4">{t('nav.services')}</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>{t('services.babysitting.title')}</li>
                                <li>{t('services.tutoring.title')}</li>
                                <li>{t('services.dogwalking.title')}</li>
                                <li>{t('services.errands.title')}</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-4">Contact</h4>
                            <p className="text-gray-400">Brașov, Romania</p>
                            <p className="text-gray-400">hello@myfirstjob.ro</p>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
                        © {new Date().getFullYear()} MyFirstJob. Built with ❤️ in Brașov.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
