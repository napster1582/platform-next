<script lang="ts">
	export let src = '';
	export let alt = '';
	export let loading: 'eager' | 'lazy' = 'eager';
	export let className = '';
</script>

<img
	class="w-full rounded-token {className}"
	{src}
	{alt}
	{loading}
	{...$$restProps}
/>
