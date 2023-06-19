<script lang="ts">
    import { appearanceStore, type WritableAppearance } from '$lib/stores/appearance';
    import type { Datalist } from '$lib/types';
    import Icon from '@iconify/svelte';
    import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@rgossiaux/svelte-headlessui';

    const colors: Datalist<WritableAppearance['primaryColor']> = [
        { value: 'blue', text: 'Azul' },
        { value: 'green', text: 'Verde' },
        { value: 'red', text: 'Rojo' },
        { value: 'yellow', text: 'Amarillo' },
        { value: 'purple', text: 'Púrpura' },
    ];

    let selectedColor =
        colors.find((color) => color.value === $appearanceStore.primaryColor) ?? colors[0];

    $: {
        appearanceStore.update((state) => ({ ...state, primaryColor: selectedColor.value }));
    }
</script>

<RadioGroup bind:value={selectedColor}>
    <RadioGroupLabel class="mb-3 block font-semibold">Color de acentuación</RadioGroupLabel>

    {#each colors as color (color.value)}
        <RadioGroupOption
            class="{color.value === selectedColor.value
                ? `bg-${color.value}-400 text-black`
                : 'bg-token hover:bg-gray-100 dark:hover:bg-gray-950'} rounded-token relative mt-1.5 flex cursor-pointer px-5 py-2 font-medium"
            value={color}
            let:checked
        >
            <div class="flex w-full items-center justify-between">
                <div class="flex items-center gap-x-2">
                    <Icon
                        icon="line-md:paint-drop-half-filled"
                        class="text-{color.value}-600"
                    />

                    {color.text}
                </div>

                {#if checked}
                    <div class="flex-shrink-0">
                        <Icon
                            icon="material-symbols:check-circle"
                            class="text-2xl text-{color.value}-800"
                        />
                    </div>
                {/if}
            </div>
        </RadioGroupOption>
    {/each}
</RadioGroup>
