<script lang="ts">
    import imageOrganization from '$lib/assets/images/section_organization_dicyt.png';
    import { Cta, SectionTitle } from '$lib/components';
    import { Badge } from 'flowbite-svelte';

    const subOrganizations = [
        { title: 'Jefatura Integral de Educación Naval', acronym: 'JINEN', link: '#' },
        { title: 'Dirrección de Ciencia y Tecnología Naval', acronym: 'DICYT', link: '#' },
        { title: 'Division de Gestión Tecnológica', acronym: 'DIVGT', link: '#' },
        {
            title: 'División de Investigación, Desarrollo e innovación',
            acronym: 'DIVID',
            link: '#',
        },
        { title: 'División de Centros Tecnológicos e Investigación', acronym: 'DIVCT', link: '#' },
    ];
</script>

<section>
    <SectionTitle
        tag="h3"
        mode="dark"
    >
        Organización
    </SectionTitle>

    <div class="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div class="grid grid-cols-1 gap-6">
            {#each subOrganizations as organization, i}
                <div class="relative">
                    <Badge
                        color="yellow"
                        class="absolute -top-2 left-2 ml-4">{organization.acronym}</Badge
                    >

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
                </div>
            {/each}
        </div>

        <div class="flex flex-col gap-y-6">
            <img
                src={imageOrganization}
                alt="Imagen de organizacion"
            />
        </div>
    </div>
</section>
