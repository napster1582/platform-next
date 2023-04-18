<script>
    import { Navbar, NavHamburger, NavLi, NavUl } from 'flowbite-svelte';
</script>

<Navbar
    let:hidden
    let:toggle
    color="form"
    class="my-12"
>
    <div class="flex items-center justify-end">
        Menú

        <NavHamburger on:click={toggle} />
    </div>

    <NavUl
        {hidden}
        class="order-1"
    >
        <NavLi href="/">SEN</NavLi>

        <NavLi href="/">SGDOC</NavLi>

        <NavLi href="/">InnovARC</NavLi>
    </NavUl>
</Navbar>
