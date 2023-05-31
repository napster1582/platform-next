import express from 'express';
import payload from 'payload';
import { env } from './env';

(async () => {
    await payload.init({
        secret: env((schema) => schema.PAYLOAD_SECRET),
        mongoURL: env((schema) => schema.MONGODB_URI),
        express: express(),
        onInit: async () => {
            await payload.create({
                collection: 'users',
                data: {
                    email: 'dev@jinen.com',
                    password: 'demo',
                    roles: ['admin'],
                },
            });
            // await seedPages(payload);

            process.exit();
        },
    });
})();
