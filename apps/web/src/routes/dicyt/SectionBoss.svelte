<script lang="ts">
    import image from '$lib/assets/images/TMP_backdrop_1.jpg';
    import { SectionTitle } from '$lib/components';
</script>

<section>
    <SectionTitle
        tag="h3"
        mode="dark"
    >
        Director
    </SectionTitle>

    <div class="mt-10 grid grid-cols-1 gap-16 lg:grid-cols-2">
        <img
            src={image}
            alt="Foto jefe de jefatura integral de educación naval"
            class="rounded-2xl"
        />

        <div class="prose space-y-3">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi est, enim
                perspiciatis cupiditate asperiores excepturi debitis nemo corporis blanditiis
                provident delectus ea mollitia, saepe suscipit officiis nesciunt, nobis optio
                quibusdam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, porro
                enim dolor aspernatur cupiditate dolore nobis nesciunt quam natus voluptatum
                quibusdam cum ipsa tenetur a? In tempora possimus sed consequuntur.
            </p>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi quibusdam saepe
                corporis soluta cum. Recusandae, eum libero deserunt illum ex natus exercitationem
                quaerat quidem blanditiis qui hic assumenda. Commodi, vel?
            </p>

            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati nulla nostrum,
                corrupti facere accusamus officia magni veritatis quae ducimus placeat tempore,
                consequatur iusto laboriosam distinctio! Unde magni suscipit quaerat culpa.
            </p>
        </div>
    </div>
</section>
