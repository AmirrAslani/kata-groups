export interface I18nLocaleInterface {
	en: string;
	fa: string;
}

export interface I18nInterface {
	[key: string]: I18nLocaleInterface;
}

export interface MenuItem  {
    title: string | I18nLocaleInterface;
    path?: string;
    children?: MenuItem[];
};