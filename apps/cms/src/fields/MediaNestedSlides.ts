import deepmerge from 'deepmerge';
import { Field } from 'payload/types';
import { Link } from './Link';

type FieldMediaNestedSlides = (options?: { overrides?: Partial<Field> }) => Field;

export const MediaNestedSlides: FieldMediaNestedSlides = (options) =>
    deepmerge(
        {
            name: 'mediaNestedSlides',
            label: false,
            type: 'group',
            fields: [
                {
                    name: 'items',
                    label: 'Elementos',
                    labels: {
                        singular: 'Elemento',
                        plural: 'Elementos',
                    },
                    type: 'array',
                    minRows: 1,
                    admin: {
                        initCollapsed: true,
                        components: {
                            RowLabel: ({ data }) => {
                                return `[${data?.indicator}] ${data?.title}`;
                            },
                        },
                    },
                    fields: [
                        {
                            name: 'indicator',
                            label: 'Indicador',
                            type: 'text',
                            required: true,
                            maxLength: 10,
                        },
                        {
                            name: 'title',
                            label: 'Título',
                            type: 'text',
                            required: true,
                            maxLength: 60,
                        },
                        {
                            name: 'description',
                            label: 'Descripción',
                            type: 'textarea',
                        },
                        {
                            name: 'background',
                            label: 'Imagen de fondo',
                            type: 'upload',
                            relationTo: 'media',
                            filterOptions: {
                                mimeType: { contains: 'image' },
                            },
                        },
                        {
                            name: 'show',
                            label: 'Mostrar enlace',
                            type: 'checkbox',
                        },
                        Link({
                            overrides: {
                                admin: {
                                    condition: (_, siblingData) => siblingData?.show,
                                },
                            },
                        }),
                        {
                            type: 'array',
                            name: 'previews',
                            label: 'Vistas previas',
                            labels: {
                                singular: 'Vista previa',
                                plural: 'Vistas previas',
                            },
                            fields: [
                                {
                                    name: 'title',
                                    label: 'Título',
                                    type: 'text',
                                    maxLength: 20,
                                    required: true,
                                },
                                {
                                    name: 'background',
                                    label: 'Imagen de fondo',
                                    type: 'upload',
                                    relationTo: 'media',
                                    filterOptions: {
                                        mimeType: { contains: 'image' },
                                    },
                                    required: true,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        options?.overrides ?? {},
    );
