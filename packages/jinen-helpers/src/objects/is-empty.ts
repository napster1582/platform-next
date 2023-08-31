export function isEmpty<ObjectType extends object | null | undefined>(obj: ObjectType): boolean {
	if (typeof obj !== 'object') {
		return true;
	}

	return obj === undefined || obj === null || Object.entries(obj).length === 0;
}
