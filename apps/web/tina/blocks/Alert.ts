import { Template } from 'tinacms';

export const AlertBlock: Template = {
    name: 'alert',
    label: 'Alerta',
    fields: [
        {
            name: 'image',
            label: 'Imagen',
            type: 'image',
        },
        {
            name: 'title',
            label: 'Título',
            type: 'string',
        },
        {
            name: 'description',
            label: 'Descripción',
            type: 'rich-text',
        },
    ],
};
