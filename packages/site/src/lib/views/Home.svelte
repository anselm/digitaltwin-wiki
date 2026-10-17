<script>
  import Line from '$lib/Line.svelte'
  import { onMount } from 'svelte'
  let { data } = $props()
  // The live scene is a 7 MB WebGL download, so the prerendered page carries only a still;
  // wide screens that have not asked for reduced motion swap in the live backdrop after load.
  let live = $state(false)
  onMount(() => { live = window.innerWidth >= 768 && !matchMedia('(prefers-reduced-motion: reduce)').matches })
</script>

{#if data.backdrop}
  <div class="relative -mx-4 sm:mx-0 mt-2 h-56 sm:h-80 lg:h-96 overflow-hidden" style="background:#071019">
    {#if data.backdrop.poster}<img src={data.backdrop.poster} alt="" class="absolute inset-0 w-full h-full object-cover" />{/if}
    {#if live}<iframe src={data.backdrop.src} title="" aria-hidden="true" tabindex="-1" class="absolute inset-0 w-full h-full border-0 pointer-events-none"></iframe>{/if}
    <div class="absolute inset-x-0 bottom-0 px-4 sm:px-6 pb-5 pt-16" style="background:linear-gradient(0deg,#071019e6,#07101900)">
      <h1 class="text-4xl" style="color:#e6e9dd">{data.label}</h1>
      <p class="text-lg mt-1" style="color:#a4cebd">{data.description}</p>
    </div>
  </div>
  <p class="text-xs text-muted mt-1.5"><a href={data.backdrop.url}>{data.backdrop.label}</a>, {data.backdrop.credit.replace(/^[^·]*·\s*/, '')}</p>
{:else}
  <h1 class="text-4xl mt-6">{data.label}</h1>
  <p class="text-muted text-lg mt-1">{data.description}</p>
{/if}

<div class="prose mt-6 max-w-prose">{@html data.content}</div>

{#if data.pinned.length}
  <section class="mt-8">
    <h2 class="text-sm uppercase tracking-wide text-muted">Start here</h2>
    <ul class="mt-1">{#each data.pinned as p}<Line item={p} />{/each}</ul>
  </section>
{/if}

<section class="mt-8">
  <h2 class="text-sm uppercase tracking-wide text-muted">Domains</h2>
  <ul class="mt-2 grid grid-cols-5 sm:grid-cols-10 gap-2">
    {#each data.domains as d}
      <li><a href={d.url} class="block text-center text-xs text-ink leading-tight" title="{d.label}: {d.count} entries">
        <span class="block aspect-square rounded-sm p-1.5 bg-wash border-b-4" style="border-color:{d.colour}"><img src={d.depiction} alt="" class="w-full h-full" /></span>
        <span class="block mt-1">{d.label}</span></a></li>
    {/each}
  </ul>
</section>

<section class="mt-8 lg:hidden">
  <h2 class="text-sm uppercase tracking-wide text-muted">Contents</h2>
  <ul class="mt-2 grid sm:grid-cols-2 gap-x-6">
    {#each data.sections as s}
      <li class="py-1.5 border-t border-line flex justify-between gap-3"><a href={s.url} class="text-ink hover:text-accent">{s.label}</a><span class="text-muted text-sm tabular">{s.count || ''}</span></li>
    {/each}
  </ul>
</section>

{#if data.recent.length}
  <section class="mt-8">
    <h2 class="text-sm uppercase tracking-wide text-muted">Recent</h2>
    <ul class="mt-1">{#each data.recent as r}<Line item={r} />{/each}</ul>
    <p class="text-sm mt-2"><a href="/posts">More recent entries</a></p>
  </section>
{/if}
