import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getCurrentLang, setCurrentLang, Language } from '@/helper/lang';

interface LangContextType {
  lang: Language;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextType>({
  lang: 'en',
  toggleLang: () => {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current = getCurrentLang();
    setLangState(current);
    updateDirection(current);
    setMounted(true);
  }, []);

  const updateDirection = (lang: Language) => {
    if (typeof document !== 'undefined') {
      document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
      document.documentElement.lang = lang;
    }
  };

  const toggleLang = () => {
    const newLang: Language = lang === 'en' ? 'fa' : 'en';
    setCurrentLang(newLang);
    setLangState(newLang);
    updateDirection(newLang);
  };

  // Prevent hydration
  if (!mounted) {
    return (
      <div style={{ visibility: "hidden" }}>
        <LangContext.Provider value={{ lang: 'en', toggleLang }}>
          {children}
        </LangContext.Provider>
      </div>
    );
  }

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
