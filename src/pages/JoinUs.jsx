import React from 'react';
import { Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const JoinUs = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-white py-12 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">{t('join.title')}</h1>
                    <p className="text-xl text-gray-600">
                        {t('join.subtitle')}
                    </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100">
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">{t('join.form.name')}</label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">{t('join.form.age')}</label>
                                <input type="number" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="16" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">{t('join.form.skills')}</label>
                            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white">
                                <option>{t('services.babysitting.title')}</option>
                                <option>{t('services.tutoring.title')}</option>
                                <option>{t('services.dogwalking.title')}</option>
                                <option>{t('services.tech.title')}</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">{t('join.form.superpower')}</label>
                            <textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all h-32" placeholder="..."></textarea>
                        </div>

                        <button type="button" className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-red-500 transition-colors shadow-lg flex items-center justify-center gap-2">
                            <Send className="w-5 h-5" />
                            {t('join.form.send')}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JoinUs;
