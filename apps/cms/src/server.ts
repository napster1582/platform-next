import express from 'express';
import payload from 'payload';
import { env } from './env';

const app = express();

app.get('/', (_, res) => {
    res.redirect('/admin');
});

const start = async () => {
    await payload.init({
        secret: env((schema) => schema.PAYLOAD_SECRET),
        mongoURL: env((schema) => schema.MONGODB_URI),
        express: app,
        onInit: async () => {
            payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
        },
    });

    app.listen(env((schema) => schema.JINEN_SERVER_PORT));
};

start();
