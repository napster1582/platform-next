<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import type { LinkOptions } from './types';

	export let options: LinkOptions;
</script>

<Button variant="ghost">
	<slot name="icon" />

	{options?.text ?? ''}
</Button>
