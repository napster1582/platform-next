<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { Switch } from '$lib/components/ui/switch';

	let motionEnabled = true;
</script>

<div class="flex flex-1 flex-col space-y-1">
	<Label
		for="toggle-motion"
		class="text-xs">Animaciones</Label
	>
	<Switch
		id="toggle-motion"
		checked={motionEnabled}
	></Switch>
</div>
