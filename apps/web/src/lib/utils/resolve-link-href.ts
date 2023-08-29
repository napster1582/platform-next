import type { Page } from '@jinen/cms-annotations';
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
