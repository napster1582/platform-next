import path from 'path';
import { buildConfig } from 'payload/config';
import Media from './collections/Media';
import Pages from './collections/Pages';
import Users from './collections/Users';
import Footer from './globals/Footer';

export default buildConfig({
    serverURL: 'http://localhost:3000',
    collections: [Users, Media, Pages],
    globals: [Footer],
    typescript: {
        outputFile: path.resolve(__dirname, 'payload-types.ts'),
    },
    graphQL: {
        schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
    },
});
