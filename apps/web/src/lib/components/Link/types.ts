import type { ResourceSize } from '@jinen/annotations';
import type { LinkAppearance } from '@jinen/cms-annotations';

export type LinkOptions = {
	href: string;
	indicator?: string;
	text?: string;
	appearance: LinkAppearance;
	showIcon?: boolean;
	icon?: string;
	iconSize?: ResourceSize;
	openInNewTab?: boolean;
};
