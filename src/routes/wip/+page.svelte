<script>
	import { onMount } from 'svelte';

	let isAnimationEnded = false;

	onMount(() => {
		document.title = "Curio's Cyber Adventure";
		const scrollingWrapper = document.querySelector('.wrapper');

		scrollingWrapper?.addEventListener('animationend', () => {
			isAnimationEnded = true;
		});
	});
</script>

{#if !isAnimationEnded}
	<div class="wrapper">
		<div class="text-scroll">
			<h1>Curio's Cyber Adventure</h1>
			<p>
				Once upon a time in the magical land of Cyberspace, there lived a curious sprite named
				Curio. One day, while exploring, he stumbled upon this website and found a tantalizing link
				to project called "In Progress." Naturally, Curio couldn't resist and clicked on the link.
			</p>
			<p>
				To his surprise, instead of a polished webpage, Curio found himself in a vast, dark void of
				the digital universe, where the text began to fly trough the universe. "Well, this is...
				different" he muttered. "Did I just stumble into a website's dress rehearsal?"
			</p>
			<p>
				Undeterred, Curio decided to have some fun. He imagined himself as an intergalactic
				explorer, venturing through the cosmos to discover new universes and galaxies showcasing how
				various alien species might design their cosmic websites with holographic menus, floating 3D
				images, and warping portals.
			</p>
			<p>
				As Curio traversed the vast expanse of the universe, he felt a sense of adventure. After
				all, in the zany world of Cyberspace, the journey is often as delightful as the destination.
			</p>

			<img src="images/ethereal-humanoid.webp" alt="ethereal humanoid" />
		</div>
	</div>
{/if}
{#if isAnimationEnded}
	<div class="img__c">
		<img src="images/intergalactic-website.webp" alt="intergalactic website" />
	</div>
{/if}

<style>
	/* TODO: image to particles ??? */

	/* Styles */
	.wrapper {
		max-height: 82vh;
		animation: scroll 10s linear forwards;
	}

	.text-scroll {
		width: 60%;
		overflow: hidden;
		font-size: clamp(1.2rem, 2vw, 4rem);
		color: #ffb13a;
		margin-inline: auto;
		font-weight: 600;

		& h1 {
			margin-bottom: 4rem;
			font-size: clamp(2rem, 4vw, 6rem);
			line-height: 1;
			text-align: center;
			text-transform: uppercase;
		}

		& p {
			padding: 0;
			letter-spacing: 0.08rem;
			line-height: 1.2;
			text-align: justify;
			max-width: 48ch;
			margin-bottom: 4rem;
			margin: 3rem auto;
		}

		& .end {
			text-align: center;
		}
	}
	.img__c {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 82vh;
		width: 100%;
		animation: facing 10s linear forwards;
		& img__w {
			max-width: 100%;
			& img {
				max-width: 100%;
				max-height: 100%;
				border-radius: 0.5rem;
			}
		}
	}

	/* Animation */
	@keyframes scroll {
		0% {
			transform: perspective(250px) rotateX(20deg) translateY(680px);
			opacity: 1;
		}
		75% {
			opacity: 1;
		}
		100% {
			transform: perspective(250px) rotateX(21deg) translateY(calc(-1900px - 100vw / 2));
			opacity: 0;
		}
	}

	@keyframes facing {
		0% {
			transform: perspective(350px) rotateX(20deg) translateY(-150px);
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		100% {
			transform: perspective(0px) rotateX(0deg) translateY(0px);
		}
	}

</style>
