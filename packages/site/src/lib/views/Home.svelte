<script>
  import Card from '$lib/Card.svelte'
  let { data } = $props()
</script>

<h1 class="text-4xl mt-6">{data.label}</h1>
<p class="text-muted text-lg mt-1">{data.description}</p>

<div class="prose mt-6 max-w-prose">{@html data.content}</div>

{#if data.pinned.length}
  <section class="mt-8">
    <h2 class="text-sm uppercase tracking-wide text-muted">Start here</h2>
    <ul class="mt-1">{#each data.pinned as p}<Card item={p} />{/each}</ul>
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

<section class="mt-8">
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
    <ul class="mt-1">{#each data.recent as r}<Card item={r} date />{/each}</ul>
    <p class="text-sm mt-2"><a href="/posts">More recent entries</a></p>
  </section>
{/if}
