import express from 'express';
import payload from 'payload';

(async () => {
    await payload.init({
        secret: process.env.PAYLOAD_SECRET || '',
        mongoURL: process.env.MONGODB_URI || '',
        express: express(),
        onInit: async () => {
            await payload.create({
                collection: 'users',
                data: {
                    email: 'dev@jinen.com',
                    password: 'demo',
                    names: 'Demo names',
                    lastNames: 'Demo lastnames',
                    role: 'admin',
                },
            });

            process.exit();
        },
    });
})();
