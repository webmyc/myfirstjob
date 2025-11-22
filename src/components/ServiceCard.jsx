import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, icon: Icon, color, link }) => {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100 group">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${color}`}>
                <Icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-gray-500 mb-4 line-clamp-3">{description}</p>
            <Link to={link} className="flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
            </Link>
        </div>
    );
};

export default ServiceCard;
