<script>
	export let image
	const [date,animalName,name]=image.name.split('_')
	function parseDate(date){
		const a = new Date(Number(date))
		return a.getFullYear() + '/' + (a.getMonth()+1) + '/' + a.getDate();
	}
</script>

<div class="card">
	<img src={`https://drive.google.com/uc?export=view&id=${image.id}&usp=sharing`} alt="">
	<p class="animalname">動物:{animalName}</p>
	<p class="username">ユーザー名:{name.replace(".jpg", "")}</p>
	<p class="date">{parseDate(date)}</p>
</div>

<style>
	img{
		width: 100%;
	}
	.date{
		color: gray;
	}
	.card{
		background: #dedede;
	}
</style>