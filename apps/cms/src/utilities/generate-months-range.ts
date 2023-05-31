import deepmerge from 'deepmerge';

type MonthsRangeOptions = {
    locales?: Intl.LocalesArgument;
    localesFormatOptions?: Intl.DateTimeFormatOptions;
};

export const generateMonthsRange = (startYear: number, options?: MonthsRangeOptions): string[] => {
    const defaultOptions: MonthsRangeOptions = {
        locales: 'default',
        localesFormatOptions: {
            month: 'long',
        },
    };

    const finalOptions = deepmerge(defaultOptions, options || {});

    const monthsRange = Array.from({ length: 12 }, (_, month) =>
        new Date(startYear, month, 1).toLocaleString(
            finalOptions.locales,
            finalOptions.localesFormatOptions,
        ),
    );

    return monthsRange;
};
