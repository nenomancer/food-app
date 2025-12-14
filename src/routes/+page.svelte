<script lang="ts">
	import menu from '$lib/data/menu.json';
	import { availableSides, selectedDrink, selectedMain, selectedSide } from '$lib/stores/order';
	const label = (id: string, list: Array<any>) => list.find((i) => i.id === id)?.name?.toLowerCase();
</script>

<h1>Food App</h1>
<!-- <p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<p>Or check <a href="/about">about us</a></p> -->

{#if $selectedMain}
	<h3>
		Нарачувате {label($selectedMain, menu.mains)}
		{#if $selectedSide}
			со {label($selectedSide, menu.sides)}
		{/if}
		{#if $selectedDrink}
			и {label($selectedDrink, menu.drinks)}
		{/if}
	</h3>
{/if}

<h2>Главно</h2>
{#each menu.mains as main}
	<button on:click={() => selectedMain.set(main.id)}>
		{main.name}
	</button>
{/each}

{#if $selectedMain}
	<h2>Прилог</h2>
	{#each $availableSides as side}
		<button on:click={() => selectedSide.set(side.id)}>
			{side.name}
		</button>
	{/each}
{/if}

{#if $selectedSide}
	<h2>Пијачо</h2>
	{#each menu.drinks as drink}
		<button on:click={() => selectedDrink.set(drink.id)}>
			{drink.name}
		</button>
	{/each}
{/if}
