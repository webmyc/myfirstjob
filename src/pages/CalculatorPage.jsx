import React from 'react';
import ValueCalculator from '../components/ValueCalculator';

const CalculatorPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
                    What's it worth to you?
                </h1>
                <p className="text-xl text-gray-600">
                    We don't just sell time. We sell peace of mind, better grades, and happy pets.
                </p>
            </div>
            <ValueCalculator />
        </div>
    );
};

export default CalculatorPage;
