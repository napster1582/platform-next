import { VITE_CMS_URL } from '$env/static/private';
import type { Footer, Header, Menu } from '@jinen/cms-generated-types';
import { buildRequestOptions } from '@jinen/http';
import { error } from '@sveltejs/kit';

export async function load({ fetch }) {
    try {
        const headerResponse = fetch(`${VITE_CMS_URL}/globals/header`, buildRequestOptions());
        const menuResponse = fetch(`${VITE_CMS_URL}/globals/menu`, buildRequestOptions());
        const footerResponse = fetch(`${VITE_CMS_URL}/globals/footer`, buildRequestOptions());

        const validateResponse = async (response: Response) => {
            if (!response.ok) {
                throw error(
                    response.status,
                    `Response validation failed: ${await response.text()}`,
                );
            }
        };

        const responses = await Promise.all([headerResponse, menuResponse, footerResponse]);

        for (const response of responses) {
            await validateResponse(response);
        }

        return {
            header: (await responses[0].json()) as Header,
            menu: (await responses[1].json()) as Menu,
            footer: (await responses[2].json()) as Footer,
        };
    } catch (errorResponse: any) {
        throw error(
            errorResponse?.status ?? 500,
            `Failed to load data from the CMS: ${errorResponse}`,
        );
    }
}
