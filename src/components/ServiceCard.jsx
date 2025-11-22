import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ title, description, icon: Icon, color, link }) => {
    return (
        <div className="card group hover:-translate-y-2 h-full flex flex-col">
            <div className="p-8 flex-grow">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300 ${color}`}>
                    <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-dark group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-gray-500 leading-relaxed">{description}</p>
            </div>
            <div className="px-8 pb-8">
                <Link to={link} className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-dark transition-colors">
                    Learn more <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;
