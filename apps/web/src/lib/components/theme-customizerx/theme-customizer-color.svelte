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
		{ value: 'zinc', text: 'Zinc' },
		{ value: 'stone', text: 'Stone' },
		{ value: 'blue', text: 'Blue' },
		{ value: 'violet', text: 'Violet' },
		{ value: 'green', text: 'Green' },
		{ value: 'yellow', text: 'Yellow' },
		{ value: 'orange', text: 'Orange' },
		{ value: 'red', text: 'Red' },
		{ value: 'rose', text: 'Rose' },
	];
</script>

<div class="flex flex-1 flex-col gap-y-4 md:gap-y-6">
	<div class="gap-y1">
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
</div>
