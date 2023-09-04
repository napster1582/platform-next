<script lang="ts">
	import { Alert, AlertDescription, AlertTitle } from '$lib/components/ui/alert';
	import Icon from '@iconify/svelte';
</script>

<Alert>
	<Icon
		icon="lucide:terminal"
		class="text-2xl"
	></Icon>

	<AlertTitle>
		<slot name="title" />
	</AlertTitle>

	<AlertDescription>
		<slot name="description" />
	</AlertDescription>
</Alert>
