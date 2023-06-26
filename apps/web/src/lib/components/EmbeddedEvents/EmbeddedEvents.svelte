<script lang="ts">
    import { resolveLinkAppearance, resolveLinkHref, resolveResourceSize } from '$lib/utils';
    import Icon from '@iconify/svelte';
    import type { Grouped } from '@jinen/annotations';
    import type { Event } from '@jinen/cms-annotations';
    import { titlecase } from '@jinen/helpers';
    import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@rgossiaux/svelte-headlessui';
    import { Link } from '../Link';

    export let content: Grouped<Event>;

    console.log(content);

    $: years = Object.keys(content).sort((a, b) => b.localeCompare(a));
</script>

<TabGroup class="tab-group">
    <TabList class="tab-list">
        {#each years as year}
            <Tab class={({ selected }) => (selected ? 'tab tab-active' : 'tab')}>
                {year}
            </Tab>
        {/each}
    </TabList>
    <TabPanels class="tab-panels">
        {#each years as year}
            <TabPanel class="tab-panel">
                <ul
                    class="border-primary-500/30 mx-auto flex max-w-2xl flex-col gap-y-16 border-l-4 py-24 pl-7"
                >
                    {#each content[year] as event}
                        <li
                            class="rounded-token border-token hover:border-primary-500/30 focus-within:border-primary-500/30 relative border-4 border-dashed p-5 transition-colors duration-300"
                        >
                            <div
                                class="bg-token-secondary border-primary-400 absolute -left-[3.3rem] top-1/2 grid -translate-y-1/2 place-items-center rounded-full border p-1"
                            >
                                <Icon
                                    icon="line-md:check-list-3-filled"
                                    class="text-primary-400 text-3xl"
                                />
                            </div>

                            <div class="border-token border-b pb-5">
                                <h3
                                    class="line-clamp-1"
                                    title={event.title}
                                >
                                    {event.title}
                                </h3>

                                <div class="text-token-secondary mt-2 flex items-center gap-2">
                                    <Icon
                                        icon="openmoji:spiral-calendar"
                                        class="text-2xl"
                                    />

                                    <time>
                                        {titlecase(event.month)}
                                        {event.year}
                                    </time>
                                </div>
                            </div>

                            <p class="text-token-secondary prose mt-5 text-justify font-semibold">
                                {event.description}
                            </p>

                            {#if event.linkGroup && event.linkGroup.addLink}
                                <div class="button-group mt-5">
                                    <Link
                                        class="text-primary-300"
                                        options={{
                                            href: resolveLinkHref({
                                                internal:
                                                    event.linkGroup.link?.internalLinkReference
                                                        ?.value,
                                                external: event.linkGroup.link?.externalLink,
                                            }),
                                            appearance: resolveLinkAppearance({
                                                appearance: event.linkGroup.link?.appearance,
                                            }),
                                            indicator: event.linkGroup.link?.indicator,
                                            text: event.linkGroup.link?.text,
                                            showIcon: event.linkGroup.link?.showIcon,
                                            icon: event.linkGroup.link?.icon,
                                            iconSize: resolveResourceSize({
                                                resource: event.linkGroup.link?.iconSize,
                                            }),
                                            openInNewTab: event.linkGroup.link?.openInNewTab,
                                        }}
                                    />
                                </div>
                            {/if}
                        </li>
                    {/each}
                </ul>
            </TabPanel>
        {/each}
    </TabPanels>
</TabGroup>
