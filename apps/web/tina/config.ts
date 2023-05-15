import { defineConfig } from 'tinacms';
import { Pages } from './collections';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || 'main';

export default defineConfig({
    branch,
    clientId: '3196ac3d-3bb2-407c-964d-fcd082d52723', // Get this from tina.io
    token: 'aca6de7ac422bfdd84574fd1b5e789727ba8bc3a', // Get this from tina.io
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
