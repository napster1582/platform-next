import deepmerge from 'deepmerge';
import { Field } from 'payload/types';
import { HeroVariant } from '../tmp/jinen-cms-annotations/hero';
import { FieldSlides } from './Slides';

type CustomField = (options?: { overrides?: Partial<Field> }) => Field;

export const FieldHero: CustomField = (options) =>
	deepmerge(
		{
			name: 'hero',
			label: false,
			type: 'group',
			fields: [
				{
					name: 'variant',
					label: 'Variante',
					type: 'select',
					required: true,
					options: [
						{
							label: 'Diapositivas',
							value: HeroVariant.Slides,
						},
					],
				},
				FieldSlides({
					overrides: {
						admin: {
							condition: (_, siblingData) =>
								siblingData?.variant === HeroVariant.Slides,
						},
					},
				}),
			],
		},
		options?.overrides ?? {},
	);
