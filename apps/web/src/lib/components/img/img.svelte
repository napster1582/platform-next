<script lang="ts">
	export let src = '';
	export let alt = '';
	export let loading: 'eager' | 'lazy' = 'eager';
	export let className = '';
</script>

<img
	class="h-full w-full rounded-token object-cover {className}"
	{src}
	{alt}
	{loading}
	{...$$restProps}
/>
