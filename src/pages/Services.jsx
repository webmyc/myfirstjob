import React from 'react';
import { Smile, Zap, Dog, ShoppingBag, Monitor, Music, PenTool, Bike } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
    const services = [
        {
            title: 'Babysitting',
            description: 'We keep your kids safe and entertained. No screens (unless you say so!), lots of games, and bedtime stories included.',
            icon: Smile,
            color: 'bg-primary',
            link: '/contact'
        },
        {
            title: 'Tutoring',
            description: 'Struggling with Math or English? We can explain it in a way that actually makes sense. Grades go up, stress goes down.',
            icon: Zap,
            color: 'bg-secondary',
            link: '/contact'
        },
        {
            title: 'Dog Walking',
            description: 'Rain or shine, your dog needs to pee. We love long walks and playing fetch.',
            icon: Dog,
            color: 'bg-accent',
            link: '/contact'
        },
        {
            title: 'City Errands',
            description: 'Grocery shopping, picking up packages, or waiting for the plumber. We save you time.',
            icon: ShoppingBag,
            color: 'bg-purple-500',
            link: '/contact'
        },
        {
            title: 'Tech Support',
            description: 'Grandma needs help with WhatsApp? Printer acting up? We speak fluent technology.',
            icon: Monitor,
            color: 'bg-blue-500',
            link: '/contact'
        },
        {
            title: 'Music Practice',
            description: 'Need a practice buddy for piano or guitar? We can help keep the rhythm.',
            icon: Music,
            color: 'bg-pink-500',
            link: '/contact'
        },
        {
            title: 'Homework Help',
            description: 'Not full tutoring, just someone to sit and make sure the homework actually gets done.',
            icon: PenTool,
            color: 'bg-orange-500',
            link: '/contact'
        },
        {
            title: 'Bike Courier',
            description: 'Need something moved across Brașov fast? We have bikes and strong legs.',
            icon: Bike,
            color: 'bg-green-500',
            link: '/contact'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">Our Services</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        From homework to housework, we're here to help.
                        If you don't see what you need, just ask!
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
