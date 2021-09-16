<script>
	import Header from "./components/Header.svelte"
	import Footer from "./components/Footer.svelte"
	import HomePage from "./pages/Home.svelte"
	import SettingsPage from "./pages/Settings.svelte"
	import Router from 'svelte-spa-router'
	const routes = {
		'/': HomePage,
		'/settings': SettingsPage,
		// '/book/*': Book,
		// '*': NotFound,
	}
</script>

<Header/>
<Router {routes}/>
<Footer/>

<style>
</style>