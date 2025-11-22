import React from 'react';
import { Smile, Zap, Dog, ShoppingBag, Monitor, Music, BookOpen, Bike } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

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
            color: 'bg-green-500',
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
            color: 'bg-purple-500',
            link: '/contact'
        },
        {
            title: t('services.homework.title'),
            description: t('services.homework.desc'),
            icon: BookOpen,
            color: 'bg-yellow-500',
            link: '/contact'
        },
        {
            title: t('services.courier.title'),
            description: t('services.courier.desc'),
            icon: Bike,
            color: 'bg-red-500',
            link: '/contact'
        }
    ];

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Babysitting, Dog Walking, Tutoring",
        "provider": {
            "@type": "LocalBusiness",
            "name": "MyFirstJob"
        },
        "areaServed": {
            "@type": "City",
            "name": "Brasov"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Teen Services",
            "itemListElement": services.map(service => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": service.title,
                    "description": service.description
                }
            }))
        }
    };

    return (
        <div className="bg-light min-h-screen">
            <SEO
                title="Services - Babysitting, Dog Walking & Tutoring in Brasov"
                description="Affordable and reliable services by teens in Brasov. Babysitting in Bartolomeu, dog walking in Astra, tutoring in Racadau. Book now!"
                keywords={["babysitting brasov", "dog walking brasov", "tutoring brasov", "errands brasov", "teen services brasov"]}
                canonicalUrl="/services"
                schema={serviceSchema}
            />

            <div className="bg-white py-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -ml-16 -mt-16"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h1 className="text-5xl font-bold mb-6 text-dark">{t('services_section.title')}</h1>
                    <p className="text-xl text-gray-500 leading-relaxed">
                        {t('services_section.subtitle')}
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-20">
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
