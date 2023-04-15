<script lang="ts">
    import iconFacebook from '$lib/assets/icons/facebook.png';
    import iconInstagram from '$lib/assets/icons/instagram.png';
    import iconLinkedin from '$lib/assets/icons/linkedin.png';
    import iconTwitter from '$lib/assets/icons/twitter.png';

    import backdropFacebook from '$lib/assets/images/TMP_backdrop_0.jpg';
    import backdropInstagram from '$lib/assets/images/TMP_backdrop_1.jpg';
    import backdropLinkedin from '$lib/assets/images/TMP_backdrop_2.jpg';
    import backdropTwitter from '$lib/assets/images/TMP_backdrop_3.jpg';
    import { Link } from '../link';

    const socialNetworks = [
        {
            name: 'Facebook',
            backdrop: backdropFacebook,
            icon: iconFacebook,
            link: '#',
        },
        {
            name: 'Instagram',
            backdrop: backdropInstagram,
            icon: iconInstagram,
            link: '#',
        },
        {
            name: 'Twitter',
            backdrop: backdropTwitter,
            icon: iconTwitter,
            link: '#',
        },
        {
            name: 'Linkedin',
            backdrop: backdropLinkedin,
            icon: iconLinkedin,
            link: '#',
        },
    ];
</script>

<div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-blue-900 rounded-xl p-12 gap-18 md:gap-9 lg:gap-18 my-24"
>
    {#each socialNetworks as network}
        <div class="group h-56 -skew-x-6 rounded-xl overflow-hidden">
            <Link
                href={network.link}
                target="_blank"
                style="background-image: url({network.backdrop})"
                class="h-full w-full bg-center bg-cover grid place-items-center group-hover:invert transition-filter duration-400"
            >
                <!-- TODO: agregar link + locale para el atributo alt -->
                <img
                    src={network.icon}
                    alt="Síguenos en {network.name}"
                    class="object-cover w-24 group-hover:scale-130 transition-transform duration-400"
                />
            </Link>
        </div>
    {/each}
</div>
