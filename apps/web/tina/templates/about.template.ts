import { Template } from 'tinacms';

export const AboutTemplate: Template = {
    name: 'about',
    label: 'About',
    fields: [
        {
            type: 'number',
            name: 'age',
            label: 'Edad',
        },
    ],
};
