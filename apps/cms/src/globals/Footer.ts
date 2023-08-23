import { GlobalConfig } from 'payload/types';
import { FieldLinkGroup } from '../fields/LinkGroup';

export const GlobalFooter = {
	slug: 'footer',
	label: 'Pie de página',
	admin: {
		group: 'Contenido global',
	},
	access: {
		read: () => true,
		update: () => true, // isAdmin,
	},
	fields: [
		{
			type: 'array',
			name: 'logos',
			label: 'Logos',
			labels: {
				singular: 'Logo',
				plural: 'Logos',
			},
			fields: [
				{
					type: 'upload',
					name: 'logo',
					label: 'Logo',
					relationTo: 'media',
					filterOptions: {
						mimeType: { contains: 'image' },
					},
				},
			],
		},
		{
			type: 'array',
			name: 'sections',
			label: 'Secciones',
			labels: {
				singular: 'Sección',
				plural: 'Secciones',
			},
			fields: [
				{
					type: 'group',
					name: 'section',
					label: 'Sección',
					fields: [
						{
							type: 'text',
							name: 'title',
							label: 'Título',
							required: true,
						},
						{
							type: 'radio',
							name: 'layout',
							label: 'Disposición',
							options: [
								{
									label: 'Vertical',
									value: 'vertical',
								},
								{
									label: 'Horizontal',
									value: 'horizontal',
								},
							],
							defaultValue: 'vertical',
						},
						FieldLinkGroup(),
					],
				},
			],
		},
		{
			type: 'group',
			name: 'contact',
			label: 'Contacto',
			fields: [
				{
					name: 'content',
					label: 'Contenido',
					type: 'richText',
					admin: {
						elements: ['ol', 'ul', 'link'],
					},
				},
			],
		},
	],
} satisfies GlobalConfig;
