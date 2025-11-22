import React from 'react';
import { Send } from 'lucide-react';

const JoinUs = () => {
    return (
        <div className="min-h-screen bg-white py-12 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">Join the Squad</h1>
                    <p className="text-xl text-gray-600">
                        Want to earn your own money? Good at something?
                        Join Brașov's coolest teen workforce.
                    </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100">
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Age</label>
                                <input type="number" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="16" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">What are you good at?</label>
                            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white">
                                <option>Babysitting</option>
                                <option>Tutoring</option>
                                <option>Pet Care</option>
                                <option>Tech Support</option>
                                <option>Other (Surprise us!)</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Your Superpower</label>
                            <textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all h-32" placeholder="I can bake cookies, I speak French, I'm great with dogs..."></textarea>
                        </div>

                        <button type="button" className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-red-500 transition-colors shadow-lg flex items-center justify-center gap-2">
                            <Send className="w-5 h-5" />
                            Send Application
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JoinUs;
