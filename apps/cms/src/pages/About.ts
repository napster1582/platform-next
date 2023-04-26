import { Block } from 'payload/types';

const AboutPage: Block = {
    slug: 'about',
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
