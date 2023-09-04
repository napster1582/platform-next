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
	],
} satisfies Block;
