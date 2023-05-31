import { Block } from 'payload/types';
import { RichText } from '../fields';

export const EmbeddedForm: Block = {
    slug: 'embeddedForm',
    labels: {
        singular: 'Formulario embebido',
        plural: 'Formularios embebidos',
    },
    fields: [
        RichText(),
        {
            name: 'form',
            type: 'relationship',
            relationTo: 'forms',
            required: true,
        },
    ],
};
