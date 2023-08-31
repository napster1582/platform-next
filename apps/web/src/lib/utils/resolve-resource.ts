import { ResourceSize } from '@jinen/annotations';
import memoize from 'micro-memoize';

export const resolveResourceSize = memoize(
	({ resource }: { resource: string | undefined }): ResourceSize => {
		if (!resource) {
			return ResourceSize.Md;
		}

		if (!Object.values(ResourceSize).includes(resource as ResourceSize)) {
			console.error(`${resource} is not part of the enum ResourceSize`);
			return ResourceSize.Md;
		}

		return resource as ResourceSize;
	},
);
