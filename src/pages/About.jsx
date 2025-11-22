import React from 'react';
import { Heart, Shield, Zap } from 'lucide-react';

const About = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <div className="bg-primary/5 py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-dark mb-6">
                        We are <span className="text-primary">MyFirstJob</span>.
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        A group of ambitious teens in Brașov who believe that age is just a number when it comes to responsibility.
                    </p>
                </div>
            </div>

            {/* Values */}
            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                            <Heart className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Heart & Hustle</h3>
                        <p className="text-gray-600">
                            We do this because we want to learn, earn, and help. We bring energy that adults sometimes... lack. (Sorry!)
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-secondary">
                            <Shield className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Trust First</h3>
                        <p className="text-gray-600">
                            We are verified students. We have references. We know that letting someone into your home is a big deal.
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-yellow-600">
                            <Zap className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Fair Value</h3>
                        <p className="text-gray-600">
                            We don't want charity. We want to provide real value for fair pay. We take our jobs seriously.
                        </p>
                    </div>
                </div>
            </div>

            {/* Story */}
            <div className="bg-dark text-white py-20 px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Our Story</h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        It started with two friends who wanted to buy their own concert tickets.
                        We realized that many families in Brașov need help with small things, and many teens want to work but don't know how to start.
                        So we built this. A place where good families meet good teens.
                    </p>
                    <div className="inline-block border-2 border-white/20 px-8 py-4 rounded-full font-display font-bold">
                        Est. 2025 in Brașov
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
