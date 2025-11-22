import React from 'react';
import { Link } from 'react-router-dom';
import { Smile, Zap, Dog, ShoppingBag, CheckCircle } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import TeenProfile from '../components/TeenProfile';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.babysitting.title'),
      description: t('services.babysitting.desc'),
      icon: Smile,
      color: 'bg-primary',
      link: '/services'
    },
    {
      title: t('services.tutoring.title'),
      description: t('services.tutoring.desc'),
      icon: Zap,
      color: 'bg-secondary',
      link: '/services'
    },
    {
      title: t('services.dogwalking.title'),
      description: t('services.dogwalking.desc'),
      icon: Dog,
      color: 'bg-accent',
      link: '/services'
    },
    {
      title: t('services.errands.title'),
      description: t('services.errands.desc'),
      icon: ShoppingBag,
      color: 'bg-purple-500',
      link: '/services'
    }
  ];

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
      image: 'https://images.unsplash.com/photo-1517677130688-e037ed02a664?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
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

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-light pt-20 pb-32 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 z-10">
            <div className="inline-block bg-white px-4 py-2 rounded-full shadow-sm text-sm font-bold text-primary animate-bounce">
              {t('hero.badge')}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-dark">
              {t('hero.title_1')} <br />
              <span className="text-primary">{t('hero.title_2')}</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-lg">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/calculator" className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-red-500 transition-all hover:-translate-y-1">
                {t('hero.cta_calc')}
              </Link>
              <Link to="/services" className="bg-white text-dark border-2 border-gray-200 px-8 py-4 rounded-xl font-bold text-lg hover:border-primary hover:text-primary transition-all">
                {t('hero.cta_explore')}
              </Link>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-400 pt-4">
              <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-secondary" /> {t('hero.verified')}</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-secondary" /> {t('hero.approved')}</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Happy teens"
              className="relative rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('services_section.title')}</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              {t('services_section.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-4xl font-bold mb-4">{t('team_section.title')}</h2>
              <p className="text-gray-500">{t('team_section.subtitle')}</p>
            </div>
            <Link to="/about" className="text-primary font-bold hover:underline">{t('team_section.view_all')}</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teens.map((teen, index) => (
              <TeenProfile key={index} {...teen} />
            ))}
            <div className="bg-white rounded-2xl p-8 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-center hover:border-primary hover:bg-primary/5 transition-all group">
              <h3 className="text-xl font-bold text-gray-400 mb-2 group-hover:text-primary">{t('team_section.friend_title')}</h3>
              <p className="text-gray-400 text-sm mb-6">{t('team_section.friend_desc')}</p>
              <Link to="/join" className="px-6 py-2 bg-gray-100 text-gray-600 rounded-full font-bold group-hover:bg-primary group-hover:text-white transition-colors">
                {t('team_section.join_btn')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
