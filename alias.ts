import { resolve } from 'node:path';

const r = (path: string) => resolve(__dirname, path);

export const alias: Record<string, string> = {
    '@jinen/core': r('./pkg/core/src/'),
    '@jinen/core-shared': r('./pkg/core-shared/src/'),
};
