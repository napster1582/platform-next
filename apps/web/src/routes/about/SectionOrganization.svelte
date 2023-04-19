<script lang="ts">
    import imageOrganization from '$lib/assets/images/section_organization.png';
    import { SectionTitle } from '$lib/components';
</script>

<section>
    <SectionTitle
        tag="h3"
        mode="dark"
    >
        Organización
    </SectionTitle>

    <div class="mt-10 flex justify-center">
        <img
            src={imageOrganization}
            alt="Imagen de organizacion"
        />
    </div>
</section>
