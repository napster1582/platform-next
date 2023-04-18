<!-- <script lang="ts">
    import { Button, Chevron, Dropdown, DropdownItem } from 'flowbite-svelte';
    import { navbarItems } from '../header/store';
    import Link from '../link/Link.svelte';

    $: items = $navbarItems;
</script>

<div class="flex items-center gap-2 text-inherit">
    {#each items as item}
        {@const hasChildren = item.children?.length}

        {#if hasChildren}
            <Button class="whitespace-nowrap bg-transparent hover:bg-transparent">
                {#if item.icon}
                    <span class={item.icon} />
                {/if}

                {item.name}
                <Chevron />
            </Button>
            <Dropdown>
                {#each item.children || [] as child}
                    <DropdownItem href={child.link || '#'}>
                        {child.name}
                    </DropdownItem>
                {/each}
            </Dropdown>
        {:else}
            <svelte:component
                this={item.styling === 'link' ? Link : Button}
                href={item.link || '#'}
                class="whitespace-nowrap font-medium text-inherit"
            >
                {#if item.icon}
                    <span class="{item.icon} mr-2" />
                {/if}

                {item.name}
            </svelte:component>
        {/if}
    {/each}
</div> -->
