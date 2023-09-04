<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import Icon from '@iconify/svelte';

	export let showAutoplayController = false;
</script>

<div class="container flex h-24 items-center justify-center gap-2">
	{#if showAutoplayController}
		<Button
			variant="secondary"
			size="icon"
			class="splide__toggle"
		>
			<Icon
				icon="line-md:pause-to-play-filled-transition"
				class="splide__toggle__play text-2xl"
			/>
			<Icon
				icon="line-md:play-filled-to-pause-transition"
				class="splide__toggle__pause text-2xl"
			/>
		</Button>
	{/if}
</div>
