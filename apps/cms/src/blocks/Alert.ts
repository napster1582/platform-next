import { Block } from 'payload/types';

export const BlockAlert = {
    slug: 'alert',
    labels: {
        singular: 'Alerta',
        plural: 'Alertas',
    },
    fields: [
        {
            type: 'text',
            name: 'title',
            label: 'Título',
            maxLength: 60,
        },
        {
            type: 'textarea',
            name: 'description',
            label: 'Descripción',
            required: true,
        },
        {
            type: 'group',
            name: 'images',
            label: false,
            fields: [
                {
                    type: 'checkbox',
                    name: 'showImages',
                    label: 'Mostrar imágenes',
                    required: true,
                },
                {
                    type: 'array',
                    name: 'images',
                    label: 'Imágenes',
                    labels: {
                        singular: 'Imagen',
                        plural: 'Imágenes',
                    },
                    maxRows: 2,
                    admin: {
                        description: 'Agregar imágenes como parte de la alerta.',
                        condition: (_, siblingData) => siblingData?.showImages,
                    },
                    fields: [
                        {
                            type: 'radio',
                            name: 'position',
                            label: 'Posición',
                            options: [
                                {
                                    label: 'Izquierda',
                                    value: 'left',
                                },
                                {
                                    label: 'Derecha',
                                    value: 'right',
                                },
                            ],
                            defaultValue: 'left',
                            admin: {
                                layout: 'horizontal',
                            },
                        },
                        {
                            type: 'upload',
                            name: 'image',
                            label: false,
                            relationTo: 'media',
                            filterOptions: {
                                mimeType: { contains: 'image' },
                            },
                        },
                    ],
                },
            ],
        },
    ],
} satisfies Block;
