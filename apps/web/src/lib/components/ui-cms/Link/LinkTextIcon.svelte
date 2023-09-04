<script lang="ts">
	import { cn } from '$lib/utils';
	import type { LinkOptions } from './types';

	export let options: LinkOptions;
</script>

<span class={cn('flex items-center gap-2 font-medium', !options?.text && 'link-icon')}>
	<slot name="icon" />

	{options?.text ?? ''}
</span>

<style lang="postcss">
	.link-icon:has(svg):hover {
		@apply transition-transform;
		@apply -rotate-6 scale-125;
	}
</style>
