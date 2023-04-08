<script lang="ts">
    import 'uno.css';
    import '../theme/styles.css';
</script>

<div class="app">
    <header>HEADER</header>

    <main>
        <slot />
    </main>

    <footer>FOOTER</footer>
</div>

<style lang="postcss">
    .app {
        @apply h-screen flex flex-col;
    }

    main {
        @apply flex flex-1 flex-col;
    }
</style>
