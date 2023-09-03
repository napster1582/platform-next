<!-- <script lang="ts">
	import type { Datalist } from '$lib/types/data-list';
	import type { ThemeRadius } from '$lib/types/theme';
	import { getThemeRadius, setThemeRadius } from '$lib/utils/theme';
	import Icon from '@iconify/svelte';
	import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@rgossiaux/svelte-headlessui';

	const borders: Datalist<ThemeRadius> = [
		{ value: 'none', text: 'Sin radio' },
		{ value: 'sm', text: 'SM' },
		{ value: 'md', text: 'MD' },
		{ value: 'lg', text: 'LG' },
		{ value: 'xl', text: 'XL' },
		{ value: '2xl', text: '2XL' },
		{ value: '3xl', text: '3XL' },
	];

	let selectedRadius = borders.find((border) => border.value === getThemeRadius())!;

	$: {
		setThemeRadius(selectedRadius.value);
	}
</script>

<RadioGroup
	class="radio-group"
	bind:value={selectedRadius}
>
	<RadioGroupLabel class="radio-group-label">Estilo de bordes</RadioGroupLabel>

	{#each borders as border (border.value)}
		<RadioGroupOption
			class={({ checked }) => (checked ? 'radio-group-option active' : 'radio-group-option')}
			value={border}
			let:checked
		>
			<div class="flex w-full items-center justify-between">
				<div class="flex items-center gap-x-2">
					<Icon icon="tabler:border-radius" />

					{border.text}
				</div>

				{#if checked}
					<div class="flex-shrink-0">
						<Icon
							icon="line-md:circle-to-confirm-circle-twotone-transition"
							class="text-2xl"
						/>
					</div>
				{/if}
			</div>
		</RadioGroupOption>
	{/each}
</RadioGroup> -->
