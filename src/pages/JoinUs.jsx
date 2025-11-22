import React from 'react';
import { Rocket, Star, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const JoinUs = () => {
    const { t } = useTranslation();

    return (
        <div className="py-20 px-4 bg-light min-h-screen flex items-center justify-center">
            <div className="max-w-2xl w-full">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/10 rounded-full mb-6 text-secondary animate-float">
                        <Rocket className="w-10 h-10" />
                    </div>
                    <h1 className="text-5xl font-bold mb-6 text-dark">{t('join.title')}</h1>
                    <p className="text-xl text-gray-500 leading-relaxed">
                        {t('join.subtitle')}
                    </p>
                </div>

                <div className="card p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-primary to-accent"></div>
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-dark mb-2">{t('join.form.name')}</label>
                                <input
                                    type="text"
                                    className="input-field"
                                    placeholder="Alex..."
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-dark mb-2">{t('join.form.age')}</label>
                                <input
                                    type="number"
                                    className="input-field"
                                    placeholder="16"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-dark mb-2">{t('join.form.skills')}</label>
                            <div className="grid grid-cols-2 gap-3 mb-3">
                                {['Math', 'English', 'Sports', 'Arts', 'Tech', 'Animals'].map((skill) => (
                                    <label key={skill} className="flex items-center gap-2 p-3 border border-gray-200 rounded-xl cursor-pointer hover:border-secondary hover:bg-secondary/5 transition-all">
                                        <input type="checkbox" className="rounded text-secondary focus:ring-secondary" />
                                        <span className="text-sm font-bold text-gray-600">{skill}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-dark mb-2 flex items-center gap-2">
                                <Star className="w-4 h-4 text-accent fill-accent" />
                                {t('join.form.superpower')}
                            </label>
                            <textarea
                                className="input-field h-32 resize-none"
                                placeholder="I can make anyone laugh..."
                            ></textarea>
                        </div>
                        <button className="btn-primary w-full flex items-center justify-center gap-2 group bg-secondary hover:bg-teal-500 hover:shadow-glow">
                            {t('join.form.send')} <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JoinUs;
