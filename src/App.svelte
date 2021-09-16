<script>
	import { Router, Route } from "svelte-routing"
	import Header from "./components/Header.svelte"
	import Footer from "./components/Footer.svelte"
	import HomePage from "./pages/Home.svelte"
	import SettingsPage from "./pages/Settings.svelte"
</script>

<Router>
	<Header/>
		<Route path="settings" component={SettingsPage} />
		<Route path="/" component={HomePage}/>
	<Footer/>
</Router>

<style>
</style>