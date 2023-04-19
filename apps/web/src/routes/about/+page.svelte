<script lang="ts">
    import SectionBoss from './SectionBoss.svelte';
    import SectionFunction from './SectionFunction.svelte';
    import SectionOrganization from './SectionOrganization.svelte';
</script>

<main class="flex flex-col">
    <section
        id="section-function"
        class="m relative"
    >
        <div class="container mt-10">
            <SectionFunction />
        </div>
    </section>
    <section
        id="section-boss"
        class="relative"
    >
        <div class="container mt-10">
            <SectionBoss />
        </div>
    </section>
    <section
        id="section-organization"
        class="relative"
    >
        <div class="container mt-10">
            <SectionOrganization />
        </div>
    </section>
</main>
