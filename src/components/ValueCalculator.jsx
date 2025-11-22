import React, { useState } from 'react';
import { Calculator, Smile, Zap, Coffee, Heart } from 'lucide-react';

const ValueCalculator = () => {
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
        if (total < 50) return { price: total, text: "Less than a pizza date!" };
        if (total < 100) return { price: total, text: "Cheaper than therapy!" };
        return { price: total, text: "Small price for sanity." };
    };

    const result = calculateValue();

    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border-2 border-gray-100">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-primary mb-2 flex justify-center items-center gap-2">
                    <Calculator className="w-8 h-8" />
                    Value Calculator
                </h2>
                <p className="text-gray-500">Calculate the price of your freedom.</p>
            </div>

            <div className="space-y-6">
                {/* Service Type */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">What do you need?</label>
                    <div className="grid grid-cols-2 gap-4">
                        <button
                            onClick={() => setServiceType('babysitting')}
                            className={`p-4 rounded-xl border-2 transition-all ${serviceType === 'babysitting'
                                    ? 'border-primary bg-primary/10 text-primary'
                                    : 'border-gray-200 hover:border-primary/50'
                                }`}
                        >
                            <Smile className="w-6 h-6 mx-auto mb-2" />
                            Babysitting
                        </button>
                        <button
                            onClick={() => setServiceType('tutoring')}
                            className={`p-4 rounded-xl border-2 transition-all ${serviceType === 'tutoring'
                                    ? 'border-secondary bg-secondary/10 text-secondary'
                                    : 'border-gray-200 hover:border-secondary/50'
                                }`}
                        >
                            <Zap className="w-6 h-6 mx-auto mb-2" />
                            Tutoring
                        </button>
                    </div>
                </div>

                {/* Hours Slider */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                        How long do you need us? ({hours} hours)
                    </label>
                    <input
                        type="range"
                        min="1"
                        max="8"
                        value={hours}
                        onChange={(e) => setHours(parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>Quick fix (1h)</span>
                        <span>Full escape (8h)</span>
                    </div>
                </div>

                {/* Stress Level */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                        Current Stress Level (Be honest!)
                    </label>
                    <div className="flex justify-between items-center gap-2">
                        {[1, 3, 5, 7, 10].map((level) => (
                            <button
                                key={level}
                                onClick={() => setStressLevel(level)}
                                className={`flex-1 py-2 rounded-lg font-bold transition-all ${stressLevel === level
                                        ? 'bg-accent text-dark transform scale-110'
                                        : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                                    }`}
                            >
                                {level === 10 ? '😱' : level === 1 ? '😌' : level}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Result Box */}
                <div className="mt-8 bg-dark text-white p-6 rounded-xl text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary"></div>
                    <p className="text-gray-400 mb-2">Your Investment</p>
                    <div className="text-5xl font-bold font-display mb-2">
                        {result.price} <span className="text-2xl text-gray-500">RON</span>
                    </div>
                    <p className="text-accent font-bold text-lg flex justify-center items-center gap-2">
                        <Coffee className="w-5 h-5" />
                        {result.text}
                    </p>
                </div>

                <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-red-500 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Book This Value Package
                </button>
            </div>
        </div>
    );
};

export default ValueCalculator;
