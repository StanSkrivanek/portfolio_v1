<nav class="flex py-8 justify-between md:px-8">
  <div class="pr-10">
    <a
      href="/"
      class="flex items-center font-light tracking-widest text-slate-300"
      ><img
        src="../images/svg/ss-logo.svg"
        alt=""
        class="w-10 h-10 mr-1" />
      <div class=" flex flex-col">
        <span class="leading-none">stan</span>
        <span class="leading-none">skrivanek</span>
      </div>
    </a>
  </div>
  <ul class="flex gap-4 items-center">

    <li class="relative">
      <a
        href="/projects"
        class=" link-underline text-teal-300 tracking-wider text-xl font-medium uppercase h-full">[ Projects ]</a>
    </li>
  </ul>
</nav>

<style>
  .link-underline::after {
    content: "";
    position: absolute;
    bottom: -0.25rem;
    left: 0;
    width: 100%;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
    height: 4px;
    background: rgb(215, 105, 255);
  }
  .link-underline:hover::after {
    transform: scaleX(1);
  }
</style>
