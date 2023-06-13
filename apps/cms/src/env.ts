import dotenv from 'dotenv';
import path from 'path';
import { z } from 'zod';

const schema = z.object({
    JINEN_SERVER_PORT: z.coerce.number().positive().default(3001),
    JINEN_SERVER_URL: z.string().default('http://localhost:3001'),
    JINEN_CLIENT_URLS: z.string().default('http://localhost:3000,http://localhost:3002'),
    PAYLOAD_SECRET: z.string().nonempty(),
    PAYLOAD_CONFIG_PATH: z.string().default('src/payload-config.ts'),
    MONGODB_URI: z.string().nonempty(),
});

export type JinenEnvSchema = z.infer<typeof schema>;

let parsedSchema: JinenEnvSchema | null = null;

export const env = <T>(resolve: (schema: JinenEnvSchema) => T) => {
    if (!parsedSchema) {
        const env = process.env.NODE_ENV || 'development';
        const envFilePath = path.resolve(process.cwd(), `.env.${env}`);

        const config = dotenv.config({
            path: envFilePath,
            override: true,
        });

        if (config?.error) {
            throw config.error;
        }

        parsedSchema = schema.parse(process.env);
    }

    return resolve(Object.freeze(parsedSchema));
};
