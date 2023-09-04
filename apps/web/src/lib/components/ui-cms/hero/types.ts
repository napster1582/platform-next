import type { HeroVariant, Page } from '@jinen/cms-annotations';

export type HeroOptions = {
	variant: HeroVariant;
	source: Page['hero'];
};
