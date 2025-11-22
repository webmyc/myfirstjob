import React from 'react';
import { Mail, Phone, MessageCircle, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const Contact = () => {
  const { t } = useTranslation();

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "MyFirstJob",
      "telephone": "+40712345678",
      "email": "hello@myfirstjob.ro",
      "url": "https://myfirstjob.ro"
    }
  };

  return (
    <div className="py-20 px-4 bg-light min-h-screen flex items-center">
      <SEO
        title="Contact Us - Hire a Teen in Brasov"
        description="Get in touch to hire a trusted teen for babysitting, dog walking, or tutoring in Brasov. Contact us via email, phone, or WhatsApp."
        keywords={["contact myfirstjob", "hire teen brasov", "babysitter contact brasov"]}
        canonicalUrl="/contact"
        schema={contactSchema}
      />

      <div className="max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl font-bold mb-6 text-dark">{t('contact.title')}</h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="space-y-6">
            <div className="card p-6 flex items-center gap-4 hover:bg-white transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">Email</p>
                <p className="text-lg font-bold text-dark">hello@myfirstjob.ro</p>
              </div>
            </div>
            <div className="card p-6 flex items-center gap-4 hover:bg-white transition-colors">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">{t('contact.quick_contact')}</p>
                <p className="text-lg font-bold text-dark">+40 712 345 678</p>
              </div>
            </div>
            <div className="card p-6 flex items-center gap-4 hover:bg-white transition-colors">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">WhatsApp</p>
                <p className="text-lg font-bold text-dark">+40 712 345 678</p>
              </div>
            </div>
          </div>

          <div className="bg-accent/10 p-6 rounded-2xl border border-accent/20">
            <h3 className="font-bold text-yellow-700 mb-2 flex items-center gap-2">
              {t('contact.promise')}
            </h3>
            <p className="text-yellow-800 text-sm">
              {t('contact.promise_text')}
            </p>
          </div>
        </div>

        <div className="card p-8 md:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
          <form className="space-y-6 relative z-10">
            <div>
              <label className="block text-sm font-bold text-dark mb-2">{t('contact.form.parent_name')}</label>
              <input
                type="text"
                className="input-field"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-dark mb-2">{t('contact.form.phone')}</label>
              <input
                type="tel"
                className="input-field"
                placeholder="+40..."
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-dark mb-2">{t('contact.form.help_type')}</label>
              <select className="input-field">
                <option>{t('services.babysitting.title')}</option>
                <option>{t('services.tutoring.title')}</option>
                <option>{t('services.dogwalking.title')}</option>
                <option>{t('services.errands.title')}</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-dark mb-2">
                {t('contact.form.value_goal')} <span className="text-primary">*</span>
              </label>
              <textarea
                className="input-field h-32 resize-none"
                placeholder={t('contact.form.value_hint')}
              ></textarea>
            </div>
            <button className="btn-primary w-full flex items-center justify-center gap-2 group">
              {t('contact.form.send')} <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
