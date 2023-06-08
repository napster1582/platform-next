import deepmerge from 'deepmerge';
import { Field } from 'payload/types';
import { Link } from './Link';

type FieldLinkGroup = (options?: { overrides?: Partial<Field> }) => Field;

export const LinkGroup: FieldLinkGroup = (options) =>
    deepmerge(
        {
            type: 'array',
            name: 'links',
            label: 'Enlaces',
            labels: {
                singular: 'Enlace',
                plural: 'Enlaces',
            },
            admin: {
                components: {
                    RowLabel: ({ data, index }) => {
                        return data?.link?.text || `Enlace ${String(index).padStart(2, '0')}`;
                    },
                },
            },
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
