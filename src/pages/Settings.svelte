<script>
import { onDestroy } from "svelte";

import { writable } from "svelte/store";
	const name = writable(localStorage.getItem("name") || "")
	const unsubscribe = name.subscribe(val=>localStorage.setItem("name", val))
	onDestroy(unsubscribe)
</script>

<main>
	<input bind:value={$name}/>
	<p>{$name}</p>
</main>