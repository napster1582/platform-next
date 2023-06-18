import { ResourceSize } from '@jinen/annotations';
import { LinkAppearance, LinkType } from '@jinen/cms-annotations';
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
                            label: 'Inferido',
                            value: LinkAppearance.Inferred,
                        },
                        {
                            label: 'Texto',
                            value: LinkAppearance.Text,
                        },
                        {
                            label: 'CTA',
                            value: LinkAppearance.Cta,
                        },
                        {
                            label: 'Botón primario',
                            value: LinkAppearance.PrimaryButton,
                        },
                        {
                            label: 'Botón secundario',
                            value: LinkAppearance.SecondaryButton,
                        },
                    ],
                    defaultValue: LinkAppearance.Text,
                },
                {
                    type: 'radio',
                    name: 'type',
                    label: 'Tipo',
                    options: [
                        {
                            label: 'Enlace interno',
                            value: LinkType.Internal,
                        },
                        {
                            label: 'URL personalizada',
                            value: LinkType.External,
                        },
                    ],
                    defaultValue: LinkType.Internal,
                    admin: {
                        layout: 'horizontal',
                    },
                },
                {
                    type: 'text',
                    name: 'text',
                    label: 'Texto a mostrar',
                },
                {
                    type: 'checkbox',
                    name: 'showIcon',
                    label: 'Mostrar ícono',
                    required: true,
                    defaultValue: false,
                },
                {
                    type: 'row',
                    fields: [
                        {
                            type: 'text',
                            name: 'icon',
                            label: 'Ícono',
                            required: true,
                            admin: {
                                condition: (_: unknown, siblingData: Record<string, unknown>) => siblingData?.showIcon,
                                description: 'https://icones.js.org/'
                            },
                        },
                        {
                            type: 'select',
                            name: 'iconSize',
                            label: 'Tamaño del ícono',
                            options: Object.values(ResourceSize).map((value) => value),
                            defaultValue: ResourceSize.Md,
                            admin: {
                                condition: (_: unknown, siblingData: Record<string, unknown>) => siblingData?.showIcon,
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
                    name: 'openInNewTab',
                    label: 'Abrir en nueva pestaña',
                    defaultValue: false
                },
            ],
        },
        options?.overrides ?? {},
    );
