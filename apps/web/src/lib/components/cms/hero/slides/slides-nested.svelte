<script lang="ts">
	import { resolveMediaSource } from '@jinen/web-resolvers';
	import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
	import { Grid } from '@splidejs/splide-extension-grid';
	import { Splide, SplideSlide, type Options } from '@splidejs/svelte-splide';
	import type { HeroMediaNestedSlidesPreview } from '../types';

	export let previews: HeroMediaNestedSlidesPreview[];
	export let options: Options;

	let slidesNestedRef: SplideSlide;
</script>

<Splide
	bind:this={slidesNestedRef}
	extensions={{ AutoScroll, Grid }}
	{options}
>
	{#each previews as preview}
		<SplideSlide>
			<div
				class="relative grid h-full cursor-grab place-items-center rounded-token bg-cover bg-center bg-no-repeat p-2 grayscale-[70%] active:cursor-grabbing"
				style={`background-image: url(${resolveMediaSource({
					media: preview.background,
				})});`}
			>
				<span
					class="max-w-xs rounded-token bg-white/30 px-2 py-0.5 text-center text-black backdrop-blur-md"
				>
					{preview.title} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa porro in voluptatibus
					saepe ipsam laudantium distinctio deleniti alias natus autem.
				</span>
			</div>
		</SplideSlide>
	{/each}
</Splide>
