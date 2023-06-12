import { Block } from 'payload/types';

export const BlockEmbeddedForm: Block = {
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
} satisfies Block;

export type BlockEmbeddedFormType = typeof BlockEmbeddedForm;
