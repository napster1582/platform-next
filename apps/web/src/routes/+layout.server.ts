import { VITE_CMS_URL } from '$env/static/private';
import type { Appearance, Footer, Header, Menu } from '@jinen/cms-annotations';
import { buildRequestOptions } from '@jinen/web-http';
import { error } from '@sveltejs/kit';

export async function load({ fetch }): Promise<{
    appearance: Appearance;
    header: Header;
    menu: Menu;
    footer: Footer;
}> {
    try {
        const appearanceResponse = fetch(
            `${VITE_CMS_URL}/globals/appearance`,
            buildRequestOptions(),
        );
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

        const responses = await Promise.all([
            appearanceResponse,
            headerResponse,
            menuResponse,
            footerResponse,
        ]);

        for (const response of responses) {
            await validateResponse(response);
        }

        return {
            appearance: (await responses[0].json()) as Appearance,
            header: (await responses[1].json()) as Header,
            menu: (await responses[2].json()) as Menu,
            footer: (await responses[3].json()) as Footer,
        };
    } catch (errorResponse) {
        throw error(
            errorResponse?.status ?? 500,
            `Failed to load data from the CMS: ${errorResponse}`,
        );
    }
}
