<script lang="ts">
	export let src = '';
	export let autoplay = false;
	export let className = '';

	$: muted = autoplay;
</script>

<video
	class="w-full rounded-token {className}"
	{src}
	{autoplay}
	{muted}
	controls
	{...$$restProps}
/>
