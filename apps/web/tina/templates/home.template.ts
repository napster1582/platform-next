import { Template } from 'tinacms';
import { AlertBlock, CtaBlock, ImageBlock, RichtextBlock, TimelineBlock } from '../blocks';

export const HomeTemplate: Template = {
    name: 'home',
    label: 'Inicio',
    fields: [
        {
            name: 'hero',
            label: 'Hero',
            type: 'object',
            list: true,
            fields: [
                {
                    name: 'school',
                    label: 'Escuela',
                    type: 'string',
                    required: true,
                    isTitle: true,
                },
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
                {
                    name: 'background',
                    label: 'Imagen de fondo',
                    type: 'image',
                    required: true,
                },
                {
                    name: 'gallery',
                    label: 'Galería',
                    type: 'object',
                    required: true,
                    list: true,
                    fields: [
                        {
                            name: 'title',
                            label: 'Título',
                            type: 'string',
                            required: true,
                        },
                        {
                            name: 'background',
                            label: 'Imagen de fondo',
                            type: 'image',
                            required: true,
                        },
                    ],
                },
            ],
        },
        {
            name: 'menu',
            label: 'Menú',
            type: 'object',
            list: true,
            fields: [
                {
                    name: 'title',
                    label: 'Título',
                    type: 'string',
                },
                {
                    name: 'background',
                    label: 'Ícono',
                    type: 'image',
                },
                {
                    name: 'description',
                    label: 'Descripción',
                    type: 'string',
                    required: true,
                    isTitle: true,
                },
            ],
        },
        {
            name: 'pageSections',
            label: 'Secciones',
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
                    name: 'content',
                    label: 'Contenido',
                    type: 'object',
                    list: true,
                    ui: {
                        visualSelector: true,
                    },
                    templates: [AlertBlock, ImageBlock, CtaBlock, RichtextBlock, TimelineBlock],
                },
            ],
        },
    ],
};
