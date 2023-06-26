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

<RadioGroup
    class="radio-group"
    bind:value={selectedTheme}
>
    <RadioGroupLabel class="radio-group-label">Tema</RadioGroupLabel>

    {#each themes as theme (theme.value)}
        <RadioGroupOption
            class={({ checked }) => (checked ? 'radio-group-option active' : 'radio-group-option')}
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
                            icon="line-md:circle-to-confirm-circle-twotone-transition"
                            class="text-2xl"
                        />
                    </div>
                {/if}
            </div>
        </RadioGroupOption>
    {/each}
</RadioGroup>
