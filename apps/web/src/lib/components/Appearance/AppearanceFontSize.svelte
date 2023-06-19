<script lang="ts">
    import { appearanceStore, type WritableAppearance } from '$lib/stores/appearance';
    import type { Datalist } from '$lib/types';
    import Icon from '@iconify/svelte';
    import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@rgossiaux/svelte-headlessui';

    const fontSizes: Datalist<WritableAppearance['fontSize']> = [
        { value: 'sm', text: 'Pequeño' },
        { value: 'md', text: 'Mediano' },
        { value: 'lg', text: 'Grande' },
    ];

    let selectedFontSize =
        fontSizes.find((size) => size.value === $appearanceStore.fontSize) ?? fontSizes[1];

    $: {
        appearanceStore.update((state) => ({ ...state, fontSize: selectedFontSize.value }));
    }
</script>

<RadioGroup bind:value={selectedFontSize}>
    <RadioGroupLabel class="mb-3 block font-semibold">Tamaño de fuente</RadioGroupLabel>

    {#each fontSizes as size (size.value)}
        <RadioGroupOption
            class="{size.value === selectedFontSize.value
                ? 'bg-gray-100 dark:bg-gray-950'
                : 'bg-token'} rounded-token relative mt-1.5 flex cursor-pointer p-2 font-medium hover:bg-gray-100 dark:hover:bg-gray-950"
            value={size}
            let:checked
        >
            <div class="flex w-full items-center justify-between">
                <div class="flex items-center gap-x-2">
                    <Icon icon="majesticons:font-size" />

                    {size.text}
                </div>

                {#if checked}
                    <div class="flex-shrink-0">
                        <Icon
                            icon="material-symbols:check-circle"
                            class="text-2xl"
                        />
                    </div>
                {/if}
            </div>
        </RadioGroupOption>
    {/each}
</RadioGroup>
