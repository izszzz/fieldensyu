<script>
	import Header from "./components/Header.svelte"
	import Footer from "./components/Footer.svelte"
	import HomePage from "./pages/Home.svelte"
	import Router from 'svelte-spa-router'
	const routes = {
		'/': HomePage,
		// '/book/*': Book,
		// '*': NotFound,
	}
</script>

<Header/>
<Router {routes}/>
<Footer/>

<style>
</style>