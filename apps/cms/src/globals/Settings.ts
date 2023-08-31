import { GlobalConfig } from 'payload/types';
import { FieldColor } from '../components/ColorPicker/config';

export const GlobalAppearance = {
	slug: 'appearance',
	label: 'Apariencia',
	admin: {
		group: 'Contenido global',
	},
	access: {
		read: () => true,
		update: () => true, // isAdmin,
	},
	fields: [
		FieldColor(),
		{
			type: 'radio',
			name: 'borderRadius',
			label: 'Radio de los bordes',
			options: [
				{
					label: 'Sin radio',
					value: 'none',
				},
				{
					label: 'sm',
					value: 'sm',
				},
				{
					label: 'md',
					value: 'md',
				},
				{
					label: 'lg',
					value: 'lg',
				},
				{
					label: 'xl',
					value: 'xl',
				},
				{
					label: '2xl',
					value: '2xl',
				},
				{
					label: '3xl',
					value: '3xl',
				},
				{
					label: '100%',
					value: 'full',
				},
			],
			defaultValue: 'lg',
		},
	],
} satisfies GlobalConfig;
