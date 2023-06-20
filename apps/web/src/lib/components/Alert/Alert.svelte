<div
    class="rounded-token to-primary-600 shadow-primary-600 dark:shadow-primary-800 ring-primary-400 via-primary-950 flex w-full flex-wrap items-center gap-y-8 bg-gradient-to-br from-black p-6 text-white shadow-2xl ring-8"
>
    <div class="order-1 inline-flex items-center gap-1">
        <slot name="left" />
    </div>

    <p class="order-3 mx-4 flex-1 lg:order-2 lg:mx-12">
        {#if $$slots.title}
            <h3 class="text-primary-50 mb-4 font-black">
                <slot name="title" />
            </h3>
        {/if}

        {#if $$slots.default}
            <span class="text-primary-100 font-medium">
                <slot />
            </span>
        {/if}
    </p>

    <div class="order-2 inline-flex items-center gap-1 lg:order-3">
        <slot name="right" />
    </div>
</div>
