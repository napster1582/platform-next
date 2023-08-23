export function getItem<T>(item: string): T | null {
	const data = localStorage.getItem(item?.toString());

	try {
		return JSON.parse(data || '{}');
	} catch {
		return data as T | null;
	}
}

export function setItem<T>(item: string, data: T): void {
	if (data === null || data === undefined) return;
	localStorage.setItem(item.toString(), JSON.stringify(data));
}

export function removeItem(item: string): void {
	localStorage.removeItem(item.toString());
}

export function clear(): void {
	localStorage.clear();
}
