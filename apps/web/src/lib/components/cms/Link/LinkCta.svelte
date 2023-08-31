<script lang="ts">
	import imageWaterWave from '$lib/assets/images/animated/water-wave.png';
	import Icon from '@iconify/svelte';
	import { Img } from '../../Img';
	import type { LinkOptions } from './types';

	export let options: LinkOptions;
</script>

<div
	class="relative flex h-[90px] w-full items-center gap-4 rounded-token bg-token-secondary px-5 py-5 font-semibold text-token-primary transition-transform hover:scale-[1.01] hover:text-primary-600 dark:hover:text-primary-300"
>
	{#if options?.indicator}
		<span
			class="absolute -top-2 left-4 rounded-token bg-primary-300 px-2.5 py-0.5 text-center text-xs font-bold text-primary-900"
		>
			{options?.indicator ?? ''}
		</span>
	{/if}

	<div class="flex w-16 justify-center overflow-hidden">
		{#if options.icon}
			<slot name="icon" />
		{:else}
			<Img
				class="w-full"
				src={imageWaterWave}
				alt="Olas rompientes en el mar"
				loading="lazy"
			/>
		{/if}
	</div>

	<span
		class="line-clamp-2 w-full"
		title={options?.text ?? ''}
	>
		{options?.text ?? ''}
	</span>

	<Icon
		icon="line-md:external-link"
		class="text-2xl"
	/>
</div>
