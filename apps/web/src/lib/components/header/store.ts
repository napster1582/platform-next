import { writable } from 'svelte/store';

export type NavbarItem = {
    name: string;
    styling: 'link' | 'button';
    link?: string;
    icon?: string;
    children?: Omit<NavbarItem, 'children' | 'styling'>[];
};

export const navbarItems = writable<NavbarItem[]>([
    {
        name: 'Inicio',
        styling: 'link',
        link: '/',
    },
    {
        name: 'Conózcanos',
        styling: 'link',
        children: [
            { name: 'Función', link: 'about' },
            { name: 'Jefe de la Jefatura', link: '#' },
            { name: 'Organización', link: '#' },
            { name: 'DIEDU', link: 'diedu' },
            { name: 'DICYT', link: 'dicyt' },
            { name: 'DIHIN', link: 'dihin' },
            { name: 'ANEES', link: 'anees' },
            { name: 'OPLAE', link: 'oplae' },
        ],
    },
    {
        name: 'Ingresar',
        styling: 'button',
        link: '#',
        icon: 'icon-[solar--login-2-bold-duotone]',
    },
]);
