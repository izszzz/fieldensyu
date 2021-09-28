<script>
	export let image
	const [date,animalName,name]=image.name.split('_')
	function parseDate(date){
		const a = new Date(Number(date))
		return a.getFullYear() + '/' + (a.getMonth()+1) + '/' + a.getDate();
	}
</script>

<img src={`https://drive.google.com/uc?export=view&id=${image.id}&usp=sharing`} alt="">
<p>{parseDate(date)}</p>
<p>動物:{animalName}</p>
<p>ユーザー名:{name.replace(".jpg", "")}</p>

<style>
	img{
		width: 100%;
	}
</style>