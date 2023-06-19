<script lang="ts">
    import { appearanceStore, type WritableAppearance } from '$lib/stores/appearance';
    import type { Datalist } from '$lib/types';
    import Icon from '@iconify/svelte';
    import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@rgossiaux/svelte-headlessui';

    const themes: Datalist<WritableAppearance['theme']> = [
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
        {
            value: 'system',
            text: 'Sistema',
            icon: 'line-md:computer-twotone',
        },
    ];

    let selectedTheme = themes.find((theme) => theme.value === $appearanceStore.theme) ?? themes[2];

    $: {
        appearanceStore.update((state) => ({ ...state, theme: selectedTheme.value }));
    }
</script>

<RadioGroup bind:value={selectedTheme}>
    <RadioGroupLabel class="mb-3 block font-semibold">Tema</RadioGroupLabel>

    {#each themes as theme (theme.value)}
        <RadioGroupOption
            class="{theme.value === selectedTheme.value
                ? 'bg-gray-100 dark:bg-gray-950'
                : 'bg-token'} rounded-token relative mt-1.5 flex cursor-pointer p-2 font-medium hover:bg-gray-100 dark:hover:bg-gray-950"
            value={theme}
            let:checked
        >
            <div class="flex w-full items-center justify-between">
                <div class="flex items-center gap-x-2">
                    <Icon icon={theme.icon ?? ''} />

                    {theme.text}
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
