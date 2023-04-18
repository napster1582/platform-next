<script>
    import { Navbar, NavHamburger, NavLi, NavUl } from 'flowbite-svelte';
    import MenuItem from './MenuItem.svelte';
</script>

<Navbar
    let:hidden
    let:toggle
    color="form"
    class="my-12"
>
    <div class="flex items-center justify-end">
        <span class="inline-block lg:hidden"> Menú </span>

        <NavHamburger on:click={toggle} />
    </div>

    <NavUl
        {hidden}
        class="order-1"
    >
        <NavLi>
            <MenuItem>
                SEN

                <svelte:fragment slot="description">Software de educación naval</svelte:fragment>
            </MenuItem>
        </NavLi>
        <NavLi>
            <MenuItem>
                SGDOC

                <svelte:fragment slot="description"
                    >Software de gestor de doctrinas
                </svelte:fragment>
            </MenuItem>
        </NavLi>
        <NavLi>
            <MenuItem>
                InnovARC

                <svelte:fragment slot="description">
                    Modelo de gestión de innovación
                </svelte:fragment>
            </MenuItem>
        </NavLi>
    </NavUl>
</Navbar>
