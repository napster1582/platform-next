import { intervalToDuration } from 'date-fns';
import memoize from 'micro-memoize';

export const calculateDuration = memoize(
	({ startDate, endDate }: { startDate: Date; endDate: Date }): string => {
		const duration = intervalToDuration({ start: startDate, end: endDate });

		let final = '';

		if (duration.years && duration.years > 0) {
			final = `${duration.years} año${duration.years > 1 ? 's' : ''}`;
		} else if (duration.months && duration.months > 0) {
			final = `${duration.months} mes${duration.months > 1 ? 'es' : ''}`;
		} else if (duration.days && duration.days > 0) {
			final = `${duration.days} día${duration.days > 1 ? 's' : ''}`;
		} else if (duration.hours && duration.hours > 0) {
			final = `${duration.hours} hora${duration.hours > 1 ? 's' : ''}`;
		} else if (duration.minutes && duration.minutes > 0) {
			final = `${duration.minutes} minuto${duration.minutes > 1 ? 's' : ''}`;
		} else if (duration.seconds && duration.seconds > 0) {
			final = `${duration.seconds} segundo${duration.seconds > 1 ? 's' : ''}`;
		} else {
			final = 'menos de un segundo';
		}

		return final;
	},
);
