import { Block } from 'payload/types';
import { BlockAccordion } from './Accordion';
import { BlockAlert } from './Alert';
import { BlockContent } from './Content';
import { BlockEmbeddedEvents } from './EmbeddedEvents';
import { BlockEmbeddedForm } from './EmbeddedForm';
import { BlockLink } from './Link';
import { BlockLinkGroup } from './LinkGroup';
import { BlockMedia } from './Media';

export const BlockSection = {
	slug: 'section',
	labels: {
		singular: 'Sección',
		plural: 'Secciones',
	},
	fields: [
		{
			type: 'checkbox',
			name: 'fullSize',
			label: 'Ocupar el 100% de la ventana gráfica vertical',
			admin: {
				description:
					'Al marcar esta opción, el tamaño vertical de la sección tendrá un tamaño mínimo de 100vh, lo que significa que la sección se ajustará automáticamente al tamaño de la ventana gráfica del usuario y ocupará todo el espacio disponible en la pantalla.',
			},
		},
		{
			type: 'checkbox',
			name: 'alwaysUseDarkTheme',
			label: 'Usar siempre el Tema Oscuro',
			admin: {
				description:
					'Al marcar esta opción, la sección siempre usará la variante del tema "Oscuro".',
			},
		},
		{
			type: 'group',
			name: 'html',
			label: 'HTML',
			fields: [
				{
					type: 'code',
					name: 'before',
					label: 'HTML inicial',
					admin: {
						language: 'html',
						description: 'HTML que se muestra antes de la sección.',
					},
				},
				{
					type: 'code',
					name: 'after',
					label: 'HTML final',
					admin: {
						language: 'html',
						description: 'HTML que se muestra después de la sección.',
					},
				},
			],
		},
		{
			type: 'array',
			name: 'columns',
			label: 'Columnas',
			labels: {
				singular: 'columna',
				plural: 'columnas',
			},
			admin: {
				components: {
					/* eslint-disable  @typescript-eslint/no-explicit-any */
					RowLabel: ({ data }: any) => {
						return `Columna - Ancho: ${data?.width ?? '12'}`;
					},
				},
			},
			minRows: 1,
			fields: [
				{
					name: 'width',
					label: 'Expansión de la columna',
					type: 'select',
					defaultValue: '12',
					options: [
						{
							label: '12 - 100%',
							value: '12',
						},
						{
							label: '11 - 91.67%',
							value: '11',
						},
						{
							label: '10 - 83.33%',
							value: '10',
						},
						{
							label: '9 - 75%',
							value: '9',
						},
						{
							label: '8 - 66.67%',
							value: '8',
						},
						{
							label: '7 - 58.33%',
							value: '7',
						},
						{
							label: '6 - 50%',
							value: '6',
						},
						{
							label: '5 - 41.67%',
							value: '5',
						},
						{
							label: '4 - 33.33%',
							value: '4',
						},
						{
							label: '3 - 25%',
							value: '3',
						},
						{
							label: '2 - 16.67%',
							value: '2',
						},
						{
							label: '1 - 8.33%',
							value: '1',
						},
					],
				},
				{
					type: 'blocks',
					name: 'blocks',
					label: 'Bloques',
					labels: {
						singular: 'bloque',
						plural: 'bloques',
					},
					blocks: [
						BlockAccordion,
						BlockAlert,
						BlockContent,
						BlockMedia,
						BlockLink,
						BlockLinkGroup,
						BlockEmbeddedForm,
						BlockEmbeddedEvents,
					],
				},
			],
		},
	],
} satisfies Block;
