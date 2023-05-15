import * as dotenv from 'dotenv';
import express from 'express';
import payload from 'payload';
import { seedPages } from './seeds/pages.seed';

dotenv.config();

(async () => {
    await payload.init({
        secret: process.env.PAYLOAD_SECRET,
        mongoURL: process.env.MONGODB_URI,
        express: express(),
        onInit: async () => {
            await seedPages(payload);

            process.exit();
        },
    });
})();
