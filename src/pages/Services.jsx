import React from 'react';
import { Smile, Zap, Dog, ShoppingBag, Monitor, Music, PenTool, Bike } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { useTranslation } from 'react-i18next';

const Services = () => {
    const { t } = useTranslation();

    const services = [
        {
            title: t('services.babysitting.title'),
            description: t('services.babysitting.desc'),
            icon: Smile,
            color: 'bg-primary',
            link: '/contact'
        },
        {
            title: t('services.tutoring.title'),
            description: t('services.tutoring.desc'),
            icon: Zap,
            color: 'bg-secondary',
            link: '/contact'
        },
        {
            title: t('services.dogwalking.title'),
            description: t('services.dogwalking.desc'),
            icon: Dog,
            color: 'bg-accent',
            link: '/contact'
        },
        {
            title: t('services.errands.title'),
            description: t('services.errands.desc'),
            icon: ShoppingBag,
            color: 'bg-purple-500',
            link: '/contact'
        },
        {
            title: t('services.tech.title'),
            description: t('services.tech.desc'),
            icon: Monitor,
            color: 'bg-blue-500',
            link: '/contact'
        },
        {
            title: t('services.music.title'),
            description: t('services.music.desc'),
            icon: Music,
            color: 'bg-pink-500',
            link: '/contact'
        },
        {
            title: t('services.homework.title'),
            description: t('services.homework.desc'),
            icon: PenTool,
            color: 'bg-orange-500',
            link: '/contact'
        },
        {
            title: t('services.courier.title'),
            description: t('services.courier.desc'),
            icon: Bike,
            color: 'bg-green-500',
            link: '/contact'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">{t('services_section.title')}</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        {t('services_section.subtitle')}
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
