import deepmerge from 'deepmerge';
import { Field } from 'payload/types';
import { Link } from './Link';

type FieldLinkGroup = (options?: { overrides?: Partial<Field> }) => Field;

export const LinkGroup: FieldLinkGroup = (options) =>
    deepmerge(
        {
            name: 'links',
            label: 'Enlaces',
            labels: {
                singular: 'Enlace',
                plural: 'Enlaces',
            },
            type: 'array',
            fields: [
                Link({
                    overrides: {
                        label: false,
                    },
                }),
            ],
        },
        options?.overrides ?? {},
    );
