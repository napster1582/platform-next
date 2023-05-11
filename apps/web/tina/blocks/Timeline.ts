import { Template } from 'tinacms';

export const TimelineBlock: Template = {
    name: 'timeline',
    label: 'Timeline',
    fields: [
        {
            name: 'years',
            label: 'Años',
            type: 'object',
            list: true,
            fields: [
                {
                    name: 'year',
                    label: 'Año',
                    type: 'number',
                    required: true,
                },
                {
                    name: 'events',
                    label: 'Eventos',
                    type: 'object',
                    list: true,
                    fields: [
                        {
                            name: 'title',
                            label: 'Título',
                            type: 'string',
                            required: true,
                        },
                        {
                            name: 'description',
                            label: 'Descripción',
                            type: 'rich-text',
                            required: true,
                        },
                        // {
                        //     name: 'month',
                        //     label: 'Mes',
                        //     type: '',
                        //     required: true,
                        //     options: [
                        //         { label: 'Enero', value: 'January' },
                        //         { label: 'Febrero', value: 'February' },
                        //         { label: 'Marzo', value: 'March' },
                        //         { label: 'Abril', value: 'April' },
                        //         { label: 'Mayo', value: 'May' },
                        //         { label: 'Junio', value: 'June' },
                        //         { label: 'Julio', value: 'July' },
                        //         { label: 'Agosto', value: 'August' },
                        //         { label: 'Septiembre', value: 'September' },
                        //         { label: 'Octubre', value: 'October' },
                        //         { label: 'Noviembre', value: 'November' },
                        //         { label: 'Diciembre', value: 'December' },
                        //     ],
                        // },
                        // {
                        //     name: 'status',
                        //     label: 'Estado',
                        //     type: 'radio',
                        //     required: true,
                        //     options: [
                        //         { label: 'En Progreso', value: 'ongoing' },
                        //         { label: 'Pendiente', value: 'pending' },
                        //         { label: 'Finalizado', value: 'finished' },
                        //         { label: 'No Finalizado', value: 'unfinished' },
                        //     ],
                        // },
                        {
                            name: 'href',
                            label: 'Link',
                            type: 'object',
                            fields: [
                                {
                                    name: 'caption',
                                    label: 'Texto',
                                    type: 'string',
                                    required: true,
                                },
                                {
                                    name: 'href',
                                    label: 'Link',
                                    type: 'string',
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
