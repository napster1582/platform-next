import type { Grouped } from '@jinen/annotations';
import type { Event } from '@jinen/cms-annotations';
import { generateMonthsRange, groupBy } from '@jinen/helpers';

type EventWithYearAndMonth = Event & { year: string; month: string };

const allMonths = generateMonthsRange({ locales: 'es' });

function sortMonthsAscending(a: EventWithYearAndMonth, b: EventWithYearAndMonth) {
    return allMonths.indexOf(a.month) - allMonths.indexOf(b.month);
}

// function sortMonthsDescending(a: EventWithYearAndMonth, b: EventWithYearAndMonth) {
//     return allMonths.indexOf(b.month) - allMonths.indexOf(a.month);
// }

export function resolveEvents({ events }: { events: Event[] | string[] }): Grouped<Event> {
    const eventsWithYearAndMonth =
        (events as Event[])?.map((event) => ({
            ...event,
            year: new Date(event.startDate).getFullYear().toString(),
            month: new Date(event.startDate).toLocaleString('es', { month: 'long' }),
        })) ?? [];

    const grouped = groupBy({
        items: eventsWithYearAndMonth,
        key: 'year',
    });

    for (const year of Object.keys(grouped)) {
        grouped[year].sort(sortMonthsAscending);
    }

    return grouped;
}
