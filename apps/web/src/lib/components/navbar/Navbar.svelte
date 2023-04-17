<script lang="ts">
    import { Link } from '../link';

    // TODO: use locales
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
            icon: 'icon-[solar--login-2-bold-duotone]',
        },
    ];
</script>

<div class="flex items-center gap-6 text-inherit">
    {#each navbarItems as item}
        <Link
            href={item.link}
            className="whitespace-nowrap"
        >
            {#if item.icon}
                <span class={item.icon} />
            {/if}

            {item.name}
        </Link>
    {/each}
</div>
