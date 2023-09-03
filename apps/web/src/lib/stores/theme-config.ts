import { browser } from '$app/environment';
import { persisted } from 'svelte-local-storage-store';

export type ThemeConfig = {
	color: 'zinc' | 'stone' | 'blue' | 'violet' | 'green' | 'yellow' | 'orange' | 'red' | 'rose';
	fontSize: 'sm' | 'md' | 'lg';
	radius: '0' | '0.3' | '0.5' | '0.75' | '1.0';
	mode: 'system' | 'light' | 'dark';
};

export const defaultThemeConfig: ThemeConfig = {
	color: 'blue',
	fontSize: 'md',
	radius: '0.5',
	mode: 'system',
};

export const themeConfig = persisted<ThemeConfig>('themeConfig', defaultThemeConfig);

themeConfig.subscribe(({ color, fontSize, radius, mode }) => {
	if (browser) {
		document.documentElement.setAttribute('data-theme-color', color);
		document.documentElement.setAttribute('data-theme-font-size', fontSize);
		document.documentElement.setAttribute('data-theme-radius', radius);

		document.documentElement.classList.remove('system', 'dark', 'light');
		document.documentElement.classList.add(
			mode === 'system'
				? window.matchMedia('(prefers-color-scheme: dark)').matches
					? 'dark'
					: 'light'
				: mode,
		);
	}
});
