<div
	class="transform rounded-token transition-transform hover:scale-110 hover:shadow-2xl hover:grayscale active:scale-90"
>
	<div class="menu-item relative z-10 flex w-[200px] flex-col">
		<div class="grid h-36 place-items-center pt-7">
			{#if $$slots.title}
				<span class="text-3xl font-bold text-blue-900">
					<slot name="title" />
				</span>
			{/if}

			{#if $$slots.icon}
				<slot name="icon" />
			{/if}
		</div>

		<div class="grid h-36 items-start justify-items-center px-4 pt-6">
			{#if $$slots.description}
				<div
					class="line-clamp-3 rounded-token bg-gradient-to-br from-yellow-500 via-blue-600 to-red-600 p-2 text-center font-semibold text-token-primary text-white"
				>
					<slot name="description" />
				</div>
			{/if}
		</div>
	</div>
</div>

<style lang="postcss">
	.menu-item {
		overflow: visible;
	}

	.menu-item::before {
		content: '';
		position: absolute;
		z-index: -1;
		width: 100%;
		height: 100%;
		background-image: url('$lib/assets/svg/0_menu.svg');
		background-position: center;
		background-size: 100% 100%;
		background-repeat: no-repeat;
		transform: scale(1.2);
	}
</style>
