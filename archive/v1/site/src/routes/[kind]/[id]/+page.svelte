<script>
  import Dom from '$lib/Dom.svelte'
  import Flow from '$lib/Flow.svelte'
  let { data } = $props()
  const m = $derived(data.m)
  const KIND = { catalogue: 'Instrument', data: 'Data', questions: 'Question', stories: 'Story', concepts: 'Concept', flows: 'Flow', about: 'About this guide', playbook: 'Stage' }
</script>

<svelte:head>
  <title>{m.title} · {data.site.name}</title>
  <meta name="description" content={m.summary} />
  <link rel="alternate" type="text/markdown" href="/m/{m.kind}/{m.id}.md" />
</svelte:head>

<section class="entry">
  <div class="tags">
    <span class="label">{KIND[m.kind] || m.kind}{m.form ? ` · ${m.form}` : ''}</span>
    {#each m.domains as d}<Dom {d} />{/each}
  </div>
  <h1>{m.kind === 'questions' ? m.summary : m.title}</h1>

  {#if m.flow}
    <p class="muted">{m.summary}</p>
    <Flow flow={m.flow} />
  {:else if m.kind !== 'questions'}
    <div class="prose plain">{@html m.plain}</div>
  {/if}

  {#if m.factList.length}
    <dl class="factlist">
      {#each m.factList as f}
        <div><dt>{f.label}</dt><dd>{#if f.value === 'unknown'}<span class="unk">not yet reviewed</span>{:else}{f.value}{/if}</dd></div>
      {/each}
    </dl>
  {/if}

  {#if m.homepages.length}
    <div class="next">
      {#each m.homepages as h, i}<a class:quiet={i > 0} href={h.url} rel="noopener">Go to {h.name}</a>{/each}
    </div>
  {/if}

  {#if data.linked.length}
    <ul class="linked">
      {#each data.linked as l}
        <li><span class="label">{l.label}</span><a href={l.url}>{l.kind === 'questions' ? l.summary : l.title}</a>{#if l.kind !== 'questions'}<span class="muted">{l.summary}</span>{/if}</li>
      {/each}
    </ul>
  {/if}

  {#if m.detail}
    <details open={m.kind !== 'catalogue'}>
      <summary>The detail</summary>
      <div class="prose">{@html m.detail}</div>
    </details>
  {/if}

  {#if m.sources.length}
    <ol class="sources">{#each m.sources as s}<li><a href={s.url} rel="noopener">{s.title}</a></li>{/each}</ol>
  {/if}
  <p class="meta">Reviewed {m.reviewed}{m.reviewed_by ? ` (${m.reviewed_by})` : ''}. <a href="/m/{m.kind}/{m.id}.md">This entry as plain text</a>. Source file: <span class="mono">{m.file}</span></p>
</section>
