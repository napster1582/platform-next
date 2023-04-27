import { CollectionConfig } from 'payload/types';
import AboutPage from '../pages/About';
import DicytPage from '../pages/Dicyt';
import HomePage from '../pages/Home';

const Pages: CollectionConfig = {
    slug: 'Pages',
    labels: {
        singular: 'Página',
        plural: 'Páginas',
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
