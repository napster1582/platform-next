<script lang="ts">
	import imageWaterWave from '$lib/assets/images/animated/water-wave.png';
	import { Badge } from '$lib/components/ui/badge';
	import Icon from '@iconify/svelte';
	import { Img } from '../../img';
	import type { LinkOptions } from './types';

	export let options: LinkOptions;
</script>

<div
	class="bg-primary-gradient relative flex h-[90px] items-center gap-4 rounded-token border-4 border-primary-500/30 p-5 font-semibold text-primary-600 transition-transform hover:scale-[1.01] dark:text-primary-100"
>
	{#if options?.indicator}
		<div class="absolute -top-5 left-4">
			<Badge>
				{options?.indicator ?? ''}
			</Badge>
		</div>
	{/if}

	<div class="flex w-16 justify-center overflow-hidden">
		{#if options.icon}
			<slot name="icon" />
		{:else}
			<Img
				class="w-full"
				src={imageWaterWave}
				alt="Olas animadas"
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
		icon="eos-icons:compass"
		class="text-4xl"
	/>
</div>
