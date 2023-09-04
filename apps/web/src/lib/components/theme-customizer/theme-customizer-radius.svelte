<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Label } from '$lib/components/ui/label';
	import { themeConfig, type ThemeConfig } from '$lib/stores/theme-config';
	import type { Datalist } from '$lib/types/data-list';
	import { cn } from '$lib/utils';
	import type { LayoutColumn } from '@jinen/annotations';

	export let columns: LayoutColumn = 1;

	const radii: Datalist<ThemeConfig['radius']> = [
		{ value: '0', text: '0' },
		{ value: '0.3', text: '0.3' },
		{ value: '0.5', text: '0.5' },
		{ value: '0.75', text: '0.75' },
		{ value: '1.0', text: '1.0' },
	];
</script>

<div class="flex flex-1 flex-col space-y-1">
	<Label class="text-xs">Radio</Label>

	<div class="grid grid-cols-{columns} gap-2">
		{#each radii as radius (radius.value)}
			{@const isActive = $themeConfig.radius === radius.value}

			<Button
				variant="outline"
				size="sm"
				class={cn('', isActive && 'border-2 border-zinc-700 dark:border-white')}
				on:click={() => {
					themeConfig.update((prev) => ({
						...prev,
						radius: radius.value,
					}));
				}}
			>
				{radius.text}
			</Button>
		{/each}
	</div>
</div>
