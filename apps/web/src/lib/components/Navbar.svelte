<script lang="ts">
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
        <a href={item.link}>{item.name}</a>
    {/each}
</div>
