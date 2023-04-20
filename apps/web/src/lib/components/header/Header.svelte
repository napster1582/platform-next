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
        navClass="bg-[#1a56db] text-white py-0.5"
        let:hidden
        let:toggle
    >
        <NavBrand href="/">
            <Logo
                src="jinen"
                className="w-[70px]"
            />
            <span
                class="ml-2 hidden max-w-[200px] self-center text-xl font-semibold capitalize dark:text-white md:inline"
            >
                Jefatura integral de educación naval
            </span>
        </NavBrand>
        <NavHamburger on:click={toggle} />
        <NavUl
            {hidden}
            ulClass="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium bg-[#1a56db] border-none"
        >
            <NavLi
                href="/home"
                nonActiveClass="text-white mt-3">Inicio</NavLi
            >
            <NavLi
                id="nav-about"
                nonActiveClass="text-white cursor-pointer mt-3"
            >
                <Chevron aligned>Conózcanos</Chevron>
            </NavLi>
            <NavLi>
                <Button color="light">
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
        @apply shadow-xl;
        @apply transition duration-300 ease-linear;

        /* min-height: var(--header-height);
        transform: translateY(calc(var(--header-height) * -1 - 60px)); */
    }
</style>
