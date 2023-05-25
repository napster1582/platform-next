<script lang="ts">
    import {
        Button,
        Chevron,
        Dropdown,
        DropdownItem,
        NavBrand,
        NavHamburger,
        NavLi,
        NavUl,
        Navbar,
    } from 'flowbite-svelte';

    export let data: any;
</script>

<header class="header">
    <Navbar
        navClass="bg-inherit text-white py-2 xl:py-0.5"
        color="none"
        let:hidden
        let:toggle
    >
        <NavBrand href="/">
            <img
                src={data.logo?.url}
                class="w-[70px]"
                alt="Jinen logo"
            />
            <span
                class="ml-2 hidden max-w-[200px] self-center text-xl font-semibold capitalize dark:text-white md:inline"
            >
                {data.title}
            </span>
        </NavBrand>

        <NavHamburger on:click={toggle} />

        <NavUl
            {hidden}
            ulClass="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium bg-inherit border-none"
            nonActiveClass="text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
            {#each data.navbar?.navbarItem ?? [] as item}
                {#if item.children.length}
                    <NavLi
                        id="nav-about"
                        nonActiveClass="text-white cursor-pointer mt-3"
                    >
                        <Chevron aligned>
                            {item.caption}
                        </Chevron>
                    </NavLi>

                    <Dropdown
                        triggeredBy="#nav-about"
                        class="z-20 w-44"
                    >
                        {#each item.children as child}
                            <DropdownItem
                                href={child.href}
                                class={child.isDisabled && 'cursor-not-allowed opacity-20'}
                            >
                                {child.caption}
                            </DropdownItem>
                        {/each}
                    </Dropdown>
                {:else if item.style === 'button'}
                    <NavLi>
                        <Button color="light">
                            {item.caption}
                        </Button>
                    </NavLi>
                {:else}
                    <NavLi
                        href={item.href}
                        nonActiveClass="text-white mt-3"
                    >
                        {item.caption}
                    </NavLi>
                {/if}
            {/each}
        </NavUl>
    </Navbar>
</header>

<style lang="postcss">
    .header {
        @apply bg-blue-600;
        @apply sticky inset-x-0 top-0 z-20;
        @apply shadow-xl;
        @apply transition duration-300 ease-linear;
    }
</style>
