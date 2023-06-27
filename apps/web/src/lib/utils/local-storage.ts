export function getItem<T>(item: string, shouldParse = true): T | null {
    const data = localStorage.getItem(item?.toString());
    return data && shouldParse ? JSON.parse(data || '{}') : data;
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
