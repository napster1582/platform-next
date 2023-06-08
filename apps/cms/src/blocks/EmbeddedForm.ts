import { Block } from 'payload/types';

export const EmbeddedForm: Block = {
    slug: 'embedded-form',
    labels: {
        singular: 'Formulario embebido',
        plural: 'Formularios embebidos',
    },
    fields: [
        {
            name: 'form',
            type: 'relationship',
            relationTo: 'forms',
            required: true,
        },
    ],
};
