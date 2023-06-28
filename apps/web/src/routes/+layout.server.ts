import { env } from '$env/dynamic/public';
import type { Footer, Header, Menu } from '@jinen/cms-annotations';
import { buildRequestOptions } from '@jinen/web-http';
import { error } from '@sveltejs/kit';

export async function load({ fetch }): Promise<{
    header: Header;
    menu: Menu;
    footer: Footer;
}> {
    try {
        const headerResponse = fetch(`${env.PUBLIC_CMS_URL}/globals/header`, buildRequestOptions());
        const menuResponse = fetch(`${env.PUBLIC_CMS_URL}/globals/menu`, buildRequestOptions());
        const footerResponse = fetch(`${env.PUBLIC_CMS_URL}/globals/footer`, buildRequestOptions());

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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (errorResponse: any) {
        console.log('=================', errorResponse);

        throw error(
            errorResponse?.status ?? 500,
            `Failed to load data from the CMS: ${errorResponse} - ${env.PUBLIC_CMS_URL}`,
        );
    }
}
