import deepmerge from 'deepmerge';
import { Field } from 'payload/types';
import { FieldLink } from './Link';

type CustomField = (options?: { overrides?: Partial<Field> }) => Field;

export const FieldLinkGroup: CustomField = (options) =>
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
                    RowLabel: ({ data, index }: any) => {
                        return data?.link?.text || `Enlace ${String(index).padStart(2, '0')}`;
                    },
                },
            },
            fields: [
                FieldLink({
                    overrides: {
                        label: false,
                    },
                }),
            ],
        },
        options?.overrides ?? {},
    );
