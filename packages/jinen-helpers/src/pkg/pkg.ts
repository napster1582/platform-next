import packageJson from '../../../../package.json';

export function pkg(): { name: string; version: string } {
	const { name, version } = packageJson;

	return { name, version };
}
