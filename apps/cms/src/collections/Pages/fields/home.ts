import { Block, Field } from 'payload/types';
import {
    AlertBlock,
    CtaBlock,
    ImageBlock,
    MenuBlock,
    PdfBlock,
    RichtextBlock,
    TimelineBlock,
    VideoBlock,
} from '../../../blocks';

const heroGroupFields: Field[] = [
    {
        name: 'items',
        type: 'array',
        fields: [
            {
                name: 'school',
                type: 'text',
                required: true,
            },
            {
                name: 'title',
                type: 'text',
                required: true,
                maxLength: 60,
            },
            {
                name: 'description',
                type: 'textarea',
                maxLength: 300,
            },
            {
                name: 'background',
                type: 'upload',
                relationTo: 'media',
                filterOptions: {
                    mimeType: { contains: 'image' },
                },
            },
            {
                name: 'previews',
                type: 'group',
                fields: [
                    {
                        name: 'title',
                        type: 'text',
                        maxLength: 20,
                        required: true,
                    },
                    {
                        name: 'background',
                        type: 'upload',
                        relationTo: 'media',
                        filterOptions: {
                            mimeType: { contains: 'image' },
                        },
                    },
                ],
            },
        ],
    },
];

const SectionDimensionsBlock: Block = {
    slug: 'SectionDimensions',
    labels: {
        singular: 'Dimensiones de la educación',
        plural: 'Dimensiones de la educación',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
            maxLength: 60,
        },
        {
            name: 'content',
            type: 'blocks',
            blocks: [RichtextBlock, AlertBlock, CtaBlock, ImageBlock, VideoBlock, PdfBlock],
        },
    ],
};

const SectionSchoolsBlock: Block = {
    slug: 'SectionSchools',
    labels: {
        singular: 'Escuelas de capacitación',
        plural: 'Escuelas de capacitación',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
            maxLength: 60,
        },
        {
            name: 'content',
            type: 'blocks',
            blocks: [RichtextBlock, AlertBlock, CtaBlock, ImageBlock, VideoBlock, PdfBlock],
        },
    ],
};

const SectionScheduleBlock: Block = {
    slug: 'SectionSchedule',
    labels: {
        singular: 'Agenda de eventos académicos y científicos',
        plural: 'Agenda de eventos académicos y científicos',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
            maxLength: 60,
        },
        {
            name: 'content',
            type: 'blocks',
            blocks: [RichtextBlock, AlertBlock, CtaBlock, TimelineBlock],
        },
    ],
};

export const homeFields: Field[] = [
    {
        type: 'tabs',
        label: 'Tabs',
        tabs: [
            {
                label: 'Hero',
                description:
                    'Este tab contiene un carrusel de imágenes que presenta las diferentes escuelas.',
                fields: [
                    {
                        name: 'hero',
                        type: 'group',
                        fields: heroGroupFields,
                    },
                ],
            },
            {
                label: 'Menu',
                description: 'Este tab contiene el menú de navegación principal del sitio.',
                fields: [
                    {
                        name: 'menu',
                        type: 'blocks',
                        unique: true,
                        blocks: [MenuBlock],
                    },
                ],
            },
            {
                label: 'Secciones',
                description:
                    'Esta sección contiene múltiples bloques que conforman diferentes secciones de la página de inicio.',
                fields: [
                    {
                        name: 'sections',
                        type: 'blocks',
                        unique: true,
                        blocks: [SectionDimensionsBlock, SectionSchoolsBlock, SectionScheduleBlock],
                    },
                ],
            },
        ],
    },
];
