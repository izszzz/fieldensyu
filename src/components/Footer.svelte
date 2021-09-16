<script>
	import {link} from 'svelte-spa-router';
</script>
<footer>
	<ul>
		<li><a href="/" use:link>ホーム</a></li>
		<li>スコア</li>
		<li>情報</li>
		<li><a href="/settings" use:link>設定</a></li>
	</ul>
</footer>

<style>
	footer{
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
	}
	ul {
		display: flex;
		justify-content: space-around;
		list-style: none;
		margin: 0;
		padding: 0;
	}
	li {
		margin: 0;
	}
</style>