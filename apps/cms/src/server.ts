import dotenv from 'dotenv';
import express from 'express';
import payload from 'payload';

dotenv.config();

const app = express();

app.get('/', (_, res) => {
	res.redirect('/admin');
});

const start = async () => {
	await payload.init({
		secret: process.env.PAYLOAD_CONFIG_SECRET || '',
		mongoURL: process.env.MONGODB_URI || '',
		express: app,
		onInit: async () => {
			payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
		},
	});

	app.listen(process.env.PAYLOAD_SERVER_PORT || 3000);
};

start();
