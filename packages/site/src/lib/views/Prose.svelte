<script>
  import Card from '$lib/Card.svelte'
  import Open from '$lib/Open.svelte'
  let { data } = $props()
</script>
<p class="mt-6 text-xs text-muted">{[...data.kinds.map((k) => k.label), ...(data.status !== 'public' ? [data.status] : [])].join(' · ')}</p>
<h1 class="text-3xl mt-1">{data.label}</h1>
{#if data.description}<p class="text-muted text-lg mt-1">{data.description}</p>{/if}
{#if data.chips.length}<p class="mt-2 flex gap-1 flex-wrap">{#each data.chips as c}<a href={c.url} class="text-xs text-ink px-1.5 rounded-sm" style="background:{c.colour}55">{c.label}</a>{/each}</p>{/if}
{#if data.open}<p class="mt-2 text-xs text-muted">What is reusable: <Open open={data.open} full={true} />{#if data.open.note} <span>{data.open.note}</span>{/if}</p>{/if}
{#if data.depiction}<img src={data.depiction} alt="" class="mt-4 max-w-full" />{#if data.depictionCredit}<p class="mt-1 text-xs text-muted">{data.depictionCredit}</p>{/if}{/if}

{#if data.flow}
  <ol class="mt-6">
    <li class="py-2 text-muted">{data.flow.start}</li>
    {#each data.flow.steps as s, i}
      <li class="py-3 border-t border-line">
        <p><span class="text-muted tabular mr-2">{i + 1}</span>{s.ask}</p>
        <p class="text-sm mt-1">Yes: {#if s.to}<a href={s.to}>{s.yes}</a>{:else}{s.yes}{/if}{#if s.note}<span class="text-muted"> · {s.note}</span>{/if}</p>
      </li>
    {/each}
    <li class="py-3 border-t border-line"><p>{#if data.flow.end.to}<a href={data.flow.end.to}>{data.flow.end.label}</a>{:else}{data.flow.end.label}{/if} <span class="text-muted text-sm">{data.flow.end.sub}</span></p>{#if data.flow.end.note}<p class="text-sm text-muted">{data.flow.end.note}</p>{/if}</li>
  </ol>
{/if}

{#if data.content}<div class="prose mt-6">{@html data.content}</div>{/if}

{#each data.kinds as k}
  {#if k.fields.length}
    <dl class="mt-6 grid grid-cols-[max-content_1fr] gap-x-4 gap-y-1 text-sm">
      {#each k.fields as f}<dt class="text-muted">{f.field}</dt><dd>{#if f.url}<a href={f.url} rel="noopener">{f.value}</a>{:else}{f.value}{/if}</dd>{/each}
    </dl>
  {/if}
{/each}

{#each data.related as g}
  <section class="mt-6">
    <h2 class="text-sm uppercase tracking-wide text-muted">{g.label}</h2>
    <ul class="mt-1">{#each g.items as it}<Card item={it} />{/each}</ul>
  </section>
{/each}

{#if data.tags.length}<p class="mt-6 text-xs text-muted">Tags: {data.tags.join(', ')}</p>{/if}

<footer class="mt-10 pt-3 border-t border-line text-xs text-muted">
  {#if data.provenance.sources?.length}
    <p>Sources:</p>
    <ol class="list-decimal ml-5">{#each data.provenance.sources as s, i}<li id="source-{i + 1}" class="scroll-mt-16 target:text-ink"><a href={s.url} rel="noopener">{s.title}</a>{#if s.date} ({s.date}){/if}</li>{/each}</ol>
  {/if}
  {#if data.provenance.reviewed}<p class="mt-1">Reviewed {data.provenance.reviewed}{#if data.provenance.reviewed_by}: {data.provenance.reviewed_by.replace(/\.\s*$/, '')}{/if}.</p>{/if}
  {#if data.provenance.origin}<p>Origin: {data.provenance.origin}{#if data.provenance.author}, {data.provenance.author}{/if}.</p>{/if}
  <p class="mt-1">This entry as <a href="/m/{data.id || 'index'}.md">markdown</a>.</p>
</footer>
