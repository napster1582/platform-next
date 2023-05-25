import deepmerge from 'deepmerge';
import { Field } from 'payload/types';

type FieldLink = (options?: { overrides?: Partial<Field> }) => Field;

export const Link: FieldLink = (options) =>
    deepmerge(
        {
            name: 'link',
            label: 'Enlace',
            type: 'group',
            fields: [
                {
                    name: 'appearance',
                    label: 'Apariencia',
                    type: 'select',
                    options: [
                        {
                            label: 'Texto',
                            value: 'text',
                        },
                        {
                            label: 'CTA',
                            value: 'cta',
                        },
                        {
                            label: 'Botón primario',
                            value: 'primaryButton',
                        },
                        {
                            label: 'Botón secundario',
                            value: 'secondaryButton',
                        },
                    ],
                    defaultValue: 'text',
                },
                {
                    name: 'type',
                    label: 'Tipo',
                    type: 'radio',
                    options: [
                        {
                            label: 'Interno',
                            value: 'internal',
                        },
                        {
                            label: 'Externo',
                            value: 'external',
                        },
                    ],
                    defaultValue: 'internal',
                    admin: {
                        layout: 'horizontal',
                    },
                },
                {
                    type: 'row',
                    fields: [
                        {
                            name: 'text',
                            label: 'Texto',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'internalLinkReference',
                            label: 'Referencia de navegación',
                            type: 'relationship',
                            relationTo: ['pages'],
                            required: true,
                            maxDepth: 1,
                            admin: {
                                condition: (_, siblingData) => siblingData?.type === 'internal',
                            },
                        },
                        {
                            name: 'externalLink',
                            label: 'URL',
                            type: 'text',
                            required: true,
                            admin: {
                                condition: (_, siblingData) => siblingData?.type === 'external',
                            },
                        },
                    ],
                },
                {
                    name: 'newTab',
                    label: 'Abrir en una nueva pestaña',
                    type: 'checkbox',
                },
            ],
        },
        options?.overrides ?? {},
    );
