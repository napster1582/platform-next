// import { VITE_CMS_URL } from '$env/static/private';
import type { Page } from '@jinen/cms-annotations';
import { buildRequestOptions } from '@jinen/web-http';
import { error } from '@sveltejs/kit';
import qs from 'qs';

const VITE_CMS_URL = 'http://localhost:3001/api';

export async function load({ params }): Promise<{
    page: Page;
}> {
    const { slug } = params;

    const stringifiedQuery = qs.stringify(
        {
            where: {
                slug: {
                    equals: slug,
                },
            },
        },
        { addQueryPrefix: true },
    );

    try {
        const response = await fetch(
            `${VITE_CMS_URL}/pages${stringifiedQuery}`,
            buildRequestOptions(),
        );

        if (!response.ok) {
            throw error(response.status, `Response validation failed: ${await response.text()}`);
        }

        const page = (await response.json())['docs'][0] as Page;

        if (!page) {
            throw error(404, `Unable to find the page ${slug}`);
        }

        return {
            page,
        };
    } catch (errorResponse) {
        throw error(
            errorResponse?.status ?? 500,
            `Failed to load data from the CMS: ${errorResponse}`,
        );
    }
}
