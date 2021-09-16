<script>
import { onMount } from "svelte";
	let stream
	onMount(async ()=>{
		stream = await navigator.mediaDevices.getUserMedia()
	})
</script>

<main>
	<input type="file" accept="image/*;capture=camera">
</main>