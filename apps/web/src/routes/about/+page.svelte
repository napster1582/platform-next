<script lang="ts">
    import SectionBoss from './SectionBoss.svelte';
    import SectionFunction from './SectionFunction.svelte';
    import SectionOrganization from './SectionOrganization.svelte';
</script>

<div class="container mt-12">
    <main class="flex flex-col gap-y-12">
        <SectionFunction />
        <SectionBoss />
        <SectionOrganization />
    </main>
</div>
