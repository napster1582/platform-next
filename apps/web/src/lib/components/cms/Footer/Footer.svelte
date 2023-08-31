<script lang="ts">
	import { Img } from '$lib/components/Img';
	import { resolveLinkAppearance, resolveLinkHref } from '$lib/utils/resolve-link';
	import { resolveResourceSize } from '$lib/utils/resolve-resource-size';
	import type { Footer } from '@jinen/cms-annotations';
	import { pkg } from '@jinen/helpers';
	import { Badge } from '../../Badge';
	import { Content } from '../Content';
	import { Link } from '../Link';

	export let content: Footer;
</script>

<footer id="jinen-footer">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 1440 320"
		><path
			class="fill-token-primary"
			fill-opacity="1"
			d="M0,96L17.1,96C34.3,96,69,96,103,128C137.1,160,171,224,206,229.3C240,235,274,181,309,160C342.9,139,377,149,411,144C445.7,139,480,117,514,122.7C548.6,128,583,160,617,186.7C651.4,213,686,235,720,256C754.3,277,789,299,823,293.3C857.1,288,891,256,926,256C960,256,994,288,1029,272C1062.9,256,1097,192,1131,154.7C1165.7,117,1200,107,1234,122.7C1268.6,139,1303,181,1337,192C1371.4,203,1406,181,1423,170.7L1440,160L1440,0L1422.9,0C1405.7,0,1371,0,1337,0C1302.9,0,1269,0,1234,0C1200,0,1166,0,1131,0C1097.1,0,1063,0,1029,0C994.3,0,960,0,926,0C891.4,0,857,0,823,0C788.6,0,754,0,720,0C685.7,0,651,0,617,0C582.9,0,549,0,514,0C480,0,446,0,411,0C377.1,0,343,0,309,0C274.3,0,240,0,206,0C171.4,0,137,0,103,0C68.6,0,34,0,17,0L0,0Z"
		/></svg
	>

	<div class="container py-24 text-gray-200">
		<div class="flex flex-wrap justify-between gap-24">
			<div class="flex max-w-[300px] flex-wrap items-center gap-6">
				{#each content.logos ?? [] as { logo }}
					{#if typeof logo === 'object'}
						<Img
							src={logo.url}
							alt={logo.alt}
							class="w-28"
						/>
					{/if}
				{/each}
			</div>

			{#each content.sections ?? [] as { section }}
				<div class="flex flex-col gap-3 md:min-w-[250px]">
					<h3 class="text-3xl font-bold text-white">{section.title}</h3>

					<hr class="mb-6 mt-2 border-gray-800" />

					<ul
						class="flex flex-wrap gap-4"
						class:flex-row={section.layout === 'horizontal'}
						class:flex-col={section.layout === 'vertical'}
					>
						{#each section.links ?? [] as { link }}
							<li>
								<Link
									class="text-primary-300"
									options={{
										href: resolveLinkHref({
											internal: link.internalLinkReference?.value,
											external: link.externalLink,
										}),
										appearance: resolveLinkAppearance({
											appearance: link.appearance,
										}),
										indicator: link.indicator,
										text: link.text,
										showIcon: link.showIcon,
										icon: link.icon,
										iconSize: resolveResourceSize({ resource: link.iconSize }),
										openInNewTab: link.openInNewTab,
									}}
								/>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>

	<div class="border-t border-gray-900 bg-black">
		<div class="container py-6">
			<address class="text-center text-gray-300">
				<Content nodes={content.contact?.content ?? []} />
			</address>

			<div class="mt-6 flex justify-center">
				<Badge class="badge text-gray-950">
					# {pkg().version}
				</Badge>
			</div>
		</div>
	</div>
</footer>

<style lang="postcss">
	#jinen-footer {
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80' width='80' height='80'%3E%3Cpath fill='%231b1b1b' fill-opacity='0.4' d='M14 16H9v-2h5V9.87a4 4 0 1 1 2 0V14h5v2h-5v15.95A10 10 0 0 0 23.66 27l-3.46-2 8.2-2.2-2.9 5a12 12 0 0 1-21 0l-2.89-5 8.2 2.2-3.47 2A10 10 0 0 0 14 31.95V16zm40 40h-5v-2h5v-4.13a4 4 0 1 1 2 0V54h5v2h-5v15.95A10 10 0 0 0 63.66 67l-3.47-2 8.2-2.2-2.88 5a12 12 0 0 1-21.02 0l-2.88-5 8.2 2.2-3.47 2A10 10 0 0 0 54 71.95V56zm-39 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm40-40a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM15 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm40 40a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'%3E%3C/path%3E%3C/svg%3E");

		@apply bg-black bg-fixed;
		@apply relative overflow-hidden;
	}
</style>
