import React from 'react';
import { Link } from 'react-router-dom';
import { Smile, Zap, Dog, ShoppingBag, CheckCircle, ArrowRight, Star, Shield, Heart, MapPin } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import TeenProfile from '../components/TeenProfile';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const Home = () => {
  const { t } = useTranslation();

  const teens = [
    {
      name: 'Ioana',
      role: t('teens.ioana.role'),
      bio: t('teens.ioana.bio'),
      skills: ['Math', 'English', 'Crafts'],
      rating: 5,
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'Soso',
      role: t('teens.soso.role'),
      bio: t('teens.soso.bio'),
      skills: ['Dogs', 'Shopping', 'Organization'],
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'Maria',
      role: t('teens.maria.role'),
      bio: t('teens.maria.bio'),
      skills: ['Organization', 'Decor', 'Events'],
      rating: 5,
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MyFirstJob",
    "image": "https://myfirstjob.ro/logo.png",
    "description": "Trusted local teens in Brasov offering babysitting, dog walking, and tutoring services. Serving Bartolomeu, Astra, Racadau, and more.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Brasov",
      "addressRegion": "Brasov",
      "addressCountry": "RO"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "45.657974",
      "longitude": "25.601198"
    },
    "url": "https://myfirstjob.ro",
    "telephone": "+40712345678",
    "priceRange": "$$",
    "areaServed": [
      "Brasov",
      "Bartolomeu",
      "Astra",
      "Racadau",
      "Schei",
      "Tractorul"
    ],
    "employees": teens.map(teen => ({
      "@type": "Person",
      "name": teen.name,
      "jobTitle": teen.role,
      "description": teen.bio
    }))
  };

  return (
    <div className="overflow-hidden">
      <SEO
        title="Babysitter, Dog Walker & Tutor in Brasov | MyFirstJob"
        description="Find trusted teens in Brasov for babysitting, dog walking, tutoring, and more. Serving Bartolomeu, Astra, and all neighborhoods. Verified local help."
        keywords={["babysitter brasov", "babysitter brasov bartolomeu", "dog walker brasov", "tutoring brasov", "teen jobs brasov", "myfirstjob"]}
        canonicalUrl="/"
        schema={localBusinessSchema}
      />

      {/* Hero Section */}
      <section className="relative bg-light pt-20 pb-32 px-4 overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 animate-pulse">
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="text-sm font-bold text-gray-600">{t('hero.badge')}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-dark leading-tight">
              {t('hero.title')} <span className="text-primary relative">
                {t('hero.highlight')}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/50 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed max-w-lg">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary flex items-center gap-2">
                {t('hero.cta_primary')} <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/join" className="btn-secondary">
                {t('hero.cta_secondary')}
              </Link>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex text-accent">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-accent" />)}
                </div>
                <p className="text-gray-500 font-medium">Trusted by 50+ families</p>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl transform rotate-12 scale-90"></div>
            <img
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Happy teens working"
              className="relative rounded-3xl shadow-2xl transform hover:-rotate-2 transition-transform duration-500 border-8 border-white"
            />
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-bold uppercase">Verified</p>
                  <p className="text-lg font-bold text-dark">100% Safe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">{t('features.title')}</h2>
            <p className="text-xl text-gray-500">{t('features.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8 text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-dark">{t('features.safe.title')}</h3>
              <p className="text-gray-500">{t('features.safe.desc')}</p>
            </div>
            <div className="card p-8 text-center group">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-secondary group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-dark">{t('features.community.title')}</h3>
              <p className="text-gray-500">{t('features.community.desc')}</p>
            </div>
            <div className="card p-8 text-center group">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-yellow-600 group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-dark">{t('features.local.title')}</h3>
              <p className="text-gray-500">{t('features.local.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-light relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-dark mb-4">{t('team.title')}</h2>
              <p className="text-xl text-gray-500 max-w-xl">{t('team.subtitle')}</p>
            </div>
            <Link to="/services" className="btn-secondary flex items-center gap-2">
              View all profiles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teens.map((teen, index) => (
              <TeenProfile key={index} {...teen} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
