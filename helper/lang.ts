export type Language = 'en' | 'fa';

export const getCurrentLang = (): Language => {
	if (typeof window === 'undefined') return 'en';
	const lang = localStorage.getItem('lang') as Language | null;
	return lang || 'en';
};

export const setCurrentLang = (lang: Language) => {
	localStorage.setItem('lang', lang);
};
