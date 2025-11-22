import React from 'react';
import { Link } from 'react-router-dom';
import { Smile, Zap, Dog, ShoppingBag, CheckCircle } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import TeenProfile from '../components/TeenProfile';

const Home = () => {
  const services = [
    {
      title: 'Babysitting',
      description: 'Fun, safe, and reliable care. We don\'t just watch TV; we play games, do crafts, and keep them happy.',
      icon: Smile,
      color: 'bg-primary',
      link: '/services'
    },
    {
      title: 'Tutoring',
      description: 'Math, English, or Science? We make learning less boring and help with homework struggles.',
      icon: Zap,
      color: 'bg-secondary',
      link: '/services'
    },
    {
      title: 'Dog Walking',
      description: 'Your furry friend needs exercise! We love dogs and will make sure they get a great workout.',
      icon: Dog,
      color: 'bg-accent',
      link: '/services'
    },
    {
      title: 'City Errands',
      description: 'Need groceries? A package picked up? We know Brașov inside out and can help you save time.',
      icon: ShoppingBag,
      color: 'bg-purple-500',
      link: '/services'
    }
  ];

  const teens = [
    {
      name: 'Ana M.',
      role: 'Babysitter & Tutor',
      bio: 'High school student with a passion for math and kids. I know all the best playground games!',
      skills: ['Math', 'English', 'Crafts'],
      rating: 5,
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'Maria S.',
      role: 'Pet Lover & Helper',
      bio: 'I have 3 dogs at home and love being active. I can also help with grocery runs!',
      skills: ['Dogs', 'Shopping', 'Organization'],
      rating: 5,
      image: 'https://images.unsplash.com/photo-1517677130688-e037ed02a664?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-light pt-20 pb-32 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 z-10">
            <div className="inline-block bg-white px-4 py-2 rounded-full shadow-sm text-sm font-bold text-primary animate-bounce">
              🚀 Brașov's Coolest Teen Squad
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-dark">
              Need a hand? <br />
              <span className="text-primary">We got you.</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-lg">
              Babysitting, tutoring, and help around the house from trustworthy teens who actually want to work.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/calculator" className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-red-500 transition-all hover:-translate-y-1">
                Calculate Value
              </Link>
              <Link to="/services" className="bg-white text-dark border-2 border-gray-200 px-8 py-4 rounded-xl font-bold text-lg hover:border-primary hover:text-primary transition-all">
                Explore Services
              </Link>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-400 pt-4">
              <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-secondary" /> Verified Students</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-secondary" /> Parent Approved</span>
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
            <h2 className="text-4xl font-bold mb-4">What we can do for you</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We are young, energetic, and ready to help. Here are some of the ways we can make your life easier.
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
              <h2 className="text-4xl font-bold mb-4">Meet the Squad</h2>
              <p className="text-gray-500">Real teens, real skills, real helpful.</p>
            </div>
            <Link to="/about" className="text-primary font-bold hover:underline">View all profiles</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teens.map((teen, index) => (
              <TeenProfile key={index} {...teen} />
            ))}
            <div className="bg-white rounded-2xl p-8 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-center hover:border-primary hover:bg-primary/5 transition-all group">
              <h3 className="text-xl font-bold text-gray-400 mb-2 group-hover:text-primary">Your Friend Here?</h3>
              <p className="text-gray-400 text-sm mb-6">We are always looking for cool people to join us.</p>
              <Link to="/join" className="px-6 py-2 bg-gray-100 text-gray-600 rounded-full font-bold group-hover:bg-primary group-hover:text-white transition-colors">
                Join the Squad
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
