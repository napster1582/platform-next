import { Block } from 'payload/types';

const currentYear = new Date().getFullYear();

const TimelineBlock: Block = {
    slug: 'Timeline',
    labels: {
        singular: 'Timeline',
        plural: 'Timelines',
    },
    fields: [
        {
            name: 'years',
            label: 'Años',
            type: 'array',
            fields: [
                {
                    name: 'year',
                    label: 'Año',
                    type: 'number',
                    min: currentYear,
                    max: currentYear + 1,
                    unique: true,
                },
                {
                    name: 'events',
                    label: 'Eventos',
                    type: 'array',
                    fields: [
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
                            required: true,
                            maxLength: 300,
                        },
                        {
                            name: 'month',
                            label: 'Mes',
                            type: 'select',
                            required: true,
                            options: [
                                { label: 'Enero', value: 'January' },
                                { label: 'Febrero', value: 'February' },
                                { label: 'Marzo', value: 'March' },
                                { label: 'Abril', value: 'April' },
                                { label: 'Mayo', value: 'May' },
                                { label: 'Junio', value: 'June' },
                                { label: 'Julio', value: 'July' },
                                { label: 'Agosto', value: 'August' },
                                { label: 'Septiembre', value: 'September' },
                                { label: 'Octubre', value: 'October' },
                                { label: 'Noviembre', value: 'November' },
                                { label: 'Diciembre', value: 'December' },
                            ],
                        },
                        {
                            name: 'status',
                            label: 'Estado',
                            type: 'radio',
                            required: true,
                            options: [
                                { label: 'En Progreso', value: 'ongoing' },
                                { label: 'Pendiente', value: 'pending' },
                                { label: 'Finalizado', value: 'finished' },
                                { label: 'No Finalizado', value: 'unfinished' },
                            ],
                        },
                        {
                            name: 'cta',
                            label: 'Acción',
                            type: 'group',
                            fields: [
                                {
                                    name: 'caption',
                                    label: 'Texto',
                                    type: 'text',
                                    defaultValue: 'Conocer más',
                                    required: true,
                                    maxLength: 20,
                                },
                                {
                                    name: 'href',
                                    label: 'Link',
                                    type: 'text',
                                    required: true,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};

export default TimelineBlock;
