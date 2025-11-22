import React from 'react';
import { Heart, Shield, DollarSign } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-white">
            {/* Hero */}
            <div className="bg-primary/5 py-32 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -ml-16 -mb-16"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold mb-8 text-dark">{t('about.title')}</h1>
                    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                        {t('about.subtitle')}
                    </p>
                </div>
            </div>

            {/* Values */}
            <div className="py-24 max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="card p-10 text-center hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 text-primary">
                            <Heart className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-dark">{t('about.values.heart.title')}</h3>
                        <p className="text-gray-500 leading-relaxed">
                            {t('about.values.heart.desc')}
                        </p>
                    </div>
                    <div className="card p-10 text-center hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-8 text-secondary">
                            <Shield className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-dark">{t('about.values.trust.title')}</h3>
                        <p className="text-gray-500 leading-relaxed">
                            {t('about.values.trust.desc')}
                        </p>
                    </div>
                    <div className="card p-10 text-center hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8 text-yellow-600">
                            <DollarSign className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-dark">{t('about.values.fair.title')}</h3>
                        <p className="text-gray-500 leading-relaxed">
                            {t('about.values.fair.desc')}
                        </p>
                    </div>
                </div>
            </div>

            {/* Story */}
            <div className="bg-dark text-white py-32 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-dark via-gray-900 to-black"></div>
                <div className="max-w-3xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl font-bold mb-8">{t('about.story.title')}</h2>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        {t('about.story.text')}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
