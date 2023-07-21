import { Payload } from 'payload';
import homeData from './data/home.json';

const seedHome = async (payload: Payload): Promise<unknown> => {
    return payload.collections['Pages'].Model.create(homeData);
};

// eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
const seedAbout = async (payload: Payload): Promise<void> => {};

// eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
const seedDicyt = async (payload: Payload): Promise<void> => {};

export const seedPages = async (payload: Payload): Promise<void> => {
    const deleted = await payload.delete({ collection: 'pages', where: {} });
    payload.logger.info(`[seed:delete] -> home: ${JSON.stringify(deleted)}`);

    const generated = await seedHome(payload);
    payload.logger.info(`[seed:generate] -> home: ${JSON.stringify(generated)}`);

    // await seedAbout(payload);
    // console.log('[Seed] about', generated);

    // await seedDicyt(payload);
    // console.log('[Seed] dicyt', generated);
};
