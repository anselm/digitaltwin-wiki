<script>
  import Line from '$lib/Line.svelte'
  import { onMount } from 'svelte'
  let { data } = $props()
  // The live scene is a 7 MB WebGL download, so the prerendered page carries only a still;
  // wide screens that have not asked for reduced motion swap in the live, orbitable scene after load.
  let live = $state(false)
  onMount(() => { live = window.innerWidth >= 768 && !matchMedia('(prefers-reduced-motion: reduce)').matches })
</script>

<h1 class="text-4xl mt-6">{data.label}</h1>
<p class="text-muted text-lg mt-1">{data.description}</p>

<div class="prose mt-6 max-w-prose">{@html data.content}</div>

{#if data.figure}
  <figure class="mt-2 max-w-prose">
    <div class="relative aspect-video overflow-hidden" style="background:#071019">
      {#if data.figure.poster}<img src={data.figure.poster} alt="" class="absolute inset-0 w-full h-full object-cover" />{/if}
      {#if live}<iframe src={data.figure.src} title="Bay Layers: drag to orbit, scroll to zoom" class="absolute inset-0 w-full h-full border-0"></iframe>{/if}
    </div>
    <figcaption class="text-xs text-muted mt-1.5"><a href={data.figure.url}>{data.figure.label}</a>, a digital twin unfolded.{#if live}{' '}Drag to orbit, scroll to zoom.{/if}{#if data.figure.full}{' '}The <a href={data.figure.full} rel="noopener">full version</a> explains each layer{#if data.figure.repo}, and the <a href={data.figure.repo} rel="noopener">source is on GitHub</a>{/if}.{/if}{' '}{data.figure.credit.replace(/^[^·]*·\s*/, '')}</figcaption>
  </figure>
{/if}

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
