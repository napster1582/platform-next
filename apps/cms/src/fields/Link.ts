import deepmerge from 'deepmerge';
import { Field } from 'payload/types';
import { ResourceSize } from '../tmp/jinen-annotations/resource';
import { LinkAppearance, LinkType } from '../tmp/jinen-cms-annotations/link';

type CustomField = (options?: { overrides?: Partial<Field> }) => Field;

export const FieldLink: CustomField = (options) =>
	deepmerge(
		{
			type: 'group',
			name: 'link',
			label: 'Enlace',
			fields: [
				{
					type: 'select',
					name: 'appearance',
					label: 'Apariencia',
					options: [
						{
							label: 'Sin diseño',
							value: LinkAppearance.NoDesign,
						},
						{
							label: 'Hipervínculo',
							value: LinkAppearance.Hyperlink,
						},
						{
							label: 'Texto, Ícono o Ambos',
							value: LinkAppearance.TextIcon,
						},
						{
							label: 'CTA (Call to Action)',
							value: LinkAppearance.Cta,
						},
						{
							label: 'Botón primario',
							value: LinkAppearance.ButtonPrimary,
						},
						{
							label: 'Botón secundario',
							value: LinkAppearance.ButtonSecondary,
						},
						{
							label: 'Botón (variante texto)',
							value: LinkAppearance.ButtonText,
						},
					],
					defaultValue: LinkAppearance.Hyperlink,
				},
				{
					type: 'radio',
					name: 'type',
					label: 'Tipo',
					options: [
						{
							label: 'Enlace interno',
							value: LinkType.Internal,
						},
						{
							label: 'URL personalizada',
							value: LinkType.External,
						},
					],
					defaultValue: LinkType.Internal,
					admin: {
						layout: 'horizontal',
					},
				},
				{
					type: 'text',
					name: 'indicator',
					label: 'Indicador',
					maxLength: 30,
					admin: {
						condition: (_: unknown, siblingData: Record<string, unknown>) =>
							siblingData?.appearance === LinkAppearance.Cta,
					},
				},
				{
					type: 'text',
					name: 'text',
					label: 'Texto a mostrar',
					admin: {
						condition: (_: unknown, siblingData: Record<string, unknown>) =>
							siblingData?.appearance !== LinkAppearance.NoDesign,
					},
				},
				{
					type: 'checkbox',
					name: 'showIcon',
					label: 'Mostrar ícono',
					required: true,
					admin: {
						condition: (_: unknown, siblingData: Record<string, unknown>) =>
							siblingData?.appearance !== LinkAppearance.NoDesign,
					},
				},
				{
					type: 'row',
					fields: [
						{
							type: 'text',
							name: 'icon',
							label: 'Ícono',
							required: true,
							admin: {
								description: 'https://icones.js.org/',
								condition: (_: unknown, siblingData: Record<string, unknown>) =>
									siblingData?.showIcon &&
									siblingData?.appearance !== LinkAppearance.NoDesign,
							},
						},
						{
							type: 'select',
							name: 'iconSize',
							label: 'Tamaño del ícono',
							options: Object.values(ResourceSize).map((value) => value),
							defaultValue: ResourceSize.Md,
							admin: {
								condition: (_: unknown, siblingData: Record<string, unknown>) =>
									siblingData?.showIcon &&
									siblingData?.appearance !== LinkAppearance.NoDesign,
							},
						},
					],
				},
				{
					type: 'row',
					fields: [
						{
							type: 'relationship',
							name: 'internalLinkReference',
							label: 'Referencia de navegación',
							relationTo: ['pages'],
							required: true,
							maxDepth: 1,
							admin: {
								condition: (_: unknown, siblingData: Record<string, unknown>) =>
									siblingData?.type === 'internal',
							},
						},
						{
							type: 'text',
							name: 'externalLink',
							label: 'URL',
							required: true,
							admin: {
								condition: (_: unknown, siblingData: Record<string, unknown>) =>
									siblingData?.type === 'external',
							},
						},
					],
				},
				{
					type: 'checkbox',
					name: 'openInNewTab',
					label: 'Abrir en nueva pestaña',
				},
			],
		},
		options?.overrides ?? {},
	);
