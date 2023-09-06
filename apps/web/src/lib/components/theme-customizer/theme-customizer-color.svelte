<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Label } from '$lib/components/ui/label';
	import { themeConfig, type ThemeConfig } from '$lib/stores/theme-config';
	import type { Datalist } from '$lib/types/data-list';
	import { cn } from '$lib/utils';
	import Icon from '@iconify/svelte';
	import type { LayoutColumn } from '@jinen/annotations';

	export let columns: LayoutColumn = 1;

	const colors: Datalist<ThemeConfig['color']> = [
		{ value: 'yellow', text: 'Amarillo' },
		{ value: 'blue', text: 'Azul' },
		{ value: 'red', text: 'Rojo' },
		// { value: 'green', text: 'Verde' },
	];
</script>

<div class="flex flex-1 flex-col space-y-1">
	<Label class="text-xs">Color</Label>

	<div class="grid grid-cols-{columns} gap-2">
		{#each colors as color (color.value)}
			{@const isActive = $themeConfig.color === color.value}

			<Button
				class={cn('justify-start', isActive && 'border-2 border-zinc-700 dark:border-white')}
				variant="outline"
				size="sm"
				on:click={() => {
					themeConfig.update((prev) => ({
						...prev,
						color: color.value,
					}));
				}}
			>
				<span
					class={cn(
						'mr-1 flex h-5 w-5 shrink-0 -translate-x-1 items-center justify-center rounded-full text-white',
						`bg-${color.value}-500`,
					)}
				>
					{#if isActive}
						<Icon
							icon="radix-icons:check"
							class="text-lg"
						/>
					{/if}
				</span>

				{color.text}
			</Button>
		{/each}
	</div>
</div>
