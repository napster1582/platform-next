import { writable } from 'svelte/store';

export const dom = writable({
    showHeader: false,
    showMenu: false,
    showFooter: false,
});
