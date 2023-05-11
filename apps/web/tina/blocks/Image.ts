import { Template } from 'tinacms';

export const ImageBlock: Template = {
    name: 'image',
    label: 'Imagen',
    fields: [
        {
            name: 'image',
            label: 'Imagen',
            type: 'image',
        },
        {
            name: 'alt',
            label: 'Alt (Para lectores de pantalla y SEO)',
            type: 'string',
        },
    ],
};
