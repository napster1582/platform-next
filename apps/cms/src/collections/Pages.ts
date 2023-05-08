import { CollectionConfig } from 'payload/types';
import AboutPage from '../pages/About';
import DicytPage from '../pages/Dicyt';
import HomePage from '../pages/Home';

const Pages: CollectionConfig = {
    slug: 'pages',
    labels: {
        singular: 'Page',
        plural: 'Pages',
    },
    admin: {
        useAsTitle: 'someField',
    },
    fields: [
        {
            name: 'pages',
            label: 'Páginas',
            type: 'blocks',
            blocks: [HomePage, AboutPage, DicytPage],
        },
    ],
};

export default Pages;
