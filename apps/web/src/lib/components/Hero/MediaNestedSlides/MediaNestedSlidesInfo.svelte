<script lang="ts">
	import Balancer from 'svelte-wrap-balancer';
</script>

<div class="container relative flex h-full w-full flex-wrap gap-y-6">
	<div class="flex h-fit w-full items-center py-12 xl:max-w-[55%] xl:self-center xl:pr-6 xl:pt-0">
		<slot name="indicators" />

		<div class="border-separate rounded-full border-b-8 border-dashed border-gray-800">
			{#if $$slots.title}
				<h1
					class="text-2xl uppercase text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
				>
					<Balancer>
						<slot name="title" />
					</Balancer>
				</h1>
			{/if}

			{#if $$slots.description}
				<p class="mt-12 text-xl text-white">
					<Balancer>
						<slot name="description" />
					</Balancer>
				</p>
			{/if}

			{#if $$slots.link}
				<div class="button-group mt-12">
					<slot name="link" />
				</div>
			{/if}
		</div>
	</div>
</div>
