import { getCurrentLang } from "./lang";
import { useLang } from "@/context/LanguageProvider";

type TranslationItem = {
  en?: string;
  fa?: string;
};

export const t = (item?: TranslationItem, currentLang?: string): string => {
  const lang = currentLang || getCurrentLang();
  if (!item) return "";

  return item[lang as keyof TranslationItem] || item.en || item.fa || ""; 
};

export const useTranslation = () => {
  const { lang } = useLang();
  
  const t = (item?: TranslationItem): string => {
    if (!item) return "";
    return item[lang] || item.en || item.fa || "";
  };
  
  return { t, lang };
};
