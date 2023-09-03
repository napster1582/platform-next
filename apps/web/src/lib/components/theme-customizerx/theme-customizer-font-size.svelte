<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Label } from '$lib/components/ui/label';
	import { themeConfig, type ThemeConfig } from '$lib/stores/theme-config';
	import type { Datalist } from '$lib/types/data-list';
	import { cn } from '$lib/utils';
	import type { LayoutColumn } from '@jinen/annotations';

	export let columns: LayoutColumn = 1;

	const fontSizes: Datalist<ThemeConfig['fontSize']> = [
		{ value: 'sm', text: 'Pequeña' },
		{ value: 'md', text: 'Mediana' },
		{ value: 'lg', text: 'Grande' },
	];
</script>

<div class="flex flex-1 flex-col gap-y-4 md:gap-y-6">
	<div class="gap-y1">
		<Label class="text-xs">Tamaño de fuente</Label>

		<div class="grid grid-cols-{columns} gap-2">
			{#each fontSizes as size (size.value)}
				{@const isActive = $themeConfig.fontSize === size.value}

				<Button
					variant="outline"
					size="sm"
					class={cn('', isActive && 'border-2 border-zinc-700 dark:border-white')}
					on:click={() => {
						themeConfig.update((prev) => ({
							...prev,
							fontSize: size.value,
						}));
					}}
				>
					{size.text}
				</Button>
			{/each}
		</div>
	</div>
</div>
