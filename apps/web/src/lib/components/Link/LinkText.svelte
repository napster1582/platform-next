<script lang="ts">
    export let text: string;
    export let isExternal: boolean = false;
    export let showArrowForExternalLink: boolean = true;
</script>

<span
    class="link-text"
    class:link-text-ext={showArrowForExternalLink && text && isExternal}
    class:link-text-icon={!text}
>
    <slot name="icon" />
    <span>{text}</span>
</span>

<style lang="postcss">
    .link-text {
        @apply font-medium;
        @apply flex items-center gap-2;

        &:not(.link-text-icon):hover {
            @apply underline;
        }

        &:not(.link-text-icon):focus {
            @apply underline;
        }

        &:visited {
            @apply text-primary-800 dark:text-primary-50;
        }

        &.link-text-ext {
            @apply after:content-['_↗'];
        }

        &.link-text-icon {
            @apply transition-transform;

            &:hover,
            &:focus {
                @apply scale-125;
            }
        }
    }
</style>
