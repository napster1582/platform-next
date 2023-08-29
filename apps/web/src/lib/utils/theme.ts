import { browser } from '$app/environment';
import {
	defaultThemeValues,
	type ThemeColor,
	type ThemeFontSize,
	type ThemeMode,
	type ThemeRadius,
} from '$lib/types/theme';
import { getItem, setItem } from './local-storage';

const THEME_MODE_KEY = 'jinenThemeMode';
const THEME_COLOR_KEY = 'jinenThemeColor';
const THEME_FONT_SIZE_KEY = 'jinenThemeFontSize';
const THEME_RADIUS_KEY = 'jinenThemeRadius';

export function getThemeMode(): ThemeMode {
	if (!browser) return 'system';

	return getItem(THEME_MODE_KEY) ?? 'system';
}

export function setThemeMode(mode: ThemeMode) {
	if (!browser) return;

	document.documentElement.classList.remove('system', 'dark', 'light');
	document.documentElement.classList.add(
		mode === 'system'
			? window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light'
			: mode,
	);

	setItem(THEME_MODE_KEY, mode);
}

export function getThemeColor(): ThemeColor {
	if (!browser) return 'blue';

	return getItem(THEME_COLOR_KEY) ?? 'blue';
}

export function setThemeColor(color: ThemeColor) {
	if (!browser) return;

	document.documentElement.setAttribute('data-theme-color', color);
	setItem(THEME_COLOR_KEY, color);
}

export function getThemeFontSize(): ThemeFontSize {
	if (!browser) return 'md';

	return getItem(THEME_FONT_SIZE_KEY) ?? 'md';
}

export function setThemeFontSize(size: ThemeFontSize) {
	if (!browser) return;

	document.documentElement.setAttribute('data-theme-font-size', size);
	localStorage.setItem(THEME_FONT_SIZE_KEY, size);
}

export function getThemeRadius(): ThemeRadius {
	if (!browser) return 'lg';

	return getItem(THEME_RADIUS_KEY) ?? 'lg';
}

export function setThemeRadius(radius: ThemeRadius) {
	if (!browser) return;

	document.documentElement.setAttribute('data-theme-radius', radius);
	localStorage.setItem(THEME_RADIUS_KEY, radius);
}

export function resetTheme() {
	const { mode, color, fontSize, radius } = defaultThemeValues();

	setThemeMode(mode);
	setThemeColor(color);
	setThemeFontSize(fontSize);
	setThemeRadius(radius);
}
