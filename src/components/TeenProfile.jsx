import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

const TeenProfile = ({ name, role, bio, skills, rating, image }) => {
    return (
        <div className="card group overflow-hidden">
            <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 z-20 text-white">
                    <h3 className="text-2xl font-bold flex items-center gap-2">
                        {name}
                        <CheckCircle className="w-5 h-5 text-secondary fill-white" />
                    </h3>
                    <p className="text-gray-200 text-sm font-medium">{role}</p>
                </div>
                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-sm font-bold shadow-sm">
                    <Star className="w-4 h-4 text-accent fill-accent" />
                    {rating}.0
                </div>
            </div>
            <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">{bio}</p>
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full border border-gray-200"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeenProfile;
