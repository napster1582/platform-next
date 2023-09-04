import { CollectionConfig } from 'payload/types';
import { FieldLink } from '../fields/Link';
import { FieldSlug } from '../fields/Slug';

export const CollectionEvents = {
	slug: 'events',
	labels: {
		singular: 'Evento',
		plural: 'Eventos',
	},
	admin: {
		group: 'Contenido',
		useAsTitle: 'title',
		defaultColumns: ['title', 'description', 'year', 'month'],
		listSearchableFields: ['year'],
	},
	access: {
		read: () => true,
		create: () => true, // isAdmin,
		update: () => true, // isAdmin,
		delete: () => true, // isAdmin,
	},
	fields: [
		{
			name: 'title',
			label: 'Título',
			type: 'text',
			required: true,
			maxLength: 60,
		},
		{
			name: 'description',
			label: 'Descripción',
			type: 'textarea',
			required: true,
			maxLength: 600,
		},

		{
			name: 'startDate',
			label: 'Fecha inicial',
			type: 'date',
			required: true,
			admin: {
				date: {
					pickerAppearance: 'dayAndTime',
					minDate: new Date(),
					displayFormat: 'eeee, dd MMMM yyyy hh:mm a OOOO',
				},
			},
		},
		{
			name: 'endDate',
			label: 'Fecha final',
			type: 'date',
			required: true,
			admin: {
				condition: (_, siblingData) => siblingData?.startDate,
				date: {
					pickerAppearance: 'dayAndTime',
					minDate: new Date(),
					displayFormat: 'eeee, dd MMMM yyyy hh:mm a OOOO',
				},
			},
			validate: (value, { siblingData }) => {
				if (new Date(value) <= new Date(siblingData.startDate)) {
					return 'La fecha final no puede ser menor o igual a la fecha inicial.';
				}

				return true;
			},
		},
		{
			type: 'group',
			name: 'linkGroup',
			label: 'Enlace',
			fields: [
				{
					type: 'checkbox',
					name: 'addLink',
					label: 'Agregar enlace',
				},
				FieldLink({
					overrides: {
						label: false,
						admin: {
							condition: (_, siblingData) => siblingData?.addLink,
						},
					},
				}),
			],
		},
		FieldSlug({
			fieldToUse: 'title',
		}),
	],
} satisfies CollectionConfig;
