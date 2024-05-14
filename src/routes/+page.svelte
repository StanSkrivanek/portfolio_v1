<script>
  // @ts-nocheck
  import Contactform from "$lib/components/Contactform.svelte";
  export let form;
</script>

<svelte:head>
  <title>Stans portfolio</title>
  <meta
    name="description"
    content="My personal portfolio website created with SvelteKit and Sanity!" />
</svelte:head>

<main class="pt-10 mb-8 md:px-8">
  <div class="mb-24 md:mb-32">
    <div class=" lg:grid grid-cols-2 h-full">
      <header class="flex flex-col justify-center items-center h-full">
        <div>
          <img
            class=" m-auto w-[60vw] xl:max-w-[600px]"
            src="images/profile_me.png"
            alt="Stan Skrivanek" />
          <div class="py-8 md:px-8">
            <h1 class="font-light text-lg">stan skrivanek</h1>
            <p class="mb-4 text-slate-500">
              <span class="bg-scarlet text-white font-semibold px-2">coder</span> / designer
            </p>
            <div class=" font-light text-slate-400 text-lg">
              <p>A full-stack web developer with a background in design currently working as a freelance developer and designer always looking for new opportunities to collaborate with other developers and designers.</p>
            </div>
          </div>
        </div>
      </header>
      <div class="flex flex-col justify-center items-center h-full">
        <div class="text-7xl font-black py-8 md:px-8">
          <div class=" gradient">
            <p>Creative</p>
            <p>Solutions</p>
            <p>For The Web</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mb-24 md:mb-32">
    <div class="md:grid md:grid-cols-2">
      <div class="">
        <h2 class=" big-title font-black border-b border-b-slate-600 pb-8">
          <span class="gradient-2">services.</span>
        </h2>
      </div>
      <div class="md:pt-8 md:border-l md:border-l-slate-600 md:pl-8">
        <section class="mb-8">
          <h3 class="mb-4 text-4xl font-thin uppercase">
            <span class="gradient-2">web design & development</span>
          </h3>
          <div class="mb-4 md:flex w-full md:gap-4">
            <div class="w-full md:w-auto text-xl uppercase font-extralight tracking-wider leading-snug">
              <p>research</p>
              <p>UI/UX design</p>
              <p>SEO</p>
            </div>
            <div class=" w-full md:w-auto text-xl uppercase font-extralight tracking-wider leading-snug">
              <p>security</p>
              <p>performance</p>
              <p>accessibility</p>
            </div>
          </div>
          <div class="text-slate-400 font-light text-xl md:max-w-[80%]">
            <p>Creating high performance websites with attention to details and high usability that highlight clients brand to increase business potential.</p>
          </div>
        </section>
        <section class="mb-8">
          <h3 class="mb-4 text-4xl font-thin text-red uppercase"><span class="gradient-2">support & maintenance</span></h3>
          <div class=" mb-4 md:flex w-full md:gap-4">
            <div class="w-full md:w-auto text-xl uppercase font-extralight tracking-wider leading-snug">
              <p>consultancy</p>
              <p>new features</p>
              <p>optimization</p>
            </div>
            <div class="w-full md:w-auto text-xl uppercase font-extralight tracking-wider leading-snug">
              <p>updates</p>
              <p>redesign</p>
              <p>training</p>
            </div>
          </div>
          <div class="text-slate-400 font-light text-xl md:max-w-[80%]">
            <p>Reliable support service to keep your website up to date, running smoothly and securely to prevent reputational or financial damage.</p>
          </div>
        </section>
      </div>
    </div>
  </div>

  <div>
    <div class="mb-8">
      <h2 class="big-title font-black border-b border-b-slate-600 pb-8">
        <span class="gradient">projects.</span>
      </h2>
    </div>
    <div class="mb-24 md:mb-32 md:grid md:grid-cols-2 gap-8">
      <div class="hidden md:block square">
        <img
          class="mb-4 md:mb-0"
          src="/images/main-01.webp"
          alt="" />
      </div>
      <div class=" flex flex-col gap-0 justify-between">
        <img
          class="mb-4 md:mb-0"
          src="/images/main-02.webp"
          alt="" />

        <a
          class="flex big-title uppercase rounded-sm font-thin text-[#B5BBC4] hover:bg-[#B5BBC4] hover:text-black transition duration-300 ease-in-out h-full"
          href="/projects">
          <div class="flex items-center justify-center w-full">see more</div>
        </a>
      </div>
    </div>
  </div>
  <div class="">
    <h3 class="mb-8 text-4xl font-thin text-red uppercase">
      <span class="gradient">tools | technologies | ingredients</span>
    </h3>

    <div class="mb-8">
      <div class="grid grid-cols-6 lg:grid-cols-12 gap-4 xl:gap-8 mb-24 md:mb-32">
        <div class="group relative flex flex-col items-center">
          <img
            class="opacity-50 hover:opacity-80 duration-300"
            src="/images/svg/affinity_512_w.svg"
            alt="affinity logo" />
          <!-- tooltip -->
          <span class="group-hover:opacity-100 transition-opacity duration-300 text-gray-300 text-sm absolute top-full opacity-0">affinity</span>
        </div>
        <div class="group relative flex flex-col items-center">
          <img
            class="opacity-50 hover:opacity-80 duration-300"
            src="/images/svg/webflow_512_w.svg"
            alt="webflow logo" />
          <span class="group-hover:opacity-100 transition-opacity duration-300 text-gray-300 text-sm absolute top-full opacity-0">webflow</span>
        </div>
        <div class="group relative flex flex-col items-center">
          <img
            class="opacity-50 hover:opacity-80 duration-300"
            src="/images/svg/svelte_512_w.svg"
            alt="svelte logo" />
          <span class="group-hover:opacity-100 transition-opacity duration-300 text-gray-300 text-sm absolute top-full opacity-0">svelte</span>
        </div>
        <div class="group relative flex flex-col items-center">
          <img
            class="opacity-50 hover:opacity-80 duration-300"
            src="/images/svg/javascript_512_w.svg"
            alt="javascript logo" />
          <span class="group-hover:opacity-100 transition-opacity duration-300 text-gray-300 text-sm absolute top-full opacity-0">javascript</span>
        </div>
        <div class="group relative flex flex-col items-center">
          <img
            class="opacity-50 hover:opacity-80 duration-300"
            src="/images/svg/supabase_512_w.svg"
            alt="supabase logo" />
          <span class="group-hover:opacity-100 transition-opacity duration-300 text-gray-300 text-sm absolute top-full opacity-0">supabase</span>
        </div>
        <div class="group relative flex flex-col items-center">
          <img
            class="opacity-50 hover:opacity-80 duration-300"
            src="/images/svg/sql_512_w.svg"
            alt="sql icon" />
          <span class="group-hover:opacity-100 transition-opacity duration-300 text-gray-300 text-sm absolute top-full opacity-0">postgresql</span>
        </div>
        <div class="group relative flex flex-col items-center">
          <img
            class="opacity-50 hover:opacity-80 duration-300"
            src="/images/svg/sanity_512_w.svg"
            alt="sanity logo" />
          <span class="group-hover:opacity-100 transition-opacity duration-300 text-gray-300 text-sm absolute top-full opacity-0">sanity</span>
        </div>
        <div class="group relative flex flex-col items-center">
          <img
            class="opacity-50 hover:opacity-80 duration-300"
            src="/images/svg/vercel_512_w.svg"
            alt="vercel logo" />
          <span class="group-hover:opacity-100 transition-opacity duration-300 text-gray-300 text-sm absolute top-full opacity-0">vercel</span>
        </div>
        <div class="group relative flex flex-col items-center">
          <img
            class="opacity-50 hover:opacity-80 duration-300"
            src="/images/svg/apple_512_w.svg"
            alt="apple logo" />
          <span class="group-hover:opacity-100 transition-opacity duration-300 text-gray-300 text-sm absolute top-full opacity-0">apple</span>
        </div>
        <div class="group relative flex flex-col items-center">
          <img
            class="opacity-50 hover:opacity-80 duration-300"
            src="/images/svg/cofeecup_512_w.svg"
            alt="coffee cup" />
          <span class="group-hover:opacity-100 transition-opacity duration-300 text-gray-300 text-sm absolute top-full opacity-0">coffee</span>
        </div>
        <div class="group relative flex flex-col items-center">
          <img
            class="opacity-50 hover:opacity-80 duration-300"
            src="/images/svg/tobacco_512_w.svg"
            alt="tobacco icon" />
          <span class="group-hover:opacity-100 transition-opacity duration-300 text-gray-300 text-sm absolute top-full opacity-0">tobacco</span>
        </div>
        <div class="group relative flex flex-col items-center">
          <img
            class="opacity-50 hover:opacity-80 duration-300"
            src="/images/svg/smiley_tongue_512_w.svg"
            alt="happy smiley with tongue out" />
          <span class="group-hover:opacity-100 transition-opacity duration-300 text-gray-300 text-sm absolute top-full opacity-0">happyness</span>
        </div>
      </div>

      <div class="">
        <div class="mb-8">
          <h2 class="big-title text-9xl font-black border-b border-b-slate-600 pb-8">
            <span class="gradient-2">get in touch.</span>
          </h2>
        </div>
      </div>
      <Contactform form={form} />
    </div>
  </div>
</main>

<style>
  .big-title {
    font-size: var(--big-title);
    line-height: 1;
  }
  .square {
    border: 1px dotted white;
    width: 100%;
    /* height:100%; */
    aspect-ratio: 1/1;
    position: relative;
  }

  .square img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
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
