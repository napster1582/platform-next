import { Template } from 'tinacms';

export const CtaBlock: Template = {
    name: 'cta',
    label: 'CTA',
    fields: [
        {
            name: 'label',
            label: 'Etiqueta',
            type: 'string',
        },
        {
            name: 'caption',
            label: 'Texto',
            type: 'string',
            required: true,
        },
        {
            name: 'href',
            label: 'Link',
            type: 'string',
            required: true,
        },
    ],
};
