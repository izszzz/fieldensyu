<script>
	import {Link} from 'svelte-routing';
</script>
<footer>
	<ul>
		<li><Link to="/">ホーム</Link></li>
		<li>スコア</li>
		<li>情報</li>
		<li><Link to="settings">設定</Link></li>
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