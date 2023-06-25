import type { Event } from '@jinen/cms-annotations';

export function resolveEvents({
    events,
}: {
    events: string[] | Event[];
}): { year: number; events: Event[] } | null {
    return null;
}
