import React from 'react';
import { Link } from 'react-router-dom';
import { Smile, Zap, Dog, ShoppingBag, CheckCircle, ArrowRight } from 'lucide-react';
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

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-light pt-20 pb-32 px-4 overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-soft text-sm font-bold text-primary border border-primary/10">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              {t('hero.badge')}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-dark">
              {t('hero.title_1')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">{t('hero.title_2')}</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-lg leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/calculator" className="btn-primary">
                {t('hero.cta_calc')}
              </Link>
              <Link to="/services" className="btn-secondary">
                {t('hero.cta_explore')}
              </Link>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-500 pt-4 font-medium">
              <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-secondary fill-secondary/10" /> {t('hero.verified')}</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-secondary fill-secondary/10" /> {t('hero.approved')}</span>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[3rem] rotate-6 transform scale-95 blur-2xl"></div>
            <img
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Happy teens"
              className="relative rounded-[2.5rem] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 border-4 border-white"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark">{t('services_section.title')}</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
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
      <section className="py-32 bg-light relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-dark">{t('team_section.title')}</h2>
              <p className="text-xl text-gray-500">{t('team_section.subtitle')}</p>
            </div>
            <Link to="/about" className="group flex items-center gap-2 text-primary font-bold hover:text-dark transition-colors">
              {t('team_section.view_all')} <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teens.map((teen, index) => (
              <TeenProfile key={index} {...teen} />
            ))}
            <div className="card p-8 border-2 border-dashed border-gray-200 bg-transparent hover:border-primary hover:bg-primary/5 flex flex-col items-center justify-center text-center group cursor-pointer transition-all">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-white group-hover:shadow-md transition-all">
                <Smile className="w-8 h-8 text-gray-400 group-hover:text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-400 mb-2 group-hover:text-primary transition-colors">{t('team_section.friend_title')}</h3>
              <p className="text-gray-400 text-sm mb-8 max-w-xs">{t('team_section.friend_desc')}</p>
              <Link to="/join" className="btn-secondary py-2 px-6 text-sm">
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
