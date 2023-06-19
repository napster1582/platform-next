import type { Page } from '@jinen/cms-annotations';

export function resolveLinkHref({
    internal,
    external,
}: {
    internal: string | Page;
    external: string;
}): string {
    if (internal) {
        return (typeof internal === 'object' ? internal.slug : internal) ?? '';
    }

    if (external) {
        return external;
    }

    return '';
}
