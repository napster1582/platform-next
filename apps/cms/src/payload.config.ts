import path from 'path';
import { buildConfig } from 'payload/config';
import { Media, Pages, Users } from './collections';
import { Footer, Header, SocialMedia } from './globals';

export default buildConfig({
    serverURL: 'http://localhost:3001',
    collections: [Users, Media, Pages],
    globals: [Header, Footer, SocialMedia],
    typescript: {
        outputFile: path.resolve(__dirname, 'payload-types.ts'),
    },
    graphQL: {
        schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
    },
});
