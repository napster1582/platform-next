<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Label } from '$lib/components/ui/label';
	import { themeConfig, type ThemeConfig } from '$lib/stores/theme-config';
	import type { Datalist } from '$lib/types/data-list';
	import { cn } from '$lib/utils';
	import Icon from '@iconify/svelte';
	import type { LayoutColumn } from '@jinen/annotations';

	export let columns: LayoutColumn = 1;

	const modes: Datalist<ThemeConfig['mode']> = [
		{
			value: 'system',
			text: 'Sistema',
			icon: 'line-md:computer-twotone',
		},
		{
			value: 'light',
			text: 'Claro',
			icon: 'line-md:moon-alt-to-sunny-outline-loop-transition',
		},
		{
			value: 'dark',
			text: 'Oscuro',
			icon: 'line-md:moon-twotone-loop',
		},
	];
</script>

<div class="flex flex-1 flex-col gap-y-4 md:gap-y-6">
	<div class="gap-y1">
		<Label class="text-xs">Modo</Label>

		<div class="grid grid-cols-{columns} gap-2">
			{#each modes as mode (mode.value)}
				{@const isActive = $themeConfig.mode === mode.value}

				<Button
					variant="outline"
					size="sm"
					class={cn('', isActive && 'border-2 border-zinc-700 dark:border-white')}
					on:click={() => {
						themeConfig.update((prev) => ({
							...prev,
							mode: mode.value,
						}));
					}}
				>
					{#if mode.icon}
						<Icon
							icon={mode.icon}
							class="text-xl"
						/>
					{/if}

					{mode.text}
				</Button>
			{/each}
		</div>
	</div>
</div>
