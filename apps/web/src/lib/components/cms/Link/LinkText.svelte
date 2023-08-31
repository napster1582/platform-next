<script lang="ts">
	import type { LinkOptions } from './types';

	export let options: LinkOptions;
</script>

<span
	class="flex items-center gap-2 font-medium visited:text-primary-800 hover:underline focus:underline dark:visited:text-primary-50"
	class:link-animated={!options?.text}
>
	<slot name="icon" />

	{options?.text ?? ''}
</span>

<style lang="postcss">
	.link-animated:has(svg):hover {
		@apply transition-transform;
		@apply -rotate-6 scale-125;
	}
</style>
