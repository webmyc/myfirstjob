import React, { useState } from 'react';
import { Calculator, Smile, Zap, Coffee, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ValueCalculator = () => {
    const { t } = useTranslation();
    const [serviceType, setServiceType] = useState('babysitting');
    const [hours, setHours] = useState(2);
    const [stressLevel, setStressLevel] = useState(5); // 1-10
    const [urgency, setUrgency] = useState('normal');

    const calculateValue = () => {
        let baseRate = serviceType === 'babysitting' ? 25 : 35; // RON per hour
        let multiplier = 1;

        if (stressLevel > 7) multiplier += 0.2; // "Save me" tax
        if (urgency === 'asap') multiplier += 0.3;

        const total = Math.round(baseRate * hours * multiplier);

        // Witty value translation
        if (total < 50) return { price: total, text: t('calculator.results.pizza') };
        if (total < 100) return { price: total, text: t('calculator.results.therapy') };
        return { price: total, text: t('calculator.results.sanity') };
    };

    const result = calculateValue();

    return (
        <div className="card p-8 max-w-2xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>

            <div className="text-center mb-10 relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4 text-primary">
                    <Calculator className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-dark mb-2">
                    {t('calculator.title')}
                </h2>
                <p className="text-gray-500">{t('calculator.subtitle')}</p>
            </div>

            <div className="space-y-8 relative z-10">
                {/* Service Type */}
                <div>
                    <label className="block text-sm font-bold text-dark mb-3">{t('calculator.question_service')}</label>
                    <div className="grid grid-cols-2 gap-4">
                        <button
                            onClick={() => setServiceType('babysitting')}
                            className={`p-4 rounded-xl border-2 transition-all duration-300 flex flex-col items-center gap-2 ${serviceType === 'babysitting'
                                ? 'border-primary bg-primary/5 text-primary shadow-sm'
                                : 'border-gray-100 hover:border-primary/30 text-gray-500'
                                }`}
                        >
                            <Smile className={`w-8 h-8 ${serviceType === 'babysitting' ? 'fill-primary/20' : ''}`} />
                            <span className="font-bold">{t('services.babysitting.title')}</span>
                        </button>
                        <button
                            onClick={() => setServiceType('tutoring')}
                            className={`p-4 rounded-xl border-2 transition-all duration-300 flex flex-col items-center gap-2 ${serviceType === 'tutoring'
                                ? 'border-secondary bg-secondary/5 text-secondary shadow-sm'
                                : 'border-gray-100 hover:border-secondary/30 text-gray-500'
                                }`}
                        >
                            <Zap className={`w-8 h-8 ${serviceType === 'tutoring' ? 'fill-secondary/20' : ''}`} />
                            <span className="font-bold">{t('services.tutoring.title')}</span>
                        </button>
                    </div>
                </div>

                {/* Hours Slider */}
                <div>
                    <label className="block text-sm font-bold text-dark mb-4 flex justify-between">
                        <span>{t('calculator.question_hours', { hours })}</span>
                        <span className="text-primary bg-primary/10 px-2 py-1 rounded-lg text-xs">{hours}h</span>
                    </label>
                    <input
                        type="range"
                        min="1"
                        max="8"
                        value={hours}
                        onChange={(e) => setHours(parseInt(e.target.value))}
                        className="w-full h-3 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary hover:accent-red-500 transition-all"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
                        <span>{t('calculator.quick_fix')}</span>
                        <span>{t('calculator.full_escape')}</span>
                    </div>
                </div>

                {/* Stress Level */}
                <div>
                    <label className="block text-sm font-bold text-dark mb-3">
                        {t('calculator.question_stress')}
                    </label>
                    <div className="flex justify-between items-center gap-2 bg-gray-50 p-2 rounded-xl">
                        {[1, 3, 5, 7, 10].map((level) => (
                            <button
                                key={level}
                                onClick={() => setStressLevel(level)}
                                className={`flex-1 py-3 rounded-lg font-bold transition-all duration-300 ${stressLevel === level
                                    ? 'bg-white text-dark shadow-md transform scale-105 ring-1 ring-gray-100'
                                    : 'text-gray-400 hover:text-dark'
                                    }`}
                            >
                                {level === 10 ? '😱' : level === 1 ? '😌' : level}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Result Box */}
                <div className="mt-8 bg-dark text-white p-8 rounded-2xl text-center relative overflow-hidden shadow-xl group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary"></div>
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <p className="text-gray-400 mb-2 text-sm uppercase tracking-wider font-bold">{t('calculator.investment')}</p>
                    <div className="text-6xl font-bold font-display mb-4 tracking-tight">
                        {result.price} <span className="text-3xl text-gray-500 font-sans">RON</span>
                    </div>
                    <p className="text-accent font-bold text-lg flex justify-center items-center gap-2 bg-white/10 py-2 px-4 rounded-full inline-flex">
                        <Coffee className="w-5 h-5" />
                        {result.text}
                    </p>
                </div>

                <button className="btn-primary w-full text-lg py-4">
                    {t('calculator.book_btn')}
                </button>
            </div>
        </div>
    );
};

export default ValueCalculator;
