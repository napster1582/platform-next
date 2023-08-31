<div
	class="flex w-full flex-wrap items-center gap-y-8 rounded-token border-l-8 border-primary-500 bg-token-secondary p-6"
>
	<div class="order-1 inline-flex items-center gap-1">
		<slot name="left" />
	</div>

	<p class="order-3 mx-4 flex-1 lg:order-2 lg:mx-12">
		{#if $$slots.title}
			<h3 class="mb-4">
				<slot name="title" />
			</h3>
		{/if}

		{#if $$slots.default}
			<span class="font-medium text-token-secondary">
				<slot />
			</span>
		{/if}
	</p>

	<div class="order-2 inline-flex items-center gap-1 lg:order-3">
		<slot name="right" />
	</div>
</div>
