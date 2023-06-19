import { getCurrentSchema } from '$lib/utils/theme';
import { writable } from 'svelte/store';

export type WritableTheme = {
    schema: 'system' | 'light' | 'dark';
};

console.log('------------------>', getCurrentSchema());

export const themeStore = writable<WritableTheme>({
    schema: getCurrentSchema(),
});
