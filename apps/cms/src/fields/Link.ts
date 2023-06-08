import deepmerge from 'deepmerge';
import { Field } from 'payload/types';

type FieldLink = (options?: { overrides?: Partial<Field> }) => Field;

export const Link: FieldLink = (options) =>
    deepmerge(
        {
            type: 'group',
            name: 'link',
            label: 'Enlace',
            fields: [
                {
                    type: 'select',
                    name: 'appearance',
                    label: 'Apariencia',
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
                    type: 'radio',
                    name: 'type',
                    label: 'Tipo',
                    options: [
                        {
                            label: 'Enlace interno',
                            value: 'internal',
                        },
                        {
                            label: 'URL personalizada',
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
                            type: 'text',
                            name: 'text',
                            label: 'Texto a mostrar',
                            required: true,
                        },
                        {
                            type: 'relationship',
                            name: 'internalLinkReference',
                            label: 'Referencia de navegación',
                            relationTo: ['pages'],
                            required: true,
                            maxDepth: 1,
                            admin: {
                                condition: (_, siblingData) => siblingData?.type === 'internal',
                            },
                        },
                        {
                            type: 'text',
                            name: 'externalLink',
                            label: 'URL',
                            required: true,
                            admin: {
                                condition: (_, siblingData) => siblingData?.type === 'external',
                            },
                        },
                    ],
                },
                {
                    type: 'checkbox',
                    name: 'newTab',
                    label: 'Abrir en nueva pestaña',
                },
            ],
        },
        options?.overrides ?? {},
    );
