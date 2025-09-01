export interface I18nLocaleInterface {
	en: string;
	fa: string;
}

export interface I18nInterface {
	[key: string]: I18nLocaleInterface;
}
