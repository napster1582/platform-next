import { env } from '$env/dynamic/public';
import type { Page } from '@jinen/cms-annotations';
import { buildRequestOptions } from '@jinen/web-http';
import { error } from '@sveltejs/kit';
import qs from 'qs';

/** @type {import('./$types').PageLoad} */
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
			`${env.PUBLIC_CMS_URL}/pages${stringifiedQuery}`,
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
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (errorResponse: any) {
		console.error(errorResponse);

		throw error(
			errorResponse?.status || 500,
			`Failed to load data from the CMS: ${errorResponse} - ${env.PUBLIC_CMS_URL}`,
		);
	}
}
