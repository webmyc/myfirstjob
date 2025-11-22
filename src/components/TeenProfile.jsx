import React from 'react';
import { Star, MapPin } from 'lucide-react';

const TeenProfile = ({ name, role, bio, skills, rating, image }) => {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gray-200 relative">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
                    <h3 className="text-white font-bold text-xl">{name}</h3>
                    <p className="text-white/90 text-sm">{role}</p>
                </div>
            </div>
            <div className="p-6">
                <div className="flex items-center gap-1 text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < rating ? 'fill-current' : 'text-gray-300'}`} />
                    ))}
                    <span className="text-gray-400 text-sm ml-2">({rating}.0)</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{bio}</p>
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                        <span key={skill} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeenProfile;
