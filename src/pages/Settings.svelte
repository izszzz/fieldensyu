<script>
import { writable } from "svelte/store";
	const name = writable(localStorage.getItem("name") || "")
	unsubscribe = name.subscribe(val=>localStorage.setItem("name", val))
	
</script>

<main>
	<input bind:value={$name}/>
	<p>{$name}</p>
</main>