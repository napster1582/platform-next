<script lang="ts">
    import type { Menu } from '@jinen/cms-annotations';
    import MenuItem from './MenuItem.svelte';

    import iconDirectory from '$lib/assets/icons/_directory.svg';
    import iconRepository from '$lib/assets/icons/_repository.svg';
    import logoCednav from '$lib/assets/logos/cednav.png';
    import logoGetUnderway from '$lib/assets/logos/get_underway.png';

    export const content: Menu | null = null;
</script>

<nav
    id="jinen-menu"
    class="container my-12 flex flex-wrap items-center justify-center gap-x-24 gap-y-12"
>
    <MenuItem href="#">
        <svelte:fragment slot="title">SEN</svelte:fragment>
        <svelte:fragment slot="description">Software de educación naval</svelte:fragment>
    </MenuItem>

    <MenuItem href="#">
        <svelte:fragment slot="title">SGDOC</svelte:fragment>
        <svelte:fragment slot="description">Software de gestor de doctrinas</svelte:fragment>
    </MenuItem>

    <MenuItem href="#">
        <svelte:fragment slot="title">InnovARC</svelte:fragment>
        <svelte:fragment slot="description">Modelo de gestión de innovación</svelte:fragment>
    </MenuItem>

    <MenuItem
        href="#"
        imageUrl={iconDirectory}
    >
        <svelte:fragment slot="description">Directorio de expertos</svelte:fragment>
    </MenuItem>

    <MenuItem
        href="#"
        imageUrl={iconRepository}
    >
        <svelte:fragment slot="description">Repositorio institucional</svelte:fragment>
    </MenuItem>

    <MenuItem
        href="#"
        imageUrl={logoGetUnderway}
    >
        <svelte:fragment slot="description">Get underway</svelte:fragment>
    </MenuItem>

    <MenuItem
        href="#"
        imageUrl={logoCednav}
    >
        <svelte:fragment slot="description">CEDNAV</svelte:fragment>
    </MenuItem>
</nav>
