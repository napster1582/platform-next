<script lang="ts">
    import escapeHTML from 'escape-html';
    import { Text } from 'slate';
    import Link from '../link/Link.svelte';

    export let nodes: Array<{
        [k: string]: unknown | Array<unknown>;
    }>;
</script>

{#each nodes as node}
    {#if Object.keys(node).length === 1 && Object.keys(node)[0] === 'children'}
        <svelte:self nodes={node.children} />
    {/if}

    {#if Text.isText(node)}
        {@const text = node.text}

        {#if node.bold}
            <strong class="font-semibold">
                {escapeHTML(text)}
            </strong>
        {:else if node.code}
            <pre class="overflow-x-auto"><code>{text}</code></pre>
        {:else if node.italic}
            <em>
                {escapeHTML(text)}
            </em>
        {:else if node.strikethrough}
            <s class="decoration-wavy">
                {escapeHTML(text)}
            </s>
        {:else if node.underline}
            <u class="decoration-wavy">
                {escapeHTML(text)}
            </u>
        {:else if text === ''}
            <br />
        {:else}
            <span>
                {escapeHTML(text)}
            </span>
        {/if}
    {/if}

    {#if node}
        {#if node.type === 'h1'}
            <h1>
                <svelte:self nodes={node.children} />
            </h1>
        {:else if node.type === 'h2'}
            <h2>
                <svelte:self nodes={node.children} />
            </h2>
        {:else if node.type === 'h3'}
            <h3>
                <svelte:self nodes={node.children} />
            </h3>
        {:else if node.type === 'h4'}
            <h4>
                <svelte:self nodes={node.children} />
            </h4>
        {:else if node.type === 'h5'}
            <h5>
                <svelte:self nodes={node.children} />
            </h5>
        {:else if node.type === 'h6'}
            <h6>
                <svelte:self nodes={node.children} />
            </h6>
        {:else if node.type === 'blockquote'}
            <blockquote>
                <svelte:self nodes={node.children} />
            </blockquote>
        {:else if node.type === 'ul' && Array.isArray(node.children)}
            <ul class="list-disc pl-12">
                {#each node.children as grandchild}
                    <li>
                        <svelte:self nodes={grandchild.children} />
                    </li>
                {/each}
            </ul>
        {:else if node.type === 'ol' && Array.isArray(node.children)}
            <ol class="list-decimal pl-12">
                {#each node.children as grandchild}
                    <li>
                        <svelte:self nodes={grandchild.children} />
                    </li>
                {/each}
            </ol>
        {:else if node.type === 'li'}
            <svelte:self nodes={node.children} />
        {:else if node.type === 'link'}
            <Link
                href={escapeHTML(`${node.url}`)}
                className="text-inherit"
            >
                <svelte:self nodes={node.children} />
            </Link>
        {:else}
            {''}
        {/if}
    {/if}
{/each}
