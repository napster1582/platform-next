import { Block } from 'payload/types';

export const BlockEmbeddedForm = {
	slug: 'embedded-form',
	labels: {
		singular: 'Formulario embebido',
		plural: 'Formularios embebidos',
	},
	fields: [
		{
			name: 'form',
			type: 'relationship',
			relationTo: 'forms',
			required: true,
		},
	],
} satisfies Block;
