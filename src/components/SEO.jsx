import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

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
    const lang = i18n.language;
    const siteName = 'MyFirstJob';
    const baseUrl = 'https://myfirstjob.ro'; // Replace with actual domain
    const fullUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl;
    const defaultImage = `${baseUrl}/og-image.jpg`; // Needs to be added to public

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <html lang={lang} />
            <title>{`${title} | ${siteName}`}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords.join(', ')} />
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage || defaultImage} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:locale" content={lang === 'ro' ? 'ro_RO' : 'en_US'} />

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
