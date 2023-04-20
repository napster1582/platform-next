<script lang="ts">
    import imageInnovarc from '$lib/assets/images/section_InnovARC.jpg';
    import { Cta, SectionTitle } from '$lib/components';

    const organizations = [
        { title: 'Gestión de Bancos de proyectos', link: '#' },
        { title: 'Gestión de proyectos I+D+i', link: '#' },
        { title: 'Gestión de Convenios Offset', link: '#' },
        { title: 'Grupos de investigación', link: '#' },
        { title: 'CEDNAV', link: '#' },
        { title: 'Gestión de resultados', link: '#' },
        { title: 'Gestión de Bancos de proyectos', link: '#' },
        { title: 'Alianzas estratégicas', link: '#' },
    ];
</script>

<section>
    <SectionTitle
        tag="h3"
        mode="dark"
    >
        Modelo de gestión de la Innovación - InnovARC
    </SectionTitle>

    <div class="grid grid-cols-1 gap-12 xl:grid-cols-3">
        <div class="xl:col-span-2">
            <img
                src={imageInnovarc}
                alt="Imagen de innovARC"
            />
        </div>

        <div class="grid grid-cols-1 gap-6">
            {#each organizations as organization, i}
                <Cta href={organization.link}>
                    <svelte:fragment slot="icon">
                        {#if i % 2 === 0}
                            <img
                                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Water%20Wave.png"
                                alt="Water Wave"
                                width="55"
                                height="55"
                                class="mr-3"
                            />
                        {:else}
                            <img
                                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Milky%20Way.png"
                                alt="Milky Way"
                                width="55"
                                height="55"
                                class="mr-3"
                            />
                        {/if}
                    </svelte:fragment>

                    {organization.title}
                </Cta>
            {/each}
        </div>
    </div>
</section>
