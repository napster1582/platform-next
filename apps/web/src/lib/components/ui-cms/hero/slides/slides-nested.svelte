<script lang="ts">
	import type { Media } from '@jinen/cms-annotations';
	import { resolveMediaSource } from '@jinen/web-resolvers';
	import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
	import { Grid } from '@splidejs/splide-extension-grid';
	import { Splide, SplideSlide, type Options } from '@splidejs/svelte-splide';

	type NestedSlide = {
		id?: string | undefined;
		description: string;
		background: string | Media;
	};

	export let elements: NestedSlide[];
	export let options: Options | undefined;
</script>

<Splide
	extensions={{ AutoScroll, Grid }}
	{options}
>
	{#each elements as element}
		<SplideSlide>
			<div
				class="relative grid h-full cursor-grab place-items-center rounded-token bg-cover bg-center bg-no-repeat p-2 grayscale-[70%] active:cursor-grabbing"
				style={`background-image: url(${resolveMediaSource({
					media: element.background,
				})});`}
			>
				<span
					class="max-w-xs rounded-token bg-white/30 px-2 py-0.5 text-center text-black backdrop-blur-md"
				>
					{element.description}
				</span>
			</div>
		</SplideSlide>
	{/each}
</Splide>
