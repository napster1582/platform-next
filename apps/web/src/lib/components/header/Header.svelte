<script>
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
    import Logo from '../logo/Logo.svelte';
</script>

<header class="header">
    <Navbar
        class="bg-inherit"
        let:hidden
        let:toggle
    >
        <NavBrand href="/">
            <Logo
                src="jinen"
                className="w-[70px]"
            />
            <span
                class="ml-2 hidden max-w-[200px] self-center text-xl font-semibold dark:text-white md:inline"
            >
                Jefatura integral de educación naval
            </span>
        </NavBrand>
        <NavHamburger on:click={toggle} />
        <NavUl {hidden}>
            <NavLi
                href="/home"
                class="mt-3"
                active={true}>Inicio</NavLi
            >
            <NavLi
                id="nav-about"
                class="mt-3 cursor-pointer"
            >
                <Chevron aligned>Conózcanos</Chevron>
            </NavLi>
            <NavLi>
                <Button>
                    <span class="icon-[solar--login-2-outline] mr-2 text-lg" />

                    Ingresar
                </Button>
            </NavLi>
            <Dropdown
                triggeredBy="#nav-about"
                class="z-20 w-44"
            >
                <DropdownItem href="about">Función</DropdownItem>
                <DropdownItem
                    href="#"
                    class="cursor-not-allowed opacity-20"
                >
                    Jefe de la Jefatura
                </DropdownItem>
                <DropdownItem
                    href="#"
                    class="cursor-not-allowed opacity-20">Organización</DropdownItem
                >
                <DropdownItem
                    href="#"
                    class="cursor-not-allowed opacity-20">DIEDU</DropdownItem
                >
                <DropdownItem href="dicyt">DICYT</DropdownItem>
                <DropdownItem
                    href="#"
                    class="cursor-not-allowed opacity-20">DIHIN</DropdownItem
                >
                <DropdownItem
                    href="#"
                    class="cursor-not-allowed opacity-20">ANEES</DropdownItem
                >
                <DropdownItem
                    href="#"
                    class="cursor-not-allowed opacity-20">OPLAE</DropdownItem
                >
            </Dropdown>
        </NavUl>
    </Navbar>
</header>

<style lang="postcss">
    .header {
        @apply sticky inset-x-0 top-0 z-20;
        @apply bg-red-500 shadow-xl backdrop-blur-sm;
        @apply transition duration-300 ease-linear;

        /* min-height: var(--header-height);
        transform: translateY(calc(var(--header-height) * -1 - 60px)); */
    }
</style>
