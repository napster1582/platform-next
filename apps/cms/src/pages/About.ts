import { Block } from 'payload/types';

const AboutPage: Block = {
    slug: 'About',
    labels: {
        singular: 'Función',
        plural: 'Funciones',
    },
    fields: [
        {
            name: 'lorem',
            type: 'text',
        },
    ],
};

export default AboutPage;
