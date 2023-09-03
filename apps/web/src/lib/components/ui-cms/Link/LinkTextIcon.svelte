<script lang="ts">
	import type { LinkOptions } from './types';

	export let options: LinkOptions;
</script>

<span
	class="flex items-center gap-2 font-medium"
	class:link-icon={!options?.text}
>
	<slot name="icon" />

	{options?.text ?? ''}
</span>

<style lang="postcss">
	.link-icon:has(svg):hover {
		@apply transition-transform;
		@apply -rotate-6 scale-125;
	}
</style>
