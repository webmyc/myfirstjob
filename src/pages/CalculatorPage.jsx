import React from 'react';
import ValueCalculator from '../components/ValueCalculator';
import { useTranslation } from 'react-i18next';

const CalculatorPage = () => {
    const { t } = useTranslation();
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <ValueCalculator />
            </div>
        </div>
    );
};

export default CalculatorPage;
