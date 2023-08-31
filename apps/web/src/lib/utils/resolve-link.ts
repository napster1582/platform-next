import type { Page } from '@jinen/cms-annotations';
import { LinkAppearance } from '@jinen/cms-annotations';
import memoize from 'micro-memoize';

export const resolveLinkHref = memoize(
	({
		internal,
		external,
	}: {
		internal: string | Page | undefined;
		external: string | undefined;
	}): string => {
		if (internal) {
			return (typeof internal === 'object' ? internal.slug : internal) ?? '';
		}

		if (external) {
			return external;
		}

		return '';
	},
);

export const resolveLinkAppearance = memoize(
	({ appearance }: { appearance: string | undefined }): LinkAppearance => {
		if (!appearance) {
			return LinkAppearance.Text;
		}

		if (!Object.values(LinkAppearance).includes(appearance as LinkAppearance)) {
			console.error(`${appearance} is not part of the enum LinkAppearance`);
			return LinkAppearance.Text;
		}

		return appearance as LinkAppearance;
	},
);
