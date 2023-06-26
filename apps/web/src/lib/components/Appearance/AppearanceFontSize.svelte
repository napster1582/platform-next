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

<RadioGroup
    class="radio-group"
    bind:value={selectedFontSize}
>
    <RadioGroupLabel class="radio-group-label">Tamaño de fuente</RadioGroupLabel>

    {#each fontSizes as size (size.value)}
        <RadioGroupOption
            class={({ checked }) => (checked ? 'radio-group-option active' : 'radio-group-option')}
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
                            icon="line-md:circle-to-confirm-circle-twotone-transition"
                            class="text-2xl"
                        />
                    </div>
                {/if}
            </div>
        </RadioGroupOption>
    {/each}
</RadioGroup>
