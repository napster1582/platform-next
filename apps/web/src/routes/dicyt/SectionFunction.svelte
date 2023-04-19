<script lang="ts">
    import image from '$lib/assets/images/section_shield_dicyt.png';
    import { SectionTitle } from '$lib/components';
</script>

<section>
    <SectionTitle
        tag="h3"
        mode="dark"
    >
        Dirección de Ciencia y Tecnología Naval
    </SectionTitle>

    <div class="mt-10">
        <p>
            Direccionar el Sistema de Ciencia, Tecnología e Innovación de la Armada Nacional de
            acuerdo lo establecido en los objetivos estratégicos de la Jefatura, las políticas
            institucionales y en el Plan de Desarrollo Naval vigente.
        </p>
        <div class="flex w-full justify-center py-5">
            <img
                class="w-44"
                src={image}
                alt="Escudo direccion de ciencia y tecnologia naval"
            />
        </div>
    </div>
</section>
