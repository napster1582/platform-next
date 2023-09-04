import { Block } from 'payload/types';

export const BlockMedia = {
	slug: 'media',
	fields: [
		{
			type: 'upload',
			name: 'media',
			label: 'Multimedia',
			relationTo: 'media',
			required: true,
			admin: {
				description:
					'Tamaño máximo de carga de archivo: 12MB. El tamaño recomendado para las imágenes es < 500KB',
			},
		},
		{
			name: 'decoration',
			label: 'Decoración',
			type: 'select',
			options: [
				{
					label: 'Marco simple',
					value: 'simpleFrame',
				},
			],
			admin: {
				description: 'Permite agregar una decoración al recurso multimedia',
			},
		},
	],
} satisfies Block;
