<script>

  /** @type {import('./$types').PageData} */
  export let data;
  // reactive update of page data when route changes (e.g. when navigating to next/prev project) -> $:({data} = page)
  $: ({ jobs, techstack, maintenance, title, link, year, brief, approach, branding, website, marketplace, thumbnail, image_1, image_2, image_3 } = data.project);

  $: console.log(techstack);
  /**
   * @type {number | null}
   */
  let hoveredIcon = null;

  /**
   * @param {number | null} icon
   */
  function handleMouseOver(icon) {
    hoveredIcon = icon;
  }

  function handleMouseLeave() {
    hoveredIcon = null;
  }
</script>

<svelte:head>
  <title>{title}</title>
  <meta
    name="description"
    content={brief} />
</svelte:head>

<main class=" md:px-8">
  <!-- header title -->
  <div class=" mb-8 border-b border-b-slate-600 py-8 md:py-16">
    <h1 class="big-title font-black">
      <span class="gradient">{title}</span>
    </h1>
  </div>

  <!-- header info -->
  <div class="mb-10 block gap-4 text-lg font-light text-slate-400 md:mb-32 md:grid md:grid-cols-[1fr_1fr_2fr_1fr]">
    <div>
      {#each jobs as job}
        <p>{job}</p>
      {/each}
    </div>
    <div class="mb-4">
      <p>{year}</p>
    </div>
    <div class="mb-4">
      <p class="mb-2 text-slate-300 md:mb-10">Brief</p>
      <p class="">{brief}</p>
    </div>
    <div class="text-right">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        class="border p-4 font-semibold uppercase tracking-wider text-white hover:border-green-300 hover:text-green-300">See live</a>
    </div>
  </div>

  <!-- main img -->
  <div class="mb-8">
    <img
      src={thumbnail}
      alt=""
      class="w-full" />
  </div>

  <!-- section 1 -->
  <div class="mb-8 flex flex-col-reverse md:mb-0 md:grid md:grid-cols-[2fr_1fr_2fr] md:grid-rows-[1fr_0.5fr_1fr]">
    <div class=" z-10 col-start-1 col-end-3 row-start-1 row-end-3 aspect-square bg-black md:pb-8 md:pr-8">
      <img
        src={image_1}
        alt=""
        class="aspect-square object-cover object-left md:h-full" />
    </div>

    <div class="row-start-3 row-end-4 pb-8 xl:flex">
      <h2 class="mr-8 flex-1 font-light uppercase tracking-wide text-slate-300 md:basis-1/4">
        <span>approach</span>
      </h2>
      <p class="mr-4 flex-1 text-slate-400 md:basis-1/2 md:justify-between">
        {approach}
      </p>
    </div>
    <div class=" col-span-2 col-start-2 row-span-4 row-start-2 mb-8 aspect-square bg-blue-500">
      <img
        src={image_2}
        alt=""
        class="aspect-square object-cover md:h-full" />
    </div>
    <div class="pb-8 xl:flex">
      <h2 class="mr-8 flex-1 font-light uppercase tracking-wide text-slate-300 md:basis-1/4">
        <span>website</span>
      </h2>
      <p class="flex-1 text-slate-400 md:basis-1/2 md:justify-between">
        {website}
      </p>
    </div>
  </div>
  <!-- section 2 -->
  <div class=" text-lg font-light text-slate-300">
    <div class="flex flex-col-reverse gap-x-8 md:grid md:grid-cols-[1.5fr_1fr]">
      <div class="flex-1 justify-between object-cover md:h-full xl:aspect-[4/3]">
        <img
          class=" object-cover md:mb-0 md:min-h-full xl:aspect-[4/3]"
          src={image_3}
          alt="page-two" />
      </div>
      <div class="flex flex-col justify-between">
        <div class="pb-4">
          <h2 class="mr-8 flex-1 font-light uppercase tracking-wide text-slate-300 md:basis-1/4">
            <span>branding</span>
          </h2>
          <p class="mr-4 flex-1 text-slate-400 md:basis-1/2 md:justify-between">
            {branding}
          </p>
        </div>
        <div class="xs:flex mb-8">
          <div class="mb-4">
            <p>Techstack</p>
            <div class="flex relative">
              {#each techstack as t, i}
                <div class="icn__w w-10 relative">
                  <img
                    src={t.logo}
                    alt={t.title}
                    on:mouseover={() => handleMouseOver(i)}
                    on:focus={() => handleMouseOver(i)}
                    on:mouseleave={handleMouseLeave} />
                  <span
                    class="tooltip text-xs absolute hidden bg-pink-600 text-white px-1.5 "
                    class:show={hoveredIcon === i }
                    >
                    {t.title}
                  </span>
                </div>
              {/each}
            </div>
          </div>
          <p>Website maintenance:</p>
          <span class="uppercase text-slate-400">{maintenance === true ? "yes" : "no"}</span>
        </div>
      </div>
    </div>
  </div>
  <!-- Prev / Next -->
  <div>
    <div class="mb-8 flex justify-between border-b border-b-slate-600 py-16 text-right">
      {#if data.prev !== undefined}
        <a
          href={`/projects/${data.prev}`}
          class="big-title w-full text-left text-9xl font-black"><span class="gradient">prev</span></a>
      {/if}
      {#if data.next !== undefined}
        <a
          href={`/projects/${data.next}`}
          class="big-title w-full text-right text-9xl font-black"><span class="gradient">next</span></a>
      {/if}
    </div>
  </div>

</main>

<style>

  .big-title {
    font-size: var(--big-title);
    line-height: 1;
  }

  .tooltip.show {
    display: block;
  }

</style>
