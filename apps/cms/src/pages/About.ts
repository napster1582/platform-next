import { Block } from 'payload/types';

const AboutPage: Block = {
    slug: 'About',
    labels: {
        singular: 'Función',
        plural: 'Funciones',
    },
    fields: [
        {
            name: 'prueba',
            label: 'Prueba',
            type: 'text',
        },
    ],
};

export default AboutPage;
