<script>
	// @ts-ignore
	import ArrowRight from '$lib/components/icons/ArrowRight.svelte';
	export let data;
	const projects = data.projects;
</script>

<svelte:head>
	<title>Projects</title>
	<meta name="description" content="random projects made with Svelte or Webflow" />
</svelte:head>

<!-- svelte-ignore non-top-level-reactive-declaration -->
<main class=" md:px-8">
	<h2 class="big-title mb-16 border-b border-b-slate-600 pb-8 font-black">
		<span class="gradient-2">Projects.</span>
	</h2>

	{#if projects && projects.length}
		<div class="projects-grid md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
			{#each projects as project, i}
				<div class="card relative mb-4 md:mb-0">
					<div class="h-full w-full">
						<img src={project.thumbnail} alt={project.title} class="h-full w-full object-cover" />
					</div>
					<div
						class="btn-link flex absolute bottom-0 right-0 bg-black rounded-ss-md hover:bg-emerald-500 duration-300"
					>
						<a href="/projects/{project.slug}" class="p-4">
							<div class="w-full h-full">
								<ArrowRight width={32} height={32} />
							</div>
						</a>
					</div>
				</div>
			{/each}
		</div>
	{:else}
		<p>No projects found.</p>
	{/if}
</main>

<style>
	.big-title {
		font-size: var(--big-title);
		line-height: 1;
	}
	@property --rotate {
		syntax: '<angle>';
		initial-value: 132deg;
		inherits: false;
	}

	.card {
		position: relative;
		aspect-ratio: 1/1;
	}
	.card:nth-child(3n + 1) {
		grid-column: span 2;
		grid-row: span 2;
		overflow: hidden;
	}
	.card::before,
	.card::after {
		content: '';
		position: absolute;
		aspect-ratio: 1/1;
		inset: 0.2rem;
		width: 100%;
		border-radius: 0;
		transition: 0.5s;
		z-index: -1;
	}

	.card:nth-child(2n)::before,
	.card:nth-child(2n)::after {
		background-image: linear-gradient(
			var(--rotate),
			rgb(236, 13, 120) 20.37%,
			rgb(255, 43, 64) 44.58%,
			rgb(247, 87, 53) 56.71%,
			rgb(254, 136, 14) 66.77%,
			rgb(254, 136, 14) 0px
		);
		animation: spin 10s linear infinite;
	}

	.card:nth-child(2n + 1)::before,
	.card:nth-child(2n + 1)::after {
		background-image: linear-gradient(
			var(--rotate),
			rgb(14, 254, 142) 20.37%,
			rgb(53, 247, 237) 34.71%,
			rgb(106, 157, 251) 46.77%,
			rgb(147, 105, 197) 66.77%,
			rgb(225, 114, 221) 100%
		);
		animation: spin 14s linear infinite;
	}
	.card:nth-child(2n + 1) .btn-link:hover {
		background-color: rgb(147, 105, 197);
	}
	.card:nth-child(2n) .btn-link:hover {
		background-color: rgb(247, 87, 53);
	}
	.card:nth-child(3n + 1) .btn-link:hover {
		background-color: rgb(32, 225, 174);
	}
	@keyframes spin {
		0% {
			--rotate: 0deg;
		}
		100% {
			--rotate: 360deg;
		}
	}
</style>
