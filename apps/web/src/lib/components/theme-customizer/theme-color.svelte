<script lang="ts">
	import type { Datalist } from '$lib/types';
	import type { ThemeColor } from '$lib/types/theme';
	import { getThemeColor, setThemeColor } from '$lib/utils/theme';
	import Icon from '@iconify/svelte';
	import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@rgossiaux/svelte-headlessui';

	const colors: Datalist<ThemeColor> = [
		{ value: 'blue', text: 'Azul' },
		{ value: 'green', text: 'Verde' },
		{ value: 'red', text: 'Rojo' },
		{ value: 'yellow', text: 'Amarillo' },
		{ value: 'purple', text: 'Púrpura' },
	];

	let selectedColor = colors.find((color) => color.value === getThemeColor())!;

	$: {
		setThemeColor(selectedColor.value);
	}
</script>

<RadioGroup
	class="radio-group"
	bind:value={selectedColor}
>
	<RadioGroupLabel class="radio-group-label">Color de acentuación</RadioGroupLabel>

	{#each colors as color (color.value)}
		<RadioGroupOption
			class={({ checked }) => (checked ? 'radio-group-option active' : 'radio-group-option')}
			value={color}
			let:checked
		>
			<div class="flex w-full items-center justify-between">
				<div class="flex items-center gap-x-2">
					<Icon
						icon="line-md:paint-drop-half-filled"
						class="text-{color.value}-500"
					/>

					{color.text}
				</div>

				{#if checked}
					<div class="flex-shrink-0">
						<Icon
							icon="line-md:circle-to-confirm-circle-twotone-transition"
							class="text-2xl text-{color.value}-500"
						/>
					</div>
				{/if}
			</div>
		</RadioGroupOption>
	{/each}
</RadioGroup>
