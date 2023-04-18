<script>
    import Link from '../link/Link.svelte';
</script>

<Link
    href="#"
    className="transform hover:scale-105"
    aClassName="no-underline"
>
    <div class="menu-item">
        <slot />

        {#if $$slots.description}
            <div class="rounded-xl bg-blue-800 p-1.5 text-white">
                <slot name="description" />
            </div>
        {/if}
    </div>
</Link>

<style lang="postcss">
    .menu-item {
        @apply h-[200px] w-[200px] px-10;
        @apply grid place-items-center text-center;
        @apply bg-no-repeat;
        @apply transform duration-300 ease-in-out hover:scale-105;

        @screen md {
            background-image: url('$lib/assets/svg/0_menu.svg');
            background-size: 100% 100%;
        }
    }
</style>
