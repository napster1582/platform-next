function handleLocalStorage({ key }) {
	let themeConfig = localStorage.getItem('themeConfig');

	if (!themeConfig) {
		const defaultConfig = {
			fontSize: 'md',
			color: 'blue',
			radius: 0.5,
			mode: 'system',
		};
		localStorage.setItem('themeConfig', JSON.stringify(defaultConfig));
		return defaultConfig[key];
	}

	return JSON.parse(themeConfig)[key];
}

const fontSize = handleLocalStorage({ key: 'fontSize' });
document.documentElement.setAttribute('data-theme-font-size', fontSize);

const color = handleLocalStorage({ key: 'color' });
document.documentElement.setAttribute('data-theme-color', color);

const radius = handleLocalStorage({ key: 'radius' });
document.documentElement.setAttribute('data-theme-radius', radius);

const mode = handleLocalStorage({ key: 'mode' });
document.documentElement.classList.add(
	mode === 'system' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : mode,
);
