import { Block } from 'payload/types';
import { LinkGroup } from '../fields/LinkGroup';

export const Content: Block = {
    slug: 'content',
    labels: {
        singular: 'Bloque de contenido',
        plural: 'Bloques de contenido',
    },
    fields: [
        {
            name: 'columns',
            type: 'array',
            minRows: 1,
            label: 'Columnas',
            labels: {
                singular: 'Columna',
                plural: 'Columnas',
            },
            fields: [
                {
                    type: 'row',
                    fields: [
                        {
                            name: 'width',
                            label: 'Ancho de la columna (porcentaje)',
                            type: 'select',
                            defaultValue: '1',
                            required: true,
                            options: [
                                {
                                    label: '1 | 100%',
                                    value: '1',
                                },
                                {
                                    label: '2 | 91.67%',
                                    value: '2',
                                },
                                {
                                    label: '3 | 83.33%',
                                    value: '3',
                                },
                                {
                                    label: '4 | 75%',
                                    value: '4',
                                },
                                {
                                    label: '5 | 66.67%',
                                    value: '5',
                                },
                                {
                                    label: '6 | 58.33%',
                                    value: '6',
                                },
                                {
                                    label: '7 | 50%',
                                    value: '7',
                                },
                                {
                                    label: '8 | 41.67%',
                                    value: '8',
                                },
                                {
                                    label: '9 | 33.33%',
                                    value: '9',
                                },
                                {
                                    label: '10 | 25%',
                                    value: '10',
                                },
                                {
                                    label: '11 | 16.67%',
                                    value: '11',
                                },
                                {
                                    label: '12 | 8.33%',
                                    value: '12',
                                },
                            ],
                        },
                        {
                            name: 'alignment',
                            label: 'Alineación',
                            type: 'select',
                            defaultValue: 'left',
                            required: true,
                            options: [
                                {
                                    label: 'Izquierda',
                                    value: 'left',
                                },
                                {
                                    label: 'Centro',
                                    value: 'center',
                                },
                                {
                                    label: 'Derecha',
                                    value: 'right',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'richText',
                    label: 'Texto enriquecido',
                    type: 'richText',
                },
                LinkGroup(),
            ],
        },
    ],
};

export default Content;
