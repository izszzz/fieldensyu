<script>
	import { Router, Route } from "svelte-routing"
	import Header from "./components/Header.svelte"
	import Footer from "./components/Footer.svelte"
	import HomePage from "./pages/Home.svelte"
	import SettingsPage from "./pages/Settings.svelte"
	import InfoPage from "./pages/Info.svelte"
</script>

<Router basepath="/fieldensyu">
	<Header/>
		<Route path="settings" component={SettingsPage} />
		<Route path="info" component={InfoPage} />
		<Route path="/" component={HomePage}/>
	<Footer/>
</Router>

<style>
</style>
