const THEME_MODE_KEY = 'jinenThemeMode';
const THEME_COLOR_KEY = 'jinenThemeColor';
const THEME_FONT_SIZE_KEY = 'jinenThemeFontSize';
const THEME_RADIUS_KEY = 'jinenThemeRadius';

const DEFAULT_COLOR = 'blue';
const DEFAULT_FONT_SIZE = 'md';
const DEFAULT_RADIUS = 'lg';

function handleLocalStorage({ key, defaultValue }) {
	const storedValue = localStorage.getItem(key);

	if (!storedValue) {
		localStorage.setItem(key, defaultValue);
		return defaultValue;
	}

	return storedValue;
}

const mode = handleLocalStorage({
	key: THEME_MODE_KEY,
	defaultValue: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
});
document.documentElement.classList.add(mode);

const color = handleLocalStorage({
	key: THEME_COLOR_KEY,
	defaultValue: DEFAULT_COLOR,
});
document.documentElement.setAttribute('data-theme-color', color);

const fontSize = handleLocalStorage({
	key: THEME_FONT_SIZE_KEY,
	defaultValue: DEFAULT_FONT_SIZE,
});
document.documentElement.setAttribute('data-theme-font-size', fontSize);

const radius = handleLocalStorage({
	key: THEME_RADIUS_KEY,
	defaultValue: DEFAULT_RADIUS,
});
document.documentElement.setAttribute('data-theme-radius', radius);
