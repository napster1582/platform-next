import { Collection } from 'tinacms';
import { HomeTemplate } from '../templates';
import { AboutTemplate } from '../templates/about.template';

export const Pages: Collection = {
    name: 'pages',
    label: 'Páginas',
    path: 'content/pages',
    templates: [HomeTemplate, AboutTemplate],
};
