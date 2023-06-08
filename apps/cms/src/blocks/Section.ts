import { Block } from 'payload/types';
import { Alert } from './Alert';
import { Content } from './Content';
import { EmbeddedEvents } from './EmbeddedEvents';
import { EmbeddedForm } from './EmbeddedForm';
import { Link } from './Link';
import { LinkGroup } from './LinkGroup';
import { Media } from './Media';

export const Section: Block = {
    slug: 'section',
    labels: {
        singular: 'Sección',
        plural: 'Secciones',
    },
    fields: [
        {
            type: 'array',
            name: 'columns',
            label: 'Columnas',
            labels: {
                singular: 'columna',
                plural: 'columnas',
            },
            admin: {
                components: {
                    RowLabel: ({ data }) => {
                        return `Columna - Ancho: ${data?.width ?? '12'}`;
                    },
                },
            },
            minRows: 1,
            fields: [
                {
                    name: 'width',
                    label: 'Expansión de la columna',
                    type: 'select',
                    defaultValue: '12',
                    options: [
                        {
                            label: '12 - 100%',
                            value: '12',
                        },
                        {
                            label: '11 - 91.67%',
                            value: '11',
                        },
                        {
                            label: '10 - 83.33%',
                            value: '10',
                        },
                        {
                            label: '9 - 75%',
                            value: '9',
                        },
                        {
                            label: '8 - 66.67%',
                            value: '8',
                        },
                        {
                            label: '7 - 58.33%',
                            value: '7',
                        },
                        {
                            label: '6 - 50%',
                            value: '6',
                        },
                        {
                            label: '5 - 41.67%',
                            value: '5',
                        },
                        {
                            label: '4 - 33.33%',
                            value: '4',
                        },
                        {
                            label: '3 - 25%',
                            value: '3',
                        },
                        {
                            label: '2 - 16.67%',
                            value: '2',
                        },
                        {
                            label: '1 - 8.33%',
                            value: '1',
                        },
                    ],
                },
                {
                    type: 'blocks',
                    name: 'blocks',
                    label: 'Bloques',
                    labels: {
                        singular: 'bloque',
                        plural: 'bloques',
                    },
                    blocks: [Alert, Content, Media, Link, LinkGroup, EmbeddedForm, EmbeddedEvents],
                },
            ],
        },
    ],
};
