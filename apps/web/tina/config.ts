import { defineConfig } from 'tinacms';
import { Pages } from './collections';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || 'main';

export default defineConfig({
    branch,
    clientId: null, // Get this from tina.io
    token: null, // Get this from tina.io
    build: {
        outputFolder: 'admin',
        publicFolder: 'static',
    },
    media: {
        tina: {
            mediaRoot: 'media',
            publicFolder: 'static',
        },
    },
    schema: {
        collections: [Pages],
    },
});
