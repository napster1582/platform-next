import type { Page } from '@jinen/cms-annotations';

export function resolveLinkHref({
	internal,
	external,
}: {
	internal: string | Page | undefined;
	external: string | undefined;
}): string {
	if (internal) {
		return (typeof internal === 'object' ? internal.slug : internal) ?? '';
	}

	if (external) {
		return external;
	}

	return '';
}
