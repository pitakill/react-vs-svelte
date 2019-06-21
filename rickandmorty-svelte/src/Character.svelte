<script>
	export let image;
	export let name;
</script>

<style>
	figure, img {
		width: 100%;
		margin: 0;
	}
</style>

<figure>
	<img src={image} alt={name}>
	<figcaption>{name}</figcaption>
</figure>
