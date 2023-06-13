import deepmerge from 'deepmerge';
import { Field } from 'payload/types';

type CustomField = (options?: { overrides?: Partial<Field> }) => Field;

export const FieldLink: CustomField = (options) =>
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
                            label: 'Ícono',
                            value: 'icon',
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
                    type: 'text',
                    name: 'text',
                    label: 'Texto a mostrar',
                    required: true,
                    admin: {
                        condition: (_: unknown, siblingData: Record<string, unknown>) =>
                            siblingData?.appearance !== 'icon',
                    },
                },
                {
                    type: 'row',
                    fields: [
                        {
                            type: 'checkbox',
                            name: 'showIcon',
                            label: 'Mostrar ícono',
                            required: true,
                            admin: {
                                condition: (_: unknown, siblingData: Record<string, unknown>) =>
                                    siblingData?.appearance !== 'icon',
                            },
                        },
                        {
                            type: 'text',
                            name: 'icon',
                            label: 'Ícono',
                            required: true,
                            admin: {
                                condition: (_: unknown, siblingData: Record<string, unknown>) =>
                                    siblingData?.appearance === 'icon' || siblingData?.showIcon,
                            },
                        },
                    ],
                },
                {
                    type: 'row',
                    fields: [
                        {
                            type: 'relationship',
                            name: 'internalLinkReference',
                            label: 'Referencia de navegación',
                            relationTo: ['pages'],
                            required: true,
                            maxDepth: 1,
                            admin: {
                                condition: (_: unknown, siblingData: Record<string, unknown>) =>
                                    siblingData?.type === 'internal',
                            },
                        },
                        {
                            type: 'text',
                            name: 'externalLink',
                            label: 'URL',
                            required: true,
                            admin: {
                                condition: (_: unknown, siblingData: Record<string, unknown>) =>
                                    siblingData?.type === 'external',
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
