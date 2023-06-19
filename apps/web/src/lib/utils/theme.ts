import { browser } from '$app/environment';
import { themeStore, type WritableTheme } from '$lib/stores/theme';
import { getItem, setItem } from '$lib/utils/local-storage';

const mediaQuery = browser && window.matchMedia('(prefers-color-scheme: dark)');

/**
 * Start listening for theme changes on user's system preferences
 *
 */
const startListeningForMediaChanges = () => {
    if (browser && mediaQuery) {
        mediaQuery.addEventListener('change', () => {
            if (getCurrentSchema() === 'system') {
                themeStore.update((state) => ({
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

export const setupThemeEvents = () => {
    themeStore.subscribe((state) => {
        if (!browser) return;

        if (state.schema === 'system') {
            startListeningForMediaChanges();
        } else {
            stopListeningForMediaChanges();
        }

        setItem('jinen-theme', state.schema);
    });
};

export const getSystemTheme = (): WritableTheme['schema'] => {
    return mediaQuery && mediaQuery.matches ? 'dark' : 'light';
};

export const getCurrentSchema = (): WritableTheme['schema'] => {
    if (!browser) return 'system';

    return getItem('jinen-theme') || 'system';
};
