<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();

</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
	/>
</svelte:head>



<main class="mx-auto w-full max-w-5xl px-4 py-8">
	{@render children()}
</main>

<footer>
	<div class="mx-auto w-full max-w-5xl px-4 py-8 text-center text-sm text-slate-500">
		Made with ❤️ using <a href="https://kit.svelte.dev" class="text-slate-400 underline hover:text-white">SvelteKit</a>
	</div>
</footer>