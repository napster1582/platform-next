<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<div class="container flex h-24 items-center justify-center gap-2">
	<button
		class="splide__toggle rounded-token bg-white/10 px-1 py-0.5 text-white backdrop-blur-md active:scale-95"
	>
		<Icon
			icon="line-md:pause-to-play-filled-transition"
			class="splide__toggle__play text-2xl"
		/>
		<Icon
			icon="line-md:play-filled-to-pause-transition"
			class="splide__toggle__pause text-2xl"
		/>
	</button>
</div>
