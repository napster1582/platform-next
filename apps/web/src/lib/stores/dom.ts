import { writable } from 'svelte/store';

export const domStore = writable({
    showHeader: false,
    showMenu: false,
    showFooter: false,
});
