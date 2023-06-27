import {
    getCurrentBorderRadius,
    getCurrentFontSize,
    getCurrentPrimaryColor,
    getCurrentTheme,
} from '$lib/utils/appearance';
import { writable } from 'svelte/store';

export type WritableAppearance = {
    theme: 'system' | 'light' | 'dark';
    primaryColor: 'blue' | 'green' | 'red' | 'yellow' | 'purple';
    fontSize: 'sm' | 'md' | 'lg';
    borderRadius: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
};

export const appearanceStore = writable<WritableAppearance>({
    theme: getCurrentTheme(),
    primaryColor: getCurrentPrimaryColor(),
    fontSize: getCurrentFontSize(),
    borderRadius: getCurrentBorderRadius(),
});
