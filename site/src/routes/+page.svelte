<script>
  import Dom from '$lib/Dom.svelte'
  import Card from '$lib/Card.svelte'
  import Flow from '$lib/Flow.svelte'
  let { data } = $props()
  let q = $state('')
  const KIND = { catalogue: 'Instrument', data: 'Data', questions: 'Question', stories: 'Story', concepts: 'Concept' }
  const hits = $derived.by(() => {
    const words = q.toLowerCase().split(/\s+/).filter(Boolean)
    return words.length ? data.index.filter((m) => words.every((w) => m.hay.includes(w))) : []
  })
</script>

<svelte:head>
  <title>{data.site.headline} · {data.site.name}</title>
  <meta name="description" content={data.site.dek} />
</svelte:head>

<section class="open">
  <p class="label">{data.site.label}</p>
  <h1>{data.site.headline}</h1>
  <p class="dek">{data.site.dek}</p>

  <ul class="stories" id="stories">
    {#each data.stories as s}
      <li>
        <div class="tags">{#each s.domains.slice(0, 1) as d}<Dom {d} text={s.title} href={s.url} />{/each}</div>
        {@html s.plain}
        <span class="src">{s.source} · <a class="more" href={s.url}>the story</a></span>
      </li>
    {/each}
  </ul>

  <div class="ask">
    <label for="ask-input">What do you want to understand about your place?</label>
    <input id="ask-input" type="search" autocomplete="off" placeholder="Try: flood, river, land, policy" bind:value={q} />
    {#if q.trim()}
      {#if hits.length}
        <ul class="results">
          {#each hits as h}<li><a href={h.url}>{h.title}</a><span class="kind">{KIND[h.kind] || h.kind}</span></li>{/each}
        </ul>
      {:else}
        <p class="muted">Nothing in the guide matches that yet. <a href="/in-development/">See what is in development.</a></p>
      {/if}
    {/if}
  </div>
</section>

{#if data.flow}
  <section id="flow">
    <h2>{data.flow.title}</h2>
    <p class="muted">{data.flow.summary}</p>
    <Flow flow={data.flow} />
  </section>
{/if}

<section id="questions">
  <h2>What do you want to see?</h2>
  <div class="key">
    {#each data.domains as d}
      <a href="/domain/{d.id}/" class:empty={!d.count} style="--theme:{d.colour}"><img src="/themes/{d.id}.svg" alt="" />{d.name}<small>{d.count || 'soon'}</small></a>
    {/each}
  </div>
  <ul class="qs">
    {#each data.questions as m}
      <li>
        {#each m.domains as d}<Dom {d} text={m.title} />{/each}
        <a href={m.url}>{m.summary}</a>
        {#if m.with.length}<span class="with">{m.with.join(' · ')}</span>{/if}
      </li>
    {/each}
  </ul>
</section>

<section id="instruments">
  <h2>Instruments and data</h2>
  <p class="muted">Every tool, dataset and programme gets the same card. Plain facts on top, the machinery underneath.</p>
  <div class="cards">{#each data.instruments as m}<Card {m} />{/each}</div>
</section>

<section id="growing">
  <h2>Growing in the open</h2>
  <p class="muted">The guide starts small, with water. {data.hiddenTotal} more entries are drafted and waiting for someone to check them.</p>
  <p><a href="/in-development/">See what is in development</a></p>
</section>

<section id="machine">
  <h2>Point your own AI at the guide</h2>
  <p class="muted">Everything here is also plain text that an assistant can read and use.</p>
  <pre><a href="/llms.txt">/llms.txt</a>               index of every entry
/m/catalogue/en-roads.md  any entry as plain markdown
<a href="/index.json">/index.json</a>             the whole guide as data
<a href="/graph.json">/graph.json</a>             the links between entries
/pack/flooding.md         everything about one question</pre>
</section>
