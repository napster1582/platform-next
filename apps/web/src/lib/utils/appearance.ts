import { browser } from '$app/environment';
import { appearanceStore, type WritableAppearance } from '$lib/stores/appearance';
import { getItem, setItem } from '$lib/utils/local-storage';

const DEFAULT_THEME: WritableAppearance['theme'] = 'system';
const DEFAULT_PRIMARY_COLOR: WritableAppearance['primaryColor'] = 'blue';
const DEFAULT_FONT_SIZE: WritableAppearance['fontSize'] = 'md';
const DEFAULT_BORDER_RADIUS: WritableAppearance['borderRadius'] = 'lg';

const mediaQuery = browser && window.matchMedia('(prefers-color-scheme: dark)');

/**
 * Start listening for theme changes on user's system preferences
 *
 */
const startListeningForMediaChanges = () => {
    if (browser && mediaQuery) {
        mediaQuery.addEventListener('change', () => {
            if (getCurrentTheme() === 'system') {
                appearanceStore.update((state) => ({
                    ...state,
                    schema: 'system',
                }));
            }
        });
    }
};

/**
 * Stop listening for theme changes on user's system preferences
 *
 */
const stopListeningForMediaChanges = () => {
    if (browser && mediaQuery) {
        mediaQuery.removeEventListener('change', startListeningForMediaChanges);
    }
};

export const setupAppearanceEvents = () => {
    appearanceStore.subscribe((state) => {
        if (!browser) return;

        if (state.theme === 'system') {
            startListeningForMediaChanges();
        } else {
            stopListeningForMediaChanges();
        }

        setItem('jinenAppearanceTheme', state.theme);
        setItem('jinenAppearancePrimaryColor', state.primaryColor);
        setItem('jinenAppearanceFontSize', state.fontSize);
        setItem('jinenAppearanceBorderRadius', state.borderRadius);
    });
};

export const getSystemTheme = (): WritableAppearance['theme'] => {
    return mediaQuery && mediaQuery.matches ? 'dark' : 'light';
};

export const getCurrentTheme = (): WritableAppearance['theme'] => {
    if (!browser) return DEFAULT_THEME;

    return getItem('jinenAppearanceTheme') || DEFAULT_THEME;
};

export const getCurrentPrimaryColor = (): WritableAppearance['primaryColor'] => {
    if (!browser) return DEFAULT_PRIMARY_COLOR;

    return getItem('jinenAppearancePrimaryColor') || DEFAULT_PRIMARY_COLOR;
};

export const getCurrentFontSize = (): WritableAppearance['fontSize'] => {
    if (!browser) return DEFAULT_FONT_SIZE;

    return getItem('jinenAppearanceFontSize') || DEFAULT_FONT_SIZE;
};

export const getCurrentBorderRadius = (): WritableAppearance['borderRadius'] => {
    if (!browser) return DEFAULT_BORDER_RADIUS;

    return getItem('jinenAppearanceBorderRadius') || DEFAULT_BORDER_RADIUS;
};

export const resetToDefaults = () => {
    if (!browser) return;

    appearanceStore.set({
        theme: DEFAULT_THEME,
        primaryColor: DEFAULT_PRIMARY_COLOR,
        fontSize: DEFAULT_FONT_SIZE,
        borderRadius: DEFAULT_BORDER_RADIUS,
    });
};
