<script lang="ts">
    import Menu from 'lib/components/menu/Menu.svelte';
    import SocialNetworks from 'lib/components/social-networks/SocialNetworks.svelte';
    import Hero from './Hero.svelte';
    import SectionDimensions from './SectionDimensions.svelte';
    import SectionSchedule from './SectionSchedule.svelte';
    import SectionSchools from './SectionSchools.svelte';
</script>

<Hero />

<div class="container">
    <Menu />

    <main class="flex flex-col gap-y-24">
        <SectionDimensions />
        <SectionSchools />
        <SectionSchedule />
    </main>

    <SocialNetworks />
</div>
