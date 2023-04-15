<script lang="ts">
    import 'uno.css';
    import '../theme/styles.css';
</script>

<div class="app">
    <slot />
</div>

<style lang="postcss">
    .app {
        @apply h-screen flex flex-col;
    }
</style>
