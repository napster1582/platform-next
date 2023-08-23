import { GlobalConfig } from 'payload/types';
import { FieldLink } from '../fields/Link';
import { FieldLinkGroup } from '../fields/LinkGroup';

export const GlobalHeader = {
	slug: 'header',
	label: 'Encabezado',
	admin: {
		group: 'Contenido global',
	},
	access: {
		read: () => true,
		update: () => true, // isAdmin,
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
		{
			type: 'array',
			name: 'navbar',
			label: 'Elementos de navegación',
			labels: {
				singular: 'elemento de navegación',
				plural: 'elementos de navegación',
			},
			admin: {
				components: {
					/* eslint-disable  @typescript-eslint/no-explicit-any */
					RowLabel: ({ data }: any) => {
						return data?.link?.text || data?.link?.icon;
					},
				},
			},
			fields: [FieldLink(), FieldLinkGroup()],
		},
	],
} satisfies GlobalConfig;
