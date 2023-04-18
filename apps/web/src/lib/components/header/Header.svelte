<script>
    import {
        Button,
        Chevron,
        Dropdown,
        DropdownItem,
        Navbar,
        NavBrand,
        NavHamburger,
        NavLi,
        NavUl,
    } from 'flowbite-svelte';
    import Logo from '../logo/Logo.svelte';
</script>

<Navbar
    let:hidden
    let:toggle
    color="form"
>
    <NavBrand href="/">
        <Logo
            src="jinen"
            className="w-[70px]"
        />
        <span class="ml-2 max-w-[200px] self-center text-xl font-semibold dark:text-white">
            Jefatura integral de educación naval
        </span>
    </NavBrand>

    <div class="flex items-center justify-end">
        <NavUl
            {hidden}
            class="order-1"
        >
            <NavLi
                href="/"
                active={true}>Inicio</NavLi
            >

            <NavLi
                id="nav-about"
                class="cursor-pointer"
            >
                <Chevron aligned>Conózcanos</Chevron>
            </NavLi>

            <Dropdown
                triggeredBy="#nav-about"
                class="z-20 w-44"
            >
                <DropdownItem href="about">Función</DropdownItem>
                <DropdownItem href="#">Jefe de la Jefatura</DropdownItem>
                <DropdownItem href="org">Organización</DropdownItem>
                <DropdownItem href="diedu">DIEDU</DropdownItem>
                <DropdownItem href="dicyt">DICYT</DropdownItem>
                <DropdownItem href="dihin">DIHIN</DropdownItem>
                <DropdownItem href="anees">ANEES</DropdownItem>
                <DropdownItem href="oplae">OPLAE</DropdownItem>
            </Dropdown>
        </NavUl>

        <div class="flex md:order-2">
            <Button>
                <span class="icon-[solar--login-2-outline] mr-2 text-lg" />

                Ingresar
            </Button>

            <NavHamburger on:click={toggle} />
        </div>
    </div>
</Navbar>

<style lang="postcss">
    .jinen-header-0 {
        background-image: url('$lib/assets/svg/0_header.svg');
        background-size: 100% 100%;
        background-blend-mode: luminosity;
    }
</style>
