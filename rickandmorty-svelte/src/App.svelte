<script>
	import { onMount } from 'svelte';
	import Character from './Character.svelte';
	import { URL } from './constants';

	let data = {};
	let characters = [];

	const setCharacters = data => {
		characters = [...characters, ...data];
	}

	const handleClick = e => {
		if (data.info.next === '') return
		fetchData(data.info.next);
	}

	const fetchData = async (url = URL) => {
		try {
			const r = await fetch(url);
			data = await r.json();

			setCharacters(data.results);
		} catch(e) {
			console.error(e);
		}
	}

	onMount(fetchData)
</script>

<div class="characters">
	{#each characters as c}
		<Character name={c.name} image={c.image} />
	{:else}
		<p>loading...</p>
	{/each}
	{#if characters.length > 0 && data.info.next !== ''}
		<button on:click={handleClick}>
			Add more
		</button>
	{/if}
</div>

<style>
	.characters {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-gap: 8px;
	}
</style>
