<script lang="ts">
    import { appearanceStore, type WritableAppearance } from '$lib/stores/appearance';
    import type { Datalist } from '$lib/types';
    import Icon from '@iconify/svelte';
    import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@rgossiaux/svelte-headlessui';

    const borders: Datalist<WritableAppearance['borderRadius']> = [
        { value: 'none', text: 'Sin radio' },
        { value: 'sm', text: 'SM' },
        { value: 'md', text: 'MD' },
        { value: 'lg', text: 'LG' },
        { value: 'xl', text: 'XL' },
        { value: '2xl', text: '2XL' },
        { value: '3xl', text: '3XL' },
    ];

    let selectedBorder =
        borders.find((border) => border.value === $appearanceStore.borderRadius) ?? borders[3];

    $: {
        appearanceStore.update((state) => ({ ...state, borderRadius: selectedBorder.value }));
    }
</script>

<RadioGroup bind:value={selectedBorder}>
    <RadioGroupLabel class="mb-3 block font-semibold">Estilo de bordes</RadioGroupLabel>

    {#each borders as border (border.value)}
        <RadioGroupOption
            class="{border.value === selectedBorder.value
                ? 'bg-gray-100 dark:bg-gray-950'
                : 'bg-token'} rounded-token relative mt-1.5 flex cursor-pointer p-2 font-medium hover:bg-gray-100 dark:hover:bg-gray-950"
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
                            icon="material-symbols:check-circle"
                            class="text-2xl"
                        />
                    </div>
                {/if}
            </div>
        </RadioGroupOption>
    {/each}
</RadioGroup>
