<script lang="ts">
    import { Link } from '../link';

    // TODO: localize
    const navbarItems = [
        {
            name: 'Inicio',
            link: '#',
        },
        {
            name: 'Conózcanos',
            link: '#',
        },
        {
            name: 'Ingresar',
            link: '#',
        },
    ];
</script>

<div class="flex items-center gap-6 text-inherit">
    {#each navbarItems as item}
        <Link href={item.link}>{item.name}</Link>
    {/each}
</div>
