<script>
  import Card from '$lib/Card.svelte'
  let { data } = $props()
  const d = $derived(data.d)
  const empty = $derived(!data.stories.length && !data.questions.length && !data.instruments.length)
</script>

<svelte:head><title>{d.name} · {data.site.name}</title></svelte:head>

<section class="entry">
  <span class="label">Domain</span>
  <div style="display:flex;align-items:center;gap:14px;border-bottom:3px solid {d.colour};padding-bottom:10px">
    <img src="/themes/{d.id}.svg" alt="" width="72" height="72" />
    <h1>{d.name}</h1>
  </div>
  {#if empty}
    <p class="plain">Nothing is published here yet. The guide is starting with water and growing outwards.</p>
    <p><a href="/in-development/">See what is in development</a></p>
  {/if}
  {#if data.stories.length}
    <ul class="linked">{#each data.stories as s}<li><span class="label">Story</span><a href={s.url}>{s.title}</a><span class="muted">{s.summary}</span></li>{/each}</ul>
  {/if}
  {#if data.questions.length}
    <ul class="linked">{#each data.questions as q}<li><span class="label">Question</span><a href={q.url}>{q.summary}</a></li>{/each}</ul>
  {/if}
  {#if data.instruments.length}<div class="cards">{#each data.instruments as m}<Card {m} />{/each}</div>{/if}
</section>
