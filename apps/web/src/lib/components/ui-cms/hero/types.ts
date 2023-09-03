import type { HeroVariant, Media, Page } from '@jinen/cms-annotations';

export type HeroOptions = {
	variant: HeroVariant;
	source: Page['hero'];
};

export type HeroMediaNestedSlidesPreview = {
	id?: string | undefined;
	title: string;
	background: string | Media;
};
