<script>
import { onMount } from "svelte";
import { writable } from "svelte/store";
import Card from '../components/Card.svelte';
	const API_KEY = "AIzaSyBcPAbJojakPqbQ6pXi8P1HRSbuQEHaiiQ"
	const CLIENT_ID = "570738443611-7le1gj7itglp9tqca6hipkh0mlrn2cck.apps.googleusercontent.com"
	const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
	const SCOPES = 'https://www.googleapis.com/auth/drive';
	let value, files=[], images=[];
	const folderId = "1rBCtWoBhZBwzJCkydSjZJAkGAhQN__Te"
	const name = writable(localStorage.getItem("name") || "")
	function handleClientLoad() {
		gapi.load('client:auth2', initClient);
	}
	function initClient() {
		gapi.client.init({
			apiKey: API_KEY,
			clientId: CLIENT_ID,
			discoveryDocs: DISCOVERY_DOCS,
			scope: SCOPES
		}).then(function () {
			// Listen for sign-in state changes.
			gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
			
			// Handle the initial sign-in state.
			updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
			// authorizeButton.onclick = handleAuthClick;
			// signoutButton.onclick = handleSignoutClick;

			// Create FieldEnsyu folder
			}, function(error) {
			appendPre(JSON.stringify(error, null, 2));
		});
	}
	function updateSigninStatus(isSignedIn) {
		if (isSignedIn) {
		// authorizeButton.style.display = 'none';
		// signoutButton.style.display = 'block';
			listFiles();
		} else {
		// authorizeButton.style.display = 'block';
		// signoutButton.style.display = 'none';
		}
	}
	function handleAuthClick() {
		gapi.auth2.getAuthInstance().signIn();
	}
	function handleSignoutClick() {
		gapi.auth2.getAuthInstance().signOut();
	}
	function listFiles(){
		gapi.client.drive.files.list({q:'"1rBCtWoBhZBwzJCkydSjZJAkGAhQN__Te" in parents'}).then(res=>{
			images = res.result.files
			console.log(images)
		})
	}
	function uploadImage(){
		const file = files[0]
		const blob = new Blob([file])
		gapi.client.drive.files.create({
			name: Date.now() + '_' + value + '_' + $name + ".jpg",
			parents: [folderId],
		}).then(res=>{
			fetch(`https://www.googleapis.com/upload/drive/v3/files/${res.result.id}`, {
				method: 'PATCH',
				headers: new Headers({
				'Authorization': `Bearer ${gapi.client.getToken().access_token}`,
				'Content-Type': file.type
				}),
				body:  blob
			}).then(res=>res.json())
			.then(res=>images = [res, ...images])
		})
	}
	onMount(()=>{
		handleClientLoad()
	})
</script>

<main>
	<form>
		<button type="button" class="auth" on:click={handleAuthClick}>Google連携</button>
		<button type="button" class="signout" on:click={handleSignoutClick}>サインアウト</button>
	</form>
	<form class="form2">
		<p>動物を投稿する</p>
		<div>
			<label class="photo">
				写真を選ぶ
				<input type="file" accept="image/*;capture=camera" bind:files/>
				<img src={files.length ? URL.createObjectURL(files[0]): ""} alt="">
			</label>
			<label>
				動物名
				<input bind:value />
			</label>
			<button type="button" class="save" on:click={uploadImage}>保存</button>
		</div>
	</form>

	<div class="images">
		<ul>
			{#each images as image}
				<Card {image}/>
			{/each}
		</ul>
	</div>
</main>

<style>
	input[type=file] {
		display: none;
	}
	button {
		cursor: pointer;
		padding: 20px;
		color: white;
		border: solid 1px white;
	}
	button.auth{
		background: #78bbff;
	}
	button.signout{
		background: red;
	}
	button.save{
		background: green;
	}
	label.photo{
		display: inline-block;
		background: #78bbff;
		padding: 20px;
		color: white;
	}
	.images{
		padding-bottom: 50px;
	}
	.form2{
		border: solid 1px black;
		padding: 10px;
		border-radius: 5px;
	}
</style>