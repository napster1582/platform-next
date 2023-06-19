import { ResourceSize } from '@jinen/annotations';

export function resolveResourceSize({ resource }: { resource: string | undefined }): ResourceSize {
    if (!Object.values(ResourceSize).includes(resource as ResourceSize)) {
        throw new Error(`${resource} is not part of the enum ResourceSize`);
    }

    return resource as ResourceSize;
}
