<script lang="ts">
	import { cn } from '$lib/utils';

	let className: string = '';

	export let src = '';
	export let alt = '';
	export let loading: 'eager' | 'lazy' = 'eager';
	export { className as class };
</script>

<img
	class={cn('h-full w-full rounded-token object-cover', className)}
	{src}
	{alt}
	{loading}
	{...$$restProps}
/>
