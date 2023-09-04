<script lang="ts">
	import { cn, flyAndScale } from "$lib/utils";
	import { Menubar as MenubarPrimitive } from "bits-ui";

	type $$Props = MenubarPrimitive.ContentProps;
	type $$Events = MenubarPrimitive.ContentEvents;

	let className: $$Props["class"] = undefined;
	export let sideOffset: $$Props["sideOffset"] = 4;
	export let transition: $$Props["transition"] = flyAndScale;
	export let transitionConfig: $$Props["transitionConfig"] = undefined;
	export { className as class };
</script>

<MenubarPrimitive.Content
	{transition}
	{transitionConfig}
	{sideOffset}
	class={cn(
		"z-50 min-w-[12rem] rounded-token border bg-popover p-1 text-popover-foreground shadow-md focus:outline-none",
		className
	)}
	{...$$restProps}
	on:keydown
>
	<slot />
</MenubarPrimitive.Content>
