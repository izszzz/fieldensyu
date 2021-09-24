<script>
	import gapi from 'gapi';
</script>

<main>
	<form>
		<label>
			写真を選ぶ
			<input type="file" accept="image/*;capture=camera"/>
		</label>
		<label>
			動物名
			<input />
		</label>
		<button>保存</button>
	</form>
</main>

<style>
	input[type=file]{
		display: none;
	}
</style>