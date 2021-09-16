<script>
import { onMount } from "svelte";
	let stream
	onMount(async ()=>{
	})
</script>

<main>
	<input id="camera" type="file" accept="image/*;capture=camera">
	<label for="camera">
		camera
	</label>
</main>

<style>
	#camera{
		display: none;
	}
</style>