<script lang="ts">
    import SectionBoss from './SectionBoss.svelte';
    import SectionFunction from './SectionFunction.svelte';
    import SectionInnovation from './SectionInnovation.svelte';
    import SectionOrganization from './SectionOrganization.svelte';
    import SectionScienceSystem from './SectionScienceSystem.svelte';
</script>

<div class="container mt-12">
    <main class="flex flex-col gap-y-24">
        <SectionFunction />
        <SectionBoss />
        <SectionOrganization />
        <SectionScienceSystem />
        <SectionInnovation />
    </main>
</div>
