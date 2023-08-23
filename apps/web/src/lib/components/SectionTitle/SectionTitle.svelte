<script lang="ts">
	export let tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h4' | 'h5' | 'h6';
</script>

<svelte:element
	this={tag}
	class="jinen-title"
>
	<slot />
</svelte:element>

<style lang="postcss">
	.jinen-title {
		@apply relative;
		@apply from-primary-800 via-primary-400 to-primary-100 bg-gradient-to-br;
		@apply bg-clip-text text-transparent;
		@apply mb-2;
	}
</style>
