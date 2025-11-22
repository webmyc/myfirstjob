import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const SEO = ({
    title,
    description,
    keywords = [],
    canonicalUrl,
    ogImage,
    ogType = 'website',
    schema
}) => {
    const { i18n } = useTranslation();
    const location = useLocation();
    const lang = i18n.language;
    const siteName = 'MyFirstJob';
    const baseUrl = 'https://myfirstjob.ro';

    // Determine current language from URL
    const isEnglish = location.pathname.startsWith('/en');
    const currentLang = isEnglish ? 'en' : 'ro';

    // Build full URL with hash router
    const fullUrl = canonicalUrl ? `${baseUrl}/#${canonicalUrl}` : baseUrl;
    const defaultImage = `${baseUrl}/og-image.jpg`;

    // Create alternate language URLs
    const getAlternateUrl = (targetLang) => {
        let path = canonicalUrl || '/';

        // Remove /en prefix if present
        if (path.startsWith('/en/')) {
            path = path.slice(3);
        } else if (path.startsWith('/en')) {
            path = '/';
        }

        // Add /en prefix for English
        if (targetLang === 'en') {
            return `${baseUrl}/#/en${path === '/' ? '' : path}`;
        }
        return `${baseUrl}/#${path}`;
    };

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <html lang={currentLang} />
            <title>{`${title} | ${siteName}`}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords.join(', ')} />
            <link rel="canonical" href={fullUrl} />

            {/* Alternate Language Links (hreflang) */}
            <link rel="alternate" hreflang="ro" href={getAlternateUrl('ro')} />
            <link rel="alternate" hreflang="en" href={getAlternateUrl('en')} />
            <link rel="alternate" hreflang="x-default" href={getAlternateUrl('ro')} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage || defaultImage} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:locale" content={currentLang === 'ro' ? 'ro_RO' : 'en_US'} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={fullUrl} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={ogImage || defaultImage} />

            {/* Structured Data (JSON-LD) */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;

