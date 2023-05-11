import { Template } from 'tinacms';

export const RichtextBlock: Template = {
    name: 'richtext',
    label: 'Texto enriquecido',
    fields: [
        {
            name: 'text',
            label: 'Texto',
            type: 'rich-text',
        },
    ],
};
