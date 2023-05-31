import path from 'path';
import { z } from 'zod';

import dotenv from 'dotenv';

const schema = z.object({
    JINEN_DOCS_PORT: z.coerce.number().positive().default(3000),
    JINEN_DOCS_URL: z.string().url().default('http://localhost:3000'),
    JINEN_CMS_PORT: z.coerce.number().positive().default(3001),
    JINEN_CMS_URL: z.string().url().default('http://localhost:3001'),
    JINEN_WEB_PORT: z.coerce.number().positive().default(3002),
    JINEN_WEB_URL: z.string().url().default('http://localhost:3002'),
    PAYLOAD_SECRET: z.string().nonempty(),
    PAYLOAD_CONFIG_PATH: z.string().default('src/payload.config.ts'),
    MONGODB_URI: z.string().nonempty(),
});

export type JinenEnvSchema = z.infer<typeof schema>;

let parsedSchema: JinenEnvSchema | null = null;

function loadVariables() {
    const environment = process.env.NODE_ENV || 'development';

    dotenv.config({
        path: path.resolve(__dirname, `../../../envs/${environment}.env`),
    });
}

export const env = <T>(resolve: (schema: JinenEnvSchema) => T) => {
    if (!parsedSchema) {
        loadVariables();

        parsedSchema = schema.parse(process.env);
    }

    return resolve(Object.freeze(parsedSchema));
};
