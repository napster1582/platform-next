type MonthsRangeOptions = {
	locales?: Intl.LocalesArgument;
	localesFormatOptions?: Intl.DateTimeFormatOptions;
};

export const generateMonthsRange = (options?: MonthsRangeOptions): string[] => {
	const defaultOptions: MonthsRangeOptions = {
		locales: 'default',
		localesFormatOptions: {
			month: 'long',
		},
	};

	const finalOptions = {
		...defaultOptions,
		...options,
	};

	const monthsRange = Array.from({ length: 12 }, (_, month) =>
		new Date(new Date().getFullYear(), month, 1).toLocaleString(
			finalOptions.locales,
			finalOptions.localesFormatOptions,
		),
	);

	return monthsRange;
};
