export const generateYearsRange = (startYear: number, endYear: number): number[] => {
	const yearsRange = Array.from(
		{
			length: endYear - startYear + 1,
		},
		(_, i) => endYear - i,
	);

	return yearsRange;
};
