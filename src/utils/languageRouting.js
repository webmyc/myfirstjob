import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Get current language from URL
export const useLanguage = () => {
    const { lang } = useParams();
    return lang || 'ro'; // Default to Romanian
};

// Create language-aware path
export const createPath = (path, lang = 'ro') => {
    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;

    // If Romanian (default), no prefix needed
    if (lang === 'ro') {
        return `/${cleanPath}`;
    }

    // For other languages, add prefix
    return `/${lang}/${cleanPath}`;
};

// Hook for language-aware navigation
export const useLanguageNavigate = () => {
    const navigate = useNavigate();
    const currentLang = useLanguage();

    return (path) => {
        navigate(createPath(path, currentLang));
    };
};

// Hook for switching language while staying on same page
export const useLanguageSwitch = () => {
    const navigate = useNavigate();
    const { i18n } = useTranslation();
    const { lang, '*': currentPath } = useParams();

    return (newLang) => {
        // Update i18n language
        i18n.changeLanguage(newLang);

        // Navigate to same page in new language
        const path = currentPath || '';
        navigate(createPath(path, newLang), { replace: true });
    };
};
