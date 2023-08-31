import deepmerge from 'deepmerge';
import { Field } from 'payload/types';

type CustomField = (options?: { overrides?: Partial<Field> }) => Field;

export const FieldAspectRatio: CustomField = (options) =>
	deepmerge(
		{
			name: 'aspectRatio',
			label: 'Relación de aspecto',
			type: 'select',
			defaultValue: '56.25',
			options: [
				{
					label: '16:9',
					value: '56.25',
				},
				{
					label: '4:5',
					value: '75',
				},
			],
		},
		options?.overrides ?? {},
	);
