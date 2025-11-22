import React from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">{t('contact.title')}</h1>
          <p className="text-xl text-gray-600">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg mb-4">{t('contact.quick_contact')}</h3>
              <div className="space-y-4">
                <a href="mailto:hello@myfirstjob.ro" className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  hello@myfirstjob.ro
                </a>
                <a href="tel:+40700000000" className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors">
                  <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                    <Phone className="w-5 h-5" />
                  </div>
                  +40 700 000 000
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="bg-accent/20 p-6 rounded-2xl border border-accent/50">
              <h3 className="font-bold text-lg mb-2">{t('contact.promise')}</h3>
              <p className="text-sm text-gray-700">
                {t('contact.promise_text')}
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">{t('contact.form.parent_name')}</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">{t('contact.form.phone')}</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="07xx xxx xxx" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">{t('contact.form.help_type')}</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white">
                  <option>{t('services.babysitting.title')}</option>
                  <option>{t('services.tutoring.title')}</option>
                  <option>{t('services.dogwalking.title')}</option>
                  <option>{t('services.errands.title')}</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">{t('contact.form.value_goal')}</label>
                <p className="text-xs text-gray-400 mb-2">{t('contact.form.value_hint')}</p>
                <textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all h-32" placeholder="..."></textarea>
              </div>

              <button type="button" className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-red-500 transition-colors shadow-lg transform hover:-translate-y-1">
                {t('contact.form.send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
