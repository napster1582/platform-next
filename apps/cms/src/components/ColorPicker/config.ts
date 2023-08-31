import { Field as PayloadField } from 'payload/types';
import { Field } from './Field';

type CustomField = () => PayloadField;

export const FieldColor: CustomField = () => ({
	type: 'text',
	name: 'color',
	label: 'Color primario',
	required: true,
	defaultValue: 'blue',
	admin: {
		components: {
			Field,
		},
	},
});
