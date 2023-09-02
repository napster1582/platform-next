<script lang="ts">
	export let value: number;
</script>

<div
	class="h-4 w-full overflow-hidden bg-token-primary transition"
	role="progressbar"
	aria-valuemin={0}
	aria-valuemax={100}
	aria-valuenow={value}
>
	<div
		class="h-full rounded-token bg-gradient-to-r from-black via-primary-950 to-primary-500 text-center text-xs text-white transition-all duration-300 ease-in-out"
		style={`width: ${value}%`}
	>
		{value}%
	</div>
</div>
