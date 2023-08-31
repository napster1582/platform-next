import { Grouped } from '@jinen/annotations';

export const groupBy = <DataSourceType extends object>(options: {
	items: DataSourceType[];
	key: keyof DataSourceType;
}): Grouped<DataSourceType> => {
	const grouped: Grouped<DataSourceType> = {};

	for (const item of options.items ?? []) {
		const groupKey = String(item[options.key]);

		if (grouped[groupKey]) {
			grouped[groupKey].push(item);
		} else {
			grouped[groupKey] = [item];
		}
	}

	return grouped;
};
