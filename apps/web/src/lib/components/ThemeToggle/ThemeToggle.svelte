<script lang="ts">
    import { themeStore, type WritableTheme } from '$lib/stores/theme';
    import type { Datalist } from '$lib/types';
    import Icon from '@iconify/svelte';
    import {
        Listbox,
        ListboxButton,
        ListboxOption,
        ListboxOptions,
        Transition,
    } from '@rgossiaux/svelte-headlessui';

    const themes: Datalist<WritableTheme['schema']> = [
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

    let selectedTheme = themes.find((theme) => theme.value === $themeStore.schema) ?? themes[2];

    $: {
        themeStore.update((state) => ({ ...state, schema: selectedTheme.value }));
    }
</script>

<Listbox
    class="listbox"
    let:open
    bind:value={selectedTheme}
>
    <ListboxButton class="listbox-button btn">
        <Icon
            icon={selectedTheme.icon ?? ''}
            class="text-xl"
        />

        <span class="hidden md:inline">
            {selectedTheme.text}
        </span>

        {#if open}
            <Icon icon="ph:caret-up" />
        {:else}
            <Icon icon="ph:caret-down" />
        {/if}
    </ListboxButton>

    <Transition
        show={open}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
    >
        <ListboxOptions
            class="listbox-options listbox-options-br w-40"
            static
        >
            {#each themes as theme (theme.value)}
                <ListboxOption
                    let:active
                    let:selected
                    value={theme}
                >
                    <button
                        class="listbox-options-item"
                        class:listbox-options-item-active={active}
                        class:listbox-options-item-selected={selected}
                    >
                        <Icon
                            icon={theme.icon ?? ''}
                            class="text-xl"
                        />

                        <span class="ml-3 text-sm font-semibold">{theme.text}</span>
                    </button>
                </ListboxOption>
            {/each}
        </ListboxOptions>
    </Transition>
</Listbox>
