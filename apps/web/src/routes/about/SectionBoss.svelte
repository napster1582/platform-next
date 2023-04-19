<script lang="ts">
    import image from '$lib/assets/images/TMP_backdrop_0.jpg';
    import { SectionTitle } from '$lib/components';
</script>

<section>
    <SectionTitle
        tag="h3"
        mode="dark"
    >
        Jefe de la jefatura integral de Educación Naval
    </SectionTitle>

    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 lg:grid-cols-2">
        <img
            src={image}
            alt="Foto jefe de jefatura integral de educación naval"
        />

        <div class="space-y-3">
            <p>
                Oficial del cuerpo Ejecutivo Superficie. Ingresó a la Escuela Naval de Cadetes
                “Almirante Padilla” en enero de 1992; ascendió al grado de Teniente de Corbeta en
                diciembre de 1995; obtuvo el título de Ingeniero Naval Especialidad Electrónica en
                2002; recibió su grado de Maestría en Ingeniería Electrónica (Sistemas de
                Instrumentación y Comunicaciones) de la Universidad de Barcelona en 2012, y su grado
                de Doctor en Ingeniería Electrónica (Sistemas Electrónicos de Potencia y Control) de
                la Universidad Politécnica de Catalunya en enero de 2019 con calificación
                sobresaliente cum laude.
            </p>
            <p />
            En su carrera militar, ha pertenecido a diferentes unidades a flote en la Flotilla de Superficie
            del Caribe y en la Flotilla de Superficie del Pacífico, así como a la Escuela Naval de Cadetes
            “Almirante Padilla” y a la Escuela Naval de Suboficiales ARC “Barranquilla”. Adicionalmente,
            se ha desempeñado como Jefe de Operaciones del Buque Escuela ARC “Gloria” y Comandante de
            los buques ARC “Ariari” y ARC “TFCIM Juan Ricardo Oyola Vera”.
            <p />
            Durante los año 2021 y 2022 se desempeñó como Director de Ciencia y Tecnología Naval. Actualmente
            es el Jefe de la Jefatura Integral de Educación Naval de la Armada Nacional.
            <p />
        </div>
    </div>
</section>
