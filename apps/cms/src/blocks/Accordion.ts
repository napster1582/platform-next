import { Block } from 'payload/types';

export const BlockAccordion = {
	slug: 'accordion',
	labels: {
		singular: 'Acordeón',
		plural: 'Acordeones',
	},
	fields: [
		{
			type: 'array',
			name: 'items',
			label: 'Elementos',
			labels: {
				singular: 'elemento',
				plural: 'elementos',
			},
			admin: {
				components: {
					/* eslint-disable  @typescript-eslint/no-explicit-any */
					RowLabel: ({ data }: any) => {
						return data?.title;
					},
				},
			},
			minRows: 1,
			fields: [
				{
					type: 'text',
					name: 'title',
					label: 'Título',
				},
				{
					type: 'richText',
					name: 'content',
					label: 'Contenido',
				},
				{
					type: 'checkbox',
					name: 'expanded',
					label: 'Expandido',
				},
			],
		},
	],
} satisfies Block;
