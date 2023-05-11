import { Collection } from 'tinacms';
import { HomeTemplate } from '../templates';
import { AboutTemplate } from '../templates/about.template';

export const Pages: Collection = {
    name: 'pages',
    label: 'Páginas',
    path: 'content/pages',
    ui: {
        router: ({ document }) => {
            if (document._sys.filename === 'home') {
                return `/`;
            }

            if (document._sys.filename === 'about') {
                return `/about`;
            }

            return undefined;
        },
    },
    templates: [HomeTemplate, AboutTemplate],
};
