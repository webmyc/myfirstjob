import React from 'react';
import { Smile, Zap, Dog, ShoppingBag, Monitor, Music, BookOpen, Bike } from 'lucide-react';
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
            color: 'bg-secondary',
            link: '/contact'
        },
        {
            icon: BookOpen,
            title: t('services.tutoring.title'),
            description: t('services.tutoring.desc'),
            color: 'bg-accent',
            link: '/contact'
        },
        {
            icon: ShoppingBag,
            title: t('services.errands.title'),
            description: t('services.errands.desc'),
            color: 'bg-green-500',
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
                    <h1 className="text-5xl font-bold mb-6 text-dark">{t('services.title')}</h1>
                    <p className="text-xl text-gray-500 leading-relaxed">
                        {t('services.subtitle')}
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
