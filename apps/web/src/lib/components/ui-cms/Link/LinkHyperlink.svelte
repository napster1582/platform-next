<script lang="ts">
	import type { LinkOptions } from './types';

	export let options: LinkOptions;
</script>

<span
	class="flex items-center gap-2 font-medium visited:text-primary-800 hover:underline focus:underline dark:visited:text-primary-50"
>
	<slot name="icon" />

	{options?.text ?? ''}
</span>
