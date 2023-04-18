<script lang="ts">
    import { A } from 'flowbite-svelte';

    export let href: string;
    export let targetBlank = false;
    export let nofollow = false;
    export let disabled = false;
    export let title: string | undefined = undefined;
    export let className = '';

    $: disabled = href ? disabled : true;
    $: external = href.indexOf('://') !== -1;
    $: target = targetBlank || external ? '_blank' : undefined;
    $: rel = `${external ? 'noopener noreferrer' : ''}` + `${nofollow ? 'nofollow' : ''}`;
</script>

<A
    {href}
    {target}
    {rel}
    {title}
    class={className}
    {...$$restProps}
    aria-disabled={disabled ? 'true' : undefined}
    tabIndex={disabled ? -1 : undefined}
>
    <slot />
</A>
